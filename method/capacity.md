---
type: Method
title: "Capacity — reading a session against its budget"
description: "How a session reports its own usage against a budget, why the reading is always fresh rather than recalled, and what a live-state snapshot carries into the next session"
status: draft
generated: { by: human:jkornobis, at: 2026-08-28T16:46:45+02:00 }
---

# Capacity — reading a session against its budget

The Composer runs work across a rolling usage window (Claude's own 5h meter) they can see but the Agile Facilitator cannot. Left unmanaged, this produces the exact failure the trigger exists to prevent: an expensive task started with too little budget left, cut off half-finished, or a whole account's budget drained by work that could have been scoped or timed differently. This is Agile capacity planning applied to a session — don't pull in more work than the remaining budget can actually finish.

## What counts as a Capacity Report

**No special phrase required.** Per invariant 1 (interpret intention, not keywords), any Composer message stating a usage percentage — with or without a token count for the last task — is a Capacity Report: `"75%"`, `"12.4K and 75%"`, `"Fresh percentage: 72%"` all qualify. "Capacity check" as a phrase names the *mechanism* for reference; it is not required to invoke it.

## On receiving one

1. **Compute the delta** since the last report this session (percentage-point delta; token delta if given).
2. **Update the running rate** — tokens per percentage point — as a rolling average across every measured delta this session, not just the latest one. A single delta is noisy (percentages are Composer-read off a rounded UI meter); the average stabilizes fast.
3. **Estimate the full window** (rate × 100) and **remaining budget** (rate × points left).
4. **Give a compact readout** — Show, don't tell: the rate, remaining tokens, and a sized recommendation (how many more cheap / moderate / expensive-tier tasks likely fit), not a re-derivation essay every time.
5. **If a reset time was given** (e.g. "resets in 3h17"), carry it forward as context for planning the next window, but do not assume a fixed reset cadence — the Composer states it each time it's known.

## Cost tiers (calibrated empirically, 2026-07-18 — recalibrate as more data lands)

| Tier | Shape of the work | Observed cost |
|---|---|---|
| **Cheap** | A script, a doc edit, a single ADR, a git-flow round-trip | ~7.5–10K tokens (largely fixed PR-cycle overhead, not proportional to content) |
| **Moderate** | 2 bundled small items, or one real feature with a build/verify cycle | ~12–15K tokens |
| **Expensive** | Real subagent spawns (each reported 38–63K tokens in this session's harness runs) | Potentially 500K+ for a dozen-subagent batch — can exceed an entire window on its own |

**Bundling is real savings, not just plausible**: two items in one PR cycle measured ~17% cheaper than the same two items as separate PRs, because the git-flow overhead is paid once instead of twice. Prefer bundling small items when budget is a live concern.

## Ceiling behavior — auto-triggered at ≥90%

A report at or above ~90% switches the Agile Facilitator to **wrap-up posture** without being asked:
- No new expensive-tier (subagent-heavy) work is proposed or started.
- Offer to `Checkpoint the session`.
- Explicitly name what's deferred to the next window, distinguishing "reserved because it's expensive" from "just didn't get to it."
- Moderate/cheap work can still be offered, but sized conservatively, with the remaining margin stated up front.

## Persistence across sessions

At a Capacity Report or a Checkpoint, the current rate estimate and window-size estimate are worth carrying into the next session rather than re-derived from zero. This lives in the Composer's private auto-memory (a `feedback`-type memory, not this repo), so a fresh session starts pre-calibrated instead of guessing. The memory holds the *mechanism and the rate* — never dollar amounts, specific account tiers, or other financial specifics; those are the Composer's own business, not durable technical calibration data.

## Cross-session state — closing the fresh-session gap (added 2026-07-18)

**A rate alone isn't enough.** The rolling window resets on a timer, independent of anything a session does — so a number like "100%" reported near the end of one session means nothing to a fresh session unless it also knows *when* that was reported and *that a reset has likely happened since*. Without that, a new session either ignores the old number (loses real signal) or wrongly treats it as still current (assumes zero budget when the window may have fully reset).

**Fix: persist a live-state snapshot, not just the rate.** Every Capacity Report updates, alongside the rate: the last reported percentage, and roughly when it was reported (date is enough — exact clock time usually isn't known). If a reset ETA was given ("resets in 2h51"), note that too, but don't treat it as a promise that holds beyond the session that reported it.

**On session start**, if a live-state snapshot exists in memory, the Agile Facilitator surfaces it plainly as part of orientation — folded into the same re-orientation anchor `session_journal.md` already uses for session state, not a separate ritual: *"Last known capacity: [X]% as of [date]. That window has likely reset since — happy to take a fresh reading whenever you have one."* This makes historical numbers legible instead of confusing, and never assumes continuity a new session can't verify.

## Why this isn't a SKILL.md invariant

SKILL.md's always-on budget is itself razor-thin (verified: 22 tokens of headroom at the time this was written — see `token_budget.mjs`). This mechanism is genuinely useful but not universal-orchestra-critical the way the nine numbered invariants are, and it's substantially about *this Composer's* specific account-management reality (splitting work across a professional and a personal account) rather than a rule every future Composer needs baked into the shared, portable skill. It lives here — an on-demand reference — plus a short pointer in the Composer's own Global Key, not inside the hard-gated always-on block.
