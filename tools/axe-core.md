---
type: Tool
title: "Tool: axe-core"
description: "The accessibility engine underneath most of the field: what it implements, its ~30-40% ceiling, three verified false-positive issues, and the closed shadow DOM it cannot reach"
status: draft
serves: [Accessibility Specialist, QA Engineer, Design Engineer]
generated: { by: human:jkornobis, at: 2026-08-23 }
---

# Tool: axe-core

Audited 2026-08-23 by User Researcher. Library (embeddable engine), not MCP-mediated. No auth; runs inside whatever test environment hosts it.

Re-audit: 90 days — default, not measured (no release has yet invalidated anything on this page)

**Chair:** Accessibility Specialist — the lever `audits-accessibility-mechanically`, `Serves:` only. Chair Review 2026-08-05 refused promotion (ADR-218): the published ~30–40% automated-coverage ceiling means this instrument **scopes** manual work rather than being something the seat breaks without. QA Engineer and Design Engineer also `Serves:`.
**Lineage:** the Accessibility Specialist's leap — *automated conformance*, Bobby (1996) → axe-core in CI (~2015), against an origin of manual review with Lynx as proxy (1992). Lag **16 years**. `project/tools_lineage_full.md`

## Context7

| Field | Value |
|---|---|
| Library ID | `/dequelabs/axe-core` — resolved 2026-08-23, **not recalled** |
| Snippets · reputation · benchmark | 884 · High · **71.03** |

**The benchmark moved and that is the point of re-resolving.** `brain/accessibility_specialist_references.md` records **77.01** from the 2026-07-20 pass; today the same library returns **71.03**. Neither number is wrong — one is a dated reading and the other is a copy of it. A benchmark carried forward becomes a measurement by repetition.

Adjacent, if the host is Cypress: `/component-driven/cypress-axe` — 59 snippets, High, 86.8.

## Critical (verified this session)

- **Accessibility Specialist** — the engine implements **ACT Rules**; it does not define them (`register.md`, Posture: **implements**). That is why it ranks as *true material*: it reads the rendered DOM, which is what a screen reader reads, rather than inspecting markup.
- **Accessibility Specialist** — the coverage ceiling is **~30–40%**, published by Deque itself. Knowing what the tool cannot catch is how manual testing gets scoped; a green axe run is not a conformance claim.
- **QA Engineer** — embeddable in any test run, and the engine underneath most of the field, so a finding here transfers to Playwright, Cypress, Storybook's a11y addon and Lighthouse alike.

## Known issues — what breaks, from the record rather than the vendor

**Source of record: the project's own issue tracker.** **Stack Overflow was not reachable** — this orchestra's web arm is refused by `stackoverflow.com` (verified 2026-08-23, the search API returns *"domains are not accessible to our user agent"*). So no SO-sourced row appears below, and its absence is a fact about the instrument rather than about the tool.

Each row verified against the GitHub issues API on 2026-08-23 — title, state, date and labels read from the issue itself, never from a search summary.

| Issue | State | What it costs the chair | Source |
|---|---|---|---|
| Shadow DOM list false positive | **open**, 2026-03-05, label `info needed` | a `<ul>` whose `<li>`s are slotted through a custom element's shadow root is reported as containing non-list children. The rule fails on a correct component, so a design-system team gets a violation it cannot fix in its own markup | [#5028](https://github.com/dequelabs/axe-core/issues/5028) |
| `target-size` false positive inside a "fake" stacking context | **closed**, 2024-03-01, labels `fix` `rules` `high` | a translucent target in a positioned stacking context was reported as too small. Closed — the value here is the shape: **target-size reasoning depends on stacking context**, so a fix in one component can move the verdict in another | [#4350](https://github.com/dequelabs/axe-core/issues/4350) |
| EPIC: fix customer-reported false positives | **open**, 2025-06-06 | the vendor tracks false positives as a standing programme rather than as incidents. Read it as the honest base rate: **some fraction of any run is noise**, and triage is part of the chair's work, not a sign of misuse | [#4791](https://github.com/dequelabs/axe-core/issues/4791) |

**The pattern under all three is one fact worth carrying:** axe-core's failures are **false positives, not false negatives** — it over-reports rather than under-reports. That is the safe direction for a conformance tool and the expensive one for a team, because every run costs triage.

## Limits — where this instrument stops

- **Closed shadow DOM is unreachable.** Open shadow roots are traversed when the host element is in scope; a closed root is not, and no configuration opens it. Manual testing is the only route.
- **Each iframe level needs its own context entry** — one iframe takes two entries in the target array, three levels take four. An incomplete context silently audits less than the page.
- **~30–40% of WCAG is machine-checkable at all**, which is a property of the criteria rather than of this engine.

All three are **tool limits, not reasoning limits** — a subagent inherits the same engine — so under `agents/tools/yang/README.md`'s precondition none of them is admissible evidence for a dedicated subagent request.

## Recommended (Composer to accept/decline)

- **Accessibility Specialist** — when a violation lands on a component built with slotted custom elements, check it against #5028 before filing it as a real defect. — status: proposed
- **QA Engineer** — treat a non-zero axe count as a triage queue, not a failure count; the EPIC above is the vendor saying so. — status: proposed
- **User Researcher** — Stack Overflow needs a second instrument. The Browser pane reads rendered pages and is not blocked by the crawler policy; whether SO becomes a routine source for these pages is the Composer's call. — status: **proposed**
