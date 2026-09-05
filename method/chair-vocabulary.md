---
type: Method
title: "Chair Vocabulary — the same thing under every name it is called (Content Designer)"
description: "The names one concept answers to across chairs, families and surfaces, so knowledge can be found when it is filed under a word you did not search for"
status: draft
generated: { by: human:jkornobis, at: 2026-09-05T09:20:00+02:00 }
---

# Chair Vocabulary — the same thing under every name it is called

**This is not `method/orchestra_glossary.md` and it must not be merged into it.** That page is a
**dictionary**: one definition per term, *"so no word means two things."* This page is a **thesaurus**:
one concept, all its names, *so a thing can be found when it is filed under a word you did not search
for.* The two solve opposite failures and neither substitutes for the other.

**The Composer, 2026-09-04:** *"I try to implement glossary between chair, because they name
differently the same thing."*

## The failure this exists to prevent

An instance asked whether a documentation site knew about this library. It searched three spellings —
*Knowledge Center*, *GE-KnowledgeCenter*, *knowledge-center* — and got **zero across fifty-four
pages**. It concluded the site described an older architecture.

**The conclusion was withdrawn the same day.** The site referred to the library constantly, as *the
deep score*, *field references*, *the Harp*, *Framing*. **Zero hits for three spellings is not
evidence about a concept.**

The Composer's correction is the rule this page is built on:

> *"You grep too much and rely on exact regex — knowledge is a word derived from a word derived from
> a word."*

**A matching instrument tests spellings. A concept with several names defeats it, and returns nothing
in a way indistinguishable from absence.**

## The four families and the twelve chairs

Every chair belongs to a family, and **each family answers to at least three names**: the family, the
activity it performs, and the chairs inside it. Documentation organised by any one of them is
invisible to a search using another.

| Family | Also called, as an activity | The chairs inside it |
|---|---|---|
| **Harp** | *framing* — deciding what is worth doing, and why | Product Owner · User Researcher |
| **Strings** | *interface craft* — what the person sees, reads and touches | UX Designer · Content Designer · Design Engineer |
| **Brass** | *build and run* — making it exist and keeping it alive | Software Engineer · Software Architect · Reliability Engineer |
| **Woodwinds** | *quality standards* — whether it is correct and reachable | QA Engineer · Accessibility Specialist |
| **The spine** *(not a family)* | *coordination and oversight* | Agile Facilitator · Agile Auditor |

**The spine is deliberately not a fourth family.** Its two chairs route and observe rather than
produce, and grouping them with the producing families would imply a symmetry that is not there.

## Aliases that have already caused a defect

Recorded because each was found by an instance looking for something and failing to find it, not by
an audit of names.

| The thing | Names it answers to | The defect |
|---|---|---|
| **This library** | *Knowledge Center* · *the library* · *the deep score* · *field references* | Three spellings searched, fifty-four pages, zero hits — while the concept was on many of them |
| **A chair's field knowledge** | `chairs/<chair>_references.md` here · a *family* page elsewhere | One page in one place is two or three files in the other: the granularities differ, so even a correct name finds the wrong number of things |
| **Software Engineer** | `chairs/engineer_references.md` | **Ambiguous across four chairs.** Software, Reliability, Design and QA all end in *Engineer*; the file's own title says *Software Engineer* and its name does not |

## The rule that keeps this page honest

**A name is added here when a search failed, never when someone notices two words are similar.** The
third column is not optional decoration — an alias with no recorded cost is a guess, and a page of
guesses is worse than no page, because it will be trusted.

**And this page cannot be complete.** It records the names that have already cost something. The next
one is unknown by construction, which is why the rule above is *a search failed* rather than *we
listed them all*.

## How to use it

**Before concluding that a concept is absent, check whether it is present under another name here.**
A zero result from a matching instrument is a statement about the spelling searched, never about the
concept — which is `principles/core-principles.md`'s oracle rule reaching one layer further: an
instrument's silence names where it looked, not what is there.

## Two gaps this page's first application found

**`chairs/` holds ten reference files for twelve chairs** — UX Designer and Design Engineer have none,
which is already recorded as an open issue here. **The join adds something to it:** that knowledge
exists, written and tiered, on a documentation site that files it under the *Strings* family instead
of under either chair's name. **It is not missing; it is filed under a word this repository does not
use.** Whether it should travel is a separate question, and the Composer's.

**One filename contradicts a rule the system states elsewhere.** `chairs/engineer_references.md`
shortens a chair to *Engineer*, which is ambiguous across four of the twelve. Renaming it is not
proposed here — this page records names rather than changing them — but the ambiguity is the exact
shape this page exists to make visible.
