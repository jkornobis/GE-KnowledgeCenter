#!/usr/bin/env node
/**
 * find_perturbations.mjs — the unbalanced body, and what its imbalance implies.
 *
 * The Composer's method, 2026-09-06: "tracking unbalanced one can reveal content." It is how
 * Neptune was found — Uranus did not move as the model said it should, and the residual, not the
 * observation, was the discovery. The same move on a knowledge graph: find the bodies that sit
 * furthest from what the structure predicts, and read what each residual implies.
 *
 * Why this and not shared neighbourhood. propose_vectors.mjs asks "who looks close?", which needs
 * existing density to say anything and is therefore weakest exactly where the gaps are — it found
 * 8 candidates in the 4%-dense protocols ring and none across any border. A residual needs no
 * density at all. Emptiness is itself a signal here.
 *
 * FOUR RESIDUALS, deliberately not combined into one score. They measure incommensurable things,
 * and averaging them would manufacture a precision none of them has. Instead a body is called a
 * STRONG candidate only when it is extreme on two or more independent residuals — which is this
 * corpus's own corroboration rule, applied to its own structure.
 *
 *   1  FLOW        directed vectors in versus out. S and T are undirected by the legend and are
 *                  excluded; counting them would report a recording convention as a finding.
 *   2  EVIDENCE    share of a body's vectors that are `asserted` against the corpus baseline.
 *                  A body far above baseline is held in place by claims nobody checked.
 *   3  KIN         share of neighbours outside the body's own family or cluster. High means either
 *                  a bridge the model does not name, or a body filed in the wrong place.
 *   4  MASS        degree against its own layer's mean. Not against the whole graph: the layers
 *                  differ by a factor of twenty in density, so a global comparison is meaningless.
 *
 * WARNING: a residual is a QUESTION PUT TO THE CORPUS, never a finding on its own. Every line below
 * says what would have to be true for the imbalance to be real, and answering that is reading, not
 * computing. Requires node >= 18. No dependencies.
 *
 *     node find_perturbations.mjs           ranked residuals and the strong candidates
 *     node find_perturbations.mjs --json    machine-readable
 */
import { readFileSync } from "node:fs";
const G = JSON.parse(readFileSync("graph/grand_ensemble.json", "utf8"));
const asJson = process.argv.includes("--json");

const DIRECTED = new Set(["D", "C", "E", "warrant", "grounds", "enacts"]);
const meta = new Map();
for (const [layer, L] of Object.entries(G.layers))
  for (const n of L.nodes)
    meta.set(n.id, { name: n.name || n.id, layer, group: n.family || n.cluster || "-" });
for (const n of G.movements.nodes) meta.set(n.id, { name: n.name || n.id, layer: "movements", group: "-" });

const stat = new Map([...meta.keys()].map((id) => [id, { in: 0, out: 0, undirected: 0, asserted: 0, total: 0, nb: new Set() }]));
const touch = (a, b, kind, status) => {
  if (!meta.has(a) || !meta.has(b) || a === b) return;
  const A = stat.get(a), B = stat.get(b);
  if (DIRECTED.has(kind)) { A.out++; B.in++; } else { A.undirected++; B.undirected++; }
  for (const [s, other] of [[A, b], [B, a]]) {
    s.total++; s.nb.add(other);
    if (status === "asserted") s.asserted++;
  }
};
for (const L of Object.values(G.layers)) for (const e of L.edges) touch(e.a, e.b, e.type, e.status);
for (const e of G.movements.edges) touch(e.a, e.b, e.kind, e.status);
for (const c of G.cross) touch(c.a, c.b, c.kind, c.status);

const baseline = (() => {
  let a = 0, t = 0;
  for (const s of stat.values()) { a += s.asserted; t += s.total; }
  return a / t;
})();
const layerMean = {};
for (const layer of new Set([...meta.values()].map((m) => m.layer))) {
  const ds = [...meta].filter(([, m]) => m.layer === layer).map(([id]) => stat.get(id).total);
  layerMean[layer] = ds.reduce((a, b) => a + b, 0) / (ds.length || 1);
}

