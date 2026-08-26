---
type: Mandala Border
title: "The Protocol–Chair map"
description: "The third border, enacts: which protocols each chair puts into practice. The one that closes the triangle, after which the meta-mandala can be a result rather than a premise"
status: draft
serves_all: true
generated: { by: human:jkornobis, at: 2026-08-17T11:59:30+02:00 }
---

# The Protocol–Chair map

The third of three borders. Sibling to [`protocol_warrant_map.md`](protocol_warrant_map.md)
(Protocols ↔ Principles) and [`principle_chair_map.md`](principle_chair_map.md) (Principles ↔ Chairs).
With this one drawn, the triangle closes and the meta mandala can be a *result* rather than a premise.

## The declared circle

What this map claims, and nothing wider:

- **Read**: `skill/grand-ensemble/references/musicians.md` (the 12 musician-agnostic chair definitions,
  ADR-199/200) plus every `agents/agent_*.md` file that belongs to a chair — **16 files for 10
  chairs; the Agile Facilitator and the Reliability Engineer have none.** *(16 as of 2026-08-02:
  `agent_productowner_project.md` and `agent_design_softwareengineer_project.md` were split out that day, so the Product Owner and the Design Engineer
  now have two files each, like the UX Designer and the Software Engineer. The chair count is unchanged.)*
  *(Corrected 2026-08-02: this line said
  "14 files for 12 chairs", which contradicted both finding 1 below and the sibling map's line 207,
  where the count was already right. The reading was never wrong — only the count of what it
  reached.)*
- **Vertex set, protocols**: **59 protocols in 7 families** as of 2026-08-15 — this line declared *34 in 6 clusters* until the enactment pass, and the roster had grown by twenty-five underneath it. Still taken from the protocol registry unmodified, so the two protocol borders share vertices.
  Reused *exactly*, unmodified, so the two protocol borders share vertices and a composite can
  actually join them. Any protocol that exists in the room but not in that set is out of scope here
  and listed under "Not decided here".
- **Vertex set, chairs**: the 12 chairs. Fixed, never invented (Invariant 0).
- **Not read**: `brain/`, `docs-site/`, ADRs, `SESSION_LOG.md`, `project/qa/`. A protocol may be
  grounded somewhere in those and still show as inert here. Inert means *no chair declares it*, not
  *unused*.

**Every quote in both maps is now machine-checked.** `node scripts/check_map_quotes.mjs` pulls each
quoted fragment out of both files and requires it to appear **literally** in the declared circle —
exit 1 if any does not. Current reading: **197 of 197 found**, 0 absent. This closes the sweep debt
the chair passes opened, and it is the only guard either map has: `project/` is outside
`check_docsite_consistency.mjs` and outside Fair copy.

## Direction

Edges run **chair → protocol**: *this chair's own text states, or presupposes, this protocol.*

This is the same convention as the Principle–Chair map, and it is the **reverse** of the arrow drawn
on the meta-mandala triangle (Protocols → Chairs, "protocols staff themselves"). Naming it rather
than silently picking one: the relation is the same edge, read from the end that carries the
evidence. A chair's file says what it needs; a protocol's file rarely says who needs it. Evidence
lives on the chair side, so the arrow is drawn from there. The composite will have to flip it, and
the flip is lossless because each edge below carries a quote.

## Result

**109 edges · 12 chairs, 0 empty · 41 of 59 protocols grounded · 18 inert.** *(Recomputed 2026-08-15 with the enactment pass. The paragraph below is kept exactly as written — it recorded this same defect on 2026-08-02, and it recurred: the headline still read 81 · 29 of 34 · 5 while the roster had grown to 59 and the per-chair table had already moved under it. **Nothing recomputes it automatically** is still true, which is why both chair borders now hold their shape in `scripts/check_ensemble.mjs`.)*
*(Recomputed 2026-08-02 after the chair passes. Was 50 · 23 grounded · 11 inert — and the headline
had gone stale before this line was corrected: the per-chair table below already summed to more than
50 while this sentence still said 50. **Nothing recomputes it automatically**, which is exactly the
defect this map exists to find, found in the map itself.)*

| Cluster | Protocols | Grounding ≥1 chair | Edges | Was |
|---|---|---|---|---|
| Quality & Verification | 8 | 6 / 8 | 21 | 4 / 8 · 12 |
| Scale & Effort | 6 | 5 / 6 | 11 | **2 / 6** · 4 |
| Roster & Ensemble | 9 | 9 / 9 | 26 | 8 / 9 · 20 |
| Decision & Escalation | 3 | 2 / 3 | 7 | 2 / 3 · 4 |
| Trust boundary | 3 | 3 / 3 | 6 | 3 / 3 · 5 |
| Learning & Pattern | 5 | 4 / 5 | 10 | 4 / 5 · 5 |

***Scale & Effort was this map's headline crack and it has closed.*** *It was the weakest cluster at
2 of 6 grounded on 4 edges; it is now **5 of 6 on 11**. Roster & Ensemble is fully grounded. Finding 3, which built this map's strongest single result on the Structure /
Scale cross-border crack, rests on figures that no longer hold — **its prose needs the Composer's
re-reading, and this table is not authorised to rewrite it**.*

| Chair | Edges |
|---|---|
| Agile Facilitator | 9 |
| Design Engineer | 8 |
| Software Engineer | 8 |
| UX Designer | 5 |
| QA Engineer | 7 |
| Content Designer | 5 |
| Product Owner | 11 |
| Software Architect | 10 |
| Agile Auditor | 10 |
| User Researcher | 10 |
| Accessibility Specialist | 6 |
| **Reliability Engineer** | **2** |

---

## The edges

One quoted sentence per edge, copied from the chair's own text.

### Agile Facilitator — 12

| Protocol | Quoted warrant | Class |
|---|---|---|
| Ensemble sizes | "**Assembles the minimum ensemble**, verifies output against the spec, synthesizes." — clause 1 | stated |
| Independent Verification | "Assembles the minimum ensemble, **verifies output against the spec**, synthesizes." — clause 2 | stated |
| Minimum Duet Rule | "Private rehearsal (trying solo/duet internally) is allowed — the Minimum Duet applies to what the Composer ***hears***." — emphasis restored | stated |
| Concert Quorum | "convene the ensemble those dimensions demand, justifying each seat by a dimension actually present" | stated |
| Chamber / Echo / Antiphony | "convenes a **Chamber** (or several, in **Antiphony**) and reports back in **Echo** mode" — emphasis restored | stated |
| Agent routing table | "This is **routing intelligence, not authority**: it decides *who plays*, never *what they decide*" — clause 1; emphasis restored | stated |
| Task entry | "the quorum names the suspicion" — the Agile Facilitator is named in the protocol's registered source as one of the three, and the rung it asks for is what sizes the ensemble it will convene | protocol-declared |
| Auditorium | "**[Agile Facilitator — synthesis]** — what the table adds up to; what the Composer needs to decide" — a named movement of the protocol, bracketed by chair | protocol-declared |
| Tool Audit | "Also self-suggested by the Agile Facilitator the first time a musician's capability guard hits a tool/MCP with no existing page under `agents/tools/`" — the Agile Facilitator triggers what the User Researcher runs | protocol-declared |
| THE WHIP | "**The Agile Facilitator** holds a checklist of universal rules." — the protocol's first sentence, and step 2 of its procedure is "Agile Facilitator runs the universal checklist against what was done" | protocol-declared |
| Rule 0 gate | "does this have a single correct answer that I (**the Agile Facilitator**) can find by looking?" — the gate is written in the Agile Facilitator's own first person | protocol-declared |
| Opera House cycle | "1. **ABSORB** (**Agile Facilitator** + User Researcher, minimum) — Enter the house." — and again at ORIENT, MAP, FLOW ("Agile Facilitator executes the chosen shape") and LEARN | protocol-declared |

***My brief to the review stated ruling (c) more strictly than this file does, and the review caught
it.*** *Line 506 records the rule as "one sentence, one edge, **unless it states two distinct
obligations**". The brief dropped the exception. Under the absolute version the review was handed,
two edges here fall; under **this file's own version** they stand, because both sentences state
distinct obligations — "Assembles the minimum ensemble, verifies output against the spec,
synthesizes" is three, and "it decides who plays, never what they decide" is two. **This file's
version governs.** Re-checked against the four edges removed on earlier chairs: none of them would
have survived the exception either — each rested on a sentence stating one obligation twice, or on
no quote at all.*

