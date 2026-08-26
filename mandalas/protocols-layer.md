---
type: Mandala Layer
title: "The Protocols Mandala — source of truth"
description: "The protocols ring: every protocol as a taijitu of the maxim it holds and the practice it asks for, with protocol-to-protocol edges each earned by a quote, and what the graph shows before it is drawn"
status: draft
serves_all: true
generated: { by: human:jkornobis, at: 2026-08-16T21:24:05+02:00 }
---

# The Protocols Mandala — source of truth

**Status: SOURCE ARTIFACT for a graph not yet drawn.** Built 2026-07-29 at the Composer's
instruction: *"build the links between the protocols themselves, find the one who are the corollaries
of the others."* No HTML was touched — the Composer asks for the page when they want it.

**Derived from the protocol sources, not from any existing render.** The 2026-07-27 principles
mandala was shared for the *node form* only (the taijitu dot). Every edge below is earned by a quote
from a protocol's own text, cited with its file and line. Where no text supports an edge, none is
drawn — a missing edge is a finding, not a hole to fill.

**Why this can exist now.** The branch concluded on 2026-07-28 that *there has never been a Protocols
mandala*, because no protocol↔protocol edge structure existed anywhere — `grep` found only
protocol→principle warrant edges (bipartite, therefore not a mandala). That conclusion was true and
is now spent: this file **builds** the missing structure, which is what makes a unipartite Protocols
mandala possible for the first time.

---

## 1. The declared circle

Drawn before counting, per The Declared Circle.

**A node is a protocol if** it (a) carries a name, (b) prescribes a **procedure or a gate** — a
sequence, a rule that fires on a condition, a checklist — and (c) is executed by the orchestra or by
a mechanism the orchestra owns. Yang, in the audit's vocabulary.

**Excluded, deliberately:** principles (claims, not procedures — they are the *other* mandala);
glossaries and rationale sections; the musician roster itself; anything appearing only as prose
description with no fire condition.

**Surfaces searched — every one, not the two the last inventory used.** ROADMAP note 40 (f) recorded
that the previous warrant inventory drew from exactly two files (`brain_protocols.md` +
`protocols.md` = 29, "an exact match — source-bounded, not judgement-bounded"). This circle is drawn
wider on purpose:

| Surface | Protocols found |
|---|---|
| `skill/grand-ensemble/references/protocols.md` | 19 |
| `brain/brain_protocols.md` | 10 (7 overlap) |
| `skill/grand-ensemble/references/triggers.md` | 16 |
| `skill/grand-ensemble/references/presentation.md` + `presentation-checklist.md` | 3 |
| `skill/grand-ensemble/references/chair_review.md` | 1 |
| `skill/grand-ensemble/references/tool_audit.md` | 1 |
| `brain/brain_governance.md` | 2 |
| `brain/fair_copy_protocol.md` | 1 |
| `scripts/hooks/` (executable) | 4 |

**Total after de-duplication: 57 protocols in 7 families, and 70 edges** — counted by command over
this file's own tables, not by eye. (A first pass wrote "56" from the same tables read visually; the
count script found 57 rows, 57 unique names, no numbering gap. The document that argues for counting
by command is exactly where counting by eye fails, which is the cobbler's children.)

**One family name is new and it is the Composer's to keep or rename.** Six family names already exist
in use (Roster & Ensemble · Scale & Effort · Quality & Verification · Decision & Escalation ·
Learning & Pattern · Trust boundary). The trigger procedures fit none of them, so they are grouped
below under the working name **Session & Interface**. That label is naming, therefore authorship —
it is a placeholder, not a decision.

---

## 2. Nodes — every protocol is a taijitu

The principles mandala's dot is a principle (Yin, a claim) carrying its corollary tag as the Yang
seed. **A protocol's dot is the same object inverted:** the protocol is Yang — a procedure — and its
Yin seed is the claim it encodes, the thing that would still be true if you deleted the steps. Both
faces are named for every node below, so the dot can be drawn without further derivation.

