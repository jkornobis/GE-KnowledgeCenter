---
type: Protocol
title: "Tool Discovery — finding the leap before its name is known"
description: "How the orchestra finds what it cannot reach: the six questions that judge a candidate — lineage, posture, health, grip, why, licence — who gathers, who weighs, who validates, and why the protocol never installs anything"
status: draft
generated: { by: human:jkornobis, at: 2026-08-28T16:46:45+02:00 }
---

# Tool Discovery — finding the leap before its name is known

Tool Audit answers *what can this surface do* — but only once you already know the surface's name. Every page in `agents/tools/` exists because the Composer had already heard of the tool. Tool Discovery answers the question before that one: **what leap exists that this orchestra is not reaching?**

The Composer's framing sets the posture, and it is why this method is agnostic by construction: *he does not always want a tool — he wants a task done the best way it can be done.* Free and open-source is the default; a paid candidate needs a stated efficiency leap to justify itself. **The system carries the deep meaning of using a tool; the Composer carries the intent.**

## Trigger

**Gap-driven (default).** A musician hits a capability wall — the chair's requirement cannot be met with anything in the roster. The Agile Facilitator names the gap out loud and offers a run. Like Tool Audit, this is visible work, never a silent background assumption.

**On demand (fallback).** `Tool Discovery: [gap or domain]`.

**Sweep.** `Tool Discovery: sweep` — refreshes the register wholesale rather than answering one gap. **Typeable by design**: the sweep must never depend on a scheduler the Composer does not control.

## Who runs it

**Three chairs, and the split exists because the method was contradicting itself** (ADR-263). User Researcher's posture is *findings and sources, never a recommendation* — yet three of the six questions below are **judgments**. The method had judgment fields and no chair authorised to judge them.

| Chair | Owns | Boundary |
|---|---|---|
| **User Researcher** 🔍 | *gathers* — leap, mechanism, posture, grip, licence text, and the **evidence** behind health, each with a source seen this session or marked `UNVERIFIED` | records facts; **never ranks, never recommends.** Discovery that recommends is a Product Owner call wearing a User Researcher's clothes |
| **Product Owner** 🧭 | *weighs* — is this health adequate for the risk, is this licence permissible in this case, does the leap serve the objective or the session's momentum | produces the one recommendation; does not gather its own facts |
| **Software Architect** 📐 | *validates* — was the method run rather than narrated: every field filled **or explicitly empty**, the lineage verdict argued, the cadence set, the decision recorded — and **places** the result in the right artifact | a gate on process, not on taste; can send a run back, cannot pick the tool |

**The Composer decides.** What reaches him is gathered facts, one weighed recommendation, and a validated process.

## Why this method exists at all (ADR-266)

**The Composer's reason, in his words:** *"You never properly research tools — it's why I give you tools discovery general, then specific, then methodology to choose."*

Synthesising from what is already known costs zero lookups at near-certain success; searching for the right instrument costs an uncertain search. **The cheap certain path wins, and reasoning does not rescue it** — reasoning is what makes the improvised answer feel sufficient. At task level that hand-rolls a shape; at estate level it **hand-rolls a toolset**. The three layers are countermeasures, each blocking one substitution: **Discovery** blocks *use what is in front of you*; **Tool Audit** blocks *recall what it does*; **the six questions** block *take the first workable option*.

## Scope — all six mechanisms

Skill, tool, MCP connector, sub-agent, plugin/marketplace, and **web UI (URL)**. A lever arrives in whatever shape it arrives in, and the shape is not the point.

**The sixth was added 2026-08-08 (ADR-260) and it changes the size of the search.** The Composer: *"a tool can be also an url to reach in browser pane, even with no API, MCP, or whatever"* — proven the same day, when a Community plugin the Figma MCP cannot invoke by name was launched, read and operated through the Browser pane. **The first five all require someone to have built something for agents; the sixth requires navigating.** So the candidate space is not the set of MCP servers and plugins — it is **every web tool with a usable interface**, no vendor cooperation needed.

