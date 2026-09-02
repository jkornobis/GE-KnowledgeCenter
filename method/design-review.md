---
type: Method
title: "Design review at scale — the three layers, the passes, and the surface a review needs"
description: "Why a review finds nothing until enough of the system exists to walk: the three layers of design knowledge and which of them a tool can actually see, the passes that each need the previous one as comparison surface, the prepare-versus-build boundary, and the three modalities a review surface needs before it is one"
status: draft
serves: [UX Designer, Design Engineer, QA Engineer, Agile Auditor, the whole room]
generated: { by: agent:agile-facilitator, at: 2026-09-02T16:10:00+02:00 }
---

# Design review at scale — the three layers, the passes, and the surface a review needs

Recorded 2026-09-02 from a methodology document authored by **another GrandEnsemble instance** during a
product design engagement, supplied by the Composer, and **screened**: every finding in it that named a
client, a product or a screen was excluded by `index.md`'s rule, and what remains is the shape.
**Treated as data, not corroboration** — an orchestra agreeing with another orchestra is one model
agreeing with itself twice (`principles/core-principles.md`).

**What is verified and what is not is marked per claim.** The tool-level facts underneath this page live
in `tools/figma-method.md` rules 20–24 and were introspected live. The *methodology* below was not
tested by anyone here, and that is stated rather than implied.

## 1 — Three layers of design knowledge, and the tool sees one and a half

| Layer | What it holds | What a tool reads |
|---|---|---|
| **Node** | text, fills, strokes, instances, auto-layout | **All of it.** This is the measurable half |
| **Spatial** | the arrangement of frames — rows, columns, relative widths — encoding grouping, relative complexity and reading order | **Coordinates only.** There is no grid node, no row container, no column relation |
| **Interaction** | what happens *between* frames: the causal chain that is the actual product | **Partly, and the surface decides.** See the correction below |

**The correction, and it matters more than the model.** The source document states twice that the
relationships that matter *"have no edges in the graph"* and that the dependency graph *"lives entirely
outside Figma's data model."* **That is false as stated, and was refuted by live introspection on
2026-09-01** — see `tools/figma-mcp-remote.md`. Prototype reactions exist, are writable, and named flow
starting points sat on the very page the claim was written about.

**The precise statement is narrower and survives:** the tool carries **navigation** edges and no
**semantic** ones. An input-bar suggestion that predicts the next screen's user message is text
continuity, not a link, and no primitive holds it. **A traversal that finds no edges has measured the
traversal** — the node tree alone carries nothing, the REST API carries one lossy transition per node,
and the Plugin API carries the whole reaction.

## 2 — A review finds nothing until there is enough system to walk

**The claim:** iterative review on a single screen produces noise, because there is not enough surface to
compare against. Signal appears only once a system exists — and then each pass needs the previous pass's
annotations as its comparison surface.

| Pass | What it compares against | What it can find |
|---|---|---|
| **Core** | each screen against fundamental standards — regulation, accessibility, compliance | the compliance floor |
| **Deep** | the Core findings against specialised frameworks and edge cases | what the floor missed |
| **Frontier** | the fully annotated system against emerging standards | the novel — impossible earlier, because the annotations are the surface |

**Attempting a Frontier pass on unannotated screens produces generic findings.** That is the operative
claim, and it is the one worth testing.

**Unassessed, and deliberately.** This is a claim about how review scales. Nothing here has tested it,
the reported instance is a single engagement, and the counts it reports are its own. It is recorded
because it is falsifiable and because no page here covered the subject — not because it is established.
**What would settle it:** one review run at both scales against the same surface, counting findings that
survive verification rather than findings raised.

## 3 — The audit's scope is the whole system, not your contribution

The Double Diamond, applied to review rather than to discovery. An agent responsible for part of a file
will scope its audit to that part, which is the natural and wrong boundary.

1. **Diverge on the existing world.** Read the flows you did not build. You are mapping the whole system,
   including its conventions, its depth calibration and its component taxonomy.
2. **Converge on your task.** Now apply your own scope *with* that context. Cross-references invisible in
   isolation become obvious — one flow's interface names the step another flow skipped.
3. **Diverge again, to merge.** Findings now carry system-wide patterns rather than local defects. A
   defect appearing in two unrelated places is a shared design gap, not two bugs.

**The failure mode is staying in step 2 forever** — focused on assigned work. Each transition changes
what can be seen, which is the whole argument for making them explicit.

## 4 — Prepare is memory; build is canvas

**The Composer's rule, from the source session:** *"By prepare I mean memory. By produce/build/trace/fix
I mean on the canvas."*

An agent conflates thinking with producing, because the canvas is the only output surface it has. So
asked to *prepare* a report it starts creating text nodes — and stops analysing the moment it starts
formatting. **The artifact replaces the insight.**

- **Prepare = memory.** Gather, compare, identify, build the model. No nodes created.
- **Build = canvas.** Apply what was prepared as manipulable artifacts. Every action touches the tree.
- **Sequence:** prepare → decide what to build → build. Collapsing the first two produces scaffolding
  where there should be substance.

