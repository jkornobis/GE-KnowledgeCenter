#!/usr/bin/env node
/**
 * classify_bodies.mjs — Neptune, Pluto, or a belt nobody has named.
 *
 * The Composer's method, 2026-09-06, and it is the second half of "tracking unbalanced one can
 * reveal content":
 *
 *   "we know how to solve unbalanced subject: make them earn their place in the system, test if
 *    they are Neptune or Pluto, part of asteroid field we don't know yet... small connection
 *    reveals small gravity of this, especially if it's connected on only one planet, planet ring."
 *
 * find_perturbations.mjs finds the bodies that do not sit where the structure predicts. It stops
 * there on purpose. This asks the next question — WHAT KIND of thing each imbalance is — because
 * the three kinds need opposite work:
 *
 *   NEPTUNE   the imbalance predicts something findable. Its own neighbours are densely tied to
 *             each other and not to it, so there is a specific missing relation with an address.
 *             The work is to look for the sentence that earns it. This is the productive case.
 *
 *   PLUTO     the body is not singular at all. A cohort of its own layer shares its profile
 *             closely, so its odd standing came from how it was drawn rather than from what it
 *             is. The work is reclassification, never deletion — the corpus retires by naming
 *             what leaves and why.
 *
 *   BELT      it orbits no chair. Not one body to fix but a population nobody has named: a
 *             standing minority of the principles and protocols is bound to no chair at all, and
 *             THIS SCRIPT COUNTS IT — read the run, never this line. The work is to say what the
 *             set is. (Said "27 of the 92" until 2026-09-11, when the corpus held 95; a header
 *             that states a count it is itself able to compute is the defect #42 is about.)
 *
 * And the small-gravity reading, which is not a defect: a body bound to exactly ONE chair is that
 * chair's ring. Its low connection is its meaning, not its weakness — it belongs to one planet and
 * to nothing else, and a model that treats it as under-connected has misread it.
 *
 * WARNING: every verdict is a QUESTION, and Neptune is the only one that names where to look. A
 * Pluto verdict says the cohort exists, never that the body is unimportant — Pluto is still there.
 * Requires node >= 18. No dependencies. Reads the graph, writes nothing.
 *
 *     node classify_bodies.mjs           the census and the verdicts
 *     node classify_bodies.mjs --json    machine-readable
 */
import { readFileSync } from "node:fs";
const G = JSON.parse(readFileSync("graph/grand_ensemble.json", "utf8"));
const asJson = process.argv.includes("--json");

const DIRECTED = new Set(["D", "C", "E", "warrant", "grounds", "enacts"]);
const meta = new Map();
for (const [layer, L] of Object.entries(G.layers))
  for (const n of L.nodes) meta.set(n.id, { name: n.name || n.id, layer, group: n.family || n.cluster || "-" });
const chairs = new Set(G.layers.musicians.nodes.map((n) => n.id));

const nb = new Map([...meta.keys()].map((id) => [id, new Set()]));
const s = new Map([...meta.keys()].map((id) => [id, { in: 0, out: 0, asserted: 0, total: 0, chairs: new Set() }]));
const touch = (a, b, kind, status) => {
  if (!meta.has(a) || !meta.has(b) || a === b) return;
  nb.get(a).add(b); nb.get(b).add(a);
  if (DIRECTED.has(kind)) { s.get(a).out++; s.get(b).in++; }
  for (const [x, y] of [[a, b], [b, a]]) {
    const r = s.get(x); r.total++;
    if (status === "asserted") r.asserted++;
    if (chairs.has(y)) r.chairs.add(y);
  }
};
for (const L of Object.values(G.layers)) for (const e of L.edges) touch(e.a, e.b, e.type, e.status);
for (const c of G.cross) touch(c.a, c.b, c.kind, c.status);

const bodies = [...meta].filter(([, m]) => m.layer === "principles" || m.layer === "protocols").map(([id]) => id);

// ---- orbit class, from chair binding. Small connection is a reading, not a fault.
const orbit = (id) => {
  const c = s.get(id).chairs.size;
  return c === 0 ? "belt" : c === 1 ? "ring" : "planet-bound";
};

// ---- the Neptune test: do my own neighbours cluster around a place I am not?
// Same-layer neighbours only, because a cross-border triangle is a border definition, not a gap.
const neptune = (id) => {
  const mine = [...nb.get(id)].filter((n) => meta.get(n).layer === meta.get(id).layer);
  const predicted = new Map();
  for (const a of mine) for (const b of nb.get(a)) {
    if (b === id || nb.get(id).has(b)) continue;
    if (meta.get(b).layer !== meta.get(id).layer) continue;
    predicted.set(b, (predicted.get(b) || 0) + 1);
  }
  return [...predicted].filter(([, k]) => k >= 2).sort((a, b) => b[1] - a[1]);
};