*(`project/claude-extension-model.md` still lists five and is not wrong: it classifies by relationship to the context buffer, where the pane is the tool and a URL is its argument. This method asks a different question — what kind of thing is this candidate.)*

**Discovery records the leap, never the interface.** Knowing a tool's leap matters more for naming a gap you want to bridge than knowing its whole API/MCP structure from day one. That structure is Tool Audit's job, later, and only for the candidate actually adopted. This is the single rule that keeps six mechanisms in scope without the method drowning.

## The six questions — they are the method, not columns on it (ADR-263, ADR-268)

**The Composer: *"all this metrics are the method, and it's more larger than OSS."*** They arrived through a conversation about open source and are **not an open-source rubric** — they evaluate proprietary, first-party, in-harness and web candidates identically.

| Question | Field | Answers |
|---|---|---|
| Is it worth holding? | **Lineage verdict** | true material, or a picture of it (`lineage.md`) — **the rank** |
| Does it implement the standard, or replace it? | **Posture** | implements · extends · replaces · no standard |
| Will it still be here? | **Health** | stability · community |
| What does it cost to hold? | **Grip** | ref-addressable · eyes-only · mixed · **blocked** · n/a |
| **Does its documentation carry the *why*?** | **Why** | carries · reference only · absent |
| **May we use it, in this case?** | **Licence** | permission, not quality |

Plus **Leap** (one sentence, no feature list) and **Source** (seen this session, or `UNVERIFIED`).

**The lineage stays primary** — it is the only question asking whether the tool is worth having at all, and **feature count remains noise**. The other five decide what a chosen tool costs, risks, teaches and permits.

**Posture is a lineage property, not a licence one.** A tool that replaces the standard with its own reinterpretation is manipulating *a picture of* the material by construction. `no standard` is not a fault but a warning: a genuine first mover has **nothing independent to check it against**. Worked outcomes already in the register — the **paid** axe MCP `extends` and cleared the bar; the **paid** Anima was refused for a wall in front of basic capability. **Neither was decided by the licence.**

**Licence is permission, not quality** — *"it's give you the right to use in right case"*: internally, in a client deliverable, redistributed, under copyleft. Free and open source stays the **default**, and the reason is now stated properly: **an open-source tool ships its own oracle** — public test suite, issue history, reproductions. A proprietary tool asks you to trust its self-report. That is the oracle rule (`brain_principles.md`) at procurement level.

**Health answers OSS's real failure mode** — abandonment, single maintainer, no obligation to answer — as a *checked criterion*, not a reason to distrust the licence: **stability** (release cadence, breaking-change history) and **community** (contributors, corporate backing, issue-response life).

**Grip is only meaningful for `web UI (URL)` candidates**; anything *called* rather than *driven* is `n/a`. Determined by **one `read_page`**. `blocked` — the site refuses automated access by design — is a **hard stop**, because there is no grip to be had and bypassing bot detection is prohibited outright. **Rule that falls out: for evidence-gathering, prefer an API to a site.**

**`Why` — the criterion the Composer added last (ADR-268):** *"Best documented API or MCP are in our criteria the one that carry the WHY."* The Figma Plugin API documents `strokeCap: 'ARROW_LINES'` perfectly and an agent holding it still hand-rolls an SVG — so **"well documented" and "carries the why" are different properties, and only the second changes what gets built.** `carries` states when and why to reach for a thing and names the plausible wrong alternative; `reference only` is complete on *what* and silent on *why*. **It is a cost prediction:** a `reference only` tool means the estate supplies every why itself, one lever-index row per intent, each bought by getting it wrong once. It also explains a verdict reached before the vocabulary existed — the paid axe MCP cleared the bar for *"remediation guidance, not detection"*, and **remediation guidance is the why**. A pipe like Context7 inherits its payload's value and carries none of its own.

