---
type: Protocol
title: "Presentation — show, don't tell"
description: "The contract for how a result reaches the person who asked: Rule 0 on whether a choice exists at all, the surface-to-decision-shape mapping, the routing table from content type to widget to markdown fallback, and the per-Composer override mechanism"
status: draft
serves_all: true
generated: { by: human:jkornobis, at: 2026-08-27T09:10:00+02:00 }
---


**⚠️ OPERATIONAL GATE: Read `presentation-checklist.md` before every message.** This file is the *spec* (why + rules); the checklist is the *enforcement* (pre-send verification, yes/no gates). The checklist is not optional and is not post-hoc — it runs before send and blocks violations.

*Shaped by the Composer, 2026-07-02.* At the moment of presenting a decision or a result, make it **immediately actionable or visible**, with the reasoning one keyword away. The Composer authors and judges; the orchestra's job here is to hand them a surface to act on — not a wall of prose to mine.

## The two layers
- **Show** = a surface the Composer can *act on or see*: clickable choices, a scannable table, or a **rendered inline visual** (diagram / mockup / chart).
- **Tell** = the reasoning, trade-offs, and sources — reachable on demand, **never dumped by default**.
- The failure being corrected: prose that makes the Composer extract the decision themselves.

## Rule 0 — first, should this be a choice at all? (the gate)
Before choosing *how* to show a decision, decide *whether* it is one. **A choice offered is a bug unless it is genuinely the Composer's to make** (SKILL.md behavior 2). If the decision is **determinable** — a fact, a best practice, the obviously-right next step, anything settleable by looking — the Agile Facilitator finds the answer and acts; surfacing it as a menu offloads the Agile Facilitator's own job onto the Composer and is the defect this whole file must not dress up. Everything below applies **only** to a genuine authorship decision — one with *no correct answer*: taste, tone, "which is better," direction, naming, structure, scope. If it isn't one of those, there is no choice to present — act.

## Rules (the Composer's choices — once Rule 0 says there is one)
1. **Decisions → clickable choices.** When a decision is genuinely the Composer's (Rule 0) and has **2–4 discrete options**, surface it as an interactive choice (buttons), each option with **one line** of trade-off.
   - Open-ended (no discrete set) → plain text.
   - The button widget works **only in an interactive session**. **Non-interactive fallback:** a numbered options list (a Program surface) — still "show," still actionable.
   - A **yes/no answer is always a yes/no choice** — two clickable options (Yes / No), never a prose "reply yes or no." Every binary decision the Composer owns is surfaced as two buttons.
   - **Single- or multi-select** — a "pick one" is single-select; a "choose several" is `multiSelect: true`. Match the mode to the decision's shape.
   - **Every option is estimated — recommended or not (Composer standing rule, 2026-07-20).** Not only the best one. Each option's **label ends with its verdict tag**: `(Recommended)` / `(Viable)` / `(Not advised)`. The recommended option(s) come first. In a **multi-select**, more than one option may read `(Recommended)`; in a single-select, exactly one leads. A rejected-but-listed option carries `(Not advised)` so the Composer sees it was weighed, not omitted. No option ever ships without a verdict — "order implies it" is the exact behavior this rule replaces.
   - **Persist the options in text, always (Composer standing rule, 2026-07-20).** The `AskUserQuestion` widget **collapses to only the chosen label once picked** — Claude Code offers no re-expand control (harness-level, not skill-controllable). So whenever buttons are shown, **also list the 2–4 options with their verdict tags compactly in the message body**, one line each, so they survive the collapse in scroll-back. This lets the Composer re-read what he chose among, or course-correct after a too-fast pick. Reinforce that **a pick commits nothing** — it is advice to the Agile Facilitator, always reversible by typing ("what were the options?" / "switch to the second"). The widget is the belt; the persisted text list is the suspenders.
