---
type: Method
title: "Agents on a kanban or git board — what the ecosystem already builds, and what it says about this one"
description: "Four findings from a live corner of the ecosystem (GitHub's own Issues/Projects agent integration, Hermes Kanban's multi-agent dispatcher, Shipward's fix for the self-report problem, and the dedicated Scrum Master agent persona now packaged as its own Claude Code Skill): a third corroboration of this skill's oracle rule, four mechanisms this estate's Wekan+Forgejo setup does not have, and independent validation that the Agile Facilitator's separation from the working chairs is a real, converged-on pattern"
status: draft
serves: [Product Owner, Software Architect, Agile Auditor, the whole room]
generated: { by: agent:ge-knowledgecenter, at: 2026-09-23T00:00:00+02:00 }
sources:
  - resource: https://dev.to/albertoclemente/every-ai-coding-agent-tracker-is-a-self-report-system-53nm
    title: "Every AI coding agent tracker is a self-report system"
  - resource: https://github.blog/changelog/2026-03-26-agent-activity-in-github-issues-and-projects/
    title: "GitHub Changelog — Agent activity in GitHub Issues and Projects"
  - resource: https://hermes-agent.nousresearch.com/docs/user-guide/features/kanban
    title: "Hermes Agent — Kanban (Multi-Agent Board)"
  - resource: https://amux.io/guides/kanban-board-for-agents/
    title: "amux — Kanban board for AI agents"
  - resource: https://mcpmarket.com/tools/skills/scrum-master-agent
    title: "Scrum Master Agent — Claude Code Skill"
  - resource: https://dev.to/dpelleri/orchestro-trello-for-claude-code-with-a-built-in-scrum-master-1e3e
    title: "Orchestro — Trello for Claude Code with a built-in Scrum Master"
---

# Agents on a kanban or git board — what the ecosystem already builds, and what it says about this one

Researched 2026-09-23, prompted by the Composer building presentation surfaces around Agile-project
method and asking whether the rest of the industry does the same. It does, and one specific corner —
boards built **for** agents rather than boards agents happen to touch — is more mature than the
reading/acting research a day earlier found. None of the sources below name an employer, client, or
project; public product and open-source documentation throughout.

## 1 — The self-report problem, corroborated a third time

**"The agent does the work, and the agent writes its own report card."** Shipward's account of building
a tracker for agents lists the concrete failure shapes: a card reading *done* while holding a stale
commit reference; 500 lines written against a card still sitting in *Backlog* because the agent never
called `start`; drift that produces no error, just a board that quietly stops matching reality. **"Your
tracker is a filing cabinet: the agent says 'done, tests pass', the board stores the string 'done, tests
pass', and nothing anywhere asks *is that true?*"**

**This is invariant 2 (verified requires an external artifact) found by a third, unrelated route.**
`method/reading-acting-surface.md` found the same shape in four coding-agent UIs (evidence over
narration); `tools/figma-method.md` found it in canvas verification (screenshot after every mutation);
this is the identical claim about a *board* specifically. **Shipward's fix is concrete and this estate
does not have an equivalent:** the board does not trust the agent's claim — it re-derives state from git
and **overrules the card if the commits disagree**. A card only moves to *done* when a machine-run check
(declared by a human, executed by the tracker, not the agent) passes against the actual commit. Notes
carry the exact commit hash they were true at, so staleness is a date comparison rather than a guess.

**What this estate has instead is a convention, not a page in this library** — a Named GE reconciles
Wekan card state against Forgejo by hand, in-session, and no mechanism here checks that the
reconciliation actually happened. **That is the same problem solved by discipline rather than by
arbitration.** It works exactly as well as the discipline holds, which is the whole finding Shipward's
failure list is a catalogue of.

## 2 — What a git-hosted board already ships for this, and what Forgejo doesn't

**GitHub shipped this natively in March 2026, not as a third-party layer.** When a coding agent —
Copilot, Claude, or Codex, named explicitly as multi-agent from the start — is assigned an issue, its
session shows under the assignee with a live status: `queued`, `working`, `waiting for review`,
`completed`. The same status surfaces in **Projects' table and board views**, toggled via *Show agent
sessions*, so a person scanning the board sees which cards have an agent attached and where each one
stands without opening a single issue.

**This is the fleet-overview gap `method/reading-acting-surface.md` named and did not close, arriving
from the board side rather than the chat-session side.** That page found Antigravity's Manager View and
Cursor's sidebar; this is the same pattern, hosted on the tracker itself instead of the tool. **Forgejo,
which this estate actually runs on, has no equivalent** — an issue here carries agent activity only as
comments a Named GE writes by hand, never a structured session-status field the board itself renders.
Not evaluated here whether Forgejo could grow one; recorded as the concrete shape of what is missing
compared to what GitHub already ships.

## 3 — Hermes Kanban's dispatcher: four mechanisms, named individually

