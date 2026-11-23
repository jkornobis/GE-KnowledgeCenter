---
type: Method
title: "The pilot as a standing measure — questions, rule and bar fixed before a run, one run per model tier, the Composer as the judge (Agile Auditor, User Researcher, QA Engineer)"
description: "How the Library measures what a fresh reader gets from it: the pilot's five questions restated in the shape the Workshop's harness reads, the scoring rule and the bar carried unchanged from the pilot and the Composer's to confirm before each run, a fresh set of questions each time because pages written against a set contaminate it, one run per model tier on the same file, what is recorded and where, what the first run can and cannot show, and what is deliberately not claimed — a proposal, no run has been made"
status: draft
card: none
serves: [Agile Auditor, User Researcher, QA Engineer, Product Owner, Agile Facilitator]
generated: { by: agent:ge-knowledgecenter, at: 2026-11-23T16:00:00+01:00 }
sources:
  - resource: https://raw.githubusercontent.com/jkornobis/GE-KnowledgeCenter/main/method/double-diamond.md
    title: "The Grand Auditorium, whose pilot section holds the first run this page makes repeatable"
  - resource: https://raw.githubusercontent.com/jkornobis/GE-KnowledgeCenter/main/pilot_questions.json
    title: "pilot_questions.json, the questions file this page describes; the harness reads its shape"
---

# The pilot as a standing measure

Written 2026-11-23 for the card on the next major version's fourth problem, *nothing measures how well the estate's
readers and rules work in use* (`GE-KnowledgeCenter#257`). The Workshop built the harness (`GE-Workshop#350`,
`scripts/fresh_reader_run.mjs`, read on the forge's `main` for this page); **the Library authors what it runs.**
**A proposal. No run has been made, and the bar is the Composer's to confirm before the first.**

## What is measured, and what is not

**One question: can a fresh reader that has only this library act on what it finds?** The pilot of 2026-11-14 and 15
sent five of his real questions to five read-only agents with no other context, and he scored the answers 2 of 5 under
a bar of 4, while the lexical proxy `check_findability.mjs` said 13 of 13 (`method/double-diamond.md`). **A standing
measure is that pilot made repeatable**: the same file, the same rule, the transcripts kept, the judge the same person.

**It does not measure whether the library is true.** A reader can act confidently on a page that is out of date; that is
the page-level detector's question (`GE-KnowledgeCenter#255`). It measures routing and sufficiency: whether the page the
reader needs exists, is reached, and answers.

## The three things fixed before a run

**The rule.** *An answer counts 1 only if a session could act on it without coming back to ask him.* Carried unchanged
from the pilot, because a measure whose rule moves cannot be compared with its last run.

**The bar.** *4 of 5*, carried from the pilot. **It is a placeholder that looks fixed, and that is a risk the page names:
the pilot's own record says the bar "was set in the audit and not argued".** The bar is the Composer's act, so the file
holds the pilot's number only so that the harness can start, and he confirms or changes it before each run. **The
harness prints the file's sha256 on the sheet**, so a bar edited after the answers were seen shows as a different file.

**The questions.** The pilot kept his questions only as a paraphrase in the log, so `pilot_questions.json` holds the
Library's **restatement** of the five (automating refresh; the Auditoriums as a progression of field scope; the remedy
for recurring presentation issues; outdated pages; finding content and searching before acting). **They are not his
words.** He confirms or rewrites each before a run.

## A fresh set each time, and why the first set cannot be reused

**Pages written to answer a question contaminate it.** Three of the pilot's five gaps have since been written
(`method/auditorium-variants.md` and the refresh and stale-page page), so a rerun of the same five now measures whether
those pages close the gaps, which is a useful regression check, and **no longer measures how the library does on a
question nobody wrote a page for.** So the standing measure has two kinds of run:

- **The regression run:** the same five, after a gap is closed (`GE-KnowledgeCenter#237`). It answers *did the page buy
  what we expected*.
- **The fresh run:** five new questions the Composer writes from what he actually needed since the last run, in his
  words. It answers *how does the library do on what it was not written for*, and it is the one that can fall under the
  bar for a reason nobody foresaw.

**A baseline now, before any gap is closed, costs one run and is the only way to say later what a page bought.**

## One run per model tier

`fresh_reader_run.mjs` takes `--model`, so the same file runs on a small, a middle and a strong model:

```text
Haiku 5.5   claude-haiku-5-5
Sonnet 5.5  claude-sonnet-5-5
Opus 5.5    claude-opus-5-5
```

**The reason is the pool study** (`GE-Workshop#342`, studied and not built): *does a small session answer as well as a
strong one* is the quality half of the pool question, and the library holds no test across model tiers
(`method/skill-authoring-lessons.md`). **The same file and the same library head on every run** are what makes three
sheets comparable; the harness records the head and the file's sha256 on each.

## What a run produces, and who scores

The harness writes a folder with a transcript per question and a sheet. **It never scores**: the Composer writes a 1 or
a 0 per answer by the rule and totals it against the bar. **A model grading its own family's answers would only confirm
what it already believes**, which is the weakness the first study on this subject found (`method/measuring-presentation.md`).

**Five questions, one scorer, one sitting.** That shows a pattern or none; it is not a rate. A run on three tiers is
fifteen answers to read, and the Composer's time is the scarce cost, not the tokens.

## What would bite

- **The sheet names the model.** A judge who reads *Haiku* above an answer is not blind. Hiding the model on the sheet
  is a request to the Workshop's harness, not something this page can do; until it exists, the Composer can score the
  answers without the header, and the page records which way a run was scored.
- **A reader that greps and does not read.** The pilot's agents grepped the index, so a miss can mean *not routed* and not
  *not written*. The transcript shows which; the score does not.
- **A cost nobody has measured.** The harness records each run's cost; the first run's figure is the first one the
  Library will hold, and it is not asserted here. The pool study's cost figure is unexplained (`GE-Workshop#331`).
- **Starting a run costs tokens and is the Composer's call.** The harness is not a gate and is never started by one.

## What this page does not do

**It runs nothing, sets no bar and writes none of his questions.** It does not claim a second blind comparison of the
method against a baseline: that is the later half of the card and needs its own design. It does not decide the pool.

## What would test it

One baseline run on the current library head with the Composer's confirmed five, scored by him, and the sheet kept. If
the score and the first pilot's 2 of 5 disagree widely on the unchanged pages, the restatement changed the questions
and the measure is not yet standing. That run is his to start, and it has not been made.

**What has run:** the harness's own dry run over `pilot_questions.json` on 2026-11-23 accepted the file and listed five readers that would start, with no agent started and no cost. That shows the shape is read, not that the questions are good.
