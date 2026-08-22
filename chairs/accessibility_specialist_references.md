---
type: Chair Reference
title: "Accessibility Specialist — Field References (Accessibility)"
description: "Living reference notes for the Accessibility Specialist's field"
status: draft
generated: { by: human:jkornobis, at: 2026-08-16 }
---

# Accessibility Specialist — Field References (Accessibility)

Living reference notes for the Accessibility Specialist's field. Sourced from an **independent field audit** (2026-07-02, real subagent, not persona self-assessment). The through-line: *currency is the gap* — accessibility law and specs moved after the WCAG-2.2 snapshot. Re-verify dates and spec versions before citing; treat this as a map, not a frozen fact sheet.

## Critical
- **[European Accessibility Act + EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/)** — In force since 28 Jun 2025; products/sites touching the EU market are legally bound to EN 301 549, not just WCAG. This is the actual legal test applied to clients. (See also the EAA overview: https://ec.europa.eu/social/main.jsp?catId=1202)
- **[WCAG 3.0 direction — March 2026 Working Draft](https://www.w3.org/TR/wcag-3.0/)** — Outcome-based requirements, Bronze/Silver/Gold scoring, drops binary pass/fail. CR anticipated ~Q4 2027, Rec not before 2028 — **track it, don't enforce it yet**; advice frozen on 2.2's pass/fail model ages badly.
- **[ADA Title II digital rule](https://www.ada.gov/resources/2024-03-08-web-rule/)** — US DOJ April 2024 final rule binds state/local government web + mobile content to WCAG 2.1 AA; compliance deadlines roll through 2026–2027 by entity size. Public-sector clients need the deadline calendar.

## Important
- **[WAI-ARIA 1.3 + APG patterns](https://www.w3.org/WAI/ARIA/apg/)** — The Authoring Practices Guide gives vetted keyboard/role/state recipes for composite widgets (combobox, grid, tree) that raw WCAG never spells out — the day-to-day component-review reference. ARIA 1.3 adds attributes like `aria-braillelabel`.
- **[Cognitive accessibility — COGA "Making Content Usable"](https://www.w3.org/TR/coga-usable/)** — Cognitive/learning/neurodivergent needs are the largest under-served group and barely covered by testable SC; COGA fills it with concrete patterns. Directly complements NNG heuristics.
- **[Mobile & native app accessibility — WCAG2Mobile](https://www.w3.org/TR/wcag2mobile-22/)** — WCAG is web-centric; the WCAG2Mobile note plus platform APIs (Apple UIAccessibility, Android AccessibilityNode / TalkBack) govern touch targets, gestures, and screen-reader semantics a web-only reviewer can't audit.

## Emerging
- **[ACT Rules + automated tooling](https://www.w3.org/WAI/standards-guidelines/act/rules/)** — The ACT Rules Format standardizes what automated tools (axe-core, WAVE, Pa11y in CI) actually check, and their ~30–40% coverage ceiling. Knowing what tooling can't catch is how you scope manual testing.
- **[ARIA-AT — assistive-tech interoperability](https://aria-at.w3.org/)** — Defines expected screen-reader behaviour (JAWS, NVDA, VoiceOver) for ARIA patterns, moving "test with a screen reader" from ad-hoc to a shared baseline. Emerging but increasingly cited.

## Context7-resolvable libraries (2026-07-20, User Researcher)

The live-docs layer for the *code tooling* above (WCAG, EN 301 549, the EAA, ADA Title II, WAI-ARIA — law and specs — stay as links; Context7 indexes libraries, not standards). **Trust** = source reputation, **Bench** = doc-quality (100 max). **NEW** = design-industrialization addition. Prefer `/org/project` repo IDs over `/websites/*` mirrors. Source: `resolve-library-id` on `context7.com`.

| Library | Context7 ID | Trust | Bench | Tie to entries above |
|---|---|---|---|---|
| axe-core | `/dequelabs/axe-core` | High | 77.01 | The engine behind ACT Rules automated checks (Emerging) — and its ~30–40% coverage ceiling |
| **Storybook a11y** *(NEW)* | `/storybookjs/storybook` | High | 83.53 | **Design-industrialization: `@storybook/addon-a11y` runs axe checks on every component story, shifting WCAG left into the component library — a11y designed-in at the source, not bolted on at an end-of-line audit** |
