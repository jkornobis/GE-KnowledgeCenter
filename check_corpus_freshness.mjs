#!/usr/bin/env node
/**
 * check_corpus_freshness.mjs — is this library's copy of the graph still the corpus's?
 *
 * WHY IT EXISTS, and it is a measured failure rather than a precaution. On 2026-09-07 this
 * repository measured a corpus of 92 bodies, drew it three ways, published the drawing and had the
 * Composer choose between projections — all against a copy taken **2026-08-26**. Twelve days.
 * Two headline numbers were wrong (the star was rank 3, not rank 6) and a whole line of reasoning
 * rested on a field, `live`, that the corpus had DELETED on 2026-08-29. The copy still carried it.
 *
 * ⚠️ NOTHING LOCAL COULD HAVE CAUGHT IT, and that is the point of this file. A stale copy has valid
 * frontmatter, resolvable references and perfect internal consistency: `check_okf.mjs` and
 * `check_links.mjs` both pass it. **It fails no check because there was no check it could fail.**
 *
 *     node check_corpus_freshness.mjs --source=<url|path>            report, exit 0 always
 *     node check_corpus_freshness.mjs --source=<url|path> --refresh  report, then write the copy
 *
 * ⚠️ THE SOURCE IS PASSED IN AND IS NEVER WRITTEN DOWN HERE. This library carries no employer, no
 * project and no address belonging to one estate — so the location of the corpus is an argument or
 * `GE_CORPUS_GRAPH` in the environment, and a token, if the source needs one, is `GE_CORPUS_TOKEN`
 * and is never printed, never echoed, never included in a report. With no source configured this
 * says so and exits 0: an unconfigured check is not a failing one.
 *
 * REPORT-ONLY BY DEFAULT, and the refresh is opt-in. Ruled by the Composer 2026-09-08 —
 * *report and offer the refresh*. It is deliberately NOT a gate: a gate would make an ordinary
 * commit at the corpus's end turn this repository red, which is the wrong coupling between two
 * repositories with different owners. `sweep_links.mjs` is the precedent — it reports and never
 * blocks, and what it finds becomes work rather than a red mark.
 *
 * WHAT IT COMPARES, and each one is a failure this estate has actually had:
 *
 *   COUNTS      nodes per layer and total edges — the ordinary drift. Cheap, and it is what
 *               finally exposed the twelve days, mentioned in passing by another instance.
 *   MEMBERSHIP  which nodes arrived and which left, by id. An addition is missing data.
 *   VOCABULARY  the cluster and family names. A RENAME IS WORSE THAN AN ADDITION: an addition is
 *               data you do not have, a rename is data you have and is wrong. `Session & Interface`
 *               became `The Baton` upstream, and `render_solar.mjs` hardcodes its 13 sector names —
 *               all thirteen bodies would have drawn in the wrong direction, with no error anywhere.
 *   FIELDS      which keys the nodes of each layer carry. THIS IS THE `live` CASE: a field removed
 *               upstream goes on being read here, and every claim built on it is confident and
 *               false. No count and no membership check sees it.
 *
 * Requires node >= 18 for global fetch. No dependencies. Writes only with --refresh, only the copy.
 */
import { readFileSync, writeFileSync } from "node:fs";

const LOCAL = "graph/grand_ensemble.json";
const arg = (n) => (process.argv.find((a) => a.startsWith(`--${n}=`)) || "").split("=").slice(1).join("=");
const SOURCE = arg("source") || process.env.GE_CORPUS_GRAPH || "";
const REFRESH = process.argv.includes("--refresh");
const asJson = process.argv.includes("--json");

const layersOf = (g) => ({ ...g.layers });
const shape = (g) => {
  const out = { layers: {}, edges: 0, ids: {}, vocab: new Set(), fields: {} };
  for (const [name, L] of Object.entries(layersOf(g))) {
    out.layers[name] = L.nodes.length;
    out.edges += L.edges.length;
    out.ids[name] = new Set(L.nodes.map((n) => n.id));
    out.fields[name] = new Set(L.nodes.flatMap((n) => Object.keys(n)));
    for (const n of L.nodes) { const v = n.cluster || n.family; if (v) out.vocab.add(v); }
  }
  if (g.movements) { out.layers.movements = g.movements.nodes.length; out.edges += g.movements.edges.length;
    out.ids.movements = new Set(g.movements.nodes.map((n) => n.id));
    out.fields.movements = new Set(g.movements.nodes.flatMap((n) => Object.keys(n))); }
  out.edges += (g.cross || []).length;
  return out;
};
const diff = (a, b) => [[...a].filter((x) => !b.has(x)), [...b].filter((x) => !a.has(x))];

const local = JSON.parse(readFileSync(LOCAL, "utf8"));