***The S9 tiebreak, recorded because it is close.*** *If the exception were ever withdrawn, the review
would give that sentence to the **principle** (its main clause is "routing intelligence, **not
authority**", the principle in propositional form) and `Agent routing table` would die with no
rescue — while `The Agile Facilitator is an agent` has a fallback in "it does not compose the answer". Same
total, different survivors.*

***Four emphasis strips, all repaired above.*** *Not fabrications like the three `###`-welds — bold and
italics silently dropped from quotes that were otherwise faithful. A sixth defect class in the
transcription tally, and the mildest.*

***The gap this chair exposes is in the vertex sets, not in the chair.*** *Three of its eleven
sentences — "interpreter, not dispatcher", the **pragmatics** grounding discipline, "Reads intention
beneath words" — allocate to **nothing**. Neither the 34 protocols nor the 31 principles has a home
for interpretation-of-intent, which is this chair's own declared grounding. With Chair Review, the
Tool Audit and Open Score, that is now four things the room does and the sets cannot hold.*

***And the cost of ruling (a), at its highest here.*** *`musicians.md`'s routing-table "Rules:" line
says output is "synthesized under the Agile Facilitator's own attribution line" and "Conflict between
musicians → surface both positions with reasoning; the Composer breaks the tie, never you." That
would warrant **Attribution format**, **Spawn & load-balancing** and **Disagreement handling** for
this chair — all three barred as room-written. **It is why `Disagreement handling` reads as inert.***

### Agile Auditor — 12

| Protocol | Quoted warrant |
|---|---|
| Pattern ledger | "write each observation with a running count to `brain/patterns.md` at Checkpoints, and apply 'fires at 3' to the file"; and "Fires on the **3rd recurrence** of a pattern. Not 1st (one-off). Not 2nd (coincidence). 3rd = pattern." |
| Attribution format | "Voice format: `[Agile Auditor] Pattern detected: [what]. Occurred [N] times. Suggested: [one action to close it].`" — **quote corrected 2026-08-02**, see below |
| Definition of Done | "Deploy without QA Engineer passing" (listed as a zero-tolerance violation — the chair detects breach of a gate it does not own) |
| Independent Verification | "Self-certification pattern: "[Agent] ✓" without naming a contribution"; and "certifying without checking" — the chair polices verification-must-come-from-another |
| Instrument families | "Not in an instrument family. The Agile Auditor is the room itself — present in every ensemble." — a placement *within* the scheme, stated by declining one |
| Execution discipline | "Overshoot: executing before parsing the question" — a standing detection criterion for the execution-discipline failure mode |
| Multilingual Composer | "French drift in Mode B sessions" — presupposes a declared language mode the chair polices drift against |
| Proactive consultation | "2. Surface it to the Composer"; and "When >80 consecutive exchanges without Composer-initiated pause: "Long session detected…"" — speaks unprompted, on its own trigger |
| Personas vs subagents | "A model sees only its current context plus whatever memory gets reloaded; it cannot observe a prior session it wasn't given." — the substrate claim that protocol exists to state; **the review's own weakest of eight**, marked as such |
| Chair Review | "**Agile Auditor** — is this a genuine, structural gap, or a one-off invented to fill a slot?" — the protocol titles itself *Chair Review — Agile Auditor + User Researcher + Product Owner* and gives each a question of its own | protocol-declared |
| Fair copy | "This is the **Agile Auditor's** surface-check, made mandatory." |
| Checkpoint the session | "`brain/patterns.md` (**Agile Auditor**) ... get updated, file-backed rather than recalled" |

***The under-count here was the largest of the four passes.*** *The map read 3; an independent review
reading the same two sources cold read **8**, and still reached 4 after discarding every edge it
called weak or contingent. Six added above.*

***A ruling this chair needed and no other did.*** *`agent_agileauditor.md` carries a "## Detection
criteria (contributed by each specialist)" section — things **other** chairs asked it to watch for,
living in its file. The review ruled it **is** the Agile Auditor's own text: the "From UX Designer / From
Software Engineer / From Agile Facilitator" headings record the provenance of the request, not the authorship of the
commitment, and the settled convention is about room-level documents describing chairs from outside,
which this is not. Execution discipline, Multilingual Composer and the Overshoot principle all stand
or fall on that ruling, and it is recorded here so a future pass can overturn it knowingly.*

***The quote was wrong, the edge was right.*** *Attribution format was evidenced as
`Suggested: [one action]`. The source says `Suggested: [one action to close it].` — the placeholder
truncated and the period dropped. A grep for the map's version returns zero matches anywhere in the
declared circle. **Second mistranscribed warrant found in four passes**, after the Accessibility Specialist's
`1.4.11`. Quotes in this map are not being checked against their sources when written.*

***And the third "no vertex" pair.*** *This chair's own criteria name **Open Score** ("Open Score
auto-closed without "Close score"") and **Chair Review** (twice, 2026-07-04). Neither exists in the
34. With User Researcher's **Tool Audit** and the Accessibility Specialist's **Chair Review**, that is four live procedures in
three passes that the vertex set cannot hold.*

### UX Designer — 5

| Protocol | Quoted warrant | Class |
|---|---|---|
| Canonical duets | "This is the binome's seam — never solo, always paired."; reinforced by "self-triggers a Design Engineer check before finalizing anything that will ship as code … the duet is active, not just declared" | stated |
| Proactive consultation | "Proactive Accessibility Specialist trigger: before finalizing any design with color, interactive elements, form inputs, focus states, or text hierarchy — UX Designer self-triggers an Accessibility Specialist check." | stated |
| Sequential handoffs | "If flagging Accessibility Specialist: `[UX Designer → Accessibility Specialist]` + what needs checking." | stated |
| Attribution format | heading **"Handoff signal"** with its body "`[UX Designer — done]` + one sentence." — **two parts, quoted as two**; see the repair note | marginal |
| Independent Verification | "Cannot certify: exact WCAG criterion pass/fail — ask Accessibility Specialist" — the chair bars self-certification and routes the check outward | marginal |

***Minimum Duet Rule removed, on this map's own prior ruling.*** *It was recorded as "same sentence,
read as the general rule the binome tightens" — one sentence granted twice. The Accessibility Specialist pass had
already barred exactly this move; the review found the inconsistency the Accessibility Specialist note predicted, and
noted it fails here **harder**, since the Accessibility Specialist lost that edge on source-ownership while the
UX Designer's fails on the double-count itself. Nothing in the chair's four sources states a general
≥2-voice rule. **5 → 4, then 5 again with Independent Verification.***

***The fourth mistranscription, and a new kind.*** *`Attribution format` was evidenced as
`"Handoff signal `[UX Designer — done]` + one sentence."` — **that sentence exists nowhere in the
source.** "Handoff signal" is a `###` heading; "`[UX Designer — done]` + one sentence." is the body
beneath it. **A heading was welded to body text to manufacture a quotable sentence.** The three
earlier defects were a wrong number, a truncated placeholder and stripped bold — this one fabricates
a string. The review's recommendation, recorded and not yet run: **sweep both maps for
`### Heading` + first-line concatenations**, because the earlier three may share this origin.*

***Doc sharding: proposed here, and deliberately still not decided.*** *The review would grant it,
on the two shard-descriptor lines (`agent_uxdesigner_craft.md` L3, `agent_uxdesigner_project.md` L3) plus
the read index at `agent_uxdesigner.md` L51 — while naming it **the one addition it is least confident
in**, since that reads two file subtitles as a sharding index. This is the **second** pass where Doc
sharding has surfaced as a marginal candidate; the Reliability Engineer's was left open because finding 2
declares Doc sharding grounded by no chair at all and finding 3 builds this map's strongest single
result on that. Taking it here would settle that finding sideways, on the weaker of the two
candidates. Both remain the Composer's.*

***Seven of nine candidates rejected**, the worst ratio of the six passes — and the chair the standing
warning named in advance. `Artifact pipeline` on "the honest deliverable is a code/HTML **artifact**";
`Interval Principle` on "whitespace"; `Response calibration` on "Progressive disclosure";
`Art as Felt Science` on "Warm/cool psychology". Each shares a word with its vertex and nothing else.
The map's own false-positive table already lists three of these four for this chair.*

### Design Engineer — 8

| Protocol | Quoted warrant | Class |
|---|---|---|
| Canonical duets | "the UX Designer's permanent technical binome" | stated |
| Minimum Duet Rule | "**Never plays solo** — stricter than the general Minimum Duet, this chair always sits with the UX Designer." — emphasis normalised | stated |
| Spawn & load-balancing | "delegate whole-page reads to a subagent so raw payloads don't accumulate in context" | stated |
| Doc sharding | "It is the **map**; the skills remain the source of truth for mechanics — load the skill for the *how*, never duplicate its internals here (drift)."; with "`figma-bridge/SKILL.md` is the project's own routing skill; load it first, then the official skill it names" | stated |
| Knowledge-Pivot | "the Design Engineer holds the seam between the two"; and "a distinct layer even when both apply to the same string" — **retyped from Multilingual Composer**, see below | presupposed |
| Attribution format | "Always paired: `[UX Designer + Design Engineer]`." — **the actual body sentence**; the recorded quote was fabricated | presupposed |
| Execution discipline | "**Skill-before-tool is a hard gate, not a nicety** — skipping causes hard-to-debug failures" — reaches read-before-write, silent on batching | marginal |
| Proactive consultation | "flag when a choice … is likely to move a Core Web Vital **before it ships, not after a Lighthouse run catches it**"; with "Active role: detect the drift, not just document it after the fact" | marginal |

***The fourth confirmed `###`-weld, predicted and then found.*** *`Attribution format` was evidenced as
"Handoff signal `[Design Engineer — done]`". `### Handoff signal` is a heading on one line; the body
starts on the next. A literal grep for the recorded string returns **zero**. Four instances now —
UX Designer, Content Designer, Software Engineer, Design Engineer — and each was found only because someone was asked to
check character-for-character. **The sweep debt is the largest single item left on this map.***

***Two of six recorded edges were name-adjacency, and both had survived because the chair's own
vocabulary shadows the vertex names.*** *`Independent Verification` on **"cross-check"** — but the
vertex is the invariant-3 mechanism, *spawn a real subagent because personas share a blind spot*; a
second tool call against a different data source is not independence. And `Multilingual Composer` on
**"FR/EN" / "locale"** — but that sentence's obligation is a **domain boundary between two chairs**,
not a language mode. Retyped to Knowledge-Pivot, the same shape as the Software Architect's.*

***The under-mapping here was the opposite of the UX Designer's.*** *Six recorded against eight earned on
a **9,850-character** file — the largest in the repo — and on the principle side, five further edges
went unrecorded while two of the three present were defective.*

***One edge seen and refused, recorded so a later pass does not "discover" it.*** *`Delegation Brief`:
the chair-spec block instantiates all four of its parts — what to read first, what to hand back,
what to never do, the role. **That is structural inference with no body-text quote**, and ruling (d)
bars it. Refused deliberately, not missed.*

### Accessibility Specialist — 6

| Protocol | Quoted warrant |
|---|---|
| Instrument families | "Woodwinds with QA Engineer. Accessibility Specialist + QA Engineer = quality gate (standards + testing)." |
| Independent Verification | "state no criterion number or ratio without verifying it this session — look the number up (web-fetch w3.org/TR/WCAG22), *compute* contrast arithmetically, or say "needs verification."" |
| Canonical duets | "Accessibility Specialist + QA Engineer = quality gate (standards + testing)." |
| Show, don't tell | "Contrast ratio = give the number (e.g. 4.52:1), not just pass/fail"; and "Always give WCAG criterion number, not just concept" |
| Effort-scaling rubric | "Never block on AAA unless contractually required"; and "Confirm against w3.org/TR/WCAG22 before citing a number in a compliance-critical context" |
| Definition of Done | "AA is the legal floor in most jurisdictions"; with "Never block on AAA unless contractually required" — the chair contributes the conformance floor to the gate, it does not own the gate |

*Five edges added 2026-08-02. The Accessibility Specialist sat at 1 while its own `## Protocol` section — five
numbered house rules — had earned nothing. Not the source-bounded failure the warrant map found:
this map's declared circle is honest, and `brain/` is out of scope on purpose. This was
judgement-bounded — the file was read, and under-read.*

*Gated on an independent review (a spawned subagent reading the two declared sources cold, without
this reasoning). It **dropped** a sixth candidate, **Minimum Duet Rule**: the "the duet is active,
not just declared" sentence lives in the **UX Designer's** entry, not the Accessibility Specialist's, and granting both
it and Canonical duets would double-count one sentence. For the same reason Canonical duets is
quoted here on the Accessibility Specialist's own file, not on the shared duet roster in `musicians.md`. It
**revised** Definition of Done, which stands only on the floor-into-the-gate reading quoted above —
the QA Engineer owns that protocol. It also rejected **Proactive consultation**, which only the
UX Designer's text declares.*

*The convention that actually holds this chair down, named by the review and left undecided here:
several protocols name the Accessibility Specialist from another chair's text. Under this map's stated direction —
"this chair's own text states, or presupposes" — those are not the Accessibility Specialist's edges. If that
convention ever changes, this chair's count roughly doubles again. The Composer's call, not this
map's.*

### Software Engineer — 9

| Protocol | Quoted warrant | Class |
|---|---|---|
| Execution discipline | "`node --check` mandatory on all JS output before handoff" | stated |
| Delegation Brief | "DELEGATION-BRIEF \| Contract per subagent: objective, output format, tools/sources, boundaries." — **wins the (c) contest against the principle** | stated |
| Spawn & load-balancing | "PARALLEL-FIT \| Parallelize only independent threads." — **wins the (c) contest against the Harmony Principle** | stated |
| Sequential handoffs | "Gate pending: `[Software Engineer → QA Engineer]`."; with "HANDOFF-PROTO \| Handoffs as first-class typed mechanisms with input filtering, not ad-hoc prompt text." | stated |
| Definition of Done | "Code passing `node --check`. One-line description. Open questions for QA Engineer."; with "Non-zero = do not deploy." — **re-evidenced**; the old quote was the Dèmos Kratos sentence | presupposed |
| Tool-failure watch | "Agents are stateful — errors compound. Tell the agent when a tool fails; retry transient faults." | presupposed |
| Lots | "Software Engineer's job is the mechanics: `git tag -a`… **only after the Software Architect's classification is stated and the Lot is fully merged — never before.**" | stated |
| Doc sharding | "Classification criteria (PATCH/MINOR/MAJOR) and the Lot-per-tag rule are the Software Architect's canonical definition … **single-sourced there to avoid the duplication that used to exist here.**" | presupposed |
| Fortissimo | "Product Owner/**Software Engineer** own the model call" — the trigger names the two chairs that size the model to the stakes | protocol-declared |

***Attribution format removed — the third confirmed fabrication, and this one is certain.*** *Its
evidence read "Handoff signal `[Software Engineer — done]` + what changed + gate status." The file has
`### Handoff signal` as a **heading** on one line and the body on the next; grep finds "Handoff
signal" exactly once, as that heading. **The string does not exist.** And even repaired, the body is
a handoff marker, not the attribution format — name-adjacency on "signal". Third instance of the
`###`-weld after the UX Designer and the Content Designer: **the sweep is no longer a recommendation, it is a
debt**, and every `###`-adjacent evidence string in both maps needs re-verifying.*

***Three inert protocols close at once.*** *`Tool-failure watch`, `Lots` and `Doc sharding` were all
on the never-declared list. Lots is named outright in this chair's own versioning sentence — "only
after … the Lot is fully merged" — and had been sitting there unread.*

***Doc sharding: taken, on its third appearance and its strongest warrant.*** *It was deferred twice —
on the Reliability Engineer and on the UX Designer — because **finding 2 declares it grounded by no chair at
all** and **finding 3 builds this map's strongest single result partly on that**. The evidence here
is different in kind: not two file subtitles read as an index, but a sentence stating that a
definition is single-sourced in one file **to avoid duplication that used to exist here**. An
independent review granted it without being told the history. **Finding 2 is now false and finding 3
is weakened; both need re-reading, and their prose is the Composer's, not this table's.***

***Three sentences were doing double duty across the two maps.*** *`DELEGATION-BRIEF`, `PARALLEL-FIT`
and "Sole deploy authority after QA Engineer passes" each warranted a protocol here and a principle
there. Ruling (c) awards all three here. Two of the three losers survive on a neighbouring sentence;
**the Harmony Principle does not** — see the sibling map.*

***An open question the review declined to answer alone.*** *This chair's anti-patterns line is one
sentence holding six items separated by `·`. Under a strict reading of (c) it yields **one** edge,
starving five genuine candidates. Whoever owns the rulings should decide whether `·`-separated list
items count as sentences. The review allocated it to Effort-scaling rubric (AP-OVERSPAWN) and said
plainly it had not assumed the answer.*

### QA Engineer — 9

| Protocol | Quoted warrant | Class |
|---|---|---|
| Definition of Done | "owns the Definition of Done." | stated |
| Independent Verification | "Never certifies what it hasn't checked — self-certification is a protocol violation, not a shortcut." | stated |
| Instrument families | "Woodwinds with Accessibility Specialist. QA Engineer + Accessibility Specialist = quality gate (testing + standards)." | stated |
| Execution discipline | "This is the Software Engineer's `node --check` equivalent for markdown: nothing certifies it automatically, so QA Engineer runs it by hand every time **a structural doc changes, not just when something looks off**" | marginal |
| Agent routing table | "ROUTER-SPLIT \| Unit-test the orchestrator's routing decisions separately" | stated |
| Unit loop | "**Before any feature reaches the Composer:** … 4. QA Engineer signs off"; "No agent bypasses this gate." — the loop's exit beat, gated | presupposed |
| Spotlighting | "**Adversarial pass** for any feature handling untrusted input… OWASP LLM Top 10 (2025): LLM01 prompt injection" | presupposed |
| Artifact pipeline | "**The QA Engineer gates the task tier** — a task isn't 'ready' until its Definition of Done is explicit." — and the *Tasks* row of its Lead chair(s) column reads "QA Engineer (DoD) + the executing domain chair" | protocol-declared |
| Opera House cycle | "6. **VERIFY** (**QA Engineer**, Reliability Engineer where runtime applies) — Compare output against the absorbed reference." | protocol-declared |

***A class column, added here first.*** *The review's sharpest structural point: these seven are not
equally warranted and the map was presenting them as if they were. **Stated** = the chair says it.
**Presupposed** = the chair's text cannot be true unless the protocol exists (an exit gate implies a
loop; adversarial tests imply a trust boundary to test). **Marginal** = the quote reaches one beat of
the protocol and not its content — Execution discipline reaches "verify before handoff" but never
the one-change-at-a-time rule, and the review said it would not have created that edge from scratch.*