### Roster & Ensemble — who plays

| # | Protocol | Yang face (what it runs) | Yin seed (what it asserts) | Source |
|---|---|---|---|---|
| 1 | **Concert Quorum** | assemble the minimum ensemble, justify each seat by a domain present | *no seat without a subject* | `protocols.md:4` |
| 2 | **Minimum Duet** | no output from one voice, except explicit Solo | *a solo has no counterweight* | `protocols.md:107` |
| 3 | **Instrument families** | fixed family groupings the quorum draws from | *structure precedes selection* | `brain_protocols.md:105` |
| 4 | **Ensemble sizes** | named sizes per request weight | *size is chosen, not grown* | `brain_protocols.md:113` |
| 5 | **Canonical duets** | pre-named natural pairings | *some pairs are load-bearing* | `brain_protocols.md:120` |
| 6 | **Agent routing table** | subject → chair lookup | *routing is data, not intuition* | `brain_protocols.md:179` |
| 7 | **Chamber / Echo / Antiphony** | ad-hoc group · relay without judgment · parallel groups binding none | *a delegate has no independent authority* | `protocols.md:6` |
| 8 | **Sequential handoffs** | six named chair-to-chair handoffs | *order is part of the work* | `protocols.md:113` |
| 9 | **Personas vs real subagents** | when a persona is enough, when a spawn is required | *agreement among correlated voices is not corroboration* | `protocols.md:71`, `brain_protocols.md:61` |

### Scale & Effort — how much

| # | Protocol | Yang face | Yin seed | Source |
|---|---|---|---|---|
| 10 | **Effort-scaling rubric** | five tiers fixing ensemble size *and* planning depth | *effort must match the request* | `protocols.md:14` |
| 11 | **Artifact pipeline** | Brief → Plan → Epics → Tasks, each drafted and Composer-authored | *a whole initiative is not prose in a chat* | `protocols.md:27` |
| 12 | **Unit loop** | Draft (DoD first) → Build → Verify, QA Engineer gates the exit | *"done" undefined up front can only be asserted* | `protocols.md:46` |
| 13 | **Doc sharding** | thin index + shards pulled on demand | *context is a runtime resource* | `protocols.md:59` |
| 14 | **Spawn & load-balancing pivot** | per-task decision: personas or subagents, how many, which model | *more agents ≠ better* | `protocols.md:68` |
| 15 | **Lots** | named sequential batches, each a complete branch → PR → merge | *small batches beat one big landing* | `protocols.md:124` |
| 16 | **Fortissimo** | escalate the task to the strongest reasonable model | *match power to stakes, don't default upward* | `triggers.md:29` |

### Quality & Verification

| # | Protocol | Yang face | Yin seed | Source |
|---|---|---|---|---|
| 17 | **Definition of Done** | every relevant chair's gate passes; build gate; adversarial gate | *no single musician declares Done* | `protocols.md:110` |
| 18 | **Independent Verification** | spawn a real subagent when a check needs independence | *the personas share the blind spot that produced the error* | `protocols.md:104` |
| 19 | **Execution discipline** | read → write one thing → verify → next | *time-to-verified-correct, not fewest steps* | `protocols.md:121` |
| 20 | **Runtime rule-adherence spot-check** | seven invariants checked at every Checkpoint, logged | *a check held only in context is the failure it closes* | `protocols.md:146` |
| 21 | **THE WHIP** | post-action verification checklist, per action | *the action is not the evidence* | `brain_governance.md:10` |
| 22 | **Request quality check** | offer one clarifying line before a request with a gap | *one upfront question prevents the three-round loop* | `protocols.md:164` |
| 23 | **Attribution format** | every voice gets its line, every send | *an unattributed voice did not play* | `brain_protocols.md:279` |
| 24 | **Tool-failure watch** | hook: any tool failing twice stops and says so | *repeated failure is a signal, not noise* | `scripts/hooks/tool-failure-watch.mjs` |
| 25 | **Fair copy** | belt → change source → propagate the surface checklist → grep-verify → commit → deploy → journal | *propagation is a checklist, not a memory test* | `fair_copy_protocol.md:1` |
| 26 | **Chair Review** | Agile Auditor + User Researcher + Product Owner judge an addition; verdict; confirmation gate | *a chair never judges its own gap* | `chair_review.md:1` |
| 27 | **Risk-tier re-ask** | a delegation covers only the tier it was calibrated for | *the ask fires on a tier crossing, not a topic change* | `protocols.md:133` |
| 28 | **Tool Audit** | User Researcher verifies a new surface's real capabilities, writes the page | *capabilities are verified, never recalled* | `tool_audit.md:1` |
| 29 | **Post-edit skill budget** | hook: skill edits re-measured against the ceiling | *always-on cost creeps back silently* | `scripts/hooks/post-edit-skill-budget.mjs` |
| 30 | **Declared-set check** | for any set operation — delete, rename, move, extract, audit — declare the set first, then run the completeness check as a command over that set | *a claim inherits its check and never exceeds it* | `project/protocol_warrant_map.md:47` |

