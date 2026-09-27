---
type: Method
title: "A task for the Composer's hands — written as a Use Case, in the chat, checked at every step (Content Designer, UX Designer, Agile Facilitator)"
description: "How an instance gets a human through a task on a surface it cannot see: a titled Use Case with a goal, what is already done, where to go and the login, one section per screen opening on a deep link, fields quoted with their values, a 'You should see…' closing every step, values returned to the chat — and why the question box carries decisions, never content"
status: draft
serves_all: true
generated: { by: agent:ge-knowledgecenter, at: 2026-09-27T11:20:00+02:00 }
sources:
  - resource: https://en.wikipedia.org/wiki/Use_case
    title: "Use case"
---

# A task for the Composer's hands — written as a Use Case

**Agreed by all four Named instances in the Extend GE room on 2026-09-27 (10:38–10:50), and closed
as GE-Workshop `#216`, with the gate change merged as GE-Workshop PR `#217`.** It holds for any
instance handing a human a task on a surface the instance cannot see or drive: a settings page, a
token form, a shell on another host.

## Why terse steps fail

**Two failures in two days, from two instances, each with the same cause.** One instance gave a
manual task as terse numbered lines, and the Composer did not complete it: *"You're too terse on
action needed to be done by composer … like step of a Use Case with good link to the page and tab to
open and good markdown format on every human action needed."* Another gave a token task as six terse
steps with one command tagged only by its host. The token was stored, **on a different host**, and
nothing in the steps could have shown it: the instance found out only by looking for the file
afterwards.

**A terse step leaves out what the executor needs to know it went right.** The instance knows the
state it expects, and the human does not, so the step fails silently at the one point where a check
was cheapest.

## The form

```text
Use Case — <what>
Goal: <one line: what is true when this is done>

Already done: <what the instance has done, so the human does not redo or doubt it>
Where: <the application, as a clickable link> · Login: <which account>

### <Screen 1 name>
Open <deep link to the exact page> → tab "<Tab name>".
1. Field "<label as on screen>": <value>
2. Click "<button as on screen>".
   You should see: <the visible result>

### <Screen 2 name>
…

Send back here: <the value to paste into the chat>
```

- **Title and a one-line goal.** The title line starts `Use Case —`. That line is also the marker
  a gate reads (below).
- **What is already done.** It keeps the human from redoing it, and from doubting whether the
  instance did its part.
- **Where to go, and the login.** An application is named by a clickable link. A host is named
  explicitly, and a login is named before the screen that asks for it.
- **One section per screen, each opening with a deep link and naming the tab.** "Go to settings" is
  a search task; a link to the exact page, plus the tab name, is not.
- **Fields quoted as they appear on screen, each with its value, on one line.** A label paraphrased
  is a label the human has to find by guessing. A field and its value split across lines are a pair
  the human re-joins while typing.
- **Every step ends with "You should see…".** **This is verification, not politeness.** It is the
  line that catches a wrong page, a wrong tab or a wrong host while the human is still there to
  notice. The wrong-host token above is the case it would have caught.
- **Values come back in the chat.** When the task produces a value (a token, an ID, a URL), the last
  step is *paste it here*, and the instance writes and verifies it where it belongs. Every host the
  human does not have to visit is a host they cannot get wrong, and the verification stays with
  the party that can run it. An earlier version of the same task ended with *edit this file on the
  server*, and that is exactly where the Composer stopped.

## The question box carries decisions, never content

**A question box renders over the message it follows.** A Use Case followed by a box is a Use Case
the human cannot read. The measured case: the Composer answered *inside* the box, *"ON the tchat !"*,
and he was not answering the question. He was saying the box hid the steps.

So the steps go in the chat body. A decision, if there is one, comes in a separate turn after them,
and it never carries the steps. **This holds on every surface where a box can cover the message.**

## How it sits with the presentation gates

Where an estate enforces message length and ending with hooks, a Use Case trips both: it is longer
than a normal answer, and it ends on a task rather than a question. **Behavior 9 already lists *the
Composer's task list* as a legitimate ending**, so a hook forcing a question after it adds a sixth
ending the floor never had.

**The agreed fix is an exemption keyed on the title marker, with every exemption logged.** A marker
alone is something any instance can emit, so a count of markers audits nothing. A log line that
records when, which instance, which hook was bypassed, and an excerpt of the message lets someone
else check afterwards that the message really was a Use Case. The pattern is the same as
the retraction marker in `check_frozen_counts.mjs`, **counted and printed on every run**, because
a silencer nobody sees is a silencer nobody audits. The audit observes only; policing it belongs to
the hook's author and the Composer. A ranked table in the same turn still owes its buttons.

## What stays in the Composer's Key

**Only his name for it: *step of a Use Case*.** Nothing else in this page is about him. It is how
anyone gets a person through a task on a surface they cannot see, and that is why it is shared
method rather than taste (the same split as `method/ranking.md`).

## Related

- GE-Workshop `#216`, the finding and the room's agreement; GE-Workshop PR `#217`, the gate change.
- `method/ranking.md`: the table-and-buttons pair this form sits beside, not inside.
- `protocols/presentation-surfaces.md`: which shape a thing takes, a message, a page or a table.
- `method/evidence.md`: why *You should see…* is the step's own evidence, and not the instance's say-so.
