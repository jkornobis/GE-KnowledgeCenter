---
type: Chair Reference
title: "The jam list — small experiments to try for each chair, from papers, datasets and news"
description: "A list of experiments worth running per chair, assembled 2026-11-20 from research papers, datasets and one news article: each item names its source with an address that resolved, says what the source is and how firm it is, and gives a cheap test as a count with the Composer or a baseline as the judge — unranked by the orchestra, tiered by the Composer on 2026-11-20, with three runs recorded (the Agile Auditor classifying twelve logged faults, 8 of them failures to check before asserting; the Agile Facilitator scoring three Grand Auditorium runs by milestones, 14 of 15 met; the Product Owner scoring ten issues on three criteria, 20 of 30 met)"
status: draft
card: none
serves_all: true
generated: { by: agent:ge-knowledgecenter, at: 2026-11-20T21:00:00+01:00 }
sources:
  - resource: https://arxiv.org/abs/2407.08850
    title: "UICrit: Enhancing Automated Design Evaluation with a UICritique Dataset (UIST 2024) — title confirmed through arXiv's API 2026-11-20"
  - resource: https://arxiv.org/abs/2606.16262
    title: "UXBench: Measuring the Actionability of LLM-Generated UX Critiques — preprint"
  - resource: https://huggingface.co/datasets/SALT-NLP/Design2Code
    title: "Design2Code on Hugging Face — the dataset page resolves"
  - resource: https://arxiv.org/abs/2403.03163
    title: "Design2Code: Benchmarking Multimodal Code Generation for Automated Front-End Engineering (NAACL 2025)"
  - resource: https://arxiv.org/abs/2602.03850
    title: "WebAccessVL: Violation-Aware VLM for Web Accessibility — preprint"
  - resource: https://arxiv.org/abs/2507.19549
    title: "AccessGuru: detect and correct web accessibility violations in HTML code (ASSETS 2025)"
  - resource: https://www.deeplearning.ai/the-batch/agentic-tests-beyond-the-bug-hunt/
    title: "Agentic Tests Beyond the Bug Hunt, The Batch — news, secondary"
  - resource: https://arxiv.org/abs/2601.18241
    title: "TAM-Eval: Evaluating LLMs for Automated Unit Test Maintenance — preprint"
  - resource: https://arxiv.org/abs/2602.07900
    title: "Rethinking the Value of Agent-Generated Tests for LLM-Based Software Engineering Agents — preprint"
  - resource: https://arxiv.org/abs/2508.19221
    title: "Evaluating the Evaluators: Are readability metrics good measures of readability? — preprint"
  - resource: https://arxiv.org/abs/2504.00513
    title: "Leveraging LLMs for User Stories in AI Systems: UStAI Dataset — preprint"
  - resource: https://arxiv.org/abs/2607.26348
    title: "When Synthetic Users Fail: A Cross-Domain Benchmark of LLM-Simulated Human Survey Responses — preprint"
  - resource: https://arxiv.org/abs/2605.20767
    title: "The Illusion of Intervention: Your LLM-Simulated Experiment is an Observational Study — preprint"
  - resource: https://arxiv.org/abs/2603.17833
    title: "ArchBench: Benchmarking Generative-AI for Software Architecture Tasks — preprint"
  - resource: https://arxiv.org/abs/2604.03826
    title: "Context Matters: Evaluating Context Strategies for Automated ADR Generation Using LLMs — preprint"
  - resource: https://github.com/microsoft/OpenRCA
    title: "OpenRCA: Can Large Language Models Locate the Root Cause of Software Failures? (ICLR 2025)"
  - resource: https://arxiv.org/abs/2603.00468
    title: "Cloud-OpsBench: A Reproducible Benchmark for Agentic Root Cause Analysis in Cloud Systems — preprint"
  - resource: https://huggingface.co/papers/2503.01935
    title: "MultiAgentBench on Hugging Face Papers (ACL 2025) — the page resolves"
  - resource: https://arxiv.org/abs/2505.08638
    title: "TRAIL: Trace Reasoning and Agentic Issue Localization — preprint"
  - resource: https://arxiv.org/abs/2605.19196
    title: "Time to REFLECT: Can We Trust LLM Judges for Evidence-based Research Agents? — preprint"
---

# The jam list

Assembled 2026-11-20 at the Composer's request: *search Hugging Face and the news for a skill or methodology
worth testing for each chair, and build a jam list.* **A jam here is a small experiment: cheap, run against a
baseline, with the Composer or a stated metric as the judge.** The list is unranked by me and **three items have been
run** (the first three runs, below). **The Composer tiered all fourteen on 2026-11-20, one item at a time by his own answers, with nothing
marked as recommended; an instance only recorded them:** six Critical, seven Important, one Emerging, none
"not worth tracking". The tiers say which items are worth tracking and testing, in the sense the chairs'
reference files use (`chairs/skills-candidates.md`), not that any result is known.

