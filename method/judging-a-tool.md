---
type: Method
title: "Judging a tool — the six questions, and they are the method rather than columns on a table (User Researcher, Product Owner, Software Architect)"
description: "Lineage, posture, health, grip, why and licence: what each question asks of a tool, who answers it, and the schema a lever entry fills — separated from the register itself on 2026-09-10 because judging a tool and looking one up are different acts and only one of them needs the other page"
status: draft
serves_all: true
generated: { by: agent:ge-knowledgecenter, at: 2026-09-10T22:05:00+02:00 }
sources:
  - resource: https://raw.githubusercontent.com/jkornobis/GE-KnowledgeCenter/main/tools/register.md
    title: "The lever register"
---

# Judging a tool

**These questions lived inside `tools/register.md` until 2026-09-10.** They were separated because
**judging a tool and looking one up are different acts**: the register answers *what exists*, and
this answers *how it was weighed*. A reader who wants a lever should not have to carry the criteria,
and a reader weighing a candidate should not have to carry the register.

## The six questions — six questions, and they are the method rather than columns on it

**Settled 2026-08-08 with the Composer (ADR-263), and his framing is the correction that matters: *"all this metrics are the method — and it's more larger than OSS."*** These arrived through a conversation about open source; **they are not an open-source rubric.** They evaluate any candidate — proprietary, first-party, in-harness, a page on the web — and the licence is one of the six rather than the gate the others hang off.

| Question | Field | Answers |
|---|---|---|
| Is it worth holding? | **Lineage verdict** | true material, or a picture of it (`method/web-lineage.md`) |
| Does it implement the standard, or replace it? | **Posture** | implements · extends · replaces · no standard |
| Will it still be here? | **Health** | stability · community |
| What does it cost to hold? | **Grip** | ref-addressable · eyes-only · mixed · **blocked** · n/a |
| **Does its documentation carry the *why*?** | **Why** | carries · reference only · absent |
| **May we use it, in this case?** | **Licence** | permission, not quality |

**The Composer's division of the instruments, 2026-08-08 — *"benchmark is the why this tool, context7 is where and how"*:**

| Question | Artifact | Instrument class |
|---|---|---|
| **Why this tool?** | **this register** — the six questions | benchmark and project-health services: `deps.dev`, OpenSSF Scorecard, `alternativeto.net` |
| **Where and how?** | **`agents/tools/yang/<musician>.md`** — the lever index | **Context7** — current, version-pinned documentation |

**Which is why Context7 could never do this file's job and was never meant to.** Its own page draws the same line: *"software library documentation, not general web research."* It answers **Posture** for a candidate already named, and then it belongs to the other artifact entirely — **the fingering, not the choice.**

**The lineage stays primary** — it is the only one that asks whether the tool is worth having at all, and a candidate that manipulates the real material still outranks a more featureful one that manipulates a picture of it. **Feature count remains noise.** The other five decide what a chosen tool *costs*, *risks*, *teaches* and *permits* — questions that were previously answered by instinct or not asked.

**And one flag sits on the lever rather than the candidate:** `Spanning layer … won by leap / arrival` — because an incumbent that won by arriving has **arbitrary gaps**, and *"the standard does not cover it"* is then a fact about history, not about what is possible.

Definitions and worked examples for each are at the bottom of this file, beside the schema.

### Who answers them — User Researcher gathers, the Product Owner weighs, the Software Architect validates

**The Composer's routing, 2026-08-08: *"it's Product Owner work to help on those, and Software Architect to validate it."*** It repairs a contradiction the method had been carrying since the day it was written.

**User Researcher's standing posture is *findings + sources, never a recommendation*, and `register.md` states outright that *"User Researcher's ceiling is the register."*** But three of the six questions are **judgments** — is this health adequate for the risk, is this licence permissible for *this* case, does this serve the objective. **User Researcher cannot answer them without breaking its own discipline, and no chair had been authorised to.** The method had judgment fields with nobody allowed to judge.

