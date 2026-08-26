---
type: Mandala Border
title: "Principle–Chair Map — the second border, first pass"
description: "The second border, grounds: which principle each chair requires to do its job, every edge quoting the chair's own sentence — plus the 2026-08-15 re-measurement to read before quoting anything"
status: draft
serves_all: true
generated: { by: human:jkornobis, at: 2026-08-17T11:59:30+02:00 }
---

# Principle–Chair Map — the second border, first pass

**Status: ANALYSIS ARTIFACT.** Derives which principle grounds each chair. Authors no principle,
renames no chair, edits neither `project/principles_candidate.md` nor
`skill/grand-ensemble/references/musicians.md`. Produced 2026-08-01 at the Composer's instruction
(*"Principle–Chair first, the why before the roads"*).
**Filename is provisional — naming is the Composer's.**

**Why this border, and why now.** The meta-mandala is three continents with three shared borders:
Musicians–Protocols, Protocols–Principles, Principles–Musicians. One of the three already exists
as a bilateral — [`protocol_warrant_map.md`](protocol_warrant_map.md) — and it found more than any
pass over the musicians' ring had. The Composer's reading, 2026-08-01: the composite was being
shaped into concentric rings *before* anyone knew where it leaks. A bilateral has nowhere to hide a
gap; a composite absorbs the same gap into density. So the borders get walked one at a time, and
the composite becomes a result rather than a premise.

---

## The declared circle

| | Declared |
|---|---|
| **Population** | the **12 chairs**, exactly — no invented thirteenth (invariant 7) |
| **Concept** | which of the orchestra's **own** principles a chair requires in order to do its job |
| **Sources** | chair side: `skill/grand-ensemble/references/musicians.md` §Chair definitions + `agents/agent_*.md` · principle side: `project/principles_candidate.md` |
| **Include** | a rule **stated in the chair's own text** that is the principle applied, quotable in one sentence |
| **Exclude** | recall · a principle the chair *could* be argued to need but nowhere states · a word match with no rule behind it |
| **Claim scope** | every assertion below ranges over exactly these 12 chairs, exactly these 31 principles, and exactly the sentences quoted — nothing wider |

A chair with no warrant would be recorded **EMPTY**, not filled. None is; the falsifiable cell went
unused this pass, and that is itself worth stating rather than passing over in silence.

**Counts, verified by command, not carried forward:**

```text
grep -c "^### " project/principles_candidate.md   →  31
```

**31 principles in 6 clusters** (Governance 5 · Safety 6 · Structure 6 · Learning 6 · Epistemics 3 ·
Balance 5). This is the fourth different principle count in the repo — see *Counts that disagree*
at the foot of this file. This pass uses 31 because it derived it, and says so.

---

## Direction, and one thing the direction reveals

Arrows run **chair → principle**: the chair *requires* the principle to exist. Same shape as the
protocol warrant map, same edge type — **D (Dependency)**, directed.

Which surfaces a vocabulary tension worth recording rather than resolving here. Under ADR-199/200 a
chair is **Yin** *within* the musicians layer — musician-agnostic knowledge, against the occupant's
Yang toolset. Against the principles layer the same chair is **Yang**: it is the practice, and the
principle is the why beneath it. A chair is Yin one way and Yang the other, depending on which
border it is standing on. That is not a contradiction; it is what makes the meta-ring transitive at
all. Naming it is the Composer's.

---

## The map

Evidence is quoted from the chair's own text. One sentence per edge — if a chair's rule cannot be
quoted in one sentence, it was not counted.

### 🔀 Agile Facilitator — 3 warrants *(no `agents/agent_agilefacilitator.md`; source is 1,545 chars of definition)*

| Principle | Cluster | Evidence |
|---|---|---|
| **The Composer Principle** | Governance | *"Never votes on taste."* — **the secondary fragment is struck**: "every subjective call → Composer" belongs to the routing sentence |
| **The Agile Facilitator is an agent** | Governance | *"it decides *who plays*, **never *what they decide***"* — clause 2 of the routing sentence |
| **Episteme vs. doxa** | Learning | *"treat as **a** plausible-but-unproven discipline until a real session shows it changing a routing decision"* — **word restored**; the map's version matched nothing in the source |

***Two edges removed for having no evidence at all.*** *Design by absence and A choice offered is a
bug both carried "⇐ principle side" — **a quote from the principle's own entry, not the chair's**.
That is the room describing the chair from outside, which is the exact thing ruling (a) exists to
bar, arriving through a different door. The review re-read all eleven sentences of the Agile Facilitator's
paragraph looking for a rescue: nothing addresses hunting-the-gap, and nothing addresses withholding
a choice — "Never votes on taste" is the opposite posture and is spent on the Composer Principle.
**Both fall.** This is the second time an evidence field has narrated instead of quoting, after the
Content Designer's Sequential handoffs.*

***The Harmony Principle is removed — the second chair to lose it this session.*** *It rested on the
Chamber/Antiphony sentence, which names all three protocol terms verbatim and states their trigger;
the principle's quote was a **strict subset** of the protocol's. No other sentence in the paragraph
is about parallel voices. It fell on the Software Engineer the same way an hour earlier, and the vertex now
has **no declarer at all**.*

***A word had been dropped from a quote.*** *Episteme vs. doxa read "treat as plausible-but-unproven
discipline"; the source says "treat as **a** plausible-but-unproven discipline". A literal grep for
the map's version returns zero. Small, and the same defect class as the Agile Auditor's truncated
placeholder — found only because the reviewer was asked to check character-for-character.*

