---
type: Method
title: "Evidence — the executable core"
description: "The executable core and only that: when a real subagent is worth 3–15× a persona and the three fit cases that justify one, the model facts that change what you type, and a routing table to the research this page deliberately does not carry"
status: draft
generated: { by: human:jkornobis, at: 2026-08-28T16:46:45+02:00 }
sources:
  - resource: https://platform.claude.com/docs/en/about-claude/models/overview
    title: "Models overview"
  - resource: https://docs.claude.com/en/docs/build-with-claude/prompt-caching
    title: "Prompt caching across models"
---

# Evidence — the executable core

**This file carries only the executable core. The research behind it lives in the repo**, because the
skill executes and the repo remembers (`brain/brain_principles.md`). Every claim removed from here on
2026-08-09 was checked to exist in a knowledge file first (ADR-279); nothing was dropped.

## Spawning a real subagent

The musicians are role lenses in **one** context: near-zero marginal cost, no context fragmentation,
single-threaded writes. A real subagent is a separate model instance costing **3–15× tokens** and
fragmenting context. **Spawn only for the three published fit cases:**

1. **Parallelisable independent work** — several briefs at once, no shared state
2. **Context pollution** — bulk detail that would drown the main context; the worker holds it and
   returns distilled findings
3. **Specialisation** — genuinely different tooling per worker

Outside these, coordination cost exceeds benefit.

**When you do spawn:** a full **Delegation Brief** per subagent (objective, output format, sources,
what is explicitly out of scope), and **writes stay single-threaded through you**. The spawn itself
is the Composer's yes to give, asked before with the cost stated (invariant 3, ADR-216).

### A fourth delegate, and the only one you do not pay for

**Where a tool hosts its own AI agent, that agent is a delegate with different economics from the
three above.** Reached by driving a browser to the tool's chat panel — not an MCP connection, no
protocol and no schema; not a subagent, not in this harness and not spawnable from it.

| Delegate | Runs in | Knows | Who pays |
|---|---|---|---|
| **Persona** | this context | everything this context holds | this session |
| **Real subagent** | a fresh context, same harness | only its brief | this session |
| **MCP tool** | the tool's own API | nothing; it executes calls | this session |
| **Agent inside the tool** | **the vendor's compute** | **only what you type into its box** | **the vendor** |

**The last column is why it earns a row rather than a footnote.** The three fit cases above exist
because a subagent costs 3–15×; this one costs the calling session nothing, so the question it
answers is not *is this worth spawning* but *is this work safe to hand over*.

**Four things travel or they do not travel.** It has no access to your files, your repository or your
context: **content goes in the brief, verbatim, or it is invented**. It will not fetch this library
unless the pages are named in the brief — measured 2026-09-04, a complete deliverable built having
fetched zero pages, and both fetches succeeding first attempt once asked. Semantics are decoration
unless stated. And a brief has a practical ceiling around **4,000 characters**, so plan the split.

⚠️ **Verification does not delegate, and here the temptation is at its worst.** It is another
instance of this system, which makes its report the most tempting thing on the page to trust and the
least entitled to be — invariant 3 with the volume up, because an orchestra agreeing with an
orchestra is one model agreeing with itself twice. **It checks node properties and calls that
verification; the properties are usually right and the composition is what fails.** Measured in one
session: six strings drifted under a report reading *"all content verbatim"*, nine shapes overlapped
under *"what still looks fine to me"*, and a labelled relationship had no connector drawn.

**The division that holds: it writes; you compose and verify.** And it tells the truth about its own
failures **when asked a closed question** — *did you read X, yes or no?* returns an honest no where
*how did it go?* returns a summary.

**Test it before building on it.** The choice of instrument is a claim like any other, and the
cheapest test is one page, one small artifact, three names checked — the probe recorded in #39, which
held on four of four and contradicted a limit its own method had recorded. **A measured limit for
this route is provisional until a second operator reproduces it**, because the brief is the
instrument and one instance cannot separate the delegate's behaviour from its own briefing.

## Model facts — the only part that changes what you type

IDs are pinned snapshots and rotate: `claude-opus-4-8` (default, 1M ctx) · `claude-sonnet-5` (1M) ·
`claude-haiku-4-5` (200k) · `claude-fable-5` (top tier, premium — never a cost choice).

**Switching model mid-session** keeps the transcript and a reloaded Composer Key, but **resets the
model-scoped prompt cache** and can shift persona fidelity. Haiku's 200k may not hold the full skill
plus a wide Auditorium.

- [Models overview](https://platform.claude.com/docs/en/about-claude/models/overview)
  · [Prompt caching across models](https://docs.claude.com/en/docs/build-with-claude/prompt-caching)

## Why the orchestra is built this way — read these when asked

The failure taxonomy, the substrate facts, the security audit and the prior-art comparison are **not
here**. They are:

| What | Where |
|---|---|
| MAST failure taxonomy · overspawn · context rot · prior-art comparison · whether Minimum Duet is original | `brain/orchestra_prior_art.md` · `brain/agileauditor_references.md` |
| **How the model itself behaves** — context rot, lost-in-the-middle, and why the Invariants sit last | `brain/orchestra_prior_art.md` |
| Untrusted-content audit, spotlighting, dual-LLM quarantine, policy-as-code | `brain/multiagent_canon_audit.md` · `brain/brain_protocols.md` |
| Evaluation practice — grade the end state, ~20 real tasks, test both directions, pass^k | `agents/agent_qaengineer.md` · `brain/orchestra_test_harness.md` |
| Self-verification is not verification | `brain/brain_principles.md` — *The oracle rule* |
| Personas are not multi-agent | `brain/brain_protocols.md`, and invariant 3 |
| Capability truths — WCAG renumbering, web-fetch, the Figma surface | the chairs' `Domain` bindings and `agents/tools/` |

**Read them when the Composer asks why, or before proposing a structural change.** The rules they
justify already live in the Invariants and in `protocols.md`.