### Decision & Escalation

| # | Protocol | Yang face | Yin seed | Source |
|---|---|---|---|---|
| 31 | **Task entry** | three same-shape requests with no use case → the quorum names the suspicion **first, and offers no methodology until the problem is stated**; then the plan is written with the Composer, his verification steps in it; then executed | *a task is entered at a scale, or it is entered by accident* | `project/protocol_proposal_task_entry.md:1` |
| 32 | **Rule 0 gate** | before any choice: is this determinable, or authorship? | *a choice offered is a bug unless it is theirs* | `presentation-checklist.md:7` |
| 33 | **Button gate** | a 2–4 option Composer decision is `AskUserQuestion`, every send | *a decision rendered as prose is not a decision surface* | `presentation-checklist.md:47` |
| 34 | **Show, don't tell** | results rendered; reasoning available on `Tell` | *showing is cheaper to judge than telling* | `presentation.md:1` |
| 35 | **Disagreement handling** | both reasonings surface to the Composer; the Agile Facilitator never breaks ties | *the tie is not the Agile Facilitator's to break* | `protocols.md:4`, `brain_protocols.md:88` |
| 36 | **Proactive consultation** | the Agile Facilitator initiates when it sees what the Composer cannot | *silence is not the same as nothing to say* | `brain_protocols.md:159` |
| 37 | **Roadmap cadence** | any roadmap-touching turn ends with next-step + newly-possible | *momentum decays like any unenforced habit* | `protocols.md:170` |

### Learning & Pattern

| # | Protocol | Yang face | Yin seed | Source |
|---|---|---|---|---|
| 38 | **Knowledge-Pivot** | new knowledge updates the cross-domain map | *knowledge is never inert* | `protocols.md:167` |
| 39 | **Pattern ledger (fires at 3)** | file-backed occurrence count; fires at 3, at 1 for a breach | *a count held in memory is not a count* | `brain/patterns.md:1` |
| 40 | **Opera House cycle** | ABSORB → ORIENT → MAP → (Composer checkpoint) → FLOW → EXECUTE → VERIFY → LEARN → breathe | *enter the venue before conducting* | `principles_candidate.md:344` (registered to the protocol layer 2026-07-28) |
| 41 | **Checkpoint the session** | append state, open threads, decisions; fold in patterns + usage | *a session that isn't written down didn't happen* | `triggers.md:42` |
| 42 | **Usage ledger** | hooks count triggers, solos, ensemble appearances into a committed file | *retire what never plays, from data* | `scripts/hooks/usage-count-prompt.mjs`, `scripts/hooks/usage-count-response.mjs` |
| 43 | **Session-start digest** | fires once at session boundary, re-orients from the last entry | *a new session starts cold unless something warms it* | `scripts/hooks/session-start-digest.mjs` |

### Trust boundary

