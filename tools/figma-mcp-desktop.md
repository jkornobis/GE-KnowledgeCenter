---
type: Tool
title: "Tool: Figma MCP — the desktop server"
description: "The Figma MCP server inside the desktop app, reached over a loopback port on the machine that runs it: ten tools, none taking a fileKey, half with no declared parameters at all — live-audited 2026-10-24 from a session on that machine, after five passes from the tower that structurally could not reach it"
status: draft
serves: [UX Designer, Design Engineer]
generated: { by: human:jkornobis, at: 2026-08-25T23:58:02+02:00 }
card: tools/figma.md
---

# Tool: Figma MCP — the desktop server

Audited 2026-10-24 by User Researcher, **live**, from a session running on the same machine as Figma's desktop app — the first audit since 2026-07-04, and the scope it covers is stated in the sixth pass below. MCP-mediated; **defaults to the current selection**, and also accepts a `nodeId` it does not always declare.

Re-audit: 30 days — measured; inherits the Figma clock.

**The 2026-09-24 acceptance of this page as overdue is spent.** It held because no instance ran on
the machine that runs Figma's desktop app; on 2026-10-24 one did, which is the single condition the
2026-09-22 closing paragraph named for reopening it.

**Chair:** UX Designer (`roster.md`), same as the remote route.
**Lineage:** shared with [`figma-mcp-remote.md`](figma-mcp-remote.md).
**Route identity (2026-10-24):** the `mcp__Figma__*` namespace, **10 tools, none with a `fileKey`**,
five with `"properties": {}` and five with an optional `nodeId`. *The 2026-07-04 tell — "7 tools,
every one with no parameters" — no longer holds; the reasoning is in the sixth pass.*

**Why this page exists separately.** It is the half of the old `figma.md` that could not be dated,
and keeping it joined to the remote route was what prevented that route from being dated either.
**A page whose subject is unreachable should say so in its own header, not drag another page's clock
down with it.**

**Who can reach it:** only a session running on the machine where Figma's desktop app runs, because
the server listens on that machine's loopback address. A session on the tower still cannot, for the
structural reason in the fifth pass.

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

## Fourth pass — 2026-09-22, consistent with every prior one

**The 28-day remote re-audit (`figma-mcp-remote.md`) found no zero-parameter, desktop-shaped tool in
this session's connector list at all.** Read together with this page's own three prior passes, that is
not a new finding — it is the same one a fourth time: this route has never been reachable from Claude
Code. **What this pass got wrong about *why*, corrected within the hour by the Composer's own
screenshot: it is not about which agent Figma's dialog names.**

## Fifth pass — 2026-09-22, the actual mechanism, verified rather than inferred

**The Composer's screenshot of Figma's own "Set up third-party agents for Figma MCP" dialog showed
`Claude Code CLI` already toggled on** — the same session this page. That directly falsified this
page's four prior passes' shared assumption, which was *"only Claude Desktop has ever been the
target."* Wrong: Claude Code CLI was a target, and was already enabled, and the tools still were not
there. **The real mechanism, found by asking where this session actually runs rather than what Figma's
dialog says:**

```text
hostname                                          kornobis-srv   (the tower — SSH, not the Composer's machine)
curl http://127.0.0.1:3845/mcp   (the desktop server's documented local port)
                                                   unreachable — nothing listens on this host
```

**The desktop MCP server is loopback-scoped to whatever machine runs the Figma desktop app —
`127.0.0.1:3845`, sourced from Figma's own local-server-installation docs.** Figma's desktop app runs
on the Composer's own machine. **This session runs on the tower, reached over SSH.** `127.0.0.1` on
the tower is the tower, not the Composer's laptop — so no toggle, no per-agent registration, and no
`claude mcp add` command run *here* can ever reach it. The mechanism is structural, not a missing
click, and every prior pass on this page diagnosed the wrong layer: registration was checked, the
account was checked, the per-agent dialog was checked — the one thing never checked was **which
machine is asking.**

**What would actually unblock it, named without doing any of them unprompted:** an SSH tunnel forwarding
a tower-side port to `127.0.0.1:3845` on the Composer's machine (`ssh -R` from his side, or `-L` from a
session already positioned there), or running a Claude Code session locally on the same machine as the
Figma desktop app instead of on the tower. **Both are the Composer's call** — one is a standing tunnel
on infrastructure he does not fully control from here, the other changes where a session runs.

### The Audited date still does not move, and now for the right reason

**Still 2026-07-04.** Not because a button is unclicked — four passes believed that and were
increasingly precise about the wrong thing — but because **no session running on this host can ever
audit this route live**, by construction. A live re-audit needs either the tunnel or a locally-run
session; until one exists, `check_tool_audit_freshness.mjs`'s red is the only honest reading, and it
will stay red past any cadence, correctly, for a structural reason rather than a procedural one.

## Closed — the remote route already covers it, 2026-09-22

