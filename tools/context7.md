---
type: Tool
title: "Tool: Context7"
description: "Audited 2026-07-20 by User Researcher"
status: draft
serves: [Design Engineer, Software Engineer, Product Owner, User Researcher]
serves_all: true
generated: { by: human:jkornobis, at: 2026-08-16 }
---

# Tool: Context7

Audited 2026-07-20 by User Researcher. MCP-mediated. Provided by Upstash. An MCP server that injects up-to-date, version-specific software-library documentation and code examples into the prompt on demand.

Re-audit: 90 days — default, not measured (but this page is separately **owed a real re-audit** regardless of the clock — see "Still owed"; a cadence measures rot, it does not discharge a debt)

**Wiring status (2026-07-20):** wired **keyless** via project-scoped `.mcp.json` at repo root, server `@upstash/context7-mcp` v3.2.4. Verified this session that the server **boots** keyless (`running on stdio`); it connects to Claude Code on the next session start. Still **not** live-schema-introspected — the tool-name discrepancy below stays `UNVERIFIED` until it's connected and a call is actually made. Whether keyless calls succeed at runtime (vs. reduced-limit/rejected) is a runtime fact not yet confirmed.

Sources verified this session:
- https://context7.com/docs/overview
- https://context7.com/plans
- https://github.com/upstash/context7

## First connected call — 2026-08-08 (not a re-audit)

**The server ran, keyless, and returned real content.** Two `query-docs` calls against `/figma/plugin-typings` returned the `DefaultShapeMixin` and `VectorNode` interfaces from `figma/plugin-typings/_autodocs/`. This closes exactly two of the open items and **no more**:

- **Keyless runtime is confirmed.** Calls are neither rejected nor visibly hard-limited.
- **The tool-name conflict is resolved: it is `query-docs`** (params `libraryId`, `query`), the repo README's name — *not* the vendor docs' `get-library-docs`. The `UNVERIFIED` mark on that line is lifted.

**Deliberately not re-dated.** A re-audit re-verifies every Critical fact live and updates the `Audited` line; this was two calls made in the course of other work. Pricing, coverage boundary and install paths remain doc-sourced from 2026-07-20. The page is still due a real re-audit.

## What it is (one line)

On-demand, sourced, version-pinned library docs — the fix for stale/hallucinated API facts. Scope is **software library documentation**, not general web research: it does not replace WebSearch/WebFetch for prior art, standards (WCAG/RGAA), or any non-code knowledge.

## Critical (verified this session)

- **User Researcher** — Context7 is an MCP server exposing two tools: `resolve-library-id` (library name → a Context7 id like `/vercel/next.js/v15.0.0` or `/mongodb/docs`) then a docs-fetch tool (id + query/topic → doc chunks). **UNVERIFIED — name conflict:** the vendor docs describe the second tool as `get-library-docs` (params: library id, optional `topic`, `tokens` default 5000); the current repo README describes it as `query-docs` (params: `libraryId`, `query`). Sources disagree — confirm the exact name/params by introspecting the live schema on connect. Verified via https://github.com/upstash/context7 and https://context7.com/docs/overview.
- **User Researcher** — Verification posture: because the server is not connected this session, every capability here is doc-sourced, not schema-introspected. A re-audit on connect should replace this line's `UNVERIFIED` marks. Same discipline as any User Researcher link claim.
- **Software Engineer** — Install is a standard MCP add, low cost, shared by every chair once wired. Two paths: local via `npx ctx7 setup` (OAuth + key generation + client flags `--claude` / `--cursor` / `--opencode`; needs Node 18+), or remote MCP URL `https://mcp.context7.com/mcp` with `CONTEXT7_API_KEY` passed as a header. Supported clients include Claude Code, Cursor, VS Code ("30+" for manual config). Verified via https://github.com/upstash/context7.
- **Software Engineer** — Boundary: **read-only**. It retrieves docs; it writes nothing, deploys nothing. No deploy authority to guard.
- **Product Owner** — Auth/seat/cost: works without a key at reduced limits; a free key raises limits and unlocks private repos. Free tier = 1,000 API calls/month (blocked after, +20 bonus/day while blocked); Pro $10/seat/mo = 5,000 calls + $10/1,000 overage; private-repo parsing $25/1M tokens. Budget implication: the free 1,000/mo is shared across the whole orchestra's usage. Verified via https://context7.com/plans.
- **Product Owner** — Coverage boundary (known failure mode): only libraries already in Context7's index are available; community-contributed docs carry no accuracy guarantee; generic (non-version-pinned) queries may return a default version. Not a general knowledge source. Verified via https://context7.com/docs/overview and repo README.

## Recommended (accepted by the Composer 2026-07-20)

- **Software Engineer** — Reflex: before writing non-trivial code against a named third-party library (Next.js, Figma Plugin API, MCP SDK, etc.), resolve + fetch its Context7 docs first rather than relying on training memory. — status: accepted
- **User Researcher** — Add Context7 as a *first* stop for "what's the current API for library X" questions, falling back to WebFetch of official docs when the library isn't indexed or the answer isn't code-API-shaped. — status: accepted
- **Design Engineer** — Use it to pull current, version-correct docs for CSS/motion libs and component frameworks when bridging Figma↔code. — status: accepted
- **Whole room** — Treat it as a shared borrowed surface, not a User Researcher monopoly; any chair touching a named library may call it. — status: accepted

> Note: all four accepted while the server is **not yet connected** — they take effect as reflexes only once Context7 is wired (see "Not yet done" below).

## Still owed (for a clean live audit)

- **Connect + re-audit.** The server is wired but hasn't run inside a connected session. On the next session start, accept the `.mcp.json` server, make one real call, then re-audit to replace the `UNVERIFIED` tool-name marks with schema-introspected facts and update the `Audited` date.
- **Confirm keyless runtime.** Boot is verified; a live retrieval keyless is not. If calls are rejected or hard-limited, add a free API key: get one at https://context7.com/dashboard (Composer only — account + credential), then add `"--api-key", "<KEY>"` to the `args` in `.mcp.json`, or better, reference it via env var so the key isn't committed.
- **Re-confirm pricing live** at the same time (free-tier numbers are vendor-changeable).
