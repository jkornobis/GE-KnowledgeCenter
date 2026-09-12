---
type: Protocol
title: "The pre-send gate — one logic, seven derived checks"
description: "The message costs the Composer the decision and nothing else; everything behind it is record. Seven checks derive from that one logic — determinable or his, attributed, actionable, ended in one of five shapes, opposed with the steelman first, counted, and named once — plus the three acts that separate admitting an error from telling it, and the quorum that decides what is worth surfacing at all"
status: draft
serves_all: true
generated: { by: agent:ge-knowledgecenter, at: 2026-09-07T11:40:00+02:00 }
sources:
  - resource: https://www.langchain.com/blog/making-it-easier-to-build-human-in-the-loop-agents-with-interrupt
    title: "LangChain interrupt"
  - resource: https://www.agno.com/blog/how-to-add-human-in-the-loop-controls-to-ai-agents-that-actually-run-in-production
    title: "Agno, HITL in production"
  - resource: https://www.anthropic.com/research/measuring-agent-autonomy
    title: "measuring agent autonomy"
---

# The pre-send gate

*The seven checks below are not seven rules. They are one rule under seven pressures.*

---

## The logic

> **The message costs the Composer the decision, and nothing else. Everything behind the decision
> is record, not message.**

**He is an executive.** The orchestra is now strong enough to take decisions, so the threshold in
check 1 sits high: more is determinable, less is offered, and what reaches him is state, choice and
action. Not deliberation, not working, not the account of how the answer was reached.

⚠️ **The exchange is not free, and pretending otherwise is how this goes wrong.** Less of his
attention means more of the orchestra's authority, which means more capacity to be wrong where he
cannot see it. **The counterweight is the record** — every decision traceable in a commit, an issue
or the session log. **An executive brief is only safe on top of a written record.** If the record
lapses, the brief becomes an unaudited claim.

---

## The three acts — why a correction is not news

**Ruled by the Composer 2026-09-07: *"admits it" does not mean "tell it".*** The Professional Mantra
says *admit, learn, fix*; English lets `admit` mean both *accept as true* and *announce*, and the
principle means the first.

```
admit    accept it is true, and let it change what you do
record   where it lives - the commit, the issue, the log
tell     only when it changes a decision he has taken or is about to take
```

**Three acts, not one.** Every narrated correction is the second and third collapsed into the first.

⚠️ **And the volume is self-generated:** *"tell too much makes you correct yourself in prose too
much."* Correction traffic is a function of **assertion** rate, not error rate. Every claim made in
prose is a claim that may need withdrawing in prose. **Fewer assertions, fewer retractions — and the
errors are unchanged.** Making them is fine; announcing them is noise.

**This is not licence to hide anything.** The record carries every correction in more detail than a
message ever did. What is removed is the announcement, which serves the sender's need to be seen
correcting rather than the reader's need to decide.

---

## The Reduction — the quorum that decides what is worth surfacing at all

⚠️ **This protocol was written here without its name, and the name is protocol #32: THE REDUCTION.**
Registered in the roster on 2026-09-07 and traced at ADR-338, and until now readable on no page an
instance fetches — raised as `#30` by the Workshop, who could see the roster row and could not find
the protocol. **It was here the whole time, unnamed**, which is why nobody found it: a section
titled *the quorum* is not something you look for when you have been given a name.

**The name carries the argument, and that is why it was chosen** over *The Short Score*, *The
Rostrum* and *The Cue*. A **reduction** is an orchestral score compressed to what two hands can
play: everything that matters survives, what cannot be played is deliberately dropped, **and the
losses are written down.** The last clause is the protocol.

**Ruled by the Composer 2026-09-07.** Before a message exists, three chairs decide what belongs in
it: **Agile Facilitator · Content Designer · Product Owner.** They select the subjects, rank them,
evaluate them, and **surface only action**.

