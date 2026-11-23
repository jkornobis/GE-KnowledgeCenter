---
type: Method
title: "Tracing a ruling — the address a recorded ruling carries, in a form a script can read (Agile Auditor, Software Architect, Content Designer)"
description: "A ruling the Library records carries the address of the record that holds its reasoning, an ADR number or an issue in a named repository, written inside the parenthetical that already names the Composer and the date; why a script cannot find rulings in prose and so reads only the ones that declare themselves, how an honestly untraced ruling is marked, and the count of the form as it stands, 10 declared rulings on 7 pages as the Workshop's check reads them and 13 by a pattern that also reads line-wrapped ones, none carrying an address — a proposal, with the shape still the Composer's to rule"
status: draft
card: none
serves: [Agile Auditor, Software Architect, Content Designer, Agile Facilitator, Product Owner]
generated: { by: agent:ge-knowledgecenter, at: 2026-11-23T09:30:00+01:00 }
sources:
  - resource: https://raw.githubusercontent.com/jkornobis/GE-KnowledgeCenter/main/method/recording-a-rule.md
    title: "Recording a rule, the page this one sits beside: it levels a rule, this one addresses it"
---

# Tracing a ruling

Written 2026-11-23 for the card on the next major version's second problem, *what is decided does not
reliably reach where it is enforced or read* (`GE-KnowledgeCenter#259`; the Workshop builds the check
together with this rule, `GE-Workshop#348`). **A proposal: the form below is the Library's reading of what a
script can hold, and the marker's shape is a naming, which is the Composer's to rule.**

## The rule

**A ruling the Library records carries the address of the record that holds its reasoning.** The floor
already says a decision is traced at the Workshop or it does not exist (`CLAUDE.md`, section 5); this page
writes that down in a form a script can read.

## The shape proposed

The Library's pages already name a ruling in a parenthetical, `(Composer, 2026-11-21)`. **The proposal adds the
address to it and changes nothing else:**

```text
(Composer, 2026-11-21, GE-Workshop#330)          one issue, in a named repository
(Composer, 2026-11-21, ADR-409)                  one decision record
(Composer, 2026-11-21, ADR-409, GE-Workshop#339) both; separated by a comma
(Composer, 2026-09-06, untraced)                 honest: no address is known
```

**An address is one of two forms.** `ADR-<number>`, or `<repository>#<number>` with the repository named in full
(`GE-Workshop`, `GE-KnowledgeCenter`, `jkosvr-tower`, `agile-watcher`, `jkosvr-documentation`). **A bare
`#<number>` means this repository**, and is allowed only on a page of this repository. An optional level may
sit before the address, as `[standing]` does in the floor.

**Two reasons for this form over the others weighed.** A separate frontmatter field was rejected: a ruling
lives in a sentence on a page that holds many, and a page-level field cannot say which sentence an address
belongs to. A new bracket syntax was rejected: the existing parenthetical is the form already in use, so the
change is one added word and nothing to relearn.

## Why the check reads only what declares itself

**A script cannot find a ruling in prose.** `method/recording-a-rule.md` measured it at the Workshop end: narration
and recording are indistinguishable to a grep, because a log says *must* and *never* about rules it is merely
describing. A check that guessed would either miss real gaps or flag most of its history.

**So the check does not guess.** It reads a parenthetical that opens with `(Composer,` and a date, and asks one
question: does it end in an address or in `untraced`? **A ruling written some other way is invisible to it, by
design**; that coverage stays a person's reading, as `method/recording-a-rule.md` already holds of the level check. The honest
claim of the check is *every ruling that declares itself is traced*, never *every ruling is traced*.

## Untraced is a state, not a failure

**`untraced` says out loud what is unknown**, and the check lists it as a debt, never as an error. This is the
branch the history needs: most of the library predates the rule, and the log is append-only, so a ruling
recorded before today cannot be rewritten to carry an address it never had. **A parenthetical with no address
and no `untraced` is the only failure**, and it is checked on lines a commit adds or changes, not over the
whole corpus; the same reasoning as the Workshop's level check, which reads a diff and not the history.

## Measured, 2026-11-23, and corrected the same day

**The first count on this page was wrong, and the Workshop's check caught it** (`GE-KnowledgeCenter#259`, the Workshop's
comment of 10:05). It said 18 parentheticals on 10 pages with 1 carrying an address. **That pattern was looser than the form
this page proposes**: it also took variants such as `(Composer standing rule, 2026-07-05, ADR-102)`, and the single
"address" it found was one of those variants, outside the declared form. Counted again at head `76f2818`, the log and this
page excluded:

```text
parentheticals opening "(Composer, <date>", read across line breaks     13   on 10 pages
declared rulings as the Workshop's check reads them (by line)           10   on  7 pages
carrying an address, in the declared form                                0
malformed (the level `[standing]` read as an ending)                     1   CLAUDE.md:123
```

**Two differences from the check are findings, not noise.** One parenthetical in `CLAUDE.md` is wrapped across two lines, so
a reader that goes line by line cannot see it; and a level written before the address, `[standing]`, was read as an ending.
**Both are the check's to answer, since the rule allows the level**; the count that holds is the check's, 10 on 7. A looser
count of any date with a ruling word found 94 on 28 pages: the difference is narration, which is why the declared form is
the one to read. **So the first run lists every declared ruling as debt**, a list and not a verdict.

## What this page does not do

**It rewrites no earlier page and no log entry.** Adding an address to an old ruling is a separate act and
needs the address to be known; where it is not, the ruling stays `untraced`.

**It does not decide what counts as a ruling.** That is the Composer's, and the level of a rule stays his
(`method/recording-a-rule.md`).

**It does not name the ADR log's own format.** An ADR is the Workshop's record and its numbering is theirs; the
Library carries only the address.

## What would test it

Mark three recorded rulings on three pages with an address and run the Workshop's check over them and over one
page with a bare parenthetical; it should pass the first three and list the fourth. That is the check's own
test, requested on `GE-Workshop#348`, and it has not run.
