---
type: Tool
title: "Tool: Git"
description: "The substrate this library runs on rather than a tool it uses: the exit mechanic that is a deleted index row plus a revert, the branch as the unit of the delivery rule, a defect route that is not GitHub, and 153,621 questions whose top eight are mostly about undoing"
status: draft
serves: [Software Engineer, Software Architect, the whole room]
generated: { by: agent:agile-facilitator, at: 2026-09-01T16:20:23+02:00 }
---

# Tool: Git

Audited 2026-09-01 by User Researcher. **Native** — a local binary, not MCP-mediated. Local operations need no credential; a remote does, and on this deployment that credential is held by the host's `gh` login rather than by git.

Re-audit: 77 days — **measured, feature-release cadence** (n=5 intervals from `git/git` tag dates, median 77, read 2026-09-01: 70 · 77 · 77 · 91 · 63). Patch releases run far shorter (3–21 days) and do not invalidate a page, so the clock follows `x.y.0` only.

**Chair:** Software Engineer — `Serves:` the whole room. **A lever question is open and is not ruled here:** this library's own exit mechanic and delivery rule both rest on git, which is the *break* test rather than the *inconvenience* test, and `tools/chair-levers.md` records levers per chair with no notion of a lever the **library** requires. Promotion is earned in a Chair Review, not in a tool page.

**Lineage:** the Software Engineer's leap — version control, SCCS (1972) → CVS (1990) → **git (2005)** — actioning *"nothing is lost; inspect before you cut"*, Brooks 1975. Lag 30 years (`tools/lineage.md`).

## Context7

**Not resolved this session.** The Context7 MCP is not connected on this deployment, and `tools/context7.md` rules that a library ID is *"resolved, not recalled"*. Left empty rather than filled from memory. A future audit with the server connected should resolve it and record the benchmark as a dated reading.

## Critical (verified this session)

- **Any musician — `core.autocrlf` is `true` on this machine, and the library's files are LF.** Verified: `git config --get core.autocrlf` → `true`; `git/git` version `2.55.0.windows.5`. Every write to a library file prints *"LF will be replaced by CRLF the next time Git touches it"*. **The published bytes stay LF and the warning is about the working copy, not the artifact** — `check_okf.mjs` carries the same finding in its own header, having once failed two conformant files for this reason.
- **Any musician — the exit mechanic is a git operation.** `index.md` retires a page by deleting its row; the file and its history stay, and `git revert` returns the row. **The library's safety story is a git capability, not a library capability.**
- **Any musician — the unit of the delivery rule is the branch.** Work lands on a branch and reaches `main` only through a reviewer. Verified by use: nine commits, one branch, one PR, no merge.
- **Software Engineer — `git stash -q` … `git stash pop -q` is how a before/after claim is made over a checker.** Used today to establish that a change introduced no new conformance warnings (8 before, 8 after) rather than asserting it. **A stash with nothing to stash silently succeeds and the following `pop` fails**, which reads as an error and is not one.
- **Software Engineer — `git checkout -b` carries uncommitted work onto the new branch.** Verified today: a dirty tree branched cleanly and the pre-existing modifications stayed unstaged, so a later `git add <one file>` committed only that file.
- **Software Engineer — on Git Bash, `gh api /repos/…` is rewritten to a filesystem path.** MSYS path translation turns the leading slash into `C:/Program Files/Git/repos/…`. **Drop the leading slash**: `gh api repos/owner/name/…`. Verified by the failure and the fix, 2026-09-01.

## Known issues — what breaks, from the record rather than the vendor

**The defect route is not GitHub, and the number GitHub reports is not defects.** Read from the API on 2026-09-01: `github.com/git/git` returns **`has_issues: false`** and describes itself as *"Git Source Code Mirror — This is a publish-only repository."* Defects and patches go to **`git@vger.kernel.org`**, archived at **`lore.kernel.org`** (confirmed on `git-scm.com/community`).

The same call reports **`open_issues_count: 387`**. With issues disabled that number is **pull requests, on a mirror that does not accept them**. `tools/_template.md` warns that *"a label query measures a project's labelling convention, not its defects"*; this is one step worse — the count is not measuring defects at all, and a reader taking it as a health signal would be reading the mirror's traffic.

