---
type: Method
title: "The reading and acting surface — what four AI products converge on, independent of model or tool"
description: "Cross-industry research (OpenAI Codex, Google Antigravity, Cursor, Cognition Devin) distilled into vendor-agnostic principles for how an agent surface should show progress and take a correction: evidence over logs, soft-steer distinct from hard-interrupt, and a fleet view GE only partly has"
status: draft
serves: [UX Designer, Product Owner, Design Engineer, the whole room]
generated: { by: agent:ge-knowledgecenter, at: 2026-09-23T00:00:00+02:00 }
sources:
  - resource: https://developers.openai.com/blog/run-long-horizon-tasks-with-codex
    title: "OpenAI — run long horizon tasks with Codex"
  - resource: https://cursor.com/changelog/1-4
    title: "Cursor — improved agent tools, steerability, and usage visibility"
  - resource: https://antigravity.google/blog/introducing-google-antigravity
    title: "Google Antigravity — introducing"
  - resource: https://cognition.com/blog/devin-annual-performance-review-2025
    title: "Cognition — Devin's 2025 performance review"
---

# The reading and acting surface — what four AI products converge on, independent of model or tool

Researched 2026-09-23 across four public products (OpenAI Codex, Google Antigravity, Cursor, Cognition
Devin) — none of it names an employer, a client, or a project; it is public competitive research, clean
by construction rather than screened after the fact. **The question asked of it:** strip the vendor and
the surface, what is left that GrandEnsemble should hold itself to, whatever model sits underneath and
whatever tool a session runs in?

## The two questions every one of these products answers

**Reading — how do you see what a long-running agent is doing, without reading its raw internals?**
**Acting — how do you correct it mid-task, without either derailing it or being ignored?**

Four independent teams, no shared lineage, converged on shapes close enough that the convergence itself
is the finding.

## 1 — Evidence over logs, on the reading side

Every one of the four shows **artifacts** — screenshots, diffs, task lists, structured decision points —
never a raw reasoning stream as the primary surface. Antigravity states it as a design goal: agents are
"not a black box," and *Artifacts* exist so a person has "necessary and sufficient context to review and
validate" without reading a transcript. Codex's harness supplies "frequent updates... key decisions and
progress" rather than continuous narration. Devin interleaves a skimmable task list with chat, built to
be "quickly checked or skipped."

**This is not a new principle for this library — it is the same one found from a different door.**
`tools/figma-method.md`'s Showing-vs-Reading-Surface distinction and `method/design-review.md`'s
Before/After Review Board are the identical shape, reached from Figma canvas work rather than from
agent-product research. **Four vendors and two unrelated investigations landing on the same answer is
what makes it a principle rather than a house style.** Invariant 2 in this skill ("verified" requires an
external artifact) is this same idea one layer up: a quoted command, a diff, a screenshot — not a
narrated claim.

## 2 — Soft-steer and hard-interrupt are two different actions, not one

Cursor names this most explicitly: **Enter** steers the running agent at its next safe tool-call
boundary, preserving in-flight work; **⌘/Ctrl+Enter** interrupts immediately. Codex has the same
distinction in weaker form — mid-flight correction "without resetting the whole run" ships, a true hard
pause is still an open request. Devin allows a message to queue against a running session rather than
forcing a stop. **Collapsing these into one "stop" action is the failure mode all three are visibly
working against** — a correction that requires a full stop either gets skipped (too costly to interrupt)
or costs the run its progress (interrupted anyway).

**GrandEnsemble already has this, largely by the shape of its own harness rather than by design
decision.** A mid-turn message from the Composer is applied at the next tool-result boundary — exactly
Cursor's "safe boundary" semantics — without this being named anywhere as the principle it is. Worth
naming: **a mid-turn steer is not an interruption, and treating it as one (stopping everything to
re-plan) would be the collapse these products are avoiding.** The right response to a mid-turn message
is the same shape Cursor ships — absorb it into the current step, keep what was already in flight.

## 3 — Fleet view: the one piece this library does not yet cover

Antigravity's Manager View (up to five parallel agents, inbox-style pull-in only when one needs input)
and Cursor's sidebar (every agent, foreground and background, peek into any one) are a **third surface**
neither `design-review.md` nor `ai-assistant-patterns.md` addresses — both of those are shaped around one
agent, one review. **The pattern: default to showing nothing per-agent; surface an agent only when it has
something that needs a person** — a decision, a blocker, a finished diff. Anything else stays
backgrounded.

**Where GE already has pieces of this and where it does not.** `Agent` (background subagents),
`Workflow`, `ScheduleWakeup`, and cross-session `SendMessage`/`ListAgents` are the primitives — a
background agent notifies on completion rather than being polled, which is exactly "pulled in only when
it needs you." **What is missing is the single-glance overview** — Antigravity's and Cursor's sidebars
answer *"what is running right now, across everything"* in one look; nothing in this skill's own
protocols currently does, and a session with several background agents in flight has no equivalent to
check.

## The three, stated as portable rules

1. **Report in artifacts, not narration.** A diff, a quoted command, a screenshot, a ranked table — never
   "I did X" as the only evidence X happened. Already this skill's own invariant 2; now cross-validated
   by four unrelated products reaching it independently.
2. **A mid-task correction is absorbed at the next safe boundary, not a stop-and-replan.** Already how
   this harness's mid-turn messages behave; worth holding as a deliberate rule rather than an accident of
   the transport.
3. **An agent surfaces itself only when it has something that needs a person.** Partially true of GE's
   background-agent notifications; not true of a multi-agent overview, which this skill does not yet
   have a page, a widget, or even a name for.

## What this page does not establish

**Not tested against a fifth product**, and the four studied are all coding/computer-use agents — a
customer-support or research-agent surface might converge differently. **Rule 3's gap is named, not
closed** — this page identifies that GE lacks a fleet-overview surface; it does not design one.

## Where this sits in the corpus

Sibling to `tools/figma-method.md` (Showing vs Reading Surface, reached from canvas work) and
`method/ai-assistant-patterns.md` (state-driven surfacing, reached from one product's design session).
**Same shape, three unrelated doors** — a stronger form of corroboration than any one of the three alone.
