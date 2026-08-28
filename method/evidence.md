---
type: Method
title: "Evidence — sourced research and the substrate facts"
description: "What is actually known about how this model behaves — long-context rule decay, the cost of a real subagent against a persona, and when independence has to be bought rather than simulated"
status: draft
generated: { by: human:jkornobis, at: 2026-08-28T16:46:45+02:00 }
---

# Evidence — sourced research and the substrate facts

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
