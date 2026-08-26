---
type: Tool
title: "Tool: Vitest"
description: "The highest Context7 benchmark in this library and the only one to rise sharply: 906 questions of which the top five are all config and module resolution, not a single assertion among them"
status: draft
serves: [Software Engineer, QA Engineer]
generated: { by: human:jkornobis, at: 2026-08-26T16:53:30+02:00 }
---

# Tool: Vitest

Audited 2026-08-26 by User Researcher. Library (test runner, Vite-native). Not MCP-mediated, no auth.

Re-audit: 90 days — default, not measured (no release has yet invalidated anything on this page)

**Chair:** Software Engineer — `brain/engineer_references.md` names it Important: *Jest is no longer the default*. Also `Serves:` QA Engineer, whose `qa_engineer_references.md` lists it as the unit/component runner beneath the test-pyramid-to-honeycomb shift.
**Lineage:** the QA Engineer's leap — **xUnit**, SUnit (Beck, 1989) → JUnit (1997) → TDD named (2002), against manual test scripts. Lag **20 years**. This is that lineage's current JavaScript expression, and — like [`playwright.md`](playwright.md) — one of several instruments that can carry it. `project/tools_lineage_full.md`

## Context7

| Field | Value |
|---|---|
| Library ID | `/vitest-dev/vitest` — resolved 2026-08-26, **not recalled** |
| Snippets · reputation · benchmark | 4,577 · High · **89.73** |
| Versions | `v3_2_4`, `v4.0.7`, `v4.1.6` |

**The highest benchmark of any tool in this library**, and it moved **up**: `brain/engineer_references.md` and `brain/qa_engineer_references.md` both record **82.2** from 2026-07-20. **82.2 → 89.73.**

**That closes the drift question this library opened three days ago.** Eight readings now — axe-core, Playwright, Storybook, OpenTelemetry and Style Dictionary down; Zod, i18next core and Vitest up. **Five down, three up: the benchmark tracks each project's own documentation and nothing field-wide.** The `chair_tools_survey`'s struck paragraph is confirmed struck.

Three `/websites/*` mirrors also resolve at 79.57, 80.68 and 82.23 — all below the repo, unlike Playwright's.

## Critical (verified this session)

- **Software Engineer** — **Vite-native and ESM-first**, which is the actual reason to choose it: the test runner shares the application's own transform pipeline instead of maintaining a second one. That property is also the source of every friction item below.
- **QA Engineer** — Jest-compatible API surface, so the migration cost is configuration rather than test rewriting. **The config is where the cost lands**, and the Stack Overflow reading says so unambiguously.
- **Software Engineer** — versions are pinnable and **v3 → v4 is a real boundary**; Context7 exposes three, which matters when an answer found online may predate the major.

## Known issues — defects and friction, from two records

### Defects — the project's tracker, read 2026-08-26 via the GitHub API

**319 open issues, and there is no `bug` label** — the labels are priority- and area-prefixed instead: `p2-nice-to-have`, `p2-edge-case`, `pending triage`, `feat: browser`, `feat: workspace`.

**Fourth distinct answer to the same query in this library**, and the discriminator is still one call to the label list:

| Project | `is:open label:bug` | What the zero means |
|---|---|---|
| Playwright | 0 | no such label — `[BUG]` in the title |
| Zod | 0 | the label exists and is used — a genuine zero |
| i18next | 0 | neither label nor queue — two open issues total |
| **Vitest** | **0** | **no such label — priority-prefixed labelling instead** |

| Issue | State | What it costs the chair | Source |
|---|---|---|---|
| `cwd` is the workspace root when running tests in a sub-project | open, 2024-02-23, 11 comments, `feat: workspace` `pending triage` | **a test that reads a relative path passes alone and fails in the monorepo**, or the reverse. The classic shape where the test environment and the runtime disagree about where "here" is | [#5277](https://github.com/vitest-dev/vitest/issues/5277) |
| `Uint8Array` / `TextEncoder` behaviour | open, 2023-08-29, 26 comments, `p2-edge-case` | binary and encoding primitives behave differently under the test transform than in the runtime — labelled an edge case, and it is exactly the kind that produces a green suite over broken code | [#4043](https://github.com/vitest-dev/vitest/issues/4043) |
| Browser Mode: Electron support | open, 2024-06-13, **27 👍**, `p2-nice-to-have` | the most-wanted open item is a capability, not a fix | [#5883](https://github.com/vitest-dev/vitest/issues/5883) |

### Friction — Stack Overflow, read through the Browser pane 2026-08-26

**906 questions, and the top five are one thing.**

| Question | Votes · views |
|---|---|
| `defineConfig`: `'test' does not exist in type 'UserConfigExport'` | 158 · 88k |
| `@` src alias not resolved in test files | 64 · 54k |
| Reading `.env` variables from a test | 38 · 47k |
| Excluding specific files and folders | 38 · 66k |
| *Failed to resolve import `@/…`* | 31 · **109k** |

**Every one is configuration or module resolution. Not a single assertion, mock or matcher question in the top five.** The runner is not what people struggle with — **the shared Vite pipeline is**, which is the same class `storybook.md` records and for the same underlying reason: a tool that rides the application's build inherits every ambiguity in it.

**And the top question at 158 votes is a *typing* error in the config file** — the config is TypeScript, and the test field's type lives in a different package than the one being imported. The cost lands before a single test runs.

## Limits — where this instrument stops

- **Path aliases and `.env` resolution are inherited from the Vite config**, so a project with a working app build can still have a broken test build.
- **`cwd` semantics differ in a workspace** (#5277) — relative paths are not portable between running a project alone and running it in the monorepo.
- **Encoding primitives can diverge from the runtime** (#4043), which is the failure mode that produces a passing suite over code that breaks in production.

All three are **tool limits**, not reasoning limits.

## Recommended (Composer to accept/decline)

- **Software Engineer** — budget adoption against the *config*, not the tests; 906 questions say the assertions were never the problem. — status: proposed
- **QA Engineer** — for anything touching buffers or encoding, verify against the runtime rather than trusting a green suite (#4043). — status: proposed
