---
type: Method
title: "The floor and the arrival — what a session costs before its first word, and what dominates after (Reliability Engineer, Agile Facilitator, Product Owner)"
description: "A session's floor is the prompt that exists before any work: measurable in four lines of arithmetic from a transcript, reproduced here on two independently configured instances, with the finding that the floor dominates an arrival and is a small minority of a whole session — so the three economies available are not the same economy and do not pay in the same place, the third being that a pause past the cache lifetime re-buys the whole accumulated session at the write rate"
status: draft
serves_all: true
generated: { by: agent:ge-knowledgecenter, at: 2026-09-10T21:22:00+02:00 }
sources:
  - resource: https://raw.githubusercontent.com/jkornobis/GE-KnowledgeCenter/main/method/capacity.md
    title: "Capacity — how a session reports its own usage"
---

# The floor and the arrival

**A session's FLOOR is the prompt that exists before any work has been done.** No file read, no
question asked, no tool called. It is what the first request pays for simply by existing.

**It has never been measured in this estate, and it is four lines of arithmetic.**

## How to measure it — on yourself, from your own transcript

Every assistant message carries a `usage` block. **Deduplicate to one row per API request**, because
a single response is written to the transcript in several chunks and each chunk repeats the same
usage:

```text
per request:   cache_creation_input_tokens   what the prompt GREW by, written at the write rate
               cache_read_input_tokens       what was re-sent from cache
               output_tokens                 what was produced
the floor  =   request 1's write + read
```

**That is the whole method.** It is exact — these are billed figures, not estimates — and any
instance can run it on itself in one pass.

⚠️ **Do not mix it with file sizes.** A `chars ÷ 4` estimate of what is *in* the floor is useful for
attribution and is approximate; the transcript figures are not approximate, and quoting the two in
the same table without saying which is which is how a measurement becomes a guess.

⚠️ **And the divisor is a convention rather than a fact.** This page first used `÷ 3.7` and the
Workshop's tooling uses `÷ 4`; the two disagree by about 8 %, which is enough to make two instances'
attributions incomparable while both look precise. **The estate uses 4.** Any figure derived with a
different one must say so.

## Two instances, measured independently

**The Workshop measured its own arrival on 2026-09-10 and this library reproduced the method on its
own transcript the same evening.** Different repositories, different floors, different work.

```text
                         Workshop      this library
floor (request 1)          43 845            39 780
arrival requests                6                 6
arrival cache_write        35 752            28 758
arrival cache_read        251 602           229 410
arrival output              3 581             2 007
weighted equivalent        87 755            68 924
   cache_write share          51 %              52 %
   output share               20 %              15 %
```

**The floors differ by 4 065 tokens and the cache_write share differs by one point.** That is the
finding: **the absolute size of a floor is local, and the SHAPE of an arrival is not.**

## Why an arrival is expensive, and it is not the reading

**Session start is six requests, not one** — each waits on an answer, so each is a separate round
trip, and **each one that grows the prompt writes a new cache segment at the most expensive rate.**

⚠️ **`cache_write` is more than half the weighted cost of an arrival on both instances.** Six small
growth steps pay the write premium six times. **An arrival that is six turns long pays six times for
the privilege of being cheap to re-read afterwards.**

**So the economy at arrival is not *read less*. It is *grow the prompt fewer times*** — every
determinable lookup issued in one parallel block, and every question the session must ask folded
into the one message that asks.

## What is in a floor, apportioned — and it is not what either of us first said

**The Workshop's first attribution put the account's connector surface in the same block as the
host's own prompt, which read as blaming the connectors for 72 % of the floor. Corrected by them
before anyone acted on it:**

```text
host system prompt + resident tool schemas        ~17 475   40 %
harness scaffolding — deferred tool names,
  skills listing, agent roster, env block         ~11 300   26 %
the instruction layer an estate authors           ~11 214   26 %
account connector surface — ~150 tool names
  across six surfaces, plus their instructions     ~2 900    7 %
```

**The connectors are under 7 %.** The mass is the host's own prompt, **which no method page and no
configuration reaches.** That matters because it decides which lever is worth pulling: detaching
unused surfaces is free and recovers little. **The lever is round trips, not attachments.**

## ⚠️ A measurement of a repository is not a measurement of what loads

**Found at the Workshop end, 2026-09-10, and it is the sharpest thing in this subject.**

```text
the skill as committed     3 200 tok
the skill as installed     4 074 tok      one commit behind
paid                         874 tok  x every request  x every session, until deployed
```

**A trim had been made, reviewed and merged, and was still being billed** — because the floor is set
by what is *installed*, and every check either estate runs reads the *repository*.

**So the cost of anything resident has a third factor nobody measures:**

```text
size  ×  requests  ×  how long the deployed copy lags the reviewed one
```

