---
type: Method
title: "Multi-Agent Canon Audit — 2026-07-03"
description: "The orchestra mapped against the 2026 multi-agent state of the art"
status: draft
generated: { by: human:jkornobis, at: 2026-07-03T11:32:33+02:00 }
---

# Multi-Agent Canon Audit — 2026-07-03

The orchestra mapped against the 2026 multi-agent state of the art. Method: an orchestrated **13-agent workflow** — 6 independent web-verified researchers established the canon per area, 6 auditors compared it against the inventory (blind to grade inflation), 1 max-effort synthesis. Independent check, not persona self-assessment (see ADR-47).

**Coverage (63 distinct patterns):** 14 have · 23 partial · 13 missing · **13 not-applicable-by-design**.

**Verdict:** the coordination + memory spine is genuinely implemented (orchestrator-workers, single-writer, context-over-proliferation, memory hygiene). The 13 not-applicable are correctly excluded *by design* — the distributed-fleet / networked-agent patterns. The real gap is **one coherent cluster: untrusted-content security + automating disciplines that today exist only as human habit.**

## The gap — ranked

**HIGH**
- **Spotlighting** (missing, *known*) — tag fetched content as data-not-instructions. The system ingests untrusted content (Figma, web, enterprise search) with no injection defense; a poisoned doc could steer the single writer. **Highest-impact, lowest-cost first move. → Adopted 2026-07-03 (ADR-52), with an injection screen.**
- **Offline evals wired to a CI gate** (partial, *new*) — the eval set, invariant set, and benchmark exist but every run is manual; a hand edit to `brain/` can silently break an invariant.

**MEDIUM — security cluster (mostly NEW):**
- Prompt-injection screen / Prompt Shields (missing, new) — detection half of injection defense.
- CaMeL / dual-LLM quarantine (missing, new) — hand risky input to a quarantined context; extends the existing subagent-isolation mechanism as a security boundary.
- Policy-as-code runtime block (missing, new) — hard-block irreversible actions in a Claude Code hook, not just the prompt.
- OWASP Top-10 Agentic (ASI01-10) as a scored DoD (partial, new); OWASP LLM Top-10 as an enforced adversarial DoD line (partial, new); SAIF observability leg (partial, new).
- Risk-tiered approval gating (partial, known) — tiers vs uniform prompting, to avoid approval fatigue.

**MEDIUM — coordination / reliability / memory (mostly known):**
- Router + model cascade (partial, known) — a heuristic proposing the tier vs manual Fortissimo.
- Debate-as-spawned-subagent (partial, new) — make the high-stakes verification path an explicit real second context.
- Magentic task ledger (partial, new) — a per-task fact/plan/progress "score sheet" + stall cue.
- Reflexion retry-with-critique (missing, known); graceful degradation / honest partial exit (missing, new); durable per-step checkpoint-resume (partial, known); loop detection / no-progress halt (partial, known); deterministic verification gates at handoffs (partial, new).
- Memory: named semantic/episodic/procedural split (partial, known); Mem0-class add/update/delete reconciliation (partial, known).
- Eval: LLM-judge de-biasing (partial, known); groundedness/faithfulness scoring (partial, known); true pass^k (partial, new); online trace sampling (missing, new).
- Interop: **llms.txt** (missing, known); root **AGENTS.md** contract (partial, new).

**LOW:** cost/token runtime circuit-breaker (known); scheduled idle memory consolidation (known); OpenTelemetry GenAI traces (new — underpins SAIF observability + online eval); judge cost governance (new); compaction pre-distill (new); self-editing memory paging (new); trajectory-level eval (new); AI-authored-change provenance gate (new); blackboard control-unit (known, deliberately not adopted); per-delegation termination contracts (known); MCP Apps (new, no target — not a server).

## Not applicable — by design (correctly excluded)
Hierarchical supervisors · swarm/decentralized handoffs · group-chat LLM turn-selector · market/auction (Contract Net) · dynamic/optimizable topologies · **A2A** + Agent Cards · MCP Registry · ACP · ANP · **sample-and-vote consensus** (correlated in one context — would amplify a shared error) · AgentOps replay platforms · agent cryptographic identity (SPIFFE/OAuth). All target distributed multi-context fleets; the single-context, single-writer, human-governed design makes them moot.

## The answer to "what did I miss?"
The **governance/security column** — injection defense (spotlighting, prompt-screen, dual-LLM quarantine), policy-as-code enforcement, and OWASP/SAIF scoring — is the genuinely NEW blind spot. The reliability/memory partials were mostly already on the known-gaps list. **First move: spotlighting — adopted 2026-07-03 (ADR-52): spotlighting + an injection screen** (invariant #6 + the Spotlighting protocol). Dual-LLM quarantine adopted 2026-07-03 (ADR-53). Policy-as-code hard-blocks adopted 2026-07-03 (ADR-54). OWASP adversarial DoD line adopted 2026-07-03 (ADR-55). **Security cluster closed.** Full 63-pattern detail: workflow run `wf_c9d658ca-6b3`.