***Two quote repairs, and the pattern fires.*** *Spotlighting's evidence read `Adversarial pass`
where the source reads `**Adversarial pass**` — bold stripped, so a literal grep for the map's
version returned nothing. Execution discipline's excerpt was cut right after "every time", dropping
"a structural doc changes, not just when something looks off", which made a conditional read as
unconditional. **This is the third mistranscribed warrant in five passes**, after the Accessibility Specialist's
`1.4.11` and the Agile Auditor's truncated placeholder. Three occurrences is the Agile Auditor's own
threshold: the defect is not incidental, it is how quotes were lifted into this map — by gist, from
a source that was not open. That belongs in `brain/patterns.md`.*

***Three candidates rejected, two of them mine and both by the same failure.*** *Risk-tier re-ask —
**name-adjacency**: the file escalates *testing depth* for untrusted-input features, while the
protocol is about re-asking the **Composer** for consent at a higher tier; the words "risk tier" are
shared and nothing else is. Effort-scaling rubric — **concept-adjacency**: "E2E on significant
changes" proportions effort, but the rubric fixes ensemble size and planning depth per request tier,
and QA Engineer says nothing about voices convened. Canonical duets — a convention (a) casualty: the
Software Engineer + QA Engineer duet exists only in the shared roster, and the chair's own duet claim names the
Accessibility Specialist, which is already spent on Instrument families.*

