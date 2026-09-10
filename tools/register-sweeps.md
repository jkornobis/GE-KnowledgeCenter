---
type: Tool
title: "Register sweeps — the passes that filled the lever register"
description: "The dated passes over the lever register: sweep 1 of 2026-08-05 and its scored candidates, sweep 2 of 2026-09-04 and what it was obliged to do — kept as the record of how the register came to say what it says, and correct only as of those days"
status: draft
record: 2026-09-04
serves_all: true
generated: { by: agent:ge-knowledgecenter, at: 2026-09-10T22:05:00+02:00 }
---

# Register sweeps

⚠️ **This page is a record and carries `record: 2026-09-04`.** Every number in it is correct as of
the pass that produced it and is not a reading of the register today. **Do not edit it to agree with
the present** — that rewrites the pass it exists to be.

## Sweep 1 — 2026-08-05

First sweep. Four levers, sixteen candidates. Web sources fetched this session; the registry arm failed and is recorded below rather than worked around. This is a **first pass, not a complete map**: it covers the levers the estate's live work already touches, and says nothing about the levers it does not.

---

## Sweep 2 — RUN 2026-09-04

**Ran on the day it was due.** Five obligations, four with results and one a ban honoured. Every reading below was taken this session from a named instrument; nothing was recalled, and where an instrument did not reach, that is recorded as unreachable rather than unknown.

| # | Obligation | Outcome |
|---|---|---|
| 1 | re-check every `won by: arrival` verdict against the sixth mechanism | **Deferred, not met — the DTCG status is contested and this sweep could not settle it.** The Community Group announced a stable **2025.10** on 2025-10-28; `tr.designtokens.org/format/` **301-redirects** to `/TR/drafts/format/`, whose masthead reads *Draft Community Group Report, 30 July 2026*; and the repository carries **no stable tag** (`first-public-draft`, `editors-drafts/1`, `editors-drafts/2` only). **The register states the contest rather than picking a side**, and the `arrival` verdict is therefore unresettled. ~~and the flag paid out; the motion seam's gap closed~~ — **struck 2026-09-04, sweep 2 review: it did not** |
| 2 | fill `Grip` for the seven unvisited candidates | **three resolve to `n/a` from the field's own definition** and never needed a visit; four Figma features stay blank and are named as untested |
| 3 | fill `Health` where `deps.dev` or Scorecard reach | **filled — and a candidate was found archived.** Scorecard reached **two of six** (one only under a former org name); the GitHub API reached all six |
| 4 | re-check `generates-editable-design-layers` | **41 tools on the Figma remote MCP against the 33 recorded 2026-08-25** — eight in ten days, which is the clock this lever set |
| 5 | do not re-test `openbenchmarking.org` | **not tested.** Honoured |
| 6 | *(not an obligation — recorded after review)* | **Three candidates due at this sweep were missed**: W3C validators, D3, Markdown → CSV. Named in item 5 of the carry-forward list with the reason |

**What sweep 2 opens for sweep 3**, carried forward so this is not a fresh survey next time:

1. **Per-feature `Grip` for the four Figma candidates** — the surface measured `mixed`; the features have not been read individually, and an iframe would measure `eyes-only`.
2. **The accessibility-intent prediction is still live** and now has one null reading behind it.
3. **A `Spanning layer: none` verdict has still not been re-checked against a web UI** — obligation 1 was run against the two `arrival` levers and the *seams*, not against every `Spans:` line, which is what the original wording asked for. **Named as partly done rather than reported as done.**
4. **`Health` for products remains unreachable**, which is the open `unconceptualized` seam below, unmoved.
5. **Three candidates this file made due at sweep 2 were neither fetched nor carried forward** — the **W3C web-based validators**, **D3**, and the **Markdown → CSV converter**, all named by the Composer 2026-08-08 and marked *`UNVERIFIED` until sweep 2 fetches them*. Two seams also still carry a sweep-2 date that has now passed. **This is recorded as its own item, not folded into the list above, because the carry-forward section exists specifically to prevent it and failed on the first sweep that had one.** Carried-forward-with-a-reason is the standard; silently past due is the defect. The reason here is simply that obligation 2 was read as *fill `Grip` for the seven unvisited candidates* and these three sit in a different table, so a sweep run table-by-table never reached them. **Sweep 3 fetches them first, before any re-measurement.**

