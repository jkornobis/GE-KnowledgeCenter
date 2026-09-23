---
type: Method
title: "Which chairs already exist as a named industry agent, and which don't"
description: "Extends the Scrum Master confirmation (agent-kanban-git-board.md) across all twelve chairs: a per-chair search for a dedicated, market-named AI agent category doing that same job — seven confirmed as converged-on industry categories, two fragmented/partial, and Software Architect found as the symmetric reverse case: a chair GE names that the industry has not"
status: draft
serves: [Product Owner, Software Architect, Agile Auditor, the whole room]
generated: { by: agent:ge-knowledgecenter, at: 2026-09-23T00:00:00+02:00 }
sources:
  - resource: https://futureagi.com/blog/ai-agent-compliance-governance-2026
    title: "AI agent compliance and governance, 2026"
  - resource: https://uxpilot.ai/galileo-ai
    title: "Galileo AI (now Google Stitch)"
  - resource: https://github.com/Community-Access/accessibility-agents
    title: "Community-Access — accessibility-agents (Claude Code specialists, WCAG 2.2 AA)"
  - resource: https://www.qawolf.com/blog/the-12-best-ai-testing-tools-in-2026
    title: "QA Wolf — the 12 best AI testing tools in 2026"
  - resource: https://www.sanity.io/content-agent
    title: "Sanity — Content Agent"
  - resource: https://www.productcompass.pm/p/ai-product-manager-roadmap-2026
    title: "Product Compass — AI product manager roadmap 2026"
  - resource: https://maze.co/blog/ai-tools-user-research/
    title: "Maze — AI tools for user research"
  - resource: https://www.digitalapplied.com/blog/agent-architecture-patterns-taxonomy-2026
    title: "Digital Applied — agent architecture patterns taxonomy 2026"
  - resource: https://incident.io/blog/ai-sre-agent-definition
    title: "incident.io — defining the AI SRE agent"
---

# Which chairs already exist as a named industry agent, and which don't

Researched 2026-09-23, extending `agent-kanban-git-board.md`'s Scrum Master finding to the other
eleven chairs. That earlier research found one confirmation almost by accident, while looking at
kanban boards: the industry already ships a dedicated, packaged "Scrum Master agent" persona kept
separate from the agents doing the work — independent validation that this skill's Agile
Facilitator / QA Engineer split is a converged-on pattern, not an invention. **Asked directly this
time: does every chair have a market twin, or only that one?** None of the sources below name an
employer, client, or project; public product names and documentation throughout.

## The table

| Chair | Verdict | Example(s) | How it compares to the chair |
|---|---|---|---|
| Agile Auditor | name-match, different object | AI governance/compliance platforms (Fiddler AI, Arthur AI category) | These audit *AI systems* for regulatory compliance — a different audit object from a team's own process/retrospective quality. No true twin. |
| UX Designer | yes | Galileo AI (folded into Google Stitch), Uizard Autodesigner | Same intent→UI generation job, but skewed toward production output rather than critique/judgment — narrower than the chair. |
| Design Engineer | yes | v0, Locofy, Builder.io, Figma Dev Mode | Same design↔code bridging job; already established by this library's own Figma research. |
| Accessibility Specialist | yes | a11yagent.ai, Community-Access accessibility-agents (11 Claude Code specialists, WCAG 2.2 AA) | Close match — deterministic scan plus AI-suggested fixes, same scope as the chair. |
| Software Engineer | yes, saturated | Devin, Cursor, GitHub Copilot, Claude Code | The obvious one; not re-researched here. |
| QA Engineer | yes, mature | QA Wolf (internally split into Outliner / Code Writer / Verifier / Maintenance sub-agents), Testim | Same job — and QA Wolf's own internal role split mirrors this skill's chair logic. |
| Content Designer | yes, emerging | Sanity Content Agent, GitBook Agent | Close overlap on docs/content maintenance, skewed toward technical-docs writing over product-copy/tone work. |
| Product Owner | fragmented | Jira Product Discovery AI, Notion AI, Granola | No single "PM agent" category — the job is bolted onto existing PM tools as features, not shipped as one dedicated persona. |
| User Researcher | yes, and further split | Maze, UserTesting, Synthetic Users | Same job — industry has gone further and split real-session analysis from synthetic/simulated-user research as separate products. |
| Software Architect | **no** | none found — only an internal "planner"/"orchestrator" role inside frameworks (LangGraph, CrewAI) | No market-facing product names this. It is plumbing inside an orchestration framework, never a standalone persona a user chooses. |
| Reliability Engineer | yes, mature | Cleric.ai, PagerDuty SRE Agent, Resolve AI, incident.io AI | Strong match — spans the same investigate-only → autonomous-remediate spectrum as the chair. |

*(Agile Facilitator is not re-listed: `agent-kanban-git-board.md` already confirmed it via the
Scrum Master pattern.)*

## The headline finding — a reverse of the Scrum Master case

The Scrum Master confirmation showed the industry independently arriving at a split GE already
holds. **Software Architect is the same shape of finding, pointed the other way:** GE names a
judgment-bearing chair for it, and the market has not. Multi-agent orchestration frameworks all
have *something* that plans and sequences work — but it stays an internal implementation detail,
never a product a person picks the way they'd pick a coding agent or an SRE agent. That doesn't
make the chair wrong; it means this is a case where GE's role split is ahead of, not corroborated
by, what the industry has bothered to name.

**Two partial cases sit between the two extremes.** Product Owner is real, active work, just not
consolidated — every PM tool bolts on an AI feature rather than one vendor shipping a dedicated "PM
agent." Agile Auditor has a booming *named* market ("AI governance agent," "compliance agent") that
looks like a hit — until the audit object turns out to be the AI system itself, not a team's process
health, which is what this chair actually does. A name match is not the same claim as a job match.

## Where this sits in the corpus

Sibling to `agent-kanban-git-board.md` (the single-chair version of this same question) and
`agent-surface-invariants.md` (axis A — the authority/worker split this whole line of research keeps
finding corroborated). Read `chairs/the-twelve-chairs.md` for what each chair actually does before
trusting a one-line "how it compares" cell above.

## What this page does not do

**Does not argue a chair should be cut, merged, or renamed** because the industry hasn't named its
twin — Software Architect and Agile Auditor are both load-bearing inside this skill's own design
regardless of whether a vendor sells the equivalent. It states what exists outside this library, not
what should change inside it. **Single-pass research, one subagent, sourced but not independently
re-derived** — treat the table as reported, the way every fast-moving-market finding in this corpus
is marked.
