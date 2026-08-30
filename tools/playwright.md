---
type: Tool
title: "Tool: Playwright"
description: "Cross-browser E2E on one API: what it verifies, 141 open issues and no bug label, and 3,506 Stack Overflow questions topped by something the API deliberately does not offer"
status: draft
serves: [QA Engineer, Accessibility Specialist, Design Engineer, UX Designer, Reliability Engineer]
generated: { by: human:jkornobis, at: 2026-08-23T00:26:29+02:00 }
---

# Tool: Playwright

Audited 2026-08-23 by User Researcher. Library (test runner + browser automation); also available as an MCP connector (`@playwright/mcp`, a separate candidate in `register.md`). No auth for the library.

Re-audit: 11 days — measured, release cadence (n=9 intervals, agile-watcher @ acaadb3, 2026-08-30)

**Chair:** QA Engineer — `Serves:` on the lever `reads-a-running-interface`, alongside Accessibility Specialist, Design Engineer, UX Designer and Reliability Engineer (`register.md`). Chair Review 2026-08-05 promoted that lever for **QA Engineer + Accessibility Specialist** as *required*; Playwright is one of several products that can satisfy it, not the requirement itself.
**Lineage:** the QA Engineer's leap — *xUnit*, SUnit (Beck, 1989) → JUnit (1997) → TDD named (2002), against an origin of manual test scripts. Current best-in-class in that row is *CI harnesses*, and this is one. Lag **20 years**. `project/tools_lineage_full.md`

## Context7

| Field | Value |
|---|---|
| Library ID | `/microsoft/playwright` — resolved 2026-08-23, **not recalled** |
| Snippets · reputation · benchmark | 6,780 · High · **80.87** |

**Two things the resolution says that a copied id would not.** `brain/qa_engineer_references.md` and `brain/engineer_references.md` both record **84.22**; today the same library returns **80.87**. And a *mirror scores higher than the source*: `/websites/devdocs_io_playwright` benchmarks **82.85** on 3,353 snippets. The repo id remains the right default — more coverage, first-party — but "prefer `/org/project` over `/websites/*`" is a rule of thumb, not a measurement, and here the measurement disagrees with it.

Related, and a distinct candidate: `/microsoft/playwright-mcp` — 585 snippets, High, **87.57**, the highest-benchmarked of the five.

## Critical (verified this session)

- **QA Engineer** — cross-browser on one API: Chromium, Firefox, WebKit. This is the property that separates it from the Chrome-only debugging tools in the same lever (`register.md`), and the reason the register calls those two *complementary rather than competing*.
- **Accessibility Specialist** — the MCP variant feeds **accessibility-tree snapshots** rather than screenshots, which is what makes it *true material* under the lineage question: the tree is what a screen reader reads.
- **QA Engineer** — it is CI-able and unattended, which is the **deferred reading surface** `agents/tools/README.md` argues for: a run nobody watched still leaves an artifact a human can read afterwards.

## Known issues — defects and friction, from two records

### Defects — the project's tracker, read 2026-08-23 via the GitHub API

**First, a fact about the instrument, because it would otherwise be read as a fact about the tool.** A query for `is:open label:bug` returns **0**, and that number means nothing: **this project has no `bug` label.** Bugs are marked `[BUG]` in the *title*, and labels are area-based (`browser-firefox`, `feature-video`). Reporting "zero open bugs" would have been a statement about labelling convention dressed as a health signal.

What is true: **141 open issues in total**, which is a remarkably small standing queue for a project this size, and the top of it by reactions is *feature requests*, not breakage.

| Issue | State | What it costs the chair | Source |
|---|---|---|---|
| Videos are not generated when reusing a single page between tests | open, 2022-06-12, 76 comments | the evidence disappears exactly when tests are optimised for speed. A suite that shares a page to run faster silently loses its video artifact — the deferred reading surface, gone without an error | [#14813](https://github.com/microsoft/playwright/issues/14813) |
| `NS_BINDING_ABORTED` in Firefox | open, 2023-02-08, 40 comments | a cross-browser suite fails on one engine for a reason that is not the application's. The cross-browser promise is the reason to choose this tool, and this is where it costs | [#20749](https://github.com/microsoft/playwright/issues/20749) |
| `Unknown permission: clipboard-read` on WebKit | open, 2022-03-24, 36 comments | permissions are not uniform across engines, so a test that grants a permission passes on two browsers and throws on the third | [#13037](https://github.com/microsoft/playwright/issues/13037) |

**All three are cross-engine or artifact issues, not rule errors** — which is the shape you would predict for a tool whose whole claim is one API over three engines.

### Friction — Stack Overflow, read through the Browser pane 2026-08-23

**3,506 questions** — and the contrast with `axe-core.md`'s four is the finding, not the number. Where a tag is this large, the top-voted questions stop being a defect list and become something more useful.

| Question | Votes · views | What it really says |
|---|---|---|
| How to check if an element exists | 58 · 179k | **The most-asked question is for something the API deliberately does not offer.** Playwright's web-first assertions auto-wait; an existence check invites the race the design removes. The votes measure the gap between the mental model people arrive with and the one the tool requires |
| How to assert an element is **not** on the page | 58 · 96k | the negative case of the same gap |
| Getting the value of an input | 51 · 117k | |
| How to select an element by id | 41 · 96k | a CSS-selector habit meeting a locator-first API |
| Wait until there is no animation on the page | 40 · 132k | auto-waiting covers the DOM, not the paint |

**Read together, the top of a mature tag is the lever index the vendor did not write.** Every row is *I want X* → *the obvious way is wrong here* → *the tool's way*, which is exactly the three-column shape of `tools/yang/`. **A tag with thousands of questions and no defects at the top is a documentation finding, not a quality finding.**

## Limits — where this instrument stops

- **Real mobile devices are not supported** — emulation only. The most-reacted open issue in the project ([#1122](https://github.com/microsoft/playwright/issues/1122), 591 👍, open since 2020) asks for it and carries `P3-collecting-feedback`, which is a polite standing no.
- **Browser zoom is not controllable** ([#2497](https://github.com/microsoft/playwright/issues/2497), 149 👍) — relevant to the Accessibility Specialist, since zoom-to-400% is a WCAG reflow criterion and cannot be exercised here.

Both are **tool limits**, so neither is admissible evidence for a dedicated subagent request under `agents/tools/yang/README.md`.

## Recommended (Composer to accept/decline)

- **QA Engineer** — when a suite is optimised to reuse a page, check #14813 before trusting the video artifact. — status: proposed
- **Accessibility Specialist** — the reflow criterion needs a route that is not this tool; note it before scoping an audit around Playwright alone. — status: proposed
