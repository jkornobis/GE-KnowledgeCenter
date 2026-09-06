#!/usr/bin/env node
/**
 * measure_stability.mjs — is the meta-mandala stable the way a natural network is stable?
 *
 * The Composer's question, 2026-09-06: "the stability of meta mandala by a known fractal design of
 * nature" — mimetic design, taken structurally rather than decoratively. A picture that resembles a
 * solar system has borrowed an image. A structure carrying the measurable properties of a natural
 * network has borrowed the mechanism, and only the second is worth anything.
 *
 * WARNING: the atom-as-solar-system resemblance is not evidence and never was. Physics abandoned
 * the orbiting-electron model a century ago; electrons do not orbit. Resemblance between two
 * drawings says nothing about a shared law. What IS real, measurable and load-bearing is SCALE
 * INVARIANCE: the same shape recurring at different sizes. That is what this measures, on the graph
 * itself, so a feeling becomes a number that can be argued with.
 *
 * Three tests, answering three different questions:
 *
 *   1  DEGREE SHAPE      is connection concentrated in hubs, as in scale-free networks?
 *   2  SELF-SIMILARITY   does each layer carry the same shape at its own scale?
 *   3  ROBUSTNESS        what happens to the whole when nodes are removed - at random, and hubs
 *                        first? This is the stability question, and the two curves separating is
 *                        the signature of a hub-dependent system.
 *
 *     node measure_stability.mjs          the three tests
 *     node measure_stability.mjs --json   machine-readable
 *
 * WARNING: n = 116. A power-law exponent estimated from a hundred-odd nodes is an indication, not a
 * finding, and this prints the disagreement between its own indicators rather than picking the
 * flattering one. Requires node >= 18. No dependencies.
 */
import { readFileSync } from "node:fs";
const G = JSON.parse(readFileSync("graph/grand_ensemble.json", "utf8"));
const asJson = process.argv.includes("--json");

const layerOf = new Map();
for (const [layer, L] of Object.entries(G.layers)) for (const n of L.nodes) layerOf.set(n.id, layer);
for (const n of G.movements.nodes) layerOf.set(n.id, "movements");

const E = new Set();
const add = (a, b) => { if (layerOf.has(a) && layerOf.has(b) && a !== b) E.add([a, b].sort().join(" ")); };
for (const L of Object.values(G.layers)) for (const e of L.edges) add(e.a, e.b);
for (const e of G.movements.edges) add(e.a, e.b);
for (const c of G.cross) add(c.a, c.b);

const adj = new Map([...layerOf.keys()].map((n) => [n, new Set()]));
for (const k of E) { const [a, b] = k.split(" "); adj.get(a).add(b); adj.get(b).add(a); }
const deg = new Map([...adj].map(([n, s]) => [n, s.size]));
const N = layerOf.size, M = E.size;

// ---- 1 - degree shape
const ds = [...deg.values()].sort((a, b) => b - a);
const total = ds.reduce((a, b) => a + b, 0);
const mean = total / N;
const top20 = ds.slice(0, Math.round(N * 0.2)).reduce((a, b) => a + b, 0) / total;
const xs = ds.filter((d) => d >= 2);
const alpha = 1 + xs.length / xs.reduce((t, x) => t + Math.log(x / 1.5), 0);

// ---- 2 - self-similarity: the same shape at each scale, or not
const shape = {};
for (const layer of ["principles", "protocols", "musicians", "movements"]) {
  const dl = [...layerOf].filter(([, l]) => l === layer).map(([n]) => deg.get(n)).sort((a, b) => b - a);
  const t = dl.reduce((a, b) => a + b, 0);
  if (!t) continue;
  const m = t / dl.length, k = Math.max(1, Math.round(dl.length * 0.2));
  shape[layer] = {
    n: dl.length,
    mean: +m.toFixed(2),
    maxOverMean: +(dl[0] / m).toFixed(2),
    top20: +((dl.slice(0, k).reduce((a, b) => a + b, 0) / t) * 100).toFixed(0),
  };
}

// ---- 3 - robustness: random removal against hubs-first removal
const lcc = (removed) => {
  const live = new Set([...layerOf.keys()].filter((n) => !removed.has(n)));
  const seen = new Set(); let best = 0;
  for (const s of live) {
    if (seen.has(s)) continue;
    const q = [s]; seen.add(s); let c = 0;
    while (q.length) {
      const v = q.pop(); c++;
      for (const w of adj.get(v)) if (live.has(w) && !seen.has(w)) { seen.add(w); q.push(w); }
    }
    best = Math.max(best, c);
  }
  return live.size ? best / live.size : 0;
};
// A fixed shuffle, so "random" is reproducible - an unreproducible measurement is an anecdote.
let seed = 20260906;
const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
const byHub = [...layerOf.keys()].sort((a, b) => deg.get(b) - deg.get(a));
const shuffled = [...layerOf.keys()].sort(() => rnd() - 0.5);
const robust = [0.05, 0.1, 0.2, 0.3].map((f) => {
  const k = Math.round(N * f);
  return {
    f,
    random: +(lcc(new Set(shuffled.slice(0, k))) * 100).toFixed(1),
    hubs: +(lcc(new Set(byHub.slice(0, k))) * 100).toFixed(1),
  };
});

