---
type: Method
title: "Four things underneath every agent-progress surface, independent of tool or project"
description: "A distillation of two days' research (OpenAI Codex, Google Antigravity, Cursor, Devin, GitHub Projects, Hermes Kanban, Shipward, the Scrum Master agent pattern) down to what actually recurs once the vendor and the surface are stripped away — and where each already exists, or doesn't, in this skill's own design"
status: draft
serves: [Product Owner, UX Designer, Software Architect, the whole room]
generated: { by: agent:ge-knowledgecenter, at: 2026-09-23T00:00:00+02:00 }
---

# Four things underneath every agent-progress surface, independent of tool or project

Asked directly: strip the tool, strip the project, what's actually left? `method/reading-acting-surface.md`
and `method/agent-kanban-git-board.md` are the evidence — nine findings across eight products and one
skill's own architecture. **This page is what they reduce to.** Not a tenth finding; a claim about what
the other nine have in common.

## The reduction

Sorted by what each finding is actually *about* rather than by which product it came from, the nine
collapse onto four axes — three of the nine turned out to be the same claim seen twice:

| Axis | The claim | Findings that are instances of it |
|---|---|---|
| **A — Authority** | The one who does the work cannot be the sole judge of whether it's done | Self-report problem / Shipward's git-arbiter, the Scrum Master persona kept separate from workers, Hermes' single-writer dispatcher, this skill's Agile Facilitator/QA Engineer split |
| **B — Legibility** | What the authority looks at must be inspectable, not narrated | Evidence-over-narration (four coding UIs), GitHub's structured session status vs. hand-written comments, Hermes' structured handoff metadata |
| **C — Control** | A correction is delivered at a safe boundary and absorbed, never a forced stop | Cursor's steer/interrupt split, Codex's mid-flight correction without reset, Devin's queued messages |
| **D — Time** | Abandoned or stuck work surfaces itself on a clock, never waits to be noticed | Heartbeat/stale-claim reclaim, typed block-reasons with an escalation threshold |

**A and B are not independent — B is what makes A possible.** An authority with only prose to judge is
just a second self-report wearing a different hat. Every concrete "keeps it honest" mechanism found —
git commits, screenshots, diffs, timestamped evidence — is B in service of A. **C and D are the other
two axes**, genuinely separate from A/B and from each other: C is about *redirecting* work that is
progressing; D is about *noticing* work that has stopped without saying so.

## Why this is the useful cut, not just a shorter list

**Because it says where to look when a fifth product does something that doesn't fit.** A new pattern
either sharpens one of these four or names a fifth axis this research hasn't found yet — it does not
need its own new category by default. That is the test a reduction earns: it should make the *next*
finding easier to place, not just compress the last nine.

## Where each axis stands in this skill's own design, named plainly

**A — present, structurally.** Invariant 2 (verified requires an external artifact) is axis A stated as
a rule. The Agile Facilitator/QA Engineer split and "One Author, Multiple Commentators" are axis A
stated as roles. **Not present:** anything that plays Shipward's role — nothing here re-derives a card's
truth from an artifact and overrules a false claim; reconciliation is a Named GE's discipline, not a
mechanism.

**B — present, unevenly.** Screenshot-after-mutation (`tools/figma-method.md`), quoted command output
(this session's own convention, all day), and the PR-description rules (verification quoted, what was
rejected) are all axis B. **Where it's missing:** a Wekan card's own status is still text a person or a
Named GE typed, not a field derived from anything checkable.

**C — present, by the shape of the harness, not by design.** A mid-turn message from the Composer lands
at the next tool-result boundary and gets absorbed — Cursor's exact semantics — but nothing in this skill
names this as a rule anyone chose. It is worth naming, because a future surface built by this estate that
does *not* inherit Claude Code's own turn structure would have to decide this on purpose rather than
getting it for free.

**D — absent.** No heartbeat, no stale-claim reclaim, no escalation threshold for a stuck block. A Named
GE session that ends mid-task leaves whatever state it left, until a person or another instance happens
to look. This is the axis with the least coverage of the four, and the one this research keeps landing on
as a real gap rather than a restated strength. **`method/agent-surface-time-axis.md` goes deep on this one
axis** — including why this estate's earlier Ambient/Metronome attempt (`method/time-management.md`,
2026-08-28) was aimed at a human's attention rather than a task's, and was not wrong so much as early: the
board this axis needs to watch did not exist yet.

## What this page does not do

**Does not propose building D, or anything else.** A reduction states what's true; deciding whether a
gap is worth closing, and how, stays the Composer's call — the same boundary `reading-acting-surface.md`
and `agent-kanban-git-board.md` both held. **Not tested against a source outside this research's own
nine findings** — four axes is what nine data points reduce to; an unrelated tenth could still break the
pattern.

## Where this sits in the corpus

Sits above `method/reading-acting-surface.md` and `method/agent-kanban-git-board.md` as their shared
reduction — read those two for the evidence, this one for what they add up to.