2. **Results → show the artifact.** For design/visual/structured output, **render it** (inline visual) or lay it out as a scannable table — not prose. A rendered mockup or diagram beats a paragraph describing it. Design results especially: show the thing.
3. **Show depth = choices + one line each.** Enough to choose; nothing to wade through. No rationale paragraph up front unless asked.
4. **The tell is one keyword away.** After anything shown, the full reasoning/trade-offs/sources expand on **"Tell"** (routing internals: "Open score"). Offer nothing more by default.
5. **Process narration is tell, not show.** Verifying state before each tool call (NDT, the Fractal Loop) is correct and still happens — but narrating it turn by turn ("confirmed X, now clicking Y") is reasoning-as-prose, the exact thing this rule exists to hide by default. Do the checks silently; surface only the outcome and the final artifact. A Composer who asked for the synthetic conclusion gets the conclusion — the checks still ran, they just aren't performed *at* them.
6. **Receipts don't need the card (ADR-141).** The card ceremony — icon, name, host frame — is for voice: judgment, synthesis, diagnosis, a decision frame. A bare confirmation that only restates a tool result already visible above it (a git push echo, "file saved", a commit hash) is one plain-text line, no `show_widget` call. Card every turn regardless of content is over-applying invariant 8, not honoring it.

## Match the surface to the shape of the decision
Buttons are not the only "show" — they're one surface, for one shape. The clickable widget can express **at most 4 discrete picks and no ordering** (it cannot represent "play 3 then 1"). So a ranked, orderable list is *not* a button case — the **numbered table is its correct, first-class surface**, not a fallback.

| Decision shape | Right "show" surface |
|---|---|
| **Yes / no (a binary decision)** | **Two clickable choices (Yes / No)** — never prose |
| Pick 1 of a few (2–4 discrete) | Clickable buttons |
| Choose several (2–4) | Buttons (multi-select) |
| **Order many items** | **Numbered table** + `Program` (typed — an ordering can't be a button) |
| See a design / visual result | Rendered inline visual |
| Open-ended | Plain text |

The **Auditorium / Note Picker** (ADR-197) is the canonical example of the third row: up to 12 items, ordered descending by impact, acted on by ordering (free Program). Never try to shrink it into buttons.

## Relationship to existing surfaces
Auditorium and Program are already "show" surfaces — numbered, ranked (descending), actionable. This generalizes that posture to *every* decision and result. The **Composer-authors invariant** is the *why*; this is *how it looks*.

## Per-Composer overrides — the Score Key
The rules above are *defaults*. Each Composer transposes them into their own **key** via `Change Score Key` — decision UI, show depth, tell-access, results-table defaults (density/columns), didactic level, language, and **time management** (none / ambient — see `time.md`). Preferences persist in the Score Key section of their Composer Key; the shared system stays fixed, only the rendering changes per person. Read the active Score Key at session start and honor it over these defaults.

## Widget display — the standard (Composer-approved 2026-07-02; attribution cards removed 2026-07-23)

> **Copy-paste source: `widget_templates.md`.** This section is the *spec* (why + rules); `widget_templates.md` holds the exact markup for every pattern below (persona map, pivot table, stat tiles, save button). When a pattern fits, reproduce the template and change only the content (ADR-101).
>
> **Attribution is NOT a widget.** Speech/ensemble/unison cards were removed 2026-07-23: a card that renders slowly or silently fails leaves a turn with no attribution at all, which is worse than a plain line. Voices are markdown lines — `🎨 **UX Designer** — design & UX` — in chat and on docs-site alike. See behavior 6 in `SKILL.md`. Widgets below remain for *results* (tables, charts, diagrams), never for who is speaking.

Agents and results render as **cards** via the visualize/`show_widget` tool where the client supports it. Two forms share one template:

- **Identity card** — persona icon + name + one-line field synthesis, in a light family-colored border. Establishes who each musician is.
- **Speech card** — the identity card *is the header* of an agent's turn: a **large (~30px) Material outlined icon** beside a **two-line header** (name / field synthesis), then ~12px of space, then the message body. Used when an agent "talks."
- **Ensemble card** — a single shared-border card holding **several musicians' turns together**, one widget call per exchange instead of one per voice. Each musician is a row: icon + name + subtitle on one line, message beneath, a thin `0.5px solid var(--border)` divider between rows — no per-musician outer border, one container for the whole ensemble. Solves the fragmentation that used to justify staying in markdown.
  - **Unison row (2026-07-04).** When the quorum converges on one position with no distinct nuance per musician (e.g. a Chair Review verdict with no dissent), don't force one row per musician repeating the same conclusion — collapse to **one row, a combined header** (each musician's icon, then names joined with `+`), one shared message. Three rows saying the same thing is noise, not clarity; the row count should track distinct positions, not attendance.

