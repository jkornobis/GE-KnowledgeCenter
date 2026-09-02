---
type: Concept
title: "The Figma method — how a design surface is actually played"
description: "Eyes first and code second: the working loop for a design surface, what the eyes read in a structured file, and why text-only spatial reasoning collapses as a layout grows"
status: draft
generated: { by: human:jkornobis, at: 2026-08-28T16:46:45+02:00 }
---

# The Figma method — how a design surface is actually played

---
name: figma-method
description: "Eyes First, Code Second — the working method for all Figma canvas work. Perceive (screenshot, inspect) before acting, act in small atomic steps, verify visually after every mutation. Load whenever creating, editing, or reviewing anything on a Figma canvas or via the Figma API."
---

# Eyes First, Code Second — the Figma working method

**In Figma, an unseen canvas is an unknown canvas.** Never mutate what you have not just looked at; never trust a mutation you have not looked at afterward. This is not polish — spatial judgment done in text instead of on an image is the documented failure mode.

## The loop — perceive → act → verify

1. **Look before writing.** Screenshot and/or inspect the structure of the target *before* any mutation. Never act on a remembered or assumed canvas state — earlier in the session is already stale.
2. **Act small.** One logical step per operation. A failed script is atomic (nothing applied); an oversized one is the documented #1 cause of bugs. Build skeleton first, fill incrementally.
3. **Look after writing — and verify by comparison, not by glance.** Screenshot immediately after each step, not at the end of a long build, and judge the **before/after pair**, not the after alone: did the action succeed, did the task progress, and if not, what kind of error? A change invisible in the pair didn't happen — or happened somewhere it shouldn't. Validation order: **structure first** (does the node tree match intent?), **then visual** (does it *look* right — overlap, clipping, alignment, spacing?), then a targeted fix, then the next step.
4. **Judge space on the image, never on coordinates.** Overlap, clipping, balance, and alignment are decided by *seeing* the render, not by reasoning about x/y numbers in text. Address nodes by ID, name, or structure — never by coordinate arithmetic. If a spatial question arises mid-task, get a fresh screenshot before answering it.

## Why (evidence, not preference)

