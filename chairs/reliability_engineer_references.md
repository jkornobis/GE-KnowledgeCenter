---
type: Chair Reference
title: "Reliability Engineer — Field References (Reliability & runtime)"
description: "Live-docs currency layer for reliability and runtime: Kubernetes, SLOs and error budgets, OpenTelemetry, IaC, GitOps, FinOps, incident practice"
status: draft
generated: { by: human:jkornobis, at: 2026-08-16T21:24:05+02:00 }
sources:
  - resource: https://kubernetes.io/docs/home/
    title: "Kubernetes & container orchestration"
  - resource: https://sre.google/workbook/implementing-slos/
    title: "SRE — SLOs, SLIs & error budgets"
  - resource: https://opentelemetry.io/docs/
    title: "Observability & OpenTelemetry"
  - resource: https://www.finops.org/framework/
    title: "FinOps"
  - resource: https://opentofu.org/
    title: "Infrastructure as Code (Terraform / OpenTofu)"
  - resource: https://sre.google/resources/practices-and-processes/incident-management-guide/
    title: "Incident management & blameless postmortems"
  - resource: https://opengitops.dev/
    title: "GitOps runtime delivery (Argo / Flux)"
  - resource: https://argo-cd.readthedocs.io/
    title: "Argo CD"
  - resource: https://backstage.io/
    title: "Platform engineering / internal developer platforms"
  - resource: https://www.sigstore.dev/
    title: "Runtime supply-chain verification (Sigstore / Cosign)"
---

# Reliability Engineer — Field References (Reliability & runtime)

**This file is the currency layer only.** The chair's canon — metaphor, the always-written-in-full rule and its reason, the narrow scope, the boundaries against Software Architect and Software Engineer, the DORA exclusion and the open observability gap — **moved to `agents/agent_reliability_engineer.md` on 2026-08-08 (ADR-278)**, where `agents/tools/roster.md` says chair knowledge belongs. It is not restated here. What stays below is what a `*_references.md` is for: live-docs tiers and Context7 resolution.

From an **independent field audit** (2026-07-02, real subagent). Living notes — re-verify versions before citing.

## Critical
- **[Kubernetes & container orchestration](https://kubernetes.io/docs/home/)** — the de-facto orchestration substrate (v1.36, May 2026); you can't operate modern infra without fluency in pods, deployments, services, and the container lifecycle.
- **[SRE — SLOs, SLIs & error budgets](https://sre.google/workbook/implementing-slos/)** — converts "reliability" into measurable engineering decisions; the error budget (1 − SLO) objectively governs ship-vs-harden, removing politics from the trade-off.
- **[Observability & OpenTelemetry](https://opentelemetry.io/docs/)** — you can't operate what you can't see; OTel is the CNCF-graduated vendor-neutral standard unifying traces, metrics, and logs (OTLP). This *is* "preserving the performance."

## Important — Load testing (Chair Review, 2026-07-04 — Revised: the technique behind the SRE numbers)
- **Load/capacity testing methodology** (e.g. k6, Gatling; staged/canary rollout to find the real ceiling) — distinct from the SRE citation below, which covers *setting* an SLO/error budget: this is *how you produce the number* an SLO gets measured against. Not a separate discipline from SRE — the concrete technique underneath it.

## Important — FinOps
- **[FinOps](https://www.finops.org/framework/)** — cost as an engineering signal, not just a finance one; a reliability/scaling decision (over-provisioning for headroom, multi-region redundancy) has a cost trade-off the Reliability Engineer should surface alongside the SLO trade-off, not leave to a separate team after the fact.
- **[Infrastructure as Code (Terraform / OpenTofu)](https://opentofu.org/)** — declarative, version-controlled infra for reproducibility; know both Terraform (BSL) and [OpenTofu](https://opentofu.org/) (MPL 2.0, CNCF) and how state works.
- **[Incident management & blameless postmortems](https://sre.google/resources/practices-and-processes/incident-management-guide/)** — outages are inevitable; structured response + blameless postmortems turn failure into systemic learning, not fear.
- **[GitOps runtime delivery (Argo / Flux)](https://opengitops.dev/)** — Git as the single source of truth, reconciled by controllers ([Argo CD](https://argo-cd.readthedocs.io/), Flux, both CNCF-graduated) — the runtime half of delivery (the pipeline *strategy* stays with Software Architect).

## Emerging
- **[Platform engineering / internal developer platforms](https://backstage.io/)** — the paradigm DevOps is consolidating into: platform-as-product with self-service golden paths; [Backstage](https://backstage.io/) is the CNCF developer-portal standard.
- **[Runtime supply-chain verification (Sigstore / Cosign)](https://www.sigstore.dev/)** — signing and verifying artifacts at deploy time; the runtime enforcement of the supply-chain policy the Software Architect owns (SLSA/SBOM). *Shared concern.*

## Context7-resolvable libraries (2026-07-20, User Researcher)

The live-docs layer for the runtime tooling above. **No design-industrialization additions** — this chair's scope (runtime/infra/observability) sits off the design→code axis by design (the Composer set it narrow), so it gets a currency-resolve only, not new libs. SRE/FinOps/incident practices are methodologies, not libraries, and stay as links. **Trust** = source reputation, **Bench** = doc-quality (100 max). Source: `resolve-library-id` on `context7.com`.

| Library | Context7 ID | Trust | Bench | Tie to entries above |
|---|---|---|---|---|
| Kubernetes | `/websites/kubernetes_io` | High | 80.98 | Orchestration substrate (Critical) |
| OpenTelemetry | `/open-telemetry/opentelemetry.io` | High | 74.25 | Observability standard — traces/metrics/logs (Critical) |

Also Context7-indexed and resolvable on demand when a task touches them: Terraform/OpenTofu (IaC), Argo CD / Flux (GitOps), Backstage (platform), k6 (load testing), Sigstore/Cosign (runtime supply-chain). Not tabled here to avoid a wall of infra rows with no design-industrialization tie.
