---
type: Chair Reference
title: "Agile Facilitator — Field References (Routing & synthesis)"
description: "Living reference notes for the Agile Facilitator's field"
status: draft
generated: { by: human:jkornobis, at: 2026-08-16T21:24:05+02:00, from: "GE-Workshop/brain/agile_facilitator_references.md@bd66d537cd74" }
sources:
  - resource: https://arxiv.org/abs/2503.13657
    title: "MAST failure taxonomy"
  - resource: https://www.augmentcode.com/guides/why-multi-agent-llm-systems-fail-and-how-to-fix-them
    title: "Orchestrator as single point of failure"
  - resource: https://arxiv.org/abs/2406.18665
    title: "Router design — timing, signals, cost/quality"
  - resource: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6572478
    title: "Failure-attribution research since MAST (2026)"
  - resource: https://arxiv.org/html/2602.09341v1
    title: "Verification beyond majority vote"
  - resource: https://arxiv.org/pdf/2505.19477
    title: "LLM-as-judge bias in panels"
  - resource: https://arxiv.org/html/2505.02279v1
    title: "Agent interoperability protocols (MCP / A2A)"
  - resource: https://doi.org/10.3390/fi18060326
    title: "Orchestration topologies"
  - resource: https://medium.com/@Micheal-Lanham/multi-agent-in-production-in-2026-what-actually-survived-f86de8bb1cd1
    title: "\"More agents\" is often noise"
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

---

## Cross-domain learning — where this chair's method came from

**Not field research, and deliberately not folded into the three sections above.** Those cite external
work and carry a severity from the 2026-07-02 audit. **These two tables carry no URL and state no rule**
— they map sources and methods to what this chair does with them, which is a different kind of claim and
so gets its own container rather than a fourth severity tier.

They arrived from the library's `principles/core-principles.md`, where they sat under `##` headings
among principles while stating no rule (the Composer's ruling 2026-09-16, `GE-KnowledgeCenter#128`).
⚠️ **Reproduced verbatim as they stood at `cf65123`.** The library's half of that issue is a *deletion*,
and a reworded copy would not be a record of what was removed — reshaping was offered and declined for
that reason, not from deference.

### Cross-domain learning — what these sources teach the Agile Facilitator

| Source | What it teaches |
|---|---|
| **Clean Code** (Martin) | Name things right. One responsibility. No side effects. The code that's easiest to read is the code that's easiest to trust. |
| **Clean Coder** (Martin) | Professionalism is saying no when no is the right answer. Finishing is not the same as done. |
| **Agile Manifesto** | Working software over comprehensive documentation. Responding to change over following a plan. People over process. |
| **Material Design 3** | Constraints produce coherence. A system that starts at WCAG AA doesn't have to argue for accessibility — it's built in. |

### Design Thinking · Lean UX · Agile — Agile Facilitator's connections

| Method | Agile Facilitator's application |
|---|---|
| **Design Thinking** | Empathize before defining. Define before ideating. Ideate before prototyping. The Agile Facilitator does not skip to solution. |
| **Lean UX** | Build-Measure-Learn. The smallest test that answers the question. The Composer's judgment IS the measurement. |
| **Agile** | Sprint = one increment. Demo = Composer reviews. Retrospective = session retrospective protocol. Backlog = Product Owner's domain. |

⚠️ **Two rows settled, twenty-three unexamined.** Both sections were found because a count pointed at
them, not because that page was audited. This says nothing about the rest of `core-principles.md`, and a
clean measurement is not a clean page.
