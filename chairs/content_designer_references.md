---
type: Chair Reference
title: "Content Designer — Field References (Copy & vocabulary)"
description: "Living reference notes for the Content Designer's field"
status: draft
generated: { by: human:jkornobis, at: 2026-08-16T21:24:05+02:00 }
sources:
  - resource: https://maven.com/convocat/genai-design
    title: "Designing language for AI/agentic interfaces"
  - resource: https://www.iso.org/standard/78907.html
    title: "ISO 24495-1:2023 plain language"
  - resource: https://www.w3.org/WAI/cognitive/
    title: "Cognitive accessibility (COGA)"
  - resource: https://www.w3.org/TR/WCAG22/
    title: "WCAG 2.2 language-facing criteria"
  - resource: https://consciousstyleguide.com/
    title: "Inclusive / bias-free terminology"
  - resource: https://www.apa.org/about/apa/equity-diversity-inclusion/language-guidelines
    title: "APA Inclusive Language Guidelines"
  - resource: https://contentdesign.london/
    title: "Terminology management & ContentOps"
  - resource: https://cldr.unicode.org/
    title: "Localization engineering & FR/EN parity"
  - resource: https://unicode-org.github.io/icu/userguide/format_parse/messages/
    title: "ICU MessageFormat"
  - resource: https://www.nngroup.com/articles/tone-of-voice-dimensions/
    title: "Voice-and-tone with measurable readability"
---

# Content Designer — Field References (Copy & vocabulary)

Living reference notes for the Content Designer's field. From an **independent field audit** (2026-07-02, real subagent). Through-line: copy is moving from screens to conversational/agentic systems, and "write clearly" now has a citable standard. Re-verify before citing.

## Critical
- **[Designing language for AI/agentic interfaces](https://maven.com/convocat/genai-design)** — As UIs become conversational, the job shifts from screen microcopy to prompts, guardrails, and shared vocabulary for non-deterministic systems.
- **[ISO 24495-1:2023 plain language](https://www.iso.org/standard/78907.html)** — The first international, evidence-based plain-language standard (relevance, findability, understanding, usability) — the citable baseline over ad-hoc "write clearly."
- **[Cognitive accessibility (COGA)](https://www.w3.org/WAI/cognitive/)** — WCAG conformance doesn't guarantee comprehension; COGA covers memory, attention, and language load for neurodivergent users.

## Important
- **[WCAG 2.2 language-facing criteria](https://www.w3.org/TR/WCAG22/)** — Own the language SC (3.1.5 Reading Level, 3.1.3 Unusual Words, 3.3.x error/label wording, 2.4.6) rather than defer them to the accessibility role.
- **[Inclusive / bias-free terminology](https://consciousstyleguide.com/)** — A defensible, maintained inclusive-language layer (disability, gender, race, age); see also the [APA Inclusive Language Guidelines](https://www.apa.org/about/apa/equity-diversity-inclusion/language-guidelines).
- **[Terminology management & ContentOps](https://contentdesign.london/)** — A governed termbase, glossary, and structured-content model keep voice and terms consistent across products and both languages.

## Emerging
- **[Localization engineering & FR/EN parity](https://cldr.unicode.org/)** — i18n/l10n mechanics — [ICU MessageFormat](https://unicode-org.github.io/icu/userguide/format_parse/messages/) for plurals/gender, locale formatting, TMS/CAT — so French is generated at parity, not retro-fitted.
- **[Voice-and-tone with measurable readability](https://www.nngroup.com/articles/tone-of-voice-dimensions/)** — Operationalize voice (tone-by-context matrices, tokenized attributes) and validate with readability instrumentation, not assertion.

## Context7-resolvable libraries (2026-07-20, User Researcher)

The live-docs layer for the *localization engineering* above (ISO 24495-1 plain language, WCAG, COGA, inclusive-language guides — standards and guides — stay as links; Context7 indexes libraries, not standards). **Trust** = source reputation, **Bench** = doc-quality (100 max). **NEW** = design-industrialization addition. Source: `resolve-library-id` on `context7.com`.

| Library | Context7 ID | Trust | Bench | Tie to entries above |
|---|---|---|---|---|
| **i18next** *(NEW)* | `/i18next/i18next` | High | 81.01 | **Design-industrialization: the FR/EN parity engine behind "localization engineering" (Emerging) — ICU-style plurals/gender, interpolation, context; pairs with `react-i18next` (`/i18next/react-i18next`, Bench 81.81) for component-level strings so French ships at parity, not retro-fitted** |

ICU MessageFormat itself is a spec (stays a link); i18next is its production implementation. The *words* stay the Content Designer's; the *technical i18n layer* is shared with the Design Engineer (see that chair's i18n-engineering entry).
