---
type: Chair Reference
title: "Community and first-party skills as reference candidates, per chair — unranked, none tried"
description: "For each of the twelve chairs, the skills the first-party repository, a community curated list and third-party directories name for its field, with every address either verified to resolve on 2026-11-20 or marked as a lead that was not opened; the eleven first rows and the eight leads opened and read that day were all tiered by the Composer on 2026-11-20, and no skill was installed or run"
status: draft
card: none
serves_all: true
generated: { by: agent:ge-knowledgecenter, at: 2026-11-20T17:00:00+01:00 }
sources:
  - resource: https://github.com/anthropics/skills
    title: "anthropics/skills — first-party example skills; resolves 2026-11-20"
  - resource: https://github.com/travisvn/awesome-claude-skills
    title: "awesome-claude-skills — a community list that does not vet its entries; resolves 2026-11-20"
  - resource: https://github.com/obra/superpowers
    title: "obra/superpowers — a collection of Claude Code skills; resolves 2026-11-20"
  - resource: https://github.com/trailofbits/skills
    title: "Trail of Bits skills — security-review skills; resolves 2026-11-20"
  - resource: https://github.com/anthropics/knowledge-work-plugins
    title: "anthropics/knowledge-work-plugins — the design plugin's accessibility-review skill, read 2026-11-20"
  - resource: https://github.com/alirezarezvani/claude-skills
    title: "alirezarezvani/claude-skills — a11y-audit, read 2026-11-20; scripts not read"
  - resource: https://github.com/AccessLint/skills
    title: "AccessLint skills — README read 2026-11-20; skill files not read"
  - resource: https://github.com/skillrecordings/adr-skill
    title: "skillrecordings/adr-skill — read 2026-11-20; scripts not read"
  - resource: https://github.com/wshobson/agents
    title: "wshobson/agents — the ADR and postmortem skills, read 2026-11-20"
  - resource: https://github.com/addyosmani/agent-skills
    title: "addyosmani/agent-skills — documentation-and-adrs, read 2026-11-20"
  - resource: https://github.com/mohitagw15856/pm-claude-skills
    title: "mohitagw15856/pm-claude-skills — user-interview-synthesis, read 2026-11-20"
---

# Skills as reference candidates, per chair

Assembled 2026-11-20 for the Composer to tier, in the shape of `chairs/references-candidates.md`, where an
instance may not assign a tier. **The eleven rows below that resolve were tiered by the Composer the same
day, one row at a time by his own answers; an instance only recorded them.** The tiers are Critical,
Important and Emerging, in the sense the chairs' reference files use them (read from those files, not
stated anywhere): Critical, a chair must know it before acting; Important, established practice worth
carrying; Emerging, newer practice to watch. **The leads were opened later the same day and tiered the same way (below).** *Resolves* means the address answered when requested on 2026-11-20 and
nothing more. **No skill was installed, read in full or run, so each row is a candidate at the level
documented, never an endorsement.** Skills can run code; Anthropic's own guidance is to install only
from trusted sources and to audit a skill's files first (`method/skill-authoring-lessons.md`).

## Candidates that resolve