The deepest architecture found. A durable SQLite board (`~/.hermes/kanban.db`) shared across named agent
profiles, with a dispatcher process that is the **only** writer allowed to move a task through
`ready → running → {done|blocked|review}`. Four of its mechanisms map onto real gaps in a Wekan+Forgejo
setup running several Named instances against one board:

- **Single-writer state transitions.** A worker cannot set its own task's status directly — only the
  dispatcher can, via an atomic `BEGIN IMMEDIATE` SQLite transaction, so two dispatchers racing for the
  same task lose gracefully rather than corrupting state. **This estate's equivalent is social, not
  mechanical:** "One Author, Multiple Commentators" and "board reconciliation is part of issue
  management" are conventions a Named GE follows, not something the board itself enforces. Both solve the
  same race; one is a lock, the other is a norm.
- **Heartbeat and stale-claim reclaim.** A task claimed but not heartbeated within an hour, or whose
  worker process has died, is automatically returned to `ready` for redispatch — a crash and a clean
  reclaim are indistinguishable from the task's own history. **No equivalent exists here.** A GE session
  that dies mid-task leaves its claim exactly where it was — a card marked in-progress, or an issue with
  no closing comment — until a person or another instance notices.
- **Structured handoff metadata**, passed verbatim into a child task's context: `changed_files`,
  `verification`, `blocked_reason`, `residual_risk`. **This is close to what this estate already
  requires of a PR description** ("what changed and why, what was rejected, verification output quoted,
  what it deliberately does not do" — the Delivery rules in this repo's floor) — Hermes reinvented the
  same shape as machine-readable JSON on a task row rather than prose in a pull request. Independent
  arrival at the same fields is worth reading as validation of which fields actually matter for a
  handoff, whichever surface carries them.
- **Typed block reasons with an escalation threshold.** `kanban_block` takes a `kind` —
  `dependency` (auto-resumes when the blocking parent finishes), `needs_input` / `capability` /
  `transient` (surfaces to a human) — and the **same kind repeated twice in a row auto-escalates to
  triage** rather than sitting blocked indefinitely. **No equivalent typing exists in this library** —
  a Wekan `Blocked` column, wherever one is used, is one undifferentiated bucket with no distinction
  between blocked-on-a-dependency and blocked-needing-a-decision, and no threshold at which a stuck card
  gets surfaced rather than silently aging. (Column semantics for any specific board are a Composer's
  own occupancy record, not this library's subject — `tools/README.md`'s shared/personal split — so this
  point is stated as a pattern absent from the *method*, not as a finding about any one board.)

## 4 — Yes, a dedicated Scrum Master agent is a real, established pattern

**Not a niche experiment — a distinct, named persona category, kept separate from the coding agent on
purpose.** A packaged Claude Code Skill ("Scrum Master Agent," mcpmarket.com) describes itself as a
"certified Scrum Master with expertise in facilitating agile teams," activating specifically for
scrum-master-shaped work — impediment tracking (target: resolved within 48 hours), sprint velocity and
burndown analytics, ceremony facilitation (planning, standups, retros), team-dynamics coaching. **It is
explicitly not a generic utility toolkit** — the skill's own framing is persona-first: a role that reads
the board and the team, distinct from an agent that writes code.

**Orchestro** (a Trello-like board for Claude Code) ships a built-in Scrum Master with a narrower,
mechanical job: decompose stories into tasks, set dependencies, and — its own words — **"keep the board
honest."** Public detail on the exact enforcement mechanism is thin (marketing language over
implementation), but the shape is clear: **a governance layer distinct from the agents doing the work**,
not one more worker with board-write access.

**This is the strongest single validation this research found for this skill's own architecture.** The
Agile Facilitator chair — routes, does not decide, holds no domain authority of its own, and is
explicitly *"an agent, never the Composer"* — is the same separation these products independently
converged on: **a coordinating role kept apart from the roles that do domain work, so the two kinds of
authority (what to build vs. whether the board's claims are true) don't collapse into one voice grading
its own homework.** Three unrelated products (Orchestro, the packaged Skill, and this skill's own
twelve-chair design) landing on "keep the coordinator separate from the workers" is closer to convergent
validation than to coincidence.

## What this page does not do

**Names four gaps; designs none of them.** Whether any of this is worth building against Wekan/Forgejo,
and in what shape, is the Composer's call — the same gate `method/reading-acting-surface.md` applied to
the fleet-overview gap it found. **Not tested against this estate's actual board** — every comparison
above is a documentation-to-documentation read, not a measurement of where Wekan+Forgejo's reconciliation
discipline has actually broken down in practice.

## Where this sits in the corpus

Extends `method/reading-acting-surface.md`'s gap 3 (fleet overview) from the chat-session side to the
board side, and is a third independent corroboration — after Figma canvas work and the four-product
agent-UX research — of the same claim this skill already holds as invariant 2.
**`method/agent-surface-invariants.md`** reduces this page and `method/reading-acting-surface.md` to four
axes; read that one for what these findings add up to.