### Content Designer — 5

| Protocol | Quoted warrant | Class |
|---|---|---|
| Multilingual Composer | the Mode A/B/C table, with "Founding Composer: **Mode B** declared 2026-06-30. No further question needed unless Composer explicitly changes it." — **warrant upgraded**; it rested on a `musicians.md` paraphrase of its own doctrine | stated |
| Minimum Duet Rule | "Standing second voice on every Agile Facilitator response."; with "Implicitly present in every Agile Facilitator response." — the duet floor asserted by the chair itself | presupposed |
| Proactive consultation | "self-triggers when two adjacent chairs hand off with divergent terms **for the same concept**" — truncation repaired | presupposed |
| Attribution format | "`[Content Designer — done]` + what reviewed. Violation found: `[Content Designer ⚠]` + what and where." — **body only**; see the repair note | presupposed |
| Agent routing table | "routing every exchange through Content Designer adds a needless hop" — declares a limit on where the chair sits in the flow | marginal |

***One sentence was carrying five edges.*** *`musicians.md`'s Content Designer paragraph has five sentences.
Its fifth — the self-trigger clause — was the warrant for **Proactive consultation, Sequential
handoffs, the Interval Principle, How rules actually hold and the Composer Principle**, across both
maps. One sentence, five vertices. The one-sentence-one-edge rule that cost the UX Designer its Minimum
Duet Rule applies here five times over. Four of those edges survive on their own sentences,
re-warranted from the agent files; the fifth does not.*

***Sequential handoffs removed — it had no quote at all.*** *Its evidence field read "same
self-trigger, read as the QA Engineer → Content Designer handshake it fires on": **the map narrating its own
inference in the column reserved for the chair's words.** A new defect class, distinct from the four
mistranscriptions — not a quote lifted wrongly, but no quote attempted.*

***The fifth mistranscription, and the second of its exact kind.*** *`Attribution format` was
evidenced as "Handoff signal `[Content Designer — done]` + what reviewed." — "Handoff signal" is an `###`
heading welded onto the body beneath it, the same fabrication found on the UX Designer one pass ago.
**The sweep proposed then and not yet run would have caught this one.** Two confirmed instances now,
which is what turns a recommendation into a debt.*

***And a correction to the brief that produced this review.*** *It was told all eleven of this chair's
edges came from `musicians.md`. **Wrong: three came from the agent files.** The true shape is worse
and more specific — 7 of 11 from one shared paragraph, 5 of those from one sentence — while ~170
lines of agent text yielded 3 warrants and both files' strongest sentences (the Mode table, the
file-backed-not-memorised sentence, "Standing second voice", "Single canonical list") were passed
over for weaker paraphrases of the same doctrine. The review checked the premise it was handed
instead of building on it.*

### Product Owner — 14

| Protocol | Quoted warrant | Class |
|---|---|---|
| Effort-scaling rubric | "EFFORT-SCALING \| Explicit rules mapping query complexity → agent count (1 for facts, 2–4 for comparisons, 10+ for deep research). **Without them: 50 agents on a trivial query.**" | stated |
| Delegation Brief | "EXPLICIT-DELEGATION \| Every subtask: objective + output format + tool/source guidance + boundaries." — the four-part contract, item for item; **this sentence is the protocol's, see the ruling** | stated |
| Spawn & load-balancing | "MULTI-AGENT-FIT \| Multi-agent wins in exactly 3 cases: context pollution, parallelizable search, tool/domain specialization. **Outside these, coordination cost > benefit.**" | stated |
| Personas vs subagents | "TOKEN-ECONOMICS \| Multi-agent ≈ 3–15× token cost vs chat. Model quality beats agent count. Only high-value tasks justify it." — the vertex's own figure | stated |
| Sequential handoffs | "Hands objectives to the Content Designer to voice." | stated |
| Instrument families | "Harp with User Researcher." | stated |
| Canonical duets | "Product Owner + User Researcher = the framing layer (discovery + scope)." — the second sentence of that line, freed by trimming the one above | marginal |
| Proactive consultation | "after 2+ consecutive structural changes **in one session (new chair, new protocol, new rule) with no pause**, Product Owner names it out loud" — trigger restored | stated |
| Chair Review | "**Product Owner** — does this serve the Composer's actual objective, or is it scope creep riding the session's momentum?" | protocol-declared |
| Auditorium | "**[Product Owner — ranked]** — the same ideas re-ordered by DESCENDING impact… Product Owner normalizes the scale" — a named movement of the protocol | protocol-declared |
| Task entry | the quorum's owner of intent: step 1 fires exactly when purpose and scope are missing, which is this chair's subject | protocol-declared |
| Artifact pipeline | its own **Lead chair(s)** column: *Brief* → "Product Owner (+ User Researcher for prior art)"; *Epics* → "Software Architect + Product Owner" | protocol-declared |
| Fortissimo | "**Product Owner**/Software Engineer own the model call; if the right tier is ambiguous, present Opus vs Fable as a yes/no-style choice." | protocol-declared |
| Opera House cycle | "3. **MAP** (Agile Facilitator + User Researcher, minimum; **Product Owner** joins for leverage/constraint framing on larger venues)" | protocol-declared |

***"The thinnest chair on the floor" was an artefact of the double-spend, not of the chair.*** *Both of
its recorded principle edges rested on sentences that belong to this map. Corrected, the counts move
the other way: **5 protocols → 8**, and the principle side holds its two honestly rather than by
borrowing.*

