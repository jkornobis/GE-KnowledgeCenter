#!/usr/bin/env node
/**
 * rank_residency.mjs — what a page costs to have read, against what it answers.
 *
 * The Composer, 2026-09-10: "can we rank usefulness to keep in memory to the GE?"
 *
 * ⚠️ THE QUESTION HAS TO MOVE ONE STEP EARLIER BEFORE IT CAN BE ANSWERED, and the reason is
 * mechanical rather than a preference. There is no keep-or-drop control: everything that enters a
 * context is re-sent, in full, on every subsequent request. A page cannot be evicted once read.
 *
 * So the rankable quantity is not "keep" but "worth having read", and the cost of a read is
 *
 *     size  x  every turn that follows it
 *
 * The second factor is a property of the session, not of the page. What a page carries is its
 * SIZE — a constant, paid on every request from the moment it arrives to the end. That is what this
 * ranks, against a proxy for what the page answers.
 *
 * ⚠️ AND "WHAT IT ANSWERS" IS A PROXY, NOT USAGE. Nothing here measures which pages are actually
 * fetched; no instance records that. Three signals stand in for it:
 *
 *   bodies    corpus bodies the page names strongly — how much of the model it explains
 *   inbound   other pages that cite it — how often the library itself routes here
 *   moment    whether start.md's routing card names a moment that sends a reader here
 *
 * A page can serve well and score badly. Read the ranking as a question about pages nobody has
 * looked at from this angle, never as a verdict on their worth.
 *
 * ⚠️ A CATALOGUE WINS ANY RATIO OF THIS SHAPE AND EXPLAINS NOTHING. The mandala pages enumerate the
 * whole corpus, so they name every body while being lists rather than explanations. They are
 * labelled and excluded from the recommendation, never from the table.
 *
 * Token figures are chars / 3.7 and are APPROXIMATE. The exact figures for a session are billed
 * usage, and `method/the-floor.md` says how to read them. Do not mix the two in one sentence.
 *
 * Requires node >= 18. No dependencies. Reads the graph and the pages, writes nothing, exits 0.
 *
 *     node rank_residency.mjs            the ranking
 *     node rank_residency.mjs --json     machine-readable
 */
import { readdirSync, readFileSync, lstatSync } from "node:fs";
import { join } from "node:path";

const G = JSON.parse(readFileSync("graph/grand_ensemble.json", "utf8"));
const asJson = process.argv.includes("--json");

const bodies = [];
for (const L of Object.values(G.layers)) for (const n of L.nodes) bodies.push(n.name || n.id);
for (const m of G.movements?.nodes || []) bodies.push(m.name || m.id);
const names = [...new Set(bodies)].sort((a, b) => b.length - a.length);

// Same matching discipline as map_pages.mjs: longest match wins, flat scan, and the ordinary-English
// names are only strong when the text is deliberate. Duplicated rather than imported because these
// scripts are read one at a time and a reader should not have to open two.
const COMMON = new Set(["Tell", "Help", "Lots", "Program", "Unison", "NDT"]);
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const res = new Map(names.map((n) => [n, new RegExp(`(?<![\\w-])${esc(n)}(?![\\w-])`, "g")]));

