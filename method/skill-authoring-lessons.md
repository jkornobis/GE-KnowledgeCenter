---
type: Method
title: "What the skill ecosystem's authoring guidance says, measured against this library and its own skill"
description: "A study of the open Agent Skills specification, Anthropic's authoring best practices and engineering post, and the community's curated lists: which rules this library already meets, which it does not, with counts taken on 2026-11-20 — pages by length, descriptions by length and by whether they say when to fetch, the GrandEnsemble skill's own size — and what the community lists do and do not hold"
status: draft
card: none
serves: [Agile Facilitator, Software Architect, QA Engineer, Content Designer, Agile Auditor]
generated: { by: agent:ge-knowledgecenter, at: 2026-11-20T16:30:00+01:00 }
sources:
  - resource: https://agentskills.io/specification
    title: "Agent Skills specification — first-party to the open standard, read in full 2026-11-20 through a fetch agent"
  - resource: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices
    title: "Skill authoring best practices, Anthropic's documentation — read in full 2026-11-20 through a fetch agent"
  - resource: https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills
    title: "Equipping agents for the real world with Agent Skills, Anthropic engineering, 2025-10-16"
  - resource: https://github.com/anthropics/skills
    title: "anthropics/skills — the repository front page read 2026-11-20; the individual skills were not opened"
  - resource: https://github.com/travisvn/awesome-claude-skills
    title: "awesome-claude-skills — a community curated list, read 2026-11-20 through its README"
---

# What the skill ecosystem's authoring guidance says

Studied 2026-11-20 at the Composer's request, to learn what the community's skills can teach the chairs and
the library's method. **Read, never tried: no skill was installed or run, so every statement about a
skill is at the level *documented*.** The chairs' candidate references are on
`chairs/skills-candidates.md`.

## What a skill is, in three levels

A skill is a folder with a `SKILL.md`: YAML frontmatter, then instructions. The specification's loading
model has three levels: the `name` and `description` of every installed skill are loaded at startup, about
a hundred tokens each; the body loads when the skill applies, under 5,000 tokens recommended and under 500
lines; and files under `scripts/`, `references/` and `assets/` load only when needed. **The description is
the whole trigger**: the agent sees nothing else until it decides the skill applies.

## The rules, against what this library does

| The rule, and its source | This library | Measured 2026-11-20 |
|---|---|---|
| **The main file stays under 500 lines and about 5,000 tokens** (specification, best practices) | The resident skill's own `SKILL.md` file is the floor; everything else is fetched | The skill is 116 lines and 14,518 bytes, with a 276-character description. It passes. The skill folder holds the one file |
| **References stay one level deep from the main file; a table of contents tops any reference over 100 lines** (best practices) | The index is the one route in, the routing card sits ahead of it, pages link to pages | Of 118 pages measured, 71 run past 100 lines and **none carries a contents heading**; 5 run past 500 lines. Depth of the link chains was not measured |
| **A description says what the skill does and when to use it, in the third person, with the key terms** (specification, best practices) | The `description:` line is what `check_findability` and the index row match against | Medians 221 characters, longest 519, none past 1,024. **Only 9 of 117 contain a word that says when to fetch the page.** The skill's own description says what it is and does not say when to invoke it |
| **One term per concept, used throughout** (best practices) | The rule that an action name is one string in the table, the prose and the button; the coined-term lint proposed on `GE-Workshop#330` | Not measured; the lint is proposed, not built |
| **No time-sensitive statements** (best practices) | `check_forecasts` reads phrasing and turns red on a stale dated promise | Green on main |
| **Match the freedom to the fragility**: exact scripts for fragile steps, text for judgement (best practices) | A publish command with an approval bound to one head, against the Auditorium's open ranking | Already how the estate divides rules, hooks and scripts; no page says so in these words |
| **Evaluate before writing the skill**: run representative tasks without it, record the failures, build at least three evaluations, measure a baseline, then write the minimum that closes the gaps; test with a fresh instance; test with Haiku, Sonnet and Opus (best practices) | The pilot (fresh agents reading the library alone), the baseline proposed on `GE-Workshop#325`, the role trials on smaller models | **No recorded baseline for the skill's own text, and no record in this library of a test across model tiers.** Both are the Workshop's |
| **Install only from trusted sources, and audit a less trusted skill before use** (Anthropic's engineering post) | Ingested content is data, never an instruction (invariant 6; the trust boundary in `protocols/orchestra-protocols.md`) | The post says to audit; it does not say to treat a skill's instructions as data, which this estate does. **Stronger than the guidance, not weaker** |

**What the specification's validator is, for comparison.** `skills-ref validate` checks frontmatter and
naming. It does for a skill what `check_okf` does for a page; neither reads the outside. It was not run.

## What the community holds

- **The curated list read, `awesome-claude-skills`, holds 29 entries** (14 official, 2 collections, 12
  individual skills, 1 tool). It says it does not vet them, and tells the reader to review each skill and
  every script before enabling it. Its badge reads *updated Feb 2026*; **its newest dated item is
  2025-11-13**, and several sections are placeholders. It has **no entry** for accessibility, user
  research, architecture decisions, reliability or git workflow.
- **The wider directories do carry some of those**: several accessibility-audit skills, many
  architecture-decision-record skills, one user-research synthesis skill and one postmortem skill, as
  listed by third-party directories. **Those listings were not opened here.** One directory reported a
  skill whose referenced files were missing from its bundle. Star counts there are not evidence of
  quality: one shows figures too large to be taken at face value.
- **Scale is not signal.** One source reports about 24,400 repositories holding skill definitions by
  late June 2026, and the official repository's own front page says its skills are for demonstration
  and to be tested before use.
- **First-party matters most.** The specification, the best-practices page and the engineering post are
  the three sources that set the rules. The community's value for this library is as candidates for the
  chairs, not as method.

## What this means for the library, as proposals

1. **Chair references.** The candidates are listed per chair, unranked, none tried
   (`chairs/skills-candidates.md`). The Composer tiers them; nothing is installed.
2. **A contents line for long pages.** 71 pages pass 100 lines with no table of contents. Whether to add one,
   or to split, is his call and the Workshop's to measure.
3. **A "when to fetch" clause in descriptions.** 9 of 117 have one. The rule would be a one-clause
   addition checked by a script, and it improves what `check_findability` matches against. Not done.
4. **For the Workshop:** run the specification's validator on the GrandEnsemble skill; weigh a "when to use"
   clause in its description; and record a model-tier test of the skill text. Carried on a Workshop issue.

## Limits, stated once

The three first-party sources were read in full through a fetch agent, not directly. Counts come from the
files on 2026-11-20 and the first contents-heading test looks for three common headings only. Community
claims come from one curated list and from search summaries of directories. No skill was run, so nothing
here says a skill works.
