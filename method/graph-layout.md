---
type: Method
title: "Where a dot goes — the three layout families, and the claim a force layout cannot support (UX Designer, Design Engineer, User Researcher)"
description: "The three answers to where a node is placed — emergent, authored, hybrid — the ambiguity a force-directed layout carries and why viewers read it anyway, what a third dimension actually buys measured against what it costs, and the interaction features worth taking from tools built for graphs a thousand times larger than ours"
status: draft
serves_all: true
generated: { by: agent:ge-knowledgecenter, at: 2026-09-08T22:10:00+02:00 }
sources:
  - resource: https://www.cs.umd.edu/~ben/papers/Shneiderman2006Network.pdf
    title: "Network Visualization by Semantic Substrates — Shneiderman and Aris"
  - resource: https://journals.sagepub.com/doi/10.1057/palgrave.ivs.9500162
    title: "Designing Semantic Substrates for Visual Network Exploration — Aris and Shneiderman"
  - resource: https://journals.sagepub.com/doi/10.1177/20539517211018488
    title: "What do we see when we look at networks — relational ambiguity and force-directed layouts"
  - resource: https://cs.brown.edu/courses/cs237/2000/1999/ware.pdf
    title: "Evaluating stereo and motion cues for visualizing information nets in three dimensions — Ware and Franck"
  - resource: https://dl.acm.org/doi/10.1145/1279640.1279642
    title: "Visualizing graphs in three dimensions — Ware and Mitchell"
  - resource: https://arxiv.org/pdf/2304.09864
    title: "GeoGraphViz — a geographically constrained 3D force-directed knowledge graph"
  - resource: https://arxiv.org/pdf/2501.08500
    title: "Visual Network Analysis in Immersive Environments — a survey"
  - resource: https://neo4j.com/blog/graph-visualization/neo4j-graph-visualization-tools/
    title: "Graph visualization tools"
---

# Where a dot goes

Every graph drawing ever made answers one question: **what decides the position of a node?** There
are three answers, they are not interchangeable, and picking one without noticing is how a drawing
comes to say something nobody meant.

## The three families

| Family | What decides position | Where it is found |
|---|---|---|
| **Emergent** | The simulation. A node sits where the springs settled | Force-directed layouts — ForceAtlas2, `d3-force`, and every 3D force graph plugin |
| **Authored** | An attribute of the node. Position *is* a statement about it | Semantic substrates; any radial layout whose angle and radius are declared |
| **Hybrid** | Some coordinates are pinned by meaning, the rest are resolved by force | Constrained force-directed layout |

**Emergent** is the default everywhere, because it needs nothing but the edges. It scales, it looks
organic, and it costs no authorship. Its price is in the next section.

**Authored** is what Shneiderman and Aris named a *semantic substrate*: two to five non-overlapping
regions, nodes placed inside each region by their attributes, so that where a dot is drawn is a
claim about what it is. Their second move is the one usually forgotten and it matters as much as the
first — **a control over how many links are drawn**, because in their finding the clutter comes from
the edges, not from the nodes.

**The mandalas in this library are semantic substrates in polar coordinates.** Angle is the sector,
radius is the evidence. That was already true before the literature was read; the value of reading
it is the name, the prior art, and the link-visibility lesson that was never applied.

**Hybrid** is the least explored and the most interesting: pin the coordinates you can defend, let
the simulation settle the rest. GeoGraphViz is the clearest recent instance by its own title — a
knowledge graph in three dimensions with geography constrained and the remainder left to force.

## The claim a force layout cannot support

Venturini, Jacomy and Jensen wrote the honest paper about force-directed layouts: they carry
**relational ambiguity**. Distance in a force layout is not a measurement of anything. Two nodes are
near each other because of the whole system of forces, not because they are similar — and yet every
viewer reads proximity as similarity, because that is what proximity looks like.

