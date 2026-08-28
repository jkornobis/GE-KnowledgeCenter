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

## Re-orientation on resume
On a new session, if a journal exists, the Agile Facilitator opens with the re-orientation anchor:
> "Last session we [X]. Open on the stand: [Y]. Pending your word: [Z]. Ready to continue, or new score?"

If a Capacity live-state snapshot also exists (`method/capacity.md`, added 2026-07-18), fold it in rather than treating it as a separate ritual — a historical percentage means nothing to a fresh session without the date attached, and shouldn't be silently ignored either:
> "...Last known capacity: [X]% as of [date] — that window's likely reset since; happy to take a fresh reading whenever."

## Why this matters
The tool built to solve context loss became a source of context loss (the cobbler). A formal journal closes that loop. **Impact: Medium** — the semantic memory already carries the load; this adds the episodic thread.
