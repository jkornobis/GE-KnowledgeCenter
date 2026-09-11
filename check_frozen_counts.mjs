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
 * ⚠️ IT COULD NOT GATE UNTIL 2026-09-11, and the obstacle was one case: it cannot tell a count
 * STATED as current from a count QUOTED as formerly wrong. index.md deliberately quotes "33
 * principles, 59 protocols, 282 crossings" so a reader can see what moved, and that line is
 * indistinguishable from the defect by any pattern. A check that fires on a correction teaches its
 * operator to ignore checks, so the case was given a marker rather than a heuristic:
 *
 *     <!-- quoted: <why> -->   anywhere in a paragraph, and that paragraph's numbers are read as
 *                              a former value on purpose. Paragraph-scoped, because the retraction
 *                              and the figure it retracts are one argument and wrap across lines.
 *
 * ⚠️ THE MARKER IS COUNTED AND PRINTED ON EVERY RUN, passing or failing. A silencer that is
 * invisible in the output is a silencer nobody audits, and this file exists because a number went
 * unread for twelve days.
 *
 * WHAT --strict PROVES, AND WHAT IT DOES NOT. It proves that no live page disagrees with the graph
 * copy THIS REPOSITORY SHIPS. It does not prove the copy is the corpus's — that is
 * check_corpus_freshness.mjs, it needs a source address this library deliberately does not carry,
 * and it is report-only for the reason written in its own header. Internal agreement is the only
 * thing a gate here can honestly hold; the copy's currency is a separate question with a separate
 * instrument.
 *
 * Only five nouns are compared, and each is derivable from the graph with no interpretation:
 * principles, protocols, chairs, movements, crossings. `nodes` is deliberately excluded — "104
 * nodes across three rings" and "119 nodes" are both sayable and mean different sets.
 *
 * ⚠️ WHAT IT DELIBERATELY DOES NOT READ, decided 2026-09-11 by sweeping for it rather than by
 * taste (#42). Two things were candidates and both were measured first:
 *
 *   percentages and ranks   62 live lines carry one. NOT ONE is derivable inside this bundle:
 *                           they are cited from outside (the ~30-40% axe ceiling, MAST's 42/37/21,
 *                           Ware & Franck's +60/+120/+200), or CSS values and thresholds that are
 *                           not measurements at all, or readings of something that is not here --
 *                           a session's token floor, a Figma file, another repository. **A gate
 *                           needs a derivable reference and there is none**, which is a stronger
 *                           reason than the pattern being hard.
 *
 *   .mjs and .html          two corpus counts live outside the pages, both in script headers, and
 *                           reading them would need the marker convention inside code comments for
 *                           a class of two. One was stale and is de-frozen instead
 *                           (classify_bodies.mjs, "27 of the 92", corpus 95).
 *
 * ⚠️ AND THE `of` EXEMPTION HAS A KNOWN BLIND SPOT, stated because it was found in the wild rather
 * than reasoned about: `27 of the 92 principles` is skipped, and its 92 WAS a corpus total that had
 * gone stale. The exemption tolerates a stale denominator by design -- "41 of 59 protocols" is
 * correct as of some pass -- so a total used as a denominator is invisible here. That is a
 * deliberate hole, not an oversight, and closing it would mean guessing which role a number plays.
 *
 * Requires node >= 18. No dependencies. Reads the graph and the pages, writes nothing.
 *
 *     node check_frozen_counts.mjs            the report
 *     node check_frozen_counts.mjs --strict   exit 1 if anything is stale — this is the gate
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
const MARK = "<!-- quoted:";
const findings = [];
let live = 0, records = 0, quotedBlocks = 0;
const marked = new Set();

for (const path of walk(".").map((p) => p.replace(/^\.\//, ""))) {
  if (path === "SESSION_LOG.md") continue;                  // the journal is a record by nature
  const src = readFileSync(path, "utf8").replace(/\r\n/g, "\n");
  if (/^record:\s*\S+/m.test(src.slice(0, src.indexOf("\n---", 4) + 1))) { records++; continue; }
  live++;
  const lines = src.split("\n");

  // A paragraph carrying the marker is a retraction: the figure in it is quoted BECAUSE it is
  // wrong. Scoped to the paragraph rather than the line because the retraction and the figure it
  // retracts are one argument, and prose wraps — index.md's says "this paragraph said" on one
  // line and the numbers on the next two.
  // ⚠️ A marker shown INSIDE a fenced block is an example of the marker, not a use of it — the
  // page that documents this convention has to print it to teach it, and would otherwise silence
  // itself and inflate the count below.
  let fenced = false;
  const isMark = lines.map((l) => {
    if (l.trimStart().startsWith("```")) { fenced = !fenced; return false; }
    return !fenced && l.includes(MARK);
  });

  const silenced = new Set();
  let start = 0;
  for (let i = 0; i <= lines.length; i++) {
    if (i < lines.length && lines[i].trim() !== "") continue;
    if (isMark.slice(start, i).some(Boolean)) {
      quotedBlocks++;
      marked.add(path);
      for (let j = start; j < i; j++) silenced.add(j);
    }
    start = i + 1;
  }

  lines.forEach((line, i) => {
    if (silenced.has(i)) return;
    NOUN.lastIndex = 0;
    let m;
    while ((m = NOUN.exec(line))) {
      const said = Number(m[1]), noun = m[2];
      if (said === truth[noun]) continue;
      // ⚠️ TWO SHAPES THAT ARE NOT TOTALS, and the first run reported both as stale.
      //   "0 crossings touch movements"  — a zero is never a corpus total; it is an absence claim,
      //                                    and none of the five truths can be zero.
      //   "41 of 59 protocols grounded"  — the number after `of` is the denominator of a subset,
      //                                    stated correctly as of some pass. `of THE 10 chairs` is
      //                                    the same construction and was missed until 2026-09-11,
      //                                    when it fired on a live page stating a scope ruling.
      // Neither is a live page freezing a total, which is the only thing this looks for.
      if (said === 0) continue;
      if (/\bof\s+(the\s+)?$/.test(line.slice(0, m.index))) continue;
      findings.push({ path, lineNo: i + 1, said, noun, is: truth[noun], line: line.trim().slice(0, 118) });
    }
  });
}

console.log(`check_frozen_counts — live pages only, against graph/grand_ensemble.json\n`);
console.log(`   read      ${String(live).padStart(3)} live · ${records} marked \`record:\` and skipped`);
console.log(`   silenced  ${String(quotedBlocks).padStart(3)} paragraph(s) marked \`<!-- quoted: \`${marked.size ? " in " + [...marked].join(", ") : ""}`);
console.log(`             named on every run, passing or failing — a silencer nobody sees is a silencer nobody audits`);
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
  console.log(`\nA live page must not freeze a moving number. Three ways out, and they are not`);
  console.log(`interchangeable — each one says a different thing about the page:`);
  console.log(`   remove it and name the artifact      the number was a statement about now`);
  console.log(`   mark the page \`record: <date>\`       the page is a pass, not a statement about now`);
  console.log(`   mark the paragraph \`<!-- quoted: \`   the figure is quoted BECAUSE it is wrong`);
}
if (strict && findings.length) process.exit(1);
