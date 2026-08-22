---
type: Method
title: "Orchestra Prior Art — Comparable Systems (User Researcher)"
description: "Where a persona-based orchestra sits against published multi-agent practice, plus the substrate facts on long-context rule decay and what the measurements actually support"
status: draft
generated: { by: human:jkornobis, at: 2026-08-16T21:24:05+02:00 }
---

# Orchestra Prior Art — Comparable Systems (User Researcher)

**Status: researched with verified sources (2026-07-02).** Replaces the earlier unsourced brief. Deep-dive practice tables live in the three chair files (`agent_productowner.md`, `agent_softwareengineer.md`, `agent_qaengineer.md`); this file maps the *landscape* onto the orchestra.

## Where the Orchestra sits in the landscape

| Pattern (source) | The Orchestra's version | Verdict |
|---|---|---|
| Orchestrator-workers — [Anthropic](https://www.anthropic.com/research/building-effective-agents) | Agile Facilitator + 10 musicians | Same topology. Industry default confirmed. |
| Manager pattern (agents-as-tools) — [OpenAI guide](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf) | Agile Facilitator synthesizes; control always returns to center | Matches — the orchestra never does decentralized handoff. |
| Single-threaded writes, shared traces — [Cognition](https://cognition.com/blog/dont-build-multi-agents) | Agile Facilitator is the sole synthesizer; memory files are the shared trace | Matches. The musicians are mostly *lenses in one context*, not parallel writers — which sidesteps Cognition's core objection. |
| External memory / structured note-taking — [Anthropic context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) | The memory files + SESSION_LOG + MEMORY.md index | Matches — the orchestra applied this before reading it. |
| Blackboard systems (classic AI) | Memory files as shared knowledge space, Agile Facilitator as semantic writer | Analogous; the single-writer discipline is the modern refinement. |
| Human-in-the-loop as gold standard — [Anthropic evals](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) | The Composer as Neuron — the only real-time signal | Matches exactly; the orchestra's strongest alignment. |

## The distinctive nuance: personas vs. real subagents
Most published multi-agent guidance assumes **separate model instances** (real token multiplication, 3–15×). The orchestra's musicians are usually **role lenses within one context** — near-zero marginal cost, no context fragmentation. Real subagents (like the three research musicians dispatched 2026-07-02) are the exception. This is why Minimum Duet doesn't violate SINGLE-AGENT-BASELINE: two *voices* is a review discipline, not two token-burning agents. The rule for when to spawn real subagents lives in `brain_protocols.md`.

## Is "Minimum Duet" documented elsewhere?
Not found under any name in the sources surveyed. Nearest relatives: evaluator-optimizer pattern (Anthropic) and mandatory verification steps (MAST's third failure category is *absent* verification — the duet is a structural guard against exactly that). Tentatively original. ⚠ one remaining unverified: a deeper literature pass could still find a prior name.

## The failure literature, mapped
- MAST taxonomy ([arXiv:2503.13657](https://arxiv.org/abs/2503.13657)): 42% specification failures / 37% misalignment / 21% verification — the orchestra's counters are the delegation brief, handoff protocols, and QA Engineer gate + Minimum Duet respectively.
- Anthropic production failures ([research system](https://www.anthropic.com/engineering/multi-agent-research-system)): overspawn, ghost-chasing, coordination noise — countered by the effort-scaling rubric in `brain_protocols.md`.
- Context rot ([Breunig](https://www.dbreunig.com/2025/06/22/how-contexts-fail-and-how-to-fix-them.html)): poisoning/distraction/confusion/clash — countered by memory-file compaction and the Greenfield Reset.

## Substrate facts — how the model itself behaves (moved from the skill, 2026-08-09)

*Moved here by the per-claim existence check in ADR-279: eleven of twelve claims in
`skill/*/references/evidence.md` already had a home in a knowledge file. **This one did not** — it
existed only in `orchestra_decisions_log.md`, which records when something was decided rather than
where it lives. It is load-bearing: it is the justification for the Invariants recency block, the
most structural choice in `SKILL.md`.*

**Rule-adherence degrades over long context — the root of role regression.** Attention is a finite
budget (n² pairwise); accuracy and recall drop as tokens grow ("context rot"); and accuracy is
**U-shaped by position** — strong at the start and end, weakest in the middle ("lost in the middle").
**A rule buried mid-document sits in the worst position**, and the model receives no automatic
token-budget signal, so it cannot self-detect the drift.

- [Effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
  · [Context windows](https://platform.claude.com/docs/en/docs/build-with-claude/context-windows)
  · [Lost in the Middle (TACL)](https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00638/119630/)

**The mitigations, and what each one became here:** instructions and queries placed at the **end**
(~+30% quality) → the **Invariants recency block**; re-injecting reminders per turn ("context
hydration") → the **mode status line**; external state files → `brain/`, `SESSION_LOG.md` and the
ADR log themselves.

## Context management — measured, not reasoned (User Researcher, retrieved 2026-08-09)

*Run because the Composer refused a best practice built from two non-specialists' logic: **"best practices must come from real sources."** Declared set before searching: vendor engineering primaries and peer-reviewed/preprint measurement. Fetched this session, not recalled.*

### The named techniques (vendor material, labelled as such)

[Anthropic — *Effective context engineering for AI agents*](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents), 29 Sept 2025. Verbatim where quoted:

- **Compaction** — *"taking a conversation nearing the context window limit, summarizing its contents, and reinitiating a new context window with the summary."* Guidance: **maximise recall first, then iterate for precision**; over-aggressive compaction loses *"subtle but critical context whose importance only becomes apparent later."*
- **Tool-result clearing** — *"one of the safest lightest touch forms of compaction."*
- **Just-in-time retrieval** — keep **lightweight identifiers** (file paths, queries, links) and load at runtime. **Stated trade-off:** runtime exploration is *slower* than pre-computed retrieval and needs *"opinionated and thoughtful engineering"* to stop the agent burning context on dead ends.
- **Structured note-taking** — notes persisted **outside** the window, pulled back in later.
- **Sub-agents** — a worker *"might explore extensively, using tens of thousands of tokens or more, but returns only a condensed, distilled summary (often 1,000–2,000 tokens)."*

### The measurement (LOCA-bench, preprint — marked as such)

[LOCA-bench: *Benchmarking Language Agents Under Controllable and Extreme Context Growth*](https://arxiv.org/pdf/2602.07962), arXiv preprint, 17 pp. Design: one task held semantically fixed while environment description is varied across **8K · 16K · 32K · 64K · 96K · 128K · 256K** tokens — so context length is the independent variable rather than task difficulty.

**Numbers read from the PDF itself, not from a fetch summary** (`patterns.md`: *a summarizer's paraphrase is quoted as a primary source*, count 1):

- Short context is not the problem: **most models exceed 70% at 8K**; Claude 4.5-Opus reaches **96% at 8K**.
- *"As the environment description length becomes longer, average task accuracy drops quickly across models."*

**Table 2 — accuracy at a fixed 128K environment, by strategy.** This is the part that bears on the Composer's proposal, and **it does not say what a clean story would want:**

| Model | Base | +Tool-result clearing | +Context compaction | +Context awareness | +Memory tool | +Programmatic tool calling |
|---|---|---|---|---|---|---|
| DeepSeek-V3.2-Thinking | 10.7 | 12.0 | 13.3 | **4.0** | 8.0 | **24.0** |
| Gemini-3-Flash | 21.3 | 24.0 | 24.0 | 33.3 | 30.7 | 30.7 |
| GPT-5.2-Medium | 38.7 | 40.0 | 36.0 | 41.3 | 44.0 | **49.3** |
| Claude-4.5-Opus | 34.0 | — | — | — | — | **40.0** |

**Three findings that constrain any rule written from this:**

1. **Compaction and clearing help, but modestly** — typically **+1 to +3 points** at 128K, and **compaction went backwards for GPT-5.2** (38.7 → 36.0).
2. **The largest gain is not a context-management technique at all.** *Programmatic tool calling* is the best strategy for three of four models — **+13.3 for DeepSeek, +10.6 for GPT-5.2, +6.0 for Claude** — and it wins by *not putting the data in context in the first place*.
3. **One strategy is actively harmful to one model**: context awareness took DeepSeek from **10.7 → 4.0**. There is no strategy that is safe across models.

**Trajectory length is the hidden cost.** Compaction on DeepSeek: 191K → **1,476K** tokens to complete the same task. Context awareness on GPT-5.2: 141K → **617K**. **Shorter residency is bought with more total work**, which is the trade the vendor post names and this table prices.

**What this does not establish.** It measures a 128K single-agent tool-use benchmark; it says nothing about whether a *pointer layer* makes dropping safe, which is the Composer's actual claim and remains unmeasured here.