---

## Sweep 2 — what it was obliged to do, not just when (due 2026-09-04, ADR-269)

The 30-day clock says *when*. These are carried forward so the next sweep is not a fresh survey that quietly drops what sweep 1 opened.

1. **Re-check every `won by: arrival` verdict against the sixth mechanism.** Two levers are flagged `arrival` — `reads-a-running-interface` and `moves-tokens-between-design-and-code` — and an arrival-winner's gaps are **historical, not principled** (ADR-263). Specifically: **a `Spanning layer: none` verdict is unsafe wherever a web UI already crosses the seam**, because MCP is a narrow waist someone had to build and the browser was already one. Sweep 1 predates that mechanism entirely, so every `Spans:` line was judged without it.
2. **Fill `Grip` for the seven unvisited candidates** — one `read_page` each, and the value is not inferable.
3. **Fill `Health`** for anything `deps.dev` or OpenSSF Scorecard can reach, and record the rest as unreachable rather than unknown — see the seam below.
4. **Re-check `generates-editable-design-layers`**, whose four candidates all postdate `figma.md`'s audit and set the 30-day clock in the first place.
5. **Do not re-test `openbenchmarking.org`** — `Grip: blocked`, banned 2026-08-08, and bypassing bot detection is prohibited, so there is no version of that test that ends differently.

## Sweep 1 candidates, scored where evidence already exists (2026-08-08, ADR-269)

The four fields added on 2026-08-08 arrived after sweep 1, so its sixteen candidates carried none. **Filled here only where the evidence is already in this file or was verified this session — never from recall.** Three of the four columns need no new research: `Grip` is **`n/a` by definition** for anything *called* rather than *driven*; `Posture` is stated in several candidates' own leap descriptions; `Why` was measured directly for two.

| Candidate | Posture | Why | Grip | Health |
|---|---|---|---|---|
| **axe-core** | **implements** — *"the engine underneath most of the field"*, running ACT Rules it does not define | — | n/a | — |
| **axe MCP** | **extends** — *"the same rules … a leap in fixing, not in finding"* | **carries** — remediation guidance returned to the agent **is** the why (ADR-268) | n/a | — |
| **Style Dictionary** | **implements** — transforms tokens it does not define | — | n/a | — |
| **Tokens Studio** | **extends** — two-way sync **on top of** Figma Variables, not instead of | — | n/a | — |
| **Figma Variables** | **no standard** — native storage; DTCG is provisional and it predates it | **reference only** — verified 2026-08-08 against `/figma/plugin-typings` | n/a | — |
| **Code Connect** | **no standard** — a first-party mapping format with no cross-vendor equivalent | **reference only** — the CLI documents flags, not when to reach for `--force` | n/a | — |
| **Browser pane** | **implements** — reads the accessibility tree, the de-facto layer | — | **n/a** — it *is* the instrument, not a candidate to grip | in-harness |
| **Claude in Chrome** | **implements** — same tree, different session store | — | n/a | in-harness |
| Playwright MCP · Chrome DevTools MCP · Browserbase · Figma AI Agent · Figma code layers · Figma Motion · Figma Make | — | — | — | — |

~~**The blank rows are the finding, not an omission.** Seven candidates have never been opened by anyone here, and this register's rule is that a value determined *"by one `read_page`"* cannot be supplied by inference. **They stay empty until sweep 2 visits them.**~~

**Sweep 2, 2026-09-04 — and three of the seven never needed a visit.** `Grip`'s own definition is *"only meaningful for `web UI (URL)` candidates; `n/a` for everything else — an MCP tool or a skill is called, not driven, so there is nothing to grip."* **Playwright MCP, Chrome DevTools MCP and Browserbase MCP are MCP connectors**, so their value follows from the definition rather than from a reading: **`n/a`**. Recording them as *unvisited* was the field being asked a question that does not apply to them.

