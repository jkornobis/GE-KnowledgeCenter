---
type: Method
title: "AI assistant interaction patterns — state-driven surfacing, and the recursion underneath it"
description: "Three patterns for a surface where an assistant mediates between a person and a process: why a static action menu is the absence of intelligence, why context-awareness and state-awareness are two different layers and only one of them is hard, and why every review board turns out to be case management"
status: draft
serves: [UX Designer, Product Owner, Content Designer, Software Architect]
generated: { by: agent:agile-facilitator, at: 2026-09-02T16:20:00+02:00 }
---

# AI assistant interaction patterns — state-driven surfacing, and the recursion underneath it

Recorded 2026-09-02 from a methodology document authored by **another GrandEnsemble instance**, supplied
by the Composer, and screened for instance material per `index.md`. These three sit at the end of that
document, numbered from a different list and appended after its own sign-off — **they are a separate
subject from the design-review methodology** in `method/design-review.md`, which is why they are here.

**Provenance, stated once.** The three patterns below are attributed in the source to the **Composer**,
with quotations. They are design and product judgements, so the authority is his and there is nothing to
verify — but they are recorded as *his rulings from one session on one product*, not as findings this
estate reached. **Nothing here has been tested against a second product.**

## 1 — Proactive actions replace static menus

**The quoted ruling:** *"The AI reads context and proposes the right next move. Static menus become
obsolete when intelligence replaces enumeration."*

A hidden dropdown of generic actions is **a crutch for a system that does not know what to suggest**. The
alternative is that the assistant reads the current state of the item — what is done, what is blocked,
what is overdue — and surfaces specific actions inline. Each one says **what** it does, **why** it is
relevant now, and executes in one click.

**The scale is the point.** This is not micro-management of a single field; it is easing an entire
workflow. The assistant becomes an analyst rather than a menu.

**Three tiers, and the tiering is the communication:**

| Tier | What it carries |
|---|---|
| **Primary** | the recommended action, visually weighted |
| **Alternative** | valid, less urgent |
| **Escape** | cancel, defer, modify |

Tiering communicates priority **without asking the person to evaluate every option equally** — which is
the cost a flat menu imposes and never names.

**The audit that falsifies it:** if every item in a queue shows the same actions regardless of state, the
actions are not intelligent. That test is mechanical and takes one pass over the queue.

## 2 — Context-aware is not state-aware, and only one of them is hard

**The quoted ruling:** *"These actions are context-aware but not current-state aware."*

Two layers, routinely collapsed into one:

- **Context** — *who or what* the entity is. It **filters** the action vocabulary. A document gets
  document actions; a person gets person actions.
- **State** — *what is happening now* with that entity. It **ranks and surfaces** the urgent ones.

Most action surfaces are context-only: the same actions whether the item is blocked, overdue, or closed.
Adding the state layer is what separates **a phone book from an analyst** — a phone book returns every
number for a name; an analyst says which one to call now, and why.

**Consequence for the fallback:** generic entity actions belong at the bottom, reached when nothing is
urgent. They are not the default.

## 3 — The pattern is recursive: every collaboration surface is case management

**The quoted ruling:** *"This logic applies to your review board itself — select a context, then the
options you have to act on a finding. The pattern is a template of how to work on any surface with AI."*

The pattern does not stop at the product being designed. **It applies to the process that designs it.**

A review board on a canvas *is* a case management system: each finding is a case, with a state (open or
resolved), a diagnosis, and contextual actions — fix, explore further, withdraw. The canvas is the
assistant's workspace in the same way the product is the end user's.

**The meta-pattern, at every scale:**

```
detect state  →  diagnose  →  surface contextual actions  →  execute  →  transition state
```

Task boards, code review threads, design critique sessions, support queues — instances of one shape.
**Recognising the recursion is what stops you building a bespoke flow for each.**

**The test:** if you are building a surface where items have states and people need to act on them, you
are building case management, whatever it is called.

## Where this connects, and where it does not

`method/design-review.md` §5 describes a review surface with three modalities; **pattern 3 above is the
claim that the surface is itself an instance of the product pattern.** That is a satisfying loop and it
is exactly the kind of claim to hold loosely — the source reached it in one session on one product, and
a pattern that explains everything explains nothing. **What would test it:** apply the state-detection
audit from §1 to a surface that was *not* designed with it, and see whether the finding is actionable or
merely restates that the surface is generic.

`chairs/product_owner_references.md` holds the outcomes-over-outputs canon these sit under. The
interaction half has nowhere to route: **the UX Designer has no reference page in `chairs/` at all**,
and neither does the Design Engineer — see the `Observed, not yet decided` register in `index.md`. The
path is not written here, because writing a path this library does not hold is the defect the index
spends a whole section forbidding.
