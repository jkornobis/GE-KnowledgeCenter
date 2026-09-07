#!/usr/bin/env node
/**
 * render_solar.mjs — the meta-mandala as a solar system, drawn from the graph.
 *
 * THE ONLY SCRIPT IN THIS BUNDLE THAT WRITES. The other six read `graph/grand_ensemble.json`
 * and produce numbers; this one produces a picture, and a picture is an artefact rather than a
 * measurement. It writes exactly one file, named on the command line, and touches nothing else.
 *
 *     node render_solar.mjs > solar.svg
 *
 * ---------------------------------------------------------------------------------------------
 * WHAT DECIDES WHAT, AND WHO RULED IT
 *
 * Every mapping below is either a Composer ruling or a measurement. None is a preference of the
 * renderer, because a drawing that invents its own encoding cannot be argued with.
 *
 *   ANGLE   = sector.  13 of them — 6 principle clusters, 7 protocol families — the same 13 the
 *             four candidate wheels used.
 *   RADIUS  = evidence, and it runs INWARD.  The Composer, 2026-09-06: "make them earn their
 *             place in the system". A body whose vectors are all `asserted` has earned nothing
 *             and sits on the rim; one whose vectors are `earned` or `corroborated` sits close in.
 *   HUE     = the sector again, so a ring crosses every quadrant of colour.
 *   SATURATION = CONSTANT PER RING.  His ruling, 2026-09-06: "orbits crossing every quadrant of
 *             colors but stable at same saturation level." The ring is what holds still.
 *   SIZE    = degree.  Small connection is small gravity — his reading, and not a defect.
 *
 * ⚠️ THE EVIDENCE SCALAR IS DEFINED HERE AND IS NOT THE ONE IN ISSUE #8.
 * That issue records an evidence distribution of 14·9·33·19·12·2·3 over seven rings. Five
 * candidate formulations were tried against it on 2026-09-07 — asserted share, its inverse,
 * earned share, (earned+corroborated)/total, and a half-weighted blend — and NONE reproduces it.
 * The original is not recoverable from this graph. So this render states its own and claims no
 * continuity: evidence = (earned + corroborated) / total vectors. Quoting the old numbers beside
 * a scalar that does not produce them would be the worse error.
 *
 * ---------------------------------------------------------------------------------------------
 * THE THREE THINGS THAT ARE NOT BODIES
 *
 * THE STAR — the Composer, at the centre, and the graph does not contain him. `musicians` holds
 * exactly the twelve chairs; there are five nodes ABOUT him and none that IS him (issue #6).
 * He is drawn at the size his BETWEENNESS earns and no larger: `add_star.mjs` measured him at
 * 4.9% of shortest paths, RANK 6 — behind the Software Architect, Episteme vs. doxa, How rules
 * actually hold, the Agile Auditor and the Agile Facilitator. A star drawn with the weight of a
 * singularity would assert 100% where the corpus says 4.9%.
 *
 * THE CORONA — the twenty bodies that orbit no chair because they orbit HIM: the interface and
 * the conduct of a session. Named by the Composer, 2026-09-07. They have no sector, so they have
 * no angle; they are drawn as the star's own halo, which is what a corona is.
 *
 * SPACETIME — the five Structure principles. Scale invariance, structure contains itself,
 * recursion base case, map is not the territory, the entry order. Named by the Composer the same
 * day. THEY ARE NOT PLOTTED AS BODIES. A body cannot hold the metric it moves in, so they label
 * the ring system itself. This is the one mapping that is an argument rather than a lookup, and
 * it is the Composer's name that makes it one.
 *
 * ---------------------------------------------------------------------------------------------
 * AND ONE DISAGREEMENT IS DRAWN RATHER THAN RESOLVED — his ruling of 2026-09-07.
 *
 * The score DECLARES the Agile Facilitator the entry point every chair reaches through. The paths
 * MEASURE it fifth, at 5.0%, adjacent to the Auditor rather than orbited by it; the Software
 * Architect is first at 6.2%. Neither is wrong — one is what the score says, the other is what the
 * vectors do. The render carries both channels on that body and lets the gap show.
 *
 * Requires node >= 18. No dependencies. Reads the graph, writes one SVG to stdout.
 */