| Chair | Owns | Boundary |
|---|---|---|
| **User Researcher** 🔍 | *gathers* — Posture, Grip, licence text, and the **evidence** behind Health (release cadence, contributor counts, who employs the maintainers), with sources and `Seen` dates | records facts and marks `UNVERIFIED`; **never ranks, never recommends** |
| **Product Owner** 🧭 | *weighs* — is the health adequate for the risk we are taking, is the licence permissible in this case, does the leap serve the actual objective or is it momentum | produces the recommendation the Composer decides on; does not gather its own facts |
| **Software Architect** 📐 | *validates* — was the method run rather than narrated: every field filled **or explicitly empty**, the lineage verdict argued, the cadence set, the decision recorded as an ADR | a gate on process, not on taste; it can send a run back, it cannot pick the tool |

**The Composer decides. Unchanged** — and now what reaches him is a gathered set of facts, one weighed recommendation, and a validated process, rather than a table someone assembled alone.

**Licence is a required field.** Free and open-source is the default. A paid candidate carries its efficiency-leap justification in the same cell, or it does not enter the register.

**Swept every 30 days**, or on `Tool Discovery: sweep`. Superseded candidates are dated and kept, never deleted — a *best at the time* register with no history cannot say *at the time*.

---

## Schema

```markdown
## Lever — [what becomes possible, as a verb phrase]
Leap: [one sentence.]
Lineage verdict: [true material / a picture of it] — [one clause of why]
Serves: [Chair] · [Chair]
Spans: **[Chair] ↔ [Chair]** — [what each side holds that must cross]. Multiplier: N [x] × M [y]. Spanning layer: [name + status, or **none**] — **won by [leap / arrival / unknown]**.

| Candidate | Mechanism | Posture | Why | Grip | Licence | The leap it offers | Source | Seen |
|---|---|---|---|---|---|---|---|---|
| [name] | skill/tool/MCP/sub-agent/plugin/web UI (URL) | implements \| extends \| replaces \| no standard | carries \| reference only \| absent | ref-addressable \| eyes-only \| mixed \| blocked \| n/a | free \| OSS \| paid — [justification] | [one line] | [url] | YYYY-MM-DD |
```

### `Why` — does the documentation carry the reason, or only the reference? (added 2026-08-08, ADR-268)

**The Composer's criterion, stated as a ranking rule:** *"Best documented API or MCP are in our criteria the one that carry the WHY."* And his proof, which is this session's own worked example: *"API it's only a part of documentation, and well documented API rarely carry the why itself. Else you do arrow in figma without thinking."*

**The Figma Plugin API documents `strokeCap: 'ARROW_LINES'` perfectly** — typed, complete, first-party — and an agent holding it hand-rolls an SVG anyway. **So "well documented" and "carries the why" are different properties, and only the second one changes what gets built.** Worse, a reference can point *at* the wrong answer while being entirely correct: `VectorPath` declares `data: string // SVG path data`, so the improvised path is a documented first-class input.

| Value | Meaning | Test |
|---|---|---|
| **carries** | states *when and why* to reach for a thing, and names the plausible wrong alternative — worked examples, anti-patterns, remediation guidance | can you find, in its own docs, a sentence of the form *"don't do X, do Y, because…"*? |
| **reference only** | complete and correct on *what exists* and *how to call it*, silent on *why* | the Figma Plugin API; the official Figma skills, which the Composer read as *"only … Endpoints on how act in figma"* |
| **absent** | neither reason nor reliable reference | |

**It is a cost prediction, which is what makes it a register field rather than an opinion.** A `reference only` tool is perfectly usable — but **the estate must supply every why itself**, one lever-index row per intent, each bought by getting it wrong once (`agents/tools/yang/README.md`). A `carries` tool imports its whys for free. That difference is measurable in Yang rows, not in taste.

**And it explains a verdict this register reached before it had the vocabulary.** The **paid** axe MCP cleared the licence bar on the grounds that it adds *"remediation guidance, not detection — a leap in fixing, not in finding."* **Remediation guidance is the why.** The paid tier was justified, in retrospect, precisely by this field — which is the strongest evidence the criterion is real rather than invented tonight.

**One boundary: a pipe inherits, it does not carry.** Context7 serves whatever a library ships, so its `Why` value belongs to the source, never to Context7 itself. Judging the pipe by its payload would score the same server differently on every query.

### `Posture` — does it implement the standard, or replace it? (added 2026-08-08, ADR-263)

