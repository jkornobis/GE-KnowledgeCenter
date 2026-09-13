---
type: Method
title: "Recording a rule — a level is asked for, never assumed (Agile Facilitator, Agile Auditor, Content Designer)"
description: "Before a rule lands anywhere durable it carries a level — session, which dies at the boundary, or standing, which binds every future session — and the level belongs to the Composer; why that is a different object from marking a document a record, and why the case that actually bites is the sub-decision an instance takes inside someone else's ruling"
status: draft
serves_all: true
generated: { by: agent:ge-knowledgecenter, at: 2026-09-09T17:26:00+02:00 }
sources:
  - resource: https://raw.githubusercontent.com/jkornobis/GE-KnowledgeCenter/main/index.md
    title: "GE-KnowledgeCenter — index, and the record: convention"
---

# Recording a rule

**Before a rule lands anywhere durable, it carries a level.**

```text
[session]    dies at the session boundary
[standing]   binds every future session
```

**And the level is the Composer's, not the recorder's.** It is asked before the rule lands, never
inferred from the fact that someone wrote it down. Writing is not levelling: a thing put in a file
looks standing whether or not anyone decided it should be.

## It is not the same object as marking a document a record

The two are constantly confused because both are about durability, and the difference is who owns
them.

```text
record: <date>   a DOCUMENT is a dated pass rather than a living statement.
                 Mechanical, derivable from the page, and an instance can set it.
[session|standing]
                 a RULE binds this session or every session.
                 A decision, and the Composer's — an instance can only ask.
```

**A page marked `record:` can contain a standing rule; a living page can contain a session one.**
They do not constrain each other, and a vocabulary that used one word for both would lose the only
thing that matters about the second: **that somebody has to choose.**

## Declare it once for a body of rules, rather than tagging every line

**An in-band marker is available to be emitted like any other token**, and a small model does emit
it — measured at the Workshop end, 2026-08-29, in four answers out of five. A rule that ends up
printed in the message it governs has failed in the most public way available.

**So a floor declares its level once, in a sentence, and every rule under it inherits.** Per-line
tags are for rules recorded outside such a body, where nothing else supplies the level.

## ⚠️ The case that actually bites is not the Composer's own rulings

When he rules, the act of ruling supplies the level: he is deciding, durably, and everyone can see
it. **The trap is the sub-decision an instance takes INSIDE a ruling and then writes into a page
permanently.**

**A worked example, and it is this library's own, from 2026-09-09.** The Composer ruled that only
record pages carry a marker — *mark the exceptions.* Writing it required a second decision he was
never asked: **whether the date carried is the FIRST pass over a page or the LAST.** The recorder
chose the last, on the argument that a reader needs to know how stale the numbers are, and it is now
on five pages and in the index's conventions.

**That is a standing rule nobody levelled.** It is probably right. It was still taken by the wrong
chair, and the only reason it is visible is that it was written down in a commit message where
someone could disagree with it.

**The test, then:** *when I write this rule down, does it constrain a session that is not mine?* If
yes, and no Composer chose it, **it is a proposal wearing the clothes of a record** — and the honest
form is to write it, name it as unlevelled, and ask.

## Measured: how much of a real record predates the rule, and why the checker cannot see the gap

**A repository can adopt this page, write the distinction into an invariant, and build a checker for
it — and most of its own history still predates the idea.** Counted at the Workshop end by splitting
their decision log on its own ADR headers rather than by eye:

```text
ADR entries in the log                     362
entries carrying a `Level:` line            71
entries carrying none                      291
earliest entry that carries one         ADR-290
```

**The convention did not exist for the first 289 decisions**, and it holds imperfectly even after —
three entries past ADR-290 still carry no level (293, 303, 308). **That ratio is the finding, not the
gaps.** Anything reading the log historically is reading rules whose level nobody ever stated, and
the absence is silent: an entry without a level does not look incomplete, it looks like an entry.

**The instrument that exists there runs on every push and deliberately does not read the log.**
`scripts/check_rule_levels.mjs` checks a diff, never the corpus, over a declared scope — the
reference pages, the pattern ledger, the chair files, where a tag can be checked mechanically. Its
own header states why the decision log is out of scope:

> an ADR is a RECORD OF A DECISION and narrates rules constantly — "the rule is", "must", "never" —
> while the rule it records lands in one of the four surfaces above, where the tag belongs and where
> a session actually reads it. Tagging ADR prose would fire on nearly every entry, and a gate that
> cries wolf teaches its own bypass.

**The mechanism this leaves standing: narration and recording are indistinguishable to a grep.** A
decision log will always say "must" and "never" about rules it is merely describing, at a rate no
pattern can separate from the entries that are levelling something for the first time. A checker
that tried would either miss real gaps or flag most of its own history — which is why the coverage
figure above has to be read by a person, once, rather than enforced.

## What this page does not do

**It sets no marker syntax for this library.** `[session]` and `[standing]` are how one estate's
floor records the distinction; the distinction is the method, the brackets are not.

**And it does not make every small choice a question.** A decision inside a ruling that binds only
the work in front of you is a session decision by nature and needs no ceremony. **The test is
whether it reaches a session that is not yours.**