***Both maps also mis-state this chair's own source length*** — "1,533 chars of definition" in both.
It is **1,545**. A number typed once and copied.

*The ⇐ convention — an edge evidenced from the **principle's** text rather than the chair's — is **withdrawn, 2026-08-02**. Both edges that used it fell: an evidence field must quote the chair, and the room describing a chair from outside is barred whichever document it arrives in.*

### 👂 Agile Auditor — 10 warrants

| Principle | Cluster | Evidence |
|---|---|---|
| **How rules actually hold** | Governance | *"pattern-detection must be **file-backed** … apply "fires at 3" to the file, not to memory"* |
| **Dèmos Kratos** | Governance | fires *"on the 1st occurrence of an authority violation (deciding taste alone, certifying without checking, deleting without consent)"* |
| **The Composer Principle** | Governance | same sentence — *"deciding taste alone"* is the violation it watches for |
| **The Absolute Ear** | Epistemics | *"Fires on the 3rd recurrence … (1st = one-off, 2nd = coincidence, 3rd = pattern)"* — repetition as signal |
| **Episteme vs. doxa** | Learning | *"a model sees only current context + reloaded memory — it cannot truly "watch across sessions,""* |
| **The Declared Circle** | Epistemics | *"this section previously claimed to "watch across sessions" as a native ability — false"* |
| **Overshoot** | Safety | *"Overshoot: executing before parsing the question"* — the chair names the principle by its own term, as a standing detection criterion |
| **Deletion protocol** | Safety | fires on the 1st occurrence of *"deciding taste alone, certifying without checking, **deleting without consent**"* |
| **The professional mantra** | Learning | *"this section previously claimed to "watch across sessions" as a native ability — **false**."* — an error admitted precisely once, in place, then corrected: the mantra performed rather than described |
| **Agile Facilitator is an agent** | Governance | *"Persistent meta-agent at Agile Facilitator level"*; with *"Agile Facilitator overriding a protocol it wrote"* as a zero-tolerance violation — the Agile Facilitator is bound by the rules like any agent, and is watchable |

*Four edges added 2026-08-02, all found by an independent review reading the two sources cold — none
was on the candidate list put to it. It read **8** principle warrants where this map had 6, and 8
protocol warrants where the sibling map had 3. **The professional mantra was inert**, declared by no
chair at all, while this chair performs it in its own file.*

*Four of the nine candidates put to that review came back as **name-adjacency**, not evidence:
Unit loop ("loop" beside a numbered sequence), Ensemble sizes ("ensemble" beside "every ensemble"),
Cobbler's children ("self-observation" beside self-neglect), Fractal Loop (a flat procedure read as
recursion). Recorded because it is the same failure mode this map's own false-positive table already
catalogues — found this time in the proposals, not in the map.*

### 🎨 UX Designer — 5 warrants

| Principle | Cluster | Evidence |
|---|---|---|
| **The Composer Principle** | Governance | *"Composer Principle applies to both."* — named outright in the chair's **own** file; with *"Options on canvas — never decisions."* and, under *What to never do*, *"Decide alone which design direction is "right""* |
| **The Turing Game** | Epistemics | *"if not, the honest deliverable is a code/HTML artifact or an inline SVG, not a Figma file"* |
| **Episteme vs. doxa** | Learning | *""build in Figma" is not a native ability"* — before promising it, confirm |
| **The Declared Circle** | Epistemics | *"UX Designer keeps verification depth: enough to recognize failures — defers to Accessibility Specialist for exact criterion numbers."* — the claim bounded to the check behind it, in design register |
| **Unison** | Balance | *"the canonical list now lives in `agent_accessibilityspecialist.md` only (single source of truth — this file previously duplicated it verbatim)"* — the thing was stored twice, so the **storage** was fixed rather than the copies synchronised |

*Two edges added 2026-08-02, both found by an independent review. **The Composer Principle warrant
was also upgraded**: it rested on `musicians.md`, while the chair's own file names the principle
outright. Where both exist, prefer the chair's file — the review found three of this chair's eight
recorded edges resting on the definition paragraph when a stronger warrant sat unused.*

*Seven of nine candidates put to that review were rejected, the worst ratio of six passes, and this
chair is why the brief now carries a standing name-adjacency warning: **Art as Felt Science** on
"Warm/cool psychology", **Interval Principle** on "whitespace", **Response calibration** on
"Progressive disclosure". Three of those four already sit in this map's own false-positive table for
this chair — proposed again by someone who had read that table.*

### 🔗 Design Engineer — 6 warrants

| Principle | Cluster | Evidence |
|---|---|---|
| **Unison** | Structure | *"Watches for silent drift (a token or variant renamed on one side without the other following)."* — the chair's whole duty is the *Sync is the symptom* corollary written as a job |
| **Episteme vs. doxa** | Learning | *"Treat the sections below as a starting point, not a certified-current reference"* — **retyped** from the Declared Circle: recalled-versus-verified-this-session |
| **The cobbler's children** | Learning | *"the same standard User Researcher holds others to (a claim must be checked live, not recalled) **wasn't applied to this file when it was written**."* — the chair names its own failure to pass a rule it holds others to |
| **The Declared Circle** | Epistemics | *"Unlike the rest of this file (recalled — see the sourcing note above), the operational bridge is verified against the shipped Figma plugin skills"* — a declared subset, fixed before the claim; with *"An empty result does NOT mean "no tokens exist.""* *(Quote updated 2026-08-02: the sentence is **self-referential** — it names the boundary between the recalled part of a file and the verified part. When the verified part moved to the project file, the sentence had to be re-pointed. `check_map_quotes.mjs` caught it in the same minute.)* |
| **How rules actually hold** | Governance | *"these decide *whether* drift detection is even possible, so they live at chair level, not buried in a skill body"* — placement determines adherence |
| **The Composer Principle** | Governance | *"Decide a design direction alone (defers to UX Designer + Composer)."* under *What to never do*; with *"factually, with source, no recommendation"* |

