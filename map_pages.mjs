#!/usr/bin/env node
/**
 * map_pages.mjs — which pages of this library speak to which bodies of the corpus.
 *
 * The gap this answers, measured 2026-09-08 and filed as #48: the graph carries 107 nodes with a
 * rich facet vocabulary, and NOT ONE of them points at a page here — every path-carrying field
 * aims into another repository's trees. So "which page explains this protocol" had no mechanism in
 * either direction.
 *
 * It does not have to be authored. 83 of 85 pages already name a node in their prose. This derives
 * the join from text that already exists, so nobody tags eighty-seven pages by hand.
 *
 * ⚠️ A DERIVED JOIN IS A CLAIM UNTIL IT IS CHECKED, so this prints its evidence rather than its
 * conclusion. Three things make that possible:
 *
 *   TIERS      every hit is strong or weak, and the rule is stated below rather than tuned in
 *              private. A weak hit is not a mistake; it is a hit nobody should act on alone.
 *   EVIDENCE   --page shows the line each hit came from, so a human checks a page in a minute
 *              rather than trusting a number.
 *   AMBIGUITY  a name that belongs to two nodes is reported as ambiguous and never silently
 *              resolved. `Spotlighting` is one today, and no amount of matching fixes it.
 *
 * Requires node >= 18. No dependencies, by design. Reads the graph and the pages, writes nothing,
 * and always exits 0 — it is a report, never a gate.
 *
 *     node map_pages.mjs                    the census, per layer and per tier
 *     node map_pages.mjs --page=start.md    the evidence for one page, line by line
 *     node map_pages.mjs --node="The Baton" which pages name one body
 *     node map_pages.mjs --json             machine-readable
 */
import { readFileSync, readdirSync, lstatSync } from "node:fs";
import { join } from "node:path";

const G = JSON.parse(readFileSync("graph/grand_ensemble.json", "utf8"));
const argv = process.argv.slice(2);
const arg = (k) => { const a = argv.find((x) => x.startsWith(`--${k}=`)); return a ? a.slice(k.length + 3) : null; };
const asJson = argv.includes("--json");

// ---- the bodies. Movements sit outside `layers`, so they are collected separately or the layer
// the corpus models most richly would be the one this join could not see.
const nodes = [];
for (const [layer, L] of Object.entries(G.layers)) for (const n of L.nodes) nodes.push({ name: n.name || n.id, id: n.id, layer });
for (const m of G.movements?.nodes || []) nodes.push({ name: m.name || m.id, id: m.id, layer: "movements" });

const byName = new Map();
for (const n of nodes) { if (!byName.has(n.name)) byName.set(n.name, []); byName.get(n.name).push(n); }
const ambiguous = [...byName].filter(([, v]) => v.length > 1).map(([k]) => k);

// ---- ORDINARY ENGLISH IS THE WHOLE PROBLEM. Four bodies are named with words that appear in
// normal prose constantly — `Tell` is a trigger the Composer uses in conversation, and it would
// match half the library. They are not excluded (a page really may be about `Tell`), they are
// forced to WEAK, so nothing downstream can treat them as established.
const COMMON = new Set(["Tell", "Help", "Lots", "Program", "Unison", "NDT"]);

// A hit is STRONG when the text is doing something deliberate with the name:
//   - it is long enough that coincidence is implausible (>= 14 characters), or
//   - it appears in a heading, or in backticks, or
//   - it appears more than twice on the page.
// Everything else is WEAK. The rule is written here rather than tuned quietly, because a threshold
// nobody can read is a threshold nobody can argue with.
const STRONG_LEN = 14;

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const walk = (d) => readdirSync(d).flatMap((n) => {
  if (n === ".git" || n === "node_modules") return [];
  const p = join(d, n);
  let st; try { st = lstatSync(p); } catch { return []; }
  if (st.isSymbolicLink()) return [];          // canvas/ is someone else's tree
  return st.isDirectory() ? walk(p) : p.endsWith(".md") ? [p] : [];
});