***Two sentences were spent twice across the two maps, and ruling (c) settles both.***
*`EXPLICIT-DELEGATION` warranted the **protocol** Delegation Brief here and the **principle** of the
same name there. The protocol keeps it: the sentence is a four-item enumeration matching the
protocol item for item, while the principle is the abstract claim the sentence *instantiates* rather
than states. The **momentum sentence** warranted Proactive consultation here and Too Big Too Soon
there. The protocol keeps that one too — a numeric trigger plus an unprompted speech act is
literally this protocol, and it is how the same vertex is evidenced on the Content Designer and on User Researcher.
Too Big Too Soon does not need it and is re-evidenced on `SIMPLICITY-FIRST`.*

***The review flags its own second ruling as contestable, and it decides a vertex.*** *Weight content
over mechanism and the momentum sentence goes to Too Big Too Soon instead — at which point
**Proactive consultation dies on this chair**, because the Product Owner has no second self-trigger
sentence. Recorded rather than buried: a single allocation call, either way.*

***The sharpest miss was hiding in a line the map already quoted.*** *Sequential handoffs is
warranted by "Hands objectives to the Content Designer to voice." — **the end of the very sentence already
cited for Instrument families**. Trimming that citation to "Harp with User Researcher." freed both it and the
duet clause. Three edges were sitting in one line.*

***No mistranscriptions on this chair.*** *All seven recorded quotes check out character-for-character
— the first pass where none did. Two elisions are unmarked (Effort-scaling and Spawn each drop a
closing sentence with no ellipsis) and are restored above. **The defect here is allocation, not
transcription** — a different failure mode from the five found on the other chairs, and one no
`###`-weld sweep would catch.*

### User Researcher — 12

| Protocol | Quoted warrant |
|---|---|
| Agent routing table | under *When User Researcher is dispatched* — "Before choosing a component library or architecture pattern"; "Before writing a new protocol (prior art?)" — and its own *Brain routing triggers* section, "**Pre-commitment:** Major decision in a domain where existing solutions haven't been checked." *(Two headings unwelded 2026-08-02 by `check_map_quotes.mjs`.)* |
| Sequential handoffs | "Dispatched BEFORE major decisions, not after. Research is pre-commitment, not post-rationalization." — **re-evidenced 2026-08-02**, see below |
| Independent Verification | "Corroborate a load-bearing claim across more than one source before treating it as a finding rather than a lead."; and "a tool capability claim must be checked live this session, never recalled" |
| Exploration & Play mute | "Never a recommendation or implementation." — advise-only is the chair's defining constraint, not a mode it enters |
| Show, don't tell | "Every finding has a source. Sources without URLs are opinions." |
| Delegation Brief | "Time-boxed research question. Output: findings + options + sources."; with "one question per spike" — the spike *is* a brief: one question, bounded time, declared output shape |
| Proactive consultation | "If a major decision is about to be made without a prior spike, User Researcher flags: "Have we spiked this?"" — self-triggers unrouted, on its own authority |
| Chair Review | "**User Researcher** — is this an actually-established discipline, sourceable and nameable, or a plausible-sounding label with no real substance behind it?" | protocol-declared |
| Tool Audit | "**Who runs it: User Researcher.** This is pre-commitment research on a deployment surface, not a domain opinion" — the protocol has a section headed *Who runs it* and it names one chair | protocol-declared |
| Task entry | the quorum's researcher: step 2 is a survey of known methodologies, and findings-not-conclusions is the discipline the protocol relies on | protocol-declared |
| Artifact pipeline | its own **Lead chair(s)** column: *Brief* → "Product Owner (**+ User Researcher for prior art**)" |
| Opera House cycle | "ABSORB (Agile Facilitator + **User Researcher**, minimum)" — the actor for steps 1–3, corrected 2026-07-28 to a duet because "Minimum Duet applies to the whole cycle, including the read-only steps" |

***The one edge this map knew was wrong, fixed.*** *Sequential handoffs carried
`"Protocol 1: Pre-commitment research (User Researcher first)"` and was annotated in place as "the only edge on
this map whose evidence sits on the protocol side, not the chair's" — the convention failing to be
enforced in one spot, flagged rather than corrected. The independent review ruled it a Drop **as
evidenced** and salvageable **as an edge**: the vertex is right, the quote was the room ordering its
chairs. Re-quoted above from the chair's own first line. Re-evidence, not deletion.*

***Rejected, and worth recording.*** *Spotlighting was put to the review at both layers and dropped
at both: nothing in User Researcher's text states or presupposes it, and a protocol/principle split cannot
rescue an edge with no textual anchor on either side. **Effort-scaling rubric** was kept by the
review as its weakest and explicitly not defended hard — "time-boxed" bounds the effort but never
ties the box to the stakes, which is what the rubric is about. Dropped here on that reading.*

***A vertex the set does not have.*** *musicians.md says User Researcher **"Owns the Tool Audit"** and points
at `tool_audit.md` — an owned, named procedure with no vertex to attach to. That is the second in two
passes: `agent_accessibilityspecialist.md` names **Chair Review** twice, also absent from the 34. Two live
procedures the room runs and the vertex set cannot hold. This belongs to the wider re-inventory
(roadmap note 40), and it is now a pattern rather than an incident.*

### Software Architect — 12

| Protocol | Quoted warrant | Class |
|---|---|---|
| Roadmap cadence | "Tracks open objectives across a session and surfaces them at natural pauses" | presupposed |
| Knowledge-Pivot | "the seam between them is a shared concern" — **wins the (c) contest against the Interval Principle** | presupposed |
| Instrument families | "Brass with Software Engineer." | stated |
| Canonical duets | "Software Architect + Software Engineer = implementation structure (process + code)." — sentence 2, freed by trimming the one above | marginal |
| Exploration & Play mute | "any change to the logic that governs when the Agile Facilitator may act without waiting for the Composer **(Human-in-the-loop mechanisms — Play mute, Chair Review's confirmation gate, or any future equivalent)**" — **quote extended**; the clause that does the work had been cut one word early | stated |
| Lots | "A **Lot** (`protocols.md`) is the versioning unit: classify the Lot's net effect once, at the end, and tag once." | stated |
| Risk-tier re-ask | "a rule about *when the orchestra is allowed to act* is categorically the highest-stakes kind of change it can make"; with "get the Composer's explicit yes" on a destructive act | stated |
| Show, don't tell | "**Classification is shown, not assumed.** Before any tag: state `🏷 Classification: …`, visible to the Composer — never silently defaulted to MINOR out of habit." | presupposed |
| Doc sharding | "Software Engineer now points here; this is the one definition." | presupposed |
| Pattern ledger (fires at 3) | "it's the visibility layer that makes "patched 3+ times" (the Reset's own trigger, below) **a checked fact instead of an impression**" — *"below" restored; I had truncated inside the parenthesis without an ellipsis* | marginal |
| Artifact pipeline | its own **Lead chair(s)** column: *Plan* → "Software Architect (+ the domain chairs in play)"; *Epics* → "Software Architect + Product Owner" | protocol-declared |
| Fair copy | the protocol's own title: "Fair Copy Protocol — Documentation Safety on Rule Change (**Software Architect**)" | protocol-declared |

***Opera House cycle removed — its evidence was two words.*** *The field read `"Greenfield Reset"`.
The string is real body text, so this is **not** another welded heading; it fails on a plainer
ground: **two words naming the chair's own protocol assert no proposition at all.** And the vertex
they were attached to is the Opera House cycle (ABSORB → ORIENT → MAP → … — *enter the venue before
conducting*), which shares no content with delete-and-rebuild-at-x.0. **Not even name-adjacency: the
two names have no word in common.***

