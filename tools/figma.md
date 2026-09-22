---
type: Tool
title: "Tool: Figma — router"
description: "The one page an orchestra fetches first for anything Figma: every page this library holds on the surface, keyed by what the work needs, plus the identity table that tells the three MCP servers apart by their parameter shape"
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
| calling the **remote** MCP server — `fileKey` + `nodeId` | [`figma-mcp-remote.md`](figma-mcp-remote.md) | **working**, re-audited 2026-09-22 — 37 tools, Generative Plugins now a full family |
| calling the **desktop** MCP server — selection-scoped, no parameters | [`figma-mcp-desktop.md`](figma-mcp-desktop.md) | **out of scope by design** — loopback-scoped to the machine running Figma's desktop app; this estate runs on the tower, the remote server already covers it |
| the product surface — Skills UI, plugins, connectors, driven by eyes and hands | the product-surface audit — **deliberately unpublished** | audited 2026-08-03, **and it stays home**: `index.md` rules it *"cannot be published because it names an employer's systems"* |
| reviewing a multi-screen design system, or judging when it's too early to | [`../method/design-review.md`](../method/design-review.md) | recorded from a source document, screened, **not independently verified** |
| a surface where an assistant proposes actions between a person and a process | [`../method/ai-assistant-patterns.md`](../method/ai-assistant-patterns.md) | recorded, the Composer's own rulings on one product — **not tested on a second** |
| timeline animation — keyframes, easing, Figma Motion specifically | [`../method/figma-motion.md`](../method/figma-motion.md) | recorded from a reference sheet — **not run against the live API** |
| mapping a whole team's folders and files — no MCP tool does this | [`../method/figma-team-map.md`](../method/figma-team-map.md) | sourced from current REST docs — **procedure not yet run end-to-end** |

**Read the identity table below before opening either MCP page**, because the three servers are told
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