const pages = walk(".").map((p) => p.replace(/^\.\//, "")).filter((p) => p !== "SESSION_LOG.md").sort();

// ⚠️ LONGEST MATCH WINS, and this was found by hand-checking rather than by design. The first
// version bounded a name on non-word characters, so `Agile` — a movement — matched inside
// `Agile Facilitator` on every page that names the chair, and was reported STRONG. A space is a
// word boundary; a shorter body name sitting inside a longer one is not a mention of it. So every
// line is scanned for ALL names at once and a match is dropped when it falls inside a longer one.
const names = [...byName.keys()].sort((a, b) => b.length - a.length);
const res = new Map(names.map((n) => [n, new RegExp(`(?<![\\w-])${esc(n)}(?![\\w-])`, "g")]));

const scan = (line) => {
  const kept = [];
  for (const name of names) {                       // longest first
    const re = res.get(name); re.lastIndex = 0;
    let m;
    while ((m = re.exec(line))) {
      const a = m.index, b = a + name.length;
      if (kept.some((k) => a >= k.a && b <= k.b)) continue;   // inside something longer
      kept.push({ name, a, b });
    }
  }
  return kept;
};

const hits = [];   // {page, name, layer, tier, count, line}
for (const page of pages) {
  const src = readFileSync(page, "utf8").replace(/\r\n/g, "\n");
  const lines = src.split("\n");
  // ⚠️ SCANNED FLAT, and this is the second defect hand-checking found. Line-by-line scanning
  // cannot see a name the text wrapped: `Agile Facilitator` broken across two lines left `Agile`
  // alone at the end of one, and it was counted as the movement. Newline -> space preserves every
  // offset exactly, so the flat text scans correctly and each hit still maps back to its own line.
  const flat = src.replace(/\n/g, " ");
  const starts = []; let acc = 0;
  for (const l of lines) { starts.push(acc); acc += l.length + 1; }
  const lineOf = (i) => { let lo = 0, hi = starts.length - 1; while (lo < hi) { const m = (lo + hi + 1) >> 1; if (starts[m] <= i) lo = m; else hi = m - 1; } return lo; };

  const found = new Map();
  for (const k of scan(flat)) {
    const r = found.get(k.name) || { count: 0, at: k.a };
    r.count++; found.set(k.name, r);
  }
  for (const [name, defs] of byName) {
    const r = found.get(name);
    if (!r) continue;
    const count = r.count, firstNo = lineOf(r.at) + 1, first = lines[firstNo - 1].trim();
    const deliberate = new RegExp(`(^#{1,6} .*|\`[^\`]*)${esc(name)}`, "m").test(src);
    const strong = !COMMON.has(name) && (name.length >= STRONG_LEN || deliberate || count > 2);
    hits.push({ page, name, layer: defs[0].layer, ambiguous: defs.length > 1,
                tier: strong ? "strong" : "weak", count, lineNo: firstNo, line: first.slice(0, 120) });
  }
}

// ---- one page, with its evidence. This is the hand-check surface and the reason the script exists
// in this shape: a claim you can audit in a minute is worth more than a number you must believe.
const one = arg("page");
if (one) {
  const mine = hits.filter((h) => h.page === one).sort((a, b) => (a.tier === b.tier ? b.count - a.count : a.tier === "strong" ? -1 : 1));
  if (!pages.includes(one)) { console.log(`no such page: ${one}`); process.exit(0); }
  console.log(`${one} — ${mine.length} body name(s)\n`);
  for (const h of mine)
    console.log(`  ${h.tier === "strong" ? "STRONG" : "weak  "} ${String(h.count).padStart(2)}x  ${h.name}${h.ambiguous ? "  ⚠ ambiguous" : ""}\n         ${h.layer} · line ${h.lineNo}: ${h.line}`);
  if (!mine.length) console.log("  none — this page names nothing the corpus holds");
  process.exit(0);
}

const oneNode = arg("node");
if (oneNode) {
  const mine = hits.filter((h) => h.name === oneNode);
  console.log(`${oneNode} — named by ${mine.length} page(s)\n`);
  for (const h of mine.sort((a, b) => (a.tier === b.tier ? b.count - a.count : a.tier === "strong" ? -1 : 1)))
    console.log(`  ${h.tier === "strong" ? "STRONG" : "weak  "} ${String(h.count).padStart(2)}x  ${h.page}`);
  process.exit(0);
}

const strong = hits.filter((h) => h.tier === "strong");
const pagesWith = new Set(strong.map((h) => h.page));
const nodesWith = new Set(strong.map((h) => h.name));
const orphanPages = pages.filter((p) => !pagesWith.has(p));
const orphanNodes = [...byName.keys()].filter((n) => !nodesWith.has(n));

if (asJson) {
  console.log(JSON.stringify({ hits, ambiguous, orphanPages, orphanNodes }, null, 2));
} else {
  console.log(`map_pages — the join derived from prose, not from a field\n`);
  console.log(`   pages read              ${String(pages.length).padStart(4)}`);
  console.log(`   bodies in the corpus    ${String(byName.size).padStart(4)}   (${nodes.length} nodes; names are not unique)`);
  console.log(`   hits                    ${String(hits.length).padStart(4)}   ${strong.length} strong · ${hits.length - strong.length} weak\n`);
  console.log(`   pages with a strong hit ${String(pagesWith.size).padStart(4)} of ${pages.length}`);
  console.log(`   bodies named strongly   ${String(nodesWith.size).padStart(4)} of ${byName.size}\n`);

  // ⚠️ A page joined ONLY through its own frontmatter is barely joined. The chairs a title names
  // say who the page serves; they do not say what it is about. Reported because the headline
  // "85 of 89 pages have a strong hit" is otherwise flattering.
  const per = {};
  for (const h of strong) { const r = per[h.page] || (per[h.page] = { n: 0, body: 0 }); r.n++; if (h.lineNo > 12) r.body++; }
  const fmOnly = Object.entries(per).filter(([, v]) => v.body === 0).map(([p]) => p);
  console.log(`   joined only by their own frontmatter  ${String(fmOnly.length).padStart(3)} of ${pagesWith.size}   — a title's chairs say who it serves, not what it is about`);
  console.log(`   strong hits in the body                ${String(strong.filter((h) => h.lineNo > 12).length).padStart(3)} of ${strong.length}\n`);

  const perLayer = {};
  for (const h of strong) perLayer[h.layer] = (perLayer[h.layer] || 0) + 1;
  console.log(`   strong hits by layer    ${Object.entries(perLayer).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ${v}`).join(" · ")}\n`);

  if (ambiguous.length) {
    console.log(`⚠️ AMBIGUOUS NAMES — one name, more than one body. A name-based join cannot resolve these`);
    console.log(`   and does not try. Every hit on them is reported against the first node only.`);
    for (const a of ambiguous) console.log(`   ${a}  ->  ${byName.get(a).map((n) => `${n.layer}:${n.id}`).join(" · ")}`);
    console.log();
  }

  console.log(`PAGES NAMING NOTHING (${orphanPages.length}) — a page the corpus cannot reach, which is`);
  console.log(`either a page about something else entirely, or a gap worth a look.`);
  for (const p of orphanPages) console.log(`   ${p}`);

  console.log(`\nBODIES NO PAGE NAMES STRONGLY (${orphanNodes.length} of ${byName.size}) — the reverse gap, and the`);
  console.log(`more interesting one: a body the corpus holds and this library never explains.`);
  for (const n of orphanNodes.slice(0, 20)) console.log(`   ${byName.get(n)[0].layer.padEnd(11)} ${n}`);
  if (orphanNodes.length > 20) console.log(`   ... and ${orphanNodes.length - 20} more`);

  console.log(`\n⚠️ Nothing here is established. Check one page before trusting any of it:`);
  console.log(`      node map_pages.mjs --page=method/the-lodge.md`);
}
