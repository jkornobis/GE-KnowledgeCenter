---
type: Method
title: "The floor and the arrival — what a session costs before its first word, and what dominates after (Reliability Engineer, Agile Facilitator, Product Owner)"
description: "A session's floor is the prompt that exists before any work: measurable in four lines of arithmetic from a transcript, reproduced here on two independently configured instances, with the finding that the floor dominates an arrival and is a small minority of a whole session — so the two economies available are not the same economy and do not pay in the same place"
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

⚠️ **Do not mix it with file sizes.** A `chars ÷ 3.7` estimate of what is *in* the floor is useful
for attribution and is approximate; the transcript figures are not approximate, and quoting the two
in the same table without saying which is which is how a measurement becomes a guess.

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
