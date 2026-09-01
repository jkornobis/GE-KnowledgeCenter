---
type: Tool
title: "Tool: Figma — router"
description: "Router for the three Figma pages: the identity table that tells the three MCP servers apart by their parameter shape, and which route each page covers"
status: draft
serves: [UX Designer, Design Engineer]
generated: { by: human:jkornobis, at: 2026-08-25T23:58:02+02:00 }
---

# Tool: Figma — router

**Split into three pages on 2026-08-25, by the Composer's decision.** This file was one page about
one surface, and it had grown to 485 lines covering three things with different capabilities,
different failure modes and — decisively — **different registration**. It could never carry an honest
`Audited` date, because part of its subject was always in a state the rest was not.

**This page is now the router and the identity table. It carries no findings of its own.**

| Page | Route | State |
|---|---|---|
| [`figma-mcp-remote.md`](figma-mcp-remote.md) | the **remote** MCP servers — `fileKey` + `nodeId` | **working**, audited 2026-08-25 |
| [`figma-mcp-desktop.md`](figma-mcp-desktop.md) | the **desktop** MCP server — selection-scoped, no parameters | **unwired**, audit blocked |
| the product-surface audit — **deliberately unpublished** | the **product surface** — Skills UI, plugins, connectors, driven by eyes and hands | audited 2026-08-03, **and it stays home**: `index.md` rules it *"cannot be published because it names an employer's systems"*. It was linked here as a live route until 2026-09-01 |

**Read the identity table below before opening any of them**, because the three servers are told
apart by their parameter shape and nothing else.

## Critical — re-audit 2026-08-08 (live schema introspection, not recalled)

**1 · There are THREE Figma MCP servers connected, not one.** The 2026-07-04 audit said *"the Figma MCP server, already connected"*. Introspected this session:

| Server | Shape | Tells |
|---|---|---|
| `mcp__Figma__*` | **7 tools, all with `"properties": {}`** — no parameters at all | the **desktop** connection: it operates on the *current selection*, which is why it needs no `fileKey`/`nodeId` |
| `mcp__plugin_figma_figma__*` | large set, **`fileKey` + `nodeId` required** | the **remote** server |
| `mcp__0b22ab40-…__*` | same large set, same required params | a second remote instance |

**This changes a claim the page made from documentation.** It recorded *"write-to-canvas is remote-server-only … confirming we're on the supported remote server, not the desktop bridge."* **Both are present simultaneously**, and the parameter shape is how you tell them apart at a glance — no parameters means desktop-and-selection-scoped.

---

# Tool: Figma

> **On the absence of musician tags (checked 2026-08-08, and it is not a defect).** This is the oldest page in the estate and carries **zero** `[Musician] —` bullets, where `context7.md`, `pdf-reading.md` and `claude-desktop.md` carry 10, 7 and 9. The reason it stays that way: **its per-musician know-how already lives in `agents/tools/yang/uxdesigner.md`**, which is per-musician by construction. Measured rather than assumed — `Eyes First`, `Build with agents`, the front-matter rule and the virtualisation trap all appear in both, and **`strokeCap` / `ARROW_LINES` appear *only* in the Yang file** (this page: 0). Adding tags here would copy Yang into a tool page and recreate the one-law-four-homes drift ADR-261 removed. `tool_audit.md` is amended to say so. **This page's job is what the surface can do; the Yang file's job is how to play it** (ADR-265's split, one level down).



