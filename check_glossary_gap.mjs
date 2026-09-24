#!/usr/bin/env node
/**
 * check_glossary_gap.mjs — which words does this library run on, and which are defined?
 *
 * A REPORTER, NEVER A GATE. Adopted 2026-09-24 (#156) from the instrument GE-Workshop built and
 * retired the same day, when this library became the author of `method/orchestra_glossary.md`.
 * Both halves of what it watches are now here. Its reasoning is theirs, and the three lessons
 * below are kept in their words because they are why it works:
 *
 *   v1 took candidates from **bold** spans. `taijitu` was bold in 4 files and bare in 27, so the
 *   most load-bearing word was invisible. BOLD MEASURES NOVELTY, NOT IMPORTANCE.
 *   v2 used a hand-written seed list and a capitalised-bigram rule, mixed `lever` with product
 *   names, and overstated the gap by about a third. So this PARTITIONS rather than totalling, and
 *   keeps its exclusions in the open.
 *   Every SEEDS entry is the hole made visible: a term it could only find because someone typed it.
 *
 * What changed on adoption: it reads THIS tree (the walk the gates use, symlinks never followed —
 * the first adapted run followed `canvas/` and counted 346 pages instead of 110), and its canary
 * is pinned. The original required taijitu / yin / yang to be undefined in the live glossary, and
 * #152 defined them. Scored now against the glossary AS IT STOOD at a3497b8, before #152, taken
 * from git, so the canary cannot be spent again by the glossary improving.
 *
 * "Load-bearing" is SPREAD: at least 5 files and at least 2 top-level directories.
 *
 *   node check_glossary_gap.mjs            report
 *   node check_glossary_gap.mjs --control  the acceptance test alone
 *
 * Exit 0 reported · 1 acceptance test failed, nothing reported · 2 git or the glossary unreadable.
 */
