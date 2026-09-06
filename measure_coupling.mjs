#!/usr/bin/env node
/**
 * measure_coupling.mjs — how principles and protocols actually couple.
 *
 * The Composer's question, 2026-09-06: "how design principle and protocole are coupled?" — asked
 * after an earlier attempt to draw it failed, which he put down to being too early. Part of the
 * answer is that it was early. The other part is measurable and is what this reports: the border
 * has a shape, and it is not the shape a diagram would want it to have.
 *
 * The `warrant` border runs protocol -> principle: a protocol requires the principle to exist.
 * `mandalas/border-protocols-principles.md` is the reasoning; this is the census.
 *
 * FOUR READINGS:
 *
 *   1  CLOSURE    protocols standing on no principle, principles nothing enacts. Both were
 *                 non-zero in July 2026 (10 protocols unwarranted of 29) and the border page
 *                 treats each as a finding rather than an illegitimacy.
 *   2  FAN-OUT    warrants per protocol against protocols per principle. Symmetric coupling and
 *                 fan-out are different systems, and the ratio says which this is.
 *   3  LOAD       which principles carry the most of the border. A claim that many practices lean
 *                 on is load-bearing in a way its own edge count does not show.
 *   4  MODULARITY do protocol families sit on principle clusters? This is the one a drawing
 *                 depends on: block structure is what makes a border diagram readable.
 *
 * WARNING: a concentration figure means nothing without a baseline. With six clusters and thirteen
 * edges, "54% from one cluster" sounds modular and may be exactly what random assignment produces.
 * So every family is compared against a NULL MODEL — the same number of warrants drawn at random
 * from the observed cluster distribution, 4000 times — and the z against that null is what is
 * reported. Without it this script would have called a 3-edge family the most modular in the
 * corpus, which is how a small denominator becomes a false finding.
 *
 * Requires node >= 18. No dependencies. Reads the graph, writes nothing.
 *
 *     node measure_coupling.mjs          the four readings
 *     node measure_coupling.mjs --json   machine-readable
 */
import { readFileSync } from "node:fs";
const G = JSON.parse(readFileSync("graph/grand_ensemble.json", "utf8"));
const asJson = process.argv.includes("--json");

const P = new Map(G.layers.principles.nodes.map((n) => [n.id, n]));
const R = new Map(G.layers.protocols.nodes.map((n) => [n.id, n]));
const pairs = [];
for (const c of G.cross) {
  if (c.kind !== "warrant") continue;
  const pr = R.has(c.a) ? c.a : c.b;
  const pn = pr === c.a ? c.b : c.a;
  if (R.has(pr) && P.has(pn)) pairs.push([pr, pn]);
}

const count = (arr) => arr.reduce((m, k) => m.set(k, (m.get(k) || 0) + 1), new Map());
const perProto = count(pairs.map(([pr]) => pr));
const perPrin = count(pairs.map(([, pn]) => pn));
const nameOf = (m, id) => m.get(id).name || id;

// ---- 4 · modularity against a null model
const clusterOfWarrant = pairs.map(([, pn]) => P.get(pn).cluster || "-");
const byFamily = new Map();
for (const [pr, pn] of pairs) {
  const f = R.get(pr).family || "-";
  if (!byFamily.has(f)) byFamily.set(f, []);
  byFamily.get(f).push(P.get(pn).cluster || "-");
}
// Fixed seed: an unreproducible null is not a baseline, it is a mood.
let seed = 20260906;
const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
const topShare = (rows) => Math.max(...count(rows).values()) / rows.length;
const modularity = [...byFamily].map(([family, rows]) => {
  const observed = topShare(rows);
  const sims = [];
  for (let i = 0; i < 4000; i++) {
    const s = Array.from({ length: rows.length }, () => clusterOfWarrant[Math.floor(rnd() * clusterOfWarrant.length)]);
    sims.push(topShare(s));
  }
  const mu = sims.reduce((a, b) => a + b, 0) / sims.length;
  const sd = Math.sqrt(sims.reduce((t, x) => t + (x - mu) ** 2, 0) / sims.length);
  return { family, n: rows.length, observed, expected: mu, z: sd ? (observed - mu) / sd : 0 };
}).sort((a, b) => b.n - a.n);

const wObs = modularity.reduce((t, m) => t + m.observed * m.n, 0) / pairs.length;
const wExp = modularity.reduce((t, m) => t + m.expected * m.n, 0) / pairs.length;

if (asJson) {
  console.log(JSON.stringify({ warrants: pairs.length, unwarranted: R.size - perProto.size,
    inert: P.size - perPrin.size, perProtocol: pairs.length / perProto.size,
    perPrinciple: pairs.length / perPrin.size, modularity, weighted: { observed: wObs, expected: wExp } }, null, 2));
} else {
  console.log(`warrant border — ${pairs.length} edges, ${R.size} protocols, ${P.size} principles\n`);
  console.log(`1 - CLOSURE`);
  console.log(`   protocols standing on no principle : ${R.size - perProto.size} of ${R.size}`);
  console.log(`   principles nothing enacts          : ${P.size - perPrin.size} of ${P.size}\n`);

  console.log(`2 - FAN-OUT`);
  console.log(`   principles per protocol  mean ${(pairs.length / perProto.size).toFixed(2)}  max ${Math.max(...perProto.values())}`);
  console.log(`   protocols per principle  mean ${(pairs.length / perPrin.size).toFixed(2)}  max ${Math.max(...perPrin.values())}`);
  console.log(`   Few claims, many practices. Symmetric coupling would read 1:1 here.\n`);

  console.log(`3 - LOAD - the principles carrying most of the border`);
  for (const [id, c] of [...perPrin].sort((a, b) => b[1] - a[1]).slice(0, 5))
    console.log(`   ${String(c).padStart(3)} protocols   ${nameOf(P, id)}`);
  console.log();

  console.log(`4 - MODULARITY - does a protocol family sit on one principle cluster?`);
  console.log(`   ${"family".padEnd(24)} ${"n".padStart(3)}   observed    null      z`);
  for (const m of modularity)
    console.log(`   ${m.family.slice(0, 24).padEnd(24)} ${String(m.n).padStart(3)}     ${(m.observed * 100).toFixed(0).padStart(3)}%      ${(m.expected * 100).toFixed(0).padStart(3)}%   ${m.z >= 0 ? "+" : ""}${m.z.toFixed(1)}`);
  console.log(`\n   weighted overall: observed ${(wObs * 100).toFixed(0)}%, null ${(wExp * 100).toFixed(0)}%`);
  console.log(`   A family only counts as modular where z clears the null by a real margin, and a`);
  console.log(`   family of three edges cannot clear anything - its null is already above 50%.`);
}