import { readFileSync } from "node:fs";
const G = JSON.parse(readFileSync("graph/grand_ensemble.json", "utf8"));

// ---- VARIANTS. Three coherent characters, not a grid of knobs — the Composer judges a picture,
// not a parameter. Same corpus, same 13 sectors, same encodings; only the projection and the
// ground change. None is proposed as correct and the default is merely the first one built.
//
//     node render_solar.mjs                     orrery    THE BASE, ruled 2026-09-07
//     node render_solar.mjs --variant=deep      deep      tilted, heavy vignette, atmospheric
//     node render_solar.mjs --variant=faceon    faceon    near-circular, colour forward
//
// ⚠️ ORRERY IS THE BASE BY RULING, NOT BY DEFAULTING. The Composer chose it on 2026-09-07 from
// the three rendered side by side. The other two are kept and still build: the reason variants
// exist here is his ruling that no single projection is true — "isn't one display to rule them
// all" — and deleting the runners-up would quietly convert a choice into the only thing available.
const VARIANTS = {
  deep:   { tilt: 0.50, bg: "#080b14", vignette: 0.85, ring: 1.0, glow: 74, ink: "#9fb0cc", dim: "#7f8ea8", title: "#e8eefb", sat: 0, light: 0 },
  orrery: { tilt: 0.30, bg: "#0e1220", vignette: 0.30, ring: 1.7, glow: 56, ink: "#b9c6dc", dim: "#8d9cb6", title: "#f2f6ff", sat: -6, light: +4 },
  faceon: { tilt: 0.86, bg: "#05060c", vignette: 0.00, ring: 0.8, glow: 88, ink: "#a9b8d2", dim: "#8595af", title: "#f4f8ff", sat: +10, light: +6 },
};
const VNAME = (process.argv.find((a) => a.startsWith("--variant=")) || "--variant=orrery").split("=")[1];
const V = VARIANTS[VNAME] || VARIANTS.orrery;

const W = 1600, H = 900, CX = W / 2, CY = H / 2 + 14, TILT = V.tilt;   // orthographic, not perspective

// ⚠️ THE FIGURE IS SCALED TO ITS OWN PROJECTION, and it is not cosmetic. Vertical extent is
// radius × tilt, so a near-face-on variant is more than twice as tall as a flat one at the same
// radii. Built with fixed radii, `faceon` pushed four chairs and their labels off the top and
// bottom of the canvas — the drawing silently deleting a twelfth of its own content, which is the
// same failure class as the caption that ran off the left edge. FIT is derived, never tuned.
const SHELLS = 7;
const _RCHAIR = 656;
// Both axes, because they bind in opposite directions: vertical extent is radius x tilt, so a
// flat variant is free vertically and immediately overruns the CHAIR LABELS horizontally — which
// is what `orrery` did the moment the vertical constraint alone let it grow. 176px is the label
// budget either side, measured against the longest chair name.
const FIT = Math.max(0.55, Math.min((H / 2 - 104) / (_RCHAIR * TILT + 26), (W / 2 - 176) / _RCHAIR));
const R0 = 246 * FIT, R1 = 566 * FIT, RCHAIR = _RCHAIR * FIT, RCORONA = 150 * FIT;

// ---- the Composer's two namings, carried as data. Naming a population is authorship.
const SPACETIME = ["The Fractal Loop", "The Opera House Principle", "The Nested Opera Houses Corollary",
  "The Non-Euclidean Corollary", "The Harmony Principle"];
const SPACETIME_SET = new Set(SPACETIME);
const SINGLETONS = new Set(["Spotlighting", "The Empty Hands"]);