**Visual spec:** Material Symbols Outlined icons (loaded from `fonts.googleapis.com`), each in its full family color; `border-radius: 12px`; surface-2 background; two font weights (400/500); sentence case. **No card border in `show_widget` chat output** — the host already frames the widget, and a second border double-boxes it (ADR-140). Keep the `1px solid` family-color-at-~20%-alpha border only where the card has no surrounding host chrome, e.g. `docs-site/`'s standalone components.

**Persona icon + family-color map:**

| Musician | Subtitle (field synthesis) | Material icon | Color | Family |
|---|---|---|---|---|
| Agile Facilitator | Routing & synthesis | `hub` | #888780 | gray (lead) |
| Agile Auditor | Pattern detection | `hearing` | #7F77DD | purple (meta) |
| UX Designer | Design & UX | `palette` | #D85A30 | coral (creative) |
| Design Engineer | Design-to-code fidelity | `integration_instructions` | #B84A26 | coral (creative) |
| Content Designer | Copy & vocabulary | `edit_note` | #D4537E | pink (creative) |
| Accessibility Specialist | Accessibility & standards | `accessibility_new` | #1D9E75 | teal (quality) |
| QA Engineer | Testing & DoD | `fact_check` | #639922 | green (quality) |
| Software Engineer | Code & APIs | `code` | #378ADD | blue (tech) |
| Software Architect | Process & versioning | `architecture` | #185FA5 | blue (tech) |
| Product Owner | Purpose & scope | `explore` | #BA7517 | amber (strategy) |
| User Researcher | Research & sourcing | `travel_explore` | #EF9F27 | amber (research) |
| Reliability Engineer | Reliability & runtime | `dns` | #5B7185 | steel (ops) |

Subtitle rule: a **noun phrase naming the field** — sentence case, `&` for compounds, no verbs, 1–3 words, each distinct. It is the second line of the speech/identity card, under the musician's name.

Colors are assigned by domain proximity (families share a hue). Emoji were rejected in favor of Material outlined icons (Composer preference).