## How firm the sources are

All 20 addresses below resolved on 2026-11-20; the arXiv titles were confirmed through arXiv's own
interface, and the Hugging Face pages answered. **Hugging Face turned out to hold few of these**: two of
the items resolve there (a dataset and a papers page); the rest live on arXiv and GitHub. Most are **preprints** and their own claims are
self-reported; the venues stated (UIST, NAACL, ACL, ICLR, ASSETS 2025) come from search listings. One item
is news and is marked secondary. **A benchmark's numbers are not carried here**, except where one source
disagrees with another and that is itself the finding.

## The list

| Chair | Item and source | What it is, as the source states it | Why try it, my reading | A cheap test, as a count | Tier |
|---|---|---|---|---|---|
| UX Designer | UICrit, [paper](https://arxiv.org/abs/2407.08850) | Expert critiques of mobile screens with boxes and ratings. **Sources disagree on its size** (3,059 critiques on 983 screens in one, 11,344 on 1,000 in another) | A ready set of human critiques to compare the chair's critique against | 10 screens, 2 critiques each (the chair's and the designers'), scored blind by the Composer (20 critiques) | Emerging |
| UX Designer | UXBench, [preprint](https://arxiv.org/abs/2606.16262) | Measures how actionable an LLM's UX critiques are | A metric for the chair's "judges, never decides" output | Score the 10 critiques above for actionability, 1 pass | Critical |
| Design Engineer | Design2Code, [dataset](https://huggingface.co/datasets/SALT-NLP/Design2Code) and [paper](https://arxiv.org/abs/2403.03163) | 484 real pages for screenshot-to-code, scored on layout, text and colour, plus human review | A fidelity test for the design-to-code seam the chair owns | 5 pages through the chair's route, scored against the paper's four measures (5 runs) | Critical |
| Accessibility Specialist | WebAccessVL, [preprint](https://arxiv.org/abs/2602.03850), and AccessGuru, [paper](https://arxiv.org/abs/2507.19549) | 1,500 pages paired with corrected WCAG versions; 3,500 real violations across 112 types | A ground truth to hold the two candidate audit skills against | 10 pages, the first-party and the community audit skill, violations found against the known ones (20 audits) | Critical |
| Software Engineer | A replacement for SWE-bench, [The Batch](https://www.deeplearning.ai/the-batch/agentic-tests-beyond-the-bug-hunt/), news | Reports SWE-bench as saturated and names DeepSWE, ProgramBench and ITBench-AA as stronger tests | Which measure, if any, to use on the Workshop's builders | Read the three, decide whether one fits (1 reading, no run) | Important |
| QA Engineer | TAM-Eval, [preprint](https://arxiv.org/abs/2601.18241) | Scores test maintenance by pass rate, coverage and **mutation testing** | Tells whether the gate tests catch bugs, not only pass | Mutation-test one Workshop test file and count surviving mutants (1 file) | Important |
| QA Engineer | Agent-written tests, [preprint](https://arxiv.org/abs/2602.07900) | Asks whether the tests an agent writes for itself add value | Bears on the rule that no instance certifies its own work | Count, in 10 past merges, tests written by the same session that wrote the code | Important |
| Content Designer | Readability metrics against humans, [preprint](https://arxiv.org/abs/2508.19221) | Finds that most readability metrics correlate poorly with human judgment, best about 0.56 | The Composer reads English as a second language, and the gate counts lines, not readability | 10 past messages from a fresh sample, a metric against the Composer's rating, 1 correlation | Important |
| Product Owner | UStAI and its quality criteria, [preprint](https://arxiv.org/abs/2504.00513) | 3,000 generated user stories, scored on the QUS criteria (atomic, minimal, independent and others) | Criteria for judging the library's own issue bodies | 10 Workshop and Library issues scored on 3 criteria (30 scores) | Critical |
| User Researcher | Synthetic users, [benchmark](https://arxiv.org/abs/2607.26348) and [validity paper](https://arxiv.org/abs/2605.20767) | Finds that persona-simulated respondents fail in ways that need testing; an intervention can shift the simulated population | The industry splits real from synthetic research (`method/agent-chair-industry-map.md`); this tests it locally | A persona predicts the Composer's score of the 5 pilot answers; compare with his real scores (5 predictions) | Important |
| Software Architect | ArchBench, [preprint](https://arxiv.org/abs/2603.17833), and context for ADRs, [preprint](https://arxiv.org/abs/2604.03826) | A benchmark with an ADR-writing task; a study finding 3 to 5 prior records the best context | The chair owns decision records, which are written at the Workshop | 3 decisions, a draft record with no history and one with 3 to 5 prior records, judged by the Composer (6 drafts) | Important |
| Reliability Engineer | OpenRCA, [GitHub](https://github.com/microsoft/OpenRCA), and Cloud-OpsBench, [preprint](https://arxiv.org/abs/2603.00468) | Root-cause benchmarks on real telemetry; a later study of the first reports that baseline agents do poorly (not checked) | The estate's own incidents are the only telemetry it has | 3 past faults from SESSION_LOG, an agent finds the cause from the log text alone, against what was found (3 cases) | Important |
| Agile Facilitator | MultiAgentBench, [Hugging Face](https://huggingface.co/papers/2503.01935) | Measures collaboration by milestone-based indicators and compares coordination layouts | A way to score a run by milestones, not only by outcome. **No benchmark of facilitation itself was found** | 5 milestones for each of the 3 Grand Auditorium runs, scored afterwards (15 scores) | Critical |
| Agile Auditor | TRAIL, [preprint](https://arxiv.org/abs/2505.08638), with the library's MAST page, and REFLECT, [preprint](https://arxiv.org/abs/2605.19196) | A taxonomy of agent trace errors; a test of whether LLM judges can be trusted | The log records this instance's own faults, which no one has classified | The faults recorded since 13 November classified by the taxonomy, counted by category (about 8 to 10) | Critical |

## First jam run — the Agile Auditor's classification, 2026-11-20

**What was run.** The 11 faults this instance's log records since 2026-11-13, split into 12 labelled cases
(one fault had two causes), each classified by two published taxonomies: TRAIL's (3 categories, 9 groups,
20 error types, read verbatim from its third section) and MAST's (3 categories, 14 failure modes, whose
definitions were read as a summary's paraphrase). **The labels are mine and the Composer checked them: they
hold.** Both taxonomies were built for agent traces, so applying them to one assistant working with a human
is a reading of this library, not theirs.

| # | The fault | TRAIL | MAST |
|---|---|---|---|
| 1 | Kept asking closing questions after he chose to stop | Instruction non-compliance | 1.5 Unaware of stopping conditions |
| 2 | Repeated for days that the screening terms file was absent | Context handling failure | 3.2 No or incomplete verification |
| 3a | First library Why diamond missed scripts at the repository root | Poor information retrieval | 3.2 |
| 3b | Computed page ages from the generated date, which overstated staleness | Tool output misinterpretation | 3.3 Incorrect verification |
| 4 | Stated the open-issue count from memory | Text-only hallucination | 3.2 |
| 5 | Answered on an article from search summaries and got a term wrong | Poor information retrieval | 3.2 |
| 6 | Said a PR was waiting, from a stale comment | Context handling failure | 3.2 |
| 7 | Rewrote a CRLF file whole | Tool selection error | none: caught by the diff stat |
| 8 | Attributed to a page something it does not say | Text-only hallucination | none: caught by reading the page |
| 9 | Two gates red on a first draft | Instruction non-compliance | 1.1 Disobey task specification; the gates caught it |
| 10 | Said a comparison never ran when it had | Text-only hallucination | 3.2 |
| 11 | Two wrong explanations of a gate before reading its source | Text-only hallucination | 3.3 |

**The count.** By TRAIL, 10 of 12 are Reasoning errors, 2 are Planning and Coordination (both stale context)
and none are System Execution; the most common type is the text-only hallucination (4 of 12). By MAST, **8 of
12 are Task Verification (6 no or incomplete verification, 2 incorrect verification)**, 2 are System Design,
and 2 were caught by a check that worked. MAST's published split for multi-agent systems is 42% specification,
37% misalignment and 21% verification (`method/orchestra_prior_art.md`), so this instance's mix is close to
the reverse.

**What it suggests, not a ruling.** The dominant fault here is asserting before checking, which the rule
that a verification needs an external artifact already names; coordination between agents is not where it
breaks. **Limits:** 12 labels, one instance, one labeller who is the instance, and a taxonomy that does not
describe the faults a check caught. TRAIL's own text lists a fourth category, "Domain Specific Errors", that
was seen only in a summary and was not used.

## Second jam run — the Agile Facilitator's milestones, 2026-11-20

**What was run.** Five milestones taken from the Grand Auditorium's own text (`protocols/triggers.md`) and
**fixed before any run was scored**, then scored 1 or 0 for each of the three runs on record, 15 scores,
from the log. **The scores are mine and the Composer checked them: they hold.** The method is the
milestone-based indicators of MultiAgentBench (`https://huggingface.co/papers/2503.01935`), applied here to
runs of this library's own method, not to agents.

The milestones: 1 each Why answer names its evidence or is marked an assumption; 2 the Composer ruled a brief
before any How; 3 the How diamond ran against the ruled brief, not against the current pages; 4 a second
thinker working apart audited the table; 5 the run ended in a ranked table with a recommended Program, put to
the Composer as buttons.

| Milestone | Presentation gate, 10 Nov | Strategy, 10 Nov | Library, 14 Nov |
|---|---|---|---|
| 1 Evidence named | met | met | met, though the evidence was incomplete |
| 2 The stop | met | met | met |
| 3 How against the brief | met | met | met |
| 4 Independent audit | **not met: the plan was never audited** | met: it changed the plan | met: it changed the plan |
| 5 Ranked table and Program | met | met | met |
| **Score** | 4 of 5 | 5 of 5 | 5 of 5 |

**A second count, from the log: corrections forced inside the run.** Presentation 1 (the first attempt
answered How first and was reframed); Strategy 0; Library 2 (the evidence overstated staleness and missed
scripts at the repository root, and the pilot later showed tool pages already had a clock).

**What it shows, with n of 3, none of it a rule.**
- **Milestones say that a run followed its steps, not that it was right.** The library run scored 5 of 5 and
  needed the most corrections, so a milestone score needs the correction count beside it.
- **The audit is the milestone that mattered.** Where it ran, in two runs, it changed the plan; the one run
  without it is the one whose plan has the least behind it.
- **Limits:** the scores are mine, the milestones are binary so "met" hides quality, and three runs are
  three runs.

## Third jam run — the Product Owner's scores on ten issues, 2026-11-20

**What was run.** The 10 issues this library instance filed between 2026-11-09 and 2026-11-20 (four here,
six at the Workshop), each read in full with its comments and scored 1 or 0 on three criteria, 30 scores.
The criteria come from the user-story quality framework in the item's source (`https://arxiv.org/abs/2504.00513`),
**adapted for issues and fixed before any issue was read**: *atomic* (one deliverable or one decision, so it
can close on one thing), *minimal* (every section serves its ask, nothing a reader must skip) and
*independent* (it can be worked without another issue being done first; a related link does not count, a
"closes when X exists" does). **The scores are mine and the Composer checked them: they hold.**

| Issue | Atomic | Minimal | Independent | Why |
|---|---|---|---|---|
| Library: stale model facts | no | yes | yes | A page update and, separately, whether to write an escalation page |
| Library: Figma probes | no | yes | yes | Three probes in one card |
| Library: pilot gaps | no | yes | no | Five gaps; one closes only when the Workshop's counter exists |
| Library: forge token | yes | yes | yes | One hand task |
| Workshop: presentation baseline | yes | no | yes | One deliverable; the body still carries three rules since ruled and built |
| Workshop: Grand Auditorium | no | yes | yes | A counter, a log, a sample and a replay in one build list |
| Workshop: library plan | no | yes | no | Four rows; the backfill depends on the freshness row |
| Workshop: two items | no | yes | yes | Two unrelated items, filed together on purpose |
| Workshop: unattended runs | yes | yes | yes | One inventory |
| Workshop: skill against the guidance | no | yes | yes | Three asks |
| **Met** | **3 of 10** | **9 of 10** | **8 of 10** | **20 of 30** |

**What it shows, with n of 10 and no rule.**
- **Atomicity is where these issues fail.** Three of the seven that fail were bundled on purpose, so that no
  deferral would be left without a card. Two standing rules pull against each other here: *a deferral with
  no card is a drop*, and *an issue is filed once and never as a draft*. The first pushes toward a bundle, the
  second toward a card that cannot close in parts.
- **All ten are still open**, none for longer than three weeks, so this run cannot say whether atomicity
  changes whether they close.
- **Limits:** I scored my own issues, the framework was built for user stories, and the library's handoff
  format is deliberately fuller than a story, so "minimal" is my adaptation.

## What the list does not say

- **No item is a recommendation, and only the first three have been run.** Each test is sized as a count of things to score
  and names its judge; the harness that would run several of them is on `GE-Workshop#325` and `#330`.
- **Two items touch the Workshop's code or records** (mutation-testing a gate's tests, and classifying
  faults from a log); the Library would propose them there and not run them on another repository.
- **Fields with no good match.** Facilitation has no benchmark found, and the Software Engineer's item is
  a reading, not an experiment.
- **My choice of item and my test are my reading**, and the sources were read as search summaries and
  resolved addresses, not in full. Treat each source's claims as reported.
