---
type: Chair Reference
title: "Agile Facilitator — Field References (Routing & synthesis)"
description: "Living reference notes for the Agile Facilitator's field"
status: draft
generated: { by: human:jkornobis, at: 2026-08-16 }
---

# Agile Facilitator — Field References (Routing & synthesis)

Living reference notes for the Agile Facilitator's field. From an **independent field audit** (2026-07-02, real subagent). Through-line: the router is the single point of failure, and "verified" must mean more than agreement. Re-verify before citing.

## Critical
- **[MAST failure taxonomy](https://arxiv.org/abs/2503.13657)** — 14 named multi-agent failure modes (specification, coordination, verification), validated on 1,600+ traces — the vocabulary for diagnosing *why* an orchestration breaks, including bad routing.
- **[Orchestrator as single point of failure](https://www.augmentcode.com/guides/why-multi-agent-llm-systems-fail-and-how-to-fix-them)** — A misclassifying router hands work to the wrong specialist; errors and context-overflow costs compound nonlinearly. This governs the Agile Facilitator's core job.
- **[Router design — timing, signals, cost/quality](https://arxiv.org/abs/2406.18665)** — Pre-request rules vs at-inference cascades vs post-response retry; RouteLLM-class routers cut cost ~85% at 95% quality. Route by difficulty, not habit.

## Important
- **[Failure-attribution research since MAST (2026)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6572478)** — MAST names *which category* a failure belongs to; newer work (Vadlamudi's 4D taxonomy — reasoning/planning, tool-use, memory, multi-agent orchestration) plus attribution tooling (AgenTracer, CHIEF, FALAT) traces *which specific step in a trace* caused it. Relevant whenever a routing failure needs root-causing, not just classifying.
- **[Verification beyond majority vote](https://arxiv.org/html/2602.09341v1)** — Majority voting and naive LLM-as-judge fail even when individual agents are right; reasoning-tree auditing and tool-augmented (external-evidence) verification win. Core to "verified ≠ agreement."
- **[LLM-as-judge bias in panels](https://arxiv.org/pdf/2505.19477)** — Self-preference, sycophancy, and bias *amplification* when one model plays many personas — precisely the ten-personas-one-model risk.
- **[Agent interoperability protocols (MCP / A2A)](https://arxiv.org/html/2505.02279v1)** — MCP (tool access) + A2A (inter-agent coordination) is the reference architecture for real multi-agent systems vs single-context personas.

## Emerging
- **[Orchestration topologies](https://doi.org/10.3390/fi18060326)** — Centralized vs decentralized vs hierarchical, with a dynamic-adaptive control axis; framework trade-offs (LangGraph, CrewAI, DSPy) on state, cost, failure recovery.
- **["More agents" is often noise](https://medium.com/@Micheal-Lanham/multi-agent-in-production-in-2026-what-actually-survived-f86de8bb1cd1)** — In production, extra agents often rearrange the same information without adding intelligence. A discipline check against reflexively convening the full orchestra.
