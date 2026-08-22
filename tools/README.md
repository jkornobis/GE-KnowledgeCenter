---
type: Tool
title: "Tool pages"
description: "One page per deployment surface (e.g"
status: draft
serves: [QA Engineer, User Researcher]
generated: { by: human:jkornobis, at: 2026-08-16 }
---

# Tool pages

One page per deployment surface (e.g. Figma), written by a User Researcher-led Tool Audit — see `skill/grand-ensemble/references/tool_audit.md` for the protocol. Not pre-filled speculatively: a page exists only once a Tool Audit has actually verified the tool's capabilities this session.

Template: `_template.md`.

## What a tool page actually records (2026-08-08)

**Not what the tool can do. The vantage point a reading was taken from, and the verification state of that reading.**

Consolidated from the five pages that existed when this was written, each of which had been teaching one instance of it separately:

| Page | The rule it taught | The misreading it cost |
|---|---|---|
| `claude-desktop.md` | *"The number was about the layer, not the subject"* | a shell-side `localhost` reported as a fact about the machine — two networking changes proposed to repair a fault that did not exist |
| `pdf-reading.md` | **Display is not read** | `navigate` renders a PDF in the Composer's pane and returns nothing to the orchestra; *"it fails"* would have retired a working capability |
| `figma.md` | A negative result is worthless unless the test **engaged the mechanism** | *"no update-in-place"* published as fact for a day; Edit had a Save button the whole time |
| `figma.md` | Automation is not automatically the cheap path | a guarded scripted delete returned **0**; the Composer did 19 deletes and 19 re-uploads by hand faster |
| `context7.md` | Doc-sourced ≠ schema-introspected, stated per claim | four reflexes accepted for a server that has never run connected |
| `cowork.md` | Emptiness is a finding when it is **visible and dated** | the page is deliberately blank where knowledge should be, so nothing plausible fills the gap |

**The single shape under all six: the tool worked and returned a number, and the number was about the instrument rather than about the subject.** Recall misread as verification; a display misread as a read; a failed test misread as an absent capability; a one-shot script misread as a durable one; a human step misread as the expensive one.

*The rule itself is orchestra-wide and lives in `brain/brain_principles.md` — **The oracle rule**, which is invariant 2 one layer down: an instrument's self-report is self-attestation. This section is its **tool-page application** and deliberately does not restate it (2026-08-08).*

So a page that says *"tool X can do Y"* is not yet a tool page. It becomes one when it says **how that was seen, from where, and on what date** — which is what makes the `Audited` line and the `UNVERIFIED` marks load-bearing rather than ceremonial, and what the reading-surface axis below is the deployment-surface case of.

Each page carries an `Audited YYYY-MM-DD` line. Each page also carries a **`Re-audit: N days — <basis>`** line, whose authority is the chair's own page in `yang/` (ADR-267). `scripts/check_tool_audit_freshness.mjs` reads both and flags a page past **its own** cadence — 30 days measured for `figma.md`, 90 `default, not measured` elsewhere. A missing cadence line fails the check.

## Why this subsystem exists at all (2026-08-08)

**The Composer, naming the reason the three layers were built:** *"You never properly research tools — it's why I give you tools discovery general, then specific, then methodology to choose."*

**It is the same defect he identified at task level, one altitude up.** His diagnosis of the Figma skill was that an agent holding it *"can still produce SVG vector by hand instead of searching the lever to do the rights things the right way"* (ADR-257). The economics are identical in both cases: **synthesising from what is already known costs zero lookups at near-certain success; searching for the right instrument costs an uncertain search.** The cheap certain path wins every time, and reasoning does not rescue it — reasoning is what makes the improvised answer feel sufficient.

- At **task** level, that hand-rolls a shape.
- At **estate** level, it **hand-rolls a toolset** — using whatever is already in front of you, never asking whether a better instrument exists.