**The Composer's rule, and the causal half is the part that predicts:** *"Open source tools are always more reliable because they don't pretend inventing the wheel."*

**Not reinventing the wheel is a lineage property, not a licence one** — and it is this register's ranking question said a second way. A tool that replaces the standard with its own reinterpretation is manipulating **a picture of** the material by construction. So `Posture` is the first filter, ahead of licence:

| Value | Meaning | Worked example from this register |
|---|---|---|
| **implements** | carries the standard faithfully | `axe-core` → ACT Rules; `Style Dictionary` → token transforms it does not define |
| **extends** | adds on top without displacing | **axe MCP** — *"the same rules … a leap in fixing, not in finding"* |
| **replaces** | substitutes its own model for the standard's | the risk case; a `replaces` candidate must justify itself against the standard it discards |
| **no standard** | nothing exists for it to relate to | a genuine first mover — **not a fault, but there is nothing independent to check it against**, which is the oracle rule at procurement level (`brain/brain_principles.md`) |

**Why the licence default survives but stops being the test.** The register's rule — *free and open source is the default; a paid candidate carries its efficiency-leap justification or it does not enter* — is unchanged, but its **reason** is now stated properly, and it is the Composer's third mechanism rather than the licence itself:

> **An open-source tool ships its own oracle.** The test suite, the issue history, the reproductions are public and participatory — *"OSS testing is a discipline"*, and the Composer has practised it directly. A proprietary tool asks you to trust its self-report; an OSS tool hands you the artifact that checks it. **That is `brain/brain_principles.md`'s oracle rule applied to procurement**, and it is a stronger predictor than the licence line it is usually mistaken for.

**And the licence answers a different question than this register had been asking of it.** The Composer, correcting it in one line: *"it's give you the right to use in right case."* **A licence is a permission field, not a quality field** — may we use this, here, in this case: internally, in a client deliverable, redistributed, under copyleft. That gate is real in an enterprise context and it is binary. It says nothing about whether the tool is any good, which is why the three questions below carry that load instead.

**Which is also why "always" is not carried into the rule.** Two paid candidates and their outcomes are already in this file and **neither was decided by the licence**: the axe MCP is paid, `extends`, and **cleared the bar**; Anima is paid and was **refused** for putting a wall in front of basic capability (ADR-262).

### `Health` — stability and community (added 2026-08-08, ADR-263)

**The Composer's selection criteria, in his words: *"by lever, stability, community supporting it."*** The first is the ranking question this register already asks. The other two are the answer to OSS's real failure mode — **abandonment, single-maintainer risk, no obligation to answer** — and his point is that this is a *criterion to check*, not a reason to distrust the licence.

| Sub-field | What it asks | Cheaply checkable from |
|---|---|---|
| **stability** | is the contract holding — release cadence, breaking-change history, maturity | releases page, changelog, semver discipline |
| **community** | is anyone behind it — contributor count, corporate backing, issue-response life | contributors graph, issue tracker, who employs the maintainers |

**Worked example already in this file:** *"Tokens Studio's team joined the project in Aug 2023, so the two are no longer competing stacks."* That is a **community** fact, and it is the single most load-bearing thing recorded about Style Dictionary — a merger of rivals is a stronger health signal than any release number.

**Inspectable and durable: yes, strongly. Supported: not guaranteed by a licence — which is what `Health` is for.**

**The whole model, so no field starts doing another's job:**

| Field | Question |
|---|---|
| Lineage verdict | is it worth holding — true material, or a picture of it |
| `Posture` | does it implement the standard, or replace it |
| `Health` | will it still be here — stability, community |
| `Grip` | what does it cost to hold — practised, or sight-read forever |
| `Licence` | **may we use it, in this case** |

### `Spanning layer … won by` — leap or arrival? (added 2026-08-08, ADR-263)

**The Composer:** *"Sometimes a tool wins only because is first, not by the leap it's doing."* The register ranks by the lineage question and models feature count as noise — **incumbency was a third force it did not model at all**, while already recording two instances of it as description:

> *"Spanning layer: **the accessibility tree**, de facto … nobody standardised it **as** a narrow waist; **it became one**."*
> *"**DTCG** — a Draft Community Group Report, not a Recommendation … the crossing exists, is typed and aliasable, and is **still provisional**."*

