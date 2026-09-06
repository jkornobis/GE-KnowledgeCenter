#!/usr/bin/env node
/**
 * propose_vectors.mjs — candidate vectors from shared neighbourhood, and nothing more.
 *
 * The Composer's hypothesis, 2026-09-06: *"we can find new vectors by spatial mathematics between
 * the dots."* This is the cheapest and most interpretable form of it. Two nodes that already
 * connect to many of the same things are candidates to connect to each other — Adamic-Adar, which
 * discounts a shared neighbour in proportion to how many things it touches, so agreeing on a hub
 * counts for little and agreeing on a rare node counts for a lot.
 *
 * ⚠️ **NOTHING THIS PRINTS IS AN EDGE.** Every output is a `hypothesis` in the graph's own
 * vocabulary — *proposed, not yet grounded* — and the graph carries **zero** of those today. A
 * candidate is a question put to the corpus, never an edge written into it: this library already
 * measured that 83% of its principles graph rests on a drawing's authority alone, and adding
 * machine-found edges as fact would repeat that failure faster.
 *
 * ⚠️ **A score is not evidence.** The method is validated below by hold-out rather than asserted:
 * a sample of real edges is hidden, the method is re-run blind, and what it recovers is reported.
 * A recovery rate is the only thing that makes a rank mean anything.
 *
 *     node propose_vectors.mjs             top candidates + the hold-out measurement
 *     node propose_vectors.mjs --top 40    more of them
 *     node propose_vectors.mjs --json      machine-readable
 *
 * Requires node ≥ 18. No dependencies.
 */
import { readFileSync } from "node:fs";

const G = JSON.parse(readFileSync("graph/grand_ensemble.json", "utf8"));
const arg = (f, d) => { const i = process.argv.indexOf(f); return i > 0 ? process.argv[i + 1] : d; };
const TOP = Number(arg("--top", 25));
const asJson = process.argv.includes("--json");

// ---- one undirected network over every layer, because a border edge is a vector like any other
const node = new Map();                                   // id -> {id, name, layer}
for (const [layer, L] of Object.entries(G.layers))
  for (const n of L.nodes) node.set(n.id, { id: n.id, name: n.name || n.id, layer });
for (const n of G.movements.nodes) node.set(n.id, { id: n.id, name: n.name || n.id, layer: "movements" });

const edges = [];
for (const L of Object.values(G.layers)) for (const e of L.edges) edges.push([e.a, e.b]);
for (const e of G.movements.edges) edges.push([e.a, e.b]);
for (const c of G.cross) edges.push([c.from ?? c.a, c.to ?? c.b]);

const key = (a, b) => (a < b ? a + "|" + b : b + "|" + a);
const build = (list) => {
  const adj = new Map(), seen = new Set();
  for (const [a, b] of list) {
    if (!a || !b || a === b || !node.has(a) || !node.has(b)) continue;
    seen.add(key(a, b));
    if (!adj.has(a)) adj.set(a, new Set());
    if (!adj.has(b)) adj.set(b, new Set());
    adj.get(a).add(b); adj.get(b).add(a);
  }
  return { adj, seen };
};

// Adamic-Adar: a shared neighbour is worth 1/log(its degree). Agreeing on a hub proves little.
const score = ({ adj, seen }) => {
  const ids = [...node.keys()], out = [];
  for (let i = 0; i < ids.length; i++) for (let j = i + 1; j < ids.length; j++) {
    const a = ids[i], b = ids[j];
    if (seen.has(key(a, b))) continue;
    const A = adj.get(a), B = adj.get(b);
    if (!A || !B) continue;
    const shared = [...A].filter((n) => B.has(n));
    if (shared.length < 2) continue;                      // one shared neighbour is noise
    const s = shared.reduce((t, n) => t + 1 / Math.log(Math.max(adj.get(n).size, 2)), 0);
    out.push({ a, b, shared, score: s });
  }
  return out.sort((x, y) => y.score - x.score);
};

// ---- hold-out: hide 10% of real edges, re-run blind, report what comes back
const seedRand = (s) => () => (s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
const rand = seedRand(20260906);                          // fixed, so the number is reproducible
const shuffled = [...edges].sort(() => rand() - 0.5);
const hideN = Math.round(edges.length * 0.1);
const hidden = new Set(shuffled.slice(0, hideN).map(([a, b]) => key(a, b)));
const blind = score(build(shuffled.slice(hideN)));
const recoveredAt = (k) => blind.slice(0, k).filter((c) => hidden.has(key(c.a, c.b))).length;

const full = score(build(edges));
const BORDER = { "musicians|protocols": "enacts", "musicians|principles": "grounds", "principles|protocols": "warrant" };
const kindOf = (a, b) => {
  const la = node.get(a).layer, lb = node.get(b).layer;
  return la === lb ? `internal (${la})` : BORDER[[la, lb].sort().join("|")] ?? `cross (${la}↔${lb})`;
};

// ---- density, because a dense ring makes every one of its pairs look close
// The chairs ring is 12 nodes and 50 edges — 76% of the 66 possible. Any two chairs therefore
// share half the ring, and the score reports that density rather than any discovery. Candidates
// are grouped by category so a saturated ring cannot crowd out the sparse ones, which is where an
// unrecorded relation would actually live.
const density = {};
for (const [layer, L] of Object.entries(G.layers)) {
  const n = L.nodes.length;
  density[layer] = { nodes: n, edges: L.edges.length, pct: Math.round((L.edges.length / (n * (n - 1) / 2)) * 100) };
}

const byKind = new Map();
for (const c of full) {
  const k = kindOf(c.a, c.b);
  if (!byKind.has(k)) byKind.set(k, []);
  byKind.get(k).push(c);
}

if (asJson) {
  console.log(JSON.stringify({ holdout: { hidden: hideN, top100: recoveredAt(100) }, density, candidates: full.slice(0, TOP) }, null, 2));
} else {
  console.log(`hold-out — ${hideN} real vectors hidden, method re-run blind`);
  console.log(`  recovered in its own top 100 : ${recoveredAt(100)} of ${hideN}`);
  console.log(`  recovered in its own top 500 : ${recoveredAt(500)} of ${hideN}`);
  console.log(`  (a rank is worth what this number says it is worth, and nothing more)\n`);
  console.log("ring density — a saturated ring makes all of its pairs look close:");
  for (const [l, d] of Object.entries(density))
    console.log(`  ${l.padEnd(11)} ${String(d.nodes).padStart(3)} nodes  ${String(d.edges).padStart(4)} edges  ${String(d.pct).padStart(3)}% of possible`);
  console.log();
  console.log(`${full.length} candidate pairs share 2+ neighbours and no edge, grouped by what each would be:\n`);
  const per = Math.max(2, Math.round(TOP / byKind.size));
  for (const [k, list] of [...byKind].sort((x, y) => y[1].length - x[1].length)) {
    console.log(`── ${k} — ${list.length} candidates, top ${Math.min(per, list.length)}`);
    for (const c of list.slice(0, per)) {
      console.log(`  ${c.score.toFixed(2)}  ${node.get(c.a).name}  ⟷  ${node.get(c.b).name}`);
      console.log(`        shares: ${c.shared.map((s) => node.get(s).name).join(" · ")}`);
    }
    console.log();
  }
  console.log("Every line above is a HYPOTHESIS. None is an edge until a sentence in the corpus earns it.");
}
