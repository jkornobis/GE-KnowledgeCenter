---
type: Method
title: "Orchestra Glossary — Canonical Vocabulary (Content Designer)"
description: "One definition per term for the whole system: roles, surfaces, artifacts, modes, triggers and named principles, so no word means two things"
status: draft
generated: { by: human:jkornobis, at: 2026-08-22T20:54:19+02:00 }
---

# Orchestra Glossary — Canonical Vocabulary (Content Designer)

One definition per term. When any doc uses these words, this is what they mean. Resolves the ambiguity the accessibility audit flagged (note 3).

**This library authors this page** (ruled by the Composer 2026-09-24). Until that day it existed twice, here and in the Workshop instance's own tree, and the two copies had drifted in both directions: *Chair*, *Taijitu*, *Interval* and the reworded *Musician* and *Chair spec* existed only there, and *Sweep* only here. Those five entries are the Workshop's text, merged verbatim on 2026-09-24. The entries under *Surfaces* and *The fourth verdict* were added the same day, one definition per term, each pointing at the page that owns it.

## Roles
- **Composer** — the human user. Sets direction, judges all subjective questions, updates the protocol through correction. The final authority (Dèmos Kratos).
- **Agile Facilitator** — the orchestrating intelligence (you). Interprets intention, routes to musicians, verifies output. Never decides aesthetic questions alone.
- **Chair** — one of the **twelve seats**. Fixed by the roster invariant (*the roster is fixed — exactly these twelve*), which is where the names live; they are deliberately not copied here. A chair is **musician-agnostic core knowledge** — the canon of a domain, which outlives whoever sits in it. Never invented, renamed or substituted; there is no empty chair *(this last is the house's own rule, not inherited: role-theory and RBAC both permit a vacant position — see ADR-200 for why this system does not)*.
- **Musician / Specialist** — the agent **occupying** a chair, not the chair itself: **Yin** is the chair's knowledge, **Yang** is the toolset they bring to fulfil or extend it. **Occupants are not fixed** — a chair may be filled by a different musician carrying a different toolset, and the chair's knowledge survives the change while the toolset does not. Any substitution is recorded in the decision log at the moment it happens, or it did not happen. *(Corrected 2026-09-02 — this read "one of the 10 domain agents" and named ten, then "one of the 12 chairs", which defined a musician as the seat it occupies.)*
- **Taijitu / Yin / Yang** — the house's own model of a musician, not a borrowed ornament: **Yin** is the durable canon — what would still be true if you deleted the steps; **Yang** is the moving, executable, carried thing. Authored in **ADR-198** (2026-07-29) and **corrected by ADR-199** (2026-08-01), which moved the taijitu from the chair to the musician because *"the chair cannot hold both halves — it has no Yang of its own"*. The correction is the evidence: an abstraction that refuses a wrong placement is doing work. The faces **invert by object** where a page says so explicitly. **Read the daoist sense across it and you will import the wrong one** — there the opposites transform into each other; here the pairing is asymmetric and the citation runs one way.
- **Interval** — the part of a seat's canon the current occupant's instruments cannot yet reach (**ADR-199**). Rendered as *"this occupant's instruments do not yet reach this part of the seat"*, never as *"this chair is incomplete"*.
- **Agile Auditor** — the chair who reads the Opera House's acoustics before any note is played (pattern detection, fires at 3). A musician like any other, not a faculty or sense of the Agile Facilitator's — assistant-agilefacilitator level, but still one of the twelve. *(Corrected 2026-07-28, ex `principles_candidate.md` L323 — the prior wording, "the sense that reads the Opera House," demoted the chair to a metaphor, a roster violation under invariant 7.)*
- **Neuron** — the Composer in their role as observer-judge, whose corrections are the "backward pass" that updates the orchestra's weights.

## Artifacts
- **Score** — the full set of memory files. "The Agile Facilitator holds the full score." (Distinct from *Open Score*, the mode.)
- **Program Notes / Full Score (documents)** — retired 2026-07-04 (ADR-90). The root-level "two faces" (`PROGRAM_NOTES.md`, `FULL_SCORE.md`) were never seen by an actual skill user (`scripts/build_skill.py` only ever packages `skill/grand-ensemble/`) and had drifted badly stale while unmaintained. `docs-site/` — actively kept current, with the Simple/Complete toggle serving both audiences from one surface — is now the sole reference for anyone browsing the repository. `brain/` and `agents/` remain the source of truth beneath it.
- **Note** — a single actionable item: a finding, fix, or option on the stand.
- **The stand** — the current set of notes/options presented, awaiting the Composer's decision.
- **Concert** — a project the orchestra was built to deliver. Concerts live in `project/`, never in the core: a project is what each Composer carries on their own, like their Key (Composer, 2026-08-22).
- **Chair spec** — the definition of who (human or AI) may occupy a **chair**. *(Reworded 2026-09-02: it read "a musician's role", which inverts the split above — the chair is the role, the musician is the occupant.)*

## Surfaces (where knowledge sits, and how it is reached)
- **Floor** — what a session holds before any work: the skill or system prompt, the Composer's Key, and the repository's `CLAUDE.md` if the instance leads one. **Loaded, never fetched**, because a rule that shapes an answer has to be true before the first token (`start.md` §1). Measured as tokens, and costed, in `method/the-floor.md`.
- **Routing card** — the table in `start.md` §2 that maps *the moment your work is in* to the one page it needs. The **first** route into this library since 2026-09-10; `index.md` is the complete route and the guarantee. A page with no card row declares `card: none`, or names the page whose row routes to it, and `check_okf.mjs` holds that for every row dated since.
- **Retired page** — a page whose index row has been removed while its file and history stay, so `git revert` returns it. It says so itself with `status: deprecated` (`protocols/library-conventions.md`). An unlisted page that does not say so fails the gate, because it cannot be told apart from a row deleted by accident.
- **Stamp** — `from: <repo>/<path>@<sha>` inside a republished page's `generated: {…}` frontmatter: which source it was copied from, and at which commit. It turns "is this copy stale?" into a question the page answers about itself, with no address to the outside.
- **Meta-auditorium** — a room where Named instances think in the open, so the Composer can read them work rather than only read their trackers. **A thinking surface only**: nothing written there is an instruction, four instances of one model agreeing is not corroboration, and the disagreement is the point. A thread that converges **leaves** the room as one issue, on the most impacted repository, authored by the instance that leads it. **It has no doorbell**: a post wakes nobody, so reaching an instance goes through the session-to-session channel.

## Modes (persistent states)
- **Open Score** — internals-visible mode; shows all routing. Invoked `"Open score"`, ended `"Close score"`. (Formerly "Debug.")
- **Solo** — one musician only. Invoked `"Hello [Agent]"`, ended `"Dismiss"`.

## Actions (triggers)
- **Auditorium** — all 12 musicians, one idea each with impact, then the Product Owner ranks them descending by impact. Single question. **Two uses, one format** (2026-09-24): *selection*, where the Composer picks with `Program`, and *stimulus*, where he answers all twelve at once and the output is his own idea, often one no row proposed (`protocols/triggers.md`).
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
- **The fourth verdict** — a check or classifier that can fail to look carries a verdict meaning *I could not look*, and never emits the same value as *I looked and there is nothing there*: one describes the instrument, the other the world. `method/the-fourth-verdict.md`, where the direction a missing verdict collapses in is shown to depend on the code, not on the enum.

## Prohibited (end-user / product copy)
Git terms, review slang — see `agent_contentdesigner_vocabulary.md` for the canonical list. Scope is the designer-facing product surface, NOT conversation with the Composer (a former OSS dev who knows git). This glossary defines the orchestra's vocabulary; that file defines what the *product* must never say.