**This is not a fourth ranking axis. It is a flag, and its payoff is not what most would expect.**

A layer that won **by arrival** is not necessarily easy to displace — the accessibility tree is in every browser and every screen reader, and nothing is replacing it. **What the flag actually predicts is that its gaps are arbitrary.** A standard designed for a job has principled omissions; a standard that *became* the crossing has whatever gaps history left. So:

> **Never infer *"it cannot be done"* from *"the incumbent standard does not cover it."*** With `won by: arrival`, absence is historical, not principled.

**Both of this register's own arrival-winners demonstrate it.** The accessibility tree is empty inside a third-party iframe **by accident of how it grew, not by design** — and reading that emptiness as a capability limit cost the orchestra the plugin ecosystem for three weeks (ADR-259). ~~DTCG has no motion composite and~~ **[struck 2026-09-04: it has had one since 2022-02-03]** DTCG has no accessibility-intent type because of **what got typed first**, which is exactly where `Seams with no lever yet` is already pointing.

**Where Discovery hunts, stated as a rule:** `won by: leap` → watch, do not hunt; out-leaping a genuine leap is rare and expensive. **`won by: arrival` → hunt here** — the position may be immovable while the *gaps* are open, and a gap left by history is the cheapest thing this method can find.

### `Grip` — how the tool can be held (added 2026-08-08, ADR-262)

**Only meaningful for `web UI (URL)` candidates; `n/a` for everything else** — an MCP tool or a skill is called, not driven, so there is nothing to grip. Determined by **one `read_page`** before adopting anything, which makes it the cheapest field in the table.

| Value | Meaning | Cost curve |
|---|---|---|
| **ref-addressable** | the interface exposes named elements in the accessibility tree; act by `ref`, stable across layout | one read, then **free** on every repetition |
| **eyes-only** | nothing in the tree; the only reader is a screenshot | **a screenshot per repetition, forever** — never gets cheaper with familiarity |
| **mixed** | ref-addressable chrome around an opaque region — the common case | practise the frame, sight-read the middle |
| **blocked** | the site **refuses automated access by design** — bot-challenge wall, agent-hostile headers | **no grip at all**; not a candidate, whatever its leap |

**`blocked` is a hard stop, not a difficulty rating, and for two independent reasons.** The tool cannot be held — and **bypassing bot detection is prohibited to this orchestra outright**, so a challenge wall is not an obstacle to route around, it is the end of the evaluation. A `blocked` candidate is recorded with its evidence and dropped.

**Why it earns a column rather than a footnote.** It is the difference between a tool that can be **practised** and one that must be **sight-read** every time (`agents/tools/yang/README.md`): a `ref` is a fingering the hands can learn; a screenshot is looking at the strings before every note. Figma tested **mixed** the day this was added — its own chrome fully ref-addressable, a third-party plugin's iframe returning a single `Close` button.

**Sweep 1's sixteen candidates carry no `Grip` value, deliberately.** The field is defined as *determined by one `read_page`*, and filling it from recall for tools nobody has opened would be the exact defect this register's `UNVERIFIED` convention exists to prevent. Sweep 2 measures them; until then the column is genuinely empty rather than plausibly full.

**And it is a ranking input, not just a label.** Two candidates offering the same leap are not equivalent if one is eyes-only: that one carries a permanent per-use cost and a fragility the other does not. **It does not override the lineage question** — a ref-addressable surface manipulating *a picture of* the material still ranks below an eyes-only one manipulating the true material. Grip decides what a tool costs to hold; the lineage decides whether it is worth holding.

`Mechanism` is recorded for orientation only — Discovery judges the leap, not the interface. Values: skill, tool, MCP connector, sub-agent, plugin/marketplace, **web UI (URL)**.

**The sixth value was added 2026-08-08, on the Composer's finding, and the reason it is added *here* and not to the extension model matters.** His observation: *"a tool can be also an url to reach in browser pane, even with no API, MCP, or whatever."* Proven the same evening — a Community plugin the Figma MCP cannot invoke by name was launched, read and operated through the pane (ADR-259).

