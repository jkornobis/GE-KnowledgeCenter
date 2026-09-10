#!/usr/bin/env node
/**
 * card.mjs — one body, as a card: name, tags, shelfmark, links. And the task mandala it cuts.
 *
 * The Composer, 2026-09-10, on where this is going: "going back full to card system of german
 * library with name, tag and physical hyperlink of where's book in the library" — and then, on the
 * drawing: "the mandala task is only a derivation of meta mandala, only connected dots needed for
 * task."
 *
 * The lineage checks out and is older than it looks. The card is 18th century — Linnaeus cut slips
 * for species, and the Viennese Imperial Library held 300 000 of them by 1780. WHAT GERMANY ADDED
 * IN 1951 WAS THE ADDRESS: Luhmann's Zettelkasten gave every card a place (1 -> 1a -> 1a1) and
 * cross-references that jump to other places. A card that knows where it is and points at others is
 * a graph node, on paper, forty years before anyone drew one.
 *
 * ⚠️ AND HIS ENTRY POINTS WERE KEPT OUTSIDE THE BOX — a small number of index notes pointing into
 * clusters, never the box itself. That is why this script has STRUCTURE cards: a reader who does
 * not already know a body's name has no way in, and the catalogue is not the answer to that.
 * Nobody enters a library and reads the librarian's index.
 *
 *   card        a body: what it is, what it is tagged, WHICH PAGES HOLD IT, and what it links to
 *   structure   an entry point: one per cluster and family, listing what is inside
 *   task        several bodies pulled at once, and the induced subgraph between them —
 *               the task mandala, CUT from the meta-mandala rather than built beside it
 *
 * THE SHELFMARK IS DERIVED EVERY TIME (ruled 2026-09-10) and never written into the corpus. Not one
 * of the corpus's 119 nodes points at a page in this library — every path field aims at another
 * estate's trees — so the address is computed from the pages themselves, cannot go stale, and stays
 * honest when a page moves. A shelfmark written down is a value copied out of a moving source.
 *
 * Requires node >= 18. No dependencies. Reads the graph and the pages, writes nothing, exits 0.
 *
 *     node card.mjs "The Reduction"
 *     node card.mjs --structure
 *     node card.mjs --structure="Balance"
 *     node card.mjs --ask="Episteme vs. doxa"           the librarian asks back
 *     node card.mjs --ask="Episteme vs. doxa" --in="Epistemics"
 *     node card.mjs --task="The Reduction,Minimum Duet,Dèmos Kratos"
 *     node card.mjs "The Reduction" --json
 */
import { readFileSync, readdirSync, lstatSync } from "node:fs";
import { join } from "node:path";

const G = JSON.parse(readFileSync("graph/grand_ensemble.json", "utf8"));
const argv = process.argv.slice(2);
const arg = (k) => { const a = argv.find((x) => x === `--${k}` || x.startsWith(`--${k}=`)); return a === undefined ? null : (a.includes("=") ? a.slice(k.length + 3) : ""); };
const asJson = argv.includes("--json");

const meta = new Map();
for (const [layer, o] of Object.entries(G.layers)) for (const n of o.nodes) meta.set(n.id, { ...n, layer });
for (const n of G.movements?.nodes || []) meta.set(n.id, { ...n, layer: "movements" });
const nameOf = (id) => meta.get(id)?.name || id;
const byName = new Map([...meta].map(([id, n]) => [n.name || id, id]));
const group = (n) => n.cluster || n.family || n.layer;

const adj = new Map([...meta.keys()].map((k) => [k, []]));
const link = (a, b, k, s) => { if (adj.has(a) && adj.has(b) && a !== b) { adj.get(a).push({ to: b, k, s }); adj.get(b).push({ to: a, k, s }); } };
for (const o of Object.values(G.layers)) for (const e of o.edges || []) link(e.a, e.b, e.type, e.status);
for (const e of G.movements?.edges || []) link(e.a, e.b, e.type, e.status);
for (const c of G.cross) link(c.a, c.b, c.kind, c.status);

