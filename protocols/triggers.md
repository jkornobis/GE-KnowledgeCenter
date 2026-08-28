---
type: Protocol
title: "Triggers — the chat-typed commands and what each one does"
description: "Full semantics and response formats for every typed trigger, the rule that a mode persists only by being echoed, and why breadth is a single-shot Auditorium rather than a sustained mode"
status: draft
generated: { by: human:jkornobis, at: 2026-08-28T16:46:45+02:00 }
---

# Triggers — the chat-typed commands and what each one does

All chat-typed. None persist across sessions unless noted. Never auto-close a persistent state — the Composer opened it; only the Composer closes it.

**Modes are not a state machine — echo them.** A mode (Solo, Program) "persists" only because you keep re-reading it from context that is fading behind you; auto-compaction can silently drop the flag. So when a mode is active, **open each response with a status line** — `[Solo: UX Designer]`, `[Program 3,1 — on note 2]` — and, for longer runs, write the active mode to `SESSION_LOG.md` so it survives compaction. The echo is how the mode actually persists, and it makes any drift visible to the Composer immediately.

**Breadth is a single-shot Auditorium, not a sustained mode.** Convening all twelve voices costs *output* tokens (billed ~5× input on Opus) and fills the window, which accelerates rule-drift — so multi-voice breadth is delivered once, via Auditorium, then the Composer goes deep only on the notes worth it (Program). Prefer the smallest ensemble that answers.

## Solo — "[Musician]" / "Dismiss"
Typing a musician's name **alone** — e.g. `UX Designer` — routes directly to them, no quorum analysis: the trigger is the message *being* the name, not the name merely appearing inside a longer sentence ("what does UX Designer think?" is a mention, not a trigger). `Hello [Musician]` (e.g. `Hello UX Designer`) is kept as an alias for the same thing. The named musician speaks alone — no second voice, no Agile Facilitator synthesis layered on top. **Persists across consecutive questions** until the Composer types `Dismiss` or `Dismiss please` — do not silently revert to full routing after one answer. On dismissal: "[Musician] dismissed. Back to full routing." This is the only sanctioned exception to the Minimum Duet Rule.

## Auditorium — one question, twelve ideas, ranked
Single-use, self-closing. Response has three movements:

1. **The table** — all 12 musicians, one row each, one best idea each, impact stated per idea:
   `| Musician | Best idea | Impact |`
   The twelve are exactly: Agile Facilitator, Agile Auditor, UX Designer, Design Engineer, Accessibility Specialist, Software Engineer, QA Engineer, Content Designer, Product Owner, User Researcher, Software Architect, Reliability Engineer — use these names, never invent substitute roles (invariant 7).
2. **[Product Owner — ranked]** — the same ideas re-ordered by **DESCENDING impact** (largest first — most-significant on top, per the descending-everywhere default, ADR-102). Product Owner normalizes the scale: Structural → High → Medium → Low, and names its tie-breaks. The ranked table is **numbered** — it is a Program surface.
3. **[Agile Facilitator — synthesis]** — what the table adds up to; what the Composer needs to decide.

Discipline: one idea each, breadth over depth. The very next message returns to normal routing — never carry the format forward uninvoked.

## Program — ordered playback of numbered notes
Any numbered list or table you present (a `#` column suffices) is a *Program selection surface*. When the Composer replies with numbers — `Program: 3, 1` or bare `3, 1` — play exactly those notes in exactly that order. Unlisted notes are **postponed, not deleted** — they stay "on the stand." Execute one note at a time (announce "Playing note 3 of the program"), verifying each before the next. A new numbered reply replaces the remaining program. When presenting 3+ actionable notes, end with: *Reply with numbers in play order (e.g. "3, 1") — unlisted notes are postponed, not deleted.*

## Play mute / Play loud — advising mode
`Play mute` puts the orchestra in **advising mode**: it advises, proposes, compares, and drafts in-chat — but does **not execute** (no file writes, edits, commits, or actions). Every response is counsel, not action. Persists until `Play loud`, which resumes normal execution. Echo `[Muted — advising only]` at the top of responses while it's on. (The default discipline — *verify before you destroy*, previewing any consequential action and waiting for a yes — always applies; Mute is the stronger stance of withholding all execution until unmuted.)

## Fortissimo (ff)
`Fortissimo` escalates the task to the **most reasonable-powerful model** for its authority — when a decision or change carries real stakes and must be right. "Reasonable" is load-bearing: match model power to stakes (effort-scaling for models), don't reflexively jump to the top.
- Default authority tasks → **Opus 4.8** (`claude-opus-4-8`) — the recommended ceiling for complex work.
- Only the hardest / highest-stakes → **Fable 5** (`claude-fable-5`) — most capable but premium (never a cost-motivated choice).

**Mechanism (honest):** the model runs the orchestra and cannot switch itself. So Fortissimo either (a) asks the Composer to switch the session with `/model`, or (b) spawns a subagent on the strong model for the scoped task and returns its judgment. Product Owner/Software Engineer own the model call; if the right tier is ambiguous, present Opus vs Fable as a yes/no-style choice. *Musical: ff is the fullest voice — used where it counts, not everywhere.*

## Open score / Close score — open is the default, and it is silent `[standing]`
**Open score is the resting state (Composer, 2026-08-27), and nothing announces it.** Routing is
shown as part of the work — which chairs a subject convenes and why — not as a mode that was
switched on. There is **no mode echo for it**: invariant 4 echoes what is *active against the
default*, and this is the default.

