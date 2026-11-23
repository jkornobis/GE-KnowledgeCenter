---
type: Method
title: "The two-line test for an unattended run — what proves it worked, what a silent failure would look like, and how a check can hold a run to both (Reliability Engineer, QA Engineer, Agile Auditor)"
description: "The rule that every run happening while nobody watches states two lines, a proof and a silent failure, in two labelled lines a check can find; what each line must name, five unattended runs of the estate with the two lines the Library reads from the record and the owner to confirm them, what a check can verify (that both lines exist and are not empty) and what it cannot (that they are true), and the outcome for a run that states neither — a proposal, the two labels being a naming that is the Composer's"
status: draft
card: none
serves: [Reliability Engineer, QA Engineer, Agile Auditor, Software Architect, Product Owner]
generated: { by: agent:ge-knowledgecenter, at: 2026-11-23T18:30:00+01:00 }
sources:
  - resource: https://raw.githubusercontent.com/jkornobis/GE-KnowledgeCenter/main/method/agentic-experience-design.md
    title: "Agentic experience design, whose section on the test this page makes a rule a check can cite"
---

# The two-line test for an unattended run

Written 2026-11-23 for the card on the next major version's first problem, *work the estate depends on can fail
silently* (`GE-KnowledgeCenter#258`). **The Library authors the rule; the Workshop's NOT-CHECKED outcome
(`GE-Workshop#345`) and the tower's proof lines (`jkosvr-tower#107`) cite it.** A proposal. The test already stood
as a paragraph in `method/agentic-experience-design.md`, drawn from one article's question *if this runs 10,000
times overnight, how would you know it worked?*; this page turns it into something a check can look for.

## The rule

**Every run that happens while nobody watches states two lines, in its own header or its card, and a check refuses a run
that states neither:**

```text
Proof:           what would show that this run worked
Silent failure:  what would be seen if it failed without saying so
```

**What each line must name.** *Proof* names a thing that can be read after the run: a count, a timestamp, an artifact, a
line of output, with its place. *Silent failure* names how the run could look fine and not be: an empty input, a
default that stood in for a setting, a process that was alive and doing nothing. **A line that says only "it exits 0" or
"it logs" is not a proof**: an exit code and a log are what the failing runs below also produced.

**Why two.** A run that cannot say its proof has nothing to prove. A run that cannot say its silent failure fails unseen,
and *that* line is the one that is skipped, because writing it means admitting a way the run can be wrong.

## Five runs of the estate, and the two lines as the record gives them

**These are the Library's reading from what the record says, not the owners' statements.** Each owner confirms or
corrects its own; where the record is silent the cell says so.

| Run | Proof, as the record implies | Silent failure, as the record shows it |
|---|---|---|
| **The freshness script** (the Workshop) | It read at least one tool page and listed each page's date | **It printed *all tool pages verified* and exited 0 after reading none**, run with its default folder (2026-11-15, `method/keeping-pages-true.md`) |
| **The hooks pin** (the Workshop) | The checkout equals `main`'s head | The checkout stood at an old commit while `main` had moved, with no sign (checked by hand, 2026-11-11) |
| **The boot relaunch of the five servers** (the tower) | Each of five screens reads `Connected` | The launch failed for all five and only a ten-minute cron brought them back about seven minutes late (the tower's log, 2026-11-20); a guard also read a live process as a healthy server (2026-09-07 and 2026-11-18) |
| **The watch's feed collection** (the Watcher) | The number of feeds collected equals the number configured | Eight sources were merged and never collected, with no alert (the Watcher's issue 157, as the Workshop quotes it) |
| **Publishing the public copy** (the Library, by the Workshop's command) | The forge, the public copy and the local clone name the same head | **The screening is a list of terms and passes a term nobody thought of**; the summary line reads clean either way |

**Four of the five (the freshness script, the boot guard, the feed collection and the screening) share a shape, in this
library's reading:** the run did the part it could see and reported success on the part it could not. That is the
finding, and it is why the second line is the one that cannot be skipped.

## What a check can hold, and what it cannot

**A check can hold the existence of both lines and that neither is empty.** That is mechanical and it catches the run
that never asked the question. **It cannot hold that the lines are true**: a proof line can name an artifact the run does
not produce, and a silent-failure line can name a failure that is not the one that happens. Truth is held by running the
failure on purpose, which is the Workshop's test of its own checks and not this page's.

**A run with neither line is NOT CHECKED, never CURRENT.** This is the outcome the Workshop's card gives a gate that
cannot run (`GE-Workshop#345`), applied to a run that cannot say what it proves. The exit code and its wording are
the Workshop's.

## What this page does not do

**It rules no label.** `Proof` and `Silent failure` are the Library's wording and a naming, which is the Composer's; if
he renames them, the check changes with them. **It does not list every unattended run of the estate:** the five above are
the ones the record names, and the full set is the Workshop's inventory (`method/agentic-experience-design.md` asked for
it). **It does not say what to do when a silent-failure line cannot be written** because nobody knows how the run could
fail; that run is the first one to put under a human's eye until someone does.

## What would test it

Give the check one run with both lines, one with a proof only, one with the lines present and empty, and one with
neither: it should pass the first and refuse the other three. That is the Workshop's test; it has not run.
