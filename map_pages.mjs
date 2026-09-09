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
 *     node map_pages.mjs --chair="UX Designer"   the reading index for one chair
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

// ---- THE READING INDEX FOR ONE CHAIR, which is the thing this join was built for: the Composer,
// 2026-09-08 — "Library is here to be a library, give book index to read when musicians in a chair
// need it."
//
// Two routes, and the second is the one no hand-written index would have found. DIRECT is every
// page that names the chair. BOUND is every principle and protocol the corpus ties to that chair,
// and the pages that explain THOSE — a page can be owed to a chair without ever naming it.
//
// ⚠️ And the third list is the point: bodies bound to the chair that NO page explains. That is the
// chair's own gap, derived rather than guessed, and it is per-chair rather than for the library as
// a whole.
const oneChair = arg("chair");
if (oneChair) {
  const chairNode = G.layers.musicians.nodes.find((n) => (n.name || n.id) === oneChair);
  if (!chairNode) {
    console.log(`no such chair: ${oneChair}`);
    console.log(`   ${G.layers.musicians.nodes.map((n) => n.name || n.id).join(" · ")}`);
    process.exit(0);
  }
  const id = chairNode.id;
  const nameOf = new Map(nodes.map((n) => [n.id, n.name]));
  const bound = new Map();                      // body id -> how it is tied
  const tie = (a, b, k) => { if (a === id && b !== id) bound.set(b, k); if (b === id && a !== id) bound.set(a, k); };
  for (const L of Object.values(G.layers)) for (const e of L.edges || []) tie(e.a, e.b, e.type || "edge");
  for (const c of G.cross || []) tie(c.a, c.b, c.kind || "cross");

  // Ranked by how often a page names the body, and TRUNCATED. A body "explained by forty pages" is
  // not an index entry, it is the search result an index exists to replace — the first version of
  // this printed exactly that and was unreadable.
  // ⚠️ A CATALOGUE PAGE WINS EVERY RANKING AND EXPLAINS NOTHING. The four mandala pages enumerate
  // the whole corpus, so they name every body and outrank the page actually about it. They are not
  // excluded — a layer catalogue is a legitimate place to start — they are LABELLED, so a reader can
  // see at a glance that the top hit is a list rather than an explanation.
  const distinct = {};
  for (const h of hits) if (h.tier === "strong") (distinct[h.page] = distinct[h.page] || new Set()).add(h.name);
  const isCatalogue = (p) => (distinct[p]?.size || 0) >= 25;

  const pagesFor = (nm, k = 3) => hits.filter((h) => h.name === nm && h.tier === "strong")
    .sort((a, b) => b.count - a.count)
    .map((h) => `${h.page} (${h.count})${isCatalogue(h.page) ? " [catalogue]" : ""}`).slice(0, k);

  console.log(`${oneChair} — the reading index, derived\n`);
  const direct = hits.filter((h) => h.name === oneChair && h.tier === "strong").sort((a, b) => b.count - a.count);
  console.log(`DIRECT — ${direct.length} pages name this chair; the eight that name it most:`);
  for (const h of direct.slice(0, 8)) console.log(`   ${String(h.count).padStart(3)}x  ${h.page}${isCatalogue(h.page) ? "  [catalogue]" : ""}`);

  // ⚠️ Chair-to-chair edges are dropped. A chair tied to another chair is a working relation, not
  // something to read — leaving them in put "Agile Facilitator, explained by 40 pages" at the top
  // of every chair's index.
  const chairIds = new Set(G.layers.musicians.nodes.map((n) => n.id));
  const rows = [...bound].filter(([b]) => !chairIds.has(b))
    .map(([b, k]) => ({ body: nameOf.get(b) || b, how: k, pages: pagesFor(nameOf.get(b) || b) }))
    .filter((r) => !!r.body).sort((a, b) => b.pages.length - a.pages.length);
  const explained = rows.filter((r) => r.pages.length);
  console.log(`\nBOUND — ${rows.length} principles and protocols the corpus ties to this chair; ${explained.length} are explained somewhere`);
  for (const r of explained)
    console.log(`   ${r.body}  (${r.how})\n        ${r.pages.join("  ·  ")}`);

  const orphan = rows.filter((r) => !r.pages.length);
  console.log(`\n⚠️ THIS CHAIR'S GAP — ${orphan.length} bodies bound to it that no page explains`);
  for (const r of orphan) console.log(`   ${r.body}  (${r.how})`);
  console.log(`\n[catalogue] = a page that names 25+ bodies. It lists this one; it does not explain it.`);
  console.log(`Derived, not authored. Check any row before acting on it:  node map_pages.mjs --page=<path>`);
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
