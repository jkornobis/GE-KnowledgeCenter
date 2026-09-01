---
type: Tool
title: "Tool: Figma MCP — the remote servers"
description: "The fileKey-scoped Figma MCP servers: 33 tools against the 27 once recorded, the bulk Code Connect planner, and what a live re-audit verified on 2026-08-25"
status: draft
serves: [UX Designer, Design Engineer, Content Designer, Accessibility Specialist]
generated: { by: human:jkornobis, at: 2026-08-25T23:58:02+02:00 }
---

# Tool: Figma MCP — the remote servers

Audited 2026-08-25 by User Researcher. MCP-mediated, `fileKey` + `nodeId` scoped. Authenticated; **Full seat on the organisation tier**, verified live this session.

Re-audit: 30 days — measured; authority `agents/tools/yang/ux_designer.md` (four Config 2026 capabilities landed inside one audit interval)

**Chair:** UX Designer carries this product (`roster.md`); Design Engineer requires the token lever it serves. Also `Serves:` Content Designer and Accessibility Specialist.
**Lineage:** the UX Designer's leap — *design as a shared act*, Photoshop (1990) → **Figma** (Sept 2016, browser + multiplayer), against paper and paste-up. Lag **~40 years**. `project/tools_lineage_full.md`
**Route identity:** large tool set, **`fileKey` and `nodeId` required**. If a Figma tool takes no parameters, it is the desktop server — see [`figma-mcp-desktop.md`](figma-mcp-desktop.md).

**This page earns its date, and it is the first one that could.** The re-audit below ran live against
this route while the desktop route stayed unreachable — which is exactly the split's purpose. See
[`figma.md`](figma.md) for the router.

**2 · Tools that did not exist in the 27-tool inventory.** That count is superseded:

- **`list_file_components_for_code_connect`** — *"every component and component set **published** to a file's library, with the cross-component **dependency graph** needed to plan Code Connect **in bulk**"*, one entry per component with exhaustive variant options, defaults, instance counts and internal-vs-external dependencies. Takes only a `fileKey`. **This is the most consequential finding of the re-audit** — see below.
- **`get_context_for_code_connect`** — deep descendant tree for one known component, property definitions with types and variant options.
- **`generate_figma_design`** — captures a **live web page by URL** (localhost or external) into an existing Figma file; poll-based, 50 MB cap, single-use capture IDs.
- **`search_design_system`** — query components, variables and styles across libraries; explicitly one intent per query, no OR semantics.
- **`create_design_system_rules`** — now present on the desktop server too.

**3 · `list_file_components_for_code_connect` lands directly on the mission's blocked number.** `brain/orchestra_decisions_log.md` records a client system's mapping distance as **zero of 121 components mapped**, and Code Connect is pillar #1. This tool exists precisely to make that tractable: *"the flat whole-file graph for **dependency-ordered, batched** template generation"*, as opposed to per-component work. **Availability is verified by schema; throughput is not** — nothing has been run against a real file, and that is the next Tool Audit action rather than a claim.

**4 · `add_code_connect_map` is richer than "two tiers".** It now carries a **16-value `label` enum** — React, Web Components, Vue, Svelte, Storybook, Javascript, Swift, Swift UIKit, Objective-C UIKit, SwiftUI, Compose, Java, Kotlin, Android XML Layout, Flutter, Markdown — plus `template` (executable JS) and `templateDataJson`. A mapping is now **per framework**, which the Design Engineer's Yang chain did not account for.

**5 · `get_screenshot` changed its economics.** It now takes `maxDimension` (default 1024, max 65536) and **returns a short-lived URL plus curl instructions rather than inline base64** — base64 is opt-in via `enableBase64Response`, *"strongly preferred because it uses far fewer tokens"*. It also works on FigJam (`/board/`) and Slides (`/slides/`) now, and reports `original_width`/`original_height` alongside the rendered size so a caller can decide whether to re-request larger.

**6 · `get_metadata` with no `nodeId` lists the file's top-level pages** — an affordance for "I don't know which page yet" that did not exist in the audited set.

