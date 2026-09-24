---
type: Protocol
title: "Persona map — the emoji and colour every attribution line is drawn from"
description: "The one table every attribution line reads: each musician's emoji, Material icon, dark and light dot colours, family and subtitle, plus the family and tier colours, split out of the widget templates so attributing a voice costs one small fetch"
status: draft
generated: { by: agent:ge-knowledgecenter, at: 2026-09-24T12:00:00+02:00 }
---

# Persona map

**Split out of `protocols/widget-templates.md` on 2026-09-24** (ruled by the Composer, `#148`). The
fetch count of that day found that page was the most-read in the library, reached in 11 sessions from
5 of 6 working folders, and almost always for the table below. Every one of those fetches carried
four blocks of widget markup the reader did not want. **The table and its notes are moved verbatim**;
the widget page keeps the markup and points here.

## The map — the single source (icon + colour)

Copy these exactly; never re-guess an icon or hex. Text-on-light contrast note: for a tier/priority *word*, use the darker shade in the right column, not the fill hex.

Colours are **derived from a house brand palette** (2026-07-23). Each musician is a lightness step
along its *family's* brand hue, so a chip reads family-first, musician-second.
Two hexes per musician because one usually can't clear contrast against both a
near-white and a near-black surface — same constraint as the tier words below.
Strings is the exception: brand Red clears both (4.14:1 Canvas, 4.12:1 Midnight),
so its three chairs carry one value each. Default to the dark column when the
rendering surface is unknown.

The palette these replaced was invented, not brand-derived, and failed colour-vision
testing outright: Agile Auditor `#7F77DD` vs Software Engineer `#378ADD` measured ΔE **0.6**
under deuteranopia — indistinguishable. Within a family the step is small by design
(clearly legible at a shared edge, quiet in isolation), so **never let colour be the
sole signal** — the icon and label carry identity, which is what a dichromat reads.

Two deliberate trades to know before reusing these: **Woodwinds is green**, a hue the source palette
doesn't ship — built at 153°, the midpoint of the palette's own 155° empty arc, at its
mean chroma, because Sky read as merely one more blue. And in **light** surfaces
**Strings and Harp sit at ΔE 9.4** under deuteranopia — accepted knowingly, and only
safe because every family is rendered with an icon and a text label beside its colour.
Never show a family as bare colour.
Mirrored in `docs-site/src/data/musicians.ts` as `--mus-*` CSS variables; update both together.

**Emoji column = THE attribution format** (not a fallback — the only one, since 2026-07-23).
Format: `🎨 **UX Designer** — design & UX`. One line per voice; **line count tracks distinct
positions, not attendance** — names joined on one line means the quorum agrees, said once.
The emoji is the only glyph carrying colour in terminal markdown, so it does the job the
dot hex does on a rendered surface; it can't match the hex, and that's fine. Picks mirror
each chair's Material icon (`palette`→🎨, `architecture`→📐, `code`→💻) — never instrument
or metaphor picks. The dot hexes remain for docs-site components and result widgets.

| Musician | Material icon | Emoji (attribution) | Dot hex — dark | Dot hex — light | Family | Subtitle |
|---|---|---|---|---|---|---|
| Agile Facilitator | `hub` | 🔀 | `#2E5BC0` | `#00318D` | Lead & meta | routing & synthesis |
| Agile Auditor | `hearing` | 👂 | `#4469D1` | `#173E9D` | Lead & meta | pattern detection |
| UX Designer | `palette` | 🎨 | `#C73E00` | `#C73E00` | Strings | design & UX |
| Design Engineer | `integration_instructions` | 🔗 | `#D14600` | `#D14600` | Strings | design-to-code fidelity |
| Content Designer | `edit_note` | ✏️ | `#DB4E0B` | `#DB4E0B` | Strings | copy & vocabulary |
| Accessibility Specialist | `accessibility_new` | ♿ | `#00904D` | `#00914E` | Woodwinds | accessibility & standards |
| QA Engineer | `fact_check` | ☑️ | `#18A05B` | `#0DA15C` | Woodwinds | testing & DoD |
| Software Engineer | `code` | 💻 | `#3D8DF6` | `#177CE3` | Brass | code & APIs |
| Software Architect | `architecture` | 📐 | `#4995FF` | `#2B84EB` | Brass | process & versioning |
| Reliability Engineer | `dns` | 📶 | `#549DFF` | `#3A8BF4` | Brass | reliability & runtime |
| Product Owner | `explore` | 🧭 | `#F6A639` | `#B36E00` | Harp | purpose & scope |
| User Researcher | `travel_explore` | 🔍 | `#FFB649` | `#C57D00` | Harp | research & sourcing |

**Family colours** (the layer above — use for family chips and hulls):

| Family | Dark | Light | Brand anchor |
|---|---|---|---|
| Lead & meta | `#2E5BC0` | `#003795` | Royal `#004AAC` |
| Strings | `#D14600` | `#D14600` | Red `#D14600` — same both themes |
| Woodwinds | `#009854` | `#0CA15C` | derived green (see note) |
| Brass | `#4995FF` | `#3B8CF5` | True Blue `#4995FF` |
| Harp | `#FFAE41` | `#C57D00` | Gold `#FFAE41` |

**Priority / tier colours** (pivot tables, roadmaps): edge colours are themeless (decorative, 3:1 non-text threshold) — critical/2.0-defining `#FFAE41`, impactful `#004AAC`, recommended `#888780`. **Word colours are theme-dependent** (found via docs-site-a11y CI, ADR-135 — a single hex can't clear WCAG AA 4.5:1 against both a near-black and a near-white background): critical/2.0-defining word `#8A5B10` on light / `#D9A441` on dark; impactful word `#004AAC` on light / `#6EA8F5` on dark; recommended word `#5F5E5A` on light / `#B5B3AC` on dark. `show_widget` in chat can't detect the client's theme, so pick the pair matching the Composer's actual rendering surface if known, or default to the dark-mode value (docs-site defaults dark too).
