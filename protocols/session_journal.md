---
type: Protocol
title: "Session Journal Protocol (Agile Facilitator)"
description: "The episodic memory layer above indexed memory: what a session journal entry captures, where it lives, and how a later session re-orients from it"
status: draft
generated: { by: human:jkornobis, at: 2026-08-22T20:54:19+02:00 }
---

# Session Journal Protocol (Agile Facilitator)

Cross-session continuity. Partially in place already (the `MEMORY.md` index and per-fact memory files survive restarts). What was missing is the orchestra's *own formalization* of it — this is that protocol.

## What already exists (do not rebuild)
- `MEMORY.md` — the index loaded at every session start.
- Per-fact memory files (user, feedback, project, reference) — persist across sessions.
These ARE the orchestra's long-term memory. The journal below is the *episodic* layer on top.

## The session journal — episodic memory
At the close of a working session (or when the Composer says "checkpoint the session"), the Agile Facilitator writes a short journal entry capturing what the transcript won't preserve:

```text
## Session [date]
- Played: [what was built/decided]
- Open on the stand: [notes postponed, not deleted]
- Pending the Composer's word: [e.g. a project decision, the visual identity mark]
- Corrections that became protocol: [weight updates this session]
```

## Where it lives
Append to a running `SESSION_LOG.md` (episodic, chronological) — distinct from `MEMORY.md` (semantic, indexed). The ADR log (note 5) captures *decisions*; the session journal captures *state and open threads*.

## Compaction — append-only wins, and a closed subject is closed by an entry (ruled 2026-09-06)

**The Composer's ruling**, settling a conflict a session surfaced rather than resolved on its own:
a close-of-day routine asked for a closed subject to be **compacted** in the journal, while the
journal's own convention is **append-only, never edit an earlier entry**. Both were his rules and a
session had no standing to choose between them.

> **Append-only wins.**

**So compaction never edits.** A subject that is finished is closed by **writing a closing entry that
supersedes the earlier ones**, naming them, and stating the outcome in one place. The superseded
entries stay exactly as written.

**Why that is not merely the safer option.** The journal exists to hold what a diff cannot show, and
what it holds most valuably is **a sequence of readings that were wrong before they were right**. The
history rewrite here ran across four entries because it came undone once and was caught; compacting
them into an outcome would delete the only evidence that it needed catching. **An entry rewritten to
match what is now known is indistinguishable from an entry that was right the first time**, which is
the same defect this estate records elsewhere: *a wrong claim asks to be checked, a retraction asks
to be trusted.*

⚠️ **The cost is real and is accepted: the file only grows.** Length is paid for by the reading
rule — last entry first, backwards only as far as needed — and by a closing entry being the one place
a finished subject has to be read. **A journal that is long is a cost; a journal that has been edited
is not evidence.**

## Marking the Composer's corrections — one token, in every log (ruled 2026-09-27)

**When the Composer corrects an instance, the entry that records it carries the correction on its
own line, verbatim, behind one agreed token:**

```text
Correction (Composer): "<his words, exactly as he wrote them>"
```

**The Composer chose the token on 2026-09-27** (`#171`, note 3). It is the same in every instance's
journal, in any language the journal is written in, so the logs can be counted together.

**Why a token, and not a better reader.** Four journals quoted him four ways: measured the same day,
from 5 to 406 quoted spans, depending on each log's house style rather than on how often he corrected
anyone. A counter cannot tell a correction from a quotation in any of them. **With one token, the
Watcher counts corrections per log, per week, and flags one that repeats with no page covering it.**
A flag is a **candidate** for the Library to judge, never a verdict: deciding that two differently
worded corrections are the same one is a judgment, and a counter must not pretend to make it.

**From now on only.** The journals written before 2026-09-27 are not retro-marked. That would rewrite
entries, which append-only forbids (above). The backlog is read once, by an instance, and labelled as
a reading, not a measurement.

**The token marks what he said, not what was learned.** *Corrections that became protocol*, in the
entry template, records the rule the session wrote down. The token records the words that caused it,
so a later reader can check the rule against its source.

## Re-orientation on resume
On a new session, if a journal exists, the Agile Facilitator opens with the re-orientation anchor:
> "Last session we [X]. Open on the stand: [Y]. Pending your word: [Z]. Ready to continue, or new score?"

If a Capacity live-state snapshot also exists (`method/capacity.md`), fold it in rather than treating it as a separate ritual — a historical percentage means nothing to a fresh session without the date attached, and shouldn't be silently ignored either:
> "...Last known capacity: [X]% as of [date] — that window's likely reset since; happy to take a fresh reading whenever."

## Why this matters
The tool built to solve context loss became a source of context loss (the cobbler). A formal journal closes that loop. **Impact: Medium** — the semantic memory already carries the load; this adds the episodic thread.
