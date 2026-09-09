---
type: Protocol
title: "Surfaces — which one carries what, and where to go when these rules do not reach (Content Designer, Agile Facilitator)"
description: "Three surfaces and the one question that picks between them: the message carries the decision, the page carries the explanation, the table carries the data — plus the named authority to defer to when no rule here covers the case"
status: draft
serves_all: true
generated: { by: agent:ge-knowledgecenter, at: 2026-09-08T17:22:00+02:00 }
sources:
  - resource: https://diataxis.fr/
    title: "Diátaxis — a systematic framework for technical documentation"
---

# Surfaces — which one carries what

**Three surfaces, and one question picks between them: what does the reader have to do with it?**

| Surface | Carries | Because |
|---|---|---|
| **the message** | the decision, and what it costs | it is read once, in sequence, and cannot be searched |
| **a `.md` page** | the explanation, the evidence, the account | it is re-read, linked, cited, and it survives the session |
| **a table** | data with more than two dimensions | a reader compares rows; prose makes them hold values in their head |

## The message carries a decision, never an explanation

⚠️ **Prose bombing** — the Composer's name for it, 2026-09-08 — **is a long explanation delivered
into a conversation.** It fails twice at once: **it is unreadable now**, because a chat is read in one
pass with no way back; **and it is lost immediately after**, because nothing indexes it.

**So a long explanation goes to a page, and the message carries three things and stops:**

```
what it is        one line
what it gains     what changes for the reader
the link          the address of the page that holds the rest
```

**The test before writing a paragraph into a message:** *does this change what the reader decides, or
is it how I got there?* **How you got there belongs on the page.**

## A page is written to be re-read, which changes how it is written

**A message is linear; a page is entered from anywhere.** So a page states its subject before its
argument, survives being read out of order, and **carries its own sources** — because the session
that wrote it will not be there to be asked.

**If a page is only ever read once, it should have been a message.** The reverse test is the useful
one: a page nobody returns to was a decision written in the wrong place.

## A table is for comparison, and it is wrong three ways

**Use one when the reader compares rows.** Do not use one when:

- **there is one row** — that is a sentence wearing a grid
- **a column would be empty for most rows** — a phantom column costs width and says nothing
- **the cells are prose** — a table of paragraphs is worse than the paragraphs, because it adds
  alignment to the reading cost without adding comparison

**And a table is a view rather than a store.** What it ranks lives somewhere with a history; the
table is rebuilt from that and thrown away. `method/ranking.md` holds that rule and its consequences.

## When no rule here reaches the case

**Defer to [Diátaxis](https://diataxis.fr/).** Ruled by the Composer, 2026-09-08.

**It is named because it answers the question these rules leave most open: what SHAPE a document
should take.** Its claim is that documentation serves four distinct needs — **tutorial, how-to,
reference, explanation** — that these are not interchangeable, and that *"documentation should itself
be organised around the structures of those needs."* It addresses content, style and architecture,
and it explicitly does not impose an implementation.

⚠️ **It is a fallback, not a superior authority.** Where these rules speak, they win: they are this
estate's, decided by its Composer, and a general framework cannot know what a Score Key says. **Reach
for Diátaxis when there is no rule, not when there is one you dislike.**

### The library measured against it, 2026-09-08

**This section replaced an assertion.** It said *"most pages here are explanation laid out as
reference"* — the failure Diátaxis is best known for naming. **It was written without measuring, and
the measurement does not support it.** Eighty-four pages, layout counted mechanically as the prose
share of each page's non-heading lines, kind assigned by rule from the page's own `type` and subject:

```
kind \ layout      explanation-shaped   mixed   reference-shaped   total
explanation                        18      13                  5      36
reference                           6       9                 29      44
how-to                              2       1                  1       4
```

**Explanation-dressed-as-reference is five pages, not most** — `mandalas/protocols-layer.md`,
`method/multiagent_canon_audit.md`, `tools/chair-levers.md`, `protocols/presentation.md`,
`method/prior_art_bmad.md`. **And the opposite mismatch is slightly more common at six**: tool pages
carrying a card's worth of facts in nine-tenths prose — `cowork`, `claude-desktop`,
`figma-mcp-desktop`, `pdf-reading`, `wekan`, `forgejo`.

⚠️ **What the audit did find is not a mis-shaping at all. It is that two of the four kinds barely
exist here: four how-to pages out of eighty-four, and no tutorial.** Everything is *why* or *what*;
almost nothing is *how to do a thing*. **Whether that is correct for a library read by instances
rather than by people learning is an open question and not this page's** — it is filed rather than
answered.

**And the episode is the argument for naming a fallback, more than the finding would have been.** An
instance asserted a plausible failure in its own library, in a page about presentation, and the
framework it had just adopted is what made the claim checkable. **The value was the check, not the
verdict.**

## What this protocol deliberately does NOT do

**It does not cover the host's own surfaces** — a task panel, a plan mode, an issue tracker. That is
`method/ranking.md`, which also carries the test of whether any of them **persists**.

**It does not choose a syntax or a style guide.** What renders is settled by whatever parses the file;
how prose reads is `protocols/presentation.md` and the Composer's Score Key.

**And it names one authority, not three.** Two more were on the table — a syntax spec and an editorial
style guide — and were **rejected as fallbacks for the same reason: they answer questions this estate
has already answered.** A fallback list long enough to need routing is a second set of rules.

## Where this sits in the corpus

**Not a graph edge — a claim by this page about what it stands next to.**

**`Show, don't tell`** — *showing is cheaper to judge than telling*. **That protocol says which
register to use; this page says which surface carries it.** A thing shown in the wrong surface is
not cheaper to judge — a table of prose and a page nobody returns to both cost the reader more than
the telling would have.
