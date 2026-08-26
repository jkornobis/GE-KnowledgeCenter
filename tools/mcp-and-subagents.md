---
type: Tool
title: "Tool: MCP servers and real subagents"
description: "MCP registration is per agent, one product can present as several servers, and a real subagent is the only mechanism that buys genuine independence — with the precondition that gates asking for one"
status: draft
serves: [Agile Facilitator, Agile Auditor, Software Engineer, Product Owner]
generated: { by: human:jkornobis, at: 2026-08-26T16:53:30+02:00 }
---

# Tool: MCP servers and real subagents

Audited 2026-08-26 by User Researcher. In-harness capability. **No Context7 entry, no issue tracker, no Stack Overflow tag** — a capability audit, not a library page. Evidence is this estate's own dated record, most of it generated in the week before this audit.

Re-audit: 90 days — default, not measured (the protocol is stable; what changes is which servers are wired, which is per-estate and belongs in `roster.md`)

**Chair:** Agile Facilitator — `project/tools_lineage_full.md` names **MCP servers + real subagent spawning** as this chair's current best-in-class. Shared with every chair in use; the *routing* of them is this chair's alone.
**Lineage:** the Agile Facilitator's leap — **agent orchestration**, LLM tool-calling and frameworks (2022–23) with **MCP as the protocol layer (Nov 2024)**, against an origin of shell pipes (Jan 1973) and `make` (Feldman, Apr 1976). Lag **~48 years**, and the principle it actioned is the oldest one here: *separation of concerns; do one thing well.* `project/tools_lineage_full.md`

## Critical (verified this session)

- **Agile Facilitator — MCP registration is per agent, not per machine.** Enabling a server and wiring an agent to it are **two separate acts**. Verified the hard way: a vendor's Dev Mode server was confirmed live and healthy on its port by a second instrument, while the tool bound to it returned setup instructions across four probes and a client restart. **The vendor's own dialog listed the agents separately, one wired and one not.**
- **Agile Facilitator — one product can present as several servers, and the parameter shape is how you tell them apart.** Three servers for one design tool were introspected: one with **7 tools and no parameters at all** (it operates on the current selection, so it needs none) and two with the full set requiring explicit identifiers. **No parameters means selection-scoped; parameters mean addressable.**
- **Agile Facilitator — a server can disconnect mid-session and its tools simply cease to exist.** Observed this session: a 32-tool server vanished from the available set with a notice, and did not return. **Tool availability is a runtime property, not a configuration one.**
- **Software Engineer — tools can be deferred rather than loaded.** Schemas are fetched on demand; an un-fetched tool is *named but not callable*. **A tool absent from the immediate set may be one search away rather than unavailable** — the same mistake as reading a failing registration as no access.
- **Agile Auditor — a real subagent is the only mechanism invariant 3 accepts for genuine independence.** The personas are one model in one context, so their agreement is not corroboration. **A spawned subagent with no session history, handed a file-backed ledger, is independent *and* remembering** — the combination `prior_art_bmad.md` argues neither this system nor its nearest comparable had.
- **Product Owner — the spawn is the Composer's yes to give**, and `agents/tools/yang/README.md` adds a precondition in front of it: **the musician must have reached its own instrument's limit first**, evidenced. A request citing a *tool* limit should expect refusal, because another body inherits the same tools.

## Known issues — what breaks, from first-hand record

**No tracker exists for a protocol layer as this estate experiences it.** The record below is dated and first-hand.

| Failure | When | What it costs the chair |
|---|---|---|
| **A registration fails while a working one answers** | 2026-08-25 | four probes read as "no access" to a product that was reachable the whole time. **Occurrence seven** of `patterns.md`'s oldest fired row |
| **A failing tool returns polite, plausible instructions** | same | a dead endpoint refuses the connection; a misconfigured one *explains*. **A helpful error reads like a diagnosis and is only ever a symptom** |
| **Registry discovery returns empty for terms guaranteed to match** | recorded in `register.md` | `search_mcp_registry` and `list_connectors` returned nothing in a session demonstrably holding several connectors. **The schemas exist; the surface answers nothing** — so the registry arm of a Tool Discovery sweep is not usable here |
| **Servers requiring authorisation cannot be authorised non-interactively** | recurring | the OAuth flow needs a session that can prompt. In a non-interactive run the capability is simply absent, and saying so is the whole remedy |

## Limits — where this instrument stops

- **A subagent inherits the same tools**, so it fixes a *reasoning* limit and never a tool limit. This is the distinction every tool page in this library marks for exactly this reason.
- **Registration is not discoverable from inside.** A session cannot tell whether a server is unwired or the product is down without a **second instrument on a different layer** — which is the oracle rule, and the only reliable move.
- **Availability is per session.** A server present at the start may be gone by the end, and the reverse.

The first is a **reasoning-limit boundary**; the second and third are **tool limits**.

## Recommended (Composer to accept/decline)

- **Agile Facilitator — before reporting any capability as absent, check whether a different registration of the same product is answering.** This estate has now paid for that lesson once, in full. — status: **proposed**
- **Agile Facilitator — record the parameter shape when introspecting a new server**; it identifies the route more reliably than the server's name does. — status: proposed
- **Agile Auditor — the spawned-subagent-plus-ledger combination is written down and still not built.** `tools_lineage_full.md` lists this chair's waiting implementation as *"fires itself"*, and this page is where the mechanism is now described. — status: proposed
