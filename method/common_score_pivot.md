---
type: Method
title: "The Common Score Pivot — shared concerns and dependency vectors"
description: "Two relation types over the same twelve chairs: undirected shared concerns, each anchored to an external standard, and directed requires-serves dependencies that a shared-concern reading cannot see"
status: draft
generated: { by: human:jkornobis, at: 2026-08-26T18:40:00+02:00 }
---

# The Common Score — Pivot Table
## 12 musicians × 11 acts = 132 connections

Last updated: 2026-08-05 (**directed dependency vectors** added as a second relation type — rule 1 requires→serves from `agents/tools/roster.md` + `register.md`, ADR-222, four absent from the concern map including `Design Engineer → Software Engineer`; rule 2 knowledge-dependency, ADR-223, seeded from the Composer's lived cases — the QA Engineer asserts E2E and holds **zero** DOM). Previously 2026-07-23 (nine cross-domain links from the reference-file derivation — roadmap note 39 resolved as a capture gap, Chair-Reviewed ADR-195; the 2026-07-02 field-audit links remain below)

**Read by row:** one musician's complete connection to all 11 fields.
**Read by column:** one field as it plays through all 12 musicians.
**Read by cell:** the specific intersection — where this musician meets this field.

Acts: I Process Methodologies · II Cognitive Science · III Systems Thinking · IV Philosophy & Ethics · V Research Methodology · VI Communication Theory · VII Design Principles · VIII Web Standards & A11y · IX Software Engineering Craft · X Tool-Specific Knowledge · XI Natural Language Processing

---

| Musician | I Process | II Cognition | III Systems | IV Philosophy | V Research | VI Communication | VII Design | VIII Web/A11y | IX Craft | X Tools | XI NLP |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Agile Facilitator** | Define phase always-on; routing = learning sprint | Mode table = cognitive load management | Orchestra IS a system; routing = feedback loop | Episteme before action; routes on knowledge not belief | Every routing decision = micro-experiment | Shannon's model: Agile Facilitator = sender, noise = overshoot | CRAP principles in text output | Plugin accessibility IS a Agile Facilitator concern | Only merge what you understand = only route what you interpret | Plugin = two-node async system; IPC model | IS an NLP system: intent recognition (reads beneath keywords), pragmatics, discourse analysis (multi-message context). Mode table = sentiment/intent classifier. |
| **Agile Auditor** | Watches DT loop; fires on skipped Test phase × 3 | 3-recurrence threshold = working memory consolidation | Detects systemic drift; IS a feedback loop | Empiricism applied to process; inductive, not deductive | Empirical observer; detection criteria built inductively | One clear signal per pattern; silence IS communication | Gestalt continuity: connects the dots before firing | Accessibility violations are process patterns | Code review IS Agile Auditor-like: spots patterns author can't | Review cycle patterns: approval bottlenecks, feedback loops, designer friction | 3-recurrence threshold = temporal pattern recognition — same process NLP uses to detect repeated language failures. Fires when the pattern consolidates. |
| **UX Designer** | HMW is the design brief; wireframe = hypothesis | NNG IS applied cognitive science; Gestalt every layout | Atomic Design IS systems thinking; FILL cascade = system property | Composer judges visual; authority = Composer's eye | Design hypotheses tested through observation | Information architecture IS UX Designer's structural discipline | CRAP daily check; Atomic Design structures library | Layer naming IS semantic HTML; hierarchy IS DOM | Figma branch IS design branch; PR = design critique | Figma Plugin API = canvas as node tree | Information scent (NNG) IS applied NLP. Layer naming IS semantic markup — the DOM's information structure mirrors language structure. |
| **Design Engineer** | Token tiers = SRP: global → alias → component | Reduced-motion + variable fonts = respecting cognitive/vestibular limits | Token pipeline (Figma → Style Dictionary → platforms) IS a system | Silent drift = a broken contract nobody signed off on | "Dev Mode matches code" is falsifiable, not assumed | Code Connect = encoder/decoder between two audiences reading one component | CRAP's Repetition only holds system-wide if tokens enforce it | `prefers-reduced-motion`, focus, container queries verified in code, not just specced | Storybook stories = living spec, versioned with the code | The Figma MCP operational bridge IS this chair's instrument here | Semantic token naming = controlled vocabulary, applied to tokens not words |
| **Accessibility Specialist** | Empathize includes disabled users; incomplete without it | WCAG criteria derive from cognitive + perceptual science | Accessibility IS systems thinking; chain has failure at every link | WCAG IS codified ethics — human dignity in verifiable criteria | Primary sources are disabled users; WCAG = compressed research | Semantic HTML IS information architecture; alt text = translation | Figure-ground IS the basis for 1.4.3 contrast requirements | WCAG 2.2 entirely owned; POUR principles are the constitution | Accessibility regressions are engineering problems | Figma accessibility panel = design-to-code handoff layer | WCAG plain language guidelines ARE linguistic accessibility. Alt text IS semantic translation — converting visual information to linguistic representation. |
| **Software Engineer** | Prototype = build smallest testable thing | Clean Code 'small functions' IS cognitive load management | Software architecture = systems design; plugin = two-node system | Professional ethics: node --check IS the professional commitment | Debugging IS scientific method: one variable, always | API contract IS the communication protocol between components | Design principles of code: CRAP applied to software | Browser accessibility tree is a parallel DOM | Semver, CHANGELOG, Conventional Commits — core craft | Figma Plugin API: setSharedPluginData, saveVersionHistoryAsync | Code IS formal language with grammar (syntax), semantics (meaning), pragmatics (intent). Meaningful names are semantic tags. Compiler IS NLP for formal language. |
| **QA Engineer** | BDD scenarios = DT prototype artifacts | TDD Red-Green-Refactor mirrors the learning cycle | Testing pyramid IS systems thinking — layers of coverage | DoD is a social contract; QA Engineer owns the team's epistemology | BDD scenarios = research instruments; falsifiability required | BDD Given-When-Then IS shared information architecture | Testing pyramid IS visual hierarchy applied to verification | Every WCAG criterion IS a testable acceptance criterion | Code review = testing by another means; no test = no merge | Plugin testing: Node.js + jsdom; designed from first principles | BDD Given/When/Then IS a grammar for specifying behavior. A falsifiable scenario = a statement with truth conditions. Scenario without a Then clause = not a test. |
| **Content Designer** | POV before copy; copy follows the insight | Inverted pyramid = primacy effect; scaffolding = ZPD | Information systems: message → channel → receiver → feedback | Language IS governance; naming shapes conceptual frames | Copy testing IS user research; label = tested claim | Inverted pyramid + hierarchy + information nodes | Typography IS copy's design system; good copy is designed | Plain language IS a web standard; clarity = accessibility | README, commit message, PR description — all copy | Plugin copy: 280px panel, inside Figma, competing vocabulary | Entire domain IS applied linguistics. Vocabulary bridge = interlingual translation. Prohibited vocabulary list = controlled vocabulary. Language IS governance. |
| **Product Owner** | Designer vocabulary, not git vocabulary, in end-user copy | MVP = Hick's Law at product scale | Product dev = intervention in complex adaptive system | Strategy is applied ethics: defines what NOT to build | Business assumptions workshop = applied epistemology | Roadmap IS an information design artifact | Business canvas uses CRAP; scope doc uses contrast | Web standards stability IS a scope constraint | Technical debt IS strategy; semver communicates intent | Plugin platform is constraint AND channel simultaneously | Requirements elicitation IS NLP: converting vague stakeholder language into precise acceptance criteria. HMW IS a pragmatic transformation — complaint → actionable problem. |
| **User Researcher** | Empathize IS User Researcher's primary methodology | Riskiest assumption first = bias-resistant research | Research = system mapping before commitment | Confirmation bias is the primary research failure; falsifiability | PRIMARY vs. SECONDARY sources; never substitute | Research output IS information design; raw data ≠ information | Research reports follow design principles (CRAP) | Tool-specific research: WCAG 2.2 deltas, ARIA browser gaps | Prior art research IS software engineering best practice | Tool landscape research before implementation commitment | Discourse analysis: what users say vs. what they mean. Primary research = reading the pragmatics layer, not just explicit statements. |
| **Software Architect** | Build to think; protocols are DT prototypes of process | Greenfield Reset = extraneous load elimination | Conway's Law: architecture mirrors communication structure | Open-source governance IS Dèmos Kratos in practice | Every retrospective IS a research session on team behavior | Architecture docs = highest-stakes information design | System diagrams ARE design artifacts; CRAP applies | Progressive enhancement IS systems architecture for web | Git workflow design IS organizational design (Conway's Law) | *(this cell held a project's v1 scope — moved to `project/`, 2026-08-22)* | Conway's Law IS an NLP observation: the language a team uses to communicate determines the architecture they produce. Decision logs preserve semantic context. |
| **Reliability Engineer** | GitOps = Git as source of truth; delivery handed off from Software Architect at the runtime line | On-call cognitive load; blameless postmortem removes fear from failure | SRE IS systems thinking — SLOs, error budgets, feedback loops on the live system | Blameless culture = ethics of failure; error budget removes politics from ship-vs-harden | Postmortems ARE empirical incident research | Incident comms, status pages, runbooks = information design under pressure | Observability dashboards ARE data-viz design | Uptime & latency ARE an accessibility floor — a down or slow service is unusable | IaC, containers, GitOps — the runtime craft, kin to Software Engineer | K8s, Terraform/OpenTofu, OpenTelemetry, Argo/Flux, Backstage, Sigstore | Observability signals parsed like a language; alerts = anomaly detection in a signal stream |

---

*Each cell compressed to the essential phrase. Full connections: see common_score_matrix.md*

---

## Cross-domain connections — 2026 field audit (per Knowledge-Pivot Update Protocol)

The independent field audits (see each musician's `*_references.md`) surfaced knowledge that **connects musicians**, not just enriches one field. These are the new musician ↔ musician shared concerns — the cross-domain links the new knowledge created:

| Shared concern | Connects | Act | Refs | Citation |
|---|---|---|---|---|
| MAST failure taxonomy | Agile Facilitator ↔ Agile Auditor | III Systems | Agile Facilitator / Agile Auditor | <https://arxiv.org/abs/2503.13657> |
| Verification ≠ agreement (LLM-as-judge bias) | Agile Facilitator ↔ Agile Auditor ↔ QA Engineer | XI NLP / V Research | Agile Facilitator / Agile Auditor / QA Engineer | <https://www.anthropic.com/research/reasoning-models-dont-say-think> |
| Cognitive accessibility (COGA) | Accessibility Specialist ↔ Content Designer | II Cognition / VIII Web-A11y | Accessibility Specialist / Content Designer | <https://www.w3.org/TR/coga-usable/> |
| Accessibility designed-in (WCAG 2.2 / APCA) | Accessibility Specialist ↔ UX Designer ↔ Content Designer | VII Design / VIII Web-A11y | Accessibility Specialist / UX Designer / Content Designer | <https://www.w3.org/TR/WCAG22/> |
| Plain language as accessibility (ISO 24495) | Content Designer ↔ Accessibility Specialist | VI Communication | Content Designer / Accessibility Specialist | <https://www.iso.org/standard/78907.html> |
| LLM security & adversarial testing (OWASP) | Software Engineer ↔ QA Engineer ↔ User Researcher | IX Craft | Software Engineer / QA Engineer / User Researcher | <https://genai.owasp.org/llm-top-10/> |
| Supply-chain integrity (SLSA / SBOM / provenance) | Software Engineer ↔ Software Architect | IX Craft / I Process | Software Engineer / Software Architect | <https://slsa.dev/> |
| Design tokens & design-to-code (Code Connect) | UX Designer ↔ Design Engineer | VII Design / X Tools | UX Designer / design_softwareengineer | <https://www.designtokens.org/tr/drafts/format/> |
| Evals for non-deterministic systems | QA Engineer ↔ Agile Auditor | IX Craft / III Systems | QA Engineer / Agile Auditor | <https://istqb.org/wp-content/uploads/2026/05/ISTQB-_CTAI_Syllabus_v2.0_Release.pdf> |
| Citation faithfulness / groundedness | User Researcher ↔ Agile Facilitator ↔ QA Engineer | V Research | User Researcher / Agile Facilitator / QA Engineer | <https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/> |
| Govern AI-generated code (DORA 2025) | Software Architect ↔ Software Engineer ↔ QA Engineer | I Process | Software Architect / Software Engineer / QA Engineer | <https://agents.md/> |
| Outcomes over outputs / de-risk before build | Product Owner ↔ User Researcher | IV Philosophy / V Research | Product Owner / User Researcher |  |
| Code that must run in production | Reliability Engineer ↔ Software Engineer | IX Craft | reliability_engineer / Software Engineer |  |
| Delivery → runtime handoff (GitOps, DORA) | Reliability Engineer ↔ Software Architect | I Process | reliability_engineer / Software Architect | <https://opengitops.dev/> |
| Runtime supply-chain verification (Sigstore) | Reliability Engineer ↔ Software Engineer ↔ Software Architect | IX Craft | reliability_engineer / Software Engineer / Software Architect | <https://www.sigstore.dev/> |
| Uptime & latency as an accessibility floor | Reliability Engineer ↔ Accessibility Specialist | VIII Web-A11y | reliability_engineer / Accessibility Specialist | <https://sre.google/workbook/implementing-slos/> |
| Observability dashboards (data-viz) | Reliability Engineer ↔ UX Designer | VII Design | reliability_engineer / UX Designer | <https://opentelemetry.io/docs/> |
| Observability signals ≈ anomaly detection | Reliability Engineer ↔ Agile Auditor | III Systems / XI NLP | reliability_engineer / Agile Auditor | <https://docs.evidentlyai.com/> |
| Semantic naming & i18n as governed vocabulary | Design Engineer ↔ Content Designer | VI Communication / XI NLP | design_softwareengineer / Content Designer |  |
| Accessibility shifted left into components | Design Engineer ↔ Accessibility Specialist | VIII Web-A11y / X Tools | design_softwareengineer / Accessibility Specialist |  |
| Automated a11y coverage ceiling → manual test scope | Accessibility Specialist ↔ QA Engineer | VIII Web-A11y / IX Craft | Accessibility Specialist / QA Engineer |  |
| Accessibility law as a scope constraint (EAA / EN 301 549) | Product Owner ↔ Accessibility Specialist | IV Philosophy / VIII Web-A11y | Product Owner / Accessibility Specialist |  |
| Falsifiability — assumption tests & BDD scenarios | Product Owner ↔ QA Engineer | V Research | Product Owner / QA Engineer |  |
| Wireframe as hypothesis — opportunity tree → design brief | Product Owner ↔ UX Designer | I Process / VII Design | Product Owner / UX Designer |  |
| Conway's Law — team language shapes architecture | Content Designer ↔ Software Architect | III Systems / XI NLP | Content Designer / Software Architect |  |
| Component contract as executable spec | Design Engineer ↔ QA Engineer | IX Craft / X Tools | design_softwareengineer / QA Engineer |  |
| Risk vs. scope before a structural decision | Product Owner ↔ Software Architect | — *(act unassigned — see the recovery note below)* | Product Owner / Software Architect |  |
| Core Web Vitals as a field-measured runtime signal *(provisional — one-sided evidence)* | Design Engineer ↔ Reliability Engineer | IX Craft / III Systems | design_softwareengineer / reliability_engineer |  |

**Unison restored, 2026-08-13 — this table is the one home, and it had been the smallest copy.**
The same list lived in three places: here, in `docs-site/src/components/PivotGraph.astro` (28 rows),
and in the published table on `docs/pivot-graph.mdx` (19 rows). The build reported *"19 shared
concerns absent from the published table"*, and reading all three showed that count was mostly wrong:
**ten were name drift** — the same concern with the standard's name in brackets on this side only
(`(OWASP)`, `(ISO 24495)`, `(Code Connect)`, `(DORA 2025)`, `(GitOps, DORA)`, `(WCAG 2.2 / APCA)`,
`(LLM-as-judge bias)`, `(SLSA / SBOM / provenance)`, `(ISTQB CT-AI v2.0)`, `signals ≈` vs `≈`) —
**eight are genuinely unpublished**, and one is the provisional row, correctly held back.

**One concern was missing from this file and present in both copies downstream:** *Risk vs. scope
before a structural decision* — Product Owner ↔ Software Architect. It is restored above with the citation the
published page carried. **Its Act is left unassigned rather than guessed**: the two copies that held
it recorded no act, and inventing one here would put a fact in the source that no reader wrote.

**The Citation column is new, and it inverts a dependency that was backwards.** The URLs existed only
on the published page, so `build_grand_ensemble.mjs` was *parsing the rendered documentation* to find
the citation for a source-of-truth row. The source now holds them and the page reads from the
dataset. Twelve rows are blank — the eight unpublished concerns, the provisional one, and the three
de-cited below — and the build counts them aloud instead of implying they are cited.

**De-cited 2026-08-26 — three self-citations left a column of external anchors.** *Outcomes over
outputs*, *Code that must run in production* and *Risk vs. scope before a structural decision*
carried links to `agents/agent_productowner.md`, `agents/agent_softwareengineer.md` and
`brain/orchestra_decisions_log.md` on a private mirror. **The Citation column's contract is outside
corroboration** — W3C, ISO, OWASP, SLSA, sigstore, ISTQB, DORA — and a link to the estate's own file
is the orchestra citing itself in the one column built to keep it from doing that. **The rows stand;
only the citations go**, and a blank cell already means *no external anchor found* for nine others — twelve now, which is
the number `build_grand_ensemble.mjs` reports from the source.

**It surfaced as a boundary problem and was not one.** The three URLs were the entire hold on this
page and on `project/graph/grand_ensemble.json` — three rows and the seven strings derived from them,
with no other marker in either file. **The library is the only public repo**, so those links could
never resolve for a reader; the fix is not a mirror but the column's own rule, which they failed
before anyone asked who could open them. **Same shape as the `figma.md` split**: an exclusion that
looked principled and was file granularity. If an external source for any of the three is found, the
cell takes it.

**Dropped 2026-08-05 (ADR-237, roadmap note 41):** *Core Web Vitals as a field-measured runtime signal* — Design Engineer ↔ Reliability Engineer, the one edge ADR-195 admitted on one-sided evidence. An independent read (a real subagent, both reference files cold) returned **drop the link**, and the deciding evidence is not silence but a **recorded negative**: `reliability_engineer_references.md` carries a purpose-built *"Shared, not owned"* section, filled with exactly one row (DORA, pointing at the Software Architect) — the very shape this edge claimed — and it states at line 35 that the chair sits *"off the design→code axis by design."* The Design Engineer's own Core Web Vitals is a **pre-ship design budget**, not production telemetry; the phrase *"field-measured runtime signal"* was quotable from neither file and was the bridge doing the reaching. Dropping it costs no routing — the two chairs still meet at distance 2 through the Accessibility Specialist.

**Standing signal:** the meta/AI-facing links (MAST, LLM-as-judge bias, evals, citation faithfulness) are the orchestra's own invariants re-derived from the field literature — outside corroboration, not self-agreement.

---

## Dependency vectors — directed, requires → serves (added 2026-08-05, ADR-222)

**A second relation type on the same twelve nodes, and it is not a rival edge set.** Everything above is an **undirected shared concern**: two chairs care about the same thing. These are **directed dependencies**: *chair A requires a lever that serves chair B*, so A's work rests on something B's work also rests on. **"My work depends on something that serves you" is not the same statement reversed**, which is why these carry an arrow and the concerns do not.

**Derivation, mechanical and re-runnable:** for every **chair requirement** in `agents/tools/roster.md` (Yin, earned through a Chair Review), take the lever's `Serves:` line in `agents/tools/register.md` and emit `requirement-holder → each served chair`. **Only a requirement emits vectors — a `Serves:` line alone never does.** That keeps the yield tied to something already gated: three requirements produce eleven vectors, and the count grows with the roster, not with opinion.

**Why these were missing rather than merely unrecorded.** The concerns above were derived from the chairs' *reference files* — two chairs earn an edge when they **share** knowledge. A dependency exists precisely where they **don't**: the wider the gap, the more an artifact must cross it, and the less a shared-concern reading can see it. The instrument's silence was read as the territory's emptiness. (`project/chair-gap-leap-thesis.md`.)

| Vector | Via lever | In the concern map? |
|---|---|---|
| Design Engineer → Software Engineer | moves-tokens-between-design-and-code | **NEW** |
| Design Engineer → Software Architect | moves-tokens-between-design-and-code | **NEW** |
| QA Engineer → UX Designer | reads-a-running-interface | **NEW** |
| QA Engineer → Reliability Engineer | reads-a-running-interface | **NEW** |
| Design Engineer → UX Designer | moves-tokens-between-design-and-code | present |
| Accessibility Specialist → UX Designer | reads-a-running-interface | present |
| Accessibility Specialist → Design Engineer | reads-a-running-interface | present |
| Accessibility Specialist → QA Engineer | reads-a-running-interface | present |
| Accessibility Specialist → Reliability Engineer | reads-a-running-interface | present |
| QA Engineer → Accessibility Specialist | reads-a-running-interface | present |
| QA Engineer → Design Engineer | reads-a-running-interface | present |

**`Design Engineer → Software Engineer` is the case that settles the method.** That chair is defined in its own file as *"the UX Designer's technical binome, holding the seam between what the UX Designer imagines and what the Software Engineer builds."* The concern map holds `UX Designer ↔ Design Engineer` — the binome half — and **nothing to the Software Engineer.** One side of a two-sided definition, missing for as long as the map has existed, and visible the moment a requirement was placed. `QA Engineer → Reliability Engineer` is the same shape: the QA Engineer cannot close its gate without a lever that serves the running system.

**Seven of eleven coincide with an existing concern edge.** That is the control: a derivation that agreed with nothing would be measuring itself.

### Rule 2 — knowledge dependency (added 2026-08-05, ADR-223)

**Rule 1 above emits a vector when a chair *requires a lever*. Rule 2 emits one when a chair's *stated practice rests on knowledge another chair holds*.** Same arrow, same map, different evidence — and rule 2 reaches what no lever names.

The distinction that makes it necessary: **the concern edges record what chairs *share*; a dependency is what one chair *borrows*.** The QA Engineer does not know the DOM — it *uses* someone else's knowledge of it. Borrowing leaves no trace in a shared-concern derivation, which is why these were never captured.

**Measured, not asserted** — `DOM` across every chair's agent and reference file:

| Chair | `agent_*.md` | `*_references.md` |
|---|---|---|
| QA Engineer | 0 | 0 |
| Accessibility Specialist | 1 | 0 |
| UX Designer / Software Engineer / Design Engineer | 0 | 0 |

The QA Engineer owns **E2E** in its own role line and lists **Playwright** in its libraries, and holds **zero** DOM knowledge. The knowledge sits in three other chairs' pivot cells: *"hierarchy IS DOM"* (UX Designer, Act VIII), *"browser accessibility tree is a parallel DOM"* (Software Engineer, Act VIII), the accessibility tree (Accessibility Specialist). **The capability is asserted where the knowledge is not held, and the map never said so.**

| Vector | Borrowed knowledge | Status |
|---|---|---|
| Accessibility Specialist → Software Engineer | contrast/WCAG checking applied to the **CSS implementation**, not only to the design | **NEW** — no rule-1 path exists, since no lever the Accessibility Specialist requires lists the Software Engineer |
| QA Engineer → Software Engineer | the DOM as a testable structure — the concern edge exists, but for adversarial testing and DORA governance, **not for this** | **NEW as a dependency** on an existing edge |
| QA Engineer → UX Designer | semantic structure — *"layer naming IS semantic HTML; hierarchy IS DOM"* | corroborates rule 1 |
| QA Engineer → Accessibility Specialist | the accessibility tree as the readable parallel structure | corroborates rule 1 |

**`QA Engineer → UX Designer` is now derived twice, by independent routes** — mechanically from a required lever's `Serves:` line, and from the Composer's own reasoning that E2E automation cannot exist without DOM structure. Agreement *between* derivations, which is the only kind invariant 3 permits; agreement inside one is not corroboration.

**Provenance of the two seed cases, recorded because they are lived evidence rather than literature.** The Composer has applied WCAG and a colour-contrast analyzer across design, presentation templates and CSS implementation since his first manager was colourblind — *"not only by me, but by sub-chair experts"*, so it is a property of the discipline, not a personal habit. And: *"Without knowing HTML DOM, QA Engineer won't have E2E automation tests."*

**Why these stayed invisible, and it is structural twice over.** (1) A borrowed dependency leaves no trace in a map derived from what chairs *know*. (2) **A practitioner who spans sub-chairs satisfies the crossing internally** — running the analyzer from design through the deck into the CSS produces no handoff, so nothing is recorded. The dependency is only visible where the sub-chair experts are different people, which is the org case the map is supposed to describe.

**Seeded, not swept.** Rule 2 is defined and carries the cases evidenced this session. A full pass over twelve chairs' stated practices against who holds each knowledge is a separate derivation, not done here.
