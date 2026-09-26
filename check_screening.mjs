#!/usr/bin/env node
/**
 * check_screening.mjs — does anything this library publishes name what it must never carry?
 *
 * The floor's §3: no employer, no project, no client. Until 2026-09-26 that rule was held by
 * discipline alone and only pages were ever screened (#166). Two public leaks were found that day,
 * neither in a page: a label description on the GitHub copy (GitHub #64) and two issue comments
 * (GitHub #50). So this reads every surface a reader can see, on both hosts.
 *
 * ⚠️ THE TERMS ARE NOT IN THIS REPOSITORY, AND CANNOT BE. A list of what must never be published,
 * committed here, publishes it. They live in a file outside every repository:
 *
 *     $GE_SCREENING_TERMS, else ~/.config/ge-screening-terms.txt
 *     one term per line, matched case-insensitively as a substring; `#` starts a comment
 *
 * ⚠️ AND A HIT PRINTS THE TERM'S LINE NUMBER, NEVER THE TERM. This output gets quoted into PR
 * bodies as verification; printing the term would carry the leak into the record of its fix.
 *
 * Verdicts, and the fourth is the one that matters (method/the-fourth-verdict.md):
 *     exit 0   every surface read, nothing found
 *     exit 1   something found — each hit names its surface and where
 *     exit 2   COULD NOT LOOK — no terms file, or a surface did not answer. Never reported as clean.
 *
 *     node check_screening.mjs              local files + Forgejo + GitHub
 *     node check_screening.mjs --local      tracked files only, no network
 */
import { execSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const OWNER = "jkornobis", REPO = "GE-KnowledgeCenter";
const FORGEJO = "https://git.jkosvr.fr/api/v1";
const GITHUB = "https://api.github.com";
const LOCAL_ONLY = process.argv.includes("--local");

const termsPath = process.env.GE_SCREENING_TERMS || join(homedir(), ".config", "ge-screening-terms.txt");
if (!existsSync(termsPath)) {
  console.log(`✗ COULD NOT LOOK: no terms file at ${termsPath}. This is not a clean result.`);
  process.exit(2);
}
const terms = readFileSync(termsPath, "utf8").split("\n")
  .map((l, i) => ({ line: i + 1, t: l.replace(/#.*/, "").trim().toLowerCase() }))
  .filter((x) => x.t);
if (!terms.length) {
  console.log(`✗ COULD NOT LOOK: ${termsPath} holds no terms. This is not a clean result.`);
  process.exit(2);
}

const hits = [], unread = [];
let read = 0;
function scan(surface, where, text) {
  read++;
  if (!text) return;
  const low = String(text).toLowerCase();
  for (const { line, t } of terms) if (low.includes(t)) hits.push(`${surface}  ${where}  term #${line}`);
}

// 1 — every tracked file, pages and scripts alike: a script ships as surely as a page does.
for (const f of execSync("git ls-files", { encoding: "utf8" }).split("\n").filter(Boolean)) {
  let s;
  try { s = readFileSync(f, "utf8"); } catch { unread.push(`local  ${f}`); continue; }
  if (s.includes("\u0000")) continue; // binary
  scan("local", f, s);
}

async function pages(url, headers, pageParam, sizeParam, size) {
  const out = [];
  for (let p = 1; ; p++) {
    const sep = url.includes("?") ? "&" : "?";
    const r = await fetch(`${url}${sep}${sizeParam}=${size}&${pageParam}=${p}`, { headers });
    if (!r.ok) throw new Error(`${r.status}`);
    const b = await r.json();
    if (!Array.isArray(b)) throw new Error("not a list");
    out.push(...b);
    if (b.length < size) return out;
  }
}

async function host(name, base, headers, pageSize) {
  const repo = `${base}/repos/${OWNER}/${REPO}`;
  const get = async (u) => { const r = await fetch(u, { headers }); if (!r.ok) throw new Error(`${r.status}`); return r.json(); };
  const step = async (what, fn) => { try { await fn(); } catch (e) { unread.push(`${name}  ${what}  (${e.message})`); } };
  const size = pageSize, list = (u) => pages(u, headers, "page", name === "github" ? "per_page" : "limit", size);

  await step("repository", async () => {
    const r = await get(repo);
    scan(name, "description", r.description); scan(name, "website", r.website || r.homepage);
    scan(name, "topics", (r.topics || []).join(" "));
  });
  await step("labels", async () => { for (const l of await list(`${repo}/labels`)) scan(name, `label ${l.name}`, `${l.name} ${l.description || ""}`); });
  await step("milestones", async () => { for (const m of await list(`${repo}/milestones?state=all`)) scan(name, `milestone ${m.title}`, `${m.title} ${m.description || ""}`); });
  await step("releases", async () => { for (const x of await list(`${repo}/releases`)) scan(name, `release ${x.tag_name}`, `${x.name || ""} ${x.body || ""}`); });
  await step("issues and PRs", async () => {
    const q = name === "github" ? "?state=all" : "?state=all&type=all";
    for (const i of await list(`${repo}/issues${q}`)) scan(name, `#${i.number}`, `${i.title} ${i.body || ""}`);
  });
  await step("comments", async () => { for (const c of await list(`${repo}/issues/comments`)) scan(name, `comment ${c.html_url}`, c.body); });
}

if (!LOCAL_ONLY) {
  let fh = { Accept: "application/json" };
  try {
    const env = readFileSync(join(homedir(), ".config", "forgejo-api-ge-knowledgecenter.env"), "utf8");
    const tok = env.match(/^JETON_FORGEJO=(\S+)/m);
    if (tok) fh.Authorization = `token ${tok[1]}`;
  } catch { /* the repository is public; read unauthenticated */ }
  await host("forgejo", FORGEJO, fh, 50);
  await host("github", GITHUB, { Accept: "application/vnd.github+json", "User-Agent": "check_screening" }, 100);
}

console.log(`screening: ${terms.length} terms · ${read} texts read${LOCAL_ONLY ? " · local only, the hosts were NOT read" : " · local + forgejo + github"}`);
for (const h of hits) console.log(`  ✗ ${h}`);
for (const u of unread) console.log(`  ? unread: ${u}`);
if (hits.length) { console.log(`✗ ${hits.length} hit(s)`); process.exit(1); }
if (unread.length) { console.log(`✗ COULD NOT LOOK at ${unread.length} surface(s). This is not a clean result.`); process.exit(2); }
console.log("✓ nothing found on any surface read");