**The evidence is this repository, measured rather than asserted.** `grep -i "strokecap|createvector|createline|vectorNetwork"` over `brain/ agents/ skill/` returned **zero** after four months of Figma work. `figma.md`'s conclusion that *"neither Claude Code surface can use a Community plugin end-to-end"* stood from 2026-07-16, **was extended twice on 2026-08-08**, and was never questioned until the Composer questioned it — it was false (ADR-259).

**So the three layers are countermeasures, not process. Each blocks one substitution:**

| Layer | The substitution it blocks |
|---|---|
| **Tool Discovery** (general — what leaps exist that we are not reaching) | *use what is in front of you* — forces a search that would otherwise never happen |
| **Tool Audit** (specific — what can this named surface actually do) | *recall what it does* — forces verification over memory |
| **The six questions** (`register.md` — how to choose between candidates) | *take the first workable option* — forces comparison over convenience |

**And this is the reason ADR-214 recorded as missing.** That entry noted the roster's empty products column *"held for eight weeks while ADR-199 and ADR-214 enforced it and no entry said what it was for — the structure existed without its reason."* This is the reason, and it is written at the front door rather than in a log, because a countermeasure nobody can see the point of is the first thing to be skipped.

## What is shared and what is one Composer's (2026-08-08)

**The Composer, on where this subsystem goes when someone else adopts the orchestra:** *"Each composer, from each branch, will probably produce it's own main tool page — alongside the musician list of tools page and chair shared tools."*

**That extends the skill's own split — *the reusable system versus the personal Composer Key* — down into this directory, and nothing had said so.**

| Layer | Shared, or one Composer's | Why |
|---|---|---|
| The **method** — Tool Discovery, Tool Audit, the six questions, the cadence rule, the oracle rule | **shared** | it is how anyone judges any tool; it carries no one's surfaces |
| Lever **definitions** in `register.md` | **shared** | a lever is a capability, not a person's kit |
| **`<tool>.md` pages** — which surfaces exist, and how deep | **one Composer's** | *"figma.md is only the first page existing detailed because figma is my main working surface"* |
| **`yang/<musician>.md`** — the musician's list of tools | **one Composer's** | it records what *this* orchestra's occupants carry |
| **Shared tools** in `roster.md` | **one Composer's** | shared *across the twelve chairs*, not across Composers — the repo, the client, the pane are this estate's |

**Three consequences worth stating before a second Composer arrives.**

**Page depth is not a standard to match.** A new Composer will produce a 300-line page about *their* main surface — a terminal, an IDE, a tracker, a notebook — and thin ones elsewhere. **Detail tracks whose hands are on the tool, not what matters most.** The uncomfortable corollary is already visible here: `figma.md` runs 306 lines while `cowork.md` runs 105 of mostly open questions, and `cowork.md`'s own text calls Cowork *"the surface doing most of the Composer's actual work"* — **the best-documented surface is the one he can watch; the least-documented is the one he cannot.**

**They accumulate — and that is the point of shipping a repo rather than a skill.** ~~*Two Composers' `agents/tools/` will hold different sets by design; converging them would be wrong.*~~ **Corrected the same day by the Composer, and the correction is the larger idea:** *"It's the power to distribute knowledge as repo itself instead of just one skill — build a solid library of tools expert by each composer entering the grand ensemble."*

**A skill ships instructions. A repo ships an accumulating corpus with provenance and history.** Two Composers' pages do not *merge into one* — a designer's Figma page and a developer's terminal page are different surfaces, not rival drafts of the same one — but they **sit side by side and add up**. The union is a library of tool expertise no single Composer could produce, because no one works on every surface.

**And the payoff is the narrow waist, applied to knowledge.** Today the cost is O(M×N): **every** Composer audits **every** surface they touch, from scratch, hitting the same failures. With the library it is **O(M+N)** — a surface is audited once, by whoever actually uses it, and every later Composer inherits verified facts for tools they have never opened. That is this repo's own `Spans:` thesis (`register.md`) turned on the orchestra itself, and it is the strongest argument for the repo form.

