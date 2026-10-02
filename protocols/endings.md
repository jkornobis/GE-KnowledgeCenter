---
type: Protocol
title: "How a turn ends — the six endings of behaviour 9 (Agile Facilitator, Content Designer)"
description: "The closed list of ways a turn may end: an irreversible action to authorize, a question, a stated doubt, the Composer's task list, a Definition of Use Case, and since 2026-09-30 the day is closed; why the list is closed, and which turns the question-box gate lets end in plain text"
status: draft
serves_all: true
generated: { by: agent:ge-knowledgecenter, at: 2026-09-30T18:30:00+02:00 }
---

# How a turn ends — the six endings of behaviour 9

**Behaviour 9 of the skill had no page until 2026-09-30.** The skill marked it *orphan*, and it was
the one behaviour whose text lived nowhere else. This is that page.

## The six

A turn ends on **one** of these, and on nothing else:

1. **An irreversible action to authorize.** Something that cannot be undone waits for his yes.
2. **A question.** One thing he must decide, with the recommendation first.
3. **A stated doubt.** What the instance does not know, said plainly, rather than covered.
4. **The Composer's task list.** What only his hands can do, written as a Use Case
   (`method/hand-task-use-case.md`).
5. **A Definition of Use Case.** The shape of a thing to build, put to him before it is built.
6. **The day is closed** (the Composer, 2026-09-30, `#171`). The turn that completes `End Day GE`
   states the close and offers nothing after it.

**Why the list is closed.** An ending outside it is how a turn drifts: a summary nobody asked for, a
menu of possible next steps, a closing pleasantry. **Adding to the list is the Composer's ruling,
never an instance's.** The sixth arrived that way: the skill said *"never a sixth"*, and he amended it.

## Why the sixth exists

`End Day GE` exists to end the day. A question box after it, *"is there anything else?"*, has no
honest option except *stop*, which the close has already said, **so the step after the close reopens
the day it closed.** The Composer: *"Why GE still purpose something after End Day, I think it's
missing a guard rule."* It is the same argument as his 2026-09-17 ruling that took the estate-wide read
out of End Day: **a step meant to close the day must not be the one reopening it.**

**End Day only.** `Checkpoint the session` records state, and the work goes on, so a next step is
still honest after it. The exemption rests on one property, *this turn ends the day*, and only End
Day has it.

## How the gate recognises it

**The End Day chapter each instance appends to its own `SESSION_LOG.md` carries `End Day GE` in its
heading.** Every instance writes that chapter, so the fact is the same on all four. It is a fact about
the turn, not a judgement. The alternative, an `End Day` handoff file, is written by one instance
only, and would recognise one close in four.

Each exemption is logged, as for the other exemptions, so misuse is visible to whoever audits the
ledger. **A ranked table still owes its buttons**: if End Day renders its table in the chat, that
turn ends on a question, and the exemption applies to the closing turn that carries none.

## Turns the gate lets end in plain text

A question-box gate recognises a tool call, so these endings need it to stand aside. That is recorded
at the gate's end, one exemption at a time:

- **a Use Case** (ending 4), `#216`;
- **the first message of a session**, which asks for the Key and nothing more;
- **the turn after he has chosen *stop here***;
- **a waiting turn**, where nothing is his to decide;
- **the day is closed** (ending 6).

The last four were ruled together on 2026-09-27 and 2026-09-30, from the gate's own ledgers (`#171`).

## A watch wakes the session only when something arrives (2026-10-02)

**Every wake is a turn, and every turn costs the Composer a message.** A watch that expires on a
timer and is restarted (a monitor capped at 30 minutes, then re-armed) wakes the session on each
expiry, so a quiet afternoon becomes a column of *"re-armed, nothing new"*. He saw one and called the
watch broken. The watch worked; **the restarting was the fault**, measured on two instances.

**So a watch is started as a background command that ends at its first event**, wakes the session
once with that event, and is started again after it is handled. **Silence then costs nothing**: no
timer, no restart, no turn. Proven with a stand-in that printed twice: it woke at the first line, the
second never surfaced, and nothing was left running. A watch that keeps a marker on disk reports what
arrived between one wake and the next start, so nothing is lost in the gap.

This is the waiting-turn ending above, prevented at its source rather than exempted at the gate.
The estate's startup reminder carries it since GE-Workshop PR #246 (GE-Workshop #245).

## Related

- `method/ranking.md`: a ranked table is always followed by buttons.
- `method/hand-task-use-case.md`: ending 4, and why the question box never carries content.
- `protocols/session_journal.md`: the chapter the sixth ending is recognised by.
