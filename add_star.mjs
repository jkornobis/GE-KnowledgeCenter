#!/usr/bin/env node
/**
 * add_star.mjs — what happens to the meta-mandala when the Composer is a node.
 *
 * The finding this exists to test, from issue #6 (closed 2026-09-07): twenty of the twenty-seven
 * chairless bodies are not a belt. They are THE CORONA — the Composer↔orchestra interface and the
 * conduct of a session — and they orbit nothing only because the thing they surround is absent
 * from the graph. `graph/grand_ensemble.json` has three body layers plus movements; its
 * `musicians` layer holds exactly the twelve chairs, and there is no node that IS the Composer.
 *
 * The Composer, 2026-09-06:
 *
 *   "Composer is the entry point of system, using GE I see the system make revolution around
 *    Facilitator, Auditor been a satellite of Facilitator like each family of musicians."
 *   "look the color circle, it's a solar system, White star in center."
 *
 * ⚠️ THIS SCRIPT WRITES NOTHING, AND THAT IS NOT A STYLE CHOICE. The corpus these bodies come
 * from lives at the Workshop; only the derived graph lives here. Adding a node to a derived
 * artefact would be inventing evidence. So the star is injected IN MEMORY, the deltas are
 * measured, and any real change is proposed to the corpus's owner as an issue.
 *
 * ⚠️ AND ONE VARIANT IS CIRCULAR ON PURPOSE, so the honest one has something to be compared to.
 * Binding the star to exactly the bodies that orbit nothing will of course empty the belt — that
 * is arithmetic, not a finding. Three bindings are run instead:
 *
 *   BELT     the star takes all 27 chairless bodies          circular, the upper bound
 *   CORONA   the star takes the 20 ruled Corona bodies       circular, the ruling's own shape
 *   NAMED    the star takes only bodies whose OWN TEXT       derived from the data, non-circular
 *            names the Composer — nothing hand-picked
 *
 * NAMED is the one that can surprise. If the star is a real body, the bodies that talk about it
 * should already cluster, and its centrality should not depend on being handed the belt.
 *
 * What is measured, and why each one:
 *
 *   1  ORBIT CENSUS    belt / ring / planet-bound over the 92, before and after. The Corona
 *                      claim predicts the belt collapses to Spacetime plus two singletons.
 *   2  BLACK HOLE      the Composer's own worry — "a black hole appear to break the balance of
 *                      system". Betweenness share, top-5 concentration, and the star's own rank.
 *                      A centre that takes a quarter of all shortest paths is a singularity, and
 *                      the estate would have manufactured the very failure it fears.
 *   3  DISTANCE        mean shortest path. A hub collapses distances; if the star shortens the
 *                      whole graph sharply, it is a shortcut rather than a centre.
 *
 * Betweenness is Brandes, identical to `measure_stability.mjs`, so the numbers compare directly.
 * Requires node >= 18. No dependencies. Reads the graph, writes nothing.
 *
 *     node add_star.mjs           the three bindings and their deltas
 *     node add_star.mjs --json    machine-readable
 */
import { readFileSync } from "node:fs";
const G = JSON.parse(readFileSync("graph/grand_ensemble.json", "utf8"));
const asJson = process.argv.includes("--json");
const STAR = "composer:composer";

// ---- the Composer's ruling of 2026-09-07, carried as data rather than re-derived.
// Naming a population is authorship; these two names are his, and this script only uses them.
const SPACETIME = new Set(["The Fractal Loop", "The Opera House Principle",
  "The Nested Opera Houses Corollary", "The Non-Euclidean Corollary", "The Harmony Principle"]);
const SINGLETONS = new Set(["Spotlighting", "The Empty Hands"]);

const layerOf = new Map(), nameOf = new Map();
for (const [layer, L] of Object.entries(G.layers))
  for (const n of L.nodes) { layerOf.set(n.id, layer); nameOf.set(n.id, n.name || n.id); }
for (const n of G.movements.nodes) { layerOf.set(n.id, "movements"); nameOf.set(n.id, n.name || n.id); }
const chairs = new Set(G.layers.musicians.nodes.map((n) => n.id));
const bodies = [...layerOf].filter(([, l]) => l === "principles" || l === "protocols").map(([id]) => id);

const baseEdges = new Set();
const addE = (S, a, b) => { if (a !== b) S.add([a, b].sort().join(" ")); };
for (const L of Object.values(G.layers)) for (const e of L.edges) addE(baseEdges, e.a, e.b);
for (const e of G.movements.edges) addE(baseEdges, e.a, e.b);
for (const c of G.cross) addE(baseEdges, c.a, c.b);

// ---- who the star would take, three ways
const chairsOf = (E) => {
  const m = new Map([...layerOf.keys()].map((id) => [id, new Set()]));
  for (const k of E) { const [a, b] = k.split(" ");
    if (chairs.has(b)) m.get(a).add(b); if (chairs.has(a)) m.get(b).add(a); }
  return m;
};
const baseChairs = chairsOf(baseEdges);
const belt = bodies.filter((id) => baseChairs.get(id).size === 0);
const corona = belt.filter((id) => !SPACETIME.has(nameOf.get(id)) && !SINGLETONS.has(nameOf.get(id)));