**The Composer's own read, immediately after the mechanism above: this GE runs on the tower, the
remote connector is already the one doing the work, and there is no reason to chase a loopback route
this host structurally cannot reach.** `claude mcp list` on this host shows exactly one Figma entry —
`https://mcp.figma.com/mcp`, connected — and Figma's own documentation (fetched during the 2026-09-22
remote re-audit) states the remote server *"supports the broadest feature set, including
write-to-canvas"*, with the desktop route positioned for *"specific organizational and enterprise use
cases."* **Nothing this estate does from the tower needs the desktop route**, and the Figma desktop
app itself remains the Composer's own client, for his own eyes and hands, independent of what any GE
instance connects to.

**This page's status changes from *blocked, needs a fix* to *out of scope by design.*** Not
re-attempted going forward unless the Composer starts a Claude Code session locally on the same
machine as Figma's desktop app — the one condition, named above, under which this route would ever be
reachable. The four-pass diagnostic history stays, because it is what taught the actual mechanism; the
open questions about Config 2026 capabilities specific to the desktop route (code layers, local Motion
authoring) stay unanswered by design rather than by gap.

## Sixth pass — 2026-10-24, live, and the route is reopened

**The condition the closing paragraph named was met.** The Composer opened a Claude Code session in
the Claude desktop app on his own machine — the one that runs Figma's desktop app — so `127.0.0.1`
was, for the first time, the right machine. This is the first pass on this page that ran on that
machine.

```text
Test-NetConnection 127.0.0.1 -Port 3845     TcpTestSucceeded : True
GET http://127.0.0.1:3845/mcp               400   (a server is there; it expects an MCP request, not a bare GET)
```

**The first call still answered with setup instructions** — *"you need to enable the Dev Mode MCP
Server"* — **twice, while the port was open.** A restart of the Claude desktop app cleared it, and
the next call returned data. So that message is what the connector says whenever its own connection
is not live, **not a reading of Figma's preference.** It is the same trap the third pass recorded:
an instrument's self-report read as a fact about the subject. Here it was caught because the port
was probed independently before the message was believed.

### What was measured

**The inventory, from the session's own tool list:** 11 tools at connect; one,
`create_design_system_rules`, dropped out of the list mid-session when the server reconnected, so
**10 were reachable** at the time of the calls below. The dropped one is recorded rather than
counted, because its absence was observed once and not explained.

| Declared parameters | Tools |
|---|---|
| **none** — `"properties": {}` | `get_metadata`, `get_design_context`, `get_screenshot`, `get_code_connect_map`, `add_code_connect_map` |
| optional `nodeId` (plus logging-only `clientFrameworks` / `clientLanguages` on some) | `get_variable_defs`, `get_code_connect_suggestions`, `get_figjam`, `get_motion_context`, `send_code_connect_mappings` (which also requires `mappings`) |

**No tool declares a `fileKey`.** That, with the namespace, is the identity that survives — not the
absence of parameters.

**An empty schema does not mean no parameters.** `get_metadata` declares nothing, yet called with a
`nodeId` it returned that node. Its own description, and the descriptions of the other four
empty-schema tools, say a `nodeId` is accepted. **So for this server the schema under-states the
tool, and the description is the better reading** — the opposite of the usual rule that the schema
is the contract.

**"Selection-scoped" is a default, not a limit.** With no arguments:

- `get_metadata` did **not** fail on an empty selection: it listed the open document's top-level
  pages and asked for one of their ids.
- `get_variable_defs` answered *"Nothing is selected"* — selection-bound when no `nodeId` is given.

**One unexplained shape, recorded as observed:** a page id passed to `get_metadata` came back as a
bare canvas node at 0 × 0 with no children. Whether that is because the page was not the one open in
the desktop app (Figma loads pages on demand) was **not tested**.

### What this pass did NOT verify

- `get_screenshot`, `get_design_context`, `get_figjam`, `get_motion_context` — not called: nothing
  was selected and no target was agreed for them.
- `get_code_connect_map`, `get_code_connect_suggestions` — not called.
- `add_code_connect_map`, `send_code_connect_mappings` — **deliberately not called**: they write
  mappings into a real file, and no file was offered for writing.
- The open questions from earlier passes about Config 2026 capabilities on this route — code layers,
  Motion authoring, Make — **remain open**. They are not Critical facts this page holds, which is why
  the `Audited` line moved without them; they are named here so the move is not read as covering
  them.

### What changes, and what does not

**Changes:** this route is **reachable from any session running on the Composer's own machine**, and
its identity is now 10 tools without a `fileKey`, not 7 without parameters. The 2026-09-22 *out of
scope by design* status no longer holds.

**Does not change:** a session on the tower still cannot reach it, for the loopback reason the fifth
pass found. The remote server is still the route for work from a Figma link without the desktop app
open. The two now answer **different questions**: the desktop route reads *what the Composer is
looking at*, the remote route reads *what a link points to*.
