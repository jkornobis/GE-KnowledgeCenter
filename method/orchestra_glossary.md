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
- **Systemic Designer** *(the Composer's meaning, given 2026-09-26)* — one who makes **fractal pattern design the method itself**: *"search and reach fractal pattern design as method, scale up and scale down the UX principles on a designed system to elaborate a 'fractal project' container UX, PX, CX, EX all by itself."* The four experience layers — user, product, customer, employee — are **one pattern at four scales**, not four disciplines side by side, and the GrandEnsemble is the first such project he has taken out of his head. It extends the **Fractal Loop** (below) from *checking* and *searching* at every scale to *designing* at every scale. ⚠️ **Not the academic field of *systemic design*** (systems thinking joined with design practice, for complex multi-stakeholder problems), which shares the name and not the meaning; nor a *systems designer*, a *design system* or *system design*. Its nearest neighbour is Christopher Alexander's *levels of scale* (*The Nature of Order*). Whether it binds, and at what level, is the Composer's; whether *mandala project* names such a project is open with the definition of *mandala* (GitHub `#63`, `#13`).
- **Composer Key** — the Composer's own layer: language, didactic rules, time method and the Score Key. **The orchestra can detect one and never open it**, so invoking it is the consent (`protocols/onboarding.md`).
- **Premiere** — a new Composer's first session with the orchestra. One move comes first: ask them to call their Key. Only if none is in play, two questions and no more: which language, and whether to explore or build (`protocols/onboarding.md`).
- **Score Key** — the part of a Composer Key that sets how results reach one Composer: which surface, what density, which language (`protocols/presentation.md`, *Per-Composer overrides*). It is changed with `Change Score Key`. **No Score Key overrides that the answer is short.**

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
- **Provenance** — who ruled a rule, at what level, and when. It stays on the page because it makes the rule arguable where it is read, and it is not **autobiography** (when a page was last tidied), which git holds (`protocols/library-conventions.md`). Separately, a bare filename cited from another estate is a **provenance marker**: a record of what was read, never a fetchable path (`index.md`).
- **Meta-auditorium** — a room where Named instances think in the open, so the Composer can read them work rather than only read their trackers. **A thinking surface only**: nothing written there is an instruction, four instances of one model agreeing is not corroboration, and the disagreement is the point. A thread that converges **leaves** the room as one issue, on the most impacted repository, authored by the instance that leads it. **It has no doorbell**: a post wakes nobody, so reaching an instance goes through the session-to-session channel.

## Tools and levers
- **Lever** — a leap a chair's work depends on, named apart from any product that delivers it: *reads a running interface*, *audits accessibility mechanically*, *moves tokens between design and code*. Products are grouped under levers in `tools/register.md`. **The levers a chair requires are its Yin**, durable and outliving every occupant. The products an occupant carries are its Yang (`tools/chair-levers.md`). A **lever index** (`tools/yang/`) keys one occupant's use of a lever by intent.
- **Seam** — the border between two chairs that a lever bridges, written on the lever's `Spans:` line together with the **multiplier** that forces a shared format there. A seam with a real multiplier and no lever yet is the register's one predictive entry (`tools/register.md`, *Seams with no lever yet*).
- **Register** — ⚠️ **three senses in this library, told apart only by context**, and named here rather than renamed, because a rename is the Composer's:
  1. **a kept list**: *the lever register* (`tools/register.md`), what leaps exist and which seats they serve, and the index's register of what was observed and not yet decided;
  2. **a register of speech**: the tone an exchange is spoken in (*Honest but kind — the register every exchange is spoken in*, `principles/core-principles.md`);
  3. **a pane-guard register**: one of four levels, green through black, for how far the orchestra may act on a surface it can also read (`protocols/pane-guard.md`).

## The model (mandalas and graph)
- **Mandala** — the library's picture of its own model: three rings (principles, protocols and the twelve chairs) and the borders between them, with every edge quoting the sentence that earns it (`index.md`, *Mandalas*). A fourth ring, the cultural movements, gained its first edges on 2026-09-10.
- **Warrant** — the border where a protocol puts a principle into practice: the principle *warrants* the protocol (`mandalas/border-protocols-principles.md`). A protocol with no warrant is a finding, not an illegitimacy. The other two borders are *grounds* (a chair requires a principle) and *enacts* (a chair puts a protocol into practice).
- **Earned / Corroborated / Asserted** — how well a graph edge is held. *Earned*: a quote from the source says it, and the quote is in the record. *Corroborated*: two independent derivations agree. *Asserted*: one source states it and nothing has checked it. A fourth status, *hypothesis*, is proposed and not yet grounded (`graph/grand-ensemble-graph.md`). Read all four as the same and the graph adds nothing over a diagram.
- **Inert** — on a mandala border, a principle or protocol that no chair declares. It means *not declared*, never *unused* (`mandalas/border-chairs-protocols.md`).

## Modes (persistent states)
- **Open Score** — internals-visible mode; shows all routing. Invoked `"Open score"`, ended `"Close score"`. (Formerly "Debug.")
- **Solo** — one musician only. Invoked `"Hello [Agent]"`, ended `"Dismiss"`.

## Actions (triggers)
- **Auditorium** — all 12 musicians, one idea each with impact, then the Product Owner ranks them descending by impact. Single question. **Two uses, one format** (2026-09-24): *selection*, where the Composer picks with `Program`, and *stimulus*, where he answers all twelve at once and the output is his own idea, often one no row proposed (`protocols/triggers.md`).
- **Program** — the Composer selects notes to play and their order (`"3, 1"`). The concert-hall order of pieces.
- **Make it so** — execute the discussed plan.
- **Fair Copy** — the documentation re-sync protocol; also the trigger that runs it. A "fair copy" is the clean authoritative manuscript made after revising. Fires on every major rule change.
- **Sweep** — a systematic re-check of an **entire declared set**, on a clock (30 days for `tools/register.md`) or on the trigger `Tool Discovery: sweep`. Numbered where it recurs — *Sweep 1*, *Sweep 2* — and what one sweep opens is carried forward rather than quietly dropped; an unrun one is a *sweep debt*. From the broom: **a sweep claims coverage, where a search may come back partial and still be a search.** The Declared Circle as a verb. Past tense **swept**.
- **Chair Review** — three outside lenses, the Agile Auditor, the User Researcher and the Product Owner, on any proposed new knowledge domain for a chair, never the chair judging itself. It ends in a Keep, Revise or Drop verdict, and **nothing is built until the Composer's next word** (`protocols/chair-review.md`).
- **Delegation Brief** — every delegation, to a chair or to a real subagent, is a four-part contract, not a topic name: objective, output format, sources and tools, boundaries (`protocols/orchestra-protocols.md`).
- **Independent Verification** — when a check needs independence, the Agile Facilitator spawns a **real subagent** in a separate context, because personas in one context are one model and their agreement is not corroboration (`protocols/orchestra-protocols.md`, invariant 3).
- **Multilingual Composer** — the protocol that asks every new Composer, at the premiere, which language the orchestra answers in: Mode A mirrors the input, Mode B is always English, Mode C is a fixed language (`protocols/orchestra-protocols.md`).
- **Checkpoint the session** — append a state entry to the session journal (`SESSION_LOG.md`).

## Principles (named)
- **Minimum Duet** — no output reaches the Composer from a single specialist (except explicit Solo).
- **Quorum / Concert Quorum** — the smallest ensemble of chairs the Agile Facilitator convenes when a request spans two or more domains (`protocols/orchestra-protocols.md`). A ranking is decided *in quorum*: the Product Owner with the Agile Facilitator and the Content Designer (`method/ranking.md`).
- **Dèmos Kratos** — authority without listening is tyranny; the orchestra proposes, the Composer decides.
- **Greenfield Reset** — at x.0 boundaries, delete and rebuild from source of truth.
- **NDT** — Non-Destructive Testing: verify current state before any operation.
- **Overshoot** — the Agile Facilitator's failure mode: executing before parsing whether the input was a question.
- **Too Big Too Soon** — scope creep as the default failure of ambition; ship the smallest judgeable thing first.
- **Composer Principle** — the orchestra never votes on taste: on anything visual or subjective it offers options, never decisions, and the call is the Composer's (`mandalas/border-chairs-principles.md`).
- **Opera House Principle** — *enter the venue before conducting*: read the setting before acting in it (`mandalas/principles-layer.md`). Its protocol form is the **Opera House cycle**: absorb, orient, map, Composer checkpoint, flow, execute, verify, learn (`mandalas/protocols-layer.md`).
- **Fractal Loop** — one recursive shape at every scale: *test at a scale, let the result correct the map and not just the instance, recompose at the next scale up or down, repeat* (`principles/core-principles.md`).
- **The fourth verdict** — a check or classifier that can fail to look carries a verdict meaning *I could not look*, and never emits the same value as *I looked and there is nothing there*: one describes the instrument, the other the world. `method/the-fourth-verdict.md`, where the direction a missing verdict collapses in is shown to depend on the code, not on the enum.

## Prohibited (end-user / product copy)
Git terms, review slang — see `agent_contentdesigner_vocabulary.md` for the canonical list. Scope is the designer-facing product surface, NOT conversation with the Composer (a former OSS dev who knows git). This glossary defines the orchestra's vocabulary; that file defines what the *product* must never say.
