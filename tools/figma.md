---
type: Tool
title: "Tool: Figma — router"
description: "The one page an orchestra fetches first for anything Figma: every page this library holds on the surface, keyed by what the work needs, plus the identity table that tells the three MCP servers apart by their parameter shape, and the account flags to read before planning around a newer feature"
status: draft
serves: [UX Designer, Design Engineer]
generated: { by: human:jkornobis, at: 2026-08-25T23:58:02+02:00 }
---

# Tool: Figma — router

Re-audit: 30 days — measured; inherits the Figma clock, the same basis and the same wording
`tools/figma-method.md` already carries. **The basis is a proposal rather than a reading:** `tools/README.md` already asserts *"30 days measured for `figma.md`"*, so this line makes the
page state what the README states about it instead of inventing a cadence. **This page still carries no
`Audited` line**, because it argues below that it cannot honestly carry one — that conflict with
`README.md` is filed in `index.md` under `Observed, not yet decided` rather than resolved here.

**Split into three pages on 2026-08-25, by the Composer's decision.** This file was one page about
one surface, and it had grown to 485 lines covering three things with different capabilities,
different failure modes and — decisively — **different registration**. It could never carry an honest
`Audited` date, because part of its subject was always in a state the rest was not.

**This page is now the router. It carries no findings of its own — every finding lives on the page
that owns it, and this table is the one hop to reach it.** Widened 2026-09-21: Figma is the
Composer's main working surface (`tools/README.md` already says so — *"figma.md is only the first
page existing detailed because figma is my main working surface"*), the corpus on it has grown past
the three MCP-shape pages this router used to cover, and a page split across `tools/` and `method/` is
one an orchestra can fail to find by fetching only one of the two. **`start.md`'s routing card now
sends any Figma-touching work here first** — see that page's row — so this table has to be complete,
not partial.

| When the work is | Fetch | Verification state |
|---|---|---|
| mutating, inspecting, or building on the Figma canvas via the Plugin API | [`figma-method.md`](figma-method.md) | live-verified, claim by claim |
| calling the **remote** MCP server — `fileKey` + `nodeId` | [`figma-mcp-remote.md`](figma-mcp-remote.md) | **working**, re-audited 2026-09-22 — 37 tools, Generative Plugins now a full family; **2026-10-24 live listing: 42 tools, one call run (`whoami`); new tools not yet run** |
| calling the **desktop** MCP server — current selection by default, no `fileKey` | [`figma-mcp-desktop.md`](figma-mcp-desktop.md) | **working from the Composer's own machine**, live-audited 2026-10-24 — 10 tools, two reads verified, writes not called; **still unreachable from the tower** (loopback-scoped) |
| the product surface — Skills UI, plugins, connectors, driven by eyes and hands | [`figma-surface.md`](figma-surface.md) | **partial**, probes 1 and 3 run 2026-10-02 on one tenant, probe 4 pending; **code layers (open beta 2026-10-15) and the generally available agent added 2026-10-24 from Figma's pages, read not probed**. Adopted 2026-10-02 and **rewritten for this library** (`#189`): it was kept home because it named an employer's systems, and the rewrite removes them |
| reviewing a multi-screen design system, or judging when it's too early to | [`../method/design-review.md`](../method/design-review.md) | recorded from a source document, screened, **not independently verified** |
| a surface where an assistant proposes actions between a person and a process | [`../method/ai-assistant-patterns.md`](../method/ai-assistant-patterns.md) | recorded, the Composer's own rulings on one product — **not tested on a second** |
| timeline animation — keyframes, easing, Figma Motion specifically | [`../method/figma-motion.md`](../method/figma-motion.md) | recorded from a reference sheet — **not run against the live API** |
| mapping a whole team's folders and files — no MCP tool does this | [`../method/figma-team-map.md`](../method/figma-team-map.md) | sourced from current REST docs — **procedure not yet run end-to-end** |

**Read the identity table below before opening either MCP page**, because the three servers are told
apart by their parameter shape and nothing else.