***A quote that borrowed another chair's words.*** *`The Interval Principle` was evidenced as "the
Design Engineer holds the seam between **them**". This chair's text says "the seam between **the
two**". The string "seam between them" occurs exactly once in the whole declared circle — **in the
Software Architect's paragraph**, the chair whose identically-shaped seam edge was removed an hour earlier.
**The recorded quote fused this chair's subject with the Software Architect's wording.** That is the same
fabrication family as the four `###`-welds, one degree subtler, and it is the sixth defect class
found in these maps.*

*The edge falls on its own merits too: after the 2026-07-28 narrowing the principle covers the
intervals inside the Composer's own words and spacing-as-content in the artefact. **A seam between
two chairs' domains is a responsibility boundary, not *Ma*.** It survives on the Content Designer.*

***The one sentence the map spent on the vertex it does not warrant.*** *Line 8 of the agent file is
two sentences, each with its own obligation: the first is **the cobbler's children** almost verbatim,
the second is **Episteme vs. doxa**. The map spent the first on the Declared Circle — which neither
sentence supports — and left both real edges unrecorded. No arbitration was needed; the resolution
was sitting in the punctuation.*

***Two of three recorded edges defective on a 9,850-character file, with five more unrecorded.***
*This chair was **under-mapped**, not over-mapped — the opposite of the UX Designer.*

The Unison edge is the single closest match in this map — the chair's whole watch-duty is that
principle's corollary (*"Sync is the symptom"*) written as a job.

### ♿ Accessibility Specialist — 4 warrants

| Principle | Cluster | Evidence |
|---|---|---|
| **The Declared Circle** | Epistemics | *"state no criterion number or ratio without verifying it this session"*; and *""passes 2.4.11" and "a switch-control user can actually reach it" are different claims"* |
| **Episteme vs. doxa** | Learning | *"Citing a WCAG criterion number verifies conformance on paper; it doesn't confirm the experience is actually usable."* |
| **The cobbler's children** | Learning | *"**Same discipline applied to its own heuristics:** the "≤3 decisions per screen for primary flows" rule of thumb is an **internal calibration, not a cited figure**"* |
| **Art as Felt Science** | Balance | *"A design can pass every WCAG criterion and every screen-reader check and still be exhausting or disorienting for an ADHD, dyslexic, or autistic user — a different failure mode than either of the two checks above."* |

*Three quote repairs and one new edge, 2026-08-02, from an independent review (a spawned
subagent reading the two declared sources cold). The criterion number read **1.4.11**; the source
says **2.4.11** — Focus Not Obscured, which is the criterion a switch-control reach argument turns
on. A wrong criterion number inside the warrant for the principle that forbids unverified criterion
numbers. The cobbler's-children quote had dropped "for primary flows", and the Episteme warrant was
a fragment ending mid-sentence; both now quote the source whole. **Art as Felt Science** was inert —
declared by no chair at all — while the Accessibility Specialist's assistive-technology and COGA sections argue it
at length.*

### 💻 Software Engineer — 4 warrants

| Principle | Cluster | Evidence |
|---|---|---|
| **Dèmos Kratos** | Governance | *"**Sole deploy authority** after QA Engineer passes."* — authority conditioned on another chair's check; **wins this sentence under ruling (c)** |
| **The Delegation Brief** | Safety | *"Vague briefs → duplicated work and gaps."* — the rationale, not the procedure; **re-evidenced**, the old quote belonged to the protocol |
| **Episteme vs. doxa** | Learning | *"Re-fetch before citing a specific claim from this table if it's been a long time since 2026-07-02."* |
| **The Declared Circle** | Epistemics | the *What to read first* list — *"`agent_softwareengineer.md` · `agent_softwareengineer_project.md` · `brain_governance.md` (QA Engineer gate) · `project_team_review.md`"* — a declared, closed source list for the chair. **Marginal**, and marked so. *(Heading unwelded 2026-08-02 by `check_map_quotes.mjs` — I had committed the same defect I was cataloguing.)* |

***The Harmony Principle is removed, and it does not survive anywhere in this chair.*** *It rested on
`PARALLEL-FIT`, the same sentence warranting the protocol Spawn & load-balancing in the sibling map.
Ruling (c) awards it to the protocol — the sentence is literally a parallel-spawn rule. The only
remaining sentence in that cell, "Research parallelizes; most coding doesn't (coupled decisions)",
is about coupling, not harmony. **Unlike the other two collisions on this chair, this loser had no
neighbouring sentence to move to.***

***Three sentences were doing double duty across the two maps on this chair alone.*** *`DELEGATION-BRIEF`,
`PARALLEL-FIT` and "Sole deploy authority after QA Engineer passes". Two rescued by a neighbour, one
dead. That is the same failure found on the Product Owner and the Content Designer: **the two maps were built
as if a sentence could be spent once in each.***

### ☑️ QA Engineer — 8 warrants