**The four Figma features are the real blanks, and they stay blank.** Figma AI Agent, code layers, Motion and Make are driven inside a canvas whose `Grip` this estate measured **`mixed`** on 2026-08-08 — chrome fully ref-addressable, a third-party plugin's iframe returning a single `Close` button. **Inheriting that per-feature would be inference, which this section forbids**: a feature rendered in an iframe measures `eyes-only` and the plugin case proves that happens here. Untested per feature, and named as untested.

**One instrument finding, because it cost this estate the whole session before it was noticed.** The Browser pane opened reporting **viewport 0×0**, and `read_page` correctly returned an empty tree. **One `resize_window` call fixed it** and the same page then returned 29 named refs. Three separate capability conclusions were drawn from that degenerate state earlier the same day before the page naming the oracle rule was read. **A zero-sized viewport is a fact about the pane, not about the site.**

**And the `Health` column is empty for every OSS candidate on purpose**, which note 10 explains: the instruments that would fill it — `deps.dev`, OpenSSF Scorecard — cover **package ecosystems**, and half this table is products.

### Health — filled by sweep 2, 2026-09-04, and the instrument reached less than this file claimed

**Read live: `api.deps.dev/v3`, `api.securityscorecards.dev`, and the GitHub API. Nothing recalled.**

| Candidate | Scorecard | Release / community |
|---|---|---|
| **axe-core** | **6.5**, dated 2026-08-24 — Maintained **10**, Code-Review **10**, Branch-Protection **4** | npm: 1,614 versions, first 2015-06-10, latest **2026-09-03** |
| **Style Dictionary** | **5**, dated 2026-08-24 — filed under the **former** org name `amzn/style-dictionary`; the current slug `style-dictionary/style-dictionary` returns 404 | 4,797★ · 240 open · pushed 2026-09-04 · Apache-2.0 · npm 124 versions, latest 2026-08-19 |
| **Playwright MCP** | **no record — HTTP 404** | 36,784★ · **2 open** · pushed 2026-09-03 · npm 433 versions |
| **Chrome DevTools MCP** | **no record — HTTP 404** | 50,869★ · 90 open · pushed 2026-09-04 · npm 60 versions |
| **Tokens Studio** | **no record — HTTP 404** | 1,606★ · 339 open · pushed 2026-09-04 · MIT |
| ~~Browserbase MCP~~ | **no record — HTTP 404** | **archived**, last push 2026-07-20 — struck above |
| Figma Variables · Code Connect · Figma AI Agent · code layers · Motion · Make · axe MCP | **not a package and not a repository** — no instrument reaches them | unreachable, which note 10 already predicted and the seam below still owns |

**The correction this sweep owes its own text, revised 2026-09-04 after review.** The instrument row below describes Scorecard as a public dataset covering 1M+ projects. **It returned a record for two of the six repositories queried here and 404 for the other four** — and the second record was only found by asking under a name nobody would have guessed. **A 404 therefore has three meanings, not two: *unenrolled*, *not yet scanned*, or *enrolled under a name you did not ask for*.** The third is the dangerous one, because it is the only case where the instrument is silently **wrong** rather than merely empty, and its trigger — an organisation transfer — is common and invisible from the current slug. **Absence measures enrolment, not health**, and the operational rule is: query the current slug **and** the known former slug; a single 404 is not an answer.

**So the honest shape of `Health` after this sweep:** the *security-weighted* half has one reading and five absences; the *stability and community* half was filled for every repository-backed candidate from the GitHub API, which reaches what Scorecard does not. **Two instruments, two coverages, and the register had been treating one as the whole field.**

**One row worth reading twice.** `Figma Variables` and `Code Connect` are **`no standard`**, and ADR-263 flags that value as a warning rather than a fault: *a genuine first mover has nothing independent to check it against.* Both sit under the lever the Design Engineer **breaks** without. The chair's required capability rests on two formats with no external oracle, and **DTCG — the thing that would be that oracle — is `won by: arrival` and still a Draft.** That is not an argument against them; it is the reason the seams below exist.