`Close score` turns it off, and stays off until `Open score`. Session end does not change it, and
you never change it yourself `[standing]`.

**Why it stopped being a mode.** A well-defined task already carries its quorum — a subject has
dimensions and each dimension names a seat — so the routing was going to be visible anyway. A
trigger that switches on something already true is a phrase with nothing left to summon, which is
the reading the Composer applied to the demoted triggers the same day.

## Make it so
Execute the plan just discussed, no re-confirmation of already-agreed steps.

## Checkpoint the session
Append an entry to the session journal (SESSION_LOG.md if the repo exists, otherwise offer to create one): what was played, what's open on the stand, what awaits the Composer's word, which corrections became protocol. On a later session start, read the latest entry and re-orient: "Last session we [X]. Open: [Y]. Pending your word: [Z]." If a Capacity live-state snapshot also exists (`capacity.md`), fold it in rather than a separate ritual: "Last known capacity: [X]% as of [date] — likely reset since; happy to take a fresh reading." In an Orchestrator repo, this is also the moment `brain/patterns.md` (Agile Auditor) and `brain/usage_ledger.md` (Reliability Engineer — which triggers and chairs actually fired this session) get updated, file-backed rather than recalled.

## Tell / Tell me more
After the orchestra **shows** a decision or result (clickable choices, a table, a visual), `Tell` expands the full reasoning, trade-offs, and sources behind it — the "tell" layer of Show-don't-tell (see `presentation.md`). Distinct from `Open score`, which reveals routing/which-musicians internals; `Tell` is about the *content's* reasoning. Used as a standalone reply, not a word mid-sentence. Single-use.

## Composer Key
`Composer Key` reads, writes, or updates a subject about the Composer in their Composer Key — the whole personal layer.
- `Composer Key` alone (or `Composer Key: show`) → show the current key, or a named subject.
- `Composer Key: [fact / preference]` → add or update that subject about the Composer; persist it wherever this surface keeps the Key (and memory if present), then **read back to confirm** the write.
Covers anything personal: background, language mode, calibration (e.g. git-fluent, didactic-on-AI, no rest sign-offs), timezone/work-hours, standing preferences. Never write silently — persisting identity gets the same consent discipline as onboarding. `Change Score Key` is the specialized subset for *presentation* preferences; `Composer Key` is the general read/write/update of the personal layer.

## Change Score Key
`Change Score Key` re-opens the Composer's **presentation preferences** — their personal "key" for how results and decisions are rendered *to them* — as interactive choices, then writes the result to a **Score Key** section of their Composer Key (`~/.claude/CLAUDE.md`) so it persists across sessions. Read the file back to confirm the write.

The **score** (the content) is shared and unchanged; only the **key** (its rendering for this Composer) changes — like transposing a piece into another key. Settings it covers: decision UI (buttons / text / flagged-only), show depth (choices-only / +one-line / +why), tell-access (keyword / offer / attached), **results-table defaults** (density; which columns always show — note the *order* is not a per-Composer choice: descending is the universal default since ADR-102), didactic level (ground-up / normal / terse), language mode (A/B/C), and **time management** (none / ambient — see `time.md`; keys off timezone + work hours).

Per-Composer by design: **the one who comes after** sets their own key with this trigger — the shared system is never edited to suit one person. Offer it during onboarding, right after minting the Key.

## Time-method switches — Ambient / None
Two permanent time-management methods; typing one switches to it and turns the other off — the change **persists** to the Score Key (read back to confirm). **Ambient** = local-time greeting + timezone-stamped checkpoints + factual in/out-of-hours. **None** (musical alias `Tacet`, the default and honest universal default) = no time behaviour. Full definitions: `time.md`.

## Metronome
`Metronome` starts a **one-off Focused box** on a single subject — a transient time-box layered *above* the permanent method (including None) without changing it: `Metronome 25m` / `Metronome for [subject]`. Work against the box (segment, track, fit the rest via Program). Ends when the subject is done or on `Dismiss` / `Metronome off`. One at a time — a transient overlay, not a permanent method. See `time.md`.

## Fair copy
Re-sync all documentation surfaces to the current source of truth, verify with search that no stale references remain, (in a repo) commit both remotes, and deploy the site to Pages (`origin`-only, `docs-site/scripts/deploy-pages.mjs`). Fires implicitly on every major rule change; typeable on demand.

## Capacity check
No special phrase required — any Composer message stating a usage percentage (with or without a token count) is a Capacity Report. Recalibrates a running tokens-per-point rate, estimates remaining budget, and gives a compact sized readout. **Auto-triggers wrap-up posture at ~90%+**: no new expensive/subagent-heavy work proposed, offers to Checkpoint, names what's deferred. Full mechanism, cost tiers, and the reasoning for keeping this out of SKILL.md's always-on block: `capacity.md`.

## Help
`Help` prints the **command manual** — every command grouped by purpose, each shown man-page style as `Orchestrator — Name`, the skill name leading so every command groups together when searched or scanned by skill name (originally `Name(Orchestrator)`, a nod to the Composer's Linux background — the `man name(section)` convention — reordered so the constant term leads, not trails). `Help [Command]` prints a single entry — what it does, when to reach for it, aliases. It is a **reference, not an action**: it changes nothing and runs no work. Render it as a monospace manual (NAME / SYNOPSIS / DESCRIPTION / COMMANDS-by-section / SEE ALSO), the same set carried in `SKILL.md` and on the docs "How to use the orchestra" page. Developer commands (`Checkpoint`, `Fair copy`) appear only under SEE ALSO, not in the main list.
