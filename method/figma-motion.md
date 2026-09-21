---
type: Method
title: "Figma Motion — timeline animation fundamentals, recorded not verified"
description: "The perception-first rule for motion design (the eye sees pixels, never layers or z-order), keyframe/interpolation/timing basics, the twelve animation principles trimmed to what a UI needs, and what is specific to Figma Motion's own timeline and component/instance animation scope"
status: draft
serves: [UX Designer, Design Engineer]
generated: { by: agent:ge-knowledgecenter, at: 2026-09-21T00:00:00+02:00 }
sources:
  - resource: https://help.figma.com/hc/en-us/articles/41236826432791-Motion-design-fundamentals-Overview
    title: "Motion design fundamentals (Figma Learn)"
  - resource: https://developer.mozilla.org/en-US/docs/Web/CSS/animation
    title: "CSS animation (MDN) — transferable principles"
  - resource: https://atomicdesign.bradfrost.com/table-of-contents/
    title: "Atomic Design — cited for the same reason tools/figma-method.md cites it"
---

# Figma Motion — timeline animation fundamentals, recorded not verified

Recorded from a reference sheet supplied by the Composer for his own working use, screened against
`index.md`'s rule and found clean — **it names no employer, project, client or screen**, unlike the
adjacent design-review document this same session also processed (`method/design-review.md`). **Not
verified against the live Plugin API by this estate** — `tools/figma-method.md` marks each of its
claims with how it was checked; this page does not carry that yet, because none of it has been run.
Read it as a reference sheet, not as an audited capability.

## 1 — The rule everything else follows: trick the eye, not the DOM

**A monitor is a flat plane of light. There is no Z on screen.** "Above" and "below" in a layer panel
are implementation details a developer thinks in; a viewer perceives only position, size, colour,
opacity and timing — never layer order. Two different node structures that produce the same pixels
are indistinguishable to whoever is watching.

- **If the eye sees one thing, build one thing.** A counter incrementing, a label swapping, a colour
  shifting — the perception is a single element changing state, so the ideal build uses the fewest
  nodes that produce it. A stack of crossfading layers is a workaround for a tool limitation, not a
  design choice, unless the perception genuinely requires the stack.
- **Every frame is a fresh canvas to the eye.** The viewer carries no memory of a layer tree between
  keyframes — a hard cut (HOLD) and a full node swap read identically: "something changed."
- **Motion sells the illusion, not node count.** Timing, easing and choreography make a change feel
  alive; a single well-timed property change reads as more alive than a busy multi-layer crossfade
  timed flatly.

Design the perception first. Build the node structure second — the same ordering this estate's own
Figma method already states for spatial work (`tools/figma-method.md`, rule 4: judge space on the
image, never on coordinates).

## 2 — Keyframes, hold, and interpolation

A keyframe marks a specific value at a specific time. Every animated property needs a clear **entry**
(start state) and **exit** (end state); between them the timeline **interpolates**, or **holds** for
an instant change. Two states outlive the timeline and both must look correct on their own: the
**resting state** (what shows when nothing is playing) and the **last keyframe's value** (what
persists once the timeline ends).

| Curve | Feel | Use for |
|---|---|---|
| **Hold** (step/constant) | frozen, then an instant snap | visibility toggles, typewriter effects, any instant state change |
| **Linear** | constant speed | rarely — reads as mechanical |
| **Ease in/out** | accelerate or decelerate | one direction of a natural move |
| **Ease in and out** | both | the default for ordinary UI motion |

## 3 — Timing, spacing, and choreography

**Timing** is how long a movement takes; **spacing** is how that duration is distributed across the
timeline — closer keyframes read as faster motion, farther apart as slower, independent of the total
duration. UI transitions sit in **200–500 ms**: fast enough to feel responsive, slow enough to be
seen. A stagger delay between elements is what creates hierarchy rather than a single flat pulse.

**Plan the whole timeline before touching a single keyframe.** Each element has a lifecycle — hidden
→ enter → hold → exit, or stay — and the sequence matters: hero element first, supporting elements
next, details last. Overlap transitions slightly rather than waiting for one to finish before the
next starts; group elements that should read as moving together.

## 4 — The twelve animation principles, trimmed to what a UI needs

Six of the traditional twelve carry directly into interface motion:

- **Anticipation** — a small preparatory move before the main action, signalling what is about to
  happen.
- **Follow-through** — parts keep moving briefly after the main body stops; its absence is what reads
  as robotic.
- **Squash & stretch** — gives an object weight and flexibility; volume stays constant.
- **Slow in / slow out** — objects accelerate from rest and decelerate to rest; this is easing, named
  from the animator's side rather than the curve's.
- **Staging** — motion directs the viewer's attention to what matters most, not everything at once.
- **Secondary action** — a supporting animation that reinforces, never competes with, the main one.

## 5 — Practical rules

- **Purpose.** Every animation should do a job. If you cannot name the job, do not animate it.
- **Restraint.** Motion everywhere exhausts the viewer — reserve it for moments that actually benefit.
- **Subtlety over flash.** A gentle animation enhances; a flashy one distracts from the content it was
  meant to support.
- **Consistency.** The same class of element gets the same class of animation throughout a design —
  an inconsistent motion vocabulary reads as an inconsistent interface.
- **Rest state is not optional.** The design must look complete and correct when nothing is playing —
  this is the animation-side twin of `tools/figma-method.md`'s post-mutation screenshot: the *static*
  state needs the same verification as the *moving* one.

## 6 — Typewriter effect, as a worked example of the whole method

- Character-by-character reveal at roughly **60–80 ms per character** — professional typing speed.
- **Uniform delay reads as robotic.** Vary the timing; slow slightly near punctuation, long words, and
  uncommon letter combinations; add small random jitter to the base delay for a human feel.
- **Cursor blink runs on its own cycle** (roughly 530 ms), independent of the typing cadence — the two
  rhythms are not the same clock.
- **In Figma Motion, this is built as separate text nodes**, each held at opacity 0, HOLD-stepped to 1
  in sequence, with the last node's state persisting after the timeline ends — see §7 below on why
  text content itself cannot be animated directly.

## 7 — What is specific to Figma Motion (unverified — recorded from the sheet, not run)

- **Timelines belong to top-level frames**, not to individual nodes inside them.
- **Two states must both be designed intentionally**: the static property (what the canvas shows when
  not playing) and the keyframe track (what overrides it during playback). Neither is a byproduct of
  the other.
- **Text content itself cannot be animated.** A change in wording is built as multiple text nodes with
  opacity HOLD keyframes switching between them — never as one node whose `.characters` changes over
  the timeline.
- **Animation scope depends on component vs. instance, and the rule is asymmetric:**

  | Target | Animatable? |
  |---|---|
  | a component's own children (the master definition) | **yes** — editing the definition directly |
  | an instance's sub-layer overrides | **no** — the API blocks animating an override |
  | the instance node itself (its own opacity, position, scale) | **yes** |
  | a detached instance (now a plain frame) | **yes, fully** — every child is a regular node |

  The practical corollary, if this holds under a live check: to animate an instance's *inner*
  structure, detach it on the specific screen that needs the animation, at the cost of losing the
  link back to the main component on that screen.
- **HOLD easing is an instant snap** — no interpolation is computed between the two keyframes at all.

## Where this sits in the corpus

Sibling to `tools/figma-method.md` (the mutation/token/component method, verified live) and
`method/design-review.md` (the review methodology, recorded from the same session's document and
screened for project content). This page is the third leg — **animation** — and the least verified of
the three: nothing here has been checked against a real `use_figma` timeline call by this estate.
