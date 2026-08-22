---
type: Chair Reference
title: "QA Engineer — Field References (Testing & DoD)"
description: "Living reference notes for the QA Engineer's field"
status: draft
generated: { by: human:jkornobis, at: 2026-08-16T21:24:05+02:00 }
---

# QA Engineer — Field References (Testing & DoD)

Living reference notes for the QA Engineer's field. From an **independent field audit** (2026-07-02, real subagent). Through-line: testing AI/non-deterministic systems is a new quality gate a classic BDD/TDD/DoD scope doesn't cover. Re-verify before citing.

## Critical
- **[Testing AI/LLM systems — ISTQB CT-AI v2.0](https://istqb.org/wp-content/uploads/2026/05/ISTQB-_CTAI_Syllabus_v2.0_Release.pdf)** — released 2026-04-17, first major rewrite since 2021: splits *testing AI systems* (this cert) from *using AI to test* (now its own CT-GenAI cert), adds ISO/IEC 25059 AI-quality characteristics. **Superseded citation:** the v1.0 syllabus is retiring (last English exam April 2027) — cite v2.0. Offline golden datasets, online trace sampling, pre-merge CI gates, and deterministic/rubric/LLM-judge/composite scoring remain the core quality gate for AI features.
- **[OWASP Top 10 for Agentic Applications (2026), ASI01–ASI10](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)** — a *distinct, newer* list from the LLM Top 10 below: risks specific to multi-step, tool-using, multi-agent systems — goal hijack, tool misuse, agent-identity/privilege abuse, agentic supply-chain compromise, unexpected code execution, **memory/context poisoning**, insecure inter-agent communication, cascading failures, human-agent trust, rogue agents. This is the framework built for exactly the orchestra's own shape (Agile Facilitator + subagents + tool use + memory) — the adversarial DoD gate (`protocols.md`) should extend to it, not stop at the single-LLM list.
- **[LLM security & red-teaming (LLM Top 10, 2025)](https://genai.owasp.org/llm-top-10/)** — Prompt injection, sensitive-info disclosure, RAG poisoning, and excessive agency are the dominant *single-model* AI-app failure modes; a DoD must enforce adversarial test cases. Covers a different layer than the Agentic Top 10 above — both apply to a system like this one.
- **[Non-deterministic system test design](https://istqb.org/wp-content/uploads/2026/05/ISTQB-_CTAI_Syllabus_v2.0_Release.pdf)** — Probabilistic outputs shift assertions from exact-match to distribution/threshold-based, with explicit flakiness handling.

## Important
- **[Contract testing (consumer-driven)](https://docs.pact.io/)** — Pact-style contracts replace 60–70% of slow, flaky E2E integration tests in microservices and belong in a modern DoD.
- **[Test pyramid → honeycomb/diamond](https://martinfowler.com/articles/practical-test-pyramid.html)** — The strategy shape evolved: heavier integration/contract layer, thinner E2E; reasoning from the classic pyramid alone is stale.
- **[Data / ML pipeline testing](https://istqb.org/istqb-releases-certified-tester-ai-testing-ct-ai-syllabus-version-2-0/)** — Input-data testing (bias, representativeness, label correctness, pipeline validation) is a distinct type with no code-only TDD equivalent.

## Emerging
- **[Property-based & mutation testing](https://stryker-mutator.io/)** — Property-based ([Hypothesis](https://hypothesis.readthedocs.io/)) invariants and mutation testing measure whether tests actually catch bugs — better than line-coverage.
- **[Continuous testing & quality gates](https://docs.sonarsource.com/sonarqube-server/latest/instance-administration/analysis-functions/quality-gates/)** — Shift-left/right, automated gates, and progressive-delivery testing (canary, feature-flag, observability) define where DoD is enforced today.

## Context7-resolvable libraries (2026-07-20, User Researcher)

The live-docs layer for the *code libraries* above (standards — ISTQB CT-AI, OWASP LLM/Agentic, ISO 25059 — stay as links; Context7 indexes libraries, not syllabi). **Trust** = source reputation, **Bench** = doc-quality (100 max). **NEW** = design-industrialization addition not previously in this file. Prefer `/org/project` repo IDs over `/websites/*` mirrors. Source: `resolve-library-id` on `context7.com`.

| Library | Context7 ID | Trust | Bench | Tie to entries above |
|---|---|---|---|---|
| Playwright | `/microsoft/playwright` | High | 84.22 | E2E + component testing (test-pyramid → honeycomb) |
| Vitest | `/vitest-dev/vitest` | High | 82.2 | Unit/component runner (property-based, coverage) |
| Pact | `/websites/pact_io` | High | 75.46 | Consumer-driven contract testing (Important) |
| **Chromatic** *(NEW)* | `/websites/chromatic` | High | 84.09 | **Design-industrialization: visual-regression + UI review on Storybook stories — turns "every component state is a testable story" into an automated visual gate; the QA half of the design→code component contract** |