**Interactive result tables — Note Picker and its static twin Auditorium (ADR-197, 2026-07-27, supersedes the Pivot table and the Roadmap-note picker as two separate templates)** render as widgets with:
- **Priority as a colored left edge + word** — gold `#FFAE41` critical, Royal blue `#004AAC` impactful, grey `#888780` recommended (descending). The word rides beside the edge so priority is never conveyed by **color alone** (WCAG 1.4.1) — screen-reader and colorblind safe.
- **Impact and effort stack as one badge, top-right of each row** — not a second row under the description. Effort has its own arrow + colour scale (➡️ low / ↗️ medium / ⏫ high) in green/amber/red, distinct from impact's gold/blue/grey so the two axes never read as one measurement. The effort colours are a first pass, not yet CI-contrast-verified like the tier words above.
- **What before Why** — the title leads, the one-line description follows, full row width now that effort moved out of its way.
- **Selection is the single adopt path — only when there's a real action to adopt (Chair Review, 2026-07-04).** Checkbox multi-select + select-all (indeterminate state), whole-row click to toggle, selected rows tinted (`--bg-accent`); a bulk bar surfaces "Adopt selected as Program" and sends the pick back via `sendPrompt`. **No per-row add button** — the checkbox already *is* the adopt affordance. **Drag-to-reorder (new, 2026-07-27):** a grip on each row; dropping it renumbers every row live, so adopted rows send in whatever order they're currently sitting in, not the original data order.
- **Auditorium renders the identical body with every interactive affordance stripped** — no grip, checkbox, select-all, effort badge, or adopt button, no `<script>`. It is single-shot and self-closing (`triggers.md`): the Composer acts on its numbers by *typing* `Program: n, m`, never by clicking, so nothing on the surface needs to respond to one. **This is a per-table judgment call, never automatic** — a reference table with no adoptable action doesn't grow controls it can't back.
- Sortable headers (`unfold_more` → directional arrow; priority sorts critical-first), a **clearable** live filter (✕ appears when filled), an empty state, and keyboard focus rings.
- **Default sort direction — descending, everywhere, no exception (Composer standing rule, 2026-07-05, ADR-102).** Every table sorts **descending** by its primary ranked dimension — most-significant first (impact / value / priority highest first; dates most-recent first; a bare name/label column descending too). This replaces the earlier mixed default (name columns A→Z, the Auditorium ascending). Nothing is ascending by default anymore.
- Icons are **Material Symbols throughout** — one icon language.

**Charts / data-viz** render via Chart.js (jsdelivr CDN) with:
- The **semantic color rule reused** — gold `#FFAE41` / Royal blue `#004AAC` / grey `#888780`, or `--text-accent` for a neutral single series. A chart and a table mean the same thing by color.
- **Flat styling** — no chart borders, gridlines from `--border`, tick/label text from `--text-secondary` (read via `getComputedStyle`) so it adapts to light *and* dark. Legend off, title as a caption above, integer ticks, rounded bars, no chartjunk.
- **Accessibility is the mandatory fallback** — a `<canvas>` is opaque to screen readers, so every chart ships an `aria-label` summary **and** an `sr-only` data table carrying the same numbers. The table is not optional polish; it is the only path to the data for non-visual users. This is the belt-and-suspenders made concrete.

**Diagrams** render as inline **SVG (not canvas)** — SVG carries `<title>` + `<desc>` and `role="img"`, so it is screen-reader accessible on its own (no separate fallback needed). Flat: token fills (`--surface-2`), thin strokes (`--border-strong`), labels ≥11.5px in `--text-primary`/`--text-secondary`; **persona colors only on persona nodes**; directional arrows via a `marker`; a `viewBox` for responsive scaling; no shadows or gradients.

**Forms & dashboards:**
- **Stat tiles** — a responsive grid of `--surface-2` cards: small muted label, large value (weight 500), optional sub-line. For status/KPI at a glance.
- **Forms** — a `<fieldset>`/`<legend>` group, **label above input tied by `for`/`id`**, helper text in `--text-muted` beneath, full-width token-styled inputs with focus rings, and a **single primary action** that submits back to chat via `sendPrompt`. Real HTML labels make it screen-reader native — no extra fallback required.

**Clickable choices / elicitation** — two tiers:
- **Native question** (`AskUserQuestion`) — for a single quick pick (2–4 discrete options) or a yes/no. The host draws the buttons; use it mid-conversation for one decision. Every binary the Composer owns is two buttons, never a prose "reply yes or no".
- **Elicitation form widget** — for when a skill needs *several* arguments at once (onboarding, minting a Key). A **locked shell** (header + `.elicit-group` rhythm + Skip/Continue footer, all pre-styled) with **open input shapes** inside each group. Standard rules: **infer first, ask least** (a one-question form beats five where four are answerable); **phrase every prompt as a question, not a field label**; **vary the format** to the content (plain pills for short labels, cards with a Tabler icon + subtitle for richer options, preview tiles for output pickers, `range`/`date` for quantities) — 3+ groups should not all be pills; **selection state is always blue**, semantic color (amber/red/green) only for cost/risk/success; the header and upload anthropicons are **fixed chrome, emitted byte-for-byte**; no `<script>`, no `onclick` — the shell auto-wires toggles, "Other" reveal, file upload, and submit. Answers return as one line to parse. For the orchestra's onboarding the subject is the **Composer Key** (the personal layer), so the header reads `"Composer Key details"` — not "Score Key": the *score* is shared and never personalized, the *Key* is the individual Composer's, and the header must make that ownership unambiguous.

