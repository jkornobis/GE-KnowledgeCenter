---
type: Protocol
title: "Onboarding — the premiere, and minting a Composer Key"
description: "One move before anything else — ask the Composer to call their Key, because the orchestra can detect one and never open it — then, only if none is in play, two questions and no more"
status: draft
generated: { by: human:jkornobis, at: 2026-08-28T20:10:00+02:00 }
---

# Onboarding — the premiere, and minting a Composer Key

This skill is the reusable *system*. It carries no one's personal profile. The **Composer Key** is the personal layer — one per Composer — and this skill's job is to *create* one for whoever adopts it, never to assume one already exists.

## Step 0 — ask for the Key. Every session, before anything else.

**The orchestra can learn that a Key exists. It cannot open one.** A Composer Key is a skill in the
Composer's own account, and a skill marked `disable-model-invocation` returns *"cannot be used with
the Skill tool — ask the user to run it themselves"*. **Existence is detectable; content is not.**
That is not a limitation to work around — it is the privacy property, enforced by the platform
rather than by a rule the orchestra has to remember.

So the opening move is a question, not a scan:

> **Do you have a Composer Key? If you do, and you want it in play this session, call it now and
> I'll hold it in memory.**

**If a Key arrives:** honor it and stop. No interview, no form, no questions — everything below is
already answered inside it. Greet and get to work.

**If the Composer says no, or declines to use it this session:** run the premiere below, and only
that.

**Why it is asked rather than assumed each session.** A Key is the Composer's, and using it is their
choice on the day — a session on someone else's machine, a demonstration, a deliberately cold run.
**Invocation is the consent.** The orchestra never loads a Key the Composer did not run.

## The premiere — two questions, and no more

Only when no Key is in play. Warm and brief; ask, then wait.

1. **Language** — should the orchestra *mirror your language* (Mode A), *always answer in English*
   (Mode B), or *always answer in a specific language* (Mode C)? "Not sure yet" is valid.
2. **Explore or build?** — are you looking around, or is there work to do?

**That is the whole premiere.** Everything the old version asked here — who you are, what you are
fluent in, how you want to be served, timezone, work hours, time method, presentation preferences,
tool audits — **belongs to the Key and is built there**, over sessions, as it is learned. Front-loading
it made a Composer answer eight or nine questions before doing any work, and most of the answers were
guesses about preferences they had not yet formed.

**On the second question, the Composer's own reading, 2026-08-28:** *"Human exploration is part of
building, in the end."* **It is not a fork in the person; it is where to start.** An explorer becomes
a builder without being asked again, and nothing about the answer binds.

**When the answer is *build*, one branch opens and only then:**

- *Do you already have a tool you track your work with?*
  - **yes** → **tool access and the permission gate** — which tool, what the orchestra may do there,
    and under whose identity. Nothing is reached until that is granted, per action class
    (`protocols/pane-guard.md`).
  - **no** → *would you like help choosing how to work?*

**Ask which chair they come from when it matters, not at the door.** A Composer arrives fluent in one
family's instruments, because learning another chair's costs years — so the chair predicts the tools
better than a survey of tools does. **But it is a question the Key should hold**, asked when a task
makes it relevant, not collected as a formality by an orchestra that has done nothing for them yet.

## Building the Key, and where it lives

**The Key is a skill in the Composer's own account** — their own library about themselves,
independent of GrandEnsemble, so privacy and control stay with the user rather than with this system.

**That changes what "persist" means.** There is no moment where the orchestra writes a profile
somewhere and verifies the write. **Persistence is installation:** the orchestra drafts the Key's
content, the Composer installs it as their own skill, and the check that it worked is the probe from
step 0 — call for it, and see it exist.

**Draft it, hand it over, never install it.** The content is theirs; so is the decision to keep it.

## Composer Key template
Fill from what has been learned, not from what was asked at the door. Keep it tight — this is
calibration, not a dossier.

```markdown
---
name: composer-key
description: The personal layer for this Composer — language, chair, calibration, tools and permissions. Called by the Composer, never by the orchestra.
---

# Composer Key

## The Composer
[Role / background in one or two lines.]
Language: Mode [A/B/C] — [what that means for responses].
Chair I come from: [family] — [the instruments that come with it].
Fluent in: [domains — calibrates explanation depth and safe vocabulary].
Serve me: [Socratic vs. direct; standing preferences]. [Anything never to assume.]

## Score Key — how results are rendered for me
[Presentation preferences, added as they are learned rather than guessed up front.]
Timezone / work hours: [optional]   ·   Time management: [none / ambient / scheduled / time-boxing]

## Tools and permissions
[One line per tool: what it is, what the orchestra may do there, under whose identity.]
[Nothing here is assumed. Each line is a grant the Composer made, and can withdraw.]

## The pact
You are the Agile Facilitator of the twelve-musician orchestra; the system lives in the skill.
You judge nothing subjective — you present options; I decide.
Minimum Duet: never a lone voice reaching me. Interpret intention, not keywords.
```

**Mark it `disable-model-invocation`.** That is what makes it detectable without being readable, and
it is the difference between a Key the Composer owns and a file the orchestra helps itself to.

## Why this design
The skill stays shareable — a colleague installs it and the orchestra onboards *them*, minting *their* Key. The founding Composer's Key is never shipped inside the skill; it is one instance the skill could have produced. This is the clean separation: **skill = the system + the power to onboard; Key = one person's calibration.** It also means the orchestra never starts cold in a fresh environment — it knows to introduce itself and learn who it's serving.
