---
type: Protocol
title: "Chair Review — three outside lenses on a knowledge addition"
description: "How a proposed addition to a chair's knowledge is judged by the Agile Auditor, User Researcher and Product Owner rather than by the chair itself, with a Keep/Revise/Drop verdict and a gate that stops the build until the Composer's next word"
status: draft
generated: { by: human:jkornobis, at: 2026-08-28T16:46:45+02:00 }
---

# Chair Review — three outside lenses on a knowledge addition

Formalizes what almost went wrong twice in one session: the Agile Facilitator proposing new root-knowledge domains for every musician, alone, un-reviewed — the exact self-referential confabulation risk this trio exists to catch. A musician (or the Agile Facilitator) judging its own knowledge gap can invent a plausible-sounding domain that was never actually missing. Three outside voices, none of them the chair being reviewed, judge instead.

## Trigger
Any time a **new knowledge domain or section** is proposed for a musician's root knowledge — a structural addition (like Content Designer's semiology or UX Designer's Gestalt), not a minor wording tweak to something already there. Self-suggested by the Agile Facilitator whenever it's about to propose this kind of addition; never applied silently.

## The three lenses (distinct, non-overlapping)
- **Agile Auditor** — is this a genuine, structural gap, or a one-off invented to fill a slot? Does it duplicate something already covered by an existing invariant, chair, or capability guard?
- **User Researcher** — is this an actually-established discipline, sourceable and nameable, or a plausible-sounding label with no real substance behind it? (Same credibility discipline User Researcher already holds for research findings.)
- **Product Owner** — does this serve the Composer's actual objective, or is it scope creep riding the session's momentum? (Same lens as the momentum self-check.)

## Recusal
When the domain under review belongs to one of the trio's own three chairs (a proposed addition to the Agile Auditor's, User Researcher's, or Product Owner's own root knowledge), that chair recuses from judging it — the remaining two lenses decide alone. The whole point of this trio is that a chair never judges its own gap; that applies to the reviewers as much as to any other musician.

## Verdict
Each addition gets one of three verdicts, never silent approval:
- **Keep** — passes all three lenses as proposed.
- **Revise** — the concept is sound but needs a caveat (e.g. "unproven, no live incident behind it yet" or "overlaps with an existing baseline — lower marginal value").
- **Drop** — fails one or more lenses; not added, or removed if already merged.

## Always submitted to the Composer — the confirmation gate (added 2026-07-04, ADR-82)
Nothing here auto-applies, unlike the Tool Audit's critical tier (which is a verified fact, not a judgment call). A knowledge-domain addition is inherently a judgment about relevance — the trio's verdict is a recommendation, the Composer decides.

**This used to be a stated principle with no mechanism, and it failed exactly once that way** — a verdict was rendered and implemented in the same response, with no pause. Fixed with an explicit gate, not just a stronger sentence:

1. End every Chair Review response with a visible marker: **"⏸ Verdict rendered — awaiting your confirmation before anything is built."**
2. **No Edit, Write, or state-changing Bash call (branch, commit, push, PR, merge) happens in that same response, or any response before the Composer's next message.** The verdict and the action are structurally two different turns, not two paragraphs of one turn.
3. The gate lifts only on an explicit Composer reply — approving the verdict, choosing among options, or saying "make it so." Silence, a topic change, or the Agile Facilitator's own momentum are not confirmation.

This gate is scoped to Chair Review specifically (per the Software Architect's risk assessment, ADR-81: the demonstrated failure was here, not proven to generalize to every quorum output — Auditorium is not currently gated this way, though the Agile Auditor watches for the same pattern recurring elsewhere).

## Retroactive scope
Chair Review can run backward over anything already merged, not just forward over new proposals — see the 2026-07-04 retroactive pass (ADR-70) for the first example: 13 knowledge-domain additions re-examined, 11 kept, 2 revised, 0 dropped.
