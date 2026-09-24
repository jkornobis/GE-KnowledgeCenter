#!/usr/bin/env node
/**
 * sweep_links.mjs — the OUTWARD half, and deliberately not a gate.
 *
 * `check_links.mjs` resolves references INSIDE the tree and never looks out. This walks the
 * external addresses instead: every http(s) address in every tracked .md, asked whether it still
 * answers.
 *
 * ⚠️ It is a SWEEP, not a gate, and the distinction is the whole design. Ruled 2026-09-06 after
 * the outward and inward halves (issues #5 and #59) were put as one question:
 *
 *   - a merge gate must be deterministic and offline. One that reaches the network fails for
 *     reasons that have nothing to do with the change in front of it — a host down, a rate limit,
 *     a captive portal — and a red gate nobody trusts is worse than no gate at all.
 *   - address rot is real and slow. It deserves reporting, not blocking.
 *
 * So this EXITS 0 whatever it finds, and reports. `--strict` flips that for anyone who wants it in
 * a pipeline; nothing in this repository passes it.
 *
 *     node sweep_links.mjs              report to stdout
 *     node sweep_links.mjs --strict     exit 1 if anything is missing
 *     node sweep_links.mjs --json       machine-readable, for whatever files the issue
 *
 * FOUR VERDICTS, and only one of them is about the address (2026-09-24, #145 item 7). The rule
 * is borrowed from agile-watcher's `probe.py` rather than learned again from scratch here:
 *
 *   answers   2xx/3xx. The address RESPONDS. Never printed as verified: a 200 says nothing about
 *             whether the page still says what this library cites it for.
 *   missing   any other 4xx/5xx. The one verdict on the ADDRESS, never on the source.
 *   later     429, 502, 503, 504, a timeout, no answer. The address may be right and the host
 *             cannot answer now. Filing these as dead is the mistake the Watcher made until
 *             2026-08-30, and a 362-address sweep meets it on its first run.
 *   refused   401, 403. The host answered and will not show THIS caller. It is not "later", since
 *             waiting will not change it. It is the instrument's blind spot, not the world's
 *             state (`method/the-fourth-verdict.md`).
 *
 * ⚠️ A 404 is not always rot: a host that requires authentication answers 404 to an anonymous
 * caller rather than 401, so a private repository's issues look exactly like deleted ones from
 * here. The sweep cannot tell those apart and does not try — no host is special-cased, because a
 * list of an estate's private hosts is estate detail and this library carries none. Read the 404s
 * with that in mind.
 *
 * Requires node ≥ 18 for global fetch. No dependencies, by design — this library ships none.
 */
import { readFileSync, readdirSync, lstatSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const SKIP = new Set([".git", "node_modules", "docs-site"]);
const CONCURRENCY = 8;
const TIMEOUT_MS = 12000;
const strict = process.argv.includes("--strict");
const asJson = process.argv.includes("--json");

const walk = (d) =>
  readdirSync(d).flatMap((n) => {
    if (SKIP.has(n)) return [];
    const p = join(d, n);
    let st;
    try { st = lstatSync(p); } catch { return []; }  // unreadable or vanished mid-walk
    if (st.isSymbolicLink()) return [];              // never leave the repository — see the gates
    return st.isDirectory() ? walk(p) : n.endsWith(".md") ? [p] : [];
  });

// Trailing punctuation is prose, not address. Markdown wrappers are stripped the same way.
const clean = (u) => u.replace(/[)\]>.,;:'"`]+$/, "");
const isLocal = (u) =>
  /^https?:\/\/(localhost|127\.|0\.0\.0\.0|192\.168\.|10\.|172\.(1[6-9]|2\d|3[01])\.)/.test(u);

const pages = new Map();                              // address -> Set(page)
for (const abs of walk(ROOT)) {
  const rel = relative(ROOT, abs).split("\\").join("/");
  for (const m of readFileSync(abs, "utf8").matchAll(/https?:\/\/[^\s)<>"'`\]]+/g)) {
    const u = clean(m[0]);
    if (isLocal(u)) continue;
    if (!pages.has(u)) pages.set(u, new Set());
    pages.get(u).add(rel);
  }
}

const ask = async (url) => {
  for (const method of ["HEAD", "GET"]) {
    try {
      const r = await fetch(url, {
        method,
        redirect: "follow",
        signal: AbortSignal.timeout(TIMEOUT_MS),
        headers: { "user-agent": "GE-KnowledgeCenter sweep_links" },
      });
      if (r.status === 405 || r.status === 501) continue;   // HEAD unsupported, ask again
      return { status: r.status };
    } catch (e) {
      if (method === "GET") return { status: 0, error: e.name === "TimeoutError" ? "timeout" : e.message };
    }
  }
  return { status: 0, error: "no answer" };
};

const urls = [...pages.keys()].sort();
const results = new Array(urls.length);
let next = 0;
await Promise.all(
  Array.from({ length: Math.min(CONCURRENCY, urls.length) }, async () => {
    while (next < urls.length) {
      const i = next++;
      results[i] = { url: urls[i], pages: [...pages.get(urls[i])].sort(), ...(await ask(urls[i])) };
    }
  })
);

const LATER_CODES = new Set([429, 502, 503, 504]);   // agile-watcher probe.py, verbatim
const later = results.filter((r) => r.status === 0 || LATER_CODES.has(r.status));
const REFUSED_CODES = new Set([401, 403]);         // needs a login, or this caller is barred
const refused = results.filter((r) => REFUSED_CODES.has(r.status));
const missing = results.filter((r) => r.status >= 400 && !REFUSED_CODES.has(r.status) && !LATER_CODES.has(r.status));
const answers = results.length - missing.length - later.length - refused.length;

if (asJson) {
  console.log(JSON.stringify({ total: results.length, answers, missing, later, refused }, null, 2));
} else {
  const line = (a) => a.forEach((r) => {
    console.log(`  ${String(r.status || r.error).padEnd(8)} ${r.url}`);
    r.pages.forEach((p) => console.log(`           ${p}`));
  });
  console.log(`sweep — ${results.length} distinct addresses across ${new Set([...pages.values()].flatMap((s) => [...s])).size} pages\n`);
  console.log(`  ${answers} answer · ${missing.length} missing · ${later.length} later · ${refused.length} refused\n`);
  if (missing.length) { console.log(`✗ ${missing.length} missing — a verdict on the address, never on the source:`); line(missing); console.log(); }
  if (later.length)   { console.log(`? ${later.length} later — the host could not answer now (429/502/503/504, timeout, no answer):`); line(later); console.log(); }
  if (refused.length) { console.log(`· ${refused.length} refused this caller (401/403) — the instrument's blind spot, never counted as rot:`); line(refused); console.log(); }
  console.log(`${missing.length ? "✗" : "✓"} ${missing.length} missing. The ${answers} that answer RESPOND; none of them is verified to still say what it is cited for`);
}

process.exit(strict && missing.length ? 1 : 0);