**`project/claude-extension-model.md` is not wrong and is left alone.** Its taxonomy classifies mechanisms by their relationship to the **context buffer** — a skill sits inside it, a tool reaches outside it, a sub-agent is a second one. On that axis a URL is not a peer of MCP: **the Browser pane is the tool, and a URL is what it points at.** But this register's `Mechanism` field answers a different question — *what kind of thing is this candidate* — and there "a web app with no agent-facing API" is a genuinely distinct answer. Same word, two taxonomies; the fix belongs to the one that was asking the other question.

**What it changes about a sweep, and it is not small.** The first five values all require *someone to have built something for agents*. The sixth requires navigating. So the candidate space is not the set of MCP servers and plugins — it is **every web tool with a usable interface**, no vendor cooperation needed. The lineage question ranks them unchanged: *does the surface manipulate the true material, or a picture of it?*

**And it puts a `Spanning layer: none` verdict under suspicion.** MCP is a narrow waist someone had to build and every vendor had to adopt; **the browser was already one** — one interface, every tool, thirty years, no adoption required. So *"nobody built the crossing"* is unsafe wherever a web UI already crosses the seam. **Re-check every `Spans:` line on sweep 2 against this.**

**First candidates under the sixth mechanism, named by the Composer 2026-08-08 — recorded so they survive the session, `UNVERIFIED` until sweep 2 fetches them.** None has been visited; each is a name he supplied, and this register's own rule is that a candidate carries a source and a `Seen` date before it enters a lever table.

| Named | Chair it would serve | Lever |
|---|---|---|
| **W3C web-based validators / inspecting tools** | QA Engineer — his words: *"QA Engineer have web based W3C inspecting tool"* | `audits-accessibility-mechanically` — an existing lever whose only candidates today are `axe-core` and a **paid** MCP. A free, first-party, URL-reachable checker changes that lever's licence picture entirely. **Not recalled from the web: the Composer used this workflow directly** — *"I started like that, notepad, wrote plain DOM with inline CSS by end, check html file on W3C website."* **Almost 25 years ago — c. 2001 — and by hand: no generator, no framework.** An authoring tool with no oracle, plus an independent checking surface: **Davis & Weyuker's pseudo-oracle, practised a quarter-century before this register named it.** Worth noting against `method/web-lineage.md`: that is era 1, the era the lineage cites for *tag soup arriving from tools that also produced "real" artifacts* — and he was hand-writing the true material and checking it against the standard, which is the era's counter-example rather than its symptom |
| **D3** | UX Designer · Design Engineer | no matching lever yet — *renders data as a manipulable graphic*. Relevant because this estate found **twelve encoding defects** that survived every text gate |
| **Markdown → CSV converter** | Content Designer · Software Architect | no matching lever yet — a format crossing currently done here by script |

**Three more named 2026-08-08, and these were the first run of the method's own gathering step — instruments for judging tools, which is the pseudo-oracle at procurement level: you read an independent source instead of the vendor's claim about itself.**

| Named | Answers | State |
|---|---|---|
| **Context7** | *"gives you up-to-date documentation"* (Composer) — current API docs, so **Posture** (does it implement the standard) and part of **stability** | **already held** — shared toolset, `agents/tools/context7.md`, first connected call 2026-08-08 |
| **alternativeto.net** | candidate **discovery** and the **Licence** field | **Verified 2026-08-08** by fetch: ~150,000 apps ranked by ~2,023,000 user opinions, crowd-sourced; **filterable by licence** with specific SPDX-style values (GPL-3.0, MIT) alongside Free/Freemium/Paid; **fully usable without an account**. Caveat inherent to the source: crowd ranking is a **popularity** signal, which is the incumbency-by-arrival bias this file already flags — read it for *discovery*, never for *ranking* |
| ~~**openbenchmarking.org**~~ | independent benchmark data → **Health** | **BANNED 2026-08-08, `Grip: blocked`.** `WebFetch` → **HTTP 403**; the Browser pane → a challenge interstitial (`"Un instant…"`) and **the pane session died with it**. The Composer's call: *"ban openbenchmarking.org, it breaks you, on purpose I think."* Two independent instruments, both refused, one destroyed. Do not re-test on a later sweep — bypassing bot detection is prohibited, so there is no version of this that ends differently |

