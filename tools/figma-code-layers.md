---
type: Tool
title: "Tool: Figma — code layers"
description: "Figma's code layers, the interactive code that sits on the canvas: what Figma's help page says they are, the five ways in, editing, extracting back to design layers, the MCP import, access and AI credits, the limits it states and the long list it does not — read from first-party pages on 2026-11-11 and never probed, with the status held at open beta"
status: draft
claim_level: documented
card: tools/figma.md
serves: [UX Designer, Design Engineer, User Researcher]
generated: { by: agent:ge-knowledgecenter, at: 2026-11-11T23:30:00+01:00 }
sources:
  - resource: https://help.figma.com/hc/en-us/articles/44193259600535-Code-layers-in-Figma-Design
    title: "Code layers in Figma Design — first-party, read in full 2026-11-11; the page shows no last-updated date"
  - resource: https://www.figma.com/blog/build-by-design/
    title: "Build by Design — Figma's launch post; the facts below that cite it were recorded on 2026-10-24 and not re-read on 2026-11-11"
  - resource: https://releasebot.io/updates/figma
    title: "Releasebot's Figma feed — an aggregator named in a search result and not opened; secondary, cited only for the 3 November 2026 note that still calls code layers open beta"
---

# Tool: Figma — code layers

Re-audit: 30 days — inherits the Figma clock. **No probe has run on this page**: every statement below
is what Figma's pages say, at the level stated beside it, and the `Audited` line other Figma pages carry
does not exist here because nothing was driven.

## Status — read this before anything else

**Open beta, per Figma's own help page (read 2026-11-11), on Starter, Professional, Education (not K-12),
Organization and Enterprise.** A secondary report of Figma's release note of 3 November 2026 still
lists code layers as open beta. **No general-availability notice was found.**

**The Composer reports code layers as "published" on his account** (2026-11-11), and when asked what that
meant he answered *"open beta reached my account"*. That is one account's observation of access, not a
change of status. The page says *open beta* until a first-party page says otherwise.

**The router's account flag is the live test** (`tools/figma.md`, *Before planning around a feature*):
read `code_layers_enabled` on the account in front of you. It was false on every plan on 2026-10-24 and
is a fact about that date only.

## What it is

Figma's help page defines a code layer as *"an interactive prototype backed by running code that sits
directly on the canvas."* It is a canvas node, so Eyes First applies unchanged: what it renders is judged
on the image (`tools/figma-method.md`).

## Ways in — five, as documented

| Way in | What the page says |
|---|---|
| Empty layer, prompted | Select **Code** in the toolbar (or press B), draw or pick a frame size, then prompt the Figma agent |
| **Build selection** | Select design frames, choose Code, then Build selection; or prompt the agent with several frames |
| A webpage | The Figma Chrome extension's **Capture code**, then paste into a Design file |
| A GitHub repository | Clone a connected repo. **Figma stores the clone; branches are supported and a pull request can merge changes back** (recorded 2026-10-24, not re-read) |
| A local folder | Upload it. **The page gives no steps** |

## Editing and reloading

Prompt the agent, open the code editor, or use the **Edit tool** to select elements and change colours,
padding or text styling, then **Apply** in the chat. **Reload code layer** shows the change.

## Extracting back to design layers

Three options: **Current state** (the whole page), **Select element**, **Record a flow** (several frames for
a sequence of screens). Extracted layers can be edited and the changes pushed back to the code layer.

## The MCP import

A coding agent can import a project as a code layer through the Figma MCP server; the page's example
prompt is *"Import this project as a code layer in <Figma file URL>."* The remote server lists a
`send_code_to_figma` tool for it (`tools/figma-mcp-remote.md`). **Imports can take 10 minutes or more,
some projects need changes to run, and an MCP import needs a Full seat.** Whether an import ran is judged
by looking at the layer.

## Access and cost

- **Edit access to the file** is required to edit; a **Full seat** for an MCP import.
- **Only Enterprise plans can opt out**, by turning off AI features, which turns off every other Figma AI
  feature with it.
- **AI credits:** *"Code layers will use AI credits in open beta"*, and consumption varies with task
  complexity. **An MCP import uses no credits; later prompting of the Make agent does.** The page states no
  credit amounts and links a separate credits article that was not read.
- **The free window ended on 2026-11-04** for creating and editing in a code layer on paid plans (Figma's
  help page as recorded 2026-10-24, and still stated when searched on 2026-11-09). Treat every code-layer
  task as using credits and ask before running one.

## Limits Figma states

- **Not every GitHub repository works.** The page links requirements and limits and does not list them.
- **Shaders** need the Chrome browser and the HTML-in-Canvas flag, and are not supported in the Figma
  desktop app or in other Chromium browsers.

## Not documented — and so not claimed here

The last-updated date of the help page · supported frameworks · import size or other numeric limits ·
credit amounts · export or hand-off formats beyond extracting to design layers · a full list of known
limitations · whether the GitHub import reaches a self-hosted GitHub install. **Silence is not a yes and
not a no:** the library measured in July 2026 that the Figma Make GitHub connector reached `github.com`
only. That is a measurement about Make, not about code layers, and says nothing about them.

**Also unknown:** whether the Plugin API (`tools/figma-method.md`) can read or write a code layer's source.

## Probes owed — cheapest first, proposals to the Composer

1. **Account check, no credits:** on the Composer's tenant, confirm the **Code** tool (key B) exists and
   whether a beta badge shows; read `code_layers_enabled` from `whoami`.
2. **A tiny import:** import a small local project through the remote MCP, recording the credit balance
   before and after, how long it took, and whether it ran.
3. **The Plugin API:** read a code-layer node with a plugin and record its type and any reachable source.

**One tenant is one tenant.** A result from the Composer's plan is not a result for every plan.

## What would mislead a reader later

- *Open beta* may be out of date inside months, and a move to general availability could change plans,
  seats or credits. **Re-read the help page before relying on any row here.**
- The help page has no last-updated date, so its staleness cannot be read from it.
- Names move: the tool name `send_code_to_figma`, and *Figma agent* against *Make agent*.
- This page holds no finding from a probe. `tools/figma-surface.md` holds the earlier account of the same
  feature set that this page replaces for code layers, with its own dates.