const meta = new Map();
for (const [layer, L] of Object.entries(G.layers))
  for (const n of L.nodes) meta.set(n.id, { layer, name: n.name || n.id, sector: n.cluster || n.family || "-" });
const chairs = new Set(G.layers.musicians.nodes.map((n) => n.id));

const st = new Map([...meta.keys()].map((id) => [id, { t: 0, good: 0, chairs: new Set(), deg: 0 }]));
const touch = (a, b, status) => {
  if (!meta.has(a) || !meta.has(b) || a === b) return;
  for (const [x, y] of [[a, b], [b, a]]) {
    const r = st.get(x); r.t++; r.deg++;
    if (status === "earned" || status === "corroborated") r.good++;
    if (chairs.has(y)) r.chairs.add(y);
  }
};
for (const L of Object.values(G.layers)) for (const e of L.edges) touch(e.a, e.b, e.status);
for (const c of G.cross) touch(c.a, c.b, c.status);

const bodies = [...meta].filter(([, m]) => m.layer === "principles" || m.layer === "protocols").map(([id]) => id);
const evidence = (id) => { const r = st.get(id); return r.t ? r.good / r.t : 0; };
const shellOf = (id) => Math.min(SHELLS - 1, Math.max(0, SHELLS - 1 - Math.floor(evidence(id) * SHELLS - 1e-9)));

// ---- 13 sectors, in a stated order so the drawing is reproducible
// ⚠️ SECTOR NAMES ARE THE CORPUS'S, AND THE CORPUS RENAMES THEM. `Session & Interface` became
// `The Baton` upstream on 2026-09-07 — the Composer's seventh protocol family, 13 nodes, named for
// the fact that all thirteen are operated by him and not one fires on its own. This list is
// hardcoded, so a rename upstream silently drops every body of that family into the fallback
// sector until it is edited here. Checked against the graph on every refresh, never assumed.
const SECTORS = ["Governance", "Safety", "Structure", "Learning", "Epistemics", "Balance",
  "Roster & Ensemble", "Scale & Effort", "Quality & Verification", "Decision & Escalation",
  "Learning & Pattern", "Trust boundary", "The Baton"];
const sectorAngle = (s) => { const i = SECTORS.indexOf(s); return (i < 0 ? 0 : i) / SECTORS.length * 2 * Math.PI - Math.PI / 2; };
const hue = (s) => Math.round((Math.max(0, SECTORS.indexOf(s)) / SECTORS.length) * 360);
const sat = (shell) => 74 - shell * 7 + V.sat;   // CONSTANT PER RING — the ruling
const light = (shell) => 68 - shell * 3 + V.light;

const project = (r, a) => [CX + r * Math.cos(a), CY + r * TILT * Math.sin(a)];
const ringR = (shell) => R0 + (R1 - R0) * (shell / (SHELLS - 1));

// ---- who is what
const corona = [], plotted = [], singles = [];
for (const id of bodies) {
  const n = meta.get(id).name;
  if (SPACETIME_SET.has(n)) continue;                       // geometry, never a dot
  if (st.get(id).chairs.size === 0) (SINGLETONS.has(n) ? singles : corona).push(id);
  else plotted.push(id);
}