| Principle | Cluster | Evidence |
|---|---|---|
| **Episteme vs. doxa** | Learning | *"Never certifies what it hasn't checked — self-certification is a protocol violation, not a shortcut."* |
| **The cobbler's children** | Learning | *"A feature with 100% green scenarios and zero exploratory time has only been checked against its own assumptions."* |
| **The Composer as Neuron** | Learning | *"The Composer-as-Neuron IS this practice."* — named outright |
| **Serendipity** | Balance | *"time-boxed, unscripted sessions that go looking for what no BDD scenario anticipated"* |
| **The Declared Circle** | Epistemics | *"Never certifies what it hasn't checked"* — the claim may not range wider than the check behind it. The *other* half of that sentence carries Episteme vs. doxa; the two halves are distinct edges |
| **Too Big Too Soon** | Safety | *"SMALL-N-EARLY \| Start with ~20 real tasks; effect sizes are huge early. Don't wait for a big benchmark."*; with the pitfall *"BIG-BANG (infra before data)"* |
| **Design by absence** | Structure | *"go looking for what no BDD scenario anticipated"*; with the *What QA Engineer catches* list — *"Missing acceptance criteria"*, *"Test coverage gaps"*, *"Edge cases not tested"* — hunting the gap as an institution, not incidentally. *(Heading unwelded 2026-08-02.)* |
| **The Kintsugi Paradox** | Learning | *"Distinguishes regression checks (must always pass) from capability targets (improvement markers)."* — a class of checks **expected to fail now**, kept on purpose |

*Four edges added 2026-08-02 by independent review. The Kintsugi edge is the review's **Revise**: it
holds on the regression-vs-capability sentence above and **not** on "production failures become new
eval cases", which is learning-from-failure generally rather than expecting the first fall.*

*One thing the review got wrong, recorded because the method should be auditable both ways: it
reported **Composer as Neuron** and **Episteme vs doxa** as "missing from the map, and better
evidenced than several recorded edges". Both were already here — it was never told what this chair
already held, only what was proposed. Its instinct was right and its conclusion was not; a cold
reader cannot see a map it has not been shown.*

### ✏️ Content Designer — 8 warrants

| Principle | Cluster | Evidence |
|---|---|---|
| **Response calibration** | Balance | *"One-step-at-a-time in execution mode: name where, not just what; stop after the instruction."*; corroborated by *"**Cognitive load** (Sweller): minimize extraneous load"* — **re-warranted**, see below |
| **The Composer Principle** | Governance | *"This is a check Content Designer runs and reports, not a veto — a resonance worth keeping is still the Composer's call."* — **re-warranted** to the chair's own file |
| **How rules actually hold** | Governance | *"File-backed reference, not memorized live — consult this table rather than recall it from context"* — **re-warranted**; the old quote was a paraphrase of this one |
| **The Interval Principle** | Balance | *"**Adjacent chairs with divergent terms for the same concept** … Content Designer resolves the mapping when a handoff would otherwise misfire."* — the seam is where meaning is lost; **re-warranted** off the self-trigger clause |
| **The Turing Game** | Epistemics | *"Clear and warm still has to be honest — a well-written dark pattern is a Content Designer failure, not a copy success."* — **re-warranted**; the old evidence spliced two bullet labels into a pseudo-sentence |
| **The professional mantra** | Learning | *"No hedge phrases ("I apologize for any confusion"). No self-flagellation. Honest + fast recovery."* |
| **The cobbler's children** | Learning | *"Flag prohibited vocabulary — **even in the Agile Facilitator's copy**."*; with *"Flag register failures regardless of who produced the copy."* |
| **Unison** | Balance | *"Single canonical list."*; with one naming row per musician held in one file — the one-home-many-references corollary, never a copy per chair. *(The corollary name was in quotation marks and is not a quote from this chair; unquoted 2026-08-02.)* |

***Overshoot removed.*** *It rested on the one-step-at-a-time sentence — which is **Response
calibration's** proper claimant, and Response calibration had been warranted instead on "register
(warm, direct, never clinical)" (register is tone, not depth — a category slip) plus a second
fragment already spent on Multilingual Composer in the sibling map. Correcting Response calibration
is what kills Overshoot: nothing in this chair's text addresses Overshoot's actual subject, parsing
question-from-instruction **before** executing.*

***Four warrants moved off one sentence.*** *`musicians.md`'s fifth Content Designer sentence was carrying
five edges across both maps. Each survivor now stands on its own sentence from the agent files. See
`protocol_chair_map.md` for the full account.*

***The rejection ledger was allowed to close a live vertex.*** *This map's false-positive table
correctly records "Content Designer → The professional mantra — a filename reference
(`feedback_professional_mantra.md`), not a rule". That rejection was right about the candidate and
was then treated as disposing of the vertex. `agent_contentdesigner.md` states the principle near-verbatim
four lines from the top of its own section. **A rejection is evidence about one candidate, not about
a vertex** — worth checking wherever else that table closed something.*

### 🧭 Product Owner — 3 warrants

| Principle | Cluster | Evidence |
|---|---|---|
| **Too Big Too Soon** | Safety | *"SIMPLICITY-FIRST \| Simplest solution first; add agents only when it demonstrably improves outcomes. "Might mean not building agentic systems at all.""*; with *"Complexity added only when evidence supports it."* — **re-evidenced**, see below |
| **Episteme vs. doxa** | Learning | *"No live incident has required this yet — flagged as speculative until real usage data shows a stated intent and actual behavior diverging."* — the chair marks its own holding as believed-not-verified |
| **The Delegation Brief** | Safety | *"**Failure taxonomy (MAST, Berkeley, 1,600+ traces):** ~42% specification/design failures, ~37% inter-agent misalignment, ~21% verification/termination failures."* — under-specification dominates delegation failure, stated as measurement. **Marginal, and the weakest surviving edge on this chair** |