if (!SOURCE) {
  console.log("corpus freshness — NOT CONFIGURED, and that is not a failure.\n");
  console.log("  no --source= and no GE_CORPUS_GRAPH in the environment, so there is nothing to");
  console.log("  compare against. This library does not carry the corpus's address: it is one");
  console.log("  estate's location and this repository holds shared method only.\n");
  console.log("      node check_corpus_freshness.mjs --source=<url|path>");
  console.log(`\n  the copy as it stands: ${Object.entries(shape(local).layers).map(([k, v]) => `${k} ${v}`).join(" · ")}`);
  process.exit(0);
}

let raw;
try {
  if (/^https?:\/\//.test(SOURCE)) {
    const h = process.env.GE_CORPUS_TOKEN ? { Authorization: `token ${process.env.GE_CORPUS_TOKEN}` } : {};
    const r = await fetch(SOURCE, { headers: h });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    raw = await r.text();
  } else raw = readFileSync(SOURCE, "utf8");
} catch (e) {
  // A source that cannot be reached is SAID OUT LOUD and the run still exits 0. An unreachable
  // corpus is a fact about the network, not a defect in this repository — and a check that goes
  // red on someone else's downtime is a check its operator learns to ignore.
  console.log(`corpus freshness — SOURCE UNREACHABLE: ${e.message}`);
  console.log("  said out loud rather than swallowed; nothing compared, nothing changed.");
  process.exit(0);
}

const source = JSON.parse(raw);
const L = shape(local), S = shape(source);
const findings = [];

for (const k of new Set([...Object.keys(L.layers), ...Object.keys(S.layers)])) {
  const a = L.layers[k] ?? 0, b = S.layers[k] ?? 0;
  if (a !== b) findings.push({ kind: "count", what: k, here: a, source: b });
}
if (L.edges !== S.edges) findings.push({ kind: "count", what: "edges", here: L.edges, source: S.edges });

for (const k of Object.keys(S.ids)) {
  const [gone, added] = diff(L.ids[k] ?? new Set(), S.ids[k]);
  if (added.length) findings.push({ kind: "added", what: k, ids: added });
  if (gone.length) findings.push({ kind: "removed", what: k, ids: gone });
}
const [vGone, vNew] = diff(L.vocab, S.vocab);
if (vGone.length || vNew.length) findings.push({ kind: "vocabulary", gone: vGone, arrived: vNew });

for (const k of Object.keys(S.fields)) {
  const [fGone, fNew] = diff(L.fields[k] ?? new Set(), S.fields[k]);
  if (fGone.length) findings.push({ kind: "field-removed", what: k, fields: fGone });
  if (fNew.length) findings.push({ kind: "field-added", what: k, fields: fNew });
}

if (asJson) console.log(JSON.stringify({ fresh: findings.length === 0, findings }, null, 2));
else if (!findings.length) {
  console.log("corpus freshness — the copy matches the source.\n");
  console.log(`  ${Object.entries(S.layers).map(([k, v]) => `${k} ${v}`).join(" · ")} · edges ${S.edges}`);
} else {
  console.log(`corpus freshness — ${findings.length} difference${findings.length > 1 ? "s" : ""}. Reported, never blocking.\n`);
  for (const f of findings) {
    if (f.kind === "count") console.log(`  count       ${f.what.padEnd(12)} here ${f.here}  ·  source ${f.source}`);
    if (f.kind === "added") console.log(`  added       ${f.what}: ${f.ids.length} — ${f.ids.slice(0, 6).join(", ")}${f.ids.length > 6 ? " …" : ""}`);
    if (f.kind === "removed") console.log(`  removed     ${f.what}: ${f.ids.length} — ${f.ids.slice(0, 6).join(", ")}${f.ids.length > 6 ? " …" : ""}`);
    if (f.kind === "vocabulary") {
      console.log(`  VOCABULARY  gone here-only: ${f.gone.join(", ") || "none"}`);
      console.log(`              new at source: ${f.arrived.join(", ") || "none"}`);
      console.log(`              ⚠️ a rename reads as one of each. Anything hardcoding these names draws the wrong thing silently.`);
    }
    if (f.kind === "field-removed") console.log(`  FIELD GONE  ${f.what}: ${f.fields.join(", ")}  ⚠️ still present here — every claim built on it is false and confident`);
    if (f.kind === "field-added") console.log(`  field new   ${f.what}: ${f.fields.join(", ")}`);
  }
  console.log(`\n  --refresh writes the source copy to ${LOCAL}. Nothing else is touched.`);
}

if (REFRESH) {
  writeFileSync(LOCAL, raw.endsWith("\n") ? raw : raw + "\n");
  console.log(`\n  refreshed: ${LOCAL} now matches the source. Re-run anything derived from it.`);
}
process.exit(0);