// ---- angular placement: sector direction, spread inside the sector, never overlapping
const bySector = new Map(SECTORS.map((s) => [s, []]));
for (const id of plotted) { const s = meta.get(id).sector; (bySector.get(s) || bySector.get(SECTORS[0])).push(id); }
const pos = new Map();
const SPREAD = (2 * Math.PI / SECTORS.length) * 0.78;
for (const [s, ids] of bySector) {
  ids.sort((a, b) => shellOf(a) - shellOf(b) || st.get(b).deg - st.get(a).deg);
  const base = sectorAngle(s);
  ids.forEach((id, i) => {
    const a = base + (ids.length === 1 ? 0 : (i / (ids.length - 1) - 0.5) * SPREAD);
    pos.set(id, { a, r: ringR(shellOf(id)), shell: shellOf(id), sector: s });
  });
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const out = [];
const P = (s) => out.push(s);

P(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="Inter, Helvetica, Arial, sans-serif">`);
P(`<defs>
  <radialGradient id="starGlow"><stop offset="0" stop-color="#fffdf4" stop-opacity=".95"/><stop offset=".55" stop-color="#ffeec0" stop-opacity=".35"/><stop offset="1" stop-color="#ffeec0" stop-opacity="0"/></radialGradient>
  <radialGradient id="coronaBand"><stop offset="0" stop-color="#ffe9b0" stop-opacity="0"/><stop offset=".72" stop-color="#ffe9b0" stop-opacity=".13"/><stop offset="1" stop-color="#ffe9b0" stop-opacity="0"/></radialGradient>
  <radialGradient id="vignette"><stop offset=".55" stop-color="#05070e" stop-opacity="0"/><stop offset="1" stop-color="#05070e" stop-opacity="${V.vignette}"/></radialGradient>
</defs>`);
P(`<rect width="${W}" height="${H}" fill="${V.bg}"/>`);

// ---- SPACETIME: the ring system itself, drawn before anything sits in it
P(`<g id="spacetime">`);
for (let s = 0; s < SHELLS; s++) {
  const r = ringR(s);
  P(`<ellipse cx="${CX}" cy="${CY}" rx="${r.toFixed(1)}" ry="${(r * TILT).toFixed(1)}" fill="none" stroke="hsl(210 30% ${22 + s + (V.ring > 1 ? 12 : 0)}%)" stroke-width="${V.ring}"/>`);
}
for (const s of SECTORS) {                                   // the quadrant spokes
  const a = sectorAngle(s), [x1, y1] = project(R0 - 34, a), [x2, y2] = project(RCHAIR + 8, a);
  P(`<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="hsl(${hue(s)} 40% 30%)" stroke-width=".6" opacity=".45"/>`);
}
P(`</g>`);
P(`<rect width="${W}" height="${H}" fill="url(#vignette)"/>`);

// ---- sector names on the rim. Hue carries the sector and a hue with no key is decoration.
P(`<g id="sectors">`);
for (const sName of SECTORS) {
  const a = sectorAngle(sName), [x, y] = project(R1 + 46, a);
  const anchor = Math.cos(a) < -0.25 ? "end" : Math.cos(a) > 0.25 ? "start" : "middle";
  P(`<text x="${x.toFixed(1)}" y="${(y + 3).toFixed(1)}" fill="hsl(${hue(sName)} 45% 52%)" font-size="10" text-anchor="${anchor}" opacity=".85">${esc(sName)}</text>`);
}
P(`</g>`);

// ---- CORONA band + the twenty
P(`<circle cx="${CX}" cy="${CY}" r="${RCORONA + 34}" fill="url(#coronaBand)"/>`);
P(`<ellipse cx="${CX}" cy="${CY}" rx="${RCORONA}" ry="${(RCORONA * TILT).toFixed(1)}" fill="none" stroke="#ffe9b0" stroke-width=".9" stroke-dasharray="2 5" opacity=".55"/>`);
corona.forEach((id, i) => {
  const a = (i / corona.length) * 2 * Math.PI - Math.PI / 2;
  const [x, y] = project(RCORONA, a);
  const rr = 2.6 + Math.min(6, st.get(id).deg) * .42;
  P(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${rr.toFixed(1)}" fill="#ffeec8" opacity=".92"><title>${esc(meta.get(id).name)} — Corona, degree ${st.get(id).deg}</title></circle>`);
});

// ---- THE STAR, at the size its betweenness earns
P(`<circle cx="${CX}" cy="${CY}" r="${V.glow}" fill="url(#starGlow)"/>`);
P(`<circle cx="${CX}" cy="${CY}" r="15.5" fill="#fffdf2"/>`);
P(`<circle cx="${CX}" cy="${CY}" r="15.5" fill="none" stroke="#fff6d8" stroke-width=".8" opacity=".7"/>`);
P(`<title>the Composer — 4.9% of shortest paths, rank 6 of 117</title>`);