**Instruments for the questions** — *"benchmark is the why this tool, context7 is where and how"* (Composer): health and comparison services (`deps.dev`, OpenSSF Scorecard, `alternativeto.net`) answer **why this tool** and feed the register; **Context7** answers **where and how** and feeds `agents/tools/yang/<musician>.md`. Neither can do the other's job. Popularity-ranked sources (`alternativeto.net`, SourceRank) serve **discovery**, never ranking — a crowd vote is the incumbency bias below, not the lineage question.

### The lever's own two chair fields (ADR-220)

A lever entry carries **`Serves:`** — the chairs that use it, a routing note — and **`Spans:`** — the two chairs whose **seam** it bridges, the **multiplier** on that seam, and whether a **spanning layer** exists.

`Spans:` is the predictive field, and it comes from `project/chair-gap-leap-thesis.md`: a gap crossed by a single pair is absorbed by a person, while **a gap with a multiplier forces a format**, whose standard solution is a *narrow waist* converting O(M×N) integrations into O(M+N). The thesis is split because the halves differ in strength — **the multiplier predicts that a seam gets a format and where; the chair gap predicts what that format must carry.**

Two consequences for a sweep:

- **Record the seam even when the lever is unremarkable.** `Spanning layer: none` on a real multiplier is the finding, not the lever.
- **Record the seam even when there is no lever at all.** `register.md`'s *"Seams with no lever yet"* section is the register's only predictive surface — everything else records what was found. An entry states one of the Composer's three states (**exists** · **conceptualized** · **unconceptualized**) with evidence, carries a **named multiplier**, and is re-checked on the same 30-day clock. Entry bar: a pair of chairs that merely talk is not a seam; it takes N×M to force a format. No entry has ever held `unconceptualized` — the state cannot be cited, and finding one is the method's hardest test.
- **Declare the altitude.** Every `Spans:` line in this register is read at the scale of the twelve chairs. Zoom out far enough and every gap is a chair gap, which is how a thesis stops being falsifiable — scale is an input, not an output.
- **Record how the spanning layer won: `leap` or `arrival`** (ADR-263). The Composer: *"sometimes a tool wins only because is first, not by the leap it's doing."* **This is a flag, not a fourth ranking axis, and its payoff is not displacement.** A layer that won by arriving may be immovable — the accessibility tree is in every browser — but **its gaps are arbitrary**: a standard designed for a job has principled omissions, one that *became* the crossing has whatever history left. **So never infer *"it cannot be done"* from *"the incumbent standard does not cover it."*** Both of the register's arrival-winners prove it — the accessibility tree is empty inside a third-party iframe by accident of how it grew, and reading that emptiness as a capability limit cost three weeks of the plugin ecosystem (ADR-259); DTCG lacks a motion composite because of what got typed first. **Where Discovery hunts: `won by leap` → watch; `won by arrival` → hunt, because a gap left by history is the cheapest thing this method can find.**

## Two artifacts, and the one-way citation between them

**`agents/tools/register.md` — the register.** Products grouped under levers. **It never names a musician.** That is the agnostic half.

**`agents/tools/roster.md` — the occupancy roster.** Twelve rows, the ADR-200 substitution log made into a table. Each row reads Yin then Yang, left to right:

- **Levers the chair requires** — the seat's canon. Durable; it outlives every occupant. Cites lever names from the register.
- **Products the occupant carries** — the toolset. Transient by nature; moving is what it does.

**The invariant is one-way: roster → register.** The roster cites; the register never cites back.

A substitution therefore touches only the column that is supposed to move. The chair's required levers are unchanged by definition — that is what makes them the chair's. The products column changes, and the check fires **only** when the new occupant carries a product the register has never seen. That firing is the check working: it names *an unverified tool entered the orchestra*, at the moment it happened, and the fix is this method's own chain. The tripwire is the point, not a fragility.

Superseded products are dated and kept, never deleted — a *best at the time* register with no history cannot say *at the time*.