const walk = (d) => readdirSync(d).flatMap((n) => {
  if (n === ".git" || n === "node_modules") return [];
  const p = join(d, n); let st; try { st = lstatSync(p); } catch { return []; }
  if (st.isSymbolicLink()) return [];
  return st.isDirectory() ? walk(p) : p.endsWith(".md") ? [p] : [];
});
const pages = walk(".").map((p) => p.replace(/^\.\//, "")).filter((p) => p !== "SESSION_LOG.md")
  .map((p) => ({ p, flat: readFileSync(p, "utf8").replace(/\n/g, " ") }));
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// A page naming 25+ bodies is a catalogue: it lists this one, it does not explain it. Same rule as
// map_pages.mjs, and it matters more on a card — a shelfmark that sends a reader to a catalogue has
// sent them back to the index they were trying not to read.
const allNames = [...byName.keys()];
const catalogue = new Set(pages.filter((x) => allNames.filter((n) => n.length >= 8 && x.flat.includes(n)).length >= 25).map((x) => x.p));

const shelf = (nm) => {
  const re = new RegExp(`(?<![\\w-])${esc(nm)}(?![\\w-])`, "g");
  return pages.map(({ p, flat }) => { re.lastIndex = 0; let c = 0; while (re.exec(flat)) c++; return { p, c, cat: catalogue.has(p) }; })
    .filter((x) => x.c).sort((a, b) => (a.cat === b.cat ? b.c - a.c : a.cat ? 1 : -1));
};

const card = (id) => {
  const n = meta.get(id);
  return {
    name: n.name || id, seed: n.title || n.seed || null, layer: n.layer, group: group(n),
    flags: [n.enacted === false ? "not enacted" : null, n.groundedKind || null, (n.sources || []).length ? null : "no source"].filter(Boolean),
    shelf: shelf(n.name || id),
    links: adj.get(id).map((e) => ({ kind: e.k, status: e.s, to: nameOf(e.to) })),
  };
};

const render = (c) => {
  console.log(`┌─ ${c.name}`);
  if (c.seed) console.log(`│  ${c.seed}`);
  console.log(`│`);
  console.log(`│  TAGS    ${[c.layer, c.group, ...c.flags].join(" · ")}`);
  if (!c.shelf.length) console.log(`│  SHELF   — no page in this library holds it —`);
  else for (const s of c.shelf.slice(0, 4)) console.log(`│  SHELF   ${s.p} (${s.c})${s.cat ? "  [catalogue — lists it, does not explain it]" : ""}`);
  console.log(`│`);
  console.log(`│  LINKS   ${c.links.length}`);
  for (const l of c.links.slice(0, 10)) console.log(`│    -${String(l.kind || "?").padEnd(14)} ${l.to.slice(0, 40).padEnd(42)} [${l.status || "?"}]`);
  if (c.links.length > 10) console.log(`│    … and ${c.links.length - 10} more`);
  console.log(`└─`);
};

// ---- THE REFERENCE INTERVIEW — the librarian asks back.
//
// The Composer, 2026-09-10: "the client and the librarian work together to finding knowledge."
// That is the reference interview, and it is the answer to a problem this file could not solve by
// arithmetic. A card for a CENTRAL body is a card for the whole library: `Episteme vs. doxa` has 34
// neighbours and reaches 101 of 119 bodies within two hops. Weighting by centrality was the obvious
// fix and it is the wrong one — it silently drops what the reader might have wanted.
//
// ⚠️ A LIBRARIAN DOES NOT NARROW SILENTLY. It asks. And the signal for whether to ask is already in
// the graph: how many GROUPS the neighbours fall into.
//
//     The Reduction         3 neighbours, 1 group     answer — there is nothing to ask
//     Serendipity           9 neighbours, 5 groups    one question narrows it
//     Episteme vs. doxa    34 neighbours, 14 groups   ask, or return the library
//
// The question writes itself from the groups, so nothing is invented and nothing is hidden: the
// reader sees every group and its size, and chooses. Luhmann solved the same problem structurally
// with entry points kept outside the box; this is the conversational half of it.
const ASK_ABOVE = 2;                                    // 1 group is an answer, not a question

const askMode = arg("ask");
if (askMode) {
  const id = byName.get(askMode);
  if (!id) { console.log(`no card for "${askMode}". Try: node card.mjs --structure`); process.exit(0); }
  const nb = adj.get(id).map((e) => e.to);
  const uniq = [...new Set(nb)];
  const by = new Map();
  for (const x of uniq) { const g = group(meta.get(x)); if (!by.has(g)) by.set(g, []); by.get(g).push(nameOf(x)); }
  const groups = [...by].sort((a, b) => b[1].length - a[1].length);
  console.log(`${askMode} — ${uniq.length} neighbours in ${groups.length} group(s)\n`);
  if (groups.length <= ASK_ABOVE) {
    console.log(`  ANSWER — nothing to ask. The whole neighbourhood:\n`);
    for (const [g, ns] of groups) for (const n of ns) console.log(`    ${n.slice(0, 44).padEnd(46)} ${g}`);
    process.exit(0);
  }
  const pick = arg("in");
  if (pick) {
    const ns = by.get(pick);
    if (!ns) { console.log(`  no group "${pick}" among its neighbours.`); process.exit(0); }
    console.log(`  narrowed to ${pick} — ${ns.length}:\n`);
    for (const n of ns) console.log(`    ${n}`);
    process.exit(0);
  }
  console.log(`  ⚠️ Too wide to answer. Which of these are you asking about?\n`);
  for (const [g, ns] of groups)
    console.log(`    ${String(ns.length).padStart(2)}  ${g.padEnd(24)} ${ns.slice(0, 3).join(" · ")}${ns.length > 3 ? " …" : ""}`);
  console.log(`\n  node card.mjs --ask="${askMode}" --in="<group>"   to take one`);
  process.exit(0);
}


// ---- STRUCTURE CARDS — the entry points, kept outside the box.
const groups = new Map();
for (const [id, n] of meta) { const g = group(n); if (!groups.has(g)) groups.set(g, []); groups.get(g).push(id); }

const st = arg("structure");
if (st !== null) {
  if (!st) {
    console.log(`the entry points — ${groups.size} of them, one per cluster and family\n`);
    console.log(`  a reader who does not know a body's name starts here, not at the index.\n`);
    for (const [g, ids] of [...groups].sort((a, b) => b[1].length - a[1].length))
      console.log(`  ${String(ids.length).padStart(3)}  ${g.padEnd(26)} ${meta.get(ids[0]).layer}`);
    console.log(`\n  node card.mjs --structure="<name>"   to open one`);
    process.exit(0);
  }
  const ids = groups.get(st);
  if (!ids) { console.log(`no entry point called "${st}". Try: node card.mjs --structure`); process.exit(0); }
  console.log(`╔═ ${st} — ${ids.length} bodies\n║`);
  for (const id of ids.sort((a, b) => adj.get(b).length - adj.get(a).length)) {
    const s = shelf(nameOf(id)).filter((x) => !x.cat)[0];
    console.log(`║  ${nameOf(id).slice(0, 38).padEnd(40)} ${String(adj.get(id).length).padStart(3)} links   ${s ? s.p : "— unshelved —"}`);
  }
  console.log(`╚═`);
  process.exit(0);
}

// ---- TASK — the induced subgraph, which is the task mandala.
const task = arg("task");
if (task) {
  const want = task.split(",").map((s) => s.trim()).filter(Boolean);
  const ids = want.map((w) => byName.get(w)).filter(Boolean);
  const missing = want.filter((w) => !byName.get(w));
  const set = new Set(ids);
  console.log(`task mandala — ${ids.length} card(s) pulled${missing.length ? `, ${missing.length} not in the corpus: ${missing.join(" · ")}` : ""}\n`);
  const edges = [];
  for (const id of ids) for (const e of adj.get(id)) if (set.has(e.to) && id < e.to) edges.push({ a: nameOf(id), b: nameOf(e.to), k: e.k, s: e.s });
  for (const id of ids) {
    const s = shelf(nameOf(id)).filter((x) => !x.cat)[0];
    console.log(`  ● ${nameOf(id).slice(0, 40).padEnd(42)} ${s ? s.p : "— unshelved —"}`);
  }
  console.log(`\n  ${edges.length} edge(s) between them — this is the whole drawing:`);
  for (const e of edges) console.log(`    ${e.a} ─${e.k}─ ${e.b}  [${e.s}]`);
  const orphans = ids.filter((id) => !adj.get(id).some((e) => set.has(e.to)));
  if (orphans.length) console.log(`\n⚠️ ${orphans.length} pulled card(s) connect to nothing else pulled: ${orphans.map(nameOf).join(" · ")}`);
  console.log(`\nOnly connected dots are drawn. Nothing here was built — it was cut from the meta-mandala.`);
  process.exit(0);
}

const want = argv.find((a) => !a.startsWith("--"));
if (!want) { console.log(`node card.mjs "<body>"   ·   --structure   ·   --task="A,B,C"`); process.exit(0); }
const id = byName.get(want);
if (!id) {
  const near = [...byName.keys()].filter((n) => n.toLowerCase().includes(want.toLowerCase()));
  console.log(`no card for "${want}".${near.length ? " Did you mean: " + near.slice(0, 5).join(" · ") : " Try: node card.mjs --structure"}`);
  process.exit(0);
}
if (asJson) console.log(JSON.stringify(card(id), null, 2)); else render(card(id));
