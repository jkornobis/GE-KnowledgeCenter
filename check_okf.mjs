#!/usr/bin/env node
/**
 * OKF v0.2 conformance check for this bundle.
 * Spec: GoogleCloudPlatform/knowledge-catalog/okf/SPEC.md, §8 and §9 re-read 2026-08-28.
 *
 * MUST (§11): every non-reserved .md has parseable YAML frontmatter with a
 * non-empty `type`; reserved names (index.md, log.md) follow §8/§9.
 * SHOULD: title, description; §5 timestamps are ISO 8601 with an explicit UTC offset;
 * §8 index entries carry the description from the concept they link to.
 *
 * Reserved files were skipped until 2026-08-28, so `conformant` meant the concept
 * documents only — silent about the one file every consumer reads first.
 */
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, relative, dirname } from "node:path";

const ROOT = process.cwd();
const RESERVED = new Set(["index.md", "log.md"]);
const walk = (d) => readdirSync(d).flatMap((n) => {
  if (n === ".git" || n === "node_modules") return [];
  const p = join(d, n);
  return statSync(p).isDirectory() ? walk(p) : p.endsWith(".md") ? [p] : [];
});

const ISO = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(Z|[+-]\d{2}:\d{2})$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const fails = [], warns = [];
let concepts = 0, reserved = 0;

// Line endings are normalised before anything looks at them. On a Windows checkout
// with core.autocrlf=true the working tree holds CRLF while the repository and
// everything raw.githubusercontent.com serves hold LF — so a CR-blind parser
// reports every file as having no frontmatter, on a bundle that is conformant
// to every reader. Measured 2026-08-28: this checker failed two files whose
// published bytes were correct. A check that fails on the platform rather than
// on the artifact teaches its operator to ignore it.
const read = (p) => readFileSync(p, "utf8").replace(/\r\n/g, "\n");

/** Frontmatter body of a source string, or null when there is no parseable block. */
const frontmatter = (src) => {
  if (!src.startsWith("---\n")) return null;
  const end = src.indexOf("\n---", 4);
  return end === -1 ? null : src.slice(4, end);
};

const describe = (src) => {
  const fm = frontmatter(src);
  const m = fm && fm.match(/^description:\s*(.+)$/m);
  return m ? m[1] : null;
};

const norm = (s) => s.replace(/^["']|["']$/g, "").replace(/\s+/g, " ").trim();

/**
 * §8. An index carries no frontmatter, except that a bundle-root index.md MAY carry
 * an `okf_version` key. Its body groups concepts under headings. Entries SHOULD
 * repeat the linked concept's own description — checked here for both the bullet form
 * the spec illustrates and the table form this bundle uses, since §8 constrains the
 * entry, not its markup.
 */
const checkIndex = (rel, src) => {
  const isRoot = rel === "index.md";
  const fm = frontmatter(src);
  if (fm !== null) {
    const keys = fm.split("\n").map((l) => l.match(/^([A-Za-z_][\w-]*):/)).filter(Boolean).map((m) => m[1]);
    if (!isRoot)
      fails.push(`${rel}: index files contain no frontmatter; only a bundle-root index.md may (§8)`);
    else
      for (const k of keys)
        if (k !== "okf_version")
          fails.push(`${rel}: bundle-root index.md may carry 'okf_version' and nothing else, found '${k}' (§8)`);
  }
  const body = fm === null ? src : src.slice(src.indexOf("\n---", 4) + 4);
  if (!/^#{1,6} \S/m.test(body))
    fails.push(`${rel}: index body has no section heading (§8)`);

  const dir = dirname(join(ROOT, rel));
  const entry = (target, text) => {
    if (!target.endsWith(".md")) return;                  // §8 entries may point at data or subdirectories
    const abs = [join(dir, target), join(ROOT, target)].find(existsSync);
    if (!abs) return;                                     // §11: a consumer MUST NOT reject over broken cross-links
    const want = describe(read(abs));
    if (want && norm(want) !== norm(text))
      warns.push(`${rel}: entry '${target}' does not carry that concept's own description (§8 recommended)`);
  };
  for (const l of body.split("\n")) {
    const bullet = l.match(/^\s*[*-]\s*\[[^\]]*\]\(([^)]+)\)\s*[-–—]\s*(.+?)\s*$/);
    if (bullet) { entry(bullet[1], bullet[2]); continue; }
    const row = l.match(/^\|\s*`([^`]+)`\s*\|\s*([^|]+?)\s*\|/);
    if (row) entry(row[1], row[2]);
  }
};

/** §9. A log carries no frontmatter, and its date headings MUST be ISO 8601 YYYY-MM-DD. */
const checkLog = (rel, src) => {
  if (frontmatter(src) !== null)
    fails.push(`${rel}: log files contain no frontmatter (§9)`);
  for (const l of src.split("\n")) {
    const h = l.match(/^#{1,6}\s+(.+?)\s*$/);
    // Only headings that are trying to be dates are in scope; a prose heading is not
    // a malformed date. `Aug 28 2026`, `28/08/2026` and `2026-8-28` all are.
    if (h && /\d{4}|\d{1,2}[\/.]\d{1,2}/.test(h[1]) && !DATE.test(h[1]))
      fails.push(`${rel}: date heading '${h[1]}' is not ISO 8601 YYYY-MM-DD (§9)`);
  }
};

for (const abs of walk(ROOT)) {
  const rel = relative(ROOT, abs).split("\\").join("/");
  const base = rel.split("/").pop();
  const src = read(abs);

  if (RESERVED.has(base)) {                               // §3.1 reserved, §8/§9 shape
    reserved++;
    if (base === "index.md") checkIndex(rel, src); else checkLog(rel, src);
    continue;
  }
  if (base.toLowerCase() === "index.md") {                // §3.1 is case-sensitive
    fails.push(`${rel}: reserved name is lowercase 'index.md' (§3.1); this file is a concept document to a strict consumer and has no frontmatter`);
    continue;
  }
  concepts++;
  const fm = frontmatter(src);
  if (fm === null) { fails.push(`${rel}: no parseable YAML frontmatter block (§4.1, conformance 1)`); continue; }

  const type = fm.match(/^type:\s*(\S.*)$/m);
  if (!type) fails.push(`${rel}: no non-empty 'type' (§4.1, conformance 2)`);
  if (!/^title:\s*\S/m.test(fm)) warns.push(`${rel}: no 'title' (§4.1 recommended)`);
  if (!/^description:\s*\S/m.test(fm)) warns.push(`${rel}: no 'description' (§4.1 recommended)`);

  for (const m of fm.matchAll(/\bat:\s*([^\s,}]+)/g)) {
    if (!ISO.test(m[1]))
      fails.push(`${rel}: timestamp '${m[1]}' is not ISO 8601 with an explicit UTC offset (§5)`);
  }
  const st = fm.match(/^status:\s*(\S+)/m);
  if (st && !["draft", "stable", "deprecated"].includes(st[1]))
    fails.push(`${rel}: status '${st[1]}' is not draft|stable|deprecated (§5.4)`);
}

const line = (a) => a.forEach((s) => console.log("  " + s));
console.log(`OKF v0.2 — ${concepts} concept documents, ${reserved} reserved\n`);
if (fails.length) { console.log(`✗ ${fails.length} conformance failure(s):`); line(fails); }
else console.log("✓ conformant");
if (warns.length) { console.log(`\n≠ ${warns.length} recommendation(s) unmet:`); line(warns); }
process.exit(fails.length ? 1 : 0);
