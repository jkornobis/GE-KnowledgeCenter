---
type: Tool
title: "Tool: i18next"
description: "The FR/EN parity engine: two open issues against 1,472 Stack Overflow questions, and three of the top six are one problem — markup inside a translated string"
status: draft
serves: [Content Designer, Design Engineer]
generated: { by: human:jkornobis, at: 2026-08-25T15:13:24+02:00 }
sources:
  - resource: https://github.com/i18next/i18next/issues/2172
    title: "#2172"
  - resource: https://github.com/i18next/i18next/issues/1418
    title: "#1418"
---

# Tool: i18next

Audited 2026-08-23 by User Researcher. Library (JavaScript internationalization framework). Not MCP-mediated, no auth.

Re-audit: 8 days — measured, release cadence (n=9 intervals, agile-watcher @ acaadb3, 2026-08-30)

**Chair:** Content Designer — `brain/content_designer_references.md` names it the **FR/EN parity engine** behind localization engineering, and draws the boundary explicitly: *the words stay the Content Designer's; the technical i18n layer is shared with the Design Engineer.* ICU MessageFormat is the spec; this is its production implementation.
**Lineage:** the Content Designer's leap — *readability made measurable*, Flesch (1948) and the plain-language movement, against style manuals from 1906/1918. Lag **~30 years**. **This tool is not that leap either**, and the mismatch is instructive: the lineage row is about making language *measurable*, while this instrument is about making it *portable*. Two different disciplines under one chair. `project/tools_lineage_full.md`

## Context7

| Field | Value |
|---|---|
| Library ID | `/i18next/i18next` — resolved 2026-08-23, **not recalled** |
| Snippets · reputation · benchmark | 636 · High · **81.80** |
| Versions | `v23.11.5`, `v26.0.2` |

**The family split, which a single number would have hidden.** `brain/content_designer_references.md` records **81.01** for the core and **81.81** for `react-i18next`. Today: core **81.80** (up), `react-i18next` **78.86** (down). **Two libraries in one family moving in opposite directions inside five weeks** — which is the cleanest evidence yet that the benchmark tracks each project's own documentation rather than anything field-wide.

Also resolvable: `/i18next/next-i18next` 80.22.

## Critical (verified this session)

- **Content Designer** — plurals and gender are **locale rules, not string formatting**. ICU MessageFormat encodes them; a template with `{count} items` and a naive `s` is correct in English and wrong in most languages the estate would ship to.
- **Content Designer** — **namespaces are the unit of ownership.** They decide who can change a string without a rebuild of everything, which makes them a governance choice more than a technical one.
- **Design Engineer** — the framework bindings (`react-i18next`, `next-i18next`) are where the friction lives, not the core. The tracker and Stack Overflow agree on this from opposite directions.

## Known issues — defects and friction, from two records

### Defects — the project's tracker, read 2026-08-23 via the GitHub API

**Two open issues. In total.**

**And there is no `bug` label** — the label list was fetched: `breaking change, doc, feature request, hacktoberfest, help wanted, non critical issue, not reproducible, pr hold`. So this is the **third variant of the label question** this library has now recorded: Playwright has no `bug` label and a real queue; Zod has the label and nothing open under it; **i18next has neither the label nor a queue.**

| Issue | State | What it costs the chair | Source |
|---|---|---|---|
| A non-existent context is not a type error when covered by a string union | open, 2024-04-12, 13 comments, `typescript` `help wanted` | a typo in a context key type-checks and silently returns the wrong string. **The failure is a wrong translation, not a crash** — invisible to every test that does not read the output | [#2172](https://github.com/i18next/i18next/issues/2172) |
| Locale-specific bundles | open, 2020-04-02, `feature request` | every locale ships to every user; a bundle-size question rather than a correctness one | [#1418](https://github.com/i18next/i18next/issues/1418) |

### Friction — Stack Overflow, read through the Browser pane 2026-08-23

**1,472 questions against 2 open issues — the widest gap between "people have problems" and "the project has bugs" of any tool in this library.**

| Question | Votes · views | |
|---|---|---|
| **HTML tags in a translation** | 94 · 169k | 13 answers |
| `pluralResolver`: environment not Intl-compatible, use a polyfill | 79 · 44k | |
| **Line breaks in a JSON string** | 69 · 100k | |
| *You will need to pass in an i18next instance by using `initReactI18next`* | 69 · 123k | wiring, 13 answers |
| Getting the current language | 57 · 118k | |
| **Interpolating a link inside a sentence** | 43 · 57k | |

**Three of the top six are one problem: markup inside a translated string.** HTML tags, line breaks, a link in the middle of a sentence — all the same collision, because **the unit of translation is a string and the unit of display is not.** A sentence with a link in it is one thought, two markup boundaries and one translator who must be allowed to move them.

**That is the Content Designer's actual craft problem, arriving as a tooling question**, and it is why this chair's boundary sentence matters: the words are the chair's, the interpolation mechanics are the Design Engineer's, and the top of this tag is exactly where the two meet.

**A sixth friction class, distinct from the five already recorded:** not the API's model, not the build, not a boundary between products, not a DSL translation — a **unit mismatch**, where the tool's atom is smaller than the thing being authored.

## Limits — where this instrument stops

- **A translation key is a string, and rich text is not.** The `Trans` component exists precisely because the primitive does not stretch; expect the top-voted questions to be permanent.
- **Plural rules depend on the runtime's `Intl`**, so an old environment degrades correctness silently rather than failing.
- **Context keys are not type-safe against a string union** (#2172) — a typo is a wrong translation, not an error.

All three are **tool limits**, not reasoning limits.

## Recommended (Composer to accept/decline)

- **Content Designer** — treat "can this sentence carry a link or emphasis" as a copy decision made *before* the string is written, not a developer problem discovered after. — status: proposed
- **Design Engineer** — namespace boundaries decide who may change a string without a full rebuild; worth setting deliberately rather than inheriting from a tutorial. — status: proposed