⚠️ **So an emergent layout invites a reading it cannot honour, and the drawing gives no sign.** This
is the single strongest argument for authored positions when a corpus is small enough to author.
It is not an aesthetic preference. A force layout is a good *shared visual space* — a place to point
at things together — and a bad *instrument*.

## What a third dimension buys, and what it costs

Measured by Ware and Franck, and it has held up:

| Cue added | Size of graph readable at the same error rate |
|---|---|
| Stereoscopic depth alone | +60% |
| Motion parallax alone | +120% |
| Both | +200% |

With both cues, untrained observers traced paths correctly in **333-node** graphs at under 10%
error; trained observers reached **1000 nodes**. That is roughly an order of magnitude past flat
display.

**The costs are in the same work and must be quoted with the benefit.** People navigating in three
dimensions made **fewer errors but took longer to decide**. And there is a tax no setting removes:
**occlusion** — in 3D one node can hide another, and the only cure is to keep moving. Which is also
why **motion matters more than stereo**: rotation is not decoration, it is how the third axis is
read at all.

**The rule this yields: three dimensions buy capacity, never clarity.** They raise the ceiling on
how large a structure can be held at once, and they make every individual answer slower. Below a few
hundred nodes there is no capacity problem to solve, so the third axis has to earn its place by
*carrying an encoding* — not by existing.

## Interaction features worth taking

From tools built for graphs orders of magnitude larger than anything this orchestra holds. The scale
is irrelevant here; the moves are not.

| Feature | Why it earns its place |
|---|---|
| **A control on link visibility** | The cited fix for the hairball. Hide edges by type or degree until the question needs them |
| **Derived axes** — sparsity, eccentricity, Fiedler | An honest axis when no attribute is available. The Fiedler vector orders nodes so connected ones sit near each other: computed, reproducible, defensible |
| **Filter that highlights in place** | The subgraph lights up *inside* the whole, so the context being read is never lost |
| **Search as a primary route in** | Past a couple of hundred nodes, typing a name beats hunting a dot |
| **A camera bound to a target, and an animated transit** | Motion between two targets is what preserves orientation. A cut is cheaper and destroys it |
| **Scale-dependent detail** | Approaching must change *what* is drawn, not only how large. Otherwise zoom is magnification, and magnification teaches nothing |

The immersive survey adds direct hand manipulation and teleport navigation, with measured gains in
spatial understanding and reduced clutter — and names the open problems honestly: cognitive overhead
against 2D, and accessibility. Not a near-term road for a single reader at a desk.

## How to choose, in one pass

1. **Can you name what the position should mean?** If yes, author it. An authored layout is the only
   one whose distances can be read.
2. **If not, is the corpus too large to author?** Then emergent, and say in the legend that distance
   means nothing. The ambiguity is only a defect when it is unannounced.
3. **If part of it can be named**, that is the hybrid case: pin those coordinates, let force settle
   the rest, and be explicit about which axes are claims and which are residue.
4. **A third dimension is added only when an axis has something to carry.** Depth for depth's sake
   buys occlusion and pays nothing back.

## What is not verified here

**The GeoGraphViz method was not read.** The fetch returned unparsable binary, so this page cites
the paper for the approach its title states and for nothing else. Anyone building the hybrid case
should read it first rather than trusting this summary.

The Ware and Franck figures come from a 1996 study whose display hardware no longer exists. The
*direction* of the finding — motion beats stereo, 3D buys capacity and costs time — has been
reproduced since; the exact percentages should be treated as an order of magnitude, not a
measurement of a modern screen.

## Where this sits in the corpus

**Not a graph edge — a claim by this page about what it stands next to.**

**`Episteme vs. doxa`** — *the known unknown*. **A force-directed layout is a doxa machine that
renders as episteme.** Its distances are opinion produced by a simulation, and they arrive drawn
with the same authority as a measurement. The principle asks that the two be told apart; this page
says the drawing gives no sign, which is why the telling has to be done in the legend.