**Composed widgets — derived standards (ADR-36).** These six are *compositions* of the base standards above, not new tools. Each inherits the design system (tokens, flat, Material icons, dark-mode, accessibility) and adds its own shape:
- **Timeline** — events on an axis, **newest first** (descending default). A vertical list with a connector line + dot per event, an `eid` label and title. For history: ADRs, sessions, milestones.
- **Kanban / board** — a CSS grid of state columns (`--surface-1`), each holding cards (`--surface-2`) with a title + tag, and a count badge in the header. For work-in-progress; the concrete form of the blackboard-coordination pattern.
- **Comparison matrix** — attributes as rows, options as columns, real `<th scope>`; one column tinted (`--bg-accent`) as the recommended/default. **Qualitative tiers, never faked precision** — a matrix implying benchmark numbers it doesn't have is worse than an honest relative one.
- **Interactive explainer** — a control (`range`/toggle) that live-recomputes a result and its explanation in JS, with `aria-live` on the output. Didactic: play a concept instead of reading it.
- **Tree / hierarchy** — nested rows with `border-left` guides and a colored dot per leaf (persona family colors). Structure at a glance; a cousin of the diagram standard.
- **Stepper / wizard** — a multi-step flow: **all steps stream visible, then a post-streaming script shows one at a time** with progress dots + Back/Next (never `display:none` during streaming). For onboarding longer than a single form.

**Roadmap-note picker retired 2026-07-27** — folded into Note Picker (ADR-197, see the interactive-tables entry above), not a separate composed widget anymore.

Fallback and accessibility follow the base standards — SVG/HTML are screen-reader native; only a chart's canvas needs the sr-only companion table.

**Fallback (honest):** the widget tool renders only in supporting clients. Where it can't, fall back to a markdown table or list. Attribution never depends on this — it is always a markdown line.

## Widget toolkit & fallback (ceinture-bretelles)
The orchestra displays through the `visualize`/`show_widget` tool, choosing the form by the data:
- **interactive** — tables with controls (checkbox/radio, bulk + per-row actions, sort, filter) and live state.
- **mockup** — forms, dashboards, device/modal UI. (Not attribution: voices are markdown lines.)
- **chart / data_viz** — Chart.js charts and D3 geographic maps, real data only.
- **diagram** — SVG flowcharts, architecture, sequence, decision trees.

**Belt-and-suspenders:** every widget has a **markdown fallback** — a table/list/prose — because widgets render only in supporting clients. The widget is the belt; markdown is the suspenders. A result is never lost to a client that can't render the widget. Call `read_me` (visualize) before the first widget each session; keep explanatory text in the response, the visual in the widget.

## Routing — content type → widget → fallback (added 2026-07-03)

The **text layer is GitHub-Flavored Markdown** (GFM) — headings, tables, lists, task-lists, code, links, blockquotes; no colour, interactivity, or HTML. Anything richer is a **widget** (`visualize`/`show_widget`), which renders only where the client supports it. Route results to a widget where the client renders them, or the GFM fallback where it doesn't. Attribution is exempt: always a markdown line, never probed.

