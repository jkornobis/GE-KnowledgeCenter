#!/usr/bin/env node
/**
 * check_forecasts.mjs — a live page that states a FUTURE date, once that date has passed.
 *
 * The defect this exists for: tools/figma-surface.md carried "code layers ... announced to ship
 * July 2026" under a Horizon heading, and it stayed there until 2026-10-24, three months after the
 * date, while the feature had in fact gone to open beta in October. Nothing read the sentence
 * against a calendar. A forecast is a claim with an expiry date, and the expiry was written in the
 * claim itself.
 *
 * WHAT IT FLAGS. A sentence that pairs a FORWARD cue (ship, will, planned, scheduled, expected,
 * due, coming, launch, rolling out, through, until, by, before) with a date that is now behind
 * today. Dates are ISO (2026-11-05), "Month YYYY", "Month D, YYYY" and "D Month YYYY". It reads
 * sentences, not pages, and says which sentence.
 *
 * WHAT IT DELIBERATELY DOES NOT READ, so a hit means something:
 *   - SESSION_LOG.md and any page carrying `record:` in its frontmatter. They are dated records of
 *     what was believed on a day; editing them to agree with today rewrites the thing they are.
 *   - a sentence already struck through (~~...~~) or carrying "corrected", "superseded",
 *     "retracted", "was wrong", "did not": the correction IS the resolution.
 *   - a paragraph marked `<!-- resolved: <why> -->`. The marker is COUNTED AND PRINTED on every run,
 *     passing or failing: a silencer that is invisible in the output is a silencer nobody audits
 *     (the same rule check_frozen_counts.mjs holds for its own marker).
 *
 * ⚠️ WHAT IT CANNOT KNOW. Whether the forecast came true. It knows only that the date passed with
 * the sentence still written as a future. The resolution is a human's, and is a reading, not a
 * measurement: a hit is a candidate for a rewrite, and the check is a prompt to read, not a verdict.
 * It is also blind to a forecast with no date ("coming soon"), which no calendar can expire.
 *
 * Requires node >= 18. No dependencies. Reads the pages, writes nothing.
 *
 *     node check_forecasts.mjs                    the report (exit 0)
 *     node check_forecasts.mjs --strict           exit 1 if any live forecast has expired
 *     node check_forecasts.mjs --today=2026-10-26 judge against another date (testing)
 */
import { readFileSync, readdirSync, lstatSync } from "node:fs";
import { join } from "node:path";

const args = process.argv.slice(2);
const STRICT = args.includes("--strict");
const todayArg = args.find((a) => a.startsWith("--today="));
const TODAY = todayArg ? new Date(todayArg.slice(8) + "T00:00:00Z") : new Date();
const todayISO = TODAY.toISOString().slice(0, 10);

const MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august",
  "september", "october", "november", "december"];
const MON = MONTHS.join("|");

// Each pattern returns the END of the period it names: a month-only date expires at month end.
const DATE_PATTERNS = [
  { re: /\b(20\d\d)-(\d\d)-(\d\d)\b/g, end: (m) => new Date(Date.UTC(+m[1], +m[2] - 1, +m[3])) },
  { re: new RegExp(`\\b(${MON})\\s+(\\d{1,2}),?\\s+(20\\d\\d)\\b`, "gi"),
    end: (m) => new Date(Date.UTC(+m[3], MONTHS.indexOf(m[1].toLowerCase()), +m[2])) },
  { re: new RegExp(`\\b(\\d{1,2})\\s+(${MON})\\s+(20\\d\\d)\\b`, "gi"),
    end: (m) => new Date(Date.UTC(+m[3], MONTHS.indexOf(m[2].toLowerCase()), +m[1])) },
  { re: new RegExp(`\\b(${MON})\\s+(20\\d\\d)\\b`, "gi"),
    end: (m) => new Date(Date.UTC(+m[2], MONTHS.indexOf(m[1].toLowerCase()) + 1, 0)) },
];

