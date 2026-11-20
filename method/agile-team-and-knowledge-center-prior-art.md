---
type: Method
title: "Agile teams of agents and shared knowledge centers — what the web holds that matches the GrandEnsemble concept"
description: "A November 2026 delta to the library's September prior-art pages: four sources that come close to the concept (the BMAD-METHOD agile role skills, Claude Code's agent teams, the Knowledge Activation preprint, an article on context as code), what each matches and where it differs, what GrandEnsemble has that none of them states, and four candidates worth a closer look — none adopted, with the evidence level of each source marked"
status: draft
card: none
serves: [Product Owner, User Researcher, Software Architect, Agile Auditor, Agile Facilitator]
generated: { by: agent:ge-knowledgecenter, at: 2026-11-20T19:00:00+01:00 }
sources:
  - resource: https://github.com/bmad-code-org/BMAD-METHOD
    title: "BMAD-METHOD front page and README, read in full 2026-11-20 through a fetch agent; the skills and docs folders were not opened"
  - resource: https://code.claude.com/docs/en/agent-teams
    title: "Claude Code agent teams, first-party documentation, read in full 2026-11-20 through a fetch agent"
  - resource: https://arxiv.org/abs/2603.14805
    title: "Knowledge Activation: AI Skills as the Institutional Knowledge Primitive for Agentic Software Development, Bakal, preprint, v2 of 2026-06-04; read in part"
  - resource: https://www.ml6.eu/en/blog/working-with-ai-is-a-personal-skill-working-with-ai-as-a-team-is-not
    title: "Working with AI is a personal skill, working with AI as a team is not, ML6, 2026-07-22, updated 2026-08-19; read in full"
  - resource: https://arxiv.org/abs/2406.11912
    title: "AgileCoder: Dynamic Collaborative Agents for Software Development based on Agile Methodology — known from search summaries only, not opened"
---

# Agile teams of agents and shared knowledge centers

Studied 2026-11-20 at the Composer's request: *what on the web matches our concept of GrandEnsemble, an
agile team's skills and a knowledge center?* **This is a delta.** The library already compares the
orchestra with the multi-agent landscape (`method/orchestra_prior_art.md`, September) and the chairs with
named industry agents (`method/agent-chair-industry-map.md`, 2026-09-23), and neither is repeated here.
Nothing below is adopted, and nothing was installed or run.

## The four close matches

| Source | What it is | Matches the concept | Differs from it |
|---|---|---|---|
| **BMAD-METHOD** (MIT; the page shows 55.6k stars; stable line v6.12, a v7 preview that installs as skills) | An "agile AI-driven development" method: planning and build skills, durable project context, a `bmad-eval` skill that measures skills, agents and modules | The closest in spirit: agile roles delivered as skills, and the line "BMad keeps you in control" | A method for delivering software, not a knowledge system around one person. The page names no approval gate and reports no measured result. Its v7 date on the page may be stale |
| **Claude Code agent teams** (first-party, experimental, off by default) | A lead and teammates as separate instances, a shared task list with dependencies, direct messages between teammates | The consent rule: a teammate cannot approve or supply consent on the user's behalf, including messages from the user's other sessions | Each teammate is a full instance with its own cost, where the chairs are lenses in one context. Launching a team is not confirmed with the user, and a non-interactive session does not spawn one |
| **Knowledge Activation** (preprint, March 2026, revised June) | Skills as "atomic knowledge units" with a registry, a graph of continuations and deterministic validators; claims the bottleneck is "knowledge architecture", not model capability | The library's own shape: the card and index as registry, the graph, the gates as validators | The only evidence is one survey of 67 people at one company, self-reported, with no control group. The author states that staleness is only partly addressed |
| **ML6 on context as code** (July 2026) | Team context and skills as files in git, reviewed by pull request; a central standard that new projects inherit; "context harvesting", an agent proposing updates as a pull request after a session | The repository as shared memory, review by pull request, and End Day GE | No results are given. The author says staleness is "not fully solved" and harvesting is "not built yet in the way we want it" |

**A fifth, not opened:** AgileCoder (a 2024 paper, presented in 2025) assigns agile roles (product manager,
scrum master, developer, senior developer, tester) to agents working in sprints. Its benchmark figures are the
authors' own and were seen only in a search summary.

## What GrandEnsemble states that none of the four does

- **A human who authors and a roster that only proposes**, with the Composer's own presentation rules.
- **Twelve fixed role lenses in one context**, a Minimum Duet rule, and real subagents as the exception,
  against separate instances for every role.
- **Claim levels and audits on knowledge pages**, a gate that reads phrasing for a stale promise, and a
  record that says what was read and what was only run.
- **A researcher that does not build**, with the build handed to another instance.

**None of the four reports strong evidence either**, so the library is not behind on evidence, only thin
on it: one blind comparison counted by preference, one pilot of five questions.

## Four candidates, none adopted

1. **`bmad-eval`.** A skill that measures skills, agents and modules. Relevant to the baseline on
   `GE-Workshop#325`. **Not read.**
2. **Continuation paths.** In the preprint each knowledge unit says what to do on success, on failure and
   when to escalate to a human. The six endings cover escalation; a page carries no failure path.
3. **Context harvesting.** An agent proposes the knowledge updates after a session, for a human to approve.
   End Day GE does this by hand, and the no-loss check is its test.
4. **Agent teams as a peer channel between instances.** Experimental, with no project-level team
   configuration, so a watch and not a candidate for use.

## Limits, stated once

Four sources were read through fetch agents, one of them in part. A Microsoft engineering post that the
search returned answered 404 and is not used. The industry's practice on shared agent context
(a project-level instructions file for always-on rules, skills for situational ones) was seen only in search
summaries of three articles, including a claim that a repository-level file beat tool-specific skills in a
vendor's benchmark; **that claim was not checked.** Nearness to the concept is this library's reading.

## What would test it

Read `bmad-eval` and try its method on a skill the Workshop already has, with the baseline of
`GE-Workshop#325`; and put a failure path in three library pages and see whether a fresh reader uses it.
Both are proposals, and neither has run.
