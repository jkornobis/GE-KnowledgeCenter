---
type: Lever Index
title: "Lever index — UX Designer"
description: "UX Designer lever index for Figma: seven intents keyed to the Plugin API call that serves them, each row naming the tempting wrong default it exists to beat"
status: draft
serves: [UX Designer]
generated: { by: human:jkornobis, at: 2026-08-16 }
---

# Lever index — UX Designer

> **Extracted from a Yang file, lever index only.** The estate's own rule splits these files
> internally: the lever index is craft about an instrument and travels; **occupancy, limits
> reached, and the cadence a Composer measured are personal and stay home.** So this page carries
> the index and its framing, and deliberately omits the rest — including the tricks bought by this
> estate's own failures, whose provenance is one Composer's.
>
> A lever index is keyed by **what you want**, never by what the API offers. Every row names the
> plausible wrong answer it exists to beat, because the failure is never that the lever could not
> be found — it is that a plausible answer arrived first.

## Levers this musician acts on

The UX Designer **requires** none — its Yin cell in `roster.md` is empty, and that is correct: a designer with no tool at all still holds the chair's canon. It **serves** three (`register.md`):

| Lever | The UX Designer's part in it |
|---|---|
| `generates-editable-design-layers-from-intent` | the primary one — intent becomes real frames, components and variables |
| `reads-a-running-interface` | judges what actually rendered, not what was specified |
| `moves-tokens-between-design-and-code` | authors the decisions the tokens carry; the Design Engineer moves them |

### Levers, keyed by intent — not endpoints, keyed by API

**The Composer's finding, 2026-08-08:** *"They build an API documentation but not the lever to act on. The levers missing because buried in documentation of Endpoint Itself, and a trained AI Agent with this skill and your reasoning engine can still produce SVG vector by hand instead of searching the lever to do the rights things the right way."*

An endpoint reference is keyed by **what the API offers** and is complete. A lever index is keyed by **what you want** and is the only thing that gets reached in time. This section is the second kind, and every row carries the **tempting wrong default it exists to beat** — because the failure is never that the agent could not find the lever, it is that a plausible answer arrived first.

| I want | The lever | The default it must beat |
|---|---|---|
| an **arrow** | `figma.createLine()` then `strokeCap = 'ARROW_LINES'` (or `'ARROW_EQUILATERAL'`) — a real line node with a real arrowhead: resizable, restylable, a Figma citizen | **hand-rolling an SVG path.** A picture of an arrow that cannot be restyled as a stroke |
| a shape **combined** from two shapes | `figma.union(nodes, parent)` — also `subtract`, `intersect`, `exclude`; returns a `BooleanOperationNode` whose operands stay editable | **hand-computing the merged path**, or reaching for `flatten()`, which returns a `VectorNode` and **destroys the operands permanently** |
| spacing that **survives a content change** | `layoutMode: 'HORIZONTAL' \| 'VERTICAL'` with `itemSpacing`, `padding*`, and `primaryAxisSizingMode: 'AUTO'` | **absolute x/y positioning.** Identical in a screenshot, and wrong the moment any child's content changes — the failure a static verification pass cannot see |
| **text** on the canvas | `figma.createText()`, then **`await figma.loadFontAsync({family, style})` before touching `.characters`** | setting `.characters` first — **it throws**; and the deeper default, rendering the text as a vector or image, which stops being text |
| a component with **states** | `figma.createComponent()` per state, then `figma.combineAsVariants(nodes, parent)` → a `ComponentSetNode` | **separate unlinked components**, or one component whose states are layers toggled by hand — neither is selectable as a variant downstream |
| a **knob** on a component (on/off, label, swap) | `componentPropertyDefinitions` with `type: 'BOOLEAN' \| 'TEXT' \| 'INSTANCE_SWAP' \| 'SLOT'` | **a variant axis per knob**, which multiplies the variant matrix combinatorially instead of adding one property |
| a **container** | `createFrame()` when it must lay out or clip; `figma.group(nodes, parent)` only for a bag of things | reaching for `group` by reflex — **a group has no layout, no padding, no clipping**, so every later auto-layout request has to undo it |

All verified 2026-08-08 against `/figma/plugin-typings` via Context7 — `DefaultShapeMixin.strokeCap`, `DefaultFrameMixin`, `ComponentPropertyDefinitions`, and the `plugin-api.md` boolean/group/variant signatures. Not recalled.

**Why the default wins unless something like this table exists, stated as mechanism rather than as blame.** `VectorPath` declares `data: string // SVG path data` — **the API accepts hand-rolled SVG as a first-class input.** An agent emitting an SVG path is not ignoring the documentation; it is following it. And the economics settle it: synthesizing a path costs zero lookups at near-certain success, while finding `ARROW_LINES` costs a search with an unknown payoff. **Reasoning does not rescue this — reasoning is what makes the hand-rolled answer feel sufficient.** Only an index that puts the lever *at the intent* changes the cost.

**One row is not an index.** This table is the shape, proven on the Composer's own example; it is deliberately not padded with entries nobody has needed yet, per this layer's rule against plausible documentation.
