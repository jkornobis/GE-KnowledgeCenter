---
type: Method
title: "Keeping a page true — what refreshes by itself, what is done by hand, and when a page is retired instead"
description: "What this library does today about a page that has gone stale: the per-page clock tool pages carry and the script that reads it, the register's sweep, the checks that read only inside the repository, the Refresh GE trigger and where it is defined, how a page is retired, which kinds of page have no clock at all — with the measurements of 2026-11-14 and 15 and the build that is proposed and not built"
status: draft
card: none
serves: [Agile Facilitator, User Researcher, Software Architect, QA Engineer, Agile Auditor]
generated: { by: agent:ge-knowledgecenter, at: 2026-11-15T11:00:00+01:00 }
---

# Keeping a page true

Written 2026-11-15 because a fresh reader, asked how stale pages are fixed and how refreshing could be
automated, found the answer for tool pages and nothing for the rest, and no route from the card to it.
**This page says what exists, where it stops, and what is only proposed.** It copies none of the rules it
points to.

## What exists today

| Mechanism | What it covers | How it runs | Where it stops |
|---|---|---|---|
| **A clock on each tool page.** Two lines: `Audited YYYY-MM-DD` and `Re-audit: N days — <basis>`, read by the Workshop's `scripts/check_tool_audit_freshness.mjs` | The 30 pages in `tools/` | By hand, and monthly on a scheduled runner (ADR-152) | **Run with its default folder it reads no page and prints "All tool pages verified", exit 0.** The library's pages are read only with `--dir tools`. Measured 2026-11-15: with it, 17 of 30 are past their own interval and one has no `Audited` line (exit 1). **Not checked:** whether the monthly run passes `--dir` |
| **The register's sweep.** `Tool Discovery: sweep`, every 30 days | The register of tools, which moves faster than the pages | Typed on demand; never waits on a scheduler | A stale register is re-swept, never re-dated from memory |
| **The four gates** (`check_okf`, `check_links`, `check_frozen_counts --strict`, `check_forecasts --strict`) | That the library agrees with itself | Run on every merge | **They read nothing outside the repository**: no web address, no `sources[].resource` field. A stale claim about the outside is invisible to them |
| **`check_corpus_freshness`** | Whether this library's copy of the graph is still the corpus's | `--source=<url or path>` | Exits 0 when no source is configured, so unconfigured looks green |
| **`check_remotes`**, inside the publish command | Whether the forge, the public copy and the clone agree | At publish time only | The public copy sat 36 commits behind the forge until 2026-11-13, found by hand |
| **`check_findability`** | Whether a question's words land on its page in the index | By hand | A lexical proxy over 13 questions; it never reads a page |
| **Refresh GE** | Drift in what an instance believes, corrected mid-day | Raised by the named instances unprompted | Defined at the Workshop (`project/stack-key.md`), not here: the Library holds no copy of it, so it is named and not reached from the card |

## When a page is stale

**The fix is a re-audit, never a re-date.** The re-verified facts come from the first-party source and the
live thing, and the date moves only when a probe has run. The order of work for a vendor release is in
`protocols/tool-audit.md`, *Re-audit on a vendor release*. **Every page carries the address its claims
came from**, so that a later session re-derives them instead of re-searching
(`method/sources-and-rederivation.md`).

## When a page is retired instead

A stale flag may end in retirement. **Removing the page's index row retires it**, the page says so with
`status: deprecated`, and the commit that removes the row carries the reason
(`protocols/library-conventions.md`). `check_okf` fails a page that is on disk with neither a row nor that
status. The status gate accepts exactly three values, `draft`, `stable` and `deprecated`; **no page uses
`stable` today**, and every page that declares a status says `draft`.

## Which pages have no clock at all

The per-page clock is for tool pages. A page about a method, a lineage, or a router takes the third basis,
`not applicable — no release surface`, and is still listed. **Pages of every other kind have none.**
Measured 2026-11-14 by last-edit date, over the 117 pages that carry a generated date and a status: median
age 58 days, 55 older than 60 days, 18 edited in the last 14 days. Whether those are stale depends on what
each claims about the outside, and **nothing in the library records which pages make such claims.**

## What is proposed and not built

On `GE-Workshop#330`, from the Grand Auditorium on the library (`method/double-diamond.md`): a third gate
outcome, NOT-CHECKED, so an unconfigured check can no longer count as green; a gap ledger of failed and
wrong lookups; a freshness record per page **that extends the clock above to world-claim pages** and
requires a source that was re-read, not only a date; and a backfill. **None of it exists.** Until it does,
an automated refresh of a page does not exist either: the clock tells a person that a tool page is past its
interval, and the re-audit is done by hand.

## Limits, stated once

The table is read from the library's own pages and two runs of the script on 2026-11-15. The scheduled
runner's configuration was not read. The count of pages that make claims about the outside is unknown.
