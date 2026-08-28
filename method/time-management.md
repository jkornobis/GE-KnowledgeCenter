---
type: Method
title: "Time management — four methods, and how a Composer picks one"
description: "Time as a presentation option rather than a rule: none, ambient, scheduled and time-boxing, each keyed off a timezone and a set of working hours the Composer declares"
status: draft
generated: { by: human:jkornobis, at: 2026-08-28T16:46:45+02:00 }
---

# Time management — four methods, and how a Composer picks one

Time-management style is a **per-Composer preference in the Score Key**: use Ambient, or none (the default). It keys off the Composer's **timezone + work hours** (empty by default — set them to use Ambient). Offered via `Change Score Key` or onboarding; **never imposed**.

## The one rule — None is the default (protocol)
**The best time-management for anyone, at any time, is None.** There is no universally-best method, so the orchestra never assumes one. A Composer opts into Ambient deliberately; absent that, time stays silent.

## The methods

**None** *(default)* — no time behaviour beyond honest date-stamps.

**Ambient time** — in-session awareness: greet in the Composer's local time; stamp checkpoints and SESSION_LOG entries in their timezone; if asked, state *factually* whether "now" is inside or outside work hours. Never nudges about rest (honors the no-rest-sign-off rule). Needs: timezone (+ work hours for the in/out check). No infrastructure.

## Switching methods
Exactly **one** permanent method is active; default **None**. Each is its own trigger that switches to it and turns the other off — they persist to the Score Key (read back to confirm the write):

| Trigger | Switches permanent method to |
|---|---|
| `Ambient` | ambient (None off) |
| `None` (musical alias: `Tacet`) | off — silence |

`Change Score Key` sets the same value inside the full preferences flow. (Trigger names are renamable — the Composer's call.)

## Metronome — a one-off Focused box
`Metronome` starts a **transient Focused box** on a single subject, layered *on top of* the permanent method — **including None**. It does not change the permanent setting: when the box is done (or the Composer stops it), the standing state resumes untouched. Set a duration or a target, then work that subject against it (segment, track time/progress, use the Program to fit what remains). *Fast path:* `Metronome 25m` / `Metronome for [subject]`.

- **Ends:** when the subject/box completes, or on `Dismiss` / `Metronome off`.
- **Overlay rule:** Metronome is *not* a permanent method and never overlaps or replaces one — it sits above whatever is picked (even None). One Metronome at a time.
- **Needs:** a box (a duration or target). With Ambient active, boundaries stamp in the Composer's local time.

*Musical:* a metronome keeps time for a single piece; it doesn't change the orchestra's standing tempo.

## Guardrails
- **None is the default.** Never impose or silently assume a method; the Composer opts in.
- **No method becomes a rest nudge.** Time awareness is factual and structural, not "you should rest."
