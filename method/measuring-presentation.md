---
type: Method
title: "Measuring a presentation rule — what an output-style skill with an eval harness shows that a checklist cannot"
description: "A study of one public output-style skill (ten rules for a reader with ADHD) whose real contribution is not its rules but its measurement: a blind A/B harness that scored the rules, found a regression one of them causes, and failed its own release gate. What this library's presentation gate already holds, the four things it does not, and the limits of the measurement"
status: draft
card: none
serves: [UX Designer, Content Designer, Product Owner, QA Engineer, Agile Auditor]
generated: { by: agent:ge-knowledgecenter, at: 2026-11-09T08:51:08+01:00 }
sources:
  - resource: https://github.com/ayghri/i-have-adhd
    title: "i-have-adhd, repository root (MIT), read at commit 1ecea19, 2026-10-11"
  - resource: https://github.com/ayghri/i-have-adhd/blob/main/skills/i-have-adhd/SKILL.md
    title: "the ten rules, the override list and the pre-send check"
  - resource: https://github.com/ayghri/i-have-adhd/blob/main/evals/RESULTS.md
    title: "first recorded evaluation run, 2026-08-02"
  - resource: https://github.com/ayghri/i-have-adhd/blob/main/evals/rubric.md
    title: "the blind rubric and the release gate"
---

# Measuring a presentation rule

Studied 2026-11-09 at the Composer's request, as possible input to how this library shapes a
message. **Read in full at one commit; nothing here is installed or recommended for install.**

## What the source is

A skill of ten output rules for a reader with ADHD, built on five claims about reading: working
memory is small, knowing is not doing, starting is the hardest step, vague durations feel the same,
and visible progress matters. The rules: lead with the next action, number multi-step work, end with
one concrete next action, suppress tangents, restate state every turn, give estimates in concrete
units, make wins visible, report errors as cause then fix, cap a visible list at five, no preamble,
recap or closer. A short override list lets the task or the harness win when a rule would delete the
answer, and a pre-send check ends with one test: **read only the first and the last line — do you
know what just happened and what to do next?**

**The rules are not the contribution.** Most of them are already here, in different words (below).
The contribution is that the author **measured** them.

## The measurement

Fourteen cases, three trials each, every case run twice: the bare prompt (baseline) and the prompt
with the skill injected (candidate). A grader scores both **blind**, labelled A/B/C, on five weighted
dimensions, and marks a **blocker** for a dangerous instruction, a material error, a broken explicit
output contract, or an autonomy regression.

| Dimension | Weight | Baseline | Candidate |
|---|---:|---:|---:|
| Correctness | 35% | 4.33 | 4.52 |
| Autonomy | 25% | 3.76 | 4.17 |
| Actionability | 20% | 3.90 | 4.62 |
| Safety | 10% | 4.64 | 4.67 |
| Concision | 10% | 3.43 | 4.57 |
| **Weighted** | | **4.05** | **4.47** |

*Figures copied from the source's `RESULTS.md`, not re-run here.*

**Three findings that matter more than the score:**

1. **A rule caused a regression, and the harness found it.** "Errors as cause, then fix" pressured
   the model to name a cause the evidence did not support; the grader flagged an invented cause. A
   checklist reviewed by its author cannot see this, because the rule reads as correct.
2. **The gains concentrate in reporting state** (multi-step progress, error reports). Cases with an
   explicit output contract were unchanged — the escape hatches held.
3. **The release gate failed** — "no blocking findings" is absolute, so a candidate that cut
   blockers from 7 to 3 still could not ship. The author records this as a property of the gate to
   decide deliberately, not a defect to work around.

## What this library already holds

| The source's rule | Where it lives here |
|---|---|
| End with one concrete next action | the six endings, `protocols/endings.md` |
| No preamble, no recap | *record, not message*, `start.md` §4 |
| Matter-of-fact errors | the three acts, `protocols/presentation-checklist.md` |
| Number multi-step work | the Use Case, `method/hand-task-use-case.md` |
| Cap the visible list, retain the rest | *recycle, never drop*, `method/ranking.md` |
| A rule that fights the harness loses | core rule 7, `start.md` §4 |

## What it holds that this library does not

1. **A baseline.** This library already grades behaviour blind: `protocols/orchestra_test_harness.md`
   holds invariant and capability sets, a constant grader prompt and a grader with no shared context.
   **But it asks whether a rule is obeyed, PASS or FAIL — never whether obeying it helps.** The
   source runs every case with and without the rule and scores both on the same rubric, and that is
   the only design that could have found the regression above: a rule followed perfectly can still
   lower the score. `protocols/presentation-checklist.md` states its twelve-line ceiling is *"a
   working ceiling, not a measurement"*; a with-and-without run is what would make it one.
2. **A first-line test.** No check here reads the first line of a message. The two-line test is
   countable, which is the property the checklist demands of a rule.
3. **Progress restated inside a task** — *step 3 of 5 done; next: …*. A turn here ends with the
   board, which is the estate's state, not the task's.
4. **Estimates in units.** Protocol #31 asks for an estimate before a task; nothing says in what.

## Limits — stated once

- **The grader is the model that wrote the answers.** The source names this itself; it is the same
  weakness as this library's rule that one model's voices do not corroborate one another. A
  cross-model grader is the control it lacks.
- **Three trials is few**; the source treats single-case differences under 0.5 as noise.
- **The rules target a stated reading profile.** Whether they suit any one reader is that reader's
  ruling, not a finding.

## What would test a transfer

Write ten cases from real turns that drew a presentation complaint, run them with and without the
gate's text, and grade blind on a model other than the one answering. **If the gate does not move
the score, the gate is decoration** — and that is worth knowing before the twentieth decision.
