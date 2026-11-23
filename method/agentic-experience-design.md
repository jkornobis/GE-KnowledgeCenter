---
type: Method
title: "Agentic experience design — what one article on AX offers a library and a workshop that already work with agents"
description: "A study of one article that argues designing for agents is a new discipline, AX, with three roles (detective, enabler, builder) and a four-step method: what it claims, the vendor interest of its author, how its roles and steps map onto the twelve chairs, the Grand Auditorium and the pilot without adding a chair, and the two things it adds — a test for any unattended run and a list of questions for a Why diamond on an automation field"
status: draft
card: none
serves: [Product Owner, User Researcher, Software Architect, Software Engineer, Agile Auditor]
generated: { by: agent:ge-knowledgecenter, at: 2026-11-18T16:20:00+01:00 }
sources:
  - resource: https://medium.com/design-bootcamp/what-is-ax-design-why-do-we-need-this-new-role-e21dff4dd541
    title: "What is AX Design? Why do we need this new role, Flavio Lamenza, Bootcamp, 2026-06-08 — read in full from a saved copy the Composer supplied on 2026-11-18; the address itself refused an automated fetch (403) and a headless browser returned nothing"
---

# Agentic experience design

Studied 2026-11-18 at the Composer's request, to see whether it could help the library or the Workshop.
**One article, read in full. Nothing here is installed, and no chair is added: the twelve are fixed.**

## What the source is, and its interest

A Medium article by a UX designer, dated 2026-06-08. **Its author works at an agentic-platform vendor that
the article says is hiring what he believes is the first AX role, and he says he is considering the move.**
He calls himself still learning, and the article gives no measurement. Treat it as a practitioner's argument
from a party with something to gain, not as evidence.

## What it claims

- **AX means Agentic Experience, and it is a new discipline, not an evolution of UX.** It lives inside a
  business: building internal tools and optimizing internal processes autonomously, for a business
  objective that may not be a user need. Using an assistant at home to buy something is still UX.
- **Companies fail at agents because nobody asked the right questions first.** The value is the question UX
  already asks, *should we build this?*, put before the agent exists.
- **Three roles.** The *detective* asks the questions before an agent is built. The *enabler* makes design
  systems, APIs and platforms readable by agents ("agents don't click buttons, they need a tool
  description"). The *builder* writes the guardrails, specifications, skills and plugins an agent runs on.
- **A four-step method:** map the process as it really runs; decide whether automating it is right; specify
  what correct execution looks like; prototype what great looks like.
- **The territory of the agent.** Given a goal, rules and guardrails, the agent's path is not fully
  predictable by a person. The designer defines inputs, success and guardrails, not the path.

## How it maps onto what is already here

| The article | Already here | What it adds |
|---|---|---|
| Ask why before how; it cites the double diamond and says real practice skips the first diamond | The Grand Auditorium's Why diamond and the Composer's stop (`method/double-diamond.md`) | Independent prior art for the shape. Its warning, that the first diamond is the one dropped in practice, is the reason the stop exists |
| Step 3: *if this runs 10,000 times overnight, how would you know it worked, and what would prove it?* | A verification needs an external artifact; the NOT-CHECKED outcome proposed on `GE-Workshop#330` | A test to apply to any unattended run, not only to gates |
| The enabler: an agent reads a description, decides whether to call it, interprets the result | The index rows, the routing card, `check_findability`, the pilot (`method/double-diamond.md`) | The same lens the pilot used: the reader is an agent |
| The detective's questions, including rules that live in someone's head and were never written down | The pilot's five missing pages | A question list for a Why diamond on an automation field, below |

**The roles are not chairs.** The detective is the Product Owner with the User Researcher, the enabler the
Design Engineer with the Software Architect, the builder the Software Engineer with the Content Designer.
Adding an AX chair would substitute for the twelve, which the roster forbids.

## The test, for any unattended run

**For a run that happens while nobody watches, write down two lines:** what would prove that it worked, and
what would be seen if it failed silently. A run that cannot say the first line has nothing to prove, and one
that cannot say the second fails unseen. Measured on 2026-11-15, one such run answered the first line
wrongly: the freshness script, with its default folder, printed that every tool page was verified after
reading none (`method/keeping-pages-true.md`). `protocols/pane-guard.md` already rules what may run
unattended, by register; it does not ask what proves a run worked.
**The rule form, with two labelled lines a check can find, is `method/unattended-run-test.md`.**

## Questions for a Why diamond on an automation field

From the article's detective, to put to the chairs of a field before any How:
1. Which of this field's processes are worth automating, and which should stay with a person?
2. What rules does this field follow that live in someone's head and were never written down?
3. What does correct execution look like at scale, and how would we know overnight that it did not happen?

## Limits, stated once

The article is one practitioner's view, and other writers use the same letters for *agent* experience or
disagree that it is a separate role. The mapping is this library's reading, not the article's. The article
concerns business-process automation, which is a different field from a method library, so only its
method transfers.

## What would test the use

Apply the test above to three unattended runs the estate depends on and record, for each, the two lines
and whether the run could state them. That is the Workshop's inventory, requested on its tracker.