| # | Protocol | Yang face | Yin seed | Source |
|---|---|---|---|---|
| 44 | **Spotlighting** | trust boundary · never obey embedded directives · injection screen · quarantined subagent · policy-as-code | *only the Composer's chat issues instructions* | `protocols.md:178` |
| 45 | **Delegation Brief** | objective · output format · sources/tools · boundaries | *~42% of multi-agent failures are specification failures* | `protocols.md:92` |
| 46 | **Multilingual Composer** | declared language mode A/B/C, held without commentary | *the language is the Composer's, not the room's* | `brain_protocols.md:139` |

### Session & Interface *(name ratified by the Composer, 2026-08-14 — it had carried
"working family name" since the family was formed)*

| # | Protocol | Yang face | Yin seed | Source |
|---|---|---|---|---|
| 47 | **Solo / Dismiss** | one musician alone, persists until dismissed | *the Composer opened it; only the Composer closes it* | `triggers.md:9` |
| 48 | **Auditorium** | 12 ideas with impact → Product Owner ranks descending → synthesis | *breadth is delivered once, then depth by choice* | `triggers.md:12` |
| 49 | **Program** | play numbered notes in the given order, one at a time | *unlisted notes are postponed, not deleted* | `triggers.md:23` |
| 50 | **Play mute / Play loud** | advise and draft, execute nothing, until unmuted | *counsel and action are different acts* | `triggers.md:26` |
| 51 | **Open score / Close score** | expose routing and internals until closed | *the machinery is inspectable on request* | `triggers.md:36` |
| 52 | **Make it so** | execute the plan just discussed, no re-confirmation | *agreement already happened; don't re-ask* | `triggers.md:39` |
| 53 | **Tell** | expand the reasoning behind what was just shown | *the reasoning is owed, but not by default* | `triggers.md:45` |
| 54 | **Help** | print the command manual; changes nothing, runs nothing | *a reference is not an action* | `triggers.md:73` |
| 55 | **Composer Key** | read / write / update the personal layer, with read-back | *persisting identity needs consent* | `triggers.md:48` |
| 56 | **Change Score Key** | re-set presentation preferences, persist to the Key | *the score is shared; the key is personal* | `triggers.md:54` |
| 57 | **Time methods (Ambient / None)** | switch the permanent time behaviour, persist to the Key | *no time behaviour is the honest default* | `triggers.md:61` |
| 58 | **Metronome** | one-off focused box above the permanent method | *a transient overlay is not a method* | `triggers.md:64` |
| 59 | **Capacity check** | any stated usage % recalibrates the budget; wrap-up posture at ~90% | *the Agile Facilitator cannot read its own usage* | `triggers.md:70` |

