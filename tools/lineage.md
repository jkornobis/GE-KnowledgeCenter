---
type: Index
title: "Lineage index — each chair's tool, and the lag before it arrived"
description: "Twelve chairs, each with the origin it started from, the leap that changed it, the current best-in-class, and the years between the two — the index a chair's tool pages hang from"
status: draft
generated: { by: human:jkornobis, at: 2026-08-16 }
---

# Lineage index — each chair's tool, and the lag before it arrived

**A chair's tool lineage is an index in itself.** Every row below names where the seat started, the
leap that changed what it could do, the instrument that currently carries that leap, and the
principle the leap actioned. **The tool pages in `tools/` hang from the fourth column** — a page
exists because a chair reached that instrument, and the row says what it replaced.

**The lag column is the point.** The gap between an origin and its leap runs from 15 years to
centuries, and it is not a measure of how slow anyone was: it measures **how long a discipline
existed as human practice before an instrument could carry it.** A chair whose lag is long has a
canon that predates every tool it now uses, which is exactly why the seat is musician-agnostic and
the toolset is not.

**Every row is `V` — verified against a source, not recalled.** An earlier pass carried nine
recalled rows; the verification found **four wrong dates** and corrected them in place. Those
corrections are kept in the source rather than tidied away, because a table that has been wrong and
says where is worth more than one that claims it never was.

## The twelve

| Chair | Origin | The leap | Current best-in-class | Principle it actioned | Lag | |
|---|---|---|---|---|---|---|
| **Design Engineer** | hand-written CSS (1996) | **design tokens** — Jina Anne, Salesforce; Theo, first generator (2014) | Figma Variables + Code Connect | DRY — Hunt & Thomas, *The Pragmatic Programmer* (1999) | **15 y** | V |
| **Accessibility Specialist** | manual review, Lynx as proxy (1992) | **automated conformance** — Bobby (1996), then axe-core in CI (~2015) | axe DevTools / Lighthouse | a conformance claim rests on an external artifact — WCAG 1.0 (1999) | **16 y** | V |
| **Software Architect** | design docs, minutes | **the ADR** — Nygard, *Documenting Architecture Decisions* (Nov 2011); SemVer (2010) | ADR log + generated changelog + pre-push sync gate | record the decision *and its why* — Parnas & Clements, *A Rational Design Process: How and Why to Fake It* (1986) | **25 y** | V |
| **QA Engineer** | manual test scripts | **xUnit** — SUnit (Beck, **1989**) → JUnit (Beck & Gamma, 1997); TDD named (2002) | CI harnesses; this repo's BDD regression suite | *"testing shows the presence, not the absence, of bugs"* — Dijkstra (1969) | **20 y** | V |
| **Software Engineer** | punched cards, `ed` | **version control** — SCCS (Rochkind, 1972) → CVS (Grune's scripts 1986; v1.0 1990) → **git** (2005) | git + CI + typed languages | nothing is lost; inspect before you cut (NDT, deletion protocol) — Brooks, *Mythical Man-Month* (1975) | **30 y** | V |
| **Reliability Engineer** | tailing logs by hand | **monitoring as a system** — NetSaint (1999), renamed **Nagios** (2002) → Prometheus (2012) → OpenTelemetry (2019) | error budgets, SLOs (Google SRE, published 2016) | you cannot operate what you cannot observe | **~20 y** | V |
| **Product Owner** | the business plan; Gantt (1910s) | **MBO → OKR** — Drucker (1954) → Grove at Intel (1970s) → Doerr at Google (1999) | outcome-based roadmaps; continuous discovery (2021) | measure outcomes, not outputs | **~45 y** | V |
| **Content Designer** | style manuals — Chicago (1906), Strunk, privately printed (1918) | **readability made measurable** — Flesch Reading Ease (1948); plain-language movement, Gowers (1948) | lexicon gates; this repo's `check_vocabulary_parity.mjs` | write in the reader's vocabulary, not the writer's | **~30 y** | V |
| **UX Designer** | paper, pencil, paste-up | **Photoshop (Feb 1990)**, then design as a *shared* act — **Figma** (Sept 2016, browser + multiplayer) | Figma + variables | Gestalt (Wertheimer, **1912**); Alexander, *A Pattern Language* (1977) | **~40 y** | V |
| **Agile Auditor** | retrospective notes by hand | **structured blameless review** — 5 Whys (Sakichi Toyoda, 1930s; systematised by Ohno in the 1950s) → postmortem culture (Google SRE, 2016) | this repo's file-backed `patterns.md` ledger + hooks | a count held in memory is not a count | **~60 y** | V |
| **Agile Facilitator** | shell pipes (Jan 1973), `make` (Feldman, Apr 1976) | **agent orchestration** — LLM tool-calling and frameworks (2022–23); **MCP** as the protocol layer (Nov 2024) | MCP servers + real subagent spawning | separation of concerns; do one thing well — Dijkstra, *On the Role of Scientific Thought* / EWD447 (1974), Unix philosophy (1978) | **~48 y** | V |
| **User Researcher** | card catalogue; Science Citation Index (1964) | **web search** — Google (Sept 1998) | LLM + retrieval; this session's own search/fetch | verify the source, and cite it | **centuries** | V |

---

---

**How to read it against a tool page.** The *Current best-in-class* column is a dated claim about an
instrument, and instruments move — so a tool page's own `Audited` line always outranks this column.
Where the two disagree, the page is right and this index is stale.

**And a blank is not an absence.** A chair with no tool page yet has a lineage row all the same: the
leap happened whether or not this library has documented the instrument that carries it.