## Before planning around a feature — read the account's flags

**A feature can be documented, listed and still not usable by the account in front of you**
(`tools/README.md`, the ladder). The remote server answers `whoami` in one call; **read it once at the
start of any Figma task that depends on a newer feature, and plan from what it says.** Record the
flags, never the identity (the screening rule on `tools/figma-mcp-remote.md`).

| `whoami` returns | It decides | Owning page | If it is off or absent |
|---|---|---|---|
| `code_layers_enabled`, account-wide and per plan | whether code layers can be created on that plan's files (`send_code_to_figma` is listed either way) | `figma-surface.md`, *Code layers and the agent, now shipped* | do not plan an import or a Build selection on that plan; say so and ask which plan the file belongs to |
| `specs_enabled`, per plan | whether Specs (through `use_figma`, open beta) can be used on that plan's files | `figma-mcp-remote.md`, fifth pass | treat Specs as unavailable there until a call shows otherwise (the field's exact meaning is read from its name, not tested); prefer a file on a plan where it is on |
| the seat on each plan (View, Collab, Dev, Full) | whether writing to the canvas outside drafts is allowed at all (Full seat) | `figma-mcp-remote.md`, *Seats & rate limits* | a View or Collab seat is read-only here; the documented monthly cap on those seats is unverified |
| the plan tier | the plan Figma bills AI credits against | `figma-surface.md` | image generation and, after 2026-11-04, code-layer tasks use credits: ask before running either |

**Measured once, on 2026-10-24, on one account:** the call succeeded, `code_layers_enabled` was false
on every plan, and `specs_enabled` was true on two of three. **The flags are per account and move
as Figma rolls features out gradually, so a value read on that date is a fact about that date.** Read
it again; do not carry it forward from a page.

## Critical — re-audit 2026-08-08 (live schema introspection, not recalled)

**1 · There are THREE Figma MCP servers connected, not one.** The 2026-07-04 audit said *"the Figma MCP server, already connected"*. Introspected this session:

| Server | Shape | Tells |
|---|---|---|
| `mcp__Figma__*` | **7 tools, all with `"properties": {}`** — no parameters at all | the **desktop** connection: it operates on the *current selection*, which is why it needs no `fileKey`/`nodeId` |
| `mcp__plugin_figma_figma__*` | large set, **`fileKey` + `nodeId` required** | the **remote** server |
| `mcp__0b22ab40-…__*` | same large set, same required params | a second remote instance |

**Superseded for the desktop row, 2026-10-24:** measured live, `mcp__Figma__*` is now **10 tools,
none with a `fileKey`**, five of them declaring an optional `nodeId` — so *"no parameters"* is no
longer the tell; *no `fileKey`* is. Details on [`figma-mcp-desktop.md`](figma-mcp-desktop.md), sixth pass.

**This changes a claim the page made from documentation.** It recorded *"write-to-canvas is remote-server-only … confirming we're on the supported remote server, not the desktop bridge."* **Both are present simultaneously**, and the parameter shape is how you tell them apart at a glance — no parameters means desktop-and-selection-scoped.

---

# Tool: Figma

> **On the absence of musician tags (checked 2026-08-08, and it is not a defect).** This is the oldest page in the estate and carries **zero** `[Musician] —` bullets, where `context7.md`, `pdf-reading.md` and `claude-desktop.md` carry 10, 7 and 9. The reason it stays that way: **its per-musician know-how already lives in `agents/tools/yang/uxdesigner.md`**, which is per-musician by construction. Measured rather than assumed — `Eyes First`, `Build with agents`, the front-matter rule and the virtualisation trap all appear in both, and **`strokeCap` / `ARROW_LINES` appear *only* in the Yang file** (this page: 0). Adding tags here would copy Yang into a tool page and recreate the one-law-four-homes drift ADR-261 removed. `tool_audit.md` is amended to say so. **This page's job is what the surface can do; the Yang file's job is how to play it** (ADR-265's split, one level down).