***"Thinnest chair on the floor" is withdrawn — it was an artefact of the double-spend.*** *Both
recorded warrants rested on sentences that belong to the protocol map, and ruling (c) awards both
there. Too Big Too Soon survives on its own sentence; the Delegation Brief principle keeps only the
MAST statistic, which presupposes the principle rather than stating it. The open question recorded
here — whether this chair gains two principles or genuinely rests on two — resolves as **gains one,
and re-evidences the other**.*

***Both "unresolved" pointers were wrong, and one of them was the exact collision its own principle
warns about.*** *"Success criteria must be measurable" was pointed at **the Declared Circle**, whose
own text says it governs *over what, never how much* — "the shared English word 'scope' is a
collision, not a kinship". And "Does this serve their objective or ours?" was pointed at the
**Composer Principle**, which is about authorship of taste, not user-versus-vendor interest. Neither
is an edge; both pointers are removed rather than left as leads.*

### 🔍 User Researcher — 6 warrants

| Principle | Cluster | Evidence |
|---|---|---|
| **Episteme vs. doxa** | Learning | *"Prefer to fetch, not recall; mark any recalled link UNVERIFIED until fetched."* |
| **The Declared Circle** | Epistemics | *"a tool capability claim must be checked live this session, never recalled"* |
| **The Absolute Ear** | Epistemics | *"**Owns the Tool Audit** — the capability discovery pass run the first time the orchestra deploys onto a new tool/MCP surface"* |
| **Too Big Too Soon** | Safety | *"Primary instrument: the time-boxed spike, one question per spike."* |
| **Composer Principle** | Governance | *"Output: findings + options + sources — never a recommendation."* — hands over options and withholds the choice; the judgement is the Composer's |
| **Design by absence** | Structure | *"If a major decision is about to be made **without** a prior spike"* — the chair's trigger is a missing thing, not a present one |

*Two edges added 2026-08-02, both **found independently** by a spawned subagent before it saw any
candidate list. On the principle layer that review and my own candidate list had **zero overlap** —
the only principle I proposed was Spotlighting, which it rejected outright, and every edge above is
one I had not seen. Recorded because a review that merely confirms is not evidence of much.*

*Two of its finds were left out. **Serendipity** on the "off-topic question" trigger: this map's own
false-positive table already rules that "`spike` belongs to Too Big Too Soon here, not to
exploration", and the review did not have that table. **Art as Felt Science** on the empathy map's
"What do they feel?": the review marked it a weak, name-only reading and said so itself.*

### 📐 Software Architect — 9 warrants

| Principle | Cluster | Evidence |
|---|---|---|
| **Dèmos Kratos** | Governance | ***"Two checks, two different authorities — this is Dèmos Kratos made concrete, not a bureaucratic doubling."*** — named outright; **the whole sentence is bold in the source**, not just the middle clause |
| **NDT** | Safety | *"the same "measure twice, cut once" instinct as NDT (verify current state before operating)"* — named outright |
| **The deletion protocol** | Safety | *"Relying on the system's general deletion-consent discipline implicitly isn't enough for a protocol whose entire premise is "delete and rebuild""* |
| **Extending the Thirteenth Floor** | Learning | *"Every significant decision gets a log entry (what, when, why) so future readers understand intent, not just rules."* |
| **Episteme vs. doxa** | Learning | *"**Greenfield Copy makes that claim checkable instead of assumed**"* — **retyped**: verified-versus-believed, not a declared scope |
| **The Declared Circle** | Epistemics | *"treat this as a forward-looking fix, not a claim that past resets were safe"* — **re-evidenced**; the claim bounded to what was actually checked |
| **The cobbler's children** | Learning | *"self-applying it retroactively to the Chair Review verdict two turns ago is what surfaced this gap"* — **re-evidenced**: the standard turned inward, and the inward turn exposing the defect |
| **How rules actually hold** | Governance | *"The rule existed; nothing forced it to actually be applied at tag time."* |
| **The professional mantra** | Learning | *"**Real gap this closes:** in one session, 14 tags were cut, every single one classified MINOR — including several that were pure corrections"* — the failure named precisely, once, with counts, then fixed |

***"Richest chair on the floor" is withdrawn as a label even though the chair may still deserve it.***
*As recorded, only **4** of the 7 edges stood: one dropped, two needed re-evidencing, and one of those
was typed to the wrong vertex. An independent pass earns **9** — so the superlative is probably still
true, **but on largely different evidence than this table cited.** Keeping the label and the old rows
together was the thing to stop doing.*

***Two edges were mis-evidenced from the same paragraph, in opposite directions.***
*`The cobbler's children` rested on "The orchestra verifying its own work never substitutes for the
Composer's word" — which is **authority separation**, the subject of Dèmos Kratos, already warranted
from that same paragraph's first sentence. The vertex was right and the sentence was another
vertex's. And `The Declared Circle` rested on the Greenfield Copy sentence, which is
**verified-versus-believed** — Episteme vs. doxa. Both now stand on sentences that are actually
about them, and the chair gains a vertex rather than losing one.*

***The retype is the review's own most contestable call***, and it said so: it asserts the Declared
Circle's written boundary ("not to genuinely singular acts") against the map's reading, and one
artefact's backup is a singular act. Recorded as contestable, applied because the alternative — an
edge on evidence about *one* backup — is weaker either way.*

***The Interval Principle is removed, and not on a technicality.*** *It shared its evidence
character-for-character with the protocol map's Knowledge-Pivot — the (c) collision — but it fails
independently: after its 2026-07-28 narrowing the principle covers exactly two things, the intervals
inside the Composer's own words and spacing as content in the artefact. **A domain seam between two
chairs is neither.** The collision was trivially fixable by re-evidencing Knowledge-Pivot from the
twin sentence in the agent file; **the fix would have rescued nothing.** It survives on the Content Designer.*

