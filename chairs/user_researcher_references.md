---
type: Chair Reference
title: "User Researcher — Field References (Research & sourcing)"
description: "Living reference notes for the User Researcher's field"
status: draft
generated: { by: human:jkornobis, at: 2026-08-16T21:24:05+02:00 }
sources:
  - resource: https://arxiv.org/html/2605.06635v1
    title: "Post-hoc / retrofitted citations"
  - resource: https://retractionwatch.com/category/artificial-intelligence/
    title: "Fabricated reference detection"
  - resource: https://retractionwatch.com/2025/11/19/ai-unreliable-identifying-retracted-research-papers-study/
    title: "Retraction / integrity status checks"
  - resource: https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/
    title: "Groundedness / faithfulness metrics"
  - resource: https://arxiv.org/html/2510.17853v4
    title: "Attribution-alignment verification"
  - resource: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12407253/
    title: "Structured RoB / GRADE appraisal"
  - resource: https://arxiv.org/pdf/2602.10881
    title: "Extraction failure modes in synthesis"
  - resource: https://arxiv.org/pdf/2606.13104
    title: "Epistemic / authority bias"
---

# User Researcher — Field References (Research & sourcing)

Living reference notes for the User Researcher's field. From an **independent field audit** (2026-07-02, real subagent). Through-line: a citation existing is not a citation supporting the claim — verify alignment, existence, and integrity. Re-verify before citing.

## Critical
- **[Post-hoc / retrofitted citations](https://arxiv.org/html/2605.06635v1)** — Up to 57% of LLM/RAG citations are generated *after* the answer; verify claim-to-source alignment, not just that a citation exists.
- **[Fabricated reference detection](https://retractionwatch.com/category/artificial-intelligence/)** — Hallucinated citations pass casual inspection; verify existence against metadata (Crossref/OpenAlex DOI lookup) before citing.
- **[Retraction / integrity status checks](https://retractionwatch.com/2025/11/19/ai-unreliable-identifying-retracted-research-papers-study/)** — LLMs report retracted findings as true; screen every cited source against retraction status (Retraction Watch Database).

## Important
- **[Groundedness / faithfulness metrics](https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/)** — An operational vocabulary (Faithfulness, Context Precision/Recall, Response Groundedness) to self-audit synthesis rather than trust fluency.
- **[Attribution-alignment verification](https://arxiv.org/html/2510.17853v4)** — Reframe citation-checking as retrieval-aware attribution alignment: does the retrieved passage actually entail the claim?
- **[Structured RoB / GRADE appraisal](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12407253/)** — Evidence synthesis needs formal source-quality appraisal (risk-of-bias, certainty grading); LLM-assisted RoB is "not yet ready" — apply the human frameworks.

## Emerging
- **[Extraction failure modes in synthesis](https://arxiv.org/pdf/2602.10881)** — Even with correct sources, LLM extraction fails structurally (mis-mapped numbers, conflated arms) when aggregating across studies.
- **[Epistemic / authority bias](https://arxiv.org/pdf/2606.13104)** — LLMs over-trust authoritative-sounding or confidently-worded sources; weight evidence by verifiable quality, not surface authority.
