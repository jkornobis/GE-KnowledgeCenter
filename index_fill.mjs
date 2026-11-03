#!/usr/bin/env node
/**
 * index_fill.mjs — fill the index's Covers cell from each page's own description.
 *
 * The defect this exists for: OKF §8 says an index entry carries the description of the page it
 * links to, so every description change meant typing the same text twice, once in the page and
 * once in `index.md`, and `check_okf.mjs` only warns (exit 0) when the two differ. Five rows
 * differed when this was written (2026-11-03). Ruled by the Composer 2026-11-03: fill the
 * cells, keep the grouping.
 *
 * WHAT IT DOES. For every table row of `index.md` shaped | `path.md` | Covers | ..., it reads the
 * page's frontmatter `description` and, with --write, replaces the Covers cell when the two
 * differ. It prints one line per difference and never touches anything else.
 *
 *     node index_fill.mjs            dry run: lists the rows that would change, writes nothing
 *     node index_fill.mjs --write    rewrites index.md, only those cells
 *
 * WHAT IT DOES NOT DO. It does not decide which table a page sits in (the grouping is hand-made,
 * on purpose), it does not add or remove rows, and it does not touch the Published date: that
 * date moves under its own rules (`check_okf.mjs`, the routing card). A description containing a
 * pipe cannot sit in a table cell and is reported, not written. A page with no description is
 * skipped. `check_okf.mjs` stays the gate: run it after --write.
 *
 * Exit 0 on a dry run or a clean write, 1 when a row could not be filled (pipe in the
 * description, or an unreadable page). Requires node >= 18. No dependencies.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();                                // like the other checks: run it at the root
const WRITE = process.argv.includes("--write");
const norm = (s) => s.replace(/\s+/g, " ").trim();

const descriptionOf = (src) => {
  const text = src.replace(/\r\n/g, "\n");
  if (!text.startsWith("---\n")) return null;
  const end = text.indexOf("\n---", 4);
  if (end < 0) return null;
  const m = text.slice(4, end).match(/^description:\s*(?:"((?:[^"\\]|\\.)*)"|'((?:[^']|'')*)'|(.+))\s*$/m);
  if (!m) return null;
  if (m[1] !== undefined) return m[1].replace(/\\"/g, '"').replace(/\\\\/g, "\\");
  if (m[2] !== undefined) return m[2].replace(/''/g, "'");
  return m[3].trim();
};

const raw = readFileSync(join(ROOT, "index.md"), "utf8");
const eol = raw.includes("\r\n") ? "\r\n" : "\n";
const lines = raw.split(eol);
let changed = 0, blocked = 0;

for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(/^(\|\s*`([^`]+\.md)`\s*\|\s*)([^|]+?)(\s*\|.*)$/);
  if (!m) continue;
  const page = join(ROOT, m[2]);
  if (!existsSync(page)) continue;                         // a missing page is check_okf's to report
  let want;
  try { want = descriptionOf(readFileSync(page, "utf8")); } catch { console.log(`unreadable  ${m[2]}`); blocked++; continue; }
  if (!want || norm(want) === norm(m[3])) continue;
  if (want.includes("|")) { console.log(`blocked     ${m[2]}: its description holds a pipe and cannot sit in a table cell`); blocked++; continue; }
  console.log(`${WRITE ? "filled     " : "would fill "} ${m[2]}`);
  lines[i] = m[1] + norm(want) + m[4];
  changed++;
}

if (WRITE && changed) writeFileSync(join(ROOT, "index.md"), lines.join(eol));
console.log(`index_fill: ${changed} cell(s) ${WRITE ? "written" : "would change"}, ${blocked} blocked${WRITE ? "" : " (dry run; --write to apply)"}`);
process.exit(blocked ? 1 : 0);