| Chair | Candidate | What it is said to do | Address | Tier |
|---|---|---|---|---|
| UX Designer | `frontend-design` | Steers Claude away from generic aesthetics toward deliberate design choices | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/frontend-design) | Critical |
| Design Engineer | `web-artifacts-builder` | Builds HTML artifacts with React, Tailwind CSS and shadcn/ui | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/web-artifacts-builder) | Emerging |
| QA Engineer | `webapp-testing` | Tests local web applications with Playwright, for UI verification and debugging | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/webapp-testing) | Critical |
| QA Engineer | `playwright-skill` | General browser automation with Playwright | [lackeyjb](https://github.com/lackeyjb/playwright-skill) | Critical |
| Software Engineer | `superpowers` | Core skills for test-driven development, debugging and collaboration, with planning commands | [obra](https://github.com/obra/superpowers) | Important |
| Software Engineer | Trail of Bits security skills | Static analysis and code auditing | [trailofbits](https://github.com/trailofbits/skills) | Important |
| Software Architect | `mcp-builder` | A guide for building servers that connect external APIs; only loosely architecture | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/mcp-builder) | Important |
| Content Designer | `internal-comms` | Status reports, newsletters and FAQs | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/internal-comms) | Emerging |
| Content Designer | `brand-guidelines` | Applies a brand's colours and typography to artifacts | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/brand-guidelines) | Critical |
| Agile Auditor, Agile Facilitator | `skill-creator` | Guides the building of a new skill by interview | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/skill-creator) | Important |
| Product Owner, Software Architect | `get-shit-done` | Context engineering and spec-driven development | [gsd-build](https://github.com/gsd-build/get-shit-done) | Critical |

## Fields the community list does not cover: the leads, opened and tiered

The curated list read has **no entry** for accessibility, user research, architecture decisions,
reliability or git workflow. Third-party directories named some, and **on 2026-11-20 each lead was opened
and its `SKILL.md` read through a fetch agent**, with a light audit in the way Anthropic recommends: what
the skill bundles, and whether it tells the agent to contact an address, read credentials or send data.
**Scripts and referenced folders were mostly not opened, so a clean audit line means only that nothing was
seen in the file read.** Nothing was installed or run. The tiers are the Composer's, given the same day.

| Chair | Candidate | What it does, as read | Audit notes | Tier |
|---|---|---|---|---|
| Accessibility Specialist | [`accessibility-review`](https://github.com/anthropics/knowledge-work-plugins/tree/main/design/skills/accessibility-review), first-party | A WCAG 2.1 AA audit of a design or page with a fixed report; 128 lines; Apache-2.0 | One file, no scripts. Acts through connected tools (a design tool, ticket creation) when they exist | Critical |
| Accessibility Specialist | [`a11y-audit`](https://github.com/alirezarezvani/claude-skills/blob/main/engineering-team/a11y-audit/skills/a11y-audit/SKILL.md), community | Scan, fix and verify over a frontend, WCAG 2.2 A and AA; 211 lines; MIT | **Bundles Python scripts, not read**; its fix option edits project source files | Critical |
| Accessibility Specialist | [AccessLint skills](https://github.com/AccessLint/skills), community | Five skills, including a WCAG-EM site audit; MIT | **Runs unpinned npm packages, can launch Chrome and attach to a signed-in session, and has an optional hosted service that stores findings.** The skill files were not read | Important |
| Software Architect | [`adr-skill`](https://github.com/skillrecordings/adr-skill/blob/main/skills/adr-skill/SKILL.md), community | MADR-style records, four phases, a rule to stop and propose a record before a new dependency or pattern; 311 lines | Three Node scripts, not read; **no license visible**; installs through npm | Critical |
| Software Architect | [`architecture-decision-records`](https://github.com/wshobson/agents/blob/main/plugins/documentation-generation/skills/architecture-decision-records/SKILL.md), community | Patterns, a status lifecycle, a review checklist; MIT | Reference files only; no scripts seen | Important |
| Software Architect | [`documentation-and-adrs`](https://github.com/addyosmani/agent-skills/blob/main/skills/documentation-and-adrs/SKILL.md), community | A record template, "never delete, supersede", and a git-history check for documents that drifted from their code; 320 lines; MIT | One file; a local `git log` snippet only | Important |
| Reliability Engineer | [`postmortem-writing`](https://github.com/wshobson/agents/blob/main/plugins/incident-response/skills/postmortem-writing/SKILL.md), community | Blameless postmortems with a timeline, 5 Whys and templates; an incident review in substance, though it never says SRE; MIT | Reference files only; no scripts seen | Important |
| User Researcher | [`user-interview-synthesis`](https://github.com/mohitagw15856/pm-claude-skills/blob/main/skills/user-interview-synthesis/SKILL.md), community | Themes from interview transcripts, with quotes and a scoring rubric; 86 lines; MIT | No code in the file. **The lead, `user-research-synthesis`, could not be confirmed to exist**; this is its closest sibling | Emerging |

**Two of these bear on this library's own plans without deciding them.** The record skill that says
*never delete, supersede* and checks a document against its code's git history is the practice the
append-only log and the freshness plan on `GE-Workshop#330` already follow. The two rows that run code, the
AccessLint skills and the Python-backed `a11y-audit`, are candidates to track, not to install.

**Skills already available in the Composer's own Claude environment**, named in its skill list and not
read: design critique, accessibility review, design handoff, design-system audit, UX copy, user research
and research synthesis, from the design plugin. They match the UX Designer, Accessibility Specialist,
Design Engineer, Content Designer and User Researcher. Their descriptions are the only text seen.

## What the table does not say

- **Not ranked and not tried.** Whether any candidate makes a chair better is a question for a trial with
  a baseline, which this library does not run (`GE-Workshop#325`).
- **A skill is not knowledge of a field.** A chair's reference file lists what a person in the field
  reads; a skill is a procedure an agent follows. They answer different questions, so a skill may belong
  beside a reference and not in it.
- **No candidate for the Agile Facilitator's and the Reliability Engineer's own fields** was verified
  beyond the two rows above.