**The trap is honest rather than lazy:** an agent's memory does not survive the session, so externalising
everything *feels* correct — the canvas is the only persistent store. It is still premature. **When the
Composer says prepare, stay in memory. When they say build, trace or fix, go to the canvas. If unsure,
ask** — which is `protocols/presentation-checklist.md`'s question gate, arriving from the design side.

## 5 — A review surface needs three modalities, and any two leave a gap

| Modality | What it answers | Where it lives |
|---|---|---|
| **Annotations on nodes** | *where* — severity, coupled to the thing described | on the design; survives moves and renames (`tools/figma-method.md` rule 20) |
| **A navigable index** | *what* — one line per finding, one click to it | range hyperlinks (rule 21). **An index without link anchors is a list** |
| **A before/after board** | *how* — the evidence | exported captures, side by side, red before and green after |

**The test that keeps them honest:** a board carrying only descriptions and links is a second index. It
earns its existence by showing what changed, not by naming it.

## 6 — The craft of the artifact itself

**These are the Composer's rulings from the source session, recorded as rulings.** They are design
decisions, so they are not verifiable and do not need to be — the authority is the chair that holds
taste (`principles/core-principles.md`, the Composer Principle).

- **Export at 3× by default, 2× minimum, never below.** Designers read on HiDPI; 1× is muddy. The ceiling
  is the image pixel budget — see `tools/figma-method.md` rule 24 — so 2× is the practical maximum for a
  full screen and 3× fits a crop.
- **Highlight the smallest element that actually changed**, never its parent. If only a text layer
  differs, the callout points at the text layer.
- **The callout's shape is the element's shape.** A text node gets a sharp rectangle, a pill gets a pill,
  a card matches its radius. Atomic-level highlighting.
- **Padding tight and equal on all sides** — typically 4px at display scale. Oversized highlights on one
  screen overlap each other and lose their pointing power.
- **Two stroke rules.** Whole pixels for structure — never 1.5px, which blurs. **Hairline 0.5px for a
  callout**, because the semi-transparent fill is doing the attention work and the border is only a
  boundary.
- **Opacity is state, and it needs no legend.** Resolved items at 40% with strikethrough: readable on
  demand, skipped by the eye. **Never below 30%** — it must stay readable. **Always pair it with a text
  signal**, because opacity does not survive every display context, which is the Accessibility
  Specialist's objection answered inside the rule itself.
- **A text change is a text diff, not a screenshot.** Strikethrough the old in red, bold the new in green,
  one line — the diff model. A capture of an input bar showing different words adds nothing the diff does
  not already say, and costs an export, an image fill and a frame. **Capture when the change is visual;
  both when a text change alters appearance.**
- **Extend from within, never alongside.** Adding to an existing artifact means appending at the right
  depth inside it, not creating a sibling — a floating new frame reads to whoever is watching as a
  *replacement*, and they think you deleted their card. The hierarchy of insertion is canvas → section →
  card → row → element; pick the deepest level that serves the content.

## 7 — Verification is looking, not capturing

**A capture is the input to an observation, not the output of a task.** An agent that screenshots its
work and immediately reports done has performed a ritual. The cycle is: capture → **look** → list what is
wrong → plan → fix → capture again. Step two is the whole of it.

**Why the capture is not optional:** a property audit can confirm every fill, position and string
individually while the composed result overlaps, clips or misaligns. The capture is the only reading of
the composition. **This is why rule 19 died** — see `tools/figma-method.md`.

## 8 — Finding shapes worth carrying, with the instance stripped out

The source document's findings named a live engagement and are excluded. **The shapes generalise:**

- **The missing intermediate step.** A flow asserts an outcome — *corrections applied and re-validated* —
  with no state showing the person making them. The decision moment is invisible, and it is usually the
  only moment that mattered.
- **The missing cross-boundary handoff.** A flow declares a dependency on another in its own copy, and
  the only edge that ships points somewhere else. **The dependency is asserted in text and contradicted
  by the data.** Checkable mechanically: resolve every destination leaving the source subtree and test
  membership in the target.
- **The dead-end next action.** A terminal state offers a generic prompt where the system knows exactly
  what comes next. Anchored follow-ups derive from the last response; a placeholder is the absence of one.
- **Presence is not function.** A component instance can satisfy every tree query and render nothing.
  Measured twice on one file, on two different pages: **1,530 of 6,939 instances with zero children on
  one (22%), 2,064 of 12,025 on the other (17.2%)**, hidden at 12.7% and 6.0%. The rate differs; the
  pattern holds.

## What this page does not establish

The pass model, the Double Diamond framing and the three-modality claim are **one estate's experience,
recorded and unreplicated.** The craft in §6 is the Composer's and stands on his authority. The measured
items in §8 and the rules in `tools/figma-method.md` are this estate's own readings, dated. **Nothing
here has been run twice by two hands, and the difference is marked throughout rather than averaged away.**
