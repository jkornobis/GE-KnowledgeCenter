---
type: Protocol
title: "Tool Audit — verified capability discovery for a new surface"
description: "The one-time, file-backed setup step for deploying onto a new tool: critical facts verified this session rather than recalled, recommended skills proposed rather than applied, and a per-page re-audit clock that a default must admit is a default"
status: draft
generated: { by: human:jkornobis, at: 2026-08-28T16:46:45+02:00 }
---

# Tool Audit — verified capability discovery for a new surface

Solves a real cost the Composer hit directly: deploying the orchestra onto a new tool (Figma) meant manually teaching each musician its capabilities one at a time, mid-session. Tool Audit turns that into a one-time, file-backed setup step per tool.

## Trigger
`Tool Audit: [tool name]` — explicit invocation. Also self-suggested by the Agile Facilitator the first time a musician's capability guard hits a tool/MCP with no existing page under `agents/tools/`. Never runs silently in the background — a Tool Audit is visible work, not an assumption.

## Who runs it
**User Researcher.** This is pre-commitment research on a deployment surface, not a domain opinion — same posture as every User Researcher output: findings + sources, never a recommendation. Same capability guard as User Researcher's other work: a claim about what a tool *can do* must be verified this session (introspect the actual connected MCP schema, fetch current docs) — never recalled from training memory alone. An unverified claim gets marked `UNVERIFIED`, the same discipline User Researcher already holds for links.

## Two tiers

**Critical (default, auto-integrated — shown, not asked)**
Facts every relevant musician needs to function correctly with this tool this session: connection state (native ability vs. MCP-mediated), auth/seat requirements, hard boundaries (what's read-only vs. what can write, deploy authority if any), known failure modes. This tier is factual and verified, not a taste call — it gets written to the tool's page and surfaced to the Composer, but doesn't wait on their approval to take effect, the same way a capability guard isn't optional once true.

**Recommended (optional — proposed, not applied)**
Adjacent skills or approaches User Researcher notices during the audit that would help a musician work better with this tool, but aren't required for correct operation. These are presented to the Composer as options for their tool-specific skill matrix — accepted, deferred, or declined, never auto-applied (naming and scope of what a musician "knows" about a tool is the Composer's call, same as any subjective addition to the system).

## Output — one page per tool
`agents/tools/<tool-slug>.md` — **facts about the surface**, tagged by musician only where a fact is genuinely specific to one chair's *capability*. Most tags are `Any musician`, and that is correct: they mark orchestra-wide facts.

**Amended 2026-08-08, because the original instruction now points at the wrong file.** This read *"sectioned by musician — only musicians with something tool-specific to say gets a section"*, written before `agents/tools/yang/<musician>.md` existed. **Per-musician know-how — how this occupant acts on a lever with this tool — belongs in the Yang file, not here.** Following the old wording would copy Yang into the tool page and manufacture the same one-law-four-homes drift ADR-261 was written to remove. The split is ADR-265's, one level down: **the tool page records what the surface can do; the Yang file records how to play it.** A page with no musician tags is therefore not automatically a defect — check whether the know-how already lives in Yang before adding any. The page is a **living reference**: the Composer extends it over time as the tool evolves or new needs surface, the same way `agent_softwareengineer_project.md` grows with a project rather than being rewritten from scratch. A relevant musician's chair spec links to the tool's page under "what to read first" once it exists — the same convention already used for project-context files.

## Onboarding integration
`onboarding.md`'s premiere interview stays about the Composer, not the tools. But once the orchestra is about to be deployed on a tool with no existing page, offer a Tool Audit before diving into use — a short, one-time setup step per tool, not repeated per session once the page exists.

## Refresh cadence (roadmap note 2)
A tool page is a snapshot of verified facts, and tools ship new versions — MCP schemas, auth, and boundaries drift. So each page carries **two** lines: `Audited YYYY-MM-DD`, and **`Re-audit: N days — <basis>`**, both read by `scripts/check_tool_audit_freshness.mjs`.

**The interval is per page, and its authority is the chair's own tool page** (ADR-267, the Composer: *"cadence per page"*, then *"cadence per chair tool page is the key"*). A product's clock is decided in `agents/tools/yang/<musician>.md`, where the musician reads it before playing; the tool page **cites** that decision rather than holding a rival number. ADR-256 sets N: the observed interval at which the product's releases invalidated what we wrote — **absent an observed interval it is 90 days and the line must say `default, not measured`**, because a default that does not admit it is a default becomes a measurement by repetition. **The line is required**; a missing one fails the check.

**Why it stopped being 90 for everything:** a file-type clock called `figma.md` *fresh* at 35 days while `register.md` recorded **four Config 2026 capabilities landing inside that same window** — the first run of the per-page clock marked it stale, which the old one never could. A scheduled runner **does** exist since ADR-152 — `userresearcher-cadence-tool-audit-sota-watch`, monthly (`0 9 1 * *`, first fire 2026-08-01) — and it runs this check in the same pass as note 13's state-of-the-art watch (same owner, User Researcher). It is also typeable on demand. *(Corrected 2026-08-05: this line read "the orchestra has no scheduled runner", true when ADR-124 wrote it and false since 2026-07-17.)* A flagged page gets a **re-audit**: User Researcher re-verifies the Critical facts live (introspect the current MCP schema, re-fetch docs) — never re-dated from memory — corrects what changed, and updates the `Audited` date; Recommended items are re-proposed only if newly relevant. Same discipline as the first audit, just triggered by the clock instead of a first deployment.

## Template

```markdown
# Tool: [Name]

Audited [date] by User Researcher. [MCP-mediated / native]. [Connection state / auth notes.]

## Critical (verified this session)
- [Musician] — [fact, with how it was verified: introspected schema / fetched doc URL]

## Recommended (Composer to accept/decline)
- [Musician] — [adjacent skill or approach User Researcher noticed] — status: proposed
```