// NAMED — derived, nothing hand-picked: every node whose id or its own written fields say Composer.
const textOf = (n) => [n.id, n.name, n.title, n.seed, ...(n.sourceNotes || [])].filter(Boolean).join(" ").toLowerCase();
const named = [];
for (const [layer, L] of Object.entries(G.layers)) for (const n of L.nodes)
  if ((layer === "principles" || layer === "protocols") && /composer/.test(textOf(n))) named.push(n.id);

const BINDINGS = [["BELT", belt], ["CORONA", corona], ["NAMED", named]];

// ---- metrics, all over the same graph object so the numbers compare
const build = (extra) => {
  const E = new Set(baseEdges);
  for (const id of extra) addE(E, STAR, id);
  const V = [...layerOf.keys()]; if (extra.length) V.push(STAR);
  const adj = new Map(V.map((n) => [n, new Set()]));
  for (const k of E) { const [a, b] = k.split(" ");
    if (adj.has(a) && adj.has(b)) { adj.get(a).add(b); adj.get(b).add(a); } }
  return { V, adj, E };
};
const brandes = ({ V, adj }) => {
  const bc = new Map(V.map((v) => [v, 0]));
  let pathSum = 0, pathCount = 0;
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
    for (const v of V) if (v !== s && d.get(v) > 0) { pathSum += d.get(v); pathCount++; }
    const delta = new Map(V.map((v) => [v, 0]));
    while (S.length) {
      const w = S.pop();
      for (const v of Pd.get(w)) delta.set(v, delta.get(v) + (sig.get(v) / sig.get(w)) * (1 + delta.get(w)));
      if (w !== s) bc.set(w, bc.get(w) + delta.get(w));
    }
  }
  return { bc, meanPath: pathSum / pathCount };
};
const measure = (extra) => {
  const g = build(extra);
  const { bc, meanPath } = brandes(g);
  const tot = [...bc.values()].reduce((a, b) => a + b, 0);
  const ranked = [...bc].sort((a, b) => b[1] - a[1]);
  const top5 = ranked.slice(0, 5).map(([id, v]) => ({ name: id === STAR ? "★ the Composer" : nameOf.get(id), share: +((v / tot) * 100).toFixed(1) }));
  const ch = chairsOf(g.E);
  const cen = { belt: 0, ring: 0, planet: 0 };
  for (const id of bodies) { const c = ch.get(id).size + (extra.includes(id) ? 1 : 0);
    cen[c === 0 ? "belt" : c === 1 ? "ring" : "planet"]++; }
  const starRank = ranked.findIndex(([id]) => id === STAR);
  return { census: cen, top5, top5share: +top5.reduce((t, c) => t + c.share, 0).toFixed(1),
    meanPath: +meanPath.toFixed(3), starDeg: extra.length,
    starShare: starRank < 0 ? 0 : +((bc.get(STAR) / tot) * 100).toFixed(1),
    starRank: starRank < 0 ? null : starRank + 1, N: g.V.length };
};

const base = measure([]);
const runs = BINDINGS.map(([label, ids]) => [label, ids, measure(ids)]);

if (asJson) {
  console.log(JSON.stringify({ base, runs: runs.map(([l, ids, r]) => ({ binding: l, n: ids.length, ...r })) }, null, 2));
} else {
  console.log(`add_star — the meta-mandala with and without a centre\n`);
  console.log(`BASELINE  ${base.N} nodes, no star`);
  console.log(`   orbit census   belt ${base.census.belt}  ring ${base.census.ring}  planet-bound ${base.census.planet}`);
  console.log(`   top-5 betweenness share  ${base.top5share}%   mean path ${base.meanPath}`);
  for (const c of base.top5) console.log(`      ${String(c.share).padStart(5)}%  ${c.name}`);
  for (const [label, ids, r] of runs) {
    console.log(`\n${label}  — the star takes ${ids.length} bodies`);
    console.log(`   orbit census   belt ${r.census.belt}  ring ${r.census.ring}  planet-bound ${r.census.planet}`);
    console.log(`   star: degree ${r.starDeg}, ${r.starShare}% of all shortest paths, rank ${r.starRank} of ${r.N}`);
    console.log(`   top-5 share ${r.top5share}%  (was ${base.top5share}%)   mean path ${r.meanPath}  (was ${base.meanPath})`);
    for (const c of r.top5) console.log(`      ${String(c.share).padStart(5)}%  ${c.name}`);
  }
  console.log(`\nNAMED is the only non-circular binding. BELT and CORONA empty the belt by construction;`);
  console.log(`what they can still say is what the star does to CONCENTRATION, which is not definitional.`);
}
