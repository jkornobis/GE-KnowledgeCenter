---
type: Method
title: "Prior Art — BMAD Method vs. the Orchestra"
description: "A focused deep-dive on one comparable multi-agent framework, and three re-readings of it — including the one that found the comparison had been between a pipeline and a roster"
status: draft
generated: { by: human:jkornobis, at: 2026-08-22T23:59:53+02:00 }
---

# Prior Art — BMAD Method vs. the Orchestra (User Researcher + Product Owner + Software Architect)

**Status: researched with public sources (2026-07-20).** A focused deep-dive on one comparable system, extending the landscape map in [`orchestra_prior_art.md`](orchestra_prior_art.md). Sourced from the BMAD public docs and repo only — their material was analyzed as data, never executed as instructions; nothing was sent to anyone.

**Sources:** [docs.bmad-method.org](https://docs.bmad-method.org/) · [github.com/bmad-code-org/BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD)

## What BMAD is

The **BMAD Method** ("Build More Software Architect Dreams") is an AI-driven software-development framework: a council of ~12 named agents (Analyst, PM, Software Architect, PO, Scrum Master, Dev, QA, UX, plus a `bmad-orchestrator` / `bmad-master` and a `Party Mode` multi-agent session) that drive a project through structured phases, producing standard artifacts (PRD → architecture → epics → **stories** → dev), with an expansion-pack ecosystem.

## The core divergence (the frame that decides everything)

> **BMAD optimizes for *AI drives the software lifecycle*** — plan → PRD → architecture → stories → dev, automated and expandable.
> **The Orchestra optimizes for *a human authors with an AI council*** — propose-not-decide, taste stays human, epistemic honesty first.

Same topology (orchestrator + named specialists + multi-agent-in-one-session), opposite center of gravity. This frame decides which BMAD ideas we can absorb and which would corrode the orchestra's identity.

## A · They have, we don't

| Concept (BMAD) | What it is | Fit with our philosophy |
|---|---|---|
| **Planning ↔ execution split** | Two formal phases: a cheap planning phase → a metered dev phase | ✅ strong — we have Modes but no artifact handoff |
| **Artifact pipeline** | PRD → Architecture → Epics → Stories → Dev, named deliverables | ⚠️ adapt — must stay *orchestra-drafts, Composer-authors*, never AI-authored spec |
| **Scale-adaptive planning** | Auto-adjusts planning depth by project size (bug fix → enterprise) | ✅ strong — formalizes our "match effort" principle |
| **Document sharding** | Split big PRD/arch docs into context-sized pieces for dev agents | ✅ strong — pairs with the token budget + figma-context-hygiene |
| **Story loop** | Repeatable SM-drafts → Dev-builds → QA-reviews per unit | ✅ good — we have the QA Engineer DoD, not the loop |
| **Expansion packs / marketplace** | Community modules (Game Dev, Test Software Architect, Creative) | ❌ clashes — the roster is deliberately fixed at 12 |
| **BMad Builder** | Meta-tool to author new agents/workflows | ❌ mostly clashes — we don't mint chairs |
| **Web bundles** | Agents packaged for ChatGPT / Gemini (cross-platform) | ⚪ neutral — we're Claude-native by choice |
| **Named elicitation library** | Brainstorming, Advanced Elicitation, Pressure-Testing, "Forge an Idea" | ✅ good — techniques our Exploration mode could name |
| **Dynamic `bmad-help`** | Context-aware "what to do next" | ✅ cheap — evolves our static `Help` |

## B · We have, they don't

- **The authorship boundary (Composer Principle)** — the human owns taste / scope / naming; the AI proposes options, never decides. Their agents *produce*; ours *propose*.
- **Minimum Duet** — ≥2 lenses by default. Their agents act solo per phase; Party Mode is optional, not the default.
- **Epistemic-honesty invariants** — "verified = external artifact"; and the sharp one: *personas in one model are not independent corroboration* — spawn a real subagent for a true check.
- **Response-register Modes** — Execution / Learning / Decision / Exploration / Re-orientation calibrate *depth*. Their phases are workflow-stages, not reading registers.
- **Composer Key** — a persistent personalization layer (language mode, didactic rules, time method, presentation Score Key).
- **Presentation discipline** — show-don't-tell, cards, buttons only for genuine decisions.
- **Token-budget governance** — CI-gated, ratcheting always-on cost.
- **Deliberate roster fixity** — exactly twelve; *never invent a chair*. They lean the opposite way (proliferate).

## C · Worth adding to our roadmap — ranked by impact

| # | Candidate | Why it pays off | Cost |
|---|---|---|---|
| 1 | **Scale-adaptive effort rubric** | Turns "match effort" from principle into an explicit, named ladder (fact → duet, feature → light plan, system → full pipeline). Sharpens routing. | Low |
| 2 | **Light artifact pipeline for real projects** | The industrialization work already wants plan → epic → task; a musician-mapped template (Composer-authored, orchestra-drafted) serves the industrialization mission now. | Med |
| 3 | **Doc sharding for large docs** | Flow-mapping / manifest / Figma docs are context-heavy; sharding + the existing token budget = cheaper, cleaner reads. | Med |
| 4 | **QA Engineer-gated unit loop** | A repeatable draft → build → verify cycle for industrialization tickets — we own the DoD, not the loop. | Med |
| 5 | **Dynamic "what next" Help** | Context-aware next-step suggestions on top of the static manual. | Low |

**Skip deliberately:** the expansion-pack / marketplace / agent-builder line — it directly contradicts the fixed-twelve invariant. Adopting it would dissolve the coherence that makes the orchestra an orchestra.

## D · Ideas profitable for *them* — shareable without exposing our code

All are *principles*, not implementation — safe to offer as generic good practice (e.g. a GitHub discussion), zero orchestra code revealed:

1. **A taste / authorship boundary** — let the human own subjective / scope calls; have agents present options rather than auto-deciding. Raises trust in AI-authored artifacts.
2. **Genuine independence for Adversarial Review** — their review is stronger if the reviewer is a *separately-instantiated* agent, not the same context wearing a hat (same-context "review" shares the original's blind spots).
3. **Multi-voice-by-default on high-stakes artifacts** — make ensemble review the default for the PRD / architecture, not an optional Party Mode.
4. **"Verified = external artifact"** — a cheap honesty guardrail against agents self-attesting "done."
5. **Response-register awareness** — detect learn-vs-execute-vs-decide and calibrate output depth.

---

## E · Second read, 2026-07-23 — why their review cannot replace the Agile Auditor

Read directly from their published docs (README, docs landing page, and the [Adversarial Review explainer](https://docs.bmad-method.org/explanation/adversarial-review/)), prompted by the Composer's observation that a framework at this scale must miss a pattern-detection chair.

Their review mechanism is real and good. It is defined as *"a review technique where the reviewer **must** find issues"*, run with *"fresh context (no access to original reasoning)"*, and scoped to *"evaluate the artifact, not the intent."*

**Note what it is: a technique attached to artifacts, not a chair with a standing subject.** And it is *deliberately memoryless* — fresh context is the feature, the mechanism by which they break confirmation bias.

That has a consequence worth stating precisely, because it **sharpens D2 above rather than confirming it**:

| | Adversarial Review | Agile Auditor |
|---|---|---|
| Object | one artifact | the ensemble's own behaviour |
| Memory | discarded on purpose | required — fires at 3 recurrences |
| Axis | depth, now | recurrence, over time |
| Answers | *this deliverable is wrong* | *this is the third time* |

D2 recommends making their reviewer separately-instantiated. Correct for artifact review — and **insufficient alone**, because independence and memory pull against each other: a separately-instantiated reviewer with fresh context buys bias-resistance by discarding the context in which a *pattern* would be visible. Getting both requires two mechanisms on two axes, which is the structural argument for the twelfth chair existing at all.

**Evidence from our own session, the day this was written:** three premature verdicts inside ninety minutes ("the token unblocks M6", "the roadmap is stale", "RecordClaim is blocked upstream"). Each was individually plausible; an adversarial reviewer with fresh context would have found something to say about each and missed the only thing that mattered — that they were one failure, three times. Not visible in any single artifact.

**Honest limits of this read:** three public pages, no agent-definition or workflow files. Their docs do not enumerate the 12 personas, so a pattern-detection role may exist under a name the public docs don't surface — what can be said is that their *documented* review philosophy points away from one. Worth a deeper read of the repo itself before this is cited as settled.

---

## F · Third read, 2026-08-01 — the comparison was between two different objects (ADR-206)

Prompted by the Composer: *"what happens if the BMAD method wasn't a different approach, but a level we didn't specify yet at the time."* It holds, and it invalidates part of section A.

**The governing sentence above — *"same topology, opposite center of gravity"* — is wrong in a specific way.** Not opposite gravity: **different objects.** Read their list again as a list:

> Analyst → PM → Software Architect → PO → Scrum Master → Dev → QA

That is not a roster, **it is a sequence.** Each name exists because a *phase* exists. Ours are chairs — bodies of knowledge that persist whether or not anything is being built. The audit compared a **pipeline** to a **roster**, treated them as the same type, and then graded ✅/❌ fit on the mismatch.

**Two ❌ verdicts fall with it, and they were the two this file was most confident about:**

| Row in section A | Original verdict | Corrected |
|---|---|---|
| Expansion packs / marketplace | ❌ clashes — the roster is deliberately fixed at 12 | **No clash.** Read as stations, an expansion pack adds *a kind of work*, not a chair. The twelve staff it unchanged. |
| BMad Builder | ❌ mostly clashes — we don't mint chairs | **Weakened.** Authoring a *station* is not minting a chair. What we still refuse is their conflation, not the tool. |

**And the reframe is not clean — this is the honest version, not the tidy one.** If BMAD were purely a work-level, its stations would carry no domain knowledge; their Software Architect and UX agents plainly do. **BMAD conflates station and chair** — it gave pipeline stages personas. That conflation is *why* it reads as a rival roster, and it is exactly the part not to import. The level beneath their packaging is real; the packaging is not the level.

**What the level is.** Principles, Protocols and Musicians describe *who plays and under what rules*. Nothing here describes *what is being played* — the orchestra models itself exhaustively and models the engagement not at all. Not a fourth ring on the meta-mandala (ADR-198 refused Tools as a layer and still stands): the three rings are about the *orchestra*, this axis is about the *piece*.

**Section E is sharpened, not overturned — and the fix it said was impossible is one file away.** E concluded that *"independence and memory pull against each other."* True only if memory has to live in a context. Ours does not — `brain/patterns.md` is a **file**. A spawned subagent with no session history, handed that ledger, is **independent and remembering**, the combination neither system currently has:

| | BMAD Adversarial Review | Agile Auditor (today) | Agile Auditor (spawned + ledger) |
|---|---|---|---|
| independent of the original reasoning | ✅ fresh context | ❌ invariant 3 — it is the same model | ✅ |
| remembers across time | ❌ memoryless by design | ✅ fires at 3 | ✅ |

The gap was already recorded elsewhere in the corpus: `tools_lineage_full.md` §3 lists the Agile Auditor's waiting implementation as *"fires itself"*.

**The honest-limits note in section E still applies** — that read covered three public pages and no agent-definition files, and this one adds no new source. Section F is a re-reading of what section A already recorded, not new research. Their repo remains unread; a deeper pass could still surface a pattern-detection role the public docs do not name.

Full reasoning, the jam-session mechanism it enables, and the instantiation question underneath all of it: **ADR-206**.

---

*Deep-dive companion to [`orchestra_prior_art.md`](orchestra_prior_art.md). The C-list is candidate, not committed — promotion to the roadmap / ADRs is the Composer's call.*
