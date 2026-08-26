---
type: Tool
title: "Tool: Web research (search and fetch)"
description: "The chair whose output is findings and sources, and the arm that supplies them: three routes that fail differently, a refusal that is about the instrument, and why a search result is testimony rather than transcript"
status: draft
serves: [User Researcher]
generated: { by: human:jkornobis, at: 2026-08-26T16:53:30+02:00 }
---

# Tool: Web research (search and fetch)

Audited 2026-08-26 by User Researcher. In-harness capability, not a library and not MCP-mediated. No install, no key. **There is no Context7 entry, no issue tracker and no Stack Overflow tag** — this page is a capability audit in the shape of `claude-desktop.md`, not a library page.

Re-audit: 90 days — default, not measured (the surfaces it reaches change constantly; the *capability* has not)

**Chair:** User Researcher — and `roster.md` records it as a **candidate lever for this chair alone**, unresolved. That chair's output is *findings + sources*; with no web reach there is no source, **which is the break test rather than the inconvenience test**. Everywhere else it is a shared tool: any chair may reach for it.
**Lineage:** the User Researcher's leap — **web search**, Google (Sept 1998), against the card catalogue and the Science Citation Index (1964). Lag **centuries**, the longest in the roster. And the descent is direct: Google's PageRank paper cites Garfield's citation-indexing work, so this row's leap is not merely later than its origin — **it is descended from it.** `project/tools_lineage_full.md`

## Critical (verified this session, 2026-08-26 and the days before it)

- **User Researcher — the search arm and the fetch arm have different reach, and neither is "the web".** Verified repeatedly: `stackoverflow.com` refuses the search arm outright (*"domains are not accessible to our user agent"*) while the **Browser pane renders its tag pages without difficulty.** A domain unreachable by one arm is not unreachable.
- **User Researcher — three routes, and they fail differently.** The search arm returns ranked summaries; the fetch arm returns one page; the **Browser pane** renders anything a browser can, including sites that refuse the other two. **Naming which arm produced a result is part of the result.**
- **User Researcher — a search result is testimony, never transcript.** The search arm returns *a small model's restatement* of pages. `brain/patterns.md` carries a fired row for quoting such a restatement as a primary source. **A sentence going inside quotation marks must be re-fetched from the page**, or the marks come off.
- **Product Owner — result quality is a property of the question's market, not of the tool.** Four queries run for the chair-tools survey returned almost entirely vendor listicles and *"top 10 in 2026"* pages. **Where a topic has a commercial market, the first page is advertising**, and the estate's own sourced reference files outranked everything the live search produced.

## Known issues — what breaks, from first-hand record

**There is no tracker to read.** What follows is this estate's own dated failure record, which for an in-harness capability is the only record there is.

| Failure | When | What it costs the chair |
|---|---|---|
| **A domain refuses the crawler** | 2026-08-23, `stackoverflow.com` | the arm reports a limit that is about *itself*; a second instrument reaches the same content. Reading the refusal as "unavailable" retires a working capability |
| **A challenge wall ends the attempt** | 2026-08-25, Stack Overflow *search*; earlier, a benchmarking site | **bypassing bot detection is prohibited**, so a challenge is the end of the evaluation rather than an obstacle. The site is recorded with its evidence and dropped |
| **An instrument destroyed the session it ran in** | recorded in `register.md` | one site's interstitial took the pane down with it. A hostile surface can cost more than the answer was worth |
| **A guessed URL returns 404 and reads like absence** | 2026-08-22 | a path invented from a plausible name proves nothing about whether the content exists |
| **The summary is faithful in meaning and wrong in words** | 2026-08-05, fired pattern | which is exactly what makes it survive a re-read |

## Limits — where this instrument stops

- **It cannot authenticate.** Anything behind a login is out of reach to the search and fetch arms; the pane reaches only what the Composer's own session already has.
- **It cannot bypass bot detection**, by rule, so a challenge-gated source is permanently unavailable rather than difficult.
- **It ranks by popularity**, which `register.md` names as the incumbency bias the whole six-question method exists to discount. **A first page is a market, not a field.**

All three are **tool limits**, not reasoning limits — so under `agents/tools/yang/README.md` none is admissible evidence for a dedicated subagent request. A second body inherits the same arms.

## Recommended (Composer to accept/decline)

- **User Researcher — resolve the lever question.** `roster.md` has carried *"web research may be a lever for this chair alone"* as an open Chair Review since 2026-08-08. This page is the evidence it was waiting for. — status: **proposed**
- **User Researcher — name the arm in every finding.** Search, fetch, or pane: the route belongs in the record, because the same source is reachable by one and refused by another. — status: proposed
- **Whole room — prefer an API to a site for evidence-gathering.** `register.md`'s lesson from the banned benchmarking site: a called endpoint cannot present a challenge wall, costs no screenshots, and never gets more expensive with repetition. — status: proposed