The genuinely expensive case is different: **renaming a lever** invalidates every roster row citing it at once. Rare — lever names are the durable half — and mechanically findable by the same grep.

**Enforced, not remembered:** `scripts/check_roster_register_sync.mjs` runs the four checks — twelve chairs exactly (invariant 7), every required lever resolves to a heading, every carried product resolves to a candidate, and the register swept inside 30 days.

## The ceiling

Discovery **never installs and never authorises**. Authorisation is always the Composer's action in their own interface. The method's ceiling is a named candidate with a source and a lineage verdict.

## Handoff to Tool Audit

`gap named` → **Discovery** (lever-level, wide, sourced) → Composer picks → **Tool Audit** (deep, verified, live) → **placement**:

- into the **occupant's products** — the default for anything newly adopted; or
- promoted to a **chair requirement** — earned only when the chair would be *broken* without that lever, whoever sits in it.

A tool does not have to implement code or UI design to become a chair's basic kit. The test is whether the seat's work is possible without the lever, not what domain the lever comes from.

## Refresh cadence

**30 days for the register.** AI surfaces move on a shorter half-life than the products Tool Audit documents — the Figma AI agent and its announced features are the case that set this number. Distinct from `check_tool_audit_freshness.mjs`'s **90-day** page clock: different half-life, different question. A stale register is re-swept, never re-dated from memory.

**A runner already exists**, and this method inherits it rather than asking for a new one: ADR-152's `userresearcher-cadence-tool-audit-sota-watch` (monthly, `0 9 1 * *`, first fire 2026-08-01) already carries note 2's freshness check and note 13's survey, under the same owner. The Composer's requirement is that a sweep never *waits* on a scheduler — not that none exists. Typeable and scheduled are not in tension.

## Relationship to roadmap note 13

Note 13, *State of the art watch*, named this intent first — *"to surface what the orchestra doesn't use yet but should"* — and shipped as ADR-152 with a survey run and a runner, but no defined structure. Tool Discovery is that structure, and the Composer settled the relationship directly:

> *A named state of the art never defined properly is only a name. A tool discovery method based on logic already established with the Tool Audit structure is the real answer. State of the art was only the intent, declared before the overshoot bug came.*

So: **one User Researcher cadence, one runner, one method.** Note 13 is the intent; Tool Discovery is how it is played. Anything that would create a second competing survey belongs in this method or nowhere.

*How this was found is on the record and is not flattering: the method was built and committed (`c609212`) without opening `ROADMAP.md`, so the overlap surfaced only when the Composer asked whether tool-picking was arriving too early — occurrence 6 of "acts on the first actionable item found" (`brain/patterns.md`). The pointer to note 13 was sitting inside `tool_audit.md`, which was read. **A pointer that names another document is proof that document was not read.***

## Templates

`agents/tools/register.md`:

```markdown
## Lever — [what becomes possible, as a verb phrase]
Leap: [one sentence.]
Lineage verdict: [true material / a picture of it] — [one clause of why]
Serves: [Chair] · [Chair]
Spans: **[Chair] ↔ [Chair]** — [what each side holds that must cross]. Multiplier: N [x] × M [y]. Spanning layer: [name + status, or **none**] — **won by [leap / arrival / unknown]**.

| Candidate | Mechanism | Posture | Grip | Licence | The leap it offers | Source | Seen |
|---|---|---|---|---|---|---|---|
| [name] | skill/tool/MCP/sub-agent/plugin/web UI (URL) | implements \| extends \| replaces \| no standard | ref-addressable \| eyes-only \| mixed \| blocked \| n/a | free \| OSS \| paid — [justification] | [one line] | [url] | YYYY-MM-DD |
```

`agents/tools/roster.md`:

```markdown
| Chair | Occupant | Levers the chair requires (Yin) | Products the occupant carries (Yang) | Changed |
|---|---|---|---|---|
| [Chair] | [occupant or `founding`] | [lever-name] · [lever-name] | [product] | YYYY-MM-DD |
```
