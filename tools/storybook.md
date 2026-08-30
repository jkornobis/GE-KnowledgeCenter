---
type: Tool
title: "Tool: Storybook"
description: "The component workbench where a variant becomes a runnable story: 1,102 labelled bugs mostly carrying has-workaround, and friction that is all build pipeline rather than authoring"
status: draft
serves: [Design Engineer, Software Engineer, QA Engineer]
generated: { by: human:jkornobis, at: 2026-08-23T00:26:29+02:00 }
---

# Tool: Storybook

Audited 2026-08-23 by User Researcher. Library (dev server + build tool), not MCP-mediated. No auth; runs against a project's own build pipeline.

Re-audit: 2 days — measured, release cadence (n=8 intervals, agile-watcher @ acaadb3, 2026-08-30)

**Chair:** Design Engineer — `Serves:` the design↔code seam; also Software Engineer (the component workbench) and QA Engineer (`@storybook/addon-a11y` runs axe checks per story; Chromatic adds a visual-regression gate on the same stories). No lever in `register.md` names it directly.
**Lineage:** it sits **under** the Design Engineer's row without being its leap. That row runs hand-written CSS (1996) → *design tokens* (2014) → Figma Variables + Code Connect, lag **15 years**. Storybook is not the token crossing; it is **where the crossing is checked** — the surface on which a component's variants and states become runnable, and therefore testable. Recorded as a mismatch rather than forced into the row: not every instrument is the leap of the chair it serves. `project/tools_lineage_full.md`

## Context7

| Field | Value |
|---|---|
| Library ID | `/storybookjs/storybook` — resolved 2026-08-23, **not recalled** |
| Snippets · reputation · benchmark | 8,423 · High · **80.56** |

`brain/engineer_references.md`, `brain/qa_engineer_references.md` and `brain/accessibility_specialist_references.md` all record **83.53**, from the 2026-07-20 pass. Third tool in a row whose carried benchmark has moved.

Versions are pinnable here (`v10.2.9`, `v9.0.15`, `v8_6_14`, `v6_5_9`), which matters more than usual — see the defects below, where the standing bugs are version- and framework-specific.

## Critical (verified this session)

- **Design Engineer** — the contract sentence this estate already uses: *every variant and state is a runnable story, and that is the contract between design and code* (`brain/design_engineer_references.md`). A story is the executable form of a Figma variant.
- **QA Engineer** — `@storybook/addon-a11y` runs axe-core against every story, which shifts WCAG left into the component library rather than an end-of-line audit. Everything on `axe-core.md` — the ~30–40% ceiling, the false-positive base rate, the composited-colour trap — applies here unchanged, because it is the same engine.
- **Software Engineer** — it is a **build-pipeline participant**, not a standalone viewer. That single fact predicts the friction below better than any feature list.

## Known issues — defects and friction, from two records

### Defects — the project's tracker, read 2026-08-23 via the GitHub API

**1,571 open issues, of which 1,102 carry the `bug` label** — and unlike Playwright, this project *does* label bugs, so the query means what it says. That is a real standing defect load, and it is the honest counterweight to a tool this widely adopted.

**Read the `has workaround` label as the useful signal.** All three below carry it: the defect is known, survivable, and has been open for years. That combination is a maintenance posture, not neglect — but it means a team meets these and works around them rather than waiting.

| Issue | State | What it costs the chair | Source |
|---|---|---|---|
| `addon-docs` does not show all props for styled-components | open, 2020-08-12, 27 comments, `has workaround` | the generated prop table — the thing that makes a story *documentation* — is incomplete for a common styling approach. The design↔code contract is readable but not trustworthy at the props layer | [#11933](https://github.com/storybookjs/storybook/issues/11933) |
| `build-storybook` watch mode not working | open, 2021-08-30, 28 comments, `has workaround`, `good first issue` | the static build cannot watch, so a docs site rebuilds whole. Open five years with `good first issue` on it, which says something about where attention goes | [#15946](https://github.com/storybookjs/storybook/issues/15946) |
| Vue + TypeScript generic component not working in CSF3 | open, 2023-09-20, 21 comments, `has workaround`, `sev:S3` | a typed generic component cannot be expressed in the current story format. The contract holds for simple components and breaks at the type boundary | [#24238](https://github.com/storybookjs/storybook/issues/24238) |

### Friction — Stack Overflow, read through the Browser pane 2026-08-23

**2,133 questions**, and their shape is different from Playwright's in a way that matters to whoever adopts it.

| Question | Votes · views | What it really says |
|---|---|---|
| How to add Tailwind to Storybook | 87 · 66k | |
| How to troubleshoot Storybook not loading stories | 57 · 102k | |
| `react-router` — *You should not use `<Link>` outside a `<Router>`* | 56 · 43k | a component in isolation still needs its providers; isolation is not free |
| Panels not visible | 46 · 31k | |
| `this.getOptions is not a function` for `style-loader` | 43 · 48k | a webpack-version mismatch surfacing inside Storybook |

**Not one of the top five is about building a component.** Every one is about **making the build work** — bundler config, framework providers, loader versions. Where Playwright's top questions expose a gap between the user's mental model and the API, Storybook's expose the cost of being a second build pipeline beside the application's own.

**The practical consequence for a chair:** budget the adoption cost against the *pipeline*, not the component authoring. That is where the hours go, and 2,133 questions say so.

## Limits — where this instrument stops

- **It is a second build of your application**, with its own bundler config, and it inherits every version conflict the main build has. This is the root of the friction table above rather than a separate defect.
- **The a11y addon's ceiling is axe-core's ceiling** — ~30–40% of WCAG, machine-checkable. A story that passes the addon is not a conformant component.
- **The prop table is only as good as the docgen** — #11933 is the standing case; a styling approach the docgen cannot read produces documentation that looks complete and is not.

All three are **tool limits**, not reasoning limits.

## Recommended (Composer to accept/decline)

- **Design Engineer** — pin the Storybook major in any component-library work; the standing defects are version- and framework-specific and Context7 exposes versioned ids for exactly this. — status: proposed
- **QA Engineer** — if the a11y addon is adopted, adopt `axe-core.md`'s triage posture with it: a non-zero count per story is a queue, not a gate. — status: proposed