const walk = (d) => readdirSync(d).flatMap((n) => {
  if (n === ".git" || n === "node_modules") return [];
  const p = join(d, n); let st; try { st = lstatSync(p); } catch { return []; }
  if (st.isSymbolicLink()) return [];
  return st.isDirectory() ? walk(p) : p.endsWith(".md") ? [p] : [];
});
const pages = walk(".").map((p) => p.replace(/^\.\//, "")).filter((p) => p !== "SESSION_LOG.md");

const card = readFileSync("start.md", "utf8");
const REF = /`([a-z0-9_][a-z0-9_.\/-]*\.md)`/g;
const inbound = Object.fromEntries(pages.map((p) => [p, 0]));

const rows = [];
for (const p of pages) {
  const src = readFileSync(p, "utf8").replace(/\r\n/g, "\n");
  for (const m of src.matchAll(REF)) if (m[1] !== p && inbound[m[1]] !== undefined) inbound[m[1]]++;
  const flat = src.replace(/\n/g, " ");
  const kept = [];
  let strong = 0;
  for (const name of names) {
    const r = res.get(name); r.lastIndex = 0;
    let m, count = 0;
    while ((m = r.exec(flat))) {
      const a = m.index, b = a + name.length;
      if (kept.some((k) => a >= k.a && b <= k.b)) continue;
      kept.push({ a, b }); count++;
    }
    if (!count) continue;
    const deliberate = new RegExp(`(^#{1,6} .*|\`[^\`]*)${esc(name)}`, "m").test(src);
    if (deliberate || (!COMMON.has(name) && (name.length >= 14 || count > 2))) strong++;
  }
  rows.push({ p, tok: Math.round(src.length / 3.7), bodies: strong, moment: card.includes("`" + p + "`") });
}
for (const r of rows) r.inbound = inbound[r.p];

// A page naming 25+ distinct bodies is a catalogue: it lists them, it does not explain them.
for (const r of rows) r.catalogue = r.bodies >= 25;
// Served is deliberately crude and its weights are stated rather than tuned: one point per body,
// three per inbound citation (a citation is the library itself routing here), ten for a named
// moment (the strongest statement that a reader will need this page).
for (const r of rows) r.served = r.bodies + r.inbound * 3 + (r.moment ? 10 : 0);
for (const r of rows) r.perK = r.served ? +(r.tok / 1000 / r.served).toFixed(2) : null;

if (asJson) { console.log(JSON.stringify(rows, null, 2)); process.exit(0); }

const tot = rows.reduce((a, b) => a + b.tok, 0);
console.log(`rank_residency — ${rows.length} pages · ~${tot.toLocaleString()} tokens if all were read\n`);
console.log(`  cost is size, because a page once read is re-sent on every request after it.`);
console.log(`  served is a PROXY: bodies + 3 x inbound citations + 10 for a named moment.\n`);

const rank = rows.filter((r) => !r.catalogue).sort((a, b) => (b.perK ?? 1e9) - (a.perK ?? 1e9));
console.log(`MOST EXPENSIVE PER THING SERVED — the question end of the table`);
console.log(`   tok/served   ~tok   bodies  in  moment  page`);
for (const r of rank.slice(0, 12))
  console.log(`   ${String(r.perK ?? "—").padStart(9)}  ${String(r.tok).padStart(6)}  ${String(r.bodies).padStart(6)}  ${String(r.inbound).padStart(3)}  ${r.moment ? "  yes " : "   no "}  ${r.p}`);

console.log(`\nCHEAPEST PER THING SERVED`);
for (const r of rank.slice(-6).reverse())
  console.log(`   ${String(r.perK ?? "—").padStart(9)}  ${String(r.tok).padStart(6)}  ${String(r.bodies).padStart(6)}  ${String(r.inbound).padStart(3)}  ${r.moment ? "  yes " : "   no "}  ${r.p}`);

const cat = rows.filter((r) => r.catalogue);
console.log(`\n${cat.length} catalogue page(s) held out of the ranking — they name 25+ bodies and list rather than explain:`);
for (const r of cat.sort((a, b) => b.tok - a.tok)) console.log(`   ${String(r.tok).padStart(6)} tok  ${r.bodies} bodies  ${r.p}`);

const none = rows.filter((r) => !r.served);
if (none.length) {
  console.log(`\n${none.length} page(s) serve nothing this can see — no body, no inbound citation, no moment:`);
  for (const r of none.sort((a, b) => b.tok - a.tok)) console.log(`   ${String(r.tok).padStart(6)} tok  ${r.p}`);
}
console.log(`\n⚠️ Nothing here measures whether a page is ever fetched. It ranks a proxy, and a page can`);
console.log(`serve well and score badly. Token figures are chars/3.7 and approximate — the exact ones`);
console.log(`are billed usage, and method/the-floor.md says how to read them.`);
