---
type: Tool
title: "Tool: axe-core"
description: "The accessibility engine underneath most of the field: what it implements, its ~30-40% ceiling, defects from the tracker and friction from Stack Overflow, and the closed shadow DOM it cannot reach"
status: draft
serves: [Accessibility Specialist, QA Engineer, Design Engineer]
generated: { by: human:jkornobis, at: 2026-08-23T00:20:16+02:00 }
sources:
  - resource: https://github.com/dequelabs/axe-core/issues/5028
    title: "#5028"
  - resource: https://github.com/dequelabs/axe-core/issues/4350
    title: "#4350"
  - resource: https://github.com/dequelabs/axe-core/issues/4791
    title: "#4791"
  - resource: https://stackoverflow.com/questions/79248451/axe-core-accessibility-library-reports-incorrect-colour-values
    title: "79248451"
  - resource: https://stackoverflow.com/questions/79552838/why-do-i-get-err-invalid-file-url-path-when-using-axe-core-playwright-in-a-next
    title: "79552838"
  - resource: https://stackoverflow.com/questions/79686218/how-can-i-get-axe-core-to-run-when-state-changes-or-i-switch-to-a-different-page
    title: "79686218"
  - resource: https://stackoverflow.com/questions/79475170/are-axe-core-rules-conform-to-older-rules
    title: "79475170"
---

# Tool: axe-core

Audited 2026-08-23 by User Researcher. Library (embeddable engine), not MCP-mediated. No auth; runs inside whatever test environment hosts it.

Re-audit: 56 days — measured, release cadence (n=9 intervals, agile-watcher @ acaadb3, 2026-08-30)

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

**Two sources, and they hold different classes of problem.** The tracker holds **defects** — the rule is wrong. Stack Overflow holds **friction** — the rule is right and the reader cannot tell. A page that reads only one of them misses half of what breaks a chair's day.

**How each was reached, because the route is part of the evidence.** The tracker: the GitHub issues API, 2026-08-23 — title, state, date and labels read from the issue itself, never from a search summary. Stack Overflow: **the Browser pane**, on the Composer's instruction of 2026-08-23, because the web-search arm is refused by the domain outright (*"domains are not accessible to our user agent"*). The pane renders the page like any reader; nothing is bypassed. **A tool unreachable by one instrument is not unreachable.**

### Defects — the project's tracker

| Issue | State | What it costs the chair | Source |
|---|---|---|---|
| Shadow DOM list false positive | **open**, 2026-03-05, label `info needed` | a `<ul>` whose `<li>`s are slotted through a custom element's shadow root is reported as containing non-list children. The rule fails on a correct component, so a design-system team gets a violation it cannot fix in its own markup | [#5028](https://github.com/dequelabs/axe-core/issues/5028) |
| `target-size` false positive inside a "fake" stacking context | **closed**, 2024-03-01, labels `fix` `rules` `high` | a translucent target in a positioned stacking context was reported as too small. Closed — the value here is the shape: **target-size reasoning depends on stacking context**, so a fix in one component can move the verdict in another | [#4350](https://github.com/dequelabs/axe-core/issues/4350) |
| EPIC: fix customer-reported false positives | **open**, 2025-06-06 | the vendor tracks false positives as a standing programme rather than as incidents. Read it as the honest base rate: **some fraction of any run is noise**, and triage is part of the chair's work, not a sign of misuse | [#4791](https://github.com/dequelabs/axe-core/issues/4791) |

### Friction — Stack Overflow, read through the Browser pane 2026-08-23

**The `axe-core` tag holds four questions in total**, highest score 1. That thinness is itself the
finding: **this tool's problems are not discussed on Stack Overflow**, they are filed against the
repository. Recorded so nobody re-runs the search expecting a corpus.

| Question | Signal | What it costs the chair | Source |
|---|---|---|---|
| axe-core reports colour values that match no CSS rule | 1 vote, **0 answers**, 312 views — the most-read of the four, asked by a 14.6k-rep user, Dec 2024 | **The reported colour is composited, not declared.** A maintainer answered *in a comment* — a non-1 `opacity` or an `rgba` background is alpha-composited into an opaque value before contrast is computed. So searching the stylesheet for the reported colour finds nothing, and the violation looks like a bug in the tool. It is not | [79248451](https://stackoverflow.com/questions/79248451/axe-core-accessibility-library-reports-incorrect-colour-values) |
| `ERR_INVALID_FILE_URL_PATH` running `@axe-core/playwright` in a Next.js API route | 1 vote, 1 answer, 129 views, Apr 2025 | integration, not engine — the harness, not the rules | [79552838](https://stackoverflow.com/questions/79552838/why-do-i-get-err-invalid-file-url-path-when-using-axe-core-playwright-in-a-next) |
| Getting axe-core to re-run on state change or route change | 1 vote, 1 answer, 101 views, Jul 2025 | a single-page app scans once at load and never again unless wired to re-run — a silent under-audit rather than a failure | [79686218](https://stackoverflow.com/questions/79686218/how-can-i-get-axe-core-to-run-when-state-changes-or-i-switch-to-a-different-page) |
| Do axe-core rules conform to older rule sets | −1 vote, 1 answer, 126 views, Feb 2025 | — | [79475170](https://stackoverflow.com/questions/79475170/are-axe-core-rules-conform-to-older-rules) |

**The first row is the one to carry, and it is the same shape this estate keeps recording:** the tool
worked, returned a number, and the number described a **computed** state rather than the declared one.
The reader went looking for the value in the wrong layer. `brain/brain_principles.md`'s oracle rule,
arriving from outside this repo entirely.

**And note where the answer was.** The question shows **0 answers**; the explanation sits in a
comment. A row counted by answers would have scored this question as unresolved and skipped the most
useful sentence on the page.

**The pattern under all three tracker issues is one fact worth carrying:** axe-core's failures are **false positives, not false negatives** — it over-reports rather than under-reports. That is the safe direction for a conformance tool and the expensive one for a team, because every run costs triage.

## Limits — where this instrument stops

- **Closed shadow DOM is unreachable.** Open shadow roots are traversed when the host element is in scope; a closed root is not, and no configuration opens it. Manual testing is the only route.
- **Each iframe level needs its own context entry** — one iframe takes two entries in the target array, three levels take four. An incomplete context silently audits less than the page.
- **~30–40% of WCAG is machine-checkable at all**, which is a property of the criteria rather than of this engine.

All three are **tool limits, not reasoning limits** — a subagent inherits the same engine — so under `agents/tools/yang/README.md`'s precondition none of them is admissible evidence for a dedicated subagent request.

## Recommended (Composer to accept/decline)

- **Accessibility Specialist** — when a violation lands on a component built with slotted custom elements, check it against #5028 before filing it as a real defect. — status: proposed
- **QA Engineer** — treat a non-zero axe count as a triage queue, not a failure count; the EPIC above is the vendor saying so. — status: proposed
- **User Researcher** — Stack Overflow needs a second instrument. The Browser pane reads rendered pages and is not blocked by the crawler policy; whether SO becomes a routine source for these pages is the Composer's call. — status: **proposed**