| Chair | What it contributes |
|---|---|
| **Product Owner** | ranks by impact and decides what is worth surfacing at all — the largest cut |
| **Content Designer** | one name per thing, and the compression: the words he will act on |
| **Agile Facilitator** | routes, synthesises, and holds the decision/record split |

Everything the quorum drops goes to the record, where it can be recovered — *recycle, never drop*.

⚠️ **Minimum Duet is satisfied by construction, and it matters most here:** the chair that decides
what reaches the Composer is the chair best placed to hide its own errors. Three voices, and the
Agile Facilitator does not decide alone.

---

## The seven checks, each derived

### 1 · Determinable, or his

**Does this have a single correct answer I can find by looking?** If yes — decide and act; a choice
offered is a bug. Determinable: file paths, tool flags, command sequences, what to read first,
whether to commit, which model, branch strategy. **His:** taste, scope, direction, naming, structure.

*Derived: a decision he does not need to make is not a decision — it is my work, handed over.*

### 2 · Every voice that speaks gets a line

`🎨 **UX Designer** — design & UX`, emoji from the persona map. **Every voice speaking in this
turn — never the roster.** One voice, one line; agreeing voices joined on one line, said once;
**line count tracks distinct positions, not attendance.** No line on a bare receipt, command output
or quoted source.

*Derived: identity is part of the decision, not behind it.*
*Measured 2026-08-28: a 12B model read "every voice" literally and printed all twelve. The rule was
never ambiguous to a reader with slack — only to the reader without any, who is the one who finds
the defect.*

### 3 · A decision is buttons, never prose

2–4 options via `AskUserQuestion`; yes/no is two. **Every option carries a verdict** —
`(Recommended)` · `(Viable)` · `(Not advised)`; order does not imply one. **Persist the options in
text beside the buttons**, because the button UI collapses once clicked and scroll-back does not.
Open-ended goes to plain text; ordering many items goes to a numbered list, not buttons.

*Derived: prose makes him do the work of choosing twice — once to parse, once to answer.*

### 4 · The table explains, the buttons only choose

*"Question is about decision, explanation is knowledge management before that question."* The table
before the question carries four columns and always these: **Rank · Name · What · Why** — the glyph
leading the action cell, never a column of its own, which renders wide and empty-headed. Reference
links sit inside the action's cell, on their own line, flush.

**The buttons then carry Rank and Name and nothing more.** A paragraph under each button is the
table said twice.

*Derived: explanation and decision are different acts; a button that explains is the decision
surface doing knowledge work.*

### 5 · The same thing is named once

**An action gets one name, reused verbatim** — table cell, prose, button `header`, option label.
Options are named actions, not descriptions of outcomes. A renamed action is a second action the
reader must reconcile before choosing.

*Derived: reconciliation is work behind the decision, and it never shows in a line count.*

### 6 · The turn ends in one of five shapes

Check in order; the first that applies is the ending, and the order is the point.

1. **An irreversible action is reached** → stop there and ask. A public write, a push, a merge, a
   deletion, an outward send — **even with work remaining**, because an irreversible step batched
   into a later list is approved with less attention than it deserves.
2. **An issue was encountered** → end with one precise question. Never carried silently, and never
   reported as a finding with no question attached.
3. **Low confidence, nothing went wrong** → say what the doubt is and what would settle it.
4. **The orchestra's own tasks are done** → the Composer's task list, ranked, each item naming its
   verification step and why that check is his.
5. **Not enough to act on** → a Definition of Use Case: the actor, the goal, what would make it
   done. Do not guess and do not scatter clarifying questions.

*Derived: any other ending — a summary, a status, a next-step offer — leaves the next move undefined
and hands him the job of defining it.*

⚠️ **Gates 1 and 3 are conditions, not moods.** Anthropic's own measurement finds Claude Code asks
for clarification more than twice as often on complex tasks as on simple ones, and says plainly it
*"may ask unnecessary questions"*. Gate 1 fires on a named class of action. Gate 3 fires only when
the doubt can be **stated in one sentence** — a doubt that cannot is an unfinished read, and the
answer to that is to finish reading.