***The map under-counted this chair by half*** — 5 recorded against 10 earned. Lots, Risk-tier re-ask
and Show don't tell are each cleaner than two of the five that were already here. **`Risk-tier
re-ask` was on the inert list** and closes.

***A straight consistency gap, worth naming as such.*** *This map already grants the **Software Engineer** a
Doc sharding edge on the **mirror sentence** about this exact single-sourcing. The Software Architect's own
statement of it — "Software Engineer now points here; this is the one definition." — earned nothing. **The
same fact, read from one side and not the other.***

***Marked marginal, not asserted.*** *Pattern ledger and Canonical duets. The Pattern-ledger caveat
decides it: the vertex is sourced to `brain/patterns.md`, while the Software Architect's debt register is a
**parallel artefact, not that one**. Read as the vertex's claim it holds; read as that specific
ledger it drops. Recorded with the caveat attached rather than counted silently.*

### Reliability Engineer — 5

| Protocol | Quoted warrant |
|---|---|
| Pattern ledger | "the same 'cannot watch across sessions from memory alone' constraint that made `patterns.md` file-backed applies here too" |
| Attribution format | "**Naming guard:** always written in full — never abbreviated to "Software Engineer"" — a binding rule on how this chair is rendered wherever it is printed; a weaker warrant than the `[X — done]` signals elsewhere, and marked as such |
| Checkpoint the session | "`brain/usage_ledger.md` (**Reliability Engineer** — which triggers and chairs actually fired this session) get updated" |
| Runtime rule-adherence spot-check | the chair is in the protocol's own heading: "Runtime rule-adherence spot-check (**Reliability Engineer**, roadmap note 3, ADR-105)" |
| Opera House cycle | "6. VERIFY (QA Engineer, **Reliability Engineer** where runtime applies)" — the conditional is the scope, not the attribution |

*Reviewed 2026-08-02 by a spawned subagent reading the in-scope sources cold. It rejected five of
the six protocol candidates put to it, and the rejection is the finding.*

***The convention question, ruled and left standing.*** *The Reliability Engineer has no
`agents/agent_reliability_engineer.md`. Its whole in-scope source is one 998-character paragraph plus
three lines where the **room's shared tables** list it: the instrument-family table, the routing
keywords, the duet roster. Every existing Instrument-families, Canonical-duets and Agent-routing
edge in this map is quoted from some chair's **own** file. The review ruled the shared tables
inadmissible — the stated direction turns on authorship — and this map already enforces that thrice,
including the Accessibility Specialist note above and finding 4's own observation that being named in a table is not
an edge.*

***What follows, plainly.*** *Keep the convention and this chair stays near the floor — a fact about
a missing file, not about the chair. Change it and all 50 edges recompute: Instrument families would
go from 4 declarers to 11, Agent routing table to the 10 routed chairs, Canonical duets to about 8;
findings 1 and 4 dissolve and the headline is void. **That is the Composer's call and is not made
here.** The actual remedy is neither: write the chair its file.*

***Not "no file" — 998 characters of domain.*** *The Agile Facilitator also has no agent file and carries 6
edges, because its `musicians.md` paragraph is 1,545 characters of dense prose. The Reliability Engineer's
paragraph describes a **domain**; it rarely declares an **obligation**. That, not the missing file
alone, is what the count is measuring.*

***One candidate deliberately left undecided: Doc sharding***, on *"Holds sourced field references
(see `reliability_engineer_references.md`)"*. The review would neither assert it nor leave it unexamined,
because finding 2 declares Doc sharding grounded by **no chair at all** and finding 3 builds this
map's strongest single result partly on that. If the edge stands, that headline weakens. Deciding it
inside a chair pass would be deciding a finding sideways.

---

## Re-measured 2026-08-15 — four of the six findings have drifted

**Same sweep that re-tested `principle_chair_map.md` the same day, for the same reason: a finding is
a dated measurement, and this repo had been quoting several as standing facts.** The edge count
itself held — **81, exactly as the headings declare** — and four of the six findings built on it did
not.

| finding, as written | re-measured 2026-08-15 |
|---|---|
| **1.** *"The two thinnest chairs are the two with no agent file — and one of them is the Accessibility Specialist"* | **drifted.** The **Reliability Engineer is uniquely thinnest at 2**; the Accessibility Specialist is at 6, joint fourth. The pairing the finding rested on is gone |
| **2.** *"Scale & Effort is the empty cluster: 2 of 6 protocols grounded, 4 edges"* | **dissolved.** **5 of 7 now enacted.** It is no longer the empty cluster, and the family has a seventh protocol it did not have |
| **3.** *"Structure and Scale are the same hole, seen from two borders"* | **half gone.** Structure still grounds almost nobody — five of six, ruled a boundary this morning — but Scale filled. The symmetry the finding turned on no longer exists |
| **4.** *"Instrument families are declared by 4 chairs of 12"* | **5 of 12** — Agile Auditor, Accessibility Specialist, QA Engineer, Product Owner, Software Architect |
| **5.** *"Eleven protocols are inert on this border"* | **30 of 59.** And this one is not the finding drifting — **it is the map never being re-run against a growing roster** |
| **6.** *"Rank does not transfer between borders"* | **holds.** The Software Architect leads here at 10 and the Agile Auditor leads the other border at 10; the Reliability Engineer is 2 here and 6 there |

### The enactment pass on the 30 — run 2026-08-15, and it stopped on a rule this file made

**Asked to close finding 5 by reading what each protocol's own text says about who enacts it. Ran it.
The answer is that the pass cannot be completed under this map's own evidence rule, and that is the
finding rather than an obstacle to it.**

**Six of the thirty declare a chair in their own text:**

| protocol | chairs it names | its own words |
|---|---|---|
| **Chair Review** | Agile Auditor · User Researcher · Product Owner | *"Agile Auditor + User Researcher + Product Owner judge an addition; verdict; confirmation gate"* |
| **Tool Audit** | User Researcher | *"User Researcher verifies a new surface's real capabilities, writes the page"* |
| **Auditorium** | Product Owner | *"12 ideas with impact → Product Owner ranks descending → synthesis"* |
| **Disagreement handling** | Agile Facilitator | *"the Agile Facilitator never breaks ties"* |
| **Capacity check** | Agile Facilitator | *"the Agile Facilitator cannot read its own usage"* |
| **Task entry** | Agile Facilitator · User Researcher · Product Owner | the quorum, named in its registered source |

**And this map bars exactly that evidence.** Its declared circle says an edge must be *"a rule stated
in the chair's own text"*, and on 2026-08-02 it **withdrew the `⇐` convention** — evidence taken from
the other side of the border — with the reason recorded: *"an evidence field must quote the chair,
and the room describing a chair from outside is barred whichever document it arrives in."* Two edges
fell that day under that ruling.

**A protocol naming its chair is that same shape.** It may be a better case — a protocol is the
roster's own definition of an act, not a third party's description — but **deciding that is
re-opening a convention this file closed with a stated reason, and a pass does not get to do that.**

**The other twenty-four have evidence on neither side.** Their chairs' files predate them; their own
text names no chair. Nothing is being withheld by judgement here — there is nothing to quote.

**So the pass produced no edges, and the count stands at 29 of 59.** What it produced instead is one
ruling, narrow enough to answer in a word:

> **Is a protocol naming its own enacting chair admissible evidence on this border?**
> **Yes** → six edges, and the `⇐` withdrawal is amended rather than ignored.
> **No** → the 24 and the 6 are one problem, and it is solved by writing chairs' files, which is
> authorship.

**Either answer is progress; the silence is not.** The count has been rising every time a protocol is
registered, and it will keep rising under whichever rule holds.

### The second enactment pass — run 2026-08-16, and the first pass had been reading the wrong text

**The first pass reported six of thirty. Re-run against the protocols' defining sources, the answer
is eleven of the twenty-two remaining — and the reason for the gap is not judgement, it is that the
first pass never opened those files.**

Its evidence column quoted `protocols_mandala_source.md`'s **summary column** — the one-line gloss the
registry carries for each protocol. Compare `Chair Review`: the pass quoted *"Agile Auditor + User Researcher +
Product Owner judge an addition; verdict; confirmation gate"*, which is the registry's summary verbatim.
A summary line is written to fit a table cell, so it names a chair only when the chair is the whole
point. **The defining text names chairs far more often, and it is the text the declared circle
actually asks for.**

**And the pointers into it were stale.** `Runtime rule-adherence spot-check` recorded
`protocols.md:140`; the real heading is `:146`, and it reads *"Runtime rule-adherence spot-check
(**Reliability Engineer**, roadmap note 3, ADR-105)"*. The attribution was in the title all along, six lines
below where every page was pointing. Seventeen pointers had drifted the same way; they are re-anchored,
and `definedat-points-at-its-protocol` now holds them.

**Ten edges, over four protocols, each meeting both of the Composer's conditions** — the protocol
declares its own enacting chairs, in its own words, positively; and each has at least two:

| protocol | chairs it declares | where it declares them |
|---|---|---|
| **Artifact pipeline** | Product Owner · User Researcher · Software Architect · QA Engineer | a **Lead chair(s)** column, one chair per stage — the strongest form this evidence class takes |
| **Fortissimo** | Product Owner · Software Engineer | *"Product Owner/Software Engineer own the model call"* |
| **Fair copy** | Software Architect · Agile Auditor | its own title, *"(Software Architect)"*, and *"This is the Agile Auditor's surface-check, made mandatory"* |
| **Checkpoint the session** | Agile Auditor · Reliability Engineer | each named beside the file it writes — `patterns.md` (Agile Auditor), `usage_ledger.md` (Reliability Engineer) |

```text
81 -> 91 -> 101 edges · 29 -> 33 -> 37 covered · 30 -> 26 -> 22 inert
```

**Reliability Engineer leaves 2 for the first time** — the thinnest chair on this border since it was drawn.

#### Three protocols name exactly one chair — ruled 2026-08-16, and emitted

Each is strong evidence, and each fails only his *"at least two chairs"* constraint:

| protocol | the one chair | its own words |
|---|---|---|
| **Runtime rule-adherence spot-check** | Reliability Engineer | the chair is in the heading: *"(Reliability Engineer, roadmap note 3, ADR-105)"* |
| **THE WHIP** | Agile Facilitator | *"The Agile Facilitator holds a checklist of universal rules."* |
| **Rule 0 gate** | Agile Facilitator | *"does this have a single correct answer that I (the Agile Facilitator) can find by looking?"* |

**The Composer ruled it a guard, not a rule of this border** (2026-08-16): *"at least two chairs"*
applied to six edges emitted at once, not to the enactment relation itself. **So all three are
emitted**, on the same terms as the four above — the protocol's own text, positively, naming its
own enacting chair. Single-chair enactment is a legitimate shape here; what stays barred is
*inventing* a second chair to reach a count, which is the thing his own "not sure" caught last time.

#### The twenty-two that remain are four different things, not one backlog

- **Eleven are Session & Interface triggers**, and `triggers.md` opens by saying who fires them:
  *"All chat-typed. ... the Composer opened it; only the Composer closes it."* A trigger is entered at
  the door. Whether that makes them **a boundary rather than a gap** — the shape `scale` took on the
  other border — is a ruling, not a pass, and it is not taken here. (`Solo / Dismiss` is the only one
  that names a chair at all, and only to exclude it: *"no Agile Facilitator synthesis layered on top."*)
- **Three are defined in `.mjs` hooks**, not prose: `Usage ledger`, `Session-start digest`,
  `Post-edit skill budget`. Their enactor is a script. Same question, different answer available.
- **Two are defined by a whole file with no line anchor** — `Declared-set check`, `Opera House cycle` —
  so a chair-name scan reads the entire document and returns everything in it. **Not measured**, rather
  than measured empty; the honest state until they carry an anchor.
- **Three name exactly one chair** (above, and the Composer's), and the last three — `Request quality
  check`, `Button gate`, `Disagreement handling` — name **no chair their own text can offer**:
  the first two mention none, and the third was ruled last pass.

### Finding 5 is the one that matters, and it is not a drift

**This border covers 29 of 59 protocols.** The other 30 have no chair enacting them — and reading the
list, they are almost entirely the protocols registered *after this map was written on 2026-08-02*:
the thirteen of Session & Interface, the Quality & Verification additions, `Declared-set check`,
`Task entry`. **The map is not wrong. It has never been asked the question again.**

That is the mirror of what closed this week on the other two borders. Every protocol now carries a
principle; **not every protocol carries a chair.** The next pass on this border is the same work the
Session & Interface warranting was — reading what each protocol's own text already says about who
enacts it — and it is a pass, not a ruling.

**`scripts/check_ensemble.mjs` now holds this border's shape as a baseline too**, so the next drift
speaks rather than waiting for someone to re-read a file written three weeks earlier.

## The door — the fifteen protocols the Composer enters

**Ruled by the Composer, 2026-08-16, on the question of whether the eleven uncovered triggers were a
gap or a boundary: *"Split — the door vs the work. Firing is yours; what runs after is a chair's."***

**The evidence is the trigger file's own first line.** `triggers.md` opens: *"All chat-typed. None
persist across sessions unless noted. **Never auto-close a persistent state — the Composer opened it;
only the Composer closes it.**"* Fifteen protocols are defined in that file, and every one of them is
entered by the Composer typing it. No chair opens any of them.

**So this border has two relations, not one:**

| relation | who | what it says |
|---|---|---|
| **door** | the Composer | the protocol is entered from outside the twelve. Not an edge — the Composer has no node, deliberately, and that is the same fact that let `scale` be a boundary on the other border |
| **`enacts`** | a chair | what runs once the door is open. An ordinary edge, on the ordinary evidence rule |

**Why the door is not an edge, stated plainly because the ruling asked for a second edge kind.** An
edge needs two endpoints in the graph. The roster is twelve chairs and the Composer is not among them
— he authors, they play. Giving him a node to hang an edge from would put the author inside the work,
which is the one thing the Composer Principle forbids. **So the door is a property of the protocol,
and it says the same thing an edge would have said.**

**Four of the fifteen already show the split working**, which is the check on the model rather than an
argument for it: you type `Auditorium`, and the Product Owner ranks and the Agile Facilitator synthesizes —
door his, work theirs, both already recorded. Same for `Fortissimo`, `Play mute / Play loud` and
`Checkpoint the session`.

| protocol | door | work — the chair that runs it |
|---|---|---|
| Fortissimo | Composer | Product Owner · Software Engineer |
| Checkpoint the session | Composer | Agile Auditor · Reliability Engineer |
| Auditorium | Composer | Product Owner · Agile Facilitator |
| Play mute / Play loud | Composer | recorded |
| Solo / Dismiss | Composer | **unwritten** |
| Program | Composer | **unwritten** |
| Open score / Close score | Composer | **unwritten** |
| Make it so | Composer | **unwritten** |
| Tell | Composer | **unwritten** |
| Help | Composer | **unwritten** |
| Composer Key | Composer | **unwritten** |
| Change Score Key | Composer | **unwritten** |
| Time methods (Ambient / None) | Composer | **unwritten** |
| Metronome | Composer | **unwritten** |
| Capacity check | Composer | **unwritten** |

**What this changes is what `inert` means.** Before the ruling, eleven triggers read as *no chair, no
explanation* — indistinguishable from a protocol nobody has thought about. After it they read as
**the door is accounted for and the work is unwritten**, which is a smaller and more honest debt, and
one only the Composer can settle: naming which chair runs `Tell` is authorship, not a pass. The
remaining eight are the ones with neither half.

**`Solo / Dismiss` is the sharpest case for the split.** Its own text says *"no second voice, no
Agile Facilitator synthesis layered on top"* — the one sentence in the trigger file that names a chair, and it
names one to **exclude** it. Under a single relation that reads as evidence of nothing. Under the
split it is exact: the door is the Composer's, and the work is a named chair playing without the
Agile Facilitator over it.

## The anchor that was hiding a protocol

**`Opera House cycle` was inert because its `definedAt` was a whole file.** It read
`principles_candidate.md` — 900 lines holding every principle in the corpus — so a chair scan over
it returned every chair mentioned anywhere and meant nothing. **Not measured, rather than measured
empty**, which is why the second pass declined to judge it.

Anchored to `:344`, it turns out to be the **strongest self-declaration on this border after the
artifact pipeline** — a chair named per step, in the protocol's own procedure:

| step | chairs it names |
|---|---|
| ABSORB · ORIENT | Agile Facilitator + User Researcher, minimum |
| MAP | Agile Facilitator + User Researcher; **Product Owner** joins for leverage framing on larger venues |
| FLOW | *Composer directs*; Agile Facilitator executes the chosen shape |
| EXECUTE | whichever chairs the task needs — a variable, so no edge |
| VERIFY | QA Engineer, Reliability Engineer where runtime applies |
| LEARN | Agile Facilitator + *Composer* |

**Five edges.** And note what steps 4 and 7 do: they name the **Composer**, inside the cycle, at the
two moments where direction and learning happen. **That is the door-and-work split arriving from a
different file**, written months before the ruling and by a different hand — the cycle had always
held both halves, and the border had no way to record one of them.

*The lesson is about anchors, not about this protocol: a pointer that names a file instead of a line
does not fail loudly. It returns everything, which reads as noise, and the thing it was hiding waits.*

## The hooks name chairs, and none of them is an enactor

**Three of the seven protocols with neither half are defined in `.mjs` hook code, not prose:
`Usage ledger`, `Session-start digest`, `Post-edit skill budget`. Their sources were read directly.**

Two of the five hook files mention a chair. **Neither mention is an enactment, and the difference is
worth stating because both would pass a keyword scan:**

| file | what it says | why it is not an edge |
|---|---|---|
| `usage-count-prompt.mjs:8` | *"Agile Facilitator hand-incrementing `usage_ledger.md` at checkpoint from memory"* | the **defect the hook replaces**. A chair named as the thing being automated away is the opposite of a chair enacting |
| `usage-count-response.mjs:5` | *"Fires when the Agile Facilitator finishes a response"* | the Agile Facilitator is the **subject being measured**, not the actor. The hook runs *on* it, not *by* it |
| `tool-failure-watch.mjs:4` | *"WHY THIS EXISTS — the Agile Auditor cannot do this job"* | explicit, and negative — the same shape as `Solo / Dismiss` |

`post-edit-skill-budget.mjs` and `session-start-digest.mjs` name no chair at all.

**So the answer is not "no evidence found" but "the evidence says something else": a hook's enactor is
the runtime.** It fires whether or not anyone is in the room, which is the whole reason it exists —
each of these three replaces a discipline a chair kept failing to keep by hand.

**Which raises the same question the door answered, one step over.** `entry: "Composer"` records a
protocol opened from outside the twelve because the Composer types it. These three are also opened
from outside the twelve — by the machine, on a trigger nobody types. **Whether that is a second value
of `entry` or a different thing entirely is the Composer's**, and it is not taken here. What the pass
establishes is only that it is *not* a missing chair: reading the code is what the border asks for,
the code was read, and it names no one to hold them.

## Findings

**1. The two thinnest chairs are the two with no agent file — and one of them is the Accessibility Specialist.**
Reliability Engineer (1 edge) has no `agents/agent_reliability_engineer.md`; the Principle–Chair map found the
same for the Agile Facilitator. But the **Accessibility Specialist has a file and still lands on 1 edge**, and that one edge
is only its instrument-family declaration. The Accessibility Specialist is *named as a target* by other chairs —
the UX Designer self-triggers an Accessibility Specialist check, the QA Engineer pairs with it on the quality gate — while
declaring no protocol of its own. On this border the accessibility chair is almost purely passive:
other chairs route to it; it routes to nothing.

**2. Scale & Effort is the empty cluster: 2 of 6 protocols grounded, 4 edges.**
Doc sharding, Lots, Unit loop and Artifact pipeline ground no chair at all. Effort-scaling and
Spawn & load-balancing carry all four edges, and three of them belong to Product Owner and Software Engineer.
The protocols that govern *how much work to do* are declared almost nowhere by the people doing it.

**3. Structure and Scale are the same hole, seen from two borders.**
The Principle–Chair map found **Structure** the weakest principle cluster (2 of 6 grounded, 3 edges).
This map finds **Scale & Effort** the weakest protocol cluster (2 of 6, 4 edges). Both clusters are
about size, recursion, and decomposition — the Fractal Loop and the Nested Opera Houses on the Yin
side; sharding, lots and unit loops on the Yang side. Two independent borders, drawn from different
sources, put the crack in the same place. That is the first cross-border corroboration the triangle
has produced, and it is the strongest single result of this pass.

**4. Instrument families are declared by 4 chairs of 12.**
Accessibility Specialist, Software Architect, QA Engineer, Product Owner — Woodwinds, Brass, Woodwinds, Harp. Eight chairs
(Agile Facilitator, Agile Auditor, UX Designer, Design Engineer, Software Engineer, Content Designer, User Researcher, Reliability Engineer)
declare none. The UX Designer/Design Engineer binome is declared as a *canonical duet* but not as a
family; User Researcher is named inside Product Owner's Harp line but does not name it back. The family layer
exists as a half-populated table.

**5. Eleven protocols are inert on this border.**
Runtime spot-check, Tool-failure watch, Request quality check, Risk-tier re-ask, Doc sharding, Lots,
Unit loop, Artifact pipeline, Personas vs subagents, Disagreement handling, Show don't tell.
Several of these are *Agile Facilitator-level* protocols with no Agile Facilitator file to declare them — the same
missing-file effect as finding 1, so their inertness is **not** evidence they are unused. The ones
that cannot be explained that way are the four Scale & Effort protocols and Disagreement handling:
those have owners who wrote files, and still nobody claims them.

**6. Rank does not transfer between borders.**
Product Owner is the *thinnest* chair on principles (2) and mid-pack here (5). Agile Auditor is the
*thickest* on principles (6) and near-bottom here (3). A chair heavy in *why* can be light in *how*,
and the reverse. Any composite that averages the two borders into one node weight will erase exactly
this, which is the argument for keeping the three borders viewable separately.

---

## Method

Same two-stage method as the other two borders: **command finds candidates; judgement types them.**

1. `scratchpad/scan2.mjs` — for each of the 34 protocols, a list of distinctive terms; for each
   chair, its `musicians.md` paragraph plus its `agents/agent_*.md` files. Every term hit printed
   with its surrounding sentence. ~60 candidates.
2. Every candidate read and typed by hand as a warrant or a rejection. No candidate accepted without
   a sentence that could be quoted.
3. Chair-to-instrument-family edges verified separately by `grep -l "Instrument family" agents/*.md`
   rather than by term match, because "brass" and "harp" appear as ordinary substrings.

### Rejections and why

| Candidate | Rejected because |
|---|---|
| Instrument families → Agile Auditor, Agile Facilitator, Software Engineer, Content Designer, User Researcher | the term matched detection criteria and prose, not a family declaration; `grep -l` confirms only 4 chairs declare one |
| Agent routing table → Agile Auditor | "routing" in the sense of the Agile Auditor's own domain, not the table |
| Opera House cycle → Agile Auditor | "reset" as an ordinary verb |
| Show don't tell → Agile Auditor, UX Designer, Software Engineer | "presents options" is the Composer Principle (a principle, already on the other border); "click"/"rendered" appeared inside a BDD scenario |
| Execution discipline → UX Designer | same sentence already typed as Proactive consultation; one sentence, one edge, unless it states two distinct obligations |
| Sequential handoffs → Design Engineer | the `[— done]` signal alone; no chair-to-chair arrow, unlike UX Designer's `[UX Designer → Accessibility Specialist]` |
| Disagreement handling → Software Engineer, Product Owner | "conflicting outputs" inside an anti-pattern list, describing a failure not invoking the protocol |
| Roadmap cadence → Software Engineer, Reliability Engineer | release cadence and a roadmap *note number* — neither is the open-objectives protocol |
| Exploration & Play mute → QA Engineer | "exploratory testing" is a test technique; the protocol is the Composer's advising mode |
| Sequential handoffs → QA Engineer | "grep for cross-references" is a consistency pass, not a handoff |
| Spawn & load-balancing → several | "parallel"/"subagent" inside reference tables quoting other chairs |
| Risk-tier re-ask → several | "irreversib" appearing in deletion prose, which is the *principle* side |

### Counts that disagree

The **81**-edge total is derived twice — summed by chair (6+8+8+5+7+5+8+10+9+7+6+2 = 81) and summed by cluster (21+11+26+7+6+10 = 81). They agree, and both were re-derived from the live data in
`project/qa/mandala-review.html` rather than re-added by eye. **This number is computed from the
tables in this file and nowhere else.** If an edge is added below, this line and both totals must be
recomputed — nothing checks it automatically. `project/` is outside `check_docsite_consistency.mjs`
and outside Fair copy.

***And that warning came true.*** *The line above previously read 50, derived twice and agreeing —
correctly, when written. Nine chair passes later the per-chair table said 74 and this paragraph still
said 50, with Findings 1, 5 and 6 still quoting "Reliability Engineer (1 edge)", "Agile Auditor (3)" and
"Accessibility Specialist 1 edge" against tables that now contradict them. **A total that must be recomputed by hand
is a total that goes stale**, and it did so inside the document whose subject is claims that outrun
their evidence. The findings' prose is not corrected here — that is the Composer's, and the numbers
it cites are now listed above.*

### Not decided here

- **Protocols outside the 34-vertex set.** User Researcher's **Tool Audit** and Reliability Engineer's
  **usage ledger** (`brain/usage_ledger.md`) are both owned, both file-backed, and both absent from
  the protocol vertex set fixed by `protocol_warrant_map.md`. Either the set is short by two, or
  these are instantiations rather than protocols (ADR-206). Not resolved here — resolving it would
  change a vertex set the other border depends on.
- **Whether an inert protocol is dead.** Eleven inert here; the Agile Facilitator-level ones have no file to
  declare them. Only the composite of all three borders can distinguish *unowned* from *unwritten*.
- **The arrow direction for the composite.** Named above, not chosen.
- **The Accessibility Specialist's passivity.** Whether a chair that is only ever a target is under-specified or
  correctly specified is a design question, not a mapping one. It belongs to the Composer.