### 🖥️ Reliability Engineer — 6 warrants *(no `agents/agent_reliability_engineer.md`; source is 998 chars of definition)*

| Principle | Cluster | Evidence |
|---|---|---|
| **How rules actually hold** | Governance | *"file-backed in `brain/usage_ledger.md` at each Checkpoint rather than recalled"* |
| **Extending the Thirteenth Floor** | Learning | *"preserves the performance for the future audience"*; *"its durable record"* |
| **The Kintsugi Paradox** | Learning | *"incident response with blameless postmortems"* |
| **The Declared Circle** | Epistemics | *"**Narrow scope:** the Software Architect owns delivery *process* … the Reliability Engineer owns the *running* system"* |
| **Episteme vs. doxa** | Learning | *"Holds sourced field references (see `reliability_engineer_references.md`)"* — the chair binds itself to sourced knowledge, the same warrant class already granted to User Researcher and Accessibility Specialist |
| **The cobbler's children** | Learning | *"**Owns the orchestra's own usage observability** (roadmap note 15, ADR-139): which triggers and chairs actually fire"* — the observability chair turning observability inward on its own orchestra |

*Two edges added 2026-08-02. Both were **found independently** by a spawned subagent that extracted
its own list before seeing any candidate list — neither was proposed to it. Same pass rejected five
of six protocol candidates for this chair; see `protocol_chair_map.md` for the convention ruling
that did the rejecting.*

Four warrants out of 998 characters. Density, not volume — but see finding 1.

---

## Re-measured 2026-08-15 — read this before quoting anything below

**Every finding in this section is a dated measurement.** They were taken when the border held 52
edges over 31 principles; it now holds **72 over 33**. Re-run against the current graph, and the
numbers moved in three different directions — one finding got worse, one dissolved, one held:

| finding, as written | re-measured 2026-08-15 |
|---|---|
| *"52 edges. 24 of 31 principles ground at least one chair; 7 ground none"* | **72 edges. 24 of 33 · 9 ground none.** The count of grounding principles did not move while the layer grew by two — every principle added since grounds nothing |
| **2.** *"Four of the six Structure principles ground no chair at all"* | **five of six.** The finding **understated it**, and Structure now carries 4.2% of the edges from 18.2% of the layer — the Fractal Loop, the Opera House, Non-Euclidean, Nested Opera Houses and Harmony all ground nobody |
| **3.** *"Epistemics is 3 of 31 — 9.7% — carrying 10 of 52 edges (19%). Twice its share"* | **held.** 4 of 33 (12.1%) carrying 13 of 72 (18.1%) — still about 1.5× its share, and still the inversion against the protocol map |
| **4.** *"The Product Owner is the thinnest chair, at 2"* | **dissolved.** Product Owner is at 3 and **tied with the Agile Facilitator**, who was not thin when this was written. The Agile Auditor leads at 10, the Software Architect 9 |

**Why this block exists at all.** On 2026-08-15 this Agile Facilitator quoted a 2026-07-27 finding from
`protocol_warrant_map.md` as though it were current, and two thirds of it had been false for weeks.
The defect is not that a finding went stale — findings are supposed to — it is that **nothing said
so at the point of reading**. `scripts/check_ensemble.mjs` now holds the border's shape as a
baseline, so the next drift speaks instead of waiting to be noticed.

**What did not change:** 12 chairs, 0 empty. Every chair still grounds at least one principle.

### Ruled 2026-08-15 — scale belongs to the Composer, and it is a boundary

**The Composer's words: *"scale belongs to the Composer, it's a boundary."*** Finding 2 is therefore
closed, and it closes as a **boundary and not a gap** — the distinction the model already carries:

> `gap` — an instrument is owed; the next leap may close it.
> `boundary` — none should ever exist.

**These five are not waiting for a chair. No chair should ever hold them.** A chair that owned the
scale would be deciding at which level the work happens, and that is the Composer's judgement in the
same way taste is — the UX Designer's boundary said so first, and this is the same line drawn one axis
over.

| Principle | Cluster | Why no chair holds it |
|---|---|---|
| The Fractal Loop | Structure | the same shape at every zoom level — *which* level to test at is the Composer's call |
| The Opera House Principle | Structure | the venue and the score are the frame the work sits in, and the frame is chosen, not inhabited |
| The Non-Euclidean Corollary | Structure | the first measurement collapses the superposition, and choosing when to measure is choosing the scale |
| The Nested Opera Houses Corollary | Structure | nesting is where one level ends and another begins, which is a boundary decision by definition |
| The Harmony Principle | Structure | independent lines resolving into one chord — the resolution is heard from outside the lines |

**The boundary has an operational form, and the Composer gave it the same day:** *"Composer must
guide Agile Facilitator and Agile Auditor on scale, because he determine the limit of AI generation and
interaction on subject."* Four rungs, named:

| rung | what the orchestra is being asked for |
|---|---|
| **small bugfix** | one change, known shape, no plan needed |
| **impactful refactoring** | the shape is known and the blast radius is not — the reason `NDT` and the deletion protocol exist |
| **new feature to implement** | the shape has to be decided before anything is built |
| **whole methodology** | choosing *how* to produce a complex task at all — plan, then execute |

