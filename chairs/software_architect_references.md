---
type: Chair Reference
title: "Software Architect — Field References (Process & versioning)"
description: "Living reference notes for the Software Architect's field"
status: draft
generated: { by: human:jkornobis, at: 2026-08-16T21:24:05+02:00 }
sources:
  - resource: https://dora.dev/research/2025/
    title: "DORA 2025 — AI as amplifier"
  - resource: https://dora.dev/ai/roi/report/
    title: "DORA — ROI of AI-assisted Software Development (2026.01)"
  - resource: https://agents.md/
    title: "Governance for AI-generated code"
  - resource: https://trunkbaseddevelopment.com/
    title: "Trunk-based development + feature flags"
  - resource: https://slsa.dev/
    title: "Supply-chain integrity (SLSA + SBOM)"
  - resource: https://adr.github.io/madr/
    title: "Modern ADR practice (MADR 3)"
  - resource: https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act
    title: "EU Cyber Resilience Act"
  - resource: https://dora.dev/capabilities/
    title: "Progressive delivery & DORA recovery metrics"
  - resource: https://semver.org/
    title: "SemVer + Conventional Commits automation"
  - resource: https://www.conventionalcommits.org/
    title: "Conventional Commits"
---

# Software Architect — Field References (Process & versioning)

Living reference notes for the Software Architect's field. From an **independent field audit** (2026-07-02, real subagent). Through-line: AI-assisted delivery and supply-chain/regulatory duties reshaped process since a GitFlow-era snapshot. Re-verify before citing.

## Critical
- **[DORA 2025 — AI as amplifier](https://dora.dev/research/2025/)** — AI correlates with faster throughput but *higher* instability; the 2025 report moves to seven team archetypes, with small batch size + strong testing as moderators.
- **[DORA — ROI of AI-assisted Software Development (2026.01)](https://dora.dev/ai/roi/report/)** — the 2026 follow-up: greatest ROI comes from the underlying engineering system (platform quality, workflow clarity, team alignment), not the AI tool itself. Introduces a **J-Curve** value model — year one is foundation-building, compounding gains land in years two/three as teams move from coding assistants to agentic workflows at scale. Cites an average 727% 3-year ROI and ~8-month payback (Google Cloud data — a vendor figure, weight accordingly).
- **[Governance for AI-generated code](https://agents.md/)** — AI PRs carry ~1.7× more defects and often introduce OWASP Top 10 flaws; provenance, agent-authorization, and review gates are needed before AI changes merge.
- **[Trunk-based development + feature flags](https://trunkbaseddevelopment.com/)** — The 2025 CI/CD consensus; decoupling deploy from release via flags is the default over GitFlow.

## Important
- **[Supply-chain integrity (SLSA + SBOM)](https://slsa.dev/)** — Supply-chain attacks more than doubled in 2025; SLSA (v1.2) and SBOMs are operational requirements under EU CRA / EO 14028, not buzzwords.
- **[Modern ADR practice (MADR 3)](https://adr.github.io/madr/)** — MADR 3 merged consequences, Y-statements for minor calls, one decision per record, 6–12 month review cadence — prevents ADR sprawl and staleness.
- **[EU Cyber Resilience Act](https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act)** — Concrete process duties (SBOM maintenance, vulnerability handling, security-by-design evidence). Two dates, not one: **reporting obligations** (actively-exploited vulnerabilities to ENISA within 24h) start **2026-09-11** — and reporting them requires already knowing your components, so SBOM/vuln-tracking tooling is a practical prerequisite well before the legal deadline below; the **main SBOM/technical-documentation enforcement** doesn't bind until **2027-12-11**. Fines up to €15M or 2.5% global revenue.

## Emerging
- **[Progressive delivery & DORA recovery metrics](https://dora.dev/capabilities/)** — Canary/blue-green/progressive rollout and reframed reliability metrics (change-fail rate, failed-deployment recovery time) make trunk-based safe at scale.
- **[SemVer + Conventional Commits automation](https://semver.org/)** — SemVer 2.0.0 edge cases and [Conventional Commits](https://www.conventionalcommits.org/) driving automated versioning/changelogs (release-please, semantic-release).

## Context7-resolvable libraries (2026-07-20, User Researcher)

The live-docs layer for the *tooling* above (SemVer, Conventional Commits, SLSA, MADR, DORA, the CRA — specs, standards, research, law — stay as links; Context7 indexes libraries, not standards). **Trust** = source reputation, **Bench** = doc-quality (100 max). **NEW** = design-industrialization addition. Source: `resolve-library-id` on `context7.com`.

| Library | Context7 ID | Trust | Bench | Tie to entries above |
|---|---|---|---|---|
| **Changesets** *(NEW)* | `/changesets/changesets` | Medium | 83.39 | **Design-industrialization: versioning + changelogs for multi-package repos — how a design-system / token library ships semver'd releases to its consumers; the release mechanics under "SemVer + Conventional Commits automation" (Emerging)** |

Also resolvable on demand: `semantic-release`, `release-please` (the other automation tools named above) — tabled only when a task actually reaches for one.