**7 · And `use_figma`'s own description carries the *why*, which is worth noting against ADR-268.** It states outright: Inter's style is **"Semi Bold"** not `SemiBold`, and **"Extra Bold"** not `ExtraBold`; you **must** use `await figma.setCurrentPageAsync(page)` because assigning `figma.currentPage` is unsupported; and `loadAllPagesAsync`, `setPluginData` and `createImageAsync` are **not supported API**. That is *"don't do X, do Y, because…"* in a tool description — the `Why: carries` test, passed by the MCP layer where the Plugin API reference itself scores `reference only`.

**Why this page is the longest in the estate, stated so its size is not misread as importance.** The Composer, 2026-08-08: *"figma.md is only the first page existing detailed because figma is my main working surface."* **Page detail tracks his attention, not architectural weight** — and the corollary is uncomfortable and worth keeping: `cowork.md` is 105 lines of mostly open questions while its own text says Cowork is *"the surface doing most of the Composer's actual work"*. **The best-documented surface is the one he watches; the least-documented is the one he cannot.**

## MCP server — canonical docs (2026-07-20, User Researcher via Context7)

Pulled from the official `figma/mcp-server-guide` (Context7 library `/figma/mcp-server-guide` — High reputation, 2581 snippets), not recalled. This documents the **server contract** — connection, seats, and the doc-sanctioned purpose of each tool — complementing the hands-on tool-inventory already logged above (line 67's "all 27 tools").

**Connection & hosting**
- Endpoint: `https://mcp.figma.com/mcp`, Streamable HTTP. Config is universal across VS Code, Cursor, Claude Code: `{"mcpServers":{"figma":{"type":"http","url":"https://mcp.figma.com/mcp"}}}`. Any editor supporting Streamable HTTP can connect.
- **Write-to-canvas (create/modify frames, components, variables, auto-layout) is remote-server-only** — not available via a local desktop-app connection. This matches the surface this project already runs on: `use_figma` / `generate_figma_design` / `create_new_file` are the live write path here, confirming we're on the supported remote server, not the desktop bridge.
- For Code Connect, `nodeId` is **required on remote**, optional on desktop.

**Seats & rate limits** (source: `mcp-server-guide/README.md`)
- **Dev or Full seat** (Professional / Organization / Enterprise plans) → per-minute rate limits matching Tier-1 [Figma REST API](https://developers.figma.com/docs/rest-api/rate-limits/).
- **Starter plans, or View / Collab seats** → hard cap of **6 tool calls per month**. Worth knowing before scripting anything call-heavy against an under-seated account.

**Doc-sanctioned tool purposes** (source: `README.md`, `skills/figma-implement-motion/SKILL.md`, `skills/figma-generate-library/references/code-connect-setup.md`, `figma-power/steering/*.md`)

| Tool | Canonical purpose (per docs) |
|---|---|
| `get_design_context` | "Structure of record" for a node — hierarchy, sizing, styling, assets, Code Connect hints. Emits a React + Tailwind representation as the translation foundation. Requires `fileKey` + `nodeId`. |
| `get_metadata` | High-level node map. Use when a `get_design_context` response is too large, then fetch specific child nodes targeted (`get_metadata(fileKey, nodeId)`). |
| `get_variable_defs` | Extracts design tokens — colors, spacing, typography — so generated code references the exact values. |
| `get_screenshot` | Visual render of a selection. |
| `create_design_system_rules` | Takes `clientLanguages` + `clientFrameworks`, returns a template for structuring DS rules; then you analyse the codebase (component organisation, styling approach, patterns, architecture) before finalising. |
| `add_code_connect_map` | Maps one Figma node → code component. Two tiers: **simple** (component path + name) or **template** (executable JS rendering snippets from instance property values). Key params: `nodeId`, `fileKey`, `source`, `componentName`, `label`. |

Note: Context7 also surfaces third-party servers that are **not** Figma's official one — `glips/figma-context-mcp`, `southleft/figma-console-mcp`, `sethdford/mcp-figma`, `xlzuvekas/figma-copilot`. Only `/figma/mcp-server-guide` is first-party; the others are community re-implementations and should not be conflated with the server this repo uses.

## Context7 library index for Figma (2026-07-20, User Researcher)

Curated from Context7's `?q=figma` search — the libraries worth resolving for **this project's stack** (Figma MCP, Code Connect, design tokens/DCTG, plugin authoring, REST API, TS/React design-to-code), so a session can grab the right `/org/project` ID without re-searching. **Filter applied: Trust ≥ 7.5 AND in-stack relevance.** **Trust** is Context7's source-reputation score (0–10; 10 = first-party/official); **Snippets** = indexed code examples; **Bench** = benchmark quality score (100 max, 0 = not yet scored). Source: [context7.com/?q=figma](https://context7.com/?q=figma) via the search API. Full unfiltered list (30 entries) is in git history if the stack ever widens.

### First-party — official Figma (`/figma/*` and official Figma sites)
| Library | ID | Trust | Snippets | Bench |
|---|---|---|---|---|
| Figma Learn (help center) | `/websites/help_figma_hc_en-us` | 10 | 26,106 | 83 |
| Figma Plugin API (dev site) | `/websites/developers_figma` | 10 | 6,945 | 78.49 |
| Figma Plugins (dev site) | `/websites/developers_figma_plugins` | 10 | 4,610 | 77.12 |
| Figma MCP Server guide | `/figma/mcp-server-guide` | 9.6 | 2,581 | 72.4 |
| Figma Plugin API typings | `/figma/plugin-typings` | 9.8 | 685 | 59.16 |
| Figma REST API spec | `/figma/rest-api-spec` | 9.8 | 463 | 75.73 |
| Figma Code Connect | `/figma/code-connect` | 9.8 | 363 | 72.56 |
| Figma + FigJam Plugin Samples | `/figma/plugin-samples` | 9.6 | 139 | 65.4 |

`/figma/mcp-server-guide` is the one this repo's MCP surface runs on (see the canonical-docs section above).

### Third-party / community
| Library | ID | Trust | Snippets | Bench | Why kept |
|---|---|---|---|---|---|
| Figma Types (TS defs) | `/iamtekeste/figma` | 8.8 | 5,418 | 79.54 | Type-safe Figma dev in TS |
| Figma Console MCP Server | `/southleft/figma-console-mcp` | 9.6 | 1,437 | 88.94 | Dense MCP worked examples |
| Tokens Studio (plugin docs) | `/tokens-studio/tokens-studio-for-figma-plugin-docs` | 8.3 | 1,082 | 82.95 | Design tokens / DCTG |
| Figma Context MCP | `/glips/figma-context-mcp` | 8.9 | 688 | 91.53 | Highest-bench MCP docs |
| Create Figma Plugin | `/yuanqing/create-figma-plugin` | 9.8 | 201 | 62.33 | Plugin-authoring toolkit |
| Figma Export (SVG/SCSS) | `/marcomontalbano/figma-export` | 8.8 | 175 | 69 | Design→code asset export |
| Ronas IT Figma Export | `/ronasit/ronasit-figma-export` | 8.4 | 88 | 0 | Figma frame → React JSX |
| Figma to Code | `/bernaferrari/figmatocode` | 9.3 | 25 | 0 | Design→responsive code |

Reading note: high Trust ≠ high Bench — e.g. `glips/figma-context-mcp` (Trust 8.9, Bench **91.53**) documents better than several first-party sites, while some 10-Trust official pages score low on benchmark for thin/edge content. Pick by task: first-party for API/contract certainty, `glips` or `southleft` when you want dense worked examples.

**Dropped from the raw 30 (with reason)** — so the filter is auditable and reversible:
- *Not our stack:* Figma-to-SwiftUI (`daetojemax`, iOS — Trust 4), Cursor Talk To Figma (`sethdford`, Cursor-specific), Unity Importer (`cdmvision`), Uno Platform (`unoplatform`, C#/XAML).
- *Below Trust 7.5:* Figma Copilot (`xlzuvekas`, 4.8), Dodo Payments demo (`dodopayments`, 5.9), JSON-to-Content (`lucsy3012`, 6.8).
- *Niche one-off:* Leading Trim (`markdalgleish` — typography-trim plugin, high Trust but single-purpose).
- *Unused surface:* the three Widgets libraries (`developers_figma_widgets`, `figma_widget-docs`, `figma/widget-typings`) — Figma widgets aren't used here; plugins are.
- *Redundant:* Figma REST API "files" site (`developers_figma_rest-api_files`, 2 snippets — covered by `rest-api-spec`); two duplicate Tokens Studio entries (`websites/tokens_studio`, `tokens-studio/figma-plugin` — kept the higher-bench plugin-docs one).

## Limits — what a reaction is not (2026-09-01, corrected by the Composer)

**Reactions carry navigation and component-state plumbing. They do not carry designed flow, and on a file under construction they are not supposed to.**

Measured on a real file: of the 13 reactions on one terminal screen, ten were `ON_HOVER → CHANGE_TO` variant swaps on nav items and buttons, two were overlays, one was a frame-level `NAVIGATE`. **None of them was the flow the designer had in mind.** That flow was authored *spatially* — screens placed in reading order, `UC8_S1` through `UC8_S7` as siblings on the canvas — with no edge of any kind between them.

**The Composer's rule, and it is the reason rather than the symptom: prototype linking is useful to show at the end, not while building.** Links are wired when there is something to demonstrate — a walkthrough, a handoff, a stakeholder review. Wiring them during construction is waste, because every re-order breaks them, and re-ordering is what construction *is*. Component states are the opposite: authored once and reused, which is why they are the reactions that exist mid-build.

**Three consequences for an agent working in Figma.**

1. **Resolving `destinationId` reads the demo layer, not the design.** A traversal that finds no flow edges has learned that the file is still being built — which is information, not a gap.
2. **Absence of edges mid-construction is correct, and reporting it as a defect is the error.** The finding *"no prototype connection between these two screens"* is true and is a statement about phase, not about quality.
3. **The flow is still readable, just not as edges** — sibling order on the canvas, and text continuity across frames. That is `tools/figma-method.md`'s *eyes first* and the reason it holds: the relationships that matter during construction are visual, and the eye is the instrument that reads them.

**So the section above is a capability fact and this is its boundary.** Both are needed: an agent that believes there are no edges will miss what the tool can do, and an agent that reads edges as flow will misreport a file in progress.

## Second pass — 2026-08-25, through the *other* MCP route

**The Composer asked for the Dev Mode MCP server to be enabled and the page re-audited. The switch is
his — it lives in Figma's own Preferences menu and needs a client restart, and no orchestra
instrument reaches a native app's settings.** But probing before concluding found something the page
did not model: **there are two MCP routes to Figma, not one**, and the second is live.

**The connector route is authenticated and working.** `whoami` returns the Composer's handle and
three plans — an archived View team, a personal Full seat, and a **Full seat on the organisation
tier**. That incidentally **verifies a constraint this estate had only ever asserted**:
`ux_designer_references.md` says Code Connect *"requires a Dev or Full seat on an Org/Enterprise
plan"*, and the seat is there.

**The tool inventory has moved, and the page's own number is the evidence.** This page records
*"all 27 tools inspected"* (2026-07-04). The connector now exposes **33**, and the eight that are new
are whole capability families rather than refinements:

| Family | Tools |
|---|---|
| Shaders | `get_shader_effect`, `get_shader_fill`, `list_shader_effects`, `list_shader_fills` |
| Motion | `get_motion_context` |
| Video | `export_video` |
| FigJam · diagrams | `get_figjam`, `generate_diagram` |
| Skills | `get_figma_skill`, `read_skill_uri` |
| **Weave** | `weave_list_tools`, `weave_run_tool`, `weave_get_tool_inputs`, `weave_get_tool_run_output`, `weave_cancel_tool_run`, `weave_upload_asset` |

**Weave is present and not linked.** `weave_list_tools` returns a setup instruction — the Figma
account is not linked to Weave — so the family exists on the connector and is unprovisioned for this
estate. Dated, and cheap to change.

**The recorded limit is NOT falsified, and saying so is the point.** This page states *"the Figma MCP
cannot invoke an existing plugin — custom or Community — by name or ID."* Weave tools are **published
Weave workflows** (`app.weavy.ai`), a different product; they are not Figma Community plugins. The
limit stands exactly as written. **A new tool family that looks like it might lift a limit is not
evidence that it did.**

### Prototype edges exist in the data model — introspected live, 2026-09-01

> **Read this together with *Limits — what a reaction is not*, below.** Edges existing is a fact about the tool. It is **not** a licence to read flow by resolving them, and this section was written before that distinction was understood.

**Recorded because a page of this library implied otherwise by silence: no Figma page here mentioned prototype edges at all, and an observation from another estate concluded that flow relationships *"have no edges in the graph"*.** Run through `use_figma` on the connector route, read-only, against a real production file:

| Reading | Result |
|---|---|
| `reactions` on a node | **present and populated** — `1,236` nodes carry non-empty reactions on one page of 24,965 |
| A sampled edge | `trigger: ON_CLICK` → `actions: [{ type: 'NODE', destinationId: '2910:102455', navigation: 'NAVIGATE' }]` — a real directed edge with a destination |
| `setReactionsAsync` | **present** — the edges are writable, not merely readable |
| `PageNode.flowStartingPoints` | **present and named**: ten entries, e.g. *"Flow 1 — Onboarding & First Chat"*, *"UC-3 — Summarize Request"* |
| Same file, a second page | `773` of `32,730` nodes with reactions |

**The scope of the claim, declared.** This establishes that the flow graph is in the data model and reachable in one call. **It does not establish that any particular pair of frames is linked** — flow starting points name entries, not transitions, and only some Use Cases on that page had one. A specific *"screen A does not link to screen B"* finding can still be true, and is a statement about the file rather than about Figma.

**Route matters, and it is the whole lesson.** The **Plugin API** carries the complete reaction — trigger, actions, destination, writable. The **REST API** exposes only `transitionNodeID`, `transitionDuration`, `transitionEasing`, **and only the first reaction per node** (Figma developer docs, read 2026-09-01). The **node tree alone** carries nothing. *"The number was about the layer, not the subject"* (`tools/README.md`) — a reader who traverses children and concludes there are no edges has measured the traversal.

**One claim from that estate corroborated rather than contested**, since the same scan measured it: an `INSTANCE` with zero children satisfies a tree query and renders nothing. On that page, **1,530 of 6,939 instances have zero children (22%) and 881 are hidden (12.7%)**. `node.type === 'INSTANCE'` is not proof of functional presence.

### Verified live through the connector route, 2026-08-25

| Claim | Result |
|---|---|
| Authentication and seat | **Full seat, organisation tier** — which verifies the Code Connect precondition `ux_designer_references.md` had only asserted |
| Tool inventory | **33**, against *"all 27 tools inspected"* recorded 2026-07-04 |
| New families since | shaders (4), motion, video export, FigJam, diagram generation, skills (2), **Weave** (6) |
| Weave state | **present, not linked** — returns a setup instruction |
| `get_metadata` by fileKey | works; lists top-level pages without a node id, and surfaces the current selection |
| **`get_code_connect_map`** | **`{}` — zero mappings** on the page tested |
| `get_libraries` | works — **six team libraries subscribed**; organisation and community libraries available, paginated |

**The Code Connect reading is the one that matters, and its scope is narrow on purpose.** It
corroborates the **0 of 121** distance recorded in the decision log **for the page tested**, not
across the estate. One page of one file is what was measured, and that is what is claimed.

**One incidental finding about the file itself, not the tool:** `project/project_team_review.md`
records a page `306:3` named for the project. The file's only top-level page today is `1840:2`,
named for something else entirely. **The project record is stale** — noted here because it was found
here, and it belongs in that file rather than this one.