**Replacements for the banned site — and they are a better class, which is why the ban cost nothing.** Verified 2026-08-08 by fetch, not recalled.

| Instrument | What it answers | Verified shape | Mechanism · Grip |
|---|---|---|---|
| **deps.dev** (Google Open Source Insights) | **Health** — dependency graph, licences, security advisories, project data | 8 methods (`GetPackage`, `GetVersion`, `GetRequirements`, `GetDependencies`, `GetProject`, `GetProjectPackageVersions`, `GetAdvisory`, `Query`) over **7 ecosystems** — Go, RubyGems, npm, Cargo, Maven, PyPI, NuGet. `GetProject` reaches GitHub/GitLab/Bitbucket. **Auth: not documented on the API page — unconfirmed rather than confirmed-absent.** [docs.deps.dev/api/v3](https://docs.deps.dev/api/v3/) | **tool (API) · `n/a`** |
| **OpenSSF Scorecard** | **Health**, security-weighted — *is anyone still tending this* | **18 automated checks**, each scored **0–10** with a risk level, aggregated; access by GitHub Action, **CLI**, or a **public dataset covering 1M+ projects**; no account to view; ships remediation prompts. **Measured 2026-09-04: two records returned for six repositories queried, and one of the two only under the project's former organisation name. Enrolment, not coverage — and a 404 can also mean enrolled-under-another-name. Query the current slug and the known former slug; one 404 is not an answer.** [scorecard.dev](https://scorecard.dev/) · [ossf/scorecard](https://github.com/ossf/scorecard) | **tool (CLI/dataset) · `n/a`** |
| **Libraries.io — SourceRank** | **Health**, popularity-weighted | a score whose *"main element … is the number of open source software projects that depend upon a package"*, max ≈30. [docs.libraries.io](https://docs.libraries.io/overview.html) | web UI (URL) · unmeasured |

**The rule this suggests, and it is the cheap lesson from the ban: for evidence-gathering, prefer an API to a site.** All three replacements are **called, not driven** — `Grip: n/a` — so they cannot present a challenge wall, cost no screenshots, and never get more expensive with repetition. **The instrument that broke the pane was the one that had to be *visited*.**

**Two coverage boundaries, stated because they are load-bearing rather than pedantic.**

**(a) `deps.dev` covers package ecosystems only — seven of them — and most of this register's candidates are not packages.** Style Dictionary (npm) is in scope; Figma Variables, Code Connect, the Figma agent, `alternativeto.net` and every `web UI (URL)` candidate are not. **So `Health` now has a real instrument for the library half of the field and none for the product half** — which is this file's own *"seams with no lever yet"* discipline turned on its own method, and it is recorded as a gap rather than papered over.

**(b) Scorecard measures *security posture*, and using it as a general health proxy is a scoped claim.** Several of its 18 checks are genuine maintenance signals (maintained, branch protection, CI, review), but a high score is not a promise that the project answers issues. Read it as *is this tended*, never as *is this good*.

**And SourceRank inherits `alternativeto.net`'s caveat exactly:** dependents-counted is a **popularity** measure, which is the incumbency-by-arrival bias this file already flags. Discovery signal, never a ranking.

**On the 403, because it is the rule catching itself within the hour.** A `WebFetch` 403 is a fact about **WebFetch**, not about the site — so it was checked with a second instrument before anything was written down, exactly as `brain/brain_principles.md` now requires. **The second instrument agreed.** That is the first time in this estate's record that the oracle rule was applied *before* a claim was made rather than after it was wrong.

**And the failure itself was diagnosed from outside, which is the same principle one level up.** The Agile Facilitator could not observe its own breakage; the Composer could, and named it. **An agent is not its own oracle either.**

**Two of the three have no lever, which is the method working rather than a gap in the table:** Discovery names the leap before the lever exists, and `Seams with no lever yet` is where that goes once a multiplier is established.

**One field this suggests and the register does not yet have:** a candidate's **accessibility-tree quality**, derivable from a single `read_page` before adopting anything. It predicts *how* the tool can be driven — **ref-addressable** (stable, name-based, cheap on repetition) versus **eyes-only** (works, fragile, costs a screenshot every time, and never gets cheaper with familiarity). Not added yet; it is a schema change and the Composer's call.