**This is the half the boundary was missing.** *No chair owns scale* says where the reach stops; this
says **how the missing coordinate arrives** — the Composer names the rung, and the two chairs that
already cross the ring route inside it. **They cross horizontally; he supplies the vertical.** Every
protocol that scales effort — `Effort-scaling rubric`, `Lots`, `Too Big Too Soon`, `Fortissimo`,
`Auditorium` — is calibrated against a rung it cannot choose for itself.

It is also why the boundary lands on **these two chairs specifically** and not on the ten
specialists: a specialist works at whatever scale it is handed, and only the Agile Facilitator and the
Agile Auditor would otherwise have to infer one. Their §5 boundaries in `project/tools_lineage_full.md`
now name it.

**And the two do different things with the rung** — the Composer, same day: *"Agile Facilitator for
conducting, Agile Auditor to track overshoot."*

| chair | what it does with the rung it is given |
|---|---|
| **Agile Facilitator** | **conducts inside it.** The rung sizes the ensemble, the planning depth and the effort — it is the input every scaling protocol reads, and the Agile Facilitator may spend it, never set it |
| **Agile Auditor** | **tracks the miss against it, in both directions.** The Composer, same day: *"or too small shoot also."* The rung is the reference delivered work is measured back against, and a miss is a miss whichever way it falls — a small bugfix answered with a whole methodology, or a methodology question answered with a one-line patch |

**That second half is already grounded.** The Agile Auditor grounds `Overshoot` today — one of its ten
— so this is not a new duty but the naming of what that grounding was for. Without a rung there is
nothing to overshoot *from*: **the principle was warranted while its reference point was
unspecified**, which is why the boundary and the ledger of effort have both felt approximate.

**`Unison` is deliberately not in this table.** It is the sixth Structure principle and the only one
grounded — by the UX Designer, the Design Engineer and the Content Designer — because it is about **a thing**
rather than **a scale**: one home, many references. Its being grounded while the other five are not
is the evidence that the split is real and not a labelling accident.

**And the other four ungrounded principles are NOT covered by this ruling.** `A choice offered is a
bug`, `Spotlighting`, `The reader sets the distance` and `The Empty Hands` ground no chair either,
and they are ordinary gaps until someone says otherwise. **The ruling was about scale, and it is
applied to scale.**

### And finding 2 is not a mapping oversight — tested 2026-08-15

The obvious explanation for five ungrounded Structure principles is that this map was made on
2026-08-01 and the layer grew afterwards. **Tested, and it is false: the five are among the oldest
principles in the corpus** — the Fractal Loop (2026-07-16), the Opera House (07-27), Non-Euclidean,
Nested Opera Houses and Harmony (all 07-24). Every one was present when this map was written.

**Then the decisive test.** This map's rule is that a warrant must be *quotable from the chair's own
text*. So: does any chair's file mention them at all? Scanned all 74 files under `brain/`, `agents/`
and `skill/grand-ensemble/references/`:

| principle | appearances in the corpus | in a chair's own file |
|---|---|---|
| The Fractal Loop | 5 | **none** |
| The Opera House Principle | 3 | **none** |
| Non-Euclidean Corollary | 1 | **none** |
| Nested Opera Houses | 2 | **none** |
| The Harmony Principle | 1 | **none** |

**There is nothing to quote.** The absence is real, and the map recorded it correctly the first time.

**The sixth Structure principle is the tell.** `Unison` *is* grounded — by the UX Designer, the Design
Software Engineer and the Content Designer — and it is the one Structure principle that is **about a thing rather than
about a scale**: one home, many references. The other five describe how the system *nests, repeats
and rhymes across levels*, and **every chair is defined by a domain at one level.**

**Even the two chairs that cross the ring do not hold them.** The Agile Facilitator and the Agile Auditor are
the only chairs reaching all eleven others, and their grounding is Governance, Learning, Epistemics
and Safety — **not one Structure principle between them.** They cross the ring horizontally; nothing
in the roster crosses it vertically.

**This is the same hole as the jurisdiction finding recorded in `protocol_warrant_map.md` the same
day.** Yin cannot say whose question it is, and Yin has no chair for the principles about moving
between levels. Both are the corpus having no **principle of scale-ownership** — and both are the
Composer's to rule, because the answer is either a thirteenth chair, a chair that gains a level, or
the deliberate statement that scale belongs to the Composer and to no chair at all.

## Findings

**52 edges. 12 chairs, 0 empty. 24 of 31 principles ground at least one chair; 7 ground none.**

### 1. Two of the twelve chairs have no chair file

`agents/` holds **16** files for 10 chairs (16 as of 2026-08-02 — `agent_productowner_project.md` and `agent_design_softwareengineer_project.md` split out that day; chair count unchanged). **`agent_agilefacilitator.md` and `agent_reliability_engineer.md` do not
exist.** Their entire Yin is one paragraph in `musicians.md` — 1,545 and 998 characters against a
9,850-character Design Engineer. Both still earned warrants, so this is not an empty chair. It is an
asymmetry in how the floor is documented, and it means those two chairs' edges rest on a thinner
base of evidence than the other ten. Not a defect to fix in this pass; a finding to price.

### 2. Four of the six Structure principles ground no chair at all

| Cluster | Principles | Grounding ≥1 chair | Edges |
|---|---|---|---|
| Epistemics | 3 | **3 / 3** | 10 |
| Governance | 5 | 5 / 5 | 12 |
| Learning | 6 | 5 / 6 | 14 |
| Safety | 6 | 5 / 6 | 7 |
| Balance | 5 | 4 / 5 | 6 |
| **Structure** | 6 | **2 / 6** | **3** |