| Content type | Show (widget) | Fallback (GFM) |
|---|---|---|
| Yes/no · 2–4 discrete pick | `AskUserQuestion` buttons | numbered options list |
| A musician **talking** (solo or multi-voice) | — (never a widget) | one markdown line per voice: `🎨 **UX Designer** — subtitle` |
| Musician roster / identity | identity cards | list with colour dots |
| Ranked / orderable set | interactive table + Program | numbered table |
| Options compared | comparison matrix | table |
| Numbers / trends | Chart.js chart | table (+ sr-only table) |
| Process / architecture / flow | SVG diagram | steps list |
| History (ADRs, sessions) | timeline | list, newest first |
| Work states | kanban | table by column |
| Hierarchy / structure | tree | nested list |
| Several inputs at once | elicitation form | numbered questions |
| Live-recompute concept | interactive explainer | worked example |
| Status / KPI | stat tiles | table |
| Reasoning / the "tell" | — | plain GFM |

**This applies to the orchestra's own turns, not only results handed over.** A musician *talking* — solo or multi-voice — is always a markdown attribution line, never a widget (2026-07-23: cards removed as an attribution surface). Show-don't-tell governs how the orchestra itself speaks; for attribution specifically, plain and reliable beats rich and fragile.

**Attribution must not go silent.** The historical drift was routing every voice through a widget, then quietly dropping back to unattributed prose when the widget was slow — caught live three times. Cards were removed for exactly this (2026-07-23): the format can no longer fail to render, so an unattributed voice is now a plain omission with no excuse behind it. Every voice, every send, one markdown line.

- **A musician's flag, alert, or warning gets its own attribution line**, and **any multi-voice exchange gets one line per distinct position** (or one shared line if they agree). This is what a Composer needs to read first, not skim past in a wall of unattributed prose.
- **Any table matching a routing-table row is attempted as a widget before the GFM fallback**, not the reverse. Defaulting to markdown because a widget "felt like overhead" for a routine classification or reference table is exactly the drift this closes.
- **The mode-echo tag (invariant 4) is a separate line, above the attribution line, never folded into it.** A solo turn's own voice line still opens `🎨 **UX Designer** — design & UX`; the mode echo — `[Solo: UX Designer]`, `[Program 3,1 — on note 2]` — is a distinct line before it, not a substitute and not merged in. Found missing in a harness run (2026-07-17, ADR-148): a solo response opened straight into the voice line with no separate mode-echo line at all.

**Ownership:** the **Strings** (UX Designer + Content Designer) own this surface — Content Designer the text (GFM), UX Designer the widgets and the routing.

## The instruments (didactic — the Composer is new to AI)
- **Interactive choice** = the harness's question widget: 2–4 options, single/multi-select, always a type-your-own escape, interactive sessions only. Every option carries a verdict tag in its label — `(Recommended)` / `(Viable)` / `(Not advised)` — recommended first (Rule 1).
- **Inline visual** = a render tool that draws SVG/HTML (diagrams, mockups, charts) directly in chat.
- **Text** = the "tell." Use it for open-ended things and for detail *on request*.

---

## Provenance and what is missing here

**Published 2026-08-27 from the running skill's own reference.** Two things a reader should know
before relying on it.

**`widget_templates.md` is not in this library.** This page repeatedly names it as the copy-paste
source for the persona map and every markup pattern. That file's palette is derived from one
employer's brand — named anchor colours, family hues stepped from them — and whether that
derivation travels is the estate's decision, not this page's. **So the spec is here and the markup
is not.** A reader implementing this contract supplies their own tokens; the *rules* about them —
never colour as the sole signal, a word beside every coloured edge, an `sr-only` table behind every
canvas — are all here and are the part that matters.

**The Score Key is deliberately absent, and this page is the reason it can be.** The section
*Per-Composer overrides* above is the mechanism: **the rules on this page are defaults, and each
Composer transposes them into their own key.** What you are reading is the shared contract. One
estate's actual transposition — its attribution line count, its language mode, its density
preferences — lives in that Composer's own file and is not published anywhere. **If key material
travelled, it would be everywhere.**

**Internal paths are the source repo's coordinates** — `docs-site/`, `time.md`, `SKILL.md`,
`triggers.md`, and the ADR numbers throughout — kept verbatim rather than remapped, for the reason
given on `graph/grand-ensemble-graph.md`.