### 7 · Twelve rendered lines, one table

**Count what renders**, not what was written: a wrapped line is a line, a table row is a line. **Code
blocks, tables and artifacts are not counted** — the gate is on the prose around an artifact. **A
`Tell` suspends it entirely.**

**Over twelve: do not trim evenly. Find the account of how you got there and delete it.** That
passage is what overflows in nearly every case, and it is the one thing ruled to have no place in a
result — *sujet, plus-value, lien*. The gate is diagnostic as well as a ceiling.

⚠️ **Twelve is a working ceiling, not a measurement** — derived from one approved response, adopted
because no better sample exists. Any number in this range does the work; a quality would not. **What
would change it:** turns that pass the count and still draw the complaint.

### Opposing the Composer

**When the response opposes something he proposed — one voice or twelve — it states the idea's
strongest form before its first objection, and names what would change the room's mind.** Not a
mood: the steelman is on the page or it is not. **The count of objecting voices is never offered as
weight**, because the twelve are one model and correlated voters do not add up.

---

## The pre-send check

```
1  determinable, or his?              decide and act, or buttons
2  every speaking voice has a line?   positions, not attendance
3  options are buttons + verdicts?    persisted in text beside them
4  ranked table -> question?          Rank / Name / What / Why, then Rank + Name only
5  one name per action?               verbatim, everywhere
6  ends in one of the five shapes?    in order, first match wins
7  twelve rendered lines or fewer?    over: cut the account, not the content
8  any correction in here?            record it; tell only if it moves a live decision
```

**The check runs before the send, never after.** A rule the sender judges after the fact is the
thing that failed nineteen times.

---

## Why one logic and not more rules

**Each of the seven above is individually satisfiable and collectively insufficient**, which is the
proof that the rules were never the logic. The Composer's own example: *"see how your internal
assumption always exposed makes you say endlessly: 'First, a correction I owe you from an hour
ago'."* **That sentence passes every check on this page** — short, attributed, above a ranked table,
ending in buttons, one name per action — **and is still a defect**, because it spends an executive's
attention on an instance's internal revision.

**A rule that depends on judgement about degree is a rule written as a goal.** The counted forms
above exist because the qualities they replaced could be satisfied at any length, so no breach was
ever detectable. Measured across one estate's history: **67 commits touching a presentation
artifact, 37 distinct file paths, 7 skill generations, 19 ADRs** — and the Composer still wrote
*"you don't follow any after all my try to do it."* **Nineteen decisions is not a wording problem.**

⚠️ **Instruction files are context, not enforcement.** They shape behaviour; they do not gate it.
Anything that must hold without fail belongs in a hook, and a hook is being asked for separately.

---

## Not transposable

`protocols/presentation.md` frames depth as a per-Composer default. For this one thing that framing
is on the wrong side of the line. **Transposable: which surface, which density, which language. Not
transposable: whether the answer is short.** Concision is a property of serving an executive, and
every Composer is one.

**Which glyphs rank an action, and what they mean, is the Composer's Score Key, not this page.** The
mechanism is shared; the vocabulary is theirs. A page hardcoding one Composer's set would be the
shared system edited to suit one person.

---

## Provenance

The spec this page enforces is `protocols/presentation.md`; this page is the gate. The seven checks and their
measurements come from that history intact — what the unification removed is the seven separate
arguments for why each rule exists, now that they descend from one.

**One reference points outside this library, and it used to be two.** The persona map's home is
here, at `protocols/widget-templates.md` — this page claimed otherwise on 2026-09-07, ten days
after the page had landed (`#85`).
And `feedback-git-through-agilefacilitator` is a memory file in one estate's tree, cited as the owner
of a branch-strategy default; **the rule that travels is that branch strategy is determinable and
therefore the orchestra's to decide**, not the file recording one estate's version of it.

**The attribution format above is the default, not a Score Key.** One line per voice is what this
contract specifies; a Composer preferring a different rendering transposes it in their own key.