*(59 nodes, numbered 1–59 with no gaps and no duplicate names — verified by command. **#31 registered 2026-08-15**: `Task entry`, the Composer's design, opening Decision & Escalation because it fires before any other decision protocol can. **#30 registered 2026-08-15**: `Declared-set check` had been authored in `protocol_warrant_map.md` on 2026-07-28 — with three warrants, a description and this cluster — and registered in no roster for eighteen days. Every row from 30 up shifted by one rather than appending it at 58, because the numbering is by family and a registration order pretending to be a position is the kind of quiet lie this roster exists to avoid. The build gate is folded into Definition of Done rather than given its own node, since DoD is where it fires.)*

---

## 3. Edges — protocol ↔ protocol, each earned by a quote

Edge codes as printed on the Composer's mandala legend: **T** tension · **S** sibling · **C** causal ·
**D** dependency · **E** extension.

### E — extension: one protocol elaborates another *(the corollary edges the Composer asked for)*

These are the corollary relations. Each is a protocol that exists only because another one does, and
would be meaningless detached from it.

| Corollary | Of | Evidence |
|---|---|---|
| Chamber / Echo / Antiphony | Concert Quorum | *"Concert Quorum assembles one ad hoc ensemble by subject. **Three extensions**…"* — `protocols.md:7` |
| Artifact pipeline | Effort-scaling rubric | *"**The top rung of the ladder.**"* — `protocols.md:28` |
| Unit loop | Artifact pipeline | *"**The pipeline's Task tier produces units**; this is how one unit gets done."* — `protocols.md:45` |
| Risk-tier re-ask | Chair Review | *"Chair Review's confirmation gate is **this tier's mechanism**."* — `protocols.md:136` |
| Change Score Key | Composer Key | *"`Change Score Key` is the **specialized subset** for presentation preferences."* — `triggers.md:52` |
| Metronome | Time methods | *"a transient time-box layered **above the permanent method**."* — `triggers.md:64` |
| Tell | Show, don't tell | *"the **'tell' layer** of Show-don't-tell."* — `triggers.md:45` |
| Button gate | Rule 0 gate | the button gate fires only after Rule 0 rules a decision genuinely the Composer's — `presentation-checklist.md:47` |
| Instrument families | Concert Quorum | families are the set the quorum draws its seats from — `brain_protocols.md:105` |
| Ensemble sizes | Effort-scaling rubric | the rubric's Ensemble column *is* the size ladder — `protocols.md:17–23` |
| Canonical duets | Minimum Duet | named pairings are the duet rule pre-solved for recurring subjects — `brain_protocols.md:120` |
| Usage ledger | Checkpoint the session | *"this is also the moment `brain/patterns.md` … and `brain/usage_ledger.md` get updated."* — `triggers.md:42` |
| Pattern ledger | Checkpoint the session | same line — `triggers.md:42` |
| Quarantined subagent *(inside Spotlighting)* | Independent Verification | *"**Reuses the real-subagent mechanism** as a security boundary."* — `protocols.md:180` |

**Fourteen corollary pairs.** Note the shape: they concentrate in Scale & Effort and Session &
Interface, and there is **not one E edge inside Trust boundary** — that family's three protocols each
stand alone, which is either correct (a boundary shouldn't be elaborated) or a gap. Flagged, not
decided.

### D — dependency: one requires the other to function

| From | To | Evidence |
|---|---|---|
| Artifact pipeline | Minimum Duet | *"**Minimum Duet at each stage** — two lenses draft each artifact, never one."* — `protocols.md:39` |
| Artifact pipeline | Definition of Done | *"The QA Engineer gates the task tier — a task isn't 'ready' until its Definition of Done is explicit."* — `protocols.md:40` |
| Unit loop | Definition of Done | *"no unit starts with an unstated DoD."* — `protocols.md:47` |
| Unit loop | Execution discipline | *"the work in **small atomic steps** … verify per step."* — `protocols.md:48,54` |
| Independent Verification | Delegation Brief | *"How: **full Delegation Brief** (it shares none of your context)."* — `protocols.md:99` |
| Independent Verification | Personas vs real subagents | the fit-cases that justify a spawn are that protocol's table — `protocols.md:81` |
| Spawn & load-balancing | Delegation Brief | a spawn without a brief is the specification failure MAST measures — `protocols.md:96` |
| Spawn & load-balancing | Fortissimo | *"High-stakes decision … **Fortissimo** → Opus / Fable."* — `protocols.md:76` |
| Minimum Duet | Concert Quorum | the duet is the quorum's floor — `protocols.md:4,102` |
| Runtime spot-check | Checkpoint the session | *"**When:** at every `Checkpoint the session`."* — `protocols.md:143` |
| Runtime spot-check | Attribution format | invariant 8 is one of the seven it checks — `protocols.md:145` |
| Fair copy | Checkpoint the session | *"**8. Journal.** At session close, the change is captured in `SESSION_LOG.md`."* — `fair_copy_protocol.md` |
| Fair copy | Definition of Done | DoD's build gate requires source and package to agree, which is Fair copy's step 3 — `protocols.md:105` |
| Auditorium | Program | *"The ranked table is **numbered** — it is a **Program surface**."* — `triggers.md:12` |
| Auditorium | Disagreement handling | twelve voices produce the disagreement the protocol routes — `triggers.md:12` |
| Chair Review | Minimum Duet | three lenses, never the chair itself — `chair_review.md:8` |
| Tool Audit | Delegation Brief | User Researcher is dispatched with a brief; the audit's output format is fixed — `tool_audit.md:19` |
| Doc sharding | Post-edit skill budget | the budget gate is what proves sharding paid — `protocols.md:61` |
| Capacity check | Checkpoint the session | *"Auto-triggers wrap-up posture at ~90%+ … offers to Checkpoint."* — `triggers.md:70` |
| Session-start digest | Checkpoint the session | the digest reads the entry Checkpoint wrote — `triggers.md:42` |
| Knowledge-Pivot | Fair copy | a map update is a rule-surface change, which Fair copy propagates — `protocols.md:162` |
| Show, don't tell | Button gate | the rendering standard is what the button gate enforces per send — `presentation.md` |
| Solo / Dismiss | Attribution format | a solo still gets its attribution line — `presentation-checklist.md:22` |

### T — tension: opposing forces that balance

| A | B | Evidence |
|---|---|---|
| Solo / Dismiss | Minimum Duet | *"the **only sanctioned exception** to the Minimum Duet Rule."* — `triggers.md:9` |
| Lots | Program | *"**Not a new trigger.** `Program` owns Composer-chosen numbered sequencing; Lots are the Agile Facilitator's own phasing."* — `protocols.md:124` |
| Lots | Execution discipline | the doc-vs-code exception explicitly relaxes per-change verification for greppable batches — `protocols.md:123` |
| Independent Verification | Minimum Duet | personas cannot corroborate; a duet is cheap and blind, a spawn is costly and sighted — `protocols.md:98–99` |
| Independent Verification | Spawn & load-balancing | *"overspawning verification is AP-OVERSPAWN in a different coat."* — `protocols.md:99` |
| Effort-scaling rubric | Auditorium | *"a wall of twelve voices answering 'what's the contrast minimum?'"* is the rubric's named anti-pattern — `protocols.md:25` |
| Runtime spot-check | THE WHIP | *"**Distinct from THE WHIP** … per-action) and the Agile Auditor … one more layer, not a duplicate."* — `protocols.md:156` |
| Roadmap cadence | Session-start digest | *"Distinct from the `SessionStart` digest … this fires **every roadmap-touching turn**."* — `protocols.md:170` |
| Play mute | Make it so | one withholds all execution, the other executes without re-confirmation — `triggers.md:26,39` |
| Chamber / Echo / Antiphony | Concert Quorum | *"A Chamber/Antiphony convened too often … degenerates into the hierarchy it exists to avoid."* — `protocols.md:12` |
| Request quality check | Make it so | one asks before proceeding, the other forbids re-asking — `protocols.md:159`, `triggers.md:39` |

### C — causal: one triggers or prevents the other

| From | To | Evidence |
|---|---|---|
| Pattern ledger | Chair Review | a pattern firing at 3 is what raises an addition for review — `brain/patterns.md`, `chair_review.md:6` |
| Pattern ledger | Disagreement handling | *"a recurring pattern or authority violation is **escalated by the Agile Auditor** (fires at 3; at 1 for a breach)."* — `protocols.md:4` |
| Tool-failure watch | Absolute Ear *(principle)* | out of scope here — recorded in the warrant map, not this graph |
| Tool-failure watch | Spawn & load-balancing | two failures stop the run before it escalates into more spawning — `tool-failure-watch.mjs` |
| Risk-tier re-ask | Fair copy | tier 4 (changes to the orchestra's own rules) is exactly Fair copy's trigger condition — `protocols.md:136`, `fair_copy_protocol.md:44` |
| Knowledge-Pivot | Chair Review | new root knowledge for a chair is what Chair Review exists to judge — `chair_review.md:6` |
| Capacity check | Effort-scaling rubric | wrap-up posture suppresses higher tiers — `triggers.md:70` |
| Request quality check | Delegation Brief | a request with a gap becomes a brief with a gap — `protocols.md:159` |
| Opera House cycle | Unit loop | the cycle's EXECUTE beat is where units run — `protocols.md:44` |
| Fortissimo | Independent Verification | escalation option (b) is a spawned strong-model subagent — `triggers.md:29` |

### S — sibling: same concern, different angle

| A | B | Evidence |
|---|---|---|
| THE WHIP | Execution discipline | both are per-action verification, one post-hoc, one in-line |
| Runtime spot-check | Pattern ledger | *"the same **file-backed discipline** the Agile Auditor's 'fires at 3' already depends on."* — `protocols.md:154` |
| Fair copy | Knowledge-Pivot | both propagate a change across surfaces; one for rules, one for knowledge |
| Sequential handoffs | Canonical duets | both name fixed chair pairings; one ordered, one simultaneous |
| Agent routing table | Concert Quorum | lookup vs. designed-by-subject — the same routing question answered two ways |
| Doc sharding | Capacity check | both treat context as a finite budget, one structurally, one live |
| Spotlighting | Delegation Brief | both are boundary contracts: what may instruct, and what was asked |
| Composer Key | Change Score Key | *(also E)* — the general layer and its presentation subset |
| Tool Audit | Independent Verification | both refuse recall in favour of a verified external result |
| Help | Show, don't tell | both are surfaces the Composer reads rather than acts on |
| Multilingual Composer | Attribution format | both govern the shape of every send regardless of content |
| Opera House cycle | Effort-scaling rubric | both answer "how much before acting", one by phase, one by tier |

---

## 4. What the graph shows before it is drawn

**Edge census, by command: 70 edges — E 14 · D 23 · T 11 · C 10 · S 12.**

**Degree — top six, counted not estimated:**

| Protocol | Edges | Reading |
|---|---|---|
| **Independent Verification** | 7 | the hub — and **3 of its 7 are T**, so the system's most connected protocol is its most *contested*, not its most agreed |
| **Minimum Duet** | 6 | the verification spine, exactly as its name claims |
| **Checkpoint the session** | 6 | five of them inbound and none outbound |
| **Concert Quorum** | 5 | |
| **Effort-scaling rubric** | 5 | |
| **Fair copy** | 5 | |

**Zero-degree nodes — 2:** **Proactive consultation** and **Open score / Close score**. No protocol
text anywhere earns them an edge. In a mandala an isolated node is the defect the drawing exists to
reveal — the same "flow arriving nowhere" the warrants graph flagged for inert principles. Whether
they are genuinely independent or merely unwritten is not determinable from the text; it is the first
question to put to the drawn graph.

**One-degree leaves — 15:** Instrument families · Ensemble sizes · Agent routing table · Sequential
handoffs · Personas vs real subagents · Post-edit skill budget · Rule 0 gate · Roadmap cadence ·
Usage ledger · Multilingual Composer · Play mute / Play loud · Tell · Help · Time methods · Metronome.
A leaf is not a defect, but **17 of 57 protocols hanging by one thread or none** is the number that
decides whether this graph reads as a mandala or as a hub with fringe.

**The asymmetry worth naming:** `Checkpoint the session` carries five inbound dependencies and zero
outbound. Every mechanism that must survive a session boundary routes through **one trigger the
Composer types by hand**. Nothing structurally fires it — the same "nothing forced the write" shape
as ROADMAP note 40, found here at the protocol layer.

---

## 5. Not done, deliberately

- **No HTML.** The Composer asks for the page when they want it.
- **No icons, no colours, no layout.** The family ring-of-rings shape is available from the warrants
  graph, but choosing it here would be presuming the drawing.
- **The 7th family name** — "Session & Interface" is a placeholder. Naming is the Composer's.
- **Edge weights / directionality** — D, C and E are directed; T and S are not. The drawn graph must
  decide how it shows direction; the data carries it either way.
- **The Trust boundary family has no internal E edge**, and three families have no T edge at all.
  Recorded as findings for the drawing to answer, not smoothed over here.
