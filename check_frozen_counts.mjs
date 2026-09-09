#!/usr/bin/env node
/**
 * check_frozen_counts.mjs — a live page that states a corpus count, against the corpus.
 *
 * The defect this exists for has now appeared four times in three days: a value copied out of a
 * moving source and then trusted. render_solar.mjs held it, an HTML review page held it, index.md
 * held it in four places, and each fix corrected the instance and left the class alone (#42).
 *
 * IT ONLY READS LIVE PAGES. A page carrying `record: <date>` is a pass taken on a date and its
 * numbers are the record of that pass — editing one to agree with today rewrites the thing it
 * exists to be (index.md, "A page that is a record says so"). So the convention ruled on
 * 2026-09-09 is what makes this checkable at all: before it, there was nothing to tell the two
 * kinds apart.
 *
 * ⚠️ IT REPORTS AND DOES NOT GATE, and the reason is in its own output. It cannot tell a count
 * STATED as current from a count QUOTED as formerly wrong — index.md deliberately quotes "33
 * principles, 59 protocols, 282 crossings" so a reader can see what moved, and that line is
 * indistinguishable from the defect by any pattern. A check that fires on a correction teaches its
 * operator to ignore checks. `--strict` exits 1 for anyone who decides to wire it into a gate.
 *
 * Only five nouns are compared, and each is derivable from the graph with no interpretation:
 * principles, protocols, chairs, movements, crossings. `nodes` is deliberately excluded — "104
 * nodes across three rings" and "119 nodes" are both sayable and mean different sets.
 *
 * Requires node >= 18. No dependencies. Reads the graph and the pages, writes nothing.
 *
 *     node check_frozen_counts.mjs            the report
 *     node check_frozen_counts.mjs --strict   exit 1 if anything is stale
 */
import { readFileSync, readdirSync, lstatSync } from "node:fs";
import { join } from "node:path";

const G = JSON.parse(readFileSync("graph/grand_ensemble.json", "utf8"));
const strict = process.argv.includes("--strict");

const truth = {
  principles: G.layers.principles.nodes.length,
  protocols: G.layers.protocols.nodes.length,
  chairs: G.layers.musicians.nodes.length,
  movements: (G.movements?.nodes || []).length,
  crossings: G.cross.length,
};

const walk = (d) => readdirSync(d).flatMap((n) => {
  if (n === ".git" || n === "node_modules") return [];
  const p = join(d, n);
  let st; try { st = lstatSync(p); } catch { return []; }
  if (st.isSymbolicLink()) return [];
  return st.isDirectory() ? walk(p) : p.endsWith(".md") ? [p] : [];
});

const NOUN = new RegExp(`\\b(\\d{1,4})\\s+(${Object.keys(truth).join("|")})\\b`, "g");
const findings = [];
let live = 0, records = 0;

for (const path of walk(".").map((p) => p.replace(/^\.\//, ""))) {
  if (path === "SESSION_LOG.md") continue;                  // the journal is a record by nature
  const src = readFileSync(path, "utf8").replace(/\r\n/g, "\n");
  if (/^record:\s*\S+/m.test(src.slice(0, src.indexOf("\n---", 4) + 1))) { records++; continue; }
  live++;
  src.split("\n").forEach((line, i) => {
    NOUN.lastIndex = 0;
    let m;
    while ((m = NOUN.exec(line))) {
      const said = Number(m[1]), noun = m[2];
      if (said === truth[noun]) continue;
      // ⚠️ TWO SHAPES THAT ARE NOT TOTALS, and the first run reported both as stale.
      //   "0 crossings touch movements"  — a zero is never a corpus total; it is an absence claim,
      //                                    and none of the five truths can be zero.
      //   "41 of 59 protocols grounded"  — the number after `of` is the denominator of a subset,
      //                                    stated correctly as of some pass.
      // Neither is a live page freezing a total, which is the only thing this looks for.
      if (said === 0) continue;
      if (/\bof\s+$/.test(line.slice(0, m.index))) continue;
      findings.push({ path, lineNo: i + 1, said, noun, is: truth[noun], line: line.trim().slice(0, 118) });
    }
  });
}

console.log(`check_frozen_counts — live pages only, against graph/grand_ensemble.json\n`);
console.log(`   read      ${String(live).padStart(3)} live · ${records} marked \`record:\` and skipped`);
console.log(`   corpus    ${Object.entries(truth).map(([k, v]) => `${k} ${v}`).join(" · ")}\n`);

if (!findings.length) {
  console.log(`✓ no live page states a corpus count that disagrees with the graph`);
} else {
  console.log(`${findings.length} disagreement(s). EACH ONE IS A QUESTION, not a verdict — a line`);
  console.log(`quoting a former value on purpose looks exactly like a line that went stale.\n`);
  for (const f of findings) {
    console.log(`   ${f.path}:${f.lineNo}   says ${f.said} ${f.noun}, corpus holds ${f.is}`);
    console.log(`        ${f.line}`);
  }
  console.log(`\nA live page must not freeze a moving number. Remove it and name the artifact, or`);
  console.log(`mark the page \`record: <date>\` if it is a pass rather than a statement about now.`);
}
if (strict && findings.length) process.exit(1);
