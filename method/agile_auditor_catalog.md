---
type: Method
title: "Agile Auditor Detection Catalog (Agile Auditor)"
description: "The master list of anti-patterns the Agile Auditor watches for, consolidated from criteria scattered across the score"
status: draft
generated: { by: human:jkornobis, at: 2026-08-16T21:24:05+02:00 }
---

# Agile Auditor Detection Catalog (Agile Auditor)

The master list of anti-patterns the Agile Auditor watches for, consolidated from criteria scattered across the score. Before this catalog, the Agile Auditor fired on the 3-recurrence rule but had no single list of *what to watch*. This is that list.

## Firing thresholds
- **Zero-tolerance (fire on 1st occurrence):** authority violations.
- **Standard (fire on 3rd recurrence):** behavioral patterns.
- **Cross-session patterns** rank higher than within-session.

## Zero-tolerance patterns (fire immediately)
| Pattern | Signal |
|---|---|
| Minimum Duet violated | A specialist declared output "done" alone (no explicit Solo) |
| Aesthetic decision made alone | The orchestra chose a visual/taste direction without presenting options |
| Protocol overridden by its author | The Agile Facilitator breaks a rule it wrote |
| Deletion without confirmation | A destructive op ran on inferred, not explicit, consent |
| **Agile Facilitator-as-Composer drift** | The Agile Facilitator *authored* naming, structure, scope, or creative direction and offered only a veto — instead of presenting options first. A "Make it so" on a direction is not license to decide all the contents. The user composes; the Agile Facilitator is an agent that proposes. (Named 2026-07-02 after a major regression across a long build session. Recurred 2026-07-27: asked to write a Use Case to prevent overshoot on a principles-consolidation task, the Agile Facilitator wrote every field — goal, scope, success guarantee — itself and presented it as a yes/no, instead of drawing the goal sentence from the Composer. The correction mechanism was itself authored solo — the drift recurring inside its own fix.) |

## Standard patterns (fire at 3rd recurrence)
| Pattern | Signal | Source |
|---|---|---|
| Agile Facilitator overshoot | Executing before parsing question-vs-instruction | Agile Facilitator self-obs |
| French drift in Mode B | Output slips out of English | Content Designer |
| Vocabulary drift | Same concept named two ways across docs | Content Designer |
| Hardcoded magic numbers | Repeated literal values with no named source (e.g. the "18 memory files" drift) | Software Engineer |
| Rename left incomplete | A rename that didn't reach all surfaces | this session |
| Scope creep | A "fix X" task grew into "rebuild Y" | Product Owner |
| Self-certification | `[Agent ✓]` without naming a specific contribution | Software Engineer |
| Mode-echo drops the literal bracket tag | The exact `[Solo: MusicianName]` / `[Program ...]` form is replaced by an informal marker | QA Engineer (found via harness eval run 2, 2026-07-17) |
| Decision shown as prose instead of the `AskUserQuestion` widget | A discrete 2-4 option decision or confirm-question is written as an "Options for the Composer:" markdown list instead of invoked as the widget | Composer (flagged 2026-07-02 x2, 2026-07-03 x2, 2026-07-18 — fired at occurrence 5, ADR-165. Recurred 2026-07-27: a genuine 2-option decision — whether table widgets should get attribution's unconditional treatment — was written as unformatted prose in the same message explaining the button rule to the Composer. Caught live by the Composer, not self-noticed.) |
| Determinable decision offered as a choice | A decision with a correct answer (fact, best practice, obvious next step, anything settleable by looking) is handed over as an "Options" menu instead of the Agile Facilitator deciding and acting. Whether-to-present, upstream of the row above (how-to-present) | Composer (flagged 2026-07-20 as a standing principle — "choice is a bug"; fired, ADR-171) |
| **True against the wrong reference point** | A measurement, filter or diff that is correct about the thing it actually examined, and is reported as a claim about a different thing. **The tell is that nothing looks wrong**: no error, no conflict, no failed check — the instrument answered honestly, it was asked about the wrong object. Watch for a count stated as a comparison, a filter keyed on an actor the event does not carry, and a diff read against a base rather than a destination | Library instance, fired at occurrence 3 on 2026-09-05. (1) A bare-name count reported *"identical on both sides"* against a `main` that had moved between a pull request being opened and read — #14, then again #22. (2) A tracker watch filtered on the tag in an item's **body**, which records who *opened* it and never who caused the update, so merging another instance's pull request re-fired it — #22. (3) PR #17 reported `MERGEABLE / CLEAN` while it would have reverted a day's screening on three pages and 75 lines of another: the diff view renders against the **merge base**, and that base was stale — 2026-09-05) |

## Meta-patterns (the deepest)
- **The cobbler's children** — the orchestra fails to apply its own standard to itself. (Detected repeatedly: overshoot after writing "ask first"; the drifting count in a system that warns against doxa.)
- **Named-but-not-walked** — a principle written but not yet habitual. Knowing the path ≠ walking it.

## How the Agile Auditor speaks
`[Agile Auditor] Pattern detected: [what]. Occurred [N] times. Suggested: [one action to close it].`
Diagnosis, not verdict — it surfaces, the Composer decides. **Impact: High** — this makes the meta-agent effective instead of blind.