// A FORWARD phrase, not a bare word: "by", "until" and "will" alone match "authored by" and "did X
// until <date>", which is history (a first run with bare words found 109 hits, nearly all of them
// that, and a check that fires 109 times teaches its operator to ignore it).
const CUE = /\b(to ship|will ship|ships?\s+(in|on|by)|shipping\s+(in|on|by)|planned\s+(for|to|in|by)|scheduled\s+(for|to|on|in|by)|expected\s+(to|in|by|on)|due\s+(on|in|by)|due:|coming\s+(in|on|by)|to launch|will launch|launch(es)?\s+(in|on)|rolling out|to roll out|rolls? out\s+(in|on)|(free|available|open|valid|runs?|stays?|remains?)\b[^.;]{0,40}?\b(through|until|till))\b/i;
// A cue that is itself in the past ("was due 2026-10-22", "had been scheduled for ...") is not a forecast.
const PAST_BEFORE = /\b(was|were|had been|had|been)\s+$/i;
const RESOLVED = /~~|\b(corrected|superseded|retracted|was wrong|did not|never shipped|no longer)\b/i;
const MARKER = /<!--\s*resolved:[^>]*-->/;

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === ".git" || name === "node_modules") continue;
    const p = join(dir, name);
    if (lstatSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith(".md")) out.push(p);
  }
  return out;
}

function isRecord(text) {
  const fm = text.startsWith("---") ? text.slice(0, text.indexOf("\n---", 3)) : "";
  return /^record:/m.test(fm);
}

const hits = [];
let markers = 0;
let scanned = 0;
for (const file of walk(".")) {
  const rel = file.replace(/^\.[\\/]/, "").replace(/\\/g, "/");
  if (rel === "SESSION_LOG.md") continue;
  const text = readFileSync(file, "utf8");
  if (isRecord(text)) continue;
  scanned++;
  const lines = text.split(/\r?\n/);
  let para = [], start = 0;
  const flush = () => {
    if (!para.length) return;
    const block = para.join(" ");
    if (MARKER.test(block)) { markers++; para = []; return; }
    for (const sentence of block.split(/(?<=[.!?])\s+(?=[A-Z*`(\[])/)) {
      if (!CUE.test(sentence) || RESOLVED.test(sentence)) continue;
      for (const { re, end } of DATE_PATTERNS) {
        re.lastIndex = 0;
        for (const m of sentence.matchAll(re)) {
          const when = end(m);
          if (when < TODAY) {
            const before = sentence.slice(0, m.index);
            const tail = before.slice(-70);
            const cue = tail.match(CUE);
            if (cue && !PAST_BEFORE.test(tail.slice(0, tail.search(CUE)))) {
              hits.push({ rel, line: start + 1, date: when.toISOString().slice(0, 10), text: sentence.trim().slice(0, 170) });
            }
          }
        }
      }
    }
    para = [];
  };
  lines.forEach((l, i) => {
    if (l.trim() === "") { flush(); start = i + 1; }
    else { if (!para.length) start = i; para.push(l); }
  });
  flush();
}

// One line per (file, sentence); the same sentence can match through two date patterns.
const seen = new Set();
const unique = hits.filter((h) => { const k = h.rel + h.line + h.text; if (seen.has(k)) return false; seen.add(k); return true; });

console.log(`check_forecasts: ${scanned} live pages read, judged against ${todayISO}`);
console.log(`  resolved-markers in use: ${markers}  (counted on every run: a silencer nobody audits is a hole)`);
if (unique.length === 0) {
  console.log("✓ no live page states a future date that has already passed");
} else {
  console.log(`≠ ${unique.length} sentence(s) read as a forecast whose date has passed:`);
  for (const h of unique) console.log(`  ${h.rel}:${h.line}  [${h.date}]  ${h.text}`);
  console.log("  A hit is a candidate to rewrite, not a verdict: it cannot know whether the forecast came true.");
}
process.exit(STRICT && unique.length ? 1 : 0);