const rows = [];
for (const [id, m] of meta) {
  const s = stat.get(id);
  const dir = s.in + s.out;
  const flow = dir >= 4 ? Math.abs(s.in - s.out) / dir : 0;
  const evidence = s.total >= 5 ? s.asserted / s.total - baseline : 0;
  // KIN is computed over SAME-LAYER neighbours only. A principle's chair neighbours are never in
  // its cluster, so counting them makes every well-connected body look misfiled — the residual
  // would then measure how many borders a node crosses, which is a different thing entirely.
  const sameLayer = [...s.nb].filter((n) => meta.get(n).layer === m.layer);
  const kinBase = sameLayer.length;
  const kin = kinBase >= 3 ? sameLayer.filter((n) => meta.get(n).group !== m.group).length / kinBase : 0;
  const mass = layerMean[m.layer] ? (s.total - layerMean[m.layer]) / layerMean[m.layer] : 0;
  rows.push({ id, name: m.name, layer: m.layer, group: m.group, in: s.in, out: s.out,
              undirected: s.undirected, total: s.total, flow, evidence, kin, kinBase, mass });
}

const extreme = {
  flow: (r) => r.flow >= 0.9 && r.in + r.out >= 4,
  evidence: (r) => r.evidence >= 0.35 && r.total >= 5,
  kin: (r) => r.kin >= 0.85 && r.kinBase >= 3,
  mass: (r) => Math.abs(r.mass) >= 0.9 && r.total >= 3,
};
for (const r of rows) r.hits = Object.entries(extreme).filter(([, f]) => f(r)).map(([k]) => k);

const IMPLIES = {
  flow: "everything depends on it and it depends on nothing (or the reverse) — either a genuine terminal, or outbound relations never written",
  evidence: "its position rests on claims nobody checked — the sentences that would earn them may exist unread, or may not exist",
  kin: "almost every neighbour IN ITS OWN LAYER sits outside its family or cluster — either an unnamed bridge, or a body filed in the wrong place",
  mass: "far off its own layer's mean — a hub nobody named, or a body whose relations are unrecorded",
};

const show = (key, label, sortBy, fmt, take = 5) => {
  const list = rows.filter((r) => extreme[key](r)).sort(sortBy).slice(0, take);
  console.log(`${label}   —   ${IMPLIES[key]}`);
  if (!list.length) console.log("   nothing extreme on this residual");
  for (const r of list) console.log(`   ${fmt(r)}`);
  console.log();
};

if (asJson) {
  console.log(JSON.stringify({ baseline, layerMean, rows: rows.filter((r) => r.hits.length) }, null, 2));
} else {
  console.log(`perturbations — ${rows.length} bodies, corpus asserted baseline ${(baseline * 100).toFixed(0)}%\n`);
  show("flow", "1 - FLOW", (a, b) => b.in + b.out - (a.in + a.out),
       (r) => `${String(r.in).padStart(3)} in / ${String(r.out).padStart(3)} out  (+${r.undirected} undirected)  ${r.name}`);
  show("evidence", "2 - EVIDENCE", (a, b) => b.evidence - a.evidence,
       (r) => `${(r.asserted = Math.round((r.evidence + baseline) * 100))}% asserted of ${String(r.total).padStart(3)}  ${r.name}`);
  show("kin", "3 - KIN", (a, b) => b.kin - a.kin,
       (r) => `${Math.round(r.kin * 100)}% of its ${r.kinBase} same-layer neighbours sit outside ${r.group}  ·  ${r.name}`);
  show("mass", "4 - MASS", (a, b) => Math.abs(b.mass) - Math.abs(a.mass),
       (r) => `${r.mass > 0 ? "+" : ""}${Math.round(r.mass * 100)}% against the ${r.layer} mean  ·  ${r.name}`);

  const strong = rows.filter((r) => r.hits.length >= 2).sort((a, b) => b.hits.length - a.hits.length);
  console.log(`STRONG CANDIDATES — extreme on two or more independent residuals: ${strong.length}`);
  for (const r of strong) console.log(`   ${r.name}  [${r.hits.join(" + ")}]`);
  if (!strong.length) console.log("   none. One residual alone is a question, not a candidate.");
  console.log(`\n   Each line above is a question for a reader, not a conclusion. What would make it`);
  console.log(`   real is a sentence in the corpus, and finding that is reading, not computing.`);
}
