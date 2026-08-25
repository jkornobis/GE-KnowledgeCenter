---
type: Tool
title: "Tool: Zod"
description: "Runtime validation at the trust boundary: 58 open issues and a genuine zero open bugs, unknown keys passing by default, and the largest Stack Overflow view counts in this library"
status: draft
serves: [Software Engineer, Software Architect, QA Engineer]
generated: { by: human:jkornobis, at: 2026-08-25T14:47:07+02:00 }
---

# Tool: Zod

Audited 2026-08-23 by User Researcher. Library (TypeScript runtime schema validation). Not MCP-mediated, no auth.

Re-audit: 90 days — default, not measured (no release has yet invalidated anything on this page)

**Chair:** Software Engineer — `brain/engineer_references.md` names it Critical: *TypeScript types vanish at runtime, so trust-boundary data needs runtime validation.* Also reaches the Software Architect via the cross-library [Standard Schema](https://standardschema.dev/) spec. No lever in `register.md` covers it; sweep 1's four levers are design- and QA-side.
**Lineage:** the Software Engineer's row is *version control* (SCCS 1972 → git 2005), which this is not. **Recorded as a mismatch rather than forced:** Zod belongs to a younger seam the lineage table does not have a row for — **the type system reaching runtime**, which only became a discipline once a gradually-typed language shipped types that erase. Not every instrument is the leap of the chair it serves. `project/tools_lineage_full.md`

## Context7

| Field | Value |
|---|---|
| Library ID | `/colinhacks/zod` — resolved 2026-08-23, **not recalled** |
| Snippets · reputation · benchmark | 1,164 · High · **87.10** |
| Versions | `v3.24.2`, `v4.0.1` — pinnable, and v3/v4 differ enough that it matters |

**This one went up.** `brain/engineer_references.md` records **85.79** from 2026-07-20; today it is **87.10** — **the highest benchmark of any tool audited in this library**, and the first to move in the *other* direction.

**It refutes something written here yesterday.** `project/chair_tools_survey_2026-08-23.md` observed that three of three benchmarks checked had fallen, and asked whether that was scoring drift or documentation decay across the field. **A fourth reading answers it: neither, or at least not uniformly.** Benchmarks move per project, and three falling was a small sample, not a trend. The survey's own caution — *"three samples from one estate is not a trend"* — was the right call, and this is the reading that pays it off.

## Critical (verified this session)

- **Software Engineer** — the point is the **trust boundary**: request bodies, environment variables, third-party API responses. A TypeScript type is a compile-time claim about data the compiler never sees at runtime; a schema is the check that makes the claim true.
- **Software Engineer** — types are **inferred from the schema**, not declared beside it, which is what stops the two drifting. A hand-written interface next to a hand-written validator is two truths that agree today.
- **Software Architect** — [Standard Schema](https://standardschema.dev/) makes the validator swappable across libraries, so this is a `Posture: implements` choice rather than a lock-in.

## Known issues — defects and friction, from two records

### Defects — the project's tracker, read 2026-08-23 via the GitHub API

**58 open issues, and `is:open label:bug` returns 0.**

**This zero is a fact, and the check that proves it is one API call.** `agents/tools/playwright.md` records the opposite case — a `label:bug` count of 0 that measured a *labelling convention*, because that project has no such label. **Zod's label list was fetched:** `breaking, bug, codex, dependencies, duplicate, enhancement, needs-info, stale, working-as-intended`. The label exists, it is used, and nothing open carries it. **Fifty-eight open issues with no open bugs is a genuine health signal**, and the two pages together are the worked example of why the count alone is never one.

**What the top of the queue asks for instead is one thing, asked four ways** — validation *semantics*:

| Issue | State | What it costs the chair | Source |
|---|---|---|---|
| Stop parsing on the first error | open, 2022-09-11, **59 comments**, `stale` | Zod validates exhaustively and reports every failure. For a large payload that is work done to produce errors nobody reads, and the most-discussed thread in the tracker | [#1403](https://github.com/colinhacks/zod/issues/1403) |
| Feature request: `abortEarly` mode | open, 2024-12-05, 42 👍 | the same request, filed again two years later, which is how a tracker says the answer is still no | [#3884](https://github.com/colinhacks/zod/issues/3884) |
| Making all fields of an object nullable | open, 2023-10-21, **63 👍** — the most-reacted | schema-level transforms people expect to be one call | [#2893](https://github.com/colinhacks/zod/issues/2893) |
| Strict by default, or strict-deep | open, 2023-02-19, `enhancement` | **unknown keys pass by default.** A schema that looks like a contract is, out of the box, a partial one | [#2062](https://github.com/colinhacks/zod/issues/2062) |

**The last row is the one a chair must carry**: `.strict()` is opt-in, so a validated object may still contain fields nobody declared.

### Friction — Stack Overflow, read through the Browser pane 2026-08-23

**708 questions, and the view counts are the largest of any tool audited here** — 176k, 135k, 100k, 85k, 81k, 66k on the top six.

| Question | Votes · views |
|---|---|
| A zod object with **dynamic keys** | 65 · 66k |
| A field optional **OR** with a minimum length | 64 · 176k |
| Validating a **string literal type** | 57 · 85k |
| **Confirm-password** — a rule spanning two fields | 54 · 100k |
| A schema that validates a value *is* a given type | 44 · 135k |
| Non-optional but possibly `undefined` | 43 · 81k |

**Every one is the same problem: expressing a type-system idea in a runtime DSL.** Not a defect, not a build issue, not a boundary question — a *translation* between TypeScript's type space and Zod's value space, where the two do not line up one-to-one. **Zero open bugs and a third of a million views on six questions is a coherent picture: the library works, and the modelling is hard.**

## Limits — where this instrument stops

- **Unknown keys pass unless `.strict()` is asked for** (#2062).
- **No early abort** (#1403, #3884): validation cost scales with the payload, not with the first failure.
- **v3 and v4 differ enough to pin**, and Context7 exposes both — a page or an answer written against one can be wrong for the other.

All three are **tool limits**, not reasoning limits.

## Recommended (Composer to accept/decline)

- **Software Engineer** — treat `.strict()` as the default posture at a trust boundary and let laxity be the deliberate exception, not the other way round. — status: proposed
- **QA Engineer** — the SO evidence says the expensive part is schema *modelling*, not schema *running*; review effort belongs on the schema, where a wrong shape passes silently. — status: proposed