**The third factor is invisible to every gate in this estate.** A page can be corrected, merged and
still be wrong in the only copy that matters.

## ⚠️ And over a whole session the floor is not the story

This is where the arrival measurement stops and it should not.

```text
this library, one session, 676 requests
  floor billed 676 times, if nothing had grown      26.9 M read
  actual cache_read                                223.1 M read
  therefore growth beyond the floor                     88 %
```

**The floor is roughly a tenth of a long session's read cost.** What dominates is everything the
session accumulated after arriving — files, outputs, tool results, its own prose.

**So there are two economies and they do not pay in the same place:**

```text
an economy on the FLOOR       pays once per request, and the floor is ~12 % of a long session
an economy on WHAT A TURN     pays on that request and on every request after it, for the
ADDS                          rest of the session
```

**The second is larger and almost nobody measures it**, because a turn's addition looks small at the
moment it is made and is paid for every time afterwards. **A digest read thirty turns deep has been
paid for thirty times.**

## ⚠️ A third economy — a pause past the cache lifetime re-buys the whole session

**Found at the Workshop end and replicated here on three sessions.** A cached prompt has a
lifetime. **Idle past it and the next request does not re-read the accumulated context at the read
rate — it re-writes all of it at the write rate**, which is the most expensive token in the model.

```text
normal request     accumulated context re-read      x 0.10
after a lapse      accumulated context re-WRITTEN   x 1.25
```

**It composes with the second economy rather than sitting beside it.** What a turn adds is billed at
the read rate on every request after it — **and again in full at the write rate every time the
session lapses.** So an early large read is dearer than the residency arithmetic alone suggests, by
however many lapses follow it.

### Past the lifetime, duration carries no information. Only SIZE does

**Sixteen lapses in one session, sorted by how long the session sat idle:**

```text
 64 min  ->  163 807 re-written
 69 min  ->  670 824          <- the largest in the set
 88 min  ->  127 457
136 min  ->  495 855
199 min  ->  250 006
352 min  ->  621 698
510 min  ->  279 181
665 min  ->  334 912
```

**A sixty-nine-minute pause cost 5.3x an eighty-eight-minute one and 2.0x an eleven-hour one.**
Beyond the expiry the clock stops carrying information entirely; what is billed is whatever the
session had accumulated at the moment it stopped.

> **The price of stopping rises all day, and the cheapest moment to stop is always the one you are
> least inclined to.**

### How to detect it, and three ways the detector goes wrong

**The signature is the read collapsing** — one request reading far less than the previous request's
accumulated total, while writing a large segment. **Three failures, each met rather than imagined:**

**1 — do not key it on a clock.** *A long gap plus a large write* only correlates. Two lapses here
measured 64 and 67 minutes and would have been reported as *one hour*, explained by a duration that
had stopped mattering.

**2 — do not key it on a constant.** The surviving cross-session prefix is not stable even on one
machine: three sessions on the same estate floored at **17 480**, **17 475** and **0**. A detector
comparing against a known number misses the third. **Compare against the previous request, which
needs no constant.**

**3 — the deduplication key must match the event's shape.** A response is written to a transcript in
several chunks carrying the same usage, so lapses arrive in bursts. **Keying the burst by the minute
counted one expiry twice here** — an identical re-write 0.6 minutes later — and moved the reported
share from 7.8 % to 8.6 %. **Collapse by proximity, not by timestamp equality.**

⚠️ **And two large re-writes were observed with no idle gap at all**, which no lapse explains.
Recorded as unexplained rather than attributed: a cost model that accounts for twenty-two events of
twenty-four should say which two it does not.

### Quote the absolute, never the share

```text
   124 requests     22 %      the share of a session spent re-buying bought context
   143 requests     13.5 %
   649 requests      7.7 %
 2 367 requests      7.8 %
```

**The share falls as a session lengthens**, because ordinary residency grows underneath it while
lapses do not. **So a percentage here is a fact about a session's length rather than about the
economy.** The figure that transfers is the absolute: *tokens re-written x the write rate.*

## What this page does not claim

**It does not say a floor is too large.** It says a floor is a *measured quantity*, and an instance
that cannot measure its own cannot budget against it. Whether a given floor is worth its size is a
judgement, and the largest part of one is usually not method's business at all — **the host prompt,
the attached tool surfaces and their instructions are a configuration decision, and what to attach
is a Composer's ruling rather than a library's.**

**It sets no target.** No number here is a budget. `method/capacity.md` governs how a session reports
usage against a budget it was given; this page only says what the constant term is and how to read it.

**And it is not a claim about any particular host.** The arithmetic is transcript arithmetic. It
works wherever a transcript records per-request usage, and it says nothing about what the numbers
should be.