import { readdirSync, readFileSync, lstatSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const GLOSSARY = "method/orchestra_glossary.md";
const CANARY_AT = "a3497b8";                    // the glossary before #152 defined the canary
const CANARY = ["taijitu", "yin", "yang"];
const CONTROL = process.argv.includes("--control");
const MIN_FILES = 5, MIN_LAYERS = 2;

const SEEDS = [
  "taijitu", "yin", "yang", "interval", "sweep", "seam", "lever", "register",
  "mandala", "frontier", "warrant", "altitude", "quorum", "premiere", "crescendo",
  "overshoot", "steelman", "provenance", "corroborated", "asserted", "inert",
];
// Things this corpus does not own. Correctly undefined, and printed rather than dropped.
const EXTERNAL = new Set([
  "stack overflow", "code connect", "claude code", "claude desktop", "style dictionary",
  "dev mode", "figma variables", "atomic design", "design tokens", "open webui",
  "lm studio", "material symbols", "github pages", "node js",
  "tokens studio", "scrum master", "figma motion", "figma plugin",   // added on adoption
]);
const CHAIRS = new Set(["agile facilitator", "agile auditor", "ux designer", "accessibility specialist",
  "software engineer", "qa engineer", "content designer", "product owner", "user researcher",
  "software architect", "reliability engineer", "design engineer"]);
const STOP = new Set(["the", "and", "for", "with", "this", "that", "what", "why", "how", "one", "two", "not",
  "read", "when", "where", "open", "close", "next", "last", "same", "both", "each", "every", "from", "into",
  "tool", "page", "file", "note", "line", "rule", "name", "word", "work", "made", "said", "says"]);

const terms = (src) => {
  const out = new Set();
  for (const m of src.matchAll(/^- \*\*(.+?)\*\*/gm)) m[1].split("/").forEach((t) => out.add(t.trim().toLowerCase()));
  return out;
};
let live, pinned, head;
try {
  live = terms(readFileSync(join(ROOT, GLOSSARY), "utf8"));
  pinned = terms(execFileSync("git", ["show", `${CANARY_AT}:${GLOSSARY}`], { cwd: ROOT, encoding: "utf8" }));
  head = execFileSync("git", ["rev-parse", "--short", "HEAD"], { cwd: ROOT, encoding: "utf8" }).trim();
} catch (e) {
  process.stderr.write(`check_glossary_gap: cannot read the glossary or its pinned copy — ${e.message}\n`);
  process.exit(2);
}
// A captured phrase that is the start of a defined term is that term, cut off by the three-word
// window ("Too Big Too" is "Too Big Too Soon"), not a gap.
const definedAs = (set, k) => set.has(k) || [...set].some((t) => t.startsWith(k + " "));

const walk = (d) => readdirSync(d).flatMap((n) => {
  if (n === ".git" || n === "node_modules") return [];
  const p = join(d, n); const st = lstatSync(p);
  if (st.isSymbolicLink()) return [];
  return st.isDirectory() ? walk(p) : n.endsWith(".md") ? [p] : [];
});
const files = walk(ROOT);

const seen = new Map();
const note = (k, label, rel, layer) => {
  if (!seen.has(k)) seen.set(k, { label, files: new Set(), layers: new Set(), n: 0 });
  const e = seen.get(k); e.files.add(rel); e.layers.add(layer); e.n++;
};
for (const f of files) {
  const rel = relative(ROOT, f).split("\\").join("/");
  const layer = rel.includes("/") ? rel.split("/")[0] : "(root)";
  // Code is stripped: a path is not a term, and a flag in a command is not vocabulary.
  const src = readFileSync(f, "utf8").replace(/```[\s\S]*?```/g, " ").replace(/`[^`\n]*`/g, " ");
  for (const s of SEEDS) for (const _ of src.matchAll(new RegExp(`\\b${s}\\b`, "gi"))) note(s, s, rel, layer);
  for (const m of src.matchAll(/\b([A-Z][a-z]{2,})\s+([A-Z][a-z]{2,})(?:\s+([A-Z][a-z]{2,}))?\b/g)) {
    const words = [m[1], m[2], m[3]].filter(Boolean);
    if (words.some((w) => STOP.has(w.toLowerCase()))) continue;
    const label = words.join(" ");
    if (!CHAIRS.has(label.toLowerCase())) note(label.toLowerCase(), label, rel, layer);
  }
}
const spread = [...seen.entries()]
  .map(([k, v]) => ({ k, label: v.label, files: v.files.size, layers: v.layers.size, n: v.n }))
  .filter((r) => r.files >= MIN_FILES && r.layers >= MIN_LAYERS)
  .sort((a, b) => b.files - a.files || b.n - a.n);

const surfaced = CANARY.filter((t) => spread.some((r) => r.k === t && !pinned.has(t)));
if (CONTROL || !surfaced.length) {
  console.log(`acceptance — ${CANARY.join(" / ")} against the glossary at ${CANARY_AT}: ${surfaced.length ? "PASS (" + surfaced.join(", ") + ")" : "FAIL — the instrument is blind, nothing reported"}`);
  process.exit(surfaced.length ? 0 : 1);
}
const rows = spread.filter((r) => !definedAs(live, r.k));
const external = rows.filter((r) => EXTERNAL.has(r.k));
const house = rows.filter((r) => !EXTERNAL.has(r.k));
const table = (title, list, why) => {
  console.log(`\n### ${title} — ${list.length}\n\n*${why}*\n\n| files | layers | uses | term |\n|---|---|---|---|`);
  for (const r of list) console.log(`| ${r.files} | ${r.layers} | ${r.n} | ${r.label} |`);
};
console.log(`## Glossary gap — ${head}, ${files.length} pages, ${live.size} terms defined`);
console.log(`\nLoad-bearing = at least ${MIN_FILES} files and ${MIN_LAYERS} directories. Acceptance passed (${surfaced.join(", ")}).`);
table("Single words, undefined", house.filter((r) => !/\s/.test(r.label)), "Found only because a human put them in SEEDS: the hole, not just its output.");
table("Named concepts, undefined", house.filter((r) => /\s/.test(r.label)), "Capitalised phrases the corpus uses as its own. Some may be page titles rather than glossary terms.");
table("External, correctly undefined", external, "Things this corpus does not own, excluded by a visible list so the exclusion can be argued with.");
console.log(`\n**${house.length} house candidates, ${external.length} external excluded.** The raw total overstates the gap.`);
