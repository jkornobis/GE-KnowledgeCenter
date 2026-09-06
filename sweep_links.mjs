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
 *     node sweep_links.mjs --strict     exit 1 if anything is dead
 *     node sweep_links.mjs --json       machine-readable, for whatever files the issue
 *
 * A 403 or 429 is reported apart from a 404: those are the address refusing THIS caller, not the
 * address being gone. Counting them as rot is how a sweep teaches its reader to ignore it.
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

const dead = results.filter((r) => r.status >= 400 && r.status !== 403 && r.status !== 429);
const refused = results.filter((r) => r.status === 403 || r.status === 429);
const silent = results.filter((r) => r.status === 0);
const ok = results.length - dead.length - refused.length - silent.length;

if (asJson) {
  console.log(JSON.stringify({ total: results.length, ok, dead, refused, silent }, null, 2));
} else {
  const line = (a) => a.forEach((r) => {
    console.log(`  ${String(r.status || r.error).padEnd(8)} ${r.url}`);
    r.pages.forEach((p) => console.log(`           ${p}`));
  });
  console.log(`sweep — ${results.length} distinct addresses across ${new Set([...pages.values()].flatMap((s) => [...s])).size} pages\n`);
  console.log(`  ${ok} answered · ${dead.length} dead · ${refused.length} refused this caller · ${silent.length} silent\n`);
  if (dead.length)    { console.log(`✗ ${dead.length} dead:`); line(dead); console.log(); }
  if (silent.length)  { console.log(`? ${silent.length} silent — no answer, which may be the network rather than the address:`); line(silent); console.log(); }
  if (refused.length) { console.log(`· ${refused.length} refused this caller (403/429) — reported, never counted as rot:`); line(refused); console.log(); }
  if (!dead.length)   console.log("✓ nothing dead");
}

process.exit(strict && dead.length ? 1 : 0);
