---
type: Method
title: "Finding a page — the card, the question, and why a page that mixes kinds bills every reader (Software Architect, Content Designer, UX Designer)"
description: "How this library is meant to be reached: not by reading its catalogue but by pulling a card — name, tags, a derived shelfmark and links — with entry points for a reader who does not know a name and a question back when the answer is too wide; and the cost rule underneath it, that a page mixing a lookup surface with rules and with history is paid for in full by every reader who wanted one line"
status: draft
serves_all: true
generated: { by: agent:ge-knowledgecenter, at: 2026-09-11T00:08:00+02:00 }
sources:
  - resource: https://raw.githubusercontent.com/jkornobis/GE-KnowledgeCenter/main/method/the-floor.md
    title: "The floor and the arrival"
  - resource: https://raw.githubusercontent.com/jkornobis/GE-KnowledgeCenter/main/start.md
    title: "start — the first fetch of any instance"
  - resource: https://www.ernestchiang.com/en/posts/2025/niklas-luhmann-original-zettelkasten-method/
    title: "Luhmann's original Zettelkasten — two slip boxes, fixed numbering"
  - resource: https://multimediaman.blog/2016/09/30/how-the-index-card-launched-the-information-age/
    title: "How the index card launched the information age"
---

# Finding a page

**Nobody enters a library and reads the index file of the librarian.** The Composer, 2026-09-10, and
it is the sentence this page exists to make operational.

**A catalogue is the librarian's instrument.** A reader asks, or goes to the section their subject
lives in. This library was telling every instance to read the catalogue first, and the catalogue was
the second-largest page it held.

## The cost rule underneath, because it decides how big a unit can be

**Everything read stays.** There is no keep-or-drop control: a page that enters a context is re-sent
in full on every subsequent request until the session ends. `method/the-floor.md` has the arithmetic.

⚠️ **So a page that mixes a lookup surface with rules and with history is paid for in full by a
reader who wanted one line of it.** Three measurements, three splits, one pattern:

```text
index.md        20 291 tok   48 % routes · 52 % conventions      -> 13 588 + a conventions page
presentation    29 891 tok   rules + the page's own changelog    -> autobiography removed
register.md     19 662 tok   a register + criteria + two passes  ->  9 003 + method + a record
```

**This is Diátaxis arriving from the cost side.** Reference, explanation and record have different
shapes; it turns out they also have different bills, and mixing them puts all three on one invoice.

**The test is not length.** A long page of one kind is fine. **A short page of three kinds is the
defect**, because two of the three are dead weight for whoever fetched it.

## How a page is actually reached

**Four moves, cheapest first, and each is only taken when the one before it does not reach.**

```text
1  the routing card    resident in start.md, keyed by the MOMENT of the work.
                       No fetch. Sixteen rows. Most sessions stop here.
2  a card              node card.mjs "<body>" — name, seed, tags, SHELFMARK, links.
                       The shelfmark is derived, never stored.
3  a structure card    --structure : nineteen entry points, one per cluster and family,
                       for a reader who does not know a body's name.
4  index.md            the complete route, and the only guarantee that nothing is unreachable.
```

**The index did not stop being the authority. It stopped being the first thing read.**

## The card, and what Germany added in 1951

**The card is old.** Linnaeus cut slips for species; the Viennese Imperial Library held 300 000 by
1780. **What Luhmann's Zettelkasten added was the address**: every card has a place, and
cross-references that jump to other places.

**A card that knows where it is and points at others is a graph node on paper.** So the corpus graph
is the real index, and a card is one node rendered for a reader: what it is, what it is tagged, which
pages hold it, and what it links to.

⚠️ **The shelfmark is derived on every read and never written down.** Not one of the corpus's 119
nodes points at a page in this library — every path field aims at another estate's trees — so the
address is computed from the pages themselves. **A stored shelfmark is a value copied out of a moving
source**, which is the defect this estate has met four times.

## When the answer is too wide, the librarian asks

**A card for a central body is a card for the whole library.** One body reaches 101 of 119 within two
hops. **Weighting by centrality is the obvious fix and it is the wrong one** — it drops what the
reader might have wanted and never says so.

**The signal for whether to ask is already in the graph: how many groups the neighbours fall into.**

```text
1 group      answer — there is nothing to ask
2 groups     a small choice
more         ask, showing every group and its size, and let the reader choose
```

**The question writes itself from the groups**, so nothing is invented and nothing is hidden. This is
the conversational half of what Luhmann did structurally by keeping his entry points outside the box.

## A task draws only what it pulls

**A task mandala is not built beside the meta-mandala. It is cut out of it.** Pull the cards a task
needs; draw only the edges between them. Five cards, seven edges, nothing else.

**A pulled card that connects to nothing else pulled is reported rather than hidden** — it is either
the wrong card or a real gap in the task's own reasoning, and the drawing cannot tell which.

## What this does not solve

**The card is one question deep.** A real reference interview iterates; this asks once and narrows
once, and nobody has used it enough to know whether a second question earns its turn.

**The routing card is hand-written and drifts** — three pages in two days, measured. It becomes
derivable only when the moment a page serves is a facet rather than a sentence, and that vocabulary
is not settled.

**And none of it reaches outside this library.** A third of these pages are about the outside world
and join to no corpus body; no card, no path and no question will find them. **They are reached by
the index, which is why the index is still the guarantee.**