| Issue | State | What it costs the chair | Source |
|---|---|---|---|
| No issue tracker on the mirror | by design | there is no queryable defect list; health must be read from release cadence and the mailing list | `api.github.com/repos/git/git`, 2026-09-01 |
| Line-ending normalisation is per-machine config, not repo state | open by design | a conformant file can fail a local checker on one machine and pass on another | verified 2026-09-01 |

**Friction: Stack Overflow, and the tag is the largest in this library by a factor of 43.**

| Tag | Questions |
|---|---|
| `git` | **153,621** |
| `git-merge` | 3,462 |
| `git-branch` | 3,279 |
| `git-rebase` | 1,777 |
| `git-revert` | 518 |

Read live from the Stack Exchange API, 2026-09-01. For scale, the previous largest here was `playwright` at 3,506.

**The shape, which matters more than the size — five of the top eight questions by score are undo operations:**

| Score | Views | Question |
|---:|---:|---|
| 27,237 | 16,765,126 | How do I undo the most recent local commits in Git? |
| 20,357 | 13,504,899 | How do I delete a Git branch locally and remotely? |
| 14,060 | 3,751,698 | What is the difference between `git pull` and `git fetch`? |
| 12,050 | 6,463,156 | How can I rename a local Git branch? |
| 11,626 | 6,411,652 | How do I undo `git add` before commit? |
| 9,973 | 9,641,153 | How do I force `git pull` to overwrite local files? |
| 8,890 | 9,697,779 | How can I check out a remote Git branch? |
| 8,643 | 2,791,870 | How do I make Git forget about a file that was tracked? |

**This is a sixth friction class, and `tools/_template.md` lists five.** Not *API mental model* — the forward path is learned in a day. **Call it `inverse operations`: the tool is understood going forwards and not going backwards.** What a chair should budget: the undo path is learned separately from the do path, and it is learned under pressure.

**And it lands directly on this library.** The exit protocol landed today rests on *"the file and its history stay, and `git revert` returns it"* — and **the single most-viewed git question in the world is how to undo a commit.** The safety argument is sound and the operation behind it is the field's most-asked question. That is not a reason to change the protocol; it is a reason the protocol must say the command, which it does.

## Limits — where this instrument stops

- **Git tracks content, not intent.** A commit message is the only carrier of *why*, which is why `protocols/sync_protocol.md` and the ADR practice exist beside it rather than inside it. **Tool limit.**
- **No issue tracking, no work item, no assignee, no state machine.** This is the seam a tracker fills, and it is why a dedicated Jira page is owed — see below. **Tool limit.**
- **Binary and generated artifacts diff opaquely.** `graph/grand_ensemble.json` at 460 KB is regenerated rather than hand-edited; its diffs are not reviewable in the way a page's are. **Tool limit.**
- **A clean checker run says nothing about a claim.** Verified twice today: `check_okf.mjs` validates shape and `check_links.mjs` validates resolution; a page can pass both and still describe itself falsely. **Reasoning limit — not git's, and not fixable by any git feature.**

## Recommended (Composer to accept/decline)

- **Software Engineer — record `inverse operations` as a sixth friction class in `tools/_template.md`** — status: proposed. It is the first class this library has met that its own template does not list.
- **Software Architect — put the lever question to a Chair Review**: is git the first lever the *library itself* requires, as distinct from a chair? `tools/chair-levers.md` has no row shape for that today — status: proposed.
- **The whole room — resolve the Context7 ID** on a deployment where the server is connected, and record the benchmark as a dated reading — status: proposed.

## Owed, and named rather than left blank

**A Jira page does not exist and was not written.** The Composer named git and a tracker together as prerequisites; git is audited here because this session has hands on it, and **Jira is not, because no Jira call has ever been made from this deployment** — the connector requires an authorization a non-interactive session cannot run. `tools/chair-levers.md` rules that a page written before its musician has handled the instrument is *"plausible documentation"*, and *"an absent one is better than a stubbed one."*

**The absence is the finding, and it is dated.** What that page would have to answer when it is written: what a work item carries that a commit cannot, whether the `Observed, not yet decided` register in `index.md` — a tracker implemented as a markdown table — should move into it, and what the trust boundary is for a tool that can create and transition work on someone else's board.
