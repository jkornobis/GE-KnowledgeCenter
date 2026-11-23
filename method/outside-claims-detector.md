---
type: Method
title: "The outside-claims detector — which pages are in scope, what a page declares, what the check reports and when it says it could not look (Reliability Engineer, Software Architect, QA Engineer)"
description: "A design for a page-level detector of claims about the outside world, extending the tool pages' existing clock instead of adding a scheme: a page is in scope when it sits in tools/ or names a source outside this library, 63 pages today of which 42 outside tools/ carry no clock; the declaration is the two lines already in use plus the address the audit was made against; seven states and their exit codes, including the one that says it could not look and the one the Composer ruled on 2026-09-24 for a page unreachable by design; the first run lists undeclared pages as debt; a test over seven fixtures — a proposal for the Workshop's script, with the pages that make an unsourced claim named as the gap no rule closes"
status: draft
card: none
serves: [Reliability Engineer, Software Architect, QA Engineer, Agile Auditor, Product Owner]
generated: { by: agent:ge-knowledgecenter, at: 2026-11-23T17:30:00+01:00 }
sources:
  - resource: https://raw.githubusercontent.com/jkornobis/GE-KnowledgeCenter/main/method/keeping-pages-true.md
    title: "Keeping a page true, which names the clock tool pages carry and the gap this page designs for"
---

# The outside-claims detector

Written 2026-11-23 for the card on the next major version's first problem, *work the estate depends on can fail
silently* (`GE-KnowledgeCenter#255`). **The Library designs it; the Workshop builds the script that reads it**
(`GE-Workshop#347`). A proposal: nothing here is built, and the form of the declaration extends one that exists
rather than coining a new one, so the only new element is named below.

## What it is for

**A page about the outside world goes quietly wrong.** A tool ships a release, a model line changes, a price moves, and
the page still reads as sure as the day it was written. The gates read only inside the repository
(`method/keeping-pages-true.md`), so nothing in a merge sees it, and in this library's own record the stale model
page and the public copy 36 commits behind were found by accident. The detector turns *found by accident* into
*listed by a check*, for the pages that say they depend on the outside.

## Which pages are in scope

**A mechanical rule, so nobody has to remember to list a page:** a page is in scope when it sits in `tools/`, or when
its frontmatter names a source address outside this library. Measured 2026-11-23, over the pages that carry a
frontmatter, the session log and the readme excluded:

```text
pages naming a source outside this library          63
   in tools/                                        21
   outside tools/                                   42
outside tools/ and carrying a clock                  0
outside tools/ and past 60 days by generated date   34
tools/ pages with no outside source                 12
```

**The 42 are the debt.** They claim things about the outside, they cite where from, and none says when it was last
checked against it. **The 12 tool pages with no source are in scope by their folder**, which is why the folder is in
the rule: a tool page about a local binary can still go stale and cites no address.

**The gap no rule closes: a page that states an outside claim and cites nothing.** A mechanical rule reads
declarations; it cannot see a sentence that should have had one. Those pages are found by reading, as the
`Auditorium on` runs found the stale model page, and the page records the limit so that a green run is not read as
*every claim is checked*.

## What a page declares

**The clock tool pages already carry, and one clause added.** Two lines, in the page body, read today by the
Workshop's `check_tool_audit_freshness.mjs`:

```text
Audited 2026-09-01 by User Researcher.
Re-audit: 77 days — measured, feature-release cadence (n=5 intervals ...)
```

**The proposal adds the address the audit was made against, after the date:**

```text
Audited 2026-11-23 by User Researcher against https://example.org/the-source-it-was-re-read-from.
Re-audit: 90 days — default, not measured.
```

**Why the clause.** The plan on `GE-Workshop#330` asks that a freshness record require *a source that was re-read, not
only a date*. A date alone is exactly what an instance can move without reading anything. The clause makes the claim
checkable in one way: **the address must be one of the page's own sources.** It does not prove the re-read; a
declaration is not a proof, and the page says so.

**The three bases already allowed stay.** A measured interval; `default, not measured` at 90 days, which must say it
is a default; and `not applicable — <reason>` for a page with no release surface upstream. **A fourth line stays too**,
ruled by the Composer on 2026-09-24 (`GE-KnowledgeCenter#145`, item 6) and honoured by the Workshop's script for a page
unreachable by design: `Accepted overdue: <who decided>, <YYYY-MM-DD> — <why>`, at line start. The decider and the date
are required; without the decider the page reads stale again. A page in scope that holds none of these is undeclared.

## What the check reports

One state per page, and the exit code that follows. **Two of them are failures; one says the check could not run.** The
table was written without ACCEPTED OVERDUE, which the Library itself introduced on `#145`; the Workshop's script
honoured it and the Workshop pointed out the omission.

| State | Meaning | Exit |
|---|---|---|
| **CURRENT** | Declared, and the interval has not passed | 0 |
| **NOT APPLICABLE** | Declared `not applicable`, with its reason | 0 |
| **DUE** | Declared, and the interval has passed | 1 |
| **UNSOURCED** | The `against` address is not among the page's sources | 1 |
| **ACCEPTED OVERDUE** | Past its interval, with an `Accepted overdue` line naming who decided and when | 0, and the page is still listed |
| **UNDECLARED** | In scope and no clock | listed as debt; fails only for a page a commit adds or changes |
| **NOT CHECKED** | No page was read, the scope came out empty, or a frontmatter could not be read | 2 |

**NOT CHECKED is the one that matters.** On 2026-11-15 the existing script, run with its default folder, printed
*all tool pages verified* and exited 0 after reading none of them (`method/keeping-pages-true.md`). The Workshop's own
card gives a gate that cannot run its own exit code (`GE-Workshop#345`); this check should use it, and **a run that read
zero pages must never be green.**

## The first run, and the backfill

**The first run lists 42 undeclared pages and passes.** The same reasoning as the ruling-trace check applies: most of
the library predates the rule, and a check that fails on its whole history teaches its readers to ignore red. UNDECLARED
becomes a failure only for a page a commit adds or changes. **Closing the 42 is its own work and its own cards**, one
per deliverable; it is a re-audit of each page against its source, and a date moved without that is the failure this
design exists to prevent. The 34 past 60 days are the place to start, and the order is the Composer's.

## Where it runs

**Report-only inside the Workshop's publish command first, then a gate once it runs clean**, as the screening was
(`method/screening.md`). The monthly scheduled runner that was meant to run the existing script could not be found
where this instance can look, so the design does not depend on it: **a check that runs only when someone remembers
is the failure it is meant to catch.** Whether a runner exists is the Workshop's to confirm.

## What would test it

Seven fixtures, one per state, each a page the check must classify, and one empty folder it must refuse: a page inside its
interval; a page past it; a page with an `against` address that is not one of its sources; an in-scope page with no
clock; a page declared not applicable with a reason; a page past its interval with an `Accepted overdue` line, and the same
page with the decider removed, which must read stale; and a folder with no pages, which must exit 2 and not 0. That is the
Workshop's test; it has not run, and the design has not been read by the script's author.

## What this page does not do

**It builds nothing and re-dates no page.** It does not say which of the 42 matter most, or how often a method page's
claims change: an interval for them has no measurement, so the first value is the admitted default of 90 days.
**It does not catch a claim that was never sourced**, and it does not prove a re-read happened.

## Limits, stated once

The counts come from one script read over the frontmatter and the clock lines on 2026-11-23, and a source address inside
this library's own public copy was not counted as outside. **Whether a source address still answers is not checked:** no
gate reads an address, and that is a separate question from whether the page was re-read.
