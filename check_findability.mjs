#!/usr/bin/env node
/**
 * check_findability.mjs — can a question's own words land on the page that answers it?
 *
 * The defect this exists for: the library says a reader is sent to `index.md` and then to the page
 * the row names, and nothing ever tests that the row says enough for a reader to choose it. A page
 * can be correct, indexed and routed, and still be unfindable by the words a person would use.
 *
 * WHAT IT DOES. Reads `findability_questions.json`: real questions asked of this library, each with
 * the page(s) that answer it. For each question it scores every `index.md` row (the path plus the
 * "Covers" cell) by the rarity-weighted overlap between the question's words and the row's words,
 * ranks the rows, and reports where the expected page landed.
 *
 *     rank 1-3   found      a reader scanning by those words lands on it
 *     rank 4+    weak       the row is there, and other rows say more of the question's words
 *     not ranked missed     no word of the question appears in the row at all
 *
 * ⚠️ WHAT IT IS, AND WHAT IT IS NOT. A lexical proxy, deterministic and free. It measures whether the
 * ROW carries the question's words. It is not a reader: a person or an agent who understands the
 * question may find a page the words would not, and may miss one they would. So a "missed" is
 * evidence that the row (or the page it routes) is under-described, never proof that a reader fails;
 * and a "found" is not proof that one succeeds. A real cold reader, a session that has never seen
 * this library asked the same questions, is the stronger test, and it is the Composer's to run
 * (this instance does not spawn agents unasked).
 *
 * ⚠️ HOW TO KEEP IT HONEST. The questions are REAL ones, taken from the sessions that needed the
 * answer, with the date and who asked in the file. They are never tuned until the check passes: a
 * miss is a finding about the index, and the cure is a better row, not a better question.
 *
 * Requires node >= 18. No dependencies. Reads index.md and the questions file, writes nothing.
 *
 *     node check_findability.mjs            the report (exit 0)
 *     node check_findability.mjs --strict   exit 1 if any question is missed or weak
 */
import { readFileSync } from "node:fs";

const STRICT = process.argv.includes("--strict");
const questions = JSON.parse(readFileSync("findability_questions.json", "utf8")).questions;

const STOP = new Set(("a an the of to in on for and or is are was were be do does did how what which who where when why " +
  "can could should would will it its this that these those with without from by as at not no if then than so " +
  "i you we they my our your their me us them there here about into out up down over under any all each every " +
  "page pages library file").split(/\s+/));

const stem = (w) => w.replace(/(ing|ed|es|s)$/, (m, g, i) => (i < 4 ? m : "")); // crude, and identical for rows and questions
const tokens = (text) =>
  text.toLowerCase().replace(/`/g, " ").split(/[^a-z0-9]+/)
    .filter((w) => w.length > 2 && !STOP.has(w)).map(stem);

// The index rows: | `path` | Covers | ... |
const rows = [];
for (const line of readFileSync("index.md", "utf8").split(/\r?\n/)) {
  const m = line.match(/^\|\s*`([^`]+\.md)`\s*\|\s*(.+?)\s*\|/);
  if (m) rows.push({ path: m[1], words: new Set(tokens(m[1].replace(/[/_.-]/g, " ") + " " + m[2])) });
}
if (rows.length === 0) { console.error("check_findability: no index rows read"); process.exit(2); }

const df = new Map();
for (const r of rows) for (const w of r.words) df.set(w, (df.get(w) || 0) + 1);
const idf = (w) => Math.log(1 + rows.length / (df.get(w) || 1));

let weak = 0, missed = 0, found = 0;
console.log(`check_findability: ${questions.length} questions against ${rows.length} index rows`);
for (const q of questions) {
  const qt = [...new Set(tokens(q.q))];
  const scored = rows
    .map((r) => ({ path: r.path, score: qt.reduce((s, w) => s + (r.words.has(w) ? idf(w) : 0), 0) }))
    .sort((a, b) => b.score - a.score || a.path.localeCompare(b.path));
  const expect = [].concat(q.expect);
  const place = expect.map((p) => {
    const i = scored.findIndex((s) => s.path === p);
    return { p, rank: i < 0 ? null : i + 1, score: i < 0 ? 0 : scored[i].score };
  });
  const best = place.filter((x) => x.rank !== null && x.score > 0).sort((a, b) => a.rank - b.rank)[0];
  let verdict;
  if (!best) { verdict = "MISSED"; missed++; }
  else if (best.rank <= 3) { verdict = "found "; found++; }
  else { verdict = "WEAK  "; weak++; }
  const top = scored.slice(0, 3).map((s) => s.path).join(", ");
  console.log(`  ${verdict} ${best ? "rank " + best.rank : "not ranked"}  ${q.id}  ${q.q}`);
  if (verdict !== "found ") console.log(`           expected ${expect.join(" | ")}; top three: ${top}`);
}
console.log(`\n  found ${found} · weak ${weak} · missed ${missed}`);
console.log(missed + weak === 0
  ? "✓ every question's words land on its page within the top three rows"
  : "≠ a miss is evidence that a row under-describes its page, not proof that a reader fails");
process.exit(STRICT && missed + weak ? 1 : 0);
