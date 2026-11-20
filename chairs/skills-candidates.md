---
type: Chair Reference
title: "Community and first-party skills as reference candidates, per chair — unranked, none tried"
description: "For each of the twelve chairs, the skills the first-party repository, a community curated list and third-party directories name for its field, with every address either verified to resolve on 2026-11-20 or marked as a lead that was not opened; the tier column is left empty for the Composer, and no skill was installed, read in full or run"
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
---

# Skills as reference candidates, per chair

Assembled 2026-11-20 for the Composer to tier, in the shape of `chairs/references-candidates.md`: **the
tier column is empty on purpose.** *Resolves* means the address answered when requested on 2026-11-20 and
nothing more. **No skill was installed, read in full or run, so each row is a candidate at the level
documented, never an endorsement.** Skills can run code; Anthropic's own guidance is to install only
from trusted sources and to audit a skill's files first (`method/skill-authoring-lessons.md`).

## Candidates that resolve

| Chair | Candidate | What it is said to do | Address | Tier |
|---|---|---|---|---|
| UX Designer | `frontend-design` | Steers Claude away from generic aesthetics toward deliberate design choices | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/frontend-design) | |
| Design Engineer | `web-artifacts-builder` | Builds HTML artifacts with React, Tailwind CSS and shadcn/ui | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/web-artifacts-builder) | |
| QA Engineer | `webapp-testing` | Tests local web applications with Playwright, for UI verification and debugging | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/webapp-testing) | |
| QA Engineer | `playwright-skill` | General browser automation with Playwright | [lackeyjb](https://github.com/lackeyjb/playwright-skill) | |
| Software Engineer | `superpowers` | Core skills for test-driven development, debugging and collaboration, with planning commands | [obra](https://github.com/obra/superpowers) | |
| Software Engineer | Trail of Bits security skills | Static analysis and code auditing | [trailofbits](https://github.com/trailofbits/skills) | |
| Software Architect | `mcp-builder` | A guide for building servers that connect external APIs; only loosely architecture | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/mcp-builder) | |
| Content Designer | `internal-comms` | Status reports, newsletters and FAQs | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/internal-comms) | |
| Content Designer | `brand-guidelines` | Applies a brand's colours and typography to artifacts | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/brand-guidelines) | |
| Agile Auditor, Agile Facilitator | `skill-creator` | Guides the building of a new skill by interview | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/skill-creator) | |
| Product Owner, Software Architect | `get-shit-done` | Context engineering and spec-driven development | [gsd-build](https://github.com/gsd-build/get-shit-done) | |

## Fields the community list does not cover, and the leads that exist

The curated list read has **no entry** for accessibility, user research, architecture decisions,
reliability or git workflow. The wider directories name some. **None of the leads below was opened or
resolved**; they come from third-party directory listings and are for a later pass, not for trust.

| Chair | Lead | What the listing says |
|---|---|---|
| Accessibility Specialist | `accessibility-review`, in Anthropic's `knowledge-work-plugins` repository; several community `a11y-audit` skills | A WCAG 2.1 AA audit of a design or page; one community listing was flagged for referenced files missing from its bundle |
| User Researcher | `user-research-synthesis`, in a community product-management collection | Synthesizes research findings into structured insights |
| Software Architect | Many architecture-decision-record skills, one of which tells an agent when to stop and propose a record before adding a dependency | Different record formats; a page's own rule for what an ADR holds is the Workshop's |
| Reliability Engineer | A postmortem-writing skill in a community agents collection | Not seen; **no dedicated SRE incident-review skill was found** |

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
