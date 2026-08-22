---
type: Tool
title: "Tool: Cowork mode (Claude Desktop)"
description: "Cowork mode in Claude Desktop: skills and their references do load, and the defining constraint is that the pass runs unwatched — with the audit brief for everything still unverified"
status: draft
serves: [User Researcher]
generated: { by: human:jkornobis, at: 2026-08-22T23:51:16+02:00 }
---

# Tool: Cowork mode (Claude Desktop)

> **Corrected 2026-08-03, Composer: Cowork is a *mode inside the Claude Desktop app*, not a separate
> product or surface.** The desktop client runs at least three — plain chat, Cowork, and Claude Code —
> and this page describes the second. Two consequences follow. **(1)** Every client-level fact in
> [`claude-desktop.md`](claude-desktop.md) applies here for free: the 1024-character skill-description
> limit, `.skill` being a zip of a directory, the `/` menu being a listing rather than the registry,
> and the `/<namespace>:<skill-name>` invoke workaround. **(2)** It lowers the prior on the question
> answered below — same client, same skill store, so the `references/` tree loading was likelier than
> this page framed it. The verification stands; the surprise does not.
>
> It also sharpens the open question that matters: **"no reading surface" is a property of the mode,
> not a missing capability of the client.** The Browser pane exists in this app — it is what this
> repo used to verify eight graphs. Whether Cowork can be made to show one, or whether an unwatched
> pass can be taught to leave readable artifacts instead, is a real question with a plausible answer,
> not a wall.

Audited 2026-08-03 by User Researcher — **mostly scope-only.** Two capability facts are now verified by doing
(skills load; the `references/` tree loads with them). Everything still phrased as a question in
section 2 is unverified and must not be read as documentation.

Re-audit: 90 days — default, not measured (and the clock is the wrong instrument here: this page is thin because the surface offers no handle to audit from Claude Code, not because it is stable — see its closing section)

This page exists because the gap is worth naming before it is filled (design by absence). Cowork is
**the surface doing most of the Composer's actual work** and the only one of his three that has never
been audited. Claude Code is fully instrumented by this repo; Figma has a curated edition, a tool page
and three documented failure modes; Cowork has neither, and it is where he reports the largest
speed-up.

## Critical (verified this session)

- **The work runs unwatched, and that is the surface's defining constraint** (Composer, 2026-08-03):
  *"the problem of cowork, it's doing on it's own, here I can see the render in claude internal
  browser if I want, not on cowork pass."* In Claude Code the Composer can watch a render as it
  happens — the Browser pane is right there, and this session used it repeatedly to verify graph
  output. In Cowork the pass completes without his eyes on it.

  **Why this is not a UX complaint but a gate failure.** His own diagnosis of the whole QA branch:
  *"what they call visual model are only decrypt image, not reasoning with visual shape."* If the
  model cannot reason about shape, the human's eyes **are** the verification instrument for anything
  visual — and this repo already encodes that. `figma_method.md`'s QA Engineer gate requires a
  post-mutation screenshot; the UX Designer's new graphical-perception domain exists because twelve
  encoding defects survived every text-based check. A surface that removes the human from the loop
  cannot satisfy either.

  **So the real question about Cowork is not how fast it is — it is which work belongs there.** 5×
  on work he can read afterwards (code, text, structure, counts) is a real 5×. 5× on work whose only
  competent judge is a pair of eyes that were not present is a deferred cost, not a saving. That
  boundary is worth drawing explicitly before more design work moves there.

- **Nothing else here is verified.** The audit cannot be run from a Claude Code session: this
  surface offers no handle to drive or inspect from here, and a Tool Audit's whole discipline is
  *verified, not recalled*. Reading Cowork's documentation would produce exactly the kind of page
  this protocol exists to prevent.

## Recommended (Composer to accept/decline) — the audit brief

Ten minutes inside a Cowork session answers all of it. Ordered so the first question can end the
audit early.

1. ~~**Does the orchestra load at all?**~~ **ANSWERED 2026-08-03, Composer:** *"I can launch skill on
   chat and cowork yes, I init Grand Ensemble there."* Skills are invocable on both surfaces and he
   has already initialised **Grand Ensemble Alpha** in Cowork. So the 5× runs *with* the orchestra,
   not without it — the question this page opened on is closed, and the surface is not skill-blind.
2. ~~**Which parts load — and does it have its `references/`?**~~ **ANSWERED 2026-08-03 — the
   `references/` tree loads. Verified, not inferred.** The Composer ran the cheap test in a live
   Cowork session (*"what is the recusal rule in Chair Review?"*) and the answer came back with the
   rule **and** its rationale, citing `chair_review.md` by name.

   **Why that answer discriminates, stated precisely, because half of it did not.** `SKILL.md`'s
   single Chair Review line already carries the trio, *"never the chair judging itself"*, the
   Keep/Revise/Drop verdicts and the gate — so the *shape* of a recusal rule was reconstructable
   from the always-on block alone, and a weaker answer would have proved nothing. The discriminating
   evidence is narrower and it is decisive: `grep -ci` over `skill/grand-ensemble/SKILL.md` returns
   **0** for `recus`, `confabulat`, `two lenses` and `decide alone`, and `chair_review.md` returns
   2 / 1 / 1 / 1. The reply contained *"the remaining two lenses decide alone"* — verbatim from
   line 14 — and *"self-referential confabulation"*, which appears only in line 3.

   **Consequence:** Cowork is **not** the Figma failure mode. It reaches the skill's own directory,
   so a Cowork edition (question 3) is not needed, and the two orchestras the Composer runs there
   are running on the whole system, not on `SKILL.md` alone.
3. **If references do not load: is a Cowork edition needed?** The same curation question `Figma`
   forced (ADR-211), asked of a surface with different constraints — no 8KB ceiling, but possibly no
   file tree either.
4. **Session boundaries.** Does a Cowork session persist context across days? The Composer's work
   sessions start 8–9 AM; if Cowork resets, the orchestra needs the same file-backed memory Claude
   Code relies on, and `Checkpoint the session` has no repo to write to unless one is mounted.
5. **Repo access.** Can a Cowork session read and commit to a local clone? If not, every durable
   artifact this system produces — ROADMAP, SESSION_LOG, patterns, the ledgers — is out of reach from
   the surface doing most of the work.
6. **The 5× itself.** The Composer's own framing: *"it's how I feel."* Unmeasured, and worth one
   honest number rather than a slogan — pick a task shape he does often and time it once each way.
   Reliability Engineer's ground, not User Researcher's.
7. **MCP reach.** Which connectors are available there, and is it the same set as Claude Code? This
   is the question ROADMAP note 46 will need answered before the Jira Cloud substrate can be assumed
   to serve all surfaces.

## Why this page is a stub and not a guess

The Tool Audit protocol's first rule is that a capability claim must be checked live this session,
never recalled. Everything in section 2 is a *question*, not a finding — the page is deliberately
empty where the knowledge should be, so the emptiness is visible and dated rather than filled with
plausible documentation. Re-audit converts these to Critical facts.
