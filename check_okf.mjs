#!/usr/bin/env node
/**
 * OKF v0.2 conformance check for this bundle.
 * Spec: GoogleCloudPlatform/knowledge-catalog/okf/SPEC.md, read 2026-08-22.
 *
 * MUST (§11): every non-reserved .md has parseable YAML frontmatter with a
 * non-empty `type`; reserved names (index.md, log.md) follow §8/§9.
 * SHOULD: title, description; §5 timestamps are ISO 8601 with an explicit UTC offset.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const RESERVED = new Set(["index.md", "log.md"]);
const walk = (d) => readdirSync(d).flatMap((n) => {
  if (n === ".git" || n === "node_modules") return [];
  const p = join(d, n);
  return statSync(p).isDirectory() ? walk(p) : p.endsWith(".md") ? [p] : [];
});

const ISO = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(Z|[+-]\d{2}:\d{2})$/;
const fails = [], warns = [];
let concepts = 0;

for (const abs of walk(ROOT)) {
  const rel = relative(ROOT, abs).split("\\").join("/");
  const base = rel.split("/").pop();
  // Normalise line endings before anything looks at them. On a Windows checkout
  // with core.autocrlf=true the working tree holds CRLF while the repository and
  // everything raw.githubusercontent.com serves hold LF — so a CR-blind parser
  // reports every file as having no frontmatter, on a bundle that is conformant
  // to every reader. Measured 2026-08-28: this checker failed two files whose
  // published bytes were correct. A check that fails on the platform rather than
  // on the artifact teaches its operator to ignore it.
  const src = readFileSync(abs, "utf8").replace(/\r\n/g, "\n");
  const hasFm = src.startsWith("---\n");

  if (RESERVED.has(base)) continue;                       // §3.1 reserved, §8/§9 shape
  if (base.toLowerCase() === "index.md") {                // §3.1 is case-sensitive
    fails.push(`${rel}: reserved name is lowercase 'index.md' (§3.1); this file is a concept document to a strict consumer and has no frontmatter`);
    continue;
  }
  concepts++;
  if (!hasFm) { fails.push(`${rel}: no YAML frontmatter block (§4.1, conformance 1)`); continue; }

  const end = src.indexOf("\n---", 4);
  if (end === -1) { fails.push(`${rel}: frontmatter never closes (§4.1)`); continue; }
  const fm = src.slice(4, end);

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
console.log(`OKF v0.2 — ${concepts} concept documents\n`);
if (fails.length) { console.log(`✗ ${fails.length} conformance failure(s):`); line(fails); }
else console.log("✓ conformant");
if (warns.length) { console.log(`\n≠ ${warns.length} recommendation(s) unmet:`); line(warns); }
process.exit(fails.length ? 1 : 0);