// ---- the Pluto test: does a cohort of my own layer share my profile?
const profile = (id) => {
  const r = s.get(id);
  return { layer: meta.get(id).layer, deg: r.total, asserted: r.total ? r.asserted / r.total : 0, orbit: orbit(id) };
};
// A single tolerance was the wrong instrument. Run once at 0.25/0.15/min 5 it named two bodies;
// loosened across the plausible range it slides 2 -> 4 -> 10 -> 16 -> 17 with no plateau anywhere.
// A verdict that tracks its own threshold that smoothly is measuring the threshold. So the binary
// is replaced by a SCORE: the share of a 48-point grid at which a body is found typical of a
// cohort. Its inverse is the useful reading - a body no setting can find company for is singular.
const GRID = [];
for (const deg of [0.25, 0.5, 0.75, 1.0])
  for (const ass of [0.15, 0.25, 0.35])
    for (const min of [5, 3])
      for (const sameOrbit of [true, false]) GRID.push({ deg, ass, min, sameOrbit });

const plutoScore = (id) => {
  const p = profile(id);
  let hits = 0;
  for (const gset of GRID) {
    const n = bodies.filter((o) => {
      if (o === id) return false;
      const q = profile(o);
      return q.layer === p.layer && (!gset.sameOrbit || q.orbit === p.orbit)
        && Math.abs(q.deg - p.deg) <= Math.max(2, p.deg * gset.deg)
        && Math.abs(q.asserted - p.asserted) <= gset.ass;
    }).length;
    if (n >= gset.min) hits++;
  }
  return hits / GRID.length;
};

// ---- the unbalanced set, recomputed here so this script stands alone
const baseline = (() => { let a = 0, t = 0; for (const id of bodies) { a += s.get(id).asserted; t += s.get(id).total; } return a / t; })();
const layerMean = {};
for (const layer of ["principles", "protocols"]) {
  const ds = bodies.filter((id) => meta.get(id).layer === layer).map((id) => s.get(id).total);
  layerMean[layer] = ds.reduce((a, b) => a + b, 0) / ds.length;
}
const unbalanced = bodies.filter((id) => {
  const r = s.get(id), dir = r.in + r.out;
  const flow = dir >= 4 && Math.abs(r.in - r.out) / dir >= 0.9;
  const evid = r.total >= 5 && r.asserted / r.total - baseline >= 0.35;
  const mass = r.total >= 3 && Math.abs((r.total - layerMean[meta.get(id).layer]) / layerMean[meta.get(id).layer]) >= 0.9;
  return [flow, evid, mass].filter(Boolean).length >= 1;
});

// Neptune and Pluto are computed INDEPENDENTLY. The first version ran them as an if/else chain,
// which starved the second: 15 of 17 unbalanced bodies carry Neptune predictions and 4 are belt,
// so exactly one body ever reached the Pluto branch and its zero was an artefact of ordering, not
// a measurement. A body can perfectly well both predict a missing relation and be typical of a
// cohort - those answer different questions.
const verdicts = unbalanced.map((id) => {
  const n = neptune(id);
  return { id, name: meta.get(id).name, layer: meta.get(id).layer, orbit: orbit(id),
           neptune: n.length >= 2,
           predicted: n.slice(0, 3).map(([b, k]) => ({ name: meta.get(b).name, via: k })),
           typicality: +plutoScore(id).toFixed(2),
           asserted: +((s.get(id).asserted / (s.get(id).total || 1)) * 100).toFixed(0), degree: s.get(id).total };
});

const census = { belt: 0, ring: 0, "planet-bound": 0 };
for (const id of bodies) census[orbit(id)]++;

if (asJson) { console.log(JSON.stringify({ census, verdicts }, null, 2)); }
else {
  console.log(`orbit census over ${bodies.length} principles and protocols`);
  console.log(`   planet-bound (2+ chairs)  ${String(census["planet-bound"]).padStart(3)}`);
  console.log(`   ring (exactly one chair)  ${String(census.ring).padStart(3)}   small gravity is the reading, not the fault`);
  console.log(`   belt (no chair at all)    ${String(census.belt).padStart(3)}   a population, not a set of defects\n`);

  const nep = verdicts.filter((v) => v.neptune);
  console.log(`NEPTUNE  (${nep.length} of ${verdicts.length} unbalanced)   its own neighbours cluster around somewhere it is not,`);
  console.log(`so the imbalance has an address. The number after each name is how many neighbours it shares.`);
  for (const v of nep.slice(0, 8)) {
    console.log(`   ${v.name}  ·  ${v.layer}, degree ${v.degree}, ${v.asserted}% asserted, ${v.orbit}`);
    console.log(`        predicted: ${v.predicted.map((p) => `${p.name} (${p.via})`).join("  ·  ")}`);
  }
  if (nep.length > 8) console.log(`   ... and ${nep.length - 8} more`);

  console.log(`\nSINGULARITY  -  1 minus typicality, over a 48-point tolerance grid. A body no setting`);
  console.log(`can find company for is genuinely singular; a body typical everywhere got its standing`);
  console.log(`from how it was drawn. This is a ranking, never a verdict - the binary it replaces slid`);
  console.log(`from 2 bodies to 17 across the same grid, with no plateau to stand on.`);
  for (const v of [...verdicts].sort((a, b) => a.typicality - b.typicality))
    console.log(`   ${String(Math.round((1 - v.typicality) * 100)).padStart(3)}%  ${v.name.slice(0, 44).padEnd(44)} deg ${String(v.degree).padStart(3)}  ${String(v.asserted).padStart(3)}% asserted  ${v.orbit}`);

  console.log(`\nEvery line is a question. Neptune is the only one that names where to look; a high`);
  console.log(`singularity says the corpus has nothing else like this body, never that it is wrong.`);
}
