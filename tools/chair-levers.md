---
type: Method
title: "The chair levers — what a seat requires, and the bar it must clear"
description: "The taijitu model behind every tool page: what a chair requires versus what an occupant carries, the bar a lever must clear to become a seat's canon, and four dated rulings on which chairs break without which lever"
status: draft
serves_all: true
generated: { by: human:jkornobis, at: 2026-08-26T00:01:38+02:00 }
---

# The chair levers — what a seat requires, and the bar it must clear

Audited 2026-08-26 by User Researcher. Derived from `roster.md` by splitting it along the line that file already draws: **what a chair requires is the seat's canon; who occupies it and what they carry is one estate's record.** The second half stays home.

Re-audit: 90 days — default, not measured (this is a model plus four rulings; it moves when a Chair Review moves it, not on a vendor's clock)

**Chair:** all twelve. **Lineage:** none — this is the model the tool pages hang from, not an instrument.

## The taijitu, which is the whole model

A musician is read left to right (ADR-199):

- **Levers the chair requires — Yin.** The seat's canon. **Durable; it outlives every occupant.** Cites lever names from the register.
- **Products the occupant carries — Yang.** The toolset. **Transient by nature; moving is what it does.**

**The citation is one-way.** The roster cites the register, never the reverse. A substitution therefore moves only the products column — **the required levers are unchanged by definition**, which is exactly what makes them the chair's rather than the musician's.

**Promotion from a product to a chair requirement is earned in a Tool Audit, and only when the chair would be *broken* without that lever, whoever sits in it.** The lever's domain is irrelevant: a tool that touches neither code nor UI design can still become basic kit.

## The bar, and why it is not "does this help"

**What makes a tool *shared* rather than a *lever*: a chair that did not have it would be *inconvenienced, not broken*.** That single test is what stops a roster becoming an inventory.

**Two of the first four levers reviewed earned nothing.** Serving a lever and breaking without it are different bars, and **a review that promotes everything it is shown is a rubber stamp with a table attached.**

## What each chair requires

**One estate's rulings, dated and attributable — not a universal answer.** Another estate reviewing the same levers may rule differently, and that disagreement is a finding rather than a conflict.

| Chair | Requires (Yin) | Ruled |
|---|---|---|
| Agile Facilitator | — | not reviewed |
| Agile Auditor | — | not reviewed |
| UX Designer | **none, and deliberately** — a designer with no tool at all still holds the chair's canon | 2026-08-08 |
| Design Engineer | `moves-tokens-between-design-and-code` | 2026-08-05 |
| Accessibility Specialist | `reads-a-running-interface` | 2026-08-05 |
| Software Engineer | — | not reviewed |
| QA Engineer | `reads-a-running-interface` | 2026-08-05 |
| Content Designer | — | not reviewed |
| Product Owner | — | not reviewed |
| User Researcher | — | **open** — web research may be a lever for this chair alone: its output is *findings + sources*, and with no web reach there is no source, which is the break test rather than the inconvenience test. A Chair Review, unresolved |
| Software Architect | — | not reviewed |
| Reliability Engineer | — | not reviewed |

### The four rulings, with their reasoning

| Lever | Verdict | Why |
|---|---|---|
| `reads-a-running-interface` | **Revise** | required by QA Engineer + Accessibility Specialist; UX Designer, Design Engineer and Reliability Engineer stay `Serves:` |
| `audits-accessibility-mechanically` | **Drop** | already in the Accessibility Specialist's canon, with a published ~30–40% automated-coverage ceiling. An instrument that catches a minority **scopes** manual work; it is not something a chair breaks without |
| `generates-editable-design-layers-from-intent` | **Drop** | nothing breaks; and it is a *writing* lever whose guard is unwritten. Putting generation into a seat's canon ahead of its guard inverts the order |
| `moves-tokens-between-design-and-code` | **Revise** | required by the Design Engineer **alone**; UX Designer, Software Engineer and Software Architect hold pieces of the pipeline without breaking without it |

## Two blanks that look identical and mean opposites

**A chair with no required lever may be unexamined or may have been ruled on, and the table must say which.** Ten of the twelve above read `not reviewed` because nobody has looked. The UX Designer's blank is a **decision**: asked whether that chair carries its main tool or only requires a lever, the answer was *carry* — so the Yin stays empty on purpose.

**The two design-side chairs came out opposite, and it is the model working rather than an inconsistency.** The **Design Engineer *is* the design↔code seam** — remove token movement and no seam is left to hold — so **that chair's identity is its requirement, and its kit is genuinely free**: a future occupant may satisfy the lever with an entirely different chain and the row is unchanged. The **UX Designer requires nothing at all** and what it has is a *carried product*. One chair specialised in **Yin**, the other in **Yang**. Different columns, both deliberate.

## A carried product is a pointer, not the product

*"A documentation of how musician can interact to do the levers."* **A tool's name is inventory; the product is the know-how**, and it lives one file per musician — with its own cadence per product, because a living tool evolves faster than an established one and **one clock for all of them is wrong by construction**.

A file written before its musician has handled the instrument is **plausible documentation**, which is why an absent one is better than a stubbed one.

## What is deliberately not here

**Occupancy** — who sits in each seat, what they currently carry, and every dated substitution — **is one estate's record and stays in that estate's `roster.md`.** So does its list of tools shared across its own twelve chairs: a repository, a client, a browser pane and a shell are shared *by that orchestra*, not by every orchestra.

**The rule this page exists to honour: there is no empty chair.** Twelve seats, twelve occupied, always — and a change of occupant is written down at the moment it happens, or it did not happen.
