#!/usr/bin/env node
/**
 * Dead-reference check for this library.
 *
 * WHY THIS EXISTS. On 2026-08-28 a fetch-first skill was pointed at this
 * library, and dead pointers surfaced one per turn over several hours — each
 * found by a reader noticing, never by a check. In a library read by path, a
 * pointer to a file that is not here does not error: the fetch 404s, the
 * reader is told "you asked wrong", and a page that WAS covered looks absent.
 * That is the failure the index exists to prevent, arriving from inside.
 *
 * PROVENANCE IS NOT A DEAD LINK, and the difference is the whole design.
 * Several pages cite paths in the estate that produced them — `brain/`,
 * `project/`, `agents/`, `skill/`, `docs/`. Those are dated records of what
 * was read, deliberately kept verbatim rather than remapped, because
 * inventing a correspondence would assert a derivation nobody made. They are
 * declared below and skipped.
 *
 * Everything else must resolve, from the repo root or relative to its page.
 *
 *   node check_links.mjs
 */
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, dirname, relative, posix } from "node:path";

const ROOT = process.cwd();
const PROVENANCE = ["brain/", "project/", "agents/", "skill/", "skills/", "docs/", "scripts/"];
const walk = (d) => readdirSync(d).flatMap((n) => {
  if (n === ".git" || n === "node_modules") return [];
  const p = join(d, n);
  return statSync(p).isDirectory() ? walk(p) : p.endsWith(".md") ? [p] : [];
});

const files = walk(ROOT);
const basenames = new Set(files.map((f) => relative(ROOT, f).split("\\").join("/").split("/").pop()));
const REF = /`([a-z0-9_][a-z0-9_.\/-]*\.(?:md|json))`/g;

// Two classes, reported apart, because they need different answers.
//
//   PATH-SHAPED (`protocols/tool-audit.md`) — a reader can and will fetch it.
//   Unresolved, it is a dead link and a defect.
//
//   BARE (`protocols.md`) — a filename with no directory. In this corpus these
//   are overwhelmingly provenance: the source repo's sibling names, kept
//   verbatim and declared as unfetchable on the pages that use them. A bare
//   name is only reported when NO file of that basename exists anywhere here,
//   and even then it is a candidate to check rather than a defect.
const dead = [], bare = [], skipped = new Set();

for (const abs of files) {
  const rel = relative(ROOT, abs).split("\\").join("/");
  const src = readFileSync(abs, "utf8").replace(/\r\n/g, "\n");
  for (const m of src.matchAll(REF)) {
    const target = m[1];
    if (PROVENANCE.some((p) => target.startsWith(p))) { skipped.add(target); continue; }
    if (!target.includes("/")) {
      if (!basenames.has(target)) bare.push(`${rel}: ${target}`);
      continue;
    }
    if (existsSync(join(ROOT, target)) || existsSync(join(dirname(abs), target))) continue;
    dead.push(`${rel}: ${target}`);
  }
}

console.log(`Checked ${files.length} pages.`);
console.log(`${skipped.size} distinct provenance paths skipped (${PROVENANCE.join(" ")}).`);

const uniq = (a) => [...new Set(a)].sort();
const bareU = uniq(bare);
if (bareU.length) {
  console.log(`
≈ ${bareU.length} bare filename(s) that exist nowhere here — provenance, or a page never published:`);
  for (const b of bareU) console.log(`  ${b}`);
}

const deadU = uniq(dead);
if (!deadU.length) { console.log("\n✓ no dead path-shaped references"); process.exit(0); }
console.log(`
✗ ${deadU.length} dead path-shaped reference(s):`);
for (const d of deadU) console.log(`  ${d}`);
process.exit(1);
