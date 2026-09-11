---
type: Method
title: "Reading the whole — the cheap signal substituted for the one that was asked for"
description: "Why a worker with a summarising tool acts on the head, the tail, the count or the status code instead of the thing itself, the asymmetry that makes the rule survive a token budget, and eleven dated occurrences behind it"
status: draft
serves_all: true
generated: { by: agent:ge-knowledgecenter, at: 2026-09-11T11:20:00+02:00 }
---

# Reading the whole

**Read the whole of what you act on.** A file, a diff, a result set — entire, not the head and not the
grep hit. **If it is too big to read whole, narrow the *task* and say so — never the read.**

The Composer named it *"Read all"* and gave it its test:

> **A scrollbar is proof you have not read it all.**

## The shape underneath, and it is not about reading

⚠️ **A signal that is CHEAP to obtain is substituted for the one that was asked for.** The scrollbar
is the most visible instance and not the general case:

| asked for | substituted | why it passes unnoticed |
|---|---|---|
| the file | the head | the head is well-formed, and a well-formed fragment reads like a whole |
| the report | the tail | a report ends with its conclusion, so the tail *is* a summary — of the run, not of the content |
| the content | the count | a count is a fact about the set and is mistaken for a fact about its members |
| the body | the status | **a status code is about the transport**, and the transport succeeded |

**The last row is the one that generalises.** A page was served on a port another service already
held. The bind **failed**, the server was dead, and `curl` returned **HTTP 200 from the other
service** — read as *"my page is up"*. Nothing about that is a reading failure. **A status code from
the wrong service is not verification**, and the same sentence covers all four rows.

## Why this survives a token budget when *be careful* does not

**The costs are not in the same currency.**

```text
a read            spends CONTEXT — bounded, visible, budgeted, and spent once
a write built
on half a read    spends WORK — the write, the review, the correction, and the
                  argument about whether it was wrong
```

**An economy on the read is a loan against the work**, and the interest is paid by whoever reads the
result. That is why the rule is stated as an asymmetry rather than as care: care is a disposition and
loses to a budget, an asymmetry is an argument and does not.

## The evidence: eleven occurrences, all dated

**Ten of them are one estate's ledger, assembled by the instance that hit them and sent here as
evidence rather than as a draft** (`GE-Workshop`, on this library's `#70`, 2026-09-09). They are
reproduced as *shapes*, because a library that carries no estate should not carry one estate's
incident numbers either. **The eleventh is this library's own, from the day this page was written.**

**Row A — the first actionable item is acted on as if it were the whole (6).**

```text
a guide offering two routes in one sentence, and the first one taken as the route
a browser named repeatedly by the Composer, and a different one used instead
a 49-line paste called verified from its last 19 lines
a ticket whose description ended mid-sentence, with a full scope analysis written from
   the half above the fold -- AND THE TRUNCATION WAS VISIBLE IN THE SCREENSHOT
a resume block read and acted on for five hours while the roadmap beside it was never
   opened -- and a note added to it that same day forbade the exact action proposed
```

**Row B — a tool's summary is acted on rather than its output (4).**

```text
a row deleted as "matching nothing", having read the tables and not the paragraph six
   lines above saying it was deliberately left alone
an issue filed from a gate reporting 0 of 12, while the thing measured says in its own
   text "empty, deliberately -- the intended state, not a defect"
an issue filed as "fourteen dead references" from the last 14 lines of a 91-line
   report; the real figure was 84
a status code from a service that was not the one under test, read as the service
   being up
```

**Occurrence 11, 2026-09-11, this library.** An instance was about to ask another why two issues had
been sitting untouched for two days. **It read the threads first, and one of the two had been waiting
on itself since the moment it asked for the evidence** — which arrived the same afternoon, was
acknowledged, and was never acted on. **The nudge would have been wrong in the most expensive
direction: a correction aimed at someone else's clock.**

⚠️ **That the eleventh was caught rather than committed is not evidence the rule is working.** It is
one instance reading one thread on one morning. **Ten of eleven were found afterwards**, which is the
honest base rate of a rule that has no gate.

## What this page does NOT say

**It does not say read everything.** It says the *task* is what gets narrowed when the source is too
large — and that the narrowing is **stated**, so a reader knows which part was read. *"I read the
first section and acted on it"* is a method; *"I read it"* about a first section is a defect.

**It does not say a summary is useless.** A count, a tail and a status are all correct answers to
their own questions. **The defect is substitution, never the instrument** — and the instrument's own
answer is usually right about the instrument.

**And it does not make anyone careful.** The only thing that has ever caught one of these is another
read: a positive control, a second instrument, or a thread nobody had opened.

## Where its cases live

| case | page |
|---|---|
| an issue surface — a body is where an issue opened, the thread is where it stands | `method/reading-a-tracker.md` |
| a negative result — *a check that can only pass proves nothing* | `method/evidence.md` |
| a measurement — what a number was taken against | `protocols/library-conventions.md` |

**They are the same rule at four altitudes**, and each was written after its own occurrence rather
than deduced from this one. That is how the class was found at all: **nobody set out to write this
page, and the ledger that made it countable belongs to somebody else.**

## Where this sits in the corpus

**`The Absolute Ear`** — *right function, bad parameters*. The corpus's own note on it is the
sentence this page is a case of: **the comparison was available the whole time, and the failure is
not making it.** An ear with absolute pitch names a note with no reference tone, so nothing external
has to fail first — the judgement was already inside, and the wrong note is winced at rather than
deduced.

**Every one of the eleven occurrences has that shape.** The instrument ran correctly and answered
the question it was given: `tail` returned the last fourteen lines of ninety-one, `curl` reported
what the socket returned, the screenshot rendered the truncation faithfully. **Nothing failed.** The
parameters were wrong, and the whole of the thing was within reach the entire time — which is why
*"a scrollbar is proof you have not read it all"* is a test and not an exhortation: **it points at
evidence already on the screen.**

**`Episteme vs. doxa`** — the four substitutions are each a belief taken for knowledge, and the
belief is cheap for the same reason it is wrong: it cost one call instead of a read.

⚠️ **The corpus is authored elsewhere and this section is a claim by this page, never an edge.** What
is asserted here is that *this library's rule depends on that body* — which is the only thing that
obliges an explanation, and the reason the explanation is above rather than promised.
