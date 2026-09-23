---
type: Method
title: "The time axis, deep — why the early Pomodoro/ambient attempt wasn't wrong, only aimed at the wrong layer"
description: "Axis D from method/agent-surface-invariants.md (abandoned work surfaces on a clock), traced against this estate's own history: method/time-management.md's Ambient/Metronome pair (2026-08-28) was a human-attention tool, built before Forgejo/Wekan existed to give a machine-facing time axis anything to watch — three concrete forms the real gap could take now, named as options, not built"
status: draft
serves: [Product Owner, Software Architect, Agile Auditor, the whole room]
generated: { by: agent:ge-knowledgecenter, at: 2026-09-23T00:00:00+02:00 }
---

# The time axis, deep — why the early Pomodoro/ambient attempt wasn't wrong, only aimed at the wrong layer

`method/agent-surface-invariants.md` named axis D — **abandoned work surfaces itself on a clock, never
waits to be noticed** — as the one with the least coverage in this skill's own design. Asked to go
deeper, and asked specifically against the Composer's own history: an early Ambient-time / Metronome
attempt, tried before this estate's self-hosted Forgejo and Wekan existed. **The claim to test: that
attempt was not an error — it was the right idea aimed at a layer that had nothing yet for it to watch.**

## The history, dated rather than recalled

`method/time-management.md` — **committed 2026-08-28** — is the record of that attempt: **Ambient**
(state whether "now" is inside or outside work hours, stamp checkpoints in the Composer's timezone) and
**Metronome** (*"a transient Focused box... `Metronome 25m`"* — a Pomodoro by another name, a duration
set against one subject). Both are still live in the Score Key today. **Neither watches a task, a card,
or an issue.** Both watch the Composer — his clock, his attention, his declared focus window.

**That is not a defect in what was built. It is a scope statement, read honestly for the first time:**
Ambient and Metronome are axis-D-shaped tools pointed at the human. Today's research (`reading-acting-
surface.md`, `agent-kanban-git-board.md`) found axis D applied to a different target entirely — a
*task's* staleness, not a *person's* focus window. **Two genuinely different applications of the same
axis, and the 2026-08-28 attempt could not have been the second one**, because the self-hosted Forgejo
and Wekan this estate runs on today did not exist yet to give a machine-facing clock anything to watch.
A heartbeat needs a claimed task; a stale-claim reclaim needs a claim. **There was no board yet.**

## What the machine-facing half of axis D actually needs, named against what exists today

Not proposed as a build — three concrete forms, each scoped to what this estate already runs
(self-hosted Forgejo issues, a Wekan board), because `agent-kanban-git-board.md`'s comparison (Hermes'
heartbeat, GitHub's structured session status) was against infrastructure this estate doesn't have and
these are the same ideas translated onto the infrastructure it does.

**1 — A staleness check, the same shape as the three gates already run on every merge.** This repository
already runs `check_okf.mjs`, `check_links.mjs`, `check_frozen_counts.mjs` before every merge — mechanical,
cheap, external to the claim being checked. A fourth in the same family could read every open Forgejo
issue's `updated_at` against its own age and its assignee, and flag — not block, since staleness is a
finding about the estate, not a defect in one artifact — anything past a threshold with no comment. This
is the least invasive option: it extends a pattern already trusted rather than introducing a new one.

**2 — A heartbeat convention on the issue thread itself, not new infrastructure.** Hermes' heartbeat is a
tool call against a database; nothing here has that database. The same signal is available today as a
**dated checkpoint comment** on a long-running issue — not a new mechanism, a *convention* about when an
existing one (posting a comment) is required. Cheaper than option 1 to start, costs nothing to build,
and is exactly the kind of thing a rule can require without any code — the same way "Read All" and
"append, never rewrite" are conventions this skill already holds without a checker enforcing them.

**3 — Typed block reasons as Forgejo labels, with the escalation as a rule rather than automation.**
Hermes' `dependency` / `needs_input` / `capability` / `transient` kinds, and its auto-escalation after
two same-kind re-blocks, translate onto this estate as four labels plus a stated rule: *the same label
applied twice to one issue moves it into the next End Day ranking regardless of the ~10-issue table
threshold.* No script required — a labeling discipline plus a rule a Named GE already knows to apply,
the same shape as everything else in this skill's own presentation protocol.

**None of the three requires the others.** Option 2 could ship today, in a sentence, with nothing built.
Option 1 is the only one that needs code, and it is a fourth instance of a pattern this repository
already trusts rather than a new one. **Which of the three, whether more than one, and whether now — the
Composer's call**, per the same boundary the two source pages held for every other gap this research
named.

## Why this reads as confirmation rather than as a correction

**The Composer's own framing is the sharper one, and it is worth stating back exactly:** the early
attempt tested the *method* (a clock-based signal that something needs attention) on the only *target*
available at the time (a human's own session). That the method is now aimed at task and card lifecycle
instead is not a pivot away from what was tried — it is the same method finding the target it was always
meant for, one and a half months before the board existed to give it one.

## Where this sits in the corpus

Deepens axis D of `method/agent-surface-invariants.md`. Read `method/time-management.md` for the
human-facing half, which stays exactly as it is — nothing above revises it, since it was never wrong for
what it watches.
