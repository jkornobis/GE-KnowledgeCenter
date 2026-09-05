---
type: Tool
title: "Tool: OpenTelemetry"
description: "Traces, metrics and logs over OTLP: why every language SDK outscores the neutral spec, three Collector bugs, and 1,405 questions that are all boundary questions rather than defects"
status: draft
serves: [Reliability Engineer, Software Architect, Agile Facilitator]
generated: { by: human:jkornobis, at: 2026-08-25T14:47:07+02:00 }
sources:
  - resource: https://github.com/open-telemetry/opentelemetry-collector/issues/10858
    title: "#10858"
  - resource: https://github.com/open-telemetry/opentelemetry-collector/issues/14508
    title: "#14508"
  - resource: https://github.com/open-telemetry/opentelemetry-collector/issues/10780
    title: "#10780"
---

# Tool: OpenTelemetry

Audited 2026-08-23 by User Researcher. Specification + SDKs + a Collector; vendor-neutral, CNCF-graduated. Not MCP-mediated. No auth for the project itself; the backend it exports to is a separate decision.

Re-audit: 90 days — default, not measured (no release has yet invalidated anything on this page)

**Chair:** Reliability Engineer — `brain/reliability_engineer_references.md` names it Critical: *"you can't operate what you can't see"*. No lever in `register.md` covers observability; sweep 1's four levers are all design- and QA-side, which is a fact about that sweep's scope rather than about this chair.
**Lineage:** the Reliability Engineer's leap — *monitoring as a system*, NetSaint (1999) → Nagios (2002) → Prometheus (2012) → **OpenTelemetry (2019, from the OpenTracing/OpenCensus merger)**, against an origin of tailing logs by hand. Lag **~20 years**. `project/tools_lineage_full.md`

## Context7

| Field | Value |
|---|---|
| Library ID | `/open-telemetry/opentelemetry.io` — resolved 2026-08-23, **not recalled** |
| Snippets · reputation · benchmark | 8,743 · High · **67.33** |

**This family benchmarks lower than anything else audited here, and the pattern inside it is the finding.** Five entries resolved: the docs mirror `/websites/opentelemetry_io` **67.94** (23,667 snippets), the repo **67.33**, the **specification** `/open-telemetry/opentelemetry-specification` **66.83**, and then the language SDKs — Python **72.62**, .NET **79.57**.

**Every single-language implementation scores above the cross-language documentation.** For a project whose entire value is being vendor- and language-neutral, the neutral layer is the worst-documented part of it. That is a cost prediction for the chair: the *concept* has to be assembled from somewhere other than the spec.

`brain/reliability_engineer_references.md` records **74.25** for the repo id, from 2026-07-20. Now 67.33.

## Critical (verified this session)

- **Reliability Engineer** — CNCF-graduated, vendor-neutral, unifying traces, metrics and logs over OTLP. This is what makes it *true material* rather than a picture: the telemetry is portable across backends, so the instrumentation outlives the vendor choice.
- **Reliability Engineer** — it is **three things**, not one: an API, an SDK per language, and a Collector. Which of the three a task touches determines everything about the answer, and the SO evidence below says this is the single most common source of confusion.
- **Software Architect** — the OTel semantic conventions for GenAI are where agent-level observability is being standardised (`brain/agile_auditor_references.md` already cites them for eval signals), so this instrument reaches past runtime into how the orchestra could observe itself.

## Known issues — defects and friction, from two records

### Defects — the Collector's tracker, read 2026-08-23 via the GitHub API

**614 open issues, 149 labelled `bug`** — and the project does use the label, so the count means what it says. The top of the queue by reactions is **enhancements**, not breakage: dynamic OTLP exporter headers, gRPC server reflection, a health check, a pipeline unit-test facility. A tracker whose most-wanted items are capabilities rather than fixes is a maturity signal.

| Issue | State | What it costs the chair | Source |
|---|---|---|---|
| Increased request latency in 0.106.1 vs 0.105.0 | open, 2024-08-12, 26 comments, `bug` | **the observability layer became the latency it was measuring.** The instrument's own cost is a property the chair has to budget, and a version bump moved it | [#10858](https://github.com/open-telemetry/opentelemetry-collector/issues/10858) |
| HTTP server span name missing the route pattern behind middleware | open, 2026-01-30, 18 comments, `bug` `discussion-needed` | spans named by raw path rather than route explode cardinality — the classic way a metrics bill becomes unbounded without anything failing | [#14508](https://github.com/open-telemetry/opentelemetry-collector/issues/14508) |
| Internal metrics not disabled when the telemetry level says they should be | open, 2024-08-01, 17 comments, `bug` | the collector emits telemetry about itself that a configuration says to suppress. A number that describes the instrument, arriving in the subject's data | [#10780](https://github.com/open-telemetry/opentelemetry-collector/issues/10780) |

### Friction — Stack Overflow, read through the Browser pane 2026-08-23

**1,405 questions**, and their shape is a third class, distinct from the two already recorded on other pages.

| Question | Votes · views | What it really says |
|---|---|---|
| Where does Micrometer fit in OpenTelemetry | 43 · 25k | |
| Can Serilog be used with OpenTelemetry | 21 · 28k | |
| How to use OpenTelemetry logs in Node.js | 14 · 11k | |
| *Overriding of current TracerProvider is not allowed* | 13 · 12k | two things initialised the SDK; the error names the symptom, not the cause |
| How to wire the exporter to the Collector, client and server | 10 · 22k | |
| **OpenTelemetry API vs SDK** | 10 · 3k | the project's own layering, asked as a question |

**Not one is a defect, and not one is "how do I do X".** Every question is a **boundary** question: where does OpenTelemetry end and my existing stack begin, and which of OTel's own layers am I supposed to touch. **That is the price of vendor-neutrality**, paid in orientation rather than in bugs — and it is exactly what the low benchmark on the neutral documentation layer predicts.

## Limits — where this instrument stops

- **It does not store or query anything.** OTel produces and ships telemetry; a backend is a separate choice, and the 2026 market pressure recorded in `project/chair_tools_survey_2026-08-23.md` is toward unified platforms that bundle both.
- **Cardinality is the operator's problem, not the standard's** — #14508 is the standing case.
- **The instrument has a measurable cost on the path it instruments** (#10858), so "observe everything" is a budget decision.

All three are **tool limits**, not reasoning limits.

## Recommended (Composer to accept/decline)

- **Reliability Engineer** — when reading OTel documentation, prefer a **language SDK's** docs over the cross-language spec; the benchmarks say the neutral layer is the weakest one. — status: proposed
- **Agile Facilitator** — the GenAI semantic conventions are the standardisation path for observing an agent system, which is this orchestra's own unmeasured surface. Worth a Tool Discovery entry rather than a tool page. — status: proposed
