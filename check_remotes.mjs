#!/usr/bin/env node
/**
 * check_remotes.mjs — do the source remote and the publish remote hold the same `main`?
 *
 * The defect this exists for: protocols/library-conventions.md rules that the session that merges
 * pushes `main` to Forgejo first and GitHub second, and then compares the two heads. Nothing made
 * that comparison. On 2026-10-24 the two copies had diverged for 22 days; on 2026-10-26 a session
 * merged on GitHub alone and left it four commits ahead of the source, with no error anywhere,
 * because nothing is wrong from where one remote is standing (#28).
 *
 * WHAT IT DOES. Asks each remote for the commit its `main` points at (`git ls-remote`), reads the
 * local `main`, and says whether all three agree. It reads remote NAMES from git and prints no
 * address: this library carries none of a Composer's own infrastructure (library-conventions).
 *
 *     node check_remotes.mjs                       forgejo (source) and origin (publish), refs/heads/main
 *     node check_remotes.mjs --source=forge --publish=github
 *     node check_remotes.mjs --ref=refs/heads/some-branch
 *
 * Exit 0 when every head agrees, 1 when they differ or a remote cannot be read, 2 when a remote
 * name is not configured here.
 *
 * ⚠️ WHAT IT CANNOT KNOW. Which side is right: it reports a gap, not a direction. It cannot say
 * whether the Forgejo copy is the one that should win (the convention says it is; this script does
 * not enforce that), and a remote that answers is not proof its history is whole. A network failure
 * is reported as one, never as agreement: an unreadable remote is not a matching one.
 *
 * It is a command run by hand after each merge, not a scheduled job and not a gate: it needs the
 * network and a credential for the source remote, which an offline gate must not.
 *
 * Requires node >= 18 and git. No dependencies. Writes nothing.
 */
import { spawnSync } from "node:child_process";

const arg = (k, d) => (process.argv.find((a) => a.startsWith(`--${k}=`)) || "").slice(k.length + 3) || d;
const SOURCE = arg("source", "forgejo");
const PUBLISH = arg("publish", "origin");
const REF = arg("ref", "refs/heads/main");

const git = (args, timeout = 30000) => spawnSync("git", args, { encoding: "utf8", timeout });

const configured = new Set(git(["remote"]).stdout.split(/\s+/).filter(Boolean));
for (const r of [SOURCE, PUBLISH]) {
  if (!configured.has(r)) {
    console.error(`check_remotes: no remote named '${r}' here (configured: ${[...configured].join(", ") || "none"})`);
    process.exit(2);
  }
}

const head = (remote) => {
  const out = git(["ls-remote", remote, REF]);
  if (out.error || out.status !== 0) return { err: (out.error?.code || out.stderr || "unreadable").toString().trim().split("\n")[0].slice(0, 80) };
  const line = out.stdout.split("\n").find((l) => l.endsWith("\t" + REF));
  return line ? { sha: line.split("\t")[0] } : { err: `no ${REF} on this remote` };
};

const local = git(["rev-parse", REF.replace(/^refs\/heads\//, "")]);
const localSha = local.status === 0 ? local.stdout.trim() : null;

const rows = [
  { name: `${SOURCE} (source)`, ...head(SOURCE) },
  { name: `${PUBLISH} (publish)`, ...head(PUBLISH) },
  { name: "local", ...(localSha ? { sha: localSha } : { err: "no such local ref" }) },
];

console.log(`check_remotes: ${REF}`);
for (const r of rows) console.log(`  ${r.name.padEnd(20)} ${r.sha ? r.sha.slice(0, 8) : "UNREADABLE: " + r.err}`);

const readable = rows.filter((r) => r.sha);
const unreadable = rows.filter((r) => !r.sha && r.name !== "local");
const distinct = new Set(readable.map((r) => r.sha));
if (unreadable.length) {
  console.log(`✗ cannot read ${unreadable.map((r) => r.name).join(", ")}: an unreadable remote is not a matching one`);
  process.exit(1);
}
if (distinct.size > 1) {
  console.log("✗ the heads differ: treat the publish copy as stale until the gap is understood (library-conventions)");
  process.exit(1);
}
console.log("✓ source, publish and local agree");
