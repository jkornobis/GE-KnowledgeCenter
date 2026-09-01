---
type: Tool
title: "Tool: [Name]"
description: "The skeleton a Tool Audit fills: chair and lever, lineage, Context7 id resolved rather than recalled, defects and friction from two named routes with the friction's class, and limits marked tool or reasoning"
status: draft
serves: [User Researcher]
generated: { by: human:jkornobis, at: 2026-08-25T14:47:07+02:00 }
---

# Tool: [Name]

Audited [YYYY-MM-DD] by User Researcher. [MCP-mediated / native / library / web UI]. [Connection state / auth notes.]

Re-audit: [N] days — [measured, from an observed release interval / default, not measured / not applicable — no release surface]

**Chair:** [Chair] — [required lever, or `Serves:` only] (`register.md`, `roster.md`)
**Lineage:** [the chair's leap this product realises, with its date] — `project/tools_lineage_full.md`

## Context7

| Field | Value |
|---|---|
| Library ID | `/org/project` — resolved [YYYY-MM-DD], **not recalled** |
| Snippets · reputation · benchmark | [N] · [High/Medium/Low] · [score] |

*Or:* **Not indexed by Context7** — [what answers the *where and how* question instead].
A benchmark score is a dated reading: re-resolve rather than copy it forward.

## Critical (verified this session)

- **[Chair]** — [fact, with how it was verified: introspected schema / fetched doc URL / a call actually made]

## Known issues — what breaks, from the record rather than the vendor

**Two sources, and they hold different classes.** The **issue tracker** holds *defects* — the tool is
wrong. **Stack Overflow / Stack Exchange** holds *friction* — the tool is right and the reader cannot
tell. Read both, and say which a row came from.

**Route matters and is recorded.** SO is refused to the web-search arm (*"domains are not accessible
to our user agent"*), and is read through the **Browser pane** instead — the Composer's standing
instruction, 2026-08-23. Ordinary rendering, nothing bypassed. **A tool unreachable by one instrument
is not unreachable.** If a tag turns out to be thin, say so: an empty corpus is a finding, and it
stops the next audit re-running the same search.

| Issue | State | What it costs the chair | Source |
|---|---|---|---|
| [title] | open/closed, [date] | [the practical consequence, not the symptom] | [#N or URL] |

**A label query measures a project's labelling convention, not its defects.** `is:open label:bug`
returning 0 can mean a healthy tracker or no such label — Playwright marks bugs `[BUG]` in the title
and labels by area, so the zero was about the convention. Check what the project labels *with* before
reading a count as a health signal.

Each row is verified against the primary record — an issue's own API or page — never from a search
summary. A search result is testimony; the issue is the transcript.

**Name the friction's *class*, because it predicts what adoption costs.** Five tools audited, five
distinct shapes:

| Class | Seen on | What a chair should budget |
|---|---|---|
| almost none — problems go to the tracker | `axe-core` (4 questions) | triage of the tool's own output |
| **API mental model** — the obvious way is wrong | `playwright` (3,506) | unlearning, and a lever index |
| **build pipeline** — a second build beside the app's | `storybook` (2,133) | config and version conflicts |
| **boundary** — where does this end and my stack begin | `opentelemetry` (1,405) | orientation, not debugging |
| **DSL translation** — a type idea expressed at runtime | `zod` (708, 176k top view) | modelling, reviewed as carefully as code |

A tag's *size* says how many people met the tool; its *shape* says what they met.

## Limits — where this instrument stops

[What it cannot do, with how that was established. Distinguish a *tool* limit from a *reasoning* limit:
only the first is evidence for a dedicated subagent request, and it is necessary rather than sufficient.]

## Recommended (Composer to accept/decline)

- **[Chair]** — [adjacent skill or approach User Researcher noticed] — status: proposed
