---
type: Method
title: "Ranking a close-out — five categories, and why the sign has to depict the act (Product Owner, Agile Facilitator, Content Designer)"
description: "The form every close-out and backlog view is rendered in: what each of the five categories means, why postpone and recycle are not the same thing, why delegate is empty for a Composer working alone, and why the glyphs and the table-and-buttons pair are shared method rather than one Composer's taste"
status: draft
serves_all: true
generated: { by: agent:ge-knowledgecenter, at: 2026-09-08T16:24:00+02:00 }
sources:
  - resource: https://en.wikipedia.org/wiki/Eisenhower_matrix
    title: "Eisenhower matrix"
  - resource: https://en.wikipedia.org/wiki/Time_management
    title: "Time management — the Eisenhower method"
  - resource: https://en.wikipedia.org/wiki/MoSCoW_method
    title: "MoSCoW method"
  - resource: https://scaledagileframework.com/wsjf/
    title: "Weighted Shortest Job First"
---

# Ranking a close-out — five categories, and why the sign has to depict the act

**Every close-out and every backlog view is rendered as a ranked table**, one row per item, each row
carrying **the action and the recommendation** — never the account of how it was found. The form is
adapted from the [Eisenhower matrix](https://en.wikipedia.org/wiki/Eisenhower_matrix) and has been
changed enough that calling it Eisenhower is now a lineage rather than a description.

⚠️ **The ranking is of the ORCHESTRA'S work, never a task list for the Composer.** What is his
surfaces as an open decision in its own category, not as an assignment. That rule is the reason the
second category exists at all.

## The five

| | Category | What it means here |
|---|---|---|
| ⚡ | **do now** | An instance can do it, nothing blocks it, and it is worth doing before the others |
| 👁️ | **yours to judge** | Taste, tone, naming, scope, direction. **The one act the orchestra structurally cannot perform** |
| 📤 | **delegate** | The artifact belongs to someone else — another instance, a colleague, a service. A receiver exists |
| 🕝 | **postpone** | Nobody can act yet. **The missing thing is evidence, and acting now would be guessing** |
| ♻️ | **recycle** | No live claim on attention: parked back into the backlog, or closed without being done |

**A legend line sits under every table**, one line, the glyphs and their words, so the column reads
without being learned.

## The two distinctions that are always collapsed

**🕝 is not ♻️.** Recycle means *this has no live claim on attention*. **Postpone means the opposite —
it has one, and it is being held because acting on it now would be a guess.** The Composer's own
framing, 2026-09-08: *"it mean you must build proper research before acting."* **Postponing is a
commitment to find something out.** Recycling is a decision that nothing needs finding.

**Collapsing them costs the research.** A 🕝 row filed as ♻️ stops being anybody's, and the missing
evidence is never gathered — the item simply ages in a backlog until someone re-derives the same
question.

**🕝 is not 👁️ either.** 👁️ says *everything needed is present and the choice is yours*. 🕝 says
**nobody can choose, including the Composer.** Putting a 🕝 row in 👁️ hands him a decision he cannot
make, which is the same defect as handing him a task list, wearing a different glyph.

## Why 📤 is empty for a Composer working alone

**📤 requires a receiver.** In an estate of several named instances there is always one: the artifact
belongs to whoever leads that repository, and *one author per artifact* makes the row theirs by
construction. **A Composer working with no instances has nobody to hand to**, so the category is
structurally empty for them and every row that is not ⚡, 👁️ or ♻️ is 🕝.

**That is the correct behaviour, not a gap.** A form that offers *delegate* to someone with no
delegate produces invented receivers — the most common way a ranking becomes fiction.

## The rule that governs the glyphs

**The sign depicts the ACT, never the state around it.**

Set 2026-09-08, and it was learned by breaking it three times in one afternoon:

```
⚖️  a scale shows EQUILIBRIUM         nobody is choosing
↔️  a double arrow shows SYMMETRY     nobody is choosing
⏩  fast-forward means SKIP AHEAD     nobody has received anything
```

**The Composer's argument, which killed the first two at once:** *"Balance emoji isn't choice, it is
balanced between element."* **A glyph that survives only because nobody looked at it closely is not
a glyph that was chosen.**

## The table is half of a pair, and the other half is not optional

**A ranked table is always followed by buttons** — a multiple-choice prompt carrying the rows that
are genuinely the Composer's. **The table shows the state of the work; the buttons are where he acts
on it.**

⚠️ **A table that ends a message leaves every 👁️ row as something he must answer in prose**, which is
the exact defect the buttons rule exists to prevent, reappearing because a ranked table *feels* like
a finished answer. **It is not. It is the setup.**

**And the pair binds in both directions.** Every determinable row is executed **before** the table is
sent, so the buttons carry only what nobody else could have settled. A ⚡ row still sitting in the
table when the message goes out is usually a row that should already have been done.

## All of this is shared, glyphs included

**The Composer's ruling, 2026-09-08:** *"emoji are for all — this Eisenhower table + multiple choice
or button choice, it's basic multitasking of GE."*

**So the whole of it travels**: the five categories, their meanings, the two distinctions above, the
five glyphs themselves, the rule that the sign depicts the act, and the table-and-buttons pair.
**This is not a rendering preference and does not belong in one Composer's Score Key.** It is how an
orchestra reports work in progress to anyone, on any machine, in any repository.

**What a Score Key may still carry** is the placement — which column the glyph sits in, how the
legend line is worded — because those are page-level taste and the Key is where taste is declared.
**The glyph for a category is not**, and an instance that invents its own is out of tune with every
other instance rather than expressing a preference.

## When the table stops being the right container

**A ranked table is a VIEW, not storage.** It is rebuilt each time from whatever the tracker holds,
and it dies with the session that printed it. **That is fine while the list is small and a lie once
it is not.**

**So past a certain size the orchestra says so and proposes a board** — Jira, Trello, Wekan, the
repository's own issues, whatever the Composer already uses. **Board-agnostic on purpose: the point
is that the items live somewhere that outlives the conversation, not that any particular product
does.** Set by the Composer, 2026-09-08: *"if user start to open too much subject, GE encourage to
link to a jira/trello/wekan/whatever."*

**Three signals, and each is countable rather than a judgement:**

```
the table no longer fits one screen without scrolling
a row survives two consecutive close-outs unchanged
the same subject is re-ranked from memory because nobody wrote it down
```

⚠️ **The second is the real one.** A row that is ranked identically twice is not being worked — it is
being *stored*, and a conversation is the worst storage there is: it has no search, no history, no
owner, and it is gone when the session ends. **Re-ranking is the cost being paid, once per close-out,
for not having filed it.**

### Look at the host before proposing a tool

**Before naming an external board, check what the runtime already gives you** — a plan mode, a todo
list, a task panel, a built-in tracker. Set by the Composer, 2026-09-08: *"checking if the AI model
where GE runs has a basic plan, to-do tasker, kanban board — to use it and make task persistent."*
**Proposing an install when the host already has the thing is noise, and it is the failure the
tool-discovery protocol exists to prevent one layer up.**

⚠️ **But the feature is not the answer until its LIFETIME is checked, and this is where the reasoning
usually stops too early.** *"Storage in conversation doesn't survive"* is the whole argument — and
**most host task features are session-scoped too.** A todo panel that resets when the conversation
ends is a better *view* of the same volatile list. It is not storage, and treating it as storage is
the original defect with a nicer interface.

```
does it survive the session?          if no, it is a view — useful, not a board
does it survive the machine?          a local file is storage until the disk is not there
can another instance read it?         a board nobody else can open is a private note
does it hold WHY, not only WHAT?      a title with no reasoning cannot be re-judged later
```

**Three answers, and only the third is a board:**

| The host offers | What it actually is | Use it for |
|---|---|---|
| a todo list scoped to the session | a **view** | staging what this session will do |
| a file it writes into the project | **storage**, if the project is under version control | anything that must outlive the session |
| an issue tracker or kanban it can reach | a **board** | anything another instance or another day must find |

**Measured for this instance rather than assumed:** the runtime here exposes no persistent task
surface of its own. Persistence is the repository's issue tracker and a Wekan board reached over
their APIs — **so every item that must survive is filed there, and nothing is kept in the
conversation on purpose.**

**It is ENCOURAGE, never impose.** The orchestra proposes the board and the Composer decides — the
same rule as everything else he authors. **And it does not require a new tool**: if the work already
lives in a repository, its issues are a board and the answer is to file rather than to install.

### And once it is on a board, it leaves the table

**A row unchanged across two consecutive close-outs drops out of the ranked table** and the message
links the tracker instead (ruled 2026-09-08). **The table shrinks to what actually moved, which is
the only thing that makes it worth reading.**

**Nothing is lost by dropping it** — that is precisely what having a board buys, and a row that is
both on a board and in every table is being maintained twice. **What replaces it is one line at the
foot naming the count and the address**, so the rest of the stand is one click away rather than
re-read every time.

⚠️ **The test is "unchanged", not "old".** A row that moved — got evidence, changed category, gained
a ruling — stays however long it has been open. **It is repetition that earns removal, not age.**

**Once a board exists, the table's job changes and gets smaller.** It stops being the list and
becomes the *ranking of the list* — read from the tracker at close-out, ranked, surfaced, thrown
away. **The tracker is where an item lives; the table is only where it is prioritised**, and keeping
that boundary is what stops the two from disagreeing.

## What this page deliberately does NOT do

**It does not rank by score.** [MoSCoW](https://en.wikipedia.org/wiki/MoSCoW_method),
[WSJF](https://scaledagileframework.com/wsjf/), RICE and impact/effort grids all exist and **none is
in use here.** They answer *how much is this worth* — a different question from *whose is it and can
it move*, which is what a close-out has to answer in one pass. **Do not substitute one without a
ruling**; the substitution looks free and changes what the table is for.

**It does not decide what goes in ⚡.** Deciding is the Product Owner's, in quorum with the Agile
Facilitator and the Content Designer, and the quorum's output is *only surfaced action*.

**And it does not cover what happens after the buttons.** A ruling taken from a button is recorded
where the work lives — an issue, a commit, a log entry — not only in the conversation that produced
it. That is a different page's subject.

## Where this sits in the corpus

**Not a graph edge — a claim by this page about what it stands next to.** The corpus is the
Workshop's; these are the bodies this page is about, named so an instance holding one can find the
other.

**`The Reduction`** — *the score is reduced to what two hands can play, and what is cut is written
down*. **That protocol is the act; this page is the form its output takes.** The Reduction decides
what survives; the five categories decide how the survivors are rendered. Neither is usable without
the other, and they were written a day apart without either naming the first.

**`Minimum Duet`** — *a solo has no counterweight*. The ranking is taken in quorum, and the reason is
the same one that protocol exists for: **the chair that decides what reaches the Composer is the
chair best placed to hide its own errors.**