- **Text-only spatial reasoning collapses as complexity grows** — from ~94% to ~39% accuracy in the MVoT experiments as layouts scale up — while reasoning interleaved with images stays stable (~20% better on hard spatial tasks). Source: [Multimodal Visualization-of-Thought](https://gregrobison.medium.com/drawing-conclusions-the-rise-of-visual-reasoning-in-ai-with-multimodal-visualization-of-thought-042856fd50af).
- **"Think *with* images, not about them."** Vision must be a manipulable intermediate step in the reasoning chain, not passive initial context — the screenshot-per-step loop is exactly that. Source: [Thinking with Images for Multimodal Reasoning (arXiv 2506.23918)](https://arxiv.org/abs/2506.23918).
- **Figma's own official skill prescribes the same loop** — incremental builds, `screenshot()` within the same script that mutated, metadata-then-visual validation, small steps as the bug preventer. Source: [figma-use SKILL.md](https://github.com/figma/mcp-server-guide/blob/main/skills/figma-use/SKILL.md).
- **Figma's native design agent itself runs perceive → act → verify**, and its output quality tracks how well-organized the design system it perceives is. Source: [Figma AI design agent explained](https://hundredtabs.com/blog/figma-ai-design-agent-explained).
- **Visual evidence beats textual reasoning about change.** The before/after screenshot pair is the reliable verification signal for agents acting on a GUI; text-only reasoning "misses the visual nature of GUI state changes." Source: [VisCritic (arXiv 2606.24525)](https://arxiv.org/abs/2606.24525).
- **Coordinate generation is the weak link in visual grounding.** "Humans don't calculate coordinates before acting; they perceive targets" — attention on the image outperforms generating x/y as text. Source: [GUI-Actor, Microsoft (arXiv 2506.03143)](https://arxiv.org/html/2506.03143v1).

## What the eyes read — structure carries intent

The perceive step reads *structure*, so structure must carry the intent. What an agent extracts from a Figma file is exactly what was encoded — every gap is filled with guesswork. Source: [Agentic AI, design systems & Figma — a practical guide (Vallaure, UX Collective)](https://uxdesign.cc/agentic-ai-design-systems-figma-a-practical-guide-6ab0b681718d).

- **Semantic tokens are the non-negotiable layer.** `color/interactive/default` tells an agent what a colour *means*; a raw hex tells it nothing. Primitives exist only to be referenced by semantic tokens, never applied directly.
- **Names must match code exactly.** Component names in PascalCase, identical to the code component (`ProductCard`, never "Card — Product v2 FINAL"); property names and values agreed with the developer *before* building. One character off and Code Connect mapping fails — the agent then regenerates from scratch instead of reusing.
- **An undesigned state is a state the agent believes does not exist.** Hover, focus, disabled, error, empty, loading — each missing variant silently narrows what the agent can compose.
- **Component descriptions are read by the Figma MCP and passed as agent context.** One sentence per component ("Five-point star for ratings; filled/empty/half; interactive by default") is the cheapest leverage in the file.
- **Auto layout + token spacing + semantic layer names make a frame machine-readable.** As Vallaure puts it, a frame with auto layout and tokens "is a description" — manually placed elements with hardcoded values are only a picture. `Frame 247` tells the eyes nothing. For genuine two-dimensional structure, Figma's **grid layout mode** (`layoutMode: 'GRID'`, GA 2026, with `HUG` sizing — [Plugin API 2026-06-10](https://developers.figma.com/docs/plugins/updates/2026/06/10/update/)) is as machine-readable as auto layout and the honest choice over nested auto-layout hacks for a real grid; absolute-positioned children remain the picture, not the description.
- **The agent assembles; it does not wonder.** It never asks whether a component *should* exist or whether the spacing communicates ease — creative intent stays with the designer. (The article independently restates this system's Composer principle: the orchestra assembles, the Composer authors.)

## The 2026 mandate — tokens and slots (non-negotiable)

The "structure carries intent" section above is the *why*; this is the *bar*. Both are **mandatory** on any design-system work — the QA Engineer gates on the checklist at the end, the same way "done" on a canvas step means a checked post-mutation screenshot.

### Design tokens — three tiers, named for intent

Tokens are built in three tiers, and the tier decides whether a token may be applied to a layer at all ([Figma: design tokens](https://www.figma.com/resource-library/design-tokens/), [atomize 2026 guide](https://atomize.tools/blog/figma-design-tokens-guide/)):

- **Primitive** (the *what* — `blue/400`, `space/8`): the raw palette. **Reference-only — never applied to a layer directly.**
- **Semantic** (the *how* — `text/subdued`, `surface/brand`, `border/interactive`): role aliases. This is the layer designs actually bind to. A semantic token **points to a primitive, never to another semantic** — chained aliases are the maintenance trap Figma explicitly warns against.
- **Component-specific** (the *where* — `button/primary/bg/default`): pattern `asset/type/property/state`. Applied directly, always resolving down to a semantic.

Naming rules, all mandatory:
- **Intent, not hue.** `text/subdued`, never `text/gray` — a hue name breaks the moment a dark mode exists. The name must stay true across *every* mode.
- **DTCG-style paths that match code.** `category/role/variant` (`color/text/primary`, `spacing/gap/md`) maps 1:1 onto CSS custom properties (`--color-text-primary`) — one vocabulary shared by design and engineering, no translation layer. This is the portable convention; a Composer with a house token standard (e.g. DXC DCTG) binds these paths to it, but the three-tier shape and intent-naming hold regardless.
- **Modes carry more than light/dark, on the semantic layer, not new tokens.** Light/dark are values of the *same* semantic token, never a `text/primary-dark` sibling. And a mode is not only theme: Figma modes also switch **brand, locale, and density** — swap a frame's mode and spacing, copy, or palette update together ([Figma: variables guide](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma) shows device-size and language modes explicitly). One semantic token, many modes; never a sibling token per context.

### Variables are typed, and scopes are the machine guardrail

Figma tokens are **Variables**, not the older Styles — dynamic, mode-aware, and referenceable by other variables ([Figma: variables vs styles](https://help.figma.com/hc/en-us/articles/15871097384471-The-difference-between-variables-and-styles)). Four types, each with a job:

- **Color** (fills, strokes, effects), **Number/Float** (spacing, radius, size, font-size), **String** (text content, font family, path labels), **Boolean** (toggles — bind these to a component's boolean property so one variable drives a state).
- **No composite type.** Figma has no single shadow/border token — a shadow is *composed* from Number + Color variables on its sub-fields. Don't wait for a token that doesn't exist; bind the parts.
- **Scope every token to where it may bind.** Scoping limits which properties a variable can be applied to ([Figma: VariableScope](https://developers.figma.com/docs/plugins/api/VariableScope/)) — a radius Number scoped to `CORNER_RADIUS` cannot be mis-bound as a `GAP`; a `text/*` Color scoped to `TEXT_FILL` cannot land on a frame background. Scope is how the file *prevents* the wrong token being applied, instead of trusting the next pass to notice — the token-layer equivalent of this method's post-mutation screenshot.

### Variants, properties, slots — the three axes of one component

A component varies along three independent axes, and Figma exposes **five property types** to model them ([Figma: component properties](https://help.figma.com/hc/en-us/articles/5579474826519-Explore-component-properties)). Choosing the wrong axis is the most common design-system defect an agent inherits:

- **State → Variant.** Genuinely distinct visual versions: `primary/secondary/ghost`, `default/hover/disabled`. Variants and only variants encode state.
- **Configurable knobs → Boolean / Text / Instance-swap properties.** A show/hide icon is a **boolean**; editable label text is a **text** property; a swappable nested instance is **instance-swap**. These do *not* multiply into variant rows.
- **Content structure → Slot** (below).

**The rule: reach for a property before a variant.** Every boolean modelled as a variant *doubles* the variant count — icon × size × state as variants is a combinatorial explosion; as a boolean property + variant + slot it stays flat. If the change is a toggle, a string, or a swap, it is a property, never a new variant.

### Slots — flex content without detaching

Slots (Figma — open beta March 2026, **GA June 2026** with full Plugin API support: `componentNode.createSlot()`, `slotSettings` for `stretchChildOnInsert` / `displayEmptyByDefault` / `minChildren` / `maxChildren` / `allowPreferredValuesOnly` — [Figma Learn](https://help.figma.com/hc/en-us/articles/38231200344599-Use-slots-to-build-flexible-components-in-Figma), [Figma blog](https://www.figma.com/blog/supercharge-your-design-system-with-slots/), [Plugin API 2026-06-10](https://developers.figma.com/docs/plugins/updates/2026/06/10/update/)) are flexible areas inside a main component where content can be inserted, resized, and reordered **on an instance, without detaching** — so the instance keeps receiving main-component updates. They mirror how code composes components (children / slots), which is exactly what makes them machine-readable.

- **Slots vs. variants — different axes, both required.** A **variant** encodes *state* (open/closed, default/hover/disabled). A **slot** encodes *what content goes inside* when the structure holds but the content varies. Reaching for a variant to model "a card with different inner content" is the misuse — that's a slot. State stays variants; content flex becomes slots.
- **Hard constraints (from Figma, not preference).** A slot property **cannot bind to a component's top-level layer**. On an instance, position, auto-layout flow, and constraints are editable **only from the main component**, not the slot. Min/max layer counts are **guidance, not enforced** — don't rely on them as a hard gate.
- **Adopt where detaching already happens.** Convert the components teams detach most first — dialogs, menus, modals, cards, panels. That's where slots remove the most system-breakage.
- **Preferred instances are guardrails, not walls.** Pair a slot with a preferred-instances list to steer content without forbidding it; add `Only allow preferred instances` only where the constraint is real.
- **Default content is a decision, not a default.** Pre-fill a slot when an element is near-certain in a fixed spot (an icon top-right); leave it empty to *signal* the designer must choose. Empty vs filled is intentional either way.

## Code Connect — the design → code contract

Everything above builds *in* Figma. Code Connect is the return path — and the single feature that decides whether design→code produces real code or a lookalike. It **connects components in your repository directly to components in your Figma file**, so an agent reading the design through the MCP server emits *your actual component, imports, and prop interface* rather than an autogenerated snippet that merely resembles the design ([Figma: Code Connect](https://developers.figma.com/docs/code-connect/)). Without it, the agent regenerates UI from scratch every time; with it, it reuses. This is the half of the method the perceive-loop alone can't cover: the loop makes the canvas readable, Code Connect makes the read *land on the codebase*.

- **It rides on the naming rule already stated.** Code-exact PascalCase names and props agreed with the developer (see "structure carries intent") are exactly what let a mapping resolve. One character off and it fails silently — the agent falls back to regenerating. Naming discipline and Code Connect are the same investment paying off twice.
- **Two ways to map** ([Figma docs](https://developers.figma.com/docs/code-connect/)): the **CLI** with framework-agnostic TypeScript template files (recommended, works with any language/framework), or the **UI** with GitHub integration and one-to-many mapping (one design component → its React / Swift / Android implementations). Map the design system's real components, not one-offs.
- **The read side is a first-class MCP step.** `get_code_connect_map` / `get_design_context` surface the mapping to the agent; treat pulling the mapping as part of perceive, not an afterthought. Prefer the **remote MCP server** (Figma's hosted endpoint, broadest feature set, no desktop app) and don't select huge frames — scope the read.
- **Honest constraint.** Code Connect requires a **Dev or Full seat on an Organization/Enterprise plan** — name that gate up front rather than designing a workflow that assumes it. (Figma publishes no official accuracy figure; the benefit is qualitative — real components instead of approximations — so claim that, not a number.)

## The flywheel — leave the canvas more readable than you found it

"AI strengthens your design system, which powers better AI code generation" ([Figma: Design Systems & AI — why MCP servers are the unlock](https://www.figma.com/blog/design-systems-ai-mcp/)). The agent's next perceive step reads what its last act step wrote — so documenting is part of the loop, not an afterthought.

- **After building, update what was touched**: component descriptions, semantic layer names, token bindings. The canvas is the context store; every undocumented node is guesswork left for the next pass.
- **Explore in parallel, decide with the Composer.** Generate distinct directions side by side as *options* — never a single done deal; Figma's own agent principles prescribe the same ([The Figma agent is here](https://www.figma.com/blog/the-figma-agent-is-here/)).
- **Everything stays editable.** Outputs are live, manipulable layers — never flatten, rasterize, or detach what a human (or the next agent pass) should still be able to change.
- **Steer with names, not adjectives.** Reference specific tokens, variables, components — specificity in equals fidelity out.

## The gate — the QA Engineer's Definition of Done for design-system work

"Done" on any component, token, or design-system change is not a screenshot alone — it is this checklist passed. A failing line is a defect, not a style note:

- [ ] Every colour/spacing/type value on the touched nodes resolves to a **semantic token** (a Figma **Variable**, not a Style), not a raw value or a primitive applied directly.
- [ ] New tokens follow **three tiers**, **intent-not-hue** names, **DTCG paths that match code**, and **no semantic→semantic chaining**.
- [ ] Every new variable is **scoped** to the properties it may bind to (a radius Number to `CORNER_RADIUS`, a text Color to `TEXT_FILL`) — the wrong token cannot be applied.
- [ ] Modes are values of one semantic token, not sibling tokens — and cover the contexts in play (theme, and where relevant **brand / locale / density**).
- [ ] Each varying aspect sits on the **right axis**: state → **variant**; toggle/label/swap → **boolean/text/instance-swap property** (never a new variant row); content structure → **slot**.
- [ ] Slots respect the hard constraints (no top-level binding; structural edits from the main component only) and carry **preferred instances** where content should be steered.
- [ ] Component name is **PascalCase, code-exact**; description present; every interaction state (hover/focus/disabled/error/empty/loading) designed.
- [ ] Production components are **mapped via Code Connect** (names code-exact so the mapping resolves) when the work will be consumed as code.
- [ ] Post-mutation **screenshot taken and checked** (the canvas verification invariant).

## Adjacent 2026 surfaces — know they exist, reach for them by name

Config 2026 shipped surfaces next to this canvas method ([Config 2026 recap](https://www.figma.com/blog/config-2026-recap/)). Not part of the perceive-loop, but the honest choice when the task calls for them: **Code Layers** (turn a layer into live, iterable code inside the file), **Figma Motion** (timeline animation exporting to CSS/React/JSON — use the dedicated motion skill for implementation), **Shader fills/effects** (AI-generated materials as editable canvas controls), **Generative Plugins** (describe a tool, no dev environment), and the **enhanced Figma Agent** (custom skills + connectors like GitHub/Notion/Slack). Steer with the feature's real name; don't hand-build what a named surface already does.

## Who plays it

The **UX Designer** and the **Design Engineer** own the loop during canvas work; the **QA Engineer** holds the gate — "done" on any Figma step means a *post-mutation screenshot was taken and checked* **and the Definition-of-Done checklist above passes**, never a bare claim that the code ran. This is the visual form of the verification invariant: verified = an external artifact, and on a canvas the artifact is the rendered image plus a green checklist.

---

# Part 2 — Deployment rules from practice (merged 2026-07-29)

**Provenance, stated because it changes how to read this half.** Produced by the Figma AI Agent
during a real session — *DXC 2026 Corporate Slide Template → DXC 2026 Figma System documentation* —
merging the Composer's corrections in that session with Figma's own 56 built-in skill files. **Its
API claims are sourced from that session's skill files, not verified here**; each carries its
`SKILL REF` so any of them can be checked against the named skill. Everything above this line is the
older method and was written from a different surface.

## Who carries it, and when it loads

**Any musician routed to execute on the Figma canvas.** The Agile Facilitator routes the task; **the musician
picks up this skill and chooses its own instruments** — tool choice is the musician's, never the
Agile Facilitator's (Composer, 2026-07-29). Under ADR-198 this document *is* a chair's **reach** into the
Figma venue: its Yang seed, filled.

**Loads** the first time the orchestra deploys onto Figma in a session — User Researcher audits the surface
(Tool Audit trigger), then this persists for the rest of that session's Figma work.

## I — Cognitive protocol (how to think)

**1. Read all prompt text first — see `principles.md`, The Declared Circle.** Parse the whole message
before opening any attachment or image; comprehend the shape, then think, then answer. **Not restated
here on purpose:** it lives in the principle layer as *"Read all; a scrollbar is proof you have not
read it all"*, and copying it would break Unison in the same file that teaches it. The theory this
session added is worth carrying: **anchoring bias** (Tversky & Kahneman, 1974) — the first stimulus
frames everything after it, so control the frame by controlling input order. *(Composer correction.)*

**2. Learn before build.** Build only what exists in the source; never fabricate. Run discovery
first — the source file **is** the spec. *SKILL REF: `analyze-tokens` — "run discovery first, classify
second." THEORY: Atomic Design's interface inventory; Nathan Curtis — "harvest, don't invent."*

**3. Copy all first — see the shape — batch it.** Never cherry-pick before understanding the whole.
Copy everything, see what repeats, identify batches, list the unique changes, execute per batch.
*SKILL REF: `batch-modify` — `findAllWithCriteria`, scope to subtree, cache repeated reads. THEORY:
you need the full population to identify clusters; DRY applied to operations.*

**4. The canvas is 2D — compose spatially.** Figma is not a DOM and not one vertical scroll. You have
X and Y, hyperlinks, annotations, images, cross-file node links. **Group by meaning, not by sequence.**
*(Composer: "you decide the world is one dimensional.") SKILL REF: `position-nodes`, `insert-nodes`,
`duplicate-and-arrange`. THEORY: Gestalt proximity/similarity/common region; Tufte, "Envisioning
Information" (1990).*

**5. Showing Surface vs Reading Surface.** A Reading Surface is flat text, bullets, a PDF import,
instructions *about* the thing. A Showing Surface is live components, inspectable layers, visible
variable bindings, structure you can click into. **Always build the Showing Surface.** *(The Composer's
distinction.) SKILL REF: `create-documentation-page`. THEORY: this is "Show, don't tell" native to the
canvas — components ARE the show, not descriptions of them.*

## II — Structural rules (how to build)

**6. Never use Sections — always Frames.** Universal, no exceptions. *SKILL REF: `convert-node-types`
— sections cannot become components; frames can, via `createComponentFromNode()`.*

**7. Atomic decomposition, discovered not imposed.** Atoms (indivisible) → molecules (atom groups) →
organisms (assemblies) → templates (content variants) → pages (real instances). **Read what exists to
find the levels.** *SKILL REF: `analyze-tokens`, `componentize-duplicates`. THEORY: Brad Frost, Atomic
Design (2013).*

**8. File structure is the architecture.** Pages have purpose — read page names before placing
anything. *SKILL REF: `manage-pages` — pages are lazy-loaded, `loadAsync()` before traversal.*

**9. Pixels are a Reading Surface; components are the world.** Use `duplicate_nodes` for **live**
structure transfer between files. Embed the minimum pixels (photos); keep the component world above.
*(Composer: "a pixel picture is a reading surface… Figma is an SVG-components world for this reason.")*

**10. Remote instances are already components.** If `node.mainComponent.remote === true` it comes from
a library — **document and reference it; never re-create it locally.** *SKILL REF: `components`,
`use-instances`. THEORY: single source of truth — don't fork what you can consume.*

**11. Batch changes — the plan is fractal.** Nodes needing the same change are a batch. List the
batches, run the universal one first, then per group. **One pass per pattern; never one-by-one when a
batch exists.** *SKILL REF: `batch-modify`.*

## III — Technical constraints (what the API demands)

**12. Load all fonts before any text edit.** Mixed-font nodes need
`getStyledTextSegments(['fontName'])`; never pass `node.fontName` directly — it can be `figma.mixed`
(a Symbol). Load before touching `.characters`, `fontSize`, `textAutoResize`, or reparenting.
*SKILL REF: `edit-text`.*

**13. Variables: bind, don't paint.** Fills/strokes → `setBoundVariableForPaint` (returns a new paint;
reassign it). Layout props → `node.setBoundVariable` (mutates directly). Colour variable values carry
alpha `{r,g,b,a}`; paint colours don't. **Cannot bind to empty fills** — add a placeholder SOLID
first. *SKILL REF: `use-variables`.*

**14. Components: `appendChild` before `componentPropertyReferences`.** Append the variant to the set
first; property IDs carry a `#` suffix, so match by prefix. `combineAsVariants` requires
ComponentNodes, not frames. *SKILL REF: `components`.*

**15. Instance geometry is locked.** Size, rotation, alignment and position of sub-layers inside an
instance are fixed to the main component. Only text, fills, visibility and slot content vary per
instance. *SKILL REF: `use-instances`.*

**16. Pages are lazy-loaded.** Only `figma.currentPage` has children loaded; other pages report **0
children with no error**. `page.loadAsync()` or `setCurrentPageAsync()` first — and
`loadAllPagesAsync()` is **not** available. *SKILL REF: `manage-pages`, `inspect-layer-tree`. Note the
failure mode: a silent empty result, not an exception.*

**17. Group → Frame has no API.** Create the frame, **capture absolute positions before moving
children** (groups auto-resize as children leave), transfer, then remove the group. Frame → Component
is `figma.createComponentFromNode(frame)`; Instance → Frame is `instance.detachInstance()`.
*SKILL REF: `convert-node-types`.*

**18. Never search libraries yourself.** All library search — components, styles, variables, top-k
assets — is reserved for the **`explore-design-systems` subagent**, and inserting library components
is the design agent's job. Plugin API is for **local, in-file** components only. *SKILL REF:
`use-design-system`. This is the Delegation Brief with a named delegate.*

**Rule 19 was killed by the Composer on 2026-09-02, and this page carries eighteen rules.** It read
*"⚠ No screenshots unless asked"*, carried from one session on the Figma AI Agent surface, and it
flagged itself as contradicting this page's own method. It reserved its own resolution for the
Composer — *"a rewrite of a live gate… the Composer's call, not a merge decision"* — and he made it:
**dead, permanently.** What leaves is that rule and the unresolved-contradiction note it carried; the
loop and the QA Engineer's gate above stand unopposed, unchanged, and were never in doubt.
`git revert` returns what left.

## IV — Reading list (from the same session)

Brad Frost, [*Atomic Design*](https://atomicdesign.bradfrost.com/table-of-contents/) (2013) · Nathan
Curtis, *Modular Web Design* (2009) · Alla Kholmatova,
[*Design Systems*](https://www.smashingmagazine.com/design-systems-book/) (2017).