// ---- the twelve chairs, on their own ring
// ⚠️ A CHAIR'S PLACEMENT IS DATA IN ITS ORDER AND LEGIBILITY IN ITS SPACING, and the two are
// separated on purpose. Two earlier attempts were wrong in opposite ways. Placing the twelve in
// list order drew each chair nowhere near the bodies it holds. Placing each at the CIRCULAR MEAN
// of its own bodies collapsed all twelve into one arc and made the labels illegible — and that is
// not a drawing fault: a chair whose bodies are spread across many sectors has a mean direction
// with almost no meaning, which is exactly what a low resultant length says.
//
// So: chairs are ORDERED by mean direction — neighbours on the rim really do hold neighbouring
// bodies — and then spaced evenly, which is a layout decision and carries no claim. The real
// direction is drawn as a spoke, and ITS OPACITY IS THE RESULTANT LENGTH R. A faint spoke is a
// chair whose bodies point everywhere, and the drawing says so instead of hiding it.
const chairList = G.layers.musicians.nodes;
const chairMean = new Map();
for (const n of chairList) {
  let sx = 0, sy = 0, k = 0;
  for (const id of plotted) if (st.get(id).chairs.has(n.id)) { const p = pos.get(id); sx += Math.cos(p.a); sy += Math.sin(p.a); k++; }
  chairMean.set(n.id, k ? { a: Math.atan2(sy, sx), R: Math.hypot(sx, sy) / k, k } : { a: -Math.PI / 2, R: 0, k: 0 });
}
const ordered = [...chairList].sort((x, y) => chairMean.get(x.id).a - chairMean.get(y.id).a);
const chairAngle = new Map();
ordered.forEach((n, i) => chairAngle.set(n.id, (i / ordered.length) * 2 * Math.PI - Math.PI / 2));
chairList.forEach((n) => {
  const a = chairAngle.get(n.id);
  const [x, y] = project(RCHAIR, a);
  const facil = n.id === "musicians:agilefacilitator";
  P(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${facil ? 9 : 7.5}" fill="#cfd8ea" opacity=".95"/>`);
  const anchor = Math.cos(a) < -0.25 ? "end" : Math.cos(a) > 0.25 ? "start" : "middle";
  const [lx, ly] = project(RCHAIR + 20, a);
  P(`<text x="${lx.toFixed(1)}" y="${(ly + 4).toFixed(1)}" fill="${V.ink}" font-size="11.5" text-anchor="${anchor}">${esc(n.name)}</text>`);
  // the spoke points at where this chair's bodies ACTUALLY are; its opacity is the resultant
  // length R, so a chair whose bodies point everywhere draws a spoke you can barely see.
  const cm = chairMean.get(n.id);
  const [mx, my] = project(R1 - 24, cm.a);
  P(`<line x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${mx.toFixed(1)}" y2="${my.toFixed(1)}" stroke="#cfd8ea" stroke-width=".8" opacity="${(0.10 + 0.62 * cm.R).toFixed(2)}"/>`);
});

// ---- the bodies
for (const id of plotted) {
  const p = pos.get(id), m = meta.get(id), r = st.get(id);
  const [x, y] = project(p.r, p.a);
  const rr = 2.4 + Math.min(30, r.deg) * .30;
  P(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${rr.toFixed(1)}" fill="hsl(${hue(p.sector)} ${sat(p.shell)}% ${light(p.shell)}%)" opacity=".93"><title>${esc(m.name)} — ${esc(p.sector)}, degree ${r.deg}, evidence ${(evidence(id) * 100).toFixed(0)}%</title></circle>`);
}

// ---- the two that belong to neither population
singles.forEach((id, i) => {
  const a = Math.PI / 2 + (i ? 0.42 : -0.42);
  const [x, y] = project(RCORONA + 30, a);
  P(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5" fill="none" stroke="#ff9ecb" stroke-width="1.6"/>`);
  P(`<text x="${(x + 9).toFixed(1)}" y="${(y + 4).toFixed(1)}" fill="#ff9ecb" font-size="10.5">${esc(meta.get(id).name)}</text>`);
});

// ---- THE DISAGREEMENT, drawn rather than resolved
const fa = chairAngle.get("musicians:agilefacilitator");
const [fx, fy] = project(RCHAIR, fa);
const [dx, dy] = project(RCORONA + 20, fa);
P(`<line x1="${dx.toFixed(1)}" y1="${dy.toFixed(1)}" x2="${fx.toFixed(1)}" y2="${fy.toFixed(1)}" stroke="#7fd4ff" stroke-width="1" stroke-dasharray="3 4" opacity=".8"/>`);
P(`<circle cx="${dx.toFixed(1)}" cy="${dy.toFixed(1)}" r="8" fill="none" stroke="#7fd4ff" stroke-width="1.4" stroke-dasharray="3 3"/>`);
// The annotation is clamped inside the canvas. The Facilitator's rim position is data and moves
// with the corpus; a label anchored blindly to it ran off the left edge on the first render, which
// is how a caption silently deletes the finding it was written to carry.
const lab = Math.cos(fa) < 0 ? -1 : 1;
const PAD = 34, TW = 300;
let tx = fx + lab * 16, anc = lab < 0 ? "end" : "start";
if (anc === "end" && tx - TW < PAD) { tx = PAD + TW; }
if (anc === "start" && tx + TW > W - PAD) { tx = W - PAD - TW; }
P(`<text x="${tx.toFixed(1)}" y="${(fy - 26).toFixed(1)}" fill="#7fd4ff" font-size="10.5" text-anchor="${anc}">declared: the entry point every chair reaches through</text>`);
P(`<text x="${tx.toFixed(1)}" y="${(fy - 14).toFixed(1)}" fill="#5f92b4" font-size="10" text-anchor="${anc}">measured: 5th of 117, 5.0% of shortest paths</text>`);

// ---- legend
const L0 = 40, T0 = 40, LEGY = H - 118;
P(`<text x="${L0}" y="${T0}" fill="${V.title}" font-size="19">The meta-mandala as a solar system — ${VNAME}</text>`);
P(`<text x="${L0}" y="${T0 + 22}" fill="${V.dim}" font-size="11.5">angle = sector (13) · radius = evidence, earned inward · saturation constant per ring · size = degree</text>`);
P(`<text x="${L0}" y="${T0 + 38}" fill="${V.dim}" font-size="11.5">evidence = (earned + corroborated) / all vectors — this render's own scalar, not issue #8's</text>`);
const items = [["#fffdf2", "the star — the Composer, 4.9% of paths, rank 6"], ["#ffeec8", `the Corona — ${corona.length} bodies that orbit him, not a chair`],
  ["#5a6a86", `Spacetime — ${SPACETIME.length} Structure principles, drawn as the rings themselves`], ["#ff9ecb", "neither — Spotlighting, The Empty Hands"], ["#7fd4ff", "declared standing vs measured standing"], ["#cfd8ea", "chair spoke — points at its bodies; faint = they point everywhere"]];
items.forEach(([c, t], i) => {
  P(`<circle cx="${L0 + 6}" cy="${LEGY + i * 21}" r="5" fill="${c}"/>`);
  P(`<text x="${L0 + 20}" y="${LEGY + 4 + i * 21}" fill="${V.ink}" font-size="11.5">${esc(t)}</text>`);
});
SPACETIME.forEach((n, i) => {
  P(`<text x="${W - 40}" y="${LEGY + i * 17}" fill="#5a6a86" font-size="10.5" text-anchor="end">${esc(n)}</text>`);
});
P(`<text x="${W - 40}" y="${LEGY - 18}" fill="#7f8ea8" font-size="11" text-anchor="end">Spacetime — the geometry, not bodies in it</text>`);
P(`</svg>`);
process.stdout.write(out.join("\n") + "\n");