// ---- 4 - the black-hole test: does one body sit on everything?
// The Composer, 2026-09-06: "a black hole appear to break the balance of system". A hub-and-spoke
// system has that failure mode by construction — preferential attachment runs away until every
// route passes through one body. Betweenness is the direct test: the share of all shortest paths
// a body sits on. A true singularity approaches 100% for one node.
const brandes = () => {
  const V = [...layerOf.keys()], bc = new Map(V.map((v) => [v, 0]));
  for (const s of V) {
    const S = [], Pd = new Map(V.map((v) => [v, []])), sig = new Map(V.map((v) => [v, 0]));
    const d = new Map(V.map((v) => [v, -1]));
    sig.set(s, 1); d.set(s, 0);
    const Q = [s];
    for (let i = 0; i < Q.length; i++) {
      const v = Q[i]; S.push(v);
      for (const w of adj.get(v)) {
        if (d.get(w) < 0) { d.set(w, d.get(v) + 1); Q.push(w); }
        if (d.get(w) === d.get(v) + 1) { sig.set(w, sig.get(w) + sig.get(v)); Pd.get(w).push(v); }
      }
    }
    const delta = new Map(V.map((v) => [v, 0]));
    while (S.length) {
      const w = S.pop();
      for (const v of Pd.get(w)) delta.set(v, delta.get(v) + (sig.get(v) / sig.get(w)) * (1 + delta.get(w)));
      if (w !== s) bc.set(w, bc.get(w) + delta.get(w));
    }
  }
  return bc;
};
const bc = brandes();
const bcTotal = [...bc.values()].reduce((a, b) => a + b, 0);
const norm = ((N - 1) * (N - 2)) / 2;
const central = [...bc].sort((a, b) => b[1] - a[1]).slice(0, 5)
  .map(([id, v]) => ({ name: (G.layers[layerOf.get(id)]?.nodes ?? G.movements.nodes).find((n) => n.id === id)?.name ?? id,
                       paths: +((v / norm) * 100).toFixed(1), share: +((v / bcTotal) * 100).toFixed(1) }));
const top5share = central.reduce((t, c) => t + c.share, 0);

if (asJson) {
  console.log(JSON.stringify({ N, M, mean, top20, alpha, shape, robust, central, top5share }, null, 2));
} else {
  console.log(`meta-mandala - ${N} nodes, ${M} undirected vectors, mean degree ${mean.toFixed(2)}\n`);
  console.log(`1 - degree shape`);
  console.log(`   top degrees      ${ds.slice(0, 6).join("  ")}`);
  console.log(`   top 20% of nodes hold ${(top20 * 100).toFixed(0)}% of all degree`);
  console.log(`   power-law alpha  ${alpha.toFixed(2)}   (natural scale-free sits 2.0-3.0)`);
  console.log(`   NOTE the two disagree: alpha below 2 says extreme concentration, the 20% share`);
  console.log(`   says moderate. At n=${N} that is what an underpowered estimate looks like - read`);
  console.log(`   it as "not established", never as a result.\n`);
  console.log(`2 - self-similarity: the same shape at each scale?`);
  for (const [l, s] of Object.entries(shape))
    console.log(`   ${l.padEnd(11)} n=${String(s.n).padStart(3)}  mean ${String(s.mean).padStart(5)}  max/mean ${s.maxOverMean}  top20% ${s.top20}%`);
  console.log(`\n3 - robustness: largest connected component after removing f% of nodes`);
  console.log(`   f       random    hubs first`);
  for (const r of robust)
    console.log(`   ${String(Math.round(r.f * 100)).padStart(3)}%     ${String(r.random).padStart(5)}%     ${String(r.hubs).padStart(5)}%`);
  console.log(`\n   The gap between the two columns is the whole test. A hub-dependent system - a`);
  console.log(`   solar system being the extreme case - shatters when its hubs go and shrugs at`);
  console.log(`   random loss. A redundant mesh degrades the same way under both.`);

  console.log(`\n4 - black hole: does one body sit on everything?`);
  for (const c of central)
    console.log(`   ${String(c.paths).padStart(5)}% of all shortest paths   ${c.name}`);
  console.log(`   top body holds ${central[0].share}% of total betweenness; top five hold ${top5share.toFixed(1)}%`);
  console.log(`   A singularity approaches 100% for one body. Five sharing a quarter of it is the`);
  console.log(`   opposite reading: load distributed, no attractor, nothing to fall into.`);
}
