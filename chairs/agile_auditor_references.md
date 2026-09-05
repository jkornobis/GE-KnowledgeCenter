---
type: Chair Reference
title: "Agile Auditor — Field References (Pattern detection)"
description: "Living reference notes for the Agile Auditor's field"
status: draft
generated: { by: human:jkornobis, at: 2026-08-16T21:24:05+02:00 }
sources:
  - resource: https://arxiv.org/abs/2306.05685
    title: "LLM-as-judge reliability limits"
  - resource: https://arxiv.org/abs/2503.13657
    title: "Multi-agent failure taxonomy (MAST)"
  - resource: https://research.trychroma.com/context-rot
    title: "Context rot / long-context degradation"
  - resource: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6572478
    title: "Failure-attribution research since MAST (2026)"
  - resource: https://docs.evidentlyai.com/
    title: "Drift / anomaly detection for LLM outputs"
  - resource: https://arxiv.org/abs/2310.13548
    title: "Sycophancy as a systemic failure"
  - resource: https://www.anthropic.com/research/building-effective-agents
    title: "Error propagation / cascading"
  - resource: https://www.anthropic.com/research/reasoning-models-dont-say-think
    title: "Reasoning unfaithfulness in chains-of-thought"
  - resource: https://opentelemetry.io/docs/specs/semconv/gen-ai/
    title: "Online eval signals & guardrails"
---

# Agile Auditor — Field References (Pattern detection)

Living reference notes for the Agile Auditor's field. From an **independent field audit** (2026-07-02, real subagent). Through-line: a pattern monitor must know the limits of its *own* judgment, and that flagging at 3 may already be late. Re-verify before citing.

## Critical
- **[LLM-as-judge reliability limits](https://arxiv.org/abs/2306.05685)** — Position, self-preference, and verbosity bias mean the monitor's own flagging can be unreliable — exactly the "personas aren't independent" invariant.
- **[Multi-agent failure taxonomy (MAST)](https://arxiv.org/abs/2503.13657)** — A named catalog of 14 failure modes to classify what it sees rather than improvise categories.
- **[Context rot / long-context degradation](https://research.trychroma.com/context-rot)** — Adherence and retrieval decay with input length and distractors — the reason the invariants are re-emitted last, and the premise of watching a *long* session.

## Important
- **[Failure-attribution research since MAST (2026)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6572478)** — Where MAST classifies *which category* a failure falls into, newer attribution tooling (AgenTracer, CHIEF, FALAT) traces *which step in a trace* caused it — the diagnostic layer under "occurred N times," useful when a pattern's root cause spans several turns.
- **[Drift / anomaly detection for LLM outputs](https://docs.evidentlyai.com/)** — A rigorous embedding/distribution-based method (not vibes) to distinguish real drift from noise and set intervention thresholds.
- **[Sycophancy as a systemic failure](https://arxiv.org/abs/2310.13548)** — A reinforcement-trained tendency to agree; a pattern monitor should actively watch for it across turns ("accuracy > validation").
- **[Error propagation / cascading](https://www.anthropic.com/research/building-effective-agents)** — In a 10-voice pipeline one early wrong output silently contaminates downstream voices; the compounding-error model shows flagging *at 3* may be late.

## Emerging
- **[Reasoning unfaithfulness in chains-of-thought](https://www.anthropic.com/research/reasoning-models-dont-say-think)** — Stated rationale often doesn't reflect the real cause of an output — a blind spot when auditing *why* a voice decided something.
- **[Online eval signals & guardrails](https://opentelemetry.io/docs/specs/semconv/gen-ai/)** — Real-time trace-level metrics and automated guardrail triggers vs post-hoc review — the "when to intervene" half of the mandate.
