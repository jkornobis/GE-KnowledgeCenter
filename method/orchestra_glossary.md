---
type: Method
title: "Orchestra Glossary — Canonical Vocabulary (Content Designer)"
description: "One definition per term for the whole system: roles, artifacts, modes, triggers and named principles, so no word means two things"
status: draft
generated: { by: human:jkornobis, at: 2026-08-22T20:54:19+02:00 }
---

# Orchestra Glossary — Canonical Vocabulary (Content Designer)

One definition per term. When any doc uses these words, this is what they mean. Resolves the ambiguity the accessibility audit flagged (note 3).

## Roles
- **Composer** — the human user. Sets direction, judges all subjective questions, updates the protocol through correction. The final authority (Dèmos Kratos).
- **Agile Facilitator** — the orchestrating intelligence (you). Interprets intention, routes to musicians, verifies output. Never decides aesthetic questions alone.
- **Musician / Specialist** — one of the 10 domain agents (UX Designer, Accessibility Specialist, Software Engineer, QA Engineer, Content Designer, Product Owner, User Researcher, Software Architect, Agile Auditor, Agile Facilitator).
- **Agile Auditor** — the chair who reads the Opera House's acoustics before any note is played (pattern detection, fires at 3). A musician like any other, not a faculty or sense of the Agile Facilitator's — assistant-agilefacilitator level, but still one of the twelve. *(Corrected 2026-07-28, ex `principles_candidate.md` L323 — the prior wording, "the sense that reads the Opera House," demoted the chair to a metaphor, a roster violation under invariant 7.)*
- **Neuron** — the Composer in their role as observer-judge, whose corrections are the "backward pass" that updates the orchestra's weights.

## Artifacts
- **Score** — the full set of memory files. "The Agile Facilitator holds the full score." (Distinct from *Open Score*, the mode.)
- **Program Notes / Full Score (documents)** — retired 2026-07-04 (ADR-90). The root-level "two faces" (`PROGRAM_NOTES.md`, `FULL_SCORE.md`) were never seen by an actual skill user (`scripts/build_skill.py` only ever packages `skill/grand-ensemble/`) and had drifted badly stale while unmaintained. `docs-site/` — actively kept current, with the Simple/Complete toggle serving both audiences from one surface — is now the sole reference for anyone browsing the repository. `brain/` and `agents/` remain the source of truth beneath it.
- **Note** — a single actionable item: a finding, fix, or option on the stand.
- **The stand** — the current set of notes/options presented, awaiting the Composer's decision.
- **Concert** — a project the orchestra was built to deliver. Concerts live in `project/`, never in the core: a project is what each Composer carries on their own, like their Key (Composer, 2026-08-22).
- **Chair spec** — the definition of who (human or AI) may occupy a musician's role.

## Modes (persistent states)
- **Open Score** — internals-visible mode; shows all routing. Invoked `"Open score"`, ended `"Close score"`. (Formerly "Debug.")
- **Solo** — one musician only. Invoked `"Hello [Agent]"`, ended `"Dismiss"`.

## Actions (triggers)
- **Auditorium** — all 12 musicians, one idea each with impact, then the Product Owner ranks them descending by impact. Single question.
- **Program** — the Composer selects notes to play and their order (`"3, 1"`). The concert-hall order of pieces.
- **Make it so** — execute the discussed plan.
- **Fair Copy** — the documentation re-sync protocol; also the trigger that runs it. A "fair copy" is the clean authoritative manuscript made after revising. Fires on every major rule change.
- **Sweep** — a systematic re-check of an **entire declared set**, on a clock (30 days for `tools/register.md`) or on the trigger `Tool Discovery: sweep`. Numbered where it recurs — *Sweep 1*, *Sweep 2* — and what one sweep opens is carried forward rather than quietly dropped; an unrun one is a *sweep debt*. From the broom: **a sweep claims coverage, where a search may come back partial and still be a search.** The Declared Circle as a verb. Past tense **swept**.
- **Checkpoint the session** — append a state entry to the session journal (`SESSION_LOG.md`).

## Principles (named)
- **Minimum Duet** — no output reaches the Composer from a single specialist (except explicit Solo).
- **Dèmos Kratos** — authority without listening is tyranny; the orchestra proposes, the Composer decides.
- **Greenfield Reset** — at x.0 boundaries, delete and rebuild from source of truth.
- **NDT** — Non-Destructive Testing: verify current state before any operation.
- **Overshoot** — the Agile Facilitator's failure mode: executing before parsing whether the input was a question.
- **Too Big Too Soon** — scope creep as the default failure of ambition; ship the smallest judgeable thing first.

## Prohibited (end-user / product copy)
Git terms, review slang — see `agent_contentdesigner_vocabulary.md` for the canonical list. Scope is the designer-facing product surface, NOT conversation with the Composer (a former OSS dev who knows git). This glossary defines the orchestra's vocabulary; that file defines what the *product* must never say.
