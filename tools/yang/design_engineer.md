---
type: Lever Index
title: "Lever index — Design Engineer"
description: "Design Engineer lever index for the token crossing: Figma Variables and Code Connect keyed by intent, each row naming the default it must beat, plus the trap in publish --force"
status: draft
serves: [Design Engineer]
generated: { by: human:jkornobis, at: 2026-08-16T23:27:12+02:00 }
---

# Lever index — Design Engineer

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

| Lever | Status |
|---|---|
| `moves-tokens-between-design-and-code` | **Required.** The only lever promoted to a chair requirement in Chair Review 1 (ADR-218) — this chair *is* the design↔code seam, so remove token movement and there is no seam left to hold |
| `generates-editable-design-layers-from-intent` | Serves |
| `reads-a-running-interface` | Serves |
| `audits-accessibility-mechanically` | Serves |

## Levers, keyed by intent — not endpoints, keyed by API

The shape ADR-257 established: an endpoint reference is complete and organised so the wrong answer is the reachable one, so every row names **the tempting wrong default it exists to beat**. Verified 2026-08-08 against `/figma/plugin-typings` (`variables-api.md` and `plugin-api.d.ts`) via Context7 — not recalled.

| I want | The lever | The default it must beat |
|---|---|---|
| a decision stored **once**, themed | `figma.variables.createVariableCollection(name)`, then `await collection.addModeAsync('Dark')` and `variable.setValueForMode(modeId, value)` — one variable, one value per mode | **two colour styles named `light/…` and `dark/…`.** They cannot switch by mode; the theme becomes a manual swap forever |
| a colour that **is** the token, not a copy of it | `figma.variables.setBoundVariableForPaint(paint, 'color', variable)` then `node.fills = [bound]` | **reading the variable's value and setting a literal fill.** Pixel-identical, and the binding is gone — this is the drift-checklist's *"a binding held by resemblance rather than declaration"*, and it is invisible to every visual check |
| spacing, radius and stroke **driven by tokens too** | bind them: `VariableBindableNodeField` carries **26 fields** — `itemSpacing`, `padding*`, `cornerRadius` and its four corners, `strokeWeight` and its four sides, `min/maxWidth`, `min/maxHeight`, `opacity`, `gridRow/ColumnGap`, `visible`, `characters` | **assuming only colour is tokenizable.** The most common way a token system stops halfway, and nothing in the file announces it |
| the token's **name in code** | `variable.setVariableCodeSyntax(platform, value)`, read back via `variable.codeSyntax` — **the crossing is native, per platform, stored on the variable itself** | **maintaining a separate name-mapping file** in the transform pipeline, which then drifts from the design source it claims to mirror |
| a variable offered **only where it belongs** | `variable.scopes` (read-write `VariableScope[]`) — the picker stops offering a radius token as a text colour | **naming conventions as the guard.** A convention constrains the human, not the tool |
| one token **pointing at** another | `figma.variables.createVariableAlias(variable)` | **copying the value across.** Two truths that agree today |

### Code Connect — the mapping half

Verified 2026-08-08 against `/figma/code-connect` via Context7.

| I want | The lever | The default it must beat |
|---|---|---|
| a Figma component **bound** to its code component | a `figma.connect(Component, nodeUrl, { props, example })` file, published with `figma connect publish --token … --label React` | **documenting the pairing in a handoff doc or README.** It is not readable by anyone's tooling, and it drifts silently |
| a **variant** to arrive as a prop | `figma.boolean('Disabled')`, `figma.string('Label')` — and `figma.boolean(name, { true: <A/>, false: <B/> })` when the two states are different markup, not one flag | **hardcoding an example snippet.** It stops reflecting the instance the moment a property changes |
| a **nested** component's props | `figma.instance('Icon')`, or `figma.instance('Icon').getProps()` to lift them into the parent | flattening the nested component into the parent's example by hand |
| to know what **would** publish | `figma connect publish --dry-run` | publishing and reading the diff afterwards |
| to remove a mapping | `figma connect unpublish --node <url>` **or** `--label <name>` — one is required | deleting the local file, which leaves the published mapping live in Figma |

**The trap in `--force`, and it is a governance question rather than a flag.** `publish --force` *"overwrites existing UI-created Code Connect mappings"* — so a mapping made by hand in the Figma UI and a mapping made in code are two sources of truth for the same node, and the CLI resolves it by destroying one. **Decide which surface owns a mapping before the first `--force`, not after.** Config lives in `figma.config.json` (`parser`, `include`, `label`).

**The one worth carrying out of this table:** `codeSyntax` means Figma already stores a variable's per-platform code name. `register.md` describes the crossing as Dev Mode → Tokens Studio → Style Dictionary → Code Connect, with DTCG as a *provisional* spanning layer — and part of the naming half of that crossing is native and unused here. Not a claim that the pipeline is unnecessary; a claim that **one documented seam is narrower than the chain assumes**, and it is checkable against the 0-of-121 mapping count.
