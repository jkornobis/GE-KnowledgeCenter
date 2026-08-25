---
type: Tool
title: "Tool: Figma MCP — the desktop server"
description: "The selection-scoped Figma MCP server: seven tools that take no parameters at all, why that shape is the tell, and the per-agent registration that leaves it unwired"
status: draft
serves: [UX Designer, Design Engineer]
generated: { by: human:jkornobis, at: 2026-08-25T23:58:02+02:00 }
---

# Tool: Figma MCP — the desktop server

Audited 2026-07-04 by User Researcher. **NOT re-audited — the route is unreachable from this client.** MCP-mediated, **selection-scoped**: it operates on whatever is selected in the Figma desktop app, which is why its tools take no parameters at all.

Re-audit: 30 days — measured; inherits the Figma clock. **Overdue, and deliberately so** — see below.

**Chair:** UX Designer (`roster.md`), same as the remote route.
**Lineage:** shared with [`figma-mcp-remote.md`](figma-mcp-remote.md).
**Route identity:** **7 tools, every one with `"properties": {}`** — no `fileKey`, no `nodeId`. That parameter shape *is* the tell.

**Why this page exists separately.** It is the half of the old `figma.md` that could not be dated,
and keeping it joined to the remote route was what prevented that route from being dated either.
**A page whose subject is unreachable should say so in its own header, not drag another page's clock
down with it.**

**What unblocks it:** Figma registers **per agent**. Its setup dialog lists Claude Code CLI (toggled
on, auto-installed) and Claude Desktop (**"Get Figma integration"**, unclicked) as separate targets.
Enabling the Dev Mode server and wiring an agent are two acts, and only the first has happened.

## Re-audit attempted and NOT completed — 2026-08-23

**The `Audited` line above is unchanged on purpose.** A re-audit re-verifies every Critical fact
live; this pass could not, so moving the date would have been the exact defect the cadence exists to
catch. **`check_tool_audit_freshness.mjs` still reports this page stale at 52 days against its own
measured 30-day clock, and that is the correct reading.**

**Why it could not run.** The Figma Dev Mode MCP server is not enabled on this machine — the tool
returns setup instructions rather than data (*"you need to enable the Dev Mode MCP Server in the
Figma desktop app… under Preferences"*). No live canvas, no schema introspection, no screenshot.
Everything Critical on this page is about what the surface can actually do, and none of it is
checkable from here today.

**What this pass could verify, and did — the Context7 family, resolved live 2026-08-23:**

| Library ID | Snippets | Benchmark |
|---|---|---|
| `/figma/code-connect` | 416 | **68.93** |
| `/figma/mcp-server-guide` | 2,489 | **68.89** |
| `/websites/developers_figma_plugins` | 3,068 | 75.68 |
| `/websites/help_figma_hc_en-us` | 26,106 | 76.77 |
| `/iamtekeste/figma` (community type defs) | 5,418 | 79.54 |

**The same shape as OpenTelemetry and Sigstore, and now a third instance of it.** The two
**first-party, purpose-built** entries — Code Connect and the MCP guide — are the **lowest-scoring**
of the five, while a **community-maintained type-definition repo scores highest**. Three projects
now where the official explanation benchmarks below an implementation or a community artifact. That
is no longer a curiosity; it is a reading rule: **when a family resolves to several ids, the
first-party one is not automatically the best-documented.**

**What a real re-audit still owes**, unchanged and now dated: the Config 2026 capabilities the
`register.md` sweep named but nobody exercised — code layers, Motion, Make — plus whether code
layers' GitHub import reaches an enterprise host, which ADR-95 settled for the Make connector and
left open for this one. **All of it needs the Dev Mode MCP server enabled, which is the Composer's
switch to throw.**

## What this pass did NOT establish, and why the date still has not moved

**The `Audited` line remains 2026-07-04.** The cadence's contract is that a re-audit re-verifies
*every* Critical fact live, and this pass verified a set that the page did not previously contain
while leaving the original set unchecked. **The freshness check still reports this page stale, and
that is still the correct reading.**

Specifically unverified: everything about the **Dev Mode / local** route — reading the current
selection, live canvas introspection, the in-product AI agent — plus the Config 2026 capabilities
(code layers, Motion, Make) and whether code layers' GitHub import reaches an enterprise host.

**And the pass surfaced a structural question this page cannot answer about itself.** It was written
as one page about one surface. There are demonstrably **two routes with different capabilities and
different failure modes** — a local Dev Mode server that is off, and a remote connector that is on.
Whether that is one page with two sections or two pages is a structure decision, and structure is the
Composer's.

## Third pass — 2026-08-25, and the route question is settled

**The Composer enabled the Dev Mode MCP server and it did not help this client, for a reason his own
screenshot supplied: Figma registers per agent.** Its setup dialog lists Claude Code CLI (toggled
**on**, auto-installed) and Claude Desktop (**"Get Figma integration"**, never clicked) as separate
targets. **Enabling the server and wiring an agent are two acts.** That also re-reads this page's
2026-07-04 line — *"already connected in Claude Code sessions this project uses"* — as **true of the
CLI and generalised to the surface**, which is the third time a fact about one instrument has been
written here as a property of the tool.

**And the orchestra's own error is worth recording beside it.** Four probes of the failing
registration were read as *"no Figma access"* while a **different, authenticated Figma connector was
answering in the same session**. The Composer named it: *"you're supposed to already have it."* An
instrument's self-report, read as a fact about the subject — committed while writing that pattern
down.

### The Audited date still does not move, and this is the last pass that can say so cheaply

**Unchanged at 2026-07-04.** What remains unverified is not incidental: **the entire local Dev Mode
route** — selection-based reads, live canvas introspection, the in-product AI agent — plus the Config
2026 capabilities (code layers, Motion, Make) and whether code layers' GitHub import reaches an
enterprise host. **None is reachable until Claude Desktop is registered with Figma**, one click in
the dialog above.

**The structural question is now unavoidable rather than optional.** This page documents **two routes
with different capabilities, different failure modes and different registration** — a remote
connector that works today, and a local server that is running and unwired. Written as one page about
one surface, it cannot carry an `Audited` date honestly, because half its subject is always in the
other state. **One page with two dated sections, or two pages, is the Composer's call**, and it is the
thing blocking a clean date more than any missing measurement.