**What still must not merge is narrower than "the pages".** Inside `yang/<musician>.md` there are two kinds of content, and only one is personal:

| Content | Library or personal |
|---|---|
| The **lever index** — *I want an arrow* → `strokeCap = 'ARROW_LINES'` → the wrong default it beats | **library** — craft knowledge about an instrument, true for whoever plays it |
| **Occupancy, limits reached, the cadence a Composer measured** | **personal** — a record of these hands on this tool |

Same for the tool pages: **verified capability facts accumulate; the choice of which surfaces exist at all reflects one Composer's work.** `roster.md`'s occupancy and shared-tools list stay wholly personal — they describe one orchestra's twelve seats.

**And it is why the cadence's authority sits on the chair's page** (`Re-audit:` cites `yang/<musician>.md`): the clock has to follow *who is playing what*, which is the part that changes per Composer, rather than the file type, which does not.

## Three artifacts, two methods (2026-08-05)

A tool page answers *what can this surface do* — but only once you know the surface's name. **Tool Discovery** answers the question before that one, and writes two files that sit alongside the pages:

| File | Written by | Question it answers |
|---|---|---|
| `<tool>.md` (these pages) | **Tool Audit** | what can this surface actually do here — verified, deep, one tool |
| `register.md` | **Tool Discovery** | what leaps exist that we are not reaching — sourced, wide, five mechanisms |
| `roster.md` | **Tool Discovery** + Tool Audit's placement | which levers each chair requires, and which products its occupant carries |

The chain: `gap named` → Discovery (lever-level) → Composer picks → Tool Audit (verified) → placement into the occupant's products, or promotion to a chair requirement. Protocol: `skill/grand-ensemble/references/tool_discovery.md`.

Two clocks, deliberately different: **90 days** for a tool page (capabilities drift), **30 days** for the register (AI surfaces move faster).

## The reading surface — the axis the Composer named (2026-08-03)

Three surfaces, and the property that actually separates them is not power. It is whether you can
**see the error**. The Composer's own summary, verbatim:

> *Figma AI: small, partial but reading surface of error.*
> *Cowork: Powerful, MCP and Figma skill working, but No Reading Surface.*
> *Only solution, Use windows tile management system to have cowork and figma on screen, switching
> from one to another.*

| Surface | Capability | Reading surface |
|---|---|---|
| **Figma AI** (`figma.md`) | small, partial — curated 27-part edition, no subagents, no repo | **yes** — the canvas is right there; the error is visible as it happens |
| **Cowork** (`cowork.md`) | powerful — MCP connectors, the Figma skill, real parallelism, ~5× throughput | **no** — the pass runs unwatched |
| **Claude Code** (this repo) | powerful — full tree, subagents, git, Browser pane | **yes** — live via the Browser pane, and deferred via computed checks |

**Why this axis and not "capability".** If *"visual models only decrypt images, they do not reason
with visual shape"* (the Composer, same day, and the finding twelve encoding defects independently
support), then for anything visual the human eye is the verification instrument. A surface without a
reading surface cannot close the QA Engineer's gate on visual work, however capable it is otherwise.
His tiling answer is the correct shape for that: **put the human where they can see both**, and let
their eyes be the bridge the tooling cannot be.

**One thing worth adding to his solution, because today demonstrated it.** A reading surface does not
have to be *live*. This repo verified eight graphs without anyone watching a render — by computing:
OKLab distances between palette tokens, cluster-arc contiguity, angular separation of labels, `fp`
stamps read back after a save. Every one of those is a **deferred** reading surface: an artifact that
survives not having watched. So the durable version of the tiling workaround is not more watching —
it is teaching the unwatched surface to leave artifacts a human can read afterwards. Tiling is right
today; artifacts are what make it unnecessary.