Inert at this border: **The Fractal Loop · The Opera House Principle · The Non-Euclidean Corollary ·
The Nested Opera Houses Corollary** — plus **Spotlighting**, **The professional mantra**, and **Art
as Felt Science** from other clusters. Seven in total.

The Structure four are not weak principles. They describe the shape of the *system* — how it nests,
how it recurses, how it is entered. No individual chair's practice depends on them, because they are
not about practice. That is a candidate reading, not a verdict: the alternative reading is that the
chair files simply never wrote down how these shape a chair's work, in which case it is a capture
gap and not a structural truth. **The bilateral cannot tell those two apart** — which is exactly the
kind of question the Musicians–Protocols border, walked next, would settle.

Related but **not** the same as the roadmap's long-standing "ten inert principles" thread: that one
counts principles with no *protocol*. This counts principles with no *chair*. Two different
emptinesses; whether they overlap is unchecked here.

### 3. Epistemics is inverted between the two borders

Epistemics is **3 principles of 31 — 9.7% of the layer — carrying 10 of 52 edges (19%)**. Twice its
share, out of the smallest cluster in Yin.

The protocol warrant map recorded the opposite, verbatim: *"**Epistemics never anchors a protocol
alone**, only inside cross-cluster combinations."*

The same cluster is the weakest at the protocol border and over-represented at the chair border. A
protocol is a procedure and can be warranted by what it *does*; a chair is a competence and is
warranted by what it must *not claim*. If that holds, the two borders are not two views of one
relation — they measure different things, and the composite that merges them will need to say which.
**This is the finding a concentric composite would have buried**, and the reason the border was
walked first.

The two most connected principles on the floor make the same point across a cluster line:
**Episteme vs. doxa (7 chairs, Learning)** and **The Declared Circle (6 chairs, Epistemics)** — 13
of 52 edges, a quarter of the map, both of them rules about the limit of a claim. Seven chairs
independently wrote down some form of *don't certify what you haven't checked*. That is the single
most repeated idea on the floor, and it is repeated in seven different vocabularies rather than
referenced once — which is a Unison question for a later pass, not this one.

### 4. The Product Owner is the thinnest chair, at 2

Against the Software Architect's 7. Two of the Product Owner's own rules could not be typed onto a principle
without stretching one, and were left uncounted rather than rounded up. Either the Product Owner's
practice genuinely rests on less of the why than any other chair, or two principles are missing from
Yin that this chair has been operating on without. **Not decided here.**

### 5. The reverse direction is nearly dry

Principle bodies mention a chair 36 times across 31 entries, and almost all of them are the
Agile Facilitator or the Composer in their governance role — not a chair being grounded. Only two edges in
this map (both the Agile Facilitator's) are evidenced principle-side. **Yin does not know who stands on it.**
Whether that is correct — a principle *should* be chair-agnostic — or a gap, is the Composer's.

---

## Method, and what it rejected

**Command found the candidates; judgement typed them.** A scan over each chair's own text for the
distinctive vocabulary of all 31 principles produced ~70 candidates. **18 were rejected**, each for a
stated reason, because a word match is not a warrant:

| Rejected | Why |
|---|---|
| Accessibility Specialist → Dèmos Kratos | *"standards authority"* — a different sense of the word |
| Accessibility Specialist → Response calibration | *"internal calibration"* — a different sense again |
| Agile Facilitator / UX Designer / Content Designer → Non-Euclidean | `round` matched inside *"grounding"* — substring artifact |
| Agile Facilitator / Agile Auditor / Accessibility Specialist / User Researcher / Software Architect → cobbler's children | `its own` as a generic possessive, no self-application rule |
| UX Designer / Software Engineer / QA Engineer / Content Designer → The Interval Principle | *"Handoff signal"* is a message format, not the seam |
| Content Designer → The professional mantra | a filename reference (`feedback_professional_mantra.md`), not a rule |
| Content Designer → Kintsugi, Episteme, Serendipity, Too Big Too Soon | all matched inside a vocabulary **table**, not prose |
| Software Engineer → Nested Opera Houses, Design by absence | `nested` and `the gap` as ordinary words |
| Design Engineer / UX Designer / Software Architect → Response calibration | `register` in three unrelated senses |
| User Researcher → Serendipity | `spike` belongs to Too Big Too Soon here, not to exploration |
| QA Engineer → Too Big Too Soon | the time-boxed exploratory session is Serendipity, not scope |

Three edges were found by **judgement that the scan missed** — Agile Facilitator→Episteme, Product Owner→Too
Big Too Soon, QA Engineer→Serendipity — which is the honest limit of the mechanical half: it finds
vocabulary, not rules.

---

## Counts that disagree — reported, not reconciled

| Source | Principles | Protocols |
|---|---|---|
| This file (derived 2026-08-01, by command) | **31** | — |
| `principles_mandala_source.md` (2026-07-29, *"verified by command"*) | 30 | — |
| `protocol_warrant_map.md` (2026-07-29) | 29 | 34 |
| the meta-mandala render | 29 | 29 |

Four numbers for two continents. Every one of them was typed rather than computed, so each is
correct as of the day it was written and none re-derives itself. **Nothing here is reconciled** —
that is a decision about which surface is authoritative, and it is not this pass's to make.

---

## Not decided here

- Whether the 7 chair-inert principles are structurally chair-independent or a capture gap
- Whether the Product Owner gains two principles, or genuinely rests on two
- Whether `agent_agilefacilitator.md` and `agent_reliability_engineer.md` should exist
- Which principle count is authoritative
- The vocabulary for a chair being Yin one way and Yang the other
- Anything about the render — this file is the map, not the mandala
