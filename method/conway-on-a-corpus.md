---
type: Method
title: "Conway's Law on a corpus — an ownership question undercounts reach by construction"
description: "Why recording which part owns X always undercounts X's reach, the social cause that makes it invisible from inside any single part, the fix that reads a between-surface instead of asking harder, and the dated case that found it: one chair recorded, a shared-concern table naming seven"
status: draft
serves_all: true
generated: { by: agent:ge-knowledgecenter, at: 2026-09-15T11:23:00+02:00 }
sources:
  - resource: https://en.wikipedia.org/wiki/Conway%27s_law
    title: "Conway's law"
---

# Conway's Law on a corpus

**A record built by asking each part "which of this is yours" undercounts reach, every time, because
ownership is singular by construction and reach is not.** Not a bug in the asking — a property of
the shape. Fixing it is not asking harder; it is reading a different surface, one written **between**
the parts rather than **inside** any one of them.

## The case that found it

A corpus layer recorded which chair a cultural movement belongs to. The borders were admitted one at
a time from a candidates page that asked, per movement, **which chair's canon is this** — a question
about ownership.

```text
2026-07-04   a chair is admitted for "the seam between the UX Designer's taste and the
             Software Engineer's general build work" — a seam between two families
2026-09-14   the same corpus records that chair's movement as binding two of them;
             a table of shared concerns, in the same file, names three
2026-09-14   one movement recorded at a single chair; the concern table names seven
2026-09-14   borders re-derived from the between-surface: 8 → 29, then 34
```

Same corpus, same commit. **One movement undercounted by a factor of seven**, and the correction was
sitting in the same file the whole time — a table nobody had asked.

## Why it is invisible from inside any part

The Composer's diagnosis, and it is the reason this is a corpus defect rather than a person's
mistake:

> **"Each chair are convicted they invent a cultural movement from themselves most of time."**

A chair experiences a movement it participates in as its own invention. So the ownership question was
answered honestly every time — nobody hid a crossing — and **the crossing is invisible from inside
any one chair by construction.** This is Conway's Law running on a corpus instead of on software: the
artifact mirrors the communication structure that produced it. The record was built one chair at a
time, one conversation at a time, and it inherited that shape as if it were fact about the movement
rather than fact about how the record was taken.

## The fix: read the surface written between the parts

**Not "ask harder."** Asking a chair again, more carefully, still returns an ownership answer,
because that is the only kind of answer the question can produce. What breaks the undercount is
finding a surface that was never asked *per-part* to begin with — one written **about a relation**
rather than about a possession.

In this corpus that surface already existed: a table of concerns shared **between** chairs, built for
a different purpose (an Agile Auditor gate) and never consulted for movement borders. Reading it
against the single-chair record found the gap instantly, because the table's rows are relations and
the record's rows are possessions — two different questions about the same territory, and only one
of them can see a crossing.

**The generalisation:** any structure that records *which part of an organisation owns X* will
undercount X's reach. What recovers the count is not interviewing the parts again — it is finding
whatever surface in the same system was written **about the relations between them**, and reading
that instead.

## How this composes with the corpus's other reading rule

[[reading-the-whole]] says a worker substitutes a cheap signal — a head, a tail, a count, a status
code — for the one actually asked for. **This is the same defect with a social cause rather than a
technical one.** The cheap signal here is *what each part says about itself*; no amount of careful
reading inside one part recovers what the between-surface would have shown for free. The two pages
share a shape: a substitution that looks complete from inside the read and is provably incomplete
from outside it.

## One honest limit

This is one estate, one corpus, one day. The mechanism is old and well attested outside software —
[Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law) is exactly this claim about
organisations and the software they build. What is new here is only that a knowledge graph reproduced
the law on itself: the artifact under study and the organisation producing it were the same twelve
chairs.

**The test for whether this applies elsewhere:** does a record exist that was built by asking each
part what it owns? If so, look for a second surface in the same system built about relations rather
than possessions before trusting the first record's count.
