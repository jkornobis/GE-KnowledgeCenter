---
type: Method
title: "The Grand Ensemble graph — the model as data"
description: "The machine-readable form of the three rings and their borders: 104 nodes, 251 within-layer edges and 282 crossings, every evidence-bearing edge carrying the sentence that earns it"
status: draft
generated: { by: human:jkornobis, at: 2026-08-26T18:40:00+02:00 }
---

# The Grand Ensemble graph — the model as data

**Everything the mandala pages argue in prose, in one JSON file a program can traverse.**
The pages in `mandalas/` are the reasoning; this is the result of it, derived mechanically
from the same sources and regenerated rather than hand-edited.

    curl -s https://raw.githubusercontent.com/jkornobis/GE-KnowledgeCenter/main/graph/grand_ensemble.json

## What is in it

| Layer | Nodes | Edges |
|---|---|---|
| `layers.principles` | 33 | 132 — `asserted` 73, `corroborated` 47, `earned` 12 |
| `layers.protocols` | 59 | 69 — all `earned` |
| `layers.musicians` | 12 | 50 |
| `movements` | 12 | 7 |
| `cross` | — | **282** crossings: `warrant`, `grounds`, `enacts` |
| `sharedConcerns` | 28 chair pairs | 16 carry an external standard, 12 do not |
| `absences` | 3 | recorded, because a meaningful absence is a finding |

**Every node carries a résumé** — its family, its seed, and the work that *teaches* it rather than
merely cites it. **Every edge carries a `status` and a `why`**: `corroborated`, `earned`, `asserted`
or `hypothesis`, plus the sentence that earns it — or, where there is none, the reason it is absent.
**An edge claiming evidence and carrying no sentence fails the build**, which is the whole point of
shipping the graph rather than a picture of it.

## How to read `status`

- **`earned`** — a quote from the source says it, and the quote is in the record.
- **`corroborated`** — two independent derivations agree.
- **`asserted`** — one source states it and nothing has checked it.
- **`hypothesis`** — proposed, not yet grounded.

**A reader who treats all four the same has lost the only thing this file adds over a diagram.**

## Two caveats, both about provenance

**The `doc`, `familyDoc` and `definedAt` fields are the source repo's own coordinates** —
`protocols.md:104`, `brain/ux_designer_references.md`, `project/protocols_mandala_source.md`. They
are **provenance markers, not fetchable paths**: the source repo is not public, and several of those
files are published here under different names — the chair reference files as `chairs/`, the mandala
sources as `mandalas/`. They are kept verbatim rather than remapped, because inventing a
correspondence would put a claim in the data that no derivation made.

**`sourceLine` on a shared concern points into `method/common_score_pivot.md`**, which is published
here and is the row's actual home.

## What it is derived from

`mandalas/principles-layer.md`, `mandalas/protocols-layer.md`, the three border maps, and
`method/common_score_pivot.md` — all published in this library. **The graph adds no knowledge; it
adds traversability.** If the two ever disagree, the pages are the source and this file is the
defect.
