---
type: Tool
title: "Tool: Tokens Studio"
description: "The authoring end of the token chain: exports that silently lose resolution, no group-level description, and a tag with zero questions whose friction is filed under the tool downstream"
status: draft
serves: [Design Engineer, UX Designer]
generated: { by: human:jkornobis, at: 2026-08-26T16:53:30+02:00 }
sources:
  - resource: https://github.com/tokens-studio/figma-plugin/issues/3682
    title: "#3682"
  - resource: https://github.com/tokens-studio/figma-plugin/issues/2921
    title: "#2921"
  - resource: https://github.com/tokens-studio/figma-plugin/issues/3615
    title: "#3615"
---

# Tool: Tokens Studio

Audited 2026-08-26 by User Researcher. Figma plugin, freemium. Not MCP-mediated; driven inside Figma or via its own sync.

Re-audit: 15 days — measured, release cadence (n=9 intervals, agile-watcher @ acaadb3, 2026-08-30)

**Chair:** Design Engineer — the authoring-and-sync step inside `moves-tokens-between-design-and-code`, the chair's **required** lever (`chair-levers.md`). Also `Serves:` UX Designer, who authors the decisions the tokens carry.
**Lineage:** shares the Design Engineer's row with [`style-dictionary.md`](style-dictionary.md) — *design tokens*, 2014, lag **15 years**. This is the **authoring** end of that leap; Style Dictionary is the transform end.

## Context7

| Field | Value |
|---|---|
| Library ID | `/tokens-studio/tokens-studio-for-figma-plugin-docs` — resolved 2026-08-26, **not recalled** |
| Snippets · reputation · benchmark | 1,082 · High · **81.29** |

**No prior reading exists** — this tool is named in `register.md` as a candidate but was never tabled with a Context7 id, so this is the first measurement rather than a drift check.

**And the highest-scoring entry in the family is the glue, not either tool.** `/tokens-studio/sd-transforms` benchmarks **86.2** — custom Style Dictionary transforms that normalise what this plugin exports. **The seam between the two products is better documented than either product's own docs**, which is the strongest possible confirmation that the seam is where the work happens.

Also present and worth avoiding: `/websites/tokens_studio` at **41**, and `/tokens-studio/types` at 42.5 with 4 snippets.

## Critical (verified this session)

- **Design Engineer** — it **two-way syncs with Figma Variables** and carries a stronger export pipeline than Variables alone (`register.md`). `Posture: extends` — it builds on top of the native store rather than replacing it, which is why it does not fail the lineage question.
- **Design Engineer** — **its team joined Style Dictionary in Aug 2023.** The two halves of this chain are maintained by overlapping people; a chain whose middle is one organisation is a different risk profile from one stitched across rivals.
- **UX Designer** — token *sets* and *themes* are the unit of composition here, and they are the thing Figma Variables models differently. The namespace friction below lives exactly there.

## Known issues — defects and friction, from two records

### Defects — the project's tracker, read 2026-08-26 via the GitHub API

**248 open issues, and the `bug` label exists and is used** — but read the label list before the count: it includes `❇️ Featurebase Roadmap` and `☠️ Archive`, so **feature requests are routed off this tracker entirely.** The open count is therefore closer to real defects than the raw number suggests elsewhere.

**Engagement is very low** — the most-reacted open issue carries **2 👍** — and two of the top three are labelled `needs-responder`.

| Issue | State | What it costs the chair | Source |
|---|---|---|---|
| Export fails to resolve values when a referenced set is marked "Reference only" | open, 2025-11-11, `bug` `Figma variables` `Figma export` `needs-responder` | **the export silently loses resolution** on a legitimate set configuration. A token that looks correct in the plugin arrives unresolved downstream — the failure mode a design-side check cannot see | [#3682](https://github.com/tokens-studio/figma-plugin/issues/3682) |
| Duplicating a token across sets also duplicates it in the current set | open, 2024-06-26, `bug` `token duplicate` `needs-responder` | a routine authoring action produces a token the author did not intend, in a set they were not editing | [#2921](https://github.com/tokens-studio/figma-plugin/issues/2921) |
| Group-level `$description` unsupported | open, 2025-10-03 | the DTCG field that would carry *why a group of tokens exists* has nowhere to live — the accessibility-intent seam `register.md` already names, in miniature | [#3615](https://github.com/tokens-studio/figma-plugin/issues/3615) |

### Friction — Stack Overflow: no tag, and the questions live next door

**The `tokens-studio` tag holds 0 questions.** The tag page rendered; the count is real.

**But the friction is documented — under the other tool's tag.** The second-highest question on `style-dictionary` (25 questions total) is *"Style Dictionary reference error with a nested namespace from Figma Tokens Studio."* **Neither product's own tag carries the chain's problem; the downstream one does**, because that is where the failure surfaces.

**The reading rule this suggests, and it is new to this library:** for a tool that sits mid-chain, **search the tag of the tool it feeds**, not its own. A transform's errors are reported by whoever received the bad output.

## Limits — where this instrument stops

- **It is a plugin, not a platform.** Its release cadence rides Figma's, which is why this page's clock is 60 days rather than 30 or 90 — faster than a build tool, slower than the canvas.
- **Reference-only sets can export unresolved** (#3682), and the loss is silent.
- **No group-level description**, so the *why* behind a token group does not cross.

All three are **tool limits**, not reasoning limits.

## Recommended (Composer to accept/decline)

- **Design Engineer** — when reading docs for this chain, reach for `/tokens-studio/sd-transforms` (86.2) before either product's own entry; the glue is the best-documented part. — status: proposed
- **User Researcher** — for any mid-chain tool, sweep the *downstream* tool's tag as well as its own. Recorded as a candidate addition to `_template.md` rather than added unilaterally. — status: **proposed**
