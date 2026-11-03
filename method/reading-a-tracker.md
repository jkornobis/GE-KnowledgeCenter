---
type: Method
title: "Reading a tracker — titles select, Read All reads (Agile Facilitator, Product Owner, Agile Auditor)"
description: "The two rules that govern how an instance reads an issue surface: selection happens on titles and comment counts in one list call, and whatever is selected is read in full — body AND thread — because a body is where an issue opened and the thread is where it stands"
status: draft
serves_all: true
generated: { by: agent:ge-knowledgecenter, at: 2026-09-09T15:04:00+02:00 }
sources:
  - resource: https://raw.githubusercontent.com/jkornobis/GE-KnowledgeCenter/main/method/ranking.md
    title: "Ranking a close-out"
---

# Reading a tracker

**Two rules, in front of each other, and they are constantly confused for one.**

```text
SELECT   one list call — title · comment count · last updated.  No bodies.
READ     whatever you selected: body AND thread, in full.  No half-reads.
```

## Read All — a body is where an issue opened, the thread is where it stands

**Ruled by the Composer 2026-09-07 and named by him.** An issue read without its comments is not
read. **The body is the state at opening; everything that happened since is in the thread**, and on
a tracker where instances answer each other the thread is where the answers are.

⚠️ **What it cost, which is why it is a rule.** A ranking assembled from twenty-three issue bodies
published, as current, a claim that the issue's own thread had retracted **nine hours earlier**. The
bodies were read correctly. The ranking was wrong anyway.

**It applies to every tracker read**, not only to a close-out, and to boards as well as issues.

## Titles select — and it does not weaken the rule above

**Read All says a body without its thread is a half-read. It never said everything must be opened.**
Those are different steps, and merging them is what makes an arrival expensive: an instance that
opens every body on every tracker has paid to re-derive a backlog it will use three lines of.

**So selection is a separate, cheap step**: one list call returning titles, comment counts and last
-updated times, and no bodies at all. Everything selected is then read in full.

⚠️ **The guard, and it is the part worth carrying.** **A title is the least-maintained field on an
issue.** It is written once, at open, and nothing in any tracker forces it to age well — a title can
be flatly wrong about an issue whose thread corrected it, and frequently is.

**So the two cheap fields are read together and against each other:**

```text
a high comment count      the title is probably stale — the argument moved
a recent update           something happened that the title cannot show
both, on an issue you
were going to skip        open it
```

**Selection on titles is a filter, never a verdict.** An issue not selected is not judged
unimportant; it is unread, and the difference matters when someone asks why it was not in the
ranking.

## The failure this page exists to prevent, measured

**2026-09-09.** A session worked for several hours from what it remembered of its own tracker.
**Seven issues had been filed on that tracker since morning by other instances — two of them
carrying Composer rulings on pages the session owned.** None was seen until the Composer said *fetch
the issues from your repo first.*

**Nothing was corrupted and the cost was still real:** two rulings sat unactioned for hours, and the
work done in the meantime was chosen without them.

**The lesson is not *read more*.** It is that **an instance's memory of a tracker is a snapshot of
the moment it last looked**, and on a forge where four instances write to each other's repositories,
that moment expires quickly. **Where memory and tracker disagree, the tracker wins** — which is the
reason the list moved there in the first place.

## Two trackers, two jobs — GitHub is the inbox, the forge is the work (ruled by the Composer, 2026-11-03)

**GitHub is how someone outside the project contacts the library**, and it is answered from there. **The forge is where the work is tracked**, so an internal thread (a finding, a study, a handoff between instances) lives on the forge and nowhere else. **When a message on GitHub becomes work, it is re-filed on the forge once, with a link back, and the GitHub original is closed with a pointer that says only that it moved**, never with an address of the forge. Before this ruling the two held the same kind of thing and a bare number such as `#49` named two different issues.

**On 2026-11-03 the 12 internal threads then open on GitHub were moved this way**; GitHub has none open. The older pages and the journal cite them by their GitHub number, and a bare number there means the GitHub issue, which stays readable:

| GitHub (closed, readable) | Forge (live) |
|---|---|
| 7 | 211 |
| 9 | 212 |
| 10 | 213 |
| 11 | 214 |
| 12 | 215 |
| 13 | 216 |
| 39 | 217 |
| 44 | 218 |
| 48 | 219 |
| 49 | 220 |
| 50 | 221 |
| 68 | 222 |

**Cite with the tracker named when it matters** (`GE-KnowledgeCenter#12`, forge `#215`), because the numbering is separate and the sequences overlap.

## What this page does not say

**It does not set a frequency.** How often a tracker is re-read is a session's judgement and depends
on whether anyone else is working; there is no number here to obey.

**And it does not make selection safe.** A cheap filter over a badly-maintained field is still a
filter over a badly-maintained field. The guard above reduces the error; it does not remove it.
