---
type: Chair Reference
title: "Reference candidates for the two chairs that have none — UX Designer and Design Engineer, unranked"
description: "Ten chairs carry a field-reference file and two do not; this assembles the candidates for both so the Composer can tier rather than gather — what the corpus already binds to each chair, what this library already holds, and external sources with every address verified to resolve, with the tier column deliberately empty"
status: draft
serves_all: true
generated: { by: agent:ge-knowledgecenter, at: 2026-09-10T11:14:00+02:00 }
sources:
  - resource: https://www.nngroup.com/articles/
    title: "Nielsen Norman Group — articles"
  - resource: https://lawsofux.com/
    title: "Laws of UX"
  - resource: https://m3.material.io/
    title: "Material Design 3"
  - resource: https://inclusive-components.design/
    title: "Inclusive Components"
  - resource: https://www.interaction-design.org/literature
    title: "Interaction Design Foundation — literature"
  - resource: https://www.designsystems.com/
    title: "Design Systems"
  - resource: https://www.figma.com/plugin-docs/
    title: "Figma Plugin API"
  - resource: https://tr.designtokens.org/format/
    title: "Design Tokens Format Module"
  - resource: https://www.w3.org/community/design-tokens/
    title: "W3C Design Tokens Community Group"
  - resource: https://styledictionary.com/
    title: "Style Dictionary"
  - resource: https://storybook.js.org/docs
    title: "Storybook — docs"
  - resource: https://open-ui.org/
    title: "Open UI"
  - resource: https://lit.dev/docs/
    title: "Lit — docs"
  - resource: https://web.dev/baseline
    title: "Baseline"
  - resource: https://www.figma.com/code-connect-docs/
    title: "Figma Code Connect"
  - resource: https://tokens.studio/
    title: "Tokens Studio"
---

# Reference candidates for the two chairs that have none

**Ten chairs carry a `*_references.md`. UX Designer and Design Engineer do not** — and they are
precisely the two whose movement border is the best evidenced, argued at
`mandalas/movements-layer.md` as *Design systems*.

⚠️ **The tier column is empty on purpose and an instance may not fill it.** `tools/tiers.py` states
it in the Composer's own words: *it never writes to the library … the tier is a Composer's act.* **A
candidate list can be gathered; Critical / Important / Emerging cannot be assigned.** This page is
the gathering.

**The ten that exist were authored by the Composer on 2026-08-16**, so this is material for his hand
rather than a draft of his page.

## What the corpus already binds to each chair

Derived with `node map_pages.mjs --chair="<name>"`, not selected by hand. **A binding is not a
reading recommendation** — it is what the corpus says the chair answers to, and it belongs here
because a references file that ignored it would describe a different chair.

```text
UX Designer        10 corpus bodies · 29 pages name the chair
                   grounds: The Composer Principle · Episteme vs. doxa · The Declared Circle
                            The Turing Game · Unison
                   enacts:  Canonical duets · Proactive consultation
Design Engineer    14 corpus bodies · 36 pages name the chair
                   grounds: The Composer Principle · Episteme vs. doxa · The Declared Circle
                            Unison · The cobbler's children
                   enacts:  Canonical duets · Minimum Duet
```

**`The cobbler's children` binds to the Design Engineer and not to the UX Designer**, which is the
one asymmetry worth a second look before either page is written.

## What this library already holds for them

```text
UX Designer        tools/yang/ux_designer.md      lever index, seven intents, Figma Plugin API
                   tools/figma-method.md          eyes first, code second
Design Engineer    tools/yang/design_engineer.md  lever index, Variables and Code Connect
                   tools/style-dictionary.md      named on 7 pages
                   tools/tokens-studio.md         named on 6 pages
```

**Neither chair is starting from nothing**, which changes what a references file is for here: not a
reading list, a **currency layer** over ground the library already covers.

## Candidates — UX Designer

**Every address below returned 200 on 2026-09-10, checked one by one.** Neither gate in this
repository reads the outside, so this is the only verification these lines will ever get.

| Candidate | What it is for | Tier |
|---|---|---|
| [Nielsen Norman Group](https://www.nngroup.com/articles/) | The standing empirical corpus of usability findings; the place a claim about user behaviour is checked rather than asserted | |
| [Laws of UX](https://lawsofux.com/) | Named perceptual and cognitive effects with their sources — the vocabulary for saying *why* a layout works | |
| [Interaction Design Foundation](https://www.interaction-design.org/literature) | Method literature: research, IA, interaction patterns, where a practice comes from | |
| [Material Design 3](https://m3.material.io/) | A complete, maintained design system to read as a worked example — tokens, components, and the reasoning published together | |
| [Inclusive Components](https://inclusive-components.design/) | Component-by-component accessible patterns; the bridge between a design decision and what it costs a user | |
| [Design Systems](https://www.designsystems.com/) | The practice literature of systems themselves — governance, contribution, adoption | |
| [Figma Plugin API](https://www.figma.com/plugin-docs/) | Already the spine of `tools/yang/ux_designer.md`; listed so the currency layer covers it | |

## Candidates — Design Engineer

| Candidate | What it is for | Tier |
|---|---|---|
| [Design Tokens Format Module](https://tr.designtokens.org/format/) | The specification a token file is measured against, rather than whatever a tool emits | |
| [W3C Design Tokens Community Group](https://www.w3.org/community/design-tokens/) | Where that specification moves, and the only way to know a format claim is current | |
| [Style Dictionary](https://styledictionary.com/) | The transform layer this library already holds a page on; the crossing from token to platform | |
| [Tokens Studio](https://tokens.studio/) | The other half of that crossing, on the design side | |
| [Figma Code Connect](https://www.figma.com/code-connect-docs/) | Binds a Figma component to the code component it represents — the chair's whole subject in one API | |
| [Storybook](https://storybook.js.org/docs) | Where a variant becomes runnable; the surface a design claim is tested on | |
| [Open UI](https://open-ui.org/) | What the platform is standardising, so a component is not rebuilt the year before it ships natively | |
| [Baseline](https://web.dev/baseline) | Whether a feature is safe to use now — the currency question, answered per feature | |
| [Lit](https://lit.dev/docs/) | The framework-neutral component target, for when a design system must outlive a framework | |

## What this page deliberately does not do

**It assigns no tier**, and an instance filling that column would be taking a Composer's act.

**It writes neither page.** The ten that exist have a shape — a canon pointer, then tiers, then
Context7 resolution — and reproducing that shape with unranked content would produce two pages that
look finished and are not.

**And it makes no claim that either chair needs one.** Ten of twelve is a gap only if those two
chairs have work that a currency layer would serve. **That is the question under the question**, and
it is not this page's to answer.
