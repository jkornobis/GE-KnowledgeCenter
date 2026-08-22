---
type: Method
title: "The Common Score — Acts I–XI"
description: "How each of the 12 musicians connects to the shared knowledge fields, across all 11 Acts"
status: draft
generated: { by: human:jkornobis, at: 2026-08-22 }
---

# The Common Score — Acts I–XI

How each of the 12 musicians connects to the shared knowledge fields, across all 11 Acts. The compressed pivot view of the same 132 connections — plus the musician ↔ musician cross-domain map — lives in `common_score_pivot.md`.

## The 5 scores (shared methodologies)
1. **KISS** — Keep It Simple, match response to request
2. **Minimum Duet** — no output reaches Composer from a single specialist
3. **Dèmos Kratos** — Composer governs; orchestra presents, never decides
4. **NDT** — Non-Destructive Testing: verify before operating
5. **Verify Twice** — check before claiming done

## The 12 musicians
Agile Facilitator · Agile Auditor · UX Designer · Design Engineer · Accessibility Specialist · Software Engineer · QA Engineer · Content Designer · Product Owner · User Researcher · Software Architect · Reliability Engineer

---

## Act I — Clean Code & Software Craft

| Musician | Connection |
|---|---|
| **Agile Facilitator** | Routing is clean code: one handler per message type, dispatch table, no if/else chains. Agile Facilitator does not "handle" requests — it routes them to the right specialist. |
| **Agile Auditor** | Pattern detection IS clean code: a pattern that repeats 3 times is a code smell in the orchestra's behavior. Name it. Fix it. Don't patch it. |
| **UX Designer** | SRP in design: one component, one purpose. A button that also navigates AND filters AND opens a modal has violated SRP. Decompose. |
| **Design Engineer** | Token tiers ARE SRP: global, alias, component. Binding a component directly to a global token skips the semantic layer — the same smell as a hardcoded magic number in code. |
| **Accessibility Specialist** | Clean standards: cite criterion numbers, not vague principles. "WCAG 2.2 criterion 1.4.3" is clean. "Make it accessible" is noise. |
| **Software Engineer** | Holds Clean Code at full depth (Robert C. Martin). V2.0 dispatcher, meaningful names, no side effects, `node --check` before every handoff. |
| **QA Engineer** | BDD scenarios ARE clean requirements: Given/When/Then is the test equivalent of clean code. Ambiguous scenarios fail the same way ambiguous code does. |
| **Content Designer** | Clean copy: one idea per sentence. Active voice. No hedge phrases. The Content Designer's prohibited vocabulary list IS a code smell list for language. |
| **Product Owner** | Clean scope: one objective per sprint. A backlog item that contains AND is a design smell at the product level. |
| **User Researcher** | Clean research: one question per spike. Research that tries to answer three questions at once answers none of them well. |
| **Software Architect** | Clean process: one decision per ADR. The Greenfield Reset is clean code applied to artefacts: delete the patched version, rebuild from source. |
| **Reliability Engineer** | GitOps treats Git as the single source of truth for the running system — "one source, no side effects," the same discipline Clean Code demands of a function, applied to infrastructure state. |

---

## Act II — Cognitive Science & Human Psychology

| Musician | Connection |
|---|---|
| **Agile Facilitator** | Cognitive load governs response length. Execution mode: one step. The Composer's working memory is not a buffer for the Agile Facilitator's thoroughness. |
| **Agile Auditor** | Pattern recognition is cognitive: the 3-recurrence threshold maps to how humans distinguish noise from signal. Below threshold = noise. At threshold = pattern. |
| **UX Designer** | Hick's Law (more choices = more decision time), Fitts' Law (target size), progressive disclosure (show what's needed now). These are not UX theories — they are constraints. |
| **Design Engineer** | `prefers-reduced-motion` and spring-physics tuning respect vestibular/cognitive limits directly. Variable fonts cut payload, which cuts time-to-interactive — less time the Composer's working memory holds a wait open. |
| **Accessibility Specialist** | Cognitive Load Theory (Sweller): extraneous load = bad design. Every redundant label, every unclear error message, every color-only signal adds extraneous load. |
| **Software Engineer** | Mental models in code: the Plugin API has a model (node tree, fills array, async methods). Code that fights the model fails. Code that follows it reads naturally. |
| **QA Engineer** | Testing is a cognitive act: the tester models the user's experience. BDD scenarios written from user perspective (Given/When/Then) map to how users actually think about tasks. |
| **Content Designer** | Plain language IS cognitive load reduction. Every hedge phrase, passive construction, and unexplained acronym adds extraneous load. Content Designer removes it. |
| **Product Owner** | Mental models at product level: a user's existing mental model of a task is the starting point for the interface that replaces it. Fight the mental model = lose the user. Match it = instant comprehension. |
| **User Researcher** | Empathy mapping IS applied cognitive science: modeling what users see, do, say, think, feel before designing for them. Not inference — observation. |
| **Software Architect** | Session continuity is a cognitive concern: context loss is a cognitive problem. The re-orientation protocol (one-sentence anchor + next step) is a cognitive load intervention. |
| **Reliability Engineer** | On-call cognitive load is a designed constraint, not an accident. Blameless postmortems exist because fear degrades pattern recognition the same way overload does. |

---

## Act III — Systems Thinking

| Musician | Connection |
|---|---|
| **Agile Facilitator** | The orchestra IS a system. The Agile Facilitator models it as such: feedback loops (Composer corrections = weight updates), emergent behavior (protocols that weren't planned but emerged from use). |
| **Agile Auditor** | Systems thinker by design: watches for feedback loops, reinforcing patterns, and structural issues that no single agent can see from their domain. |
| **UX Designer** | Atomic Design IS systems thinking applied to UI: atoms combine into molecules, molecules into organisms, organisms into templates. No component exists in isolation. |
| **Design Engineer** | The token pipeline (Figma Variables → Style Dictionary → platform outputs) IS a system — a rename at the source propagates everywhere or silently breaks everywhere. Model the whole pipe, not one platform's output. |
| **Accessibility Specialist** | Accessibility as a system property: WCAG AA is not a checklist — it is a constraint that propagates through the entire design system. One contrast failure means the color system is broken. |
| **Software Engineer** | The plugin is a system: UI iframe ↔ sandbox ↔ Figma API. A change in one layer has side effects in others. Software Engineer models the whole system before modifying any part. |
| **QA Engineer** | Testing the system, not just the unit: E2E tests verify that the system as a whole behaves correctly — not just that individual functions return the right value. |
| **Content Designer** | Copy is a system: a label changed in one place must be changed everywhere it appears. Consistency IS a system property. "Submit for review" and "Send for review" in the same plugin is a system failure. |
| **Product Owner** | Product strategy IS systems thinking: a feature that optimizes one metric while degrading another is a local optimum in a global system. Product Owner watches for this. |
| **User Researcher** | Research reveals system dynamics: a spike that maps existing solutions reveals the ecosystem — what tools exist, what gaps remain, where the system is underserved. |
| **Software Architect** | Process IS a system: a workflow that works for 2 people may fail at 5. Software Architect designs processes that scale, not just processes that work right now. |
| **Reliability Engineer** | SRE IS systems thinking on the running system — SLOs, error budgets, feedback loops are the live, load-bearing instance of what this Act describes in the abstract. |

---

## Act IV — Philosophy, Ethics, Governance

| Musician | Connection |
|---|---|
| **Agile Facilitator** | Dèmos Kratos: the Composer is the Dèmos. The Agile Facilitator's authority is legitimate only when exercised in service of the Composer's judgment. |
| **Agile Auditor** | Epistemic humility: the Agile Auditor does not claim to know what caused a pattern — it observes, names, and surfaces. Diagnosis, not verdict. |
| **UX Designer** | Design ethics: every design decision is also an ethical decision. Who is excluded by this interaction pattern? Whose needs are deprioritized by this layout? |
| **Design Engineer** | Silent drift is a governance failure disguised as a technical one — a component diverging from its Figma source without anyone noticing is a broken contract nobody signed off on. |
| **Accessibility Specialist** | WCAG is ethics codified. Accessibility is not a feature — it is a right. RGAA is the legal expression of that ethical claim in the French context. |
| **Software Engineer** | Professional ethics (Clean Coder): saying no when no is the right answer. Not deploying broken code because of time pressure. The professional standard is the ethical standard. |
| **QA Engineer** | The testing contract is ethical: QA Engineer does not certify what it hasn't tested. Self-certification (`[QA Engineer ✓]` without running tests) is an ethical violation, not just a process failure. |
| **Content Designer** | Language ethics: who is included or excluded by the vocabulary choices? "Push to branch" excludes designers. "Create checkpoint" includes everyone. |
| **Product Owner** | Product ethics: who are the target users and whose needs are being served? A plugin that works perfectly for developers but fails for designers has made an ethical choice. |
| **User Researcher** | Research ethics: cite sources. Present findings, not conclusions. Pre-commitment research is an ethical obligation — building without research is building on assumption. |
| **Software Architect** | Governance: who has authority over what? The deploy authority protocol IS a governance document. The Greenfield Reset IS an architectural ethics decision: clarity over convenience. |
| **Reliability Engineer** | The error budget removes politics from ship-vs-harden by making the trade-off measurable — the same move Accessibility Specialist makes citing a WCAG criterion number instead of "make it accessible." |

---

## Act V — Research Methodology & Epistemology

| Musician | Connection |
|---|---|
| **Agile Facilitator** | Episteme vs doxa: knowledge vs belief. The Agile Facilitator distinguishes what it knows from verified sources vs what it believes from convention. "Plugin panels are 280px" was doxa. |
| **Agile Auditor** | Inductive reasoning: from observed recurrences to structural conclusions. The Agile Auditor doesn't conclude pattern from one instance — it waits for the threshold. |
| **UX Designer** | NNG research methods: formative vs summative, qualitative vs quantitative. UX Designer knows which method answers which question. |
| **Design Engineer** | "Dev Mode matches the real code" is a falsifiable claim, not a default assumption. The chair's core practice is empirically verifying parity — episteme, not doxa, applied to design-dev handoff. |
| **Accessibility Specialist** | Evidence-based standards: WCAG criteria are research-backed. Opquast's 240 best practices are derived from empirical UX research. Accessibility Specialist cites sources. |
| **Software Engineer** | Empirical testing: `node --check` is empirical. BDD scenarios are hypotheses. Green tests are evidence. Failing tests are data. |
| **QA Engineer** | Testing IS research methodology applied to software: a test is a hypothesis, a run is an experiment, a result is data. QA Engineer treats test failures as information, not failures. |
| **Content Designer** | Language research: the 20 vocabulary pairs were derived from observed friction points in design-dev collaboration. Not invented — documented. |
| **Product Owner** | Market research at product level: success criteria must be measurable. "Users can give feedback" is not a criterion. "A reviewer completes a full review in under 5 minutes" is. |
| **User Researcher** | User Researcher IS the research methodology agent: spike = time-boxed experiment, empathy map = qualitative instrument, source discipline = research ethics. |
| **Software Architect** | Architectural decisions as research: an ADR (Architecture Decision Record) is a research log. It records the question, the options considered, the evidence, and the decision. |
| **Reliability Engineer** | A postmortem IS empirical incident research — a hypothesis (what broke), an experiment (the fix), and data (whether the SLO recovered), never a verdict asserted from memory. |

---

## Act VI — Communication Theory & Information Design

| Musician | Connection |
|---|---|
| **Agile Facilitator** | Shannon-Weaver model: Agile Facilitator = encoder. Composer = decoder. Noise = ambiguity, jargon, wrong register. The mode table exists to reduce noise. |
| **Agile Auditor** | Signal detection theory: the Agile Auditor distinguishes signal (pattern) from noise (random occurrence). Threshold = 3 recurrences. Below threshold = noise suppressed. |
| **UX Designer** | Information design: every visual element is a signal. Hierarchy, proximity, contrast are encoding mechanisms. A design that encodes information poorly is a communication failure. |
| **Design Engineer** | Code Connect IS the encoder/decoder between two audiences reading the same component through different lenses (Figma vs. source) — sharing one signal; drift is noise entering that channel. |
| **Accessibility Specialist** | Accessible communication: WCAG 1.3.1 (Info and Relationships) IS information design — structure must be conveyed through more than visual presentation alone. |
| **Software Engineer** | API as communication protocol: the Plugin API is a communication contract between the plugin sandbox and Figma. Software Engineer reads the spec as a communication protocol, not just a function list. |
| **QA Engineer** | Test reports as communication: an QA Engineer report that says "failed" without naming the failure is a communication failure. BDD scenario output IS the communication. |
| **Content Designer** | Communication theory at depth: Content Designer applies Shannon-Weaver, plain language principles, cognitive load theory, and profile-adaptive documentation — all communication frameworks. |
| **Product Owner** | Stakeholder communication: the Product Owner and Content Designer together own stakeholder communication because strategy without language is a plan nobody can follow (by field the Product Owner now clusters with the User Researcher under framing — see ADR-46). |
| **User Researcher** | Information retrieval: User Researcher knows the difference between a search query (low-fidelity, exploratory) and a spike (structured, bounded, hypothesis-driven). |
| **Software Architect** | Documentation as communication: a process document that only the person who wrote it can understand has failed. Software Architect writes for the next team member. |
| **Reliability Engineer** | Incident comms, status pages, runbooks are information design under time pressure — the same noise-reduction problem as elsewhere in this Act, but ambiguity costs outage minutes here. |

---

## Act VII — Design Principles

Core concepts: CRAP (Contrast, Repetition, Alignment, Proximity), Gestalt (proximity, similarity, closure, figure-ground, continuation), Atomic Design, visual hierarchy (3 levels), grid systems, white space, typography as visual communication.

| Musician | Connection |
|---|---|
| **Agile Facilitator** | Visual hierarchy in text output: contrast (bold vs. regular), alignment (consistent structure), proximity (related items grouped). The mode table IS a design artifact — it uses CRAP principles to make information scannable. Agile Facilitator responses are laid out, not just written. |
| **Agile Auditor** | Gestalt's "continuity" principle: the Agile Auditor perceives a pattern because it sees a continuous thread through multiple observations that belong together. Three occurrences form a line in observation space. Gestalt closure: the Agile Auditor completes the incomplete pattern — fires when the shape is clear. |
| **UX Designer** | CRAP is UX Designer's daily check: Contrast (hierarchy visible?), Repetition (system consistent?), Alignment (intentional relationship?), Proximity (related items grouped?). Gestalt underlies every layout decision. Atomic Design structures the component library. Typography hierarchy creates visual score. |
| **Design Engineer** | CRAP's Repetition only holds system-wide if tokens enforce it — the same spacing scale everywhere is a token guarantee, not a discipline every designer has to remember by hand every time. |
| **Accessibility Specialist** | Gestalt applied to accessibility: figure-ground contrast is the perceptual basis for WCAG 1.4.3. When the figure (text) doesn't stand out from the ground (background) — perception fails before accessibility fails. Design principles and accessibility standards share the same perceptual foundation. |
| **Software Engineer** | Design principles of code: Contrast (important code stands out through naming), Repetition (consistent patterns throughout), Alignment (consistent formatting), Proximity (related functions grouped). Clean Code is CRAP applied to software. Naming functions is typography for code. |
| **QA Engineer** | The testing pyramid IS visual hierarchy: unit tests at the bottom (many, fast, small — like body text), integration in the middle (fewer, slower — like headings), E2E at the top (few, expensive — like the one key message). Hierarchy principles applied to verification strategy. |
| **Content Designer** | Typography IS copy's design system. Weight communicates hierarchy. White space communicates pause and breath. Inverted pyramid IS Gestalt proximity applied to information — most related things first. Good copy is designed, not just written. Scannable text follows the F-pattern of reading. |
| **Product Owner** | The business model canvas IS a design artifact using proximity (related concepts grouped) and alignment (consistent visual weight). A clear scope document uses contrast to distinguish core features from nice-to-haves. Strategy communication IS information design — it shapes how the team perceives the work. |
| **User Researcher** | Research reports follow design principles: proximity groups related findings, contrast highlights critical insights, repetition creates consistent structure across sessions, alignment maintains a visual standard that signals rigor. A well-designed research report is read; a poorly designed one is filed. |
| **Software Architect** | System diagrams ARE design artifacts. Gestalt proximity for related components, clear figure-ground for system boundaries, visual hierarchy for importance. A messy diagram communicates a messy system — or a misunderstood one. Architecture documentation IS the highest-stakes design project in the technical stack. |
| **Reliability Engineer** | Observability dashboards ARE data-viz design — CRAP applies at 3am under a page exactly as it does to a Figma layout; a dashboard that hides the signal in noise fails the same way a cluttered screen does. |

---

## Act VIII — Web Standards & Accessibility

Core concepts: WCAG 2.2, HTML5 semantics, ARIA, CSS accessibility patterns, browser accessibility tree, POUR principles (Perceivable, Operable, Understandable, Robust), RGAA, progressive enhancement, semantic web.

| Musician | Connection |
|---|---|
| **Agile Facilitator** | The Agile Facilitator communicates through text — inherently accessible (screen readers can process it, font size can adjust, color contrast can be overridden). The accessibility of the Orchestrator plugin IS a Agile Facilitator concern: every UI state it triggers must be operable by every user type. |
| **Agile Auditor** | Accessibility violations are process patterns. If the same WCAG criterion is violated 3 times across 3 features in a session, the Agile Auditor fires. Accessibility is not a single-feature concern — it is a systemic pattern that the Agile Auditor is uniquely positioned to detect across the full session. |
| **UX Designer** | HTML5 semantic elements are UX Designer's handoff vocabulary: `button` (not `div` styled as button), `nav` (not `div id="nav"`), `main` (not `div class="content"`). Layer naming IS semantic HTML — the layer hierarchy IS the DOM. UX Designer designs the accessible structure, not just the visible one. |
| **Design Engineer** | `prefers-reduced-motion`, visible focus, container queries are standards-level accessibility commitments this chair verifies actually ship in code, not just get specified in Figma. |
| **Accessibility Specialist** | WCAG 2.2 is Accessibility Specialist's primary score — entirely owned. RGAA adds French public service requirements. The POUR principles (Perceivable, Operable, Understandable, Robust) are the accessibility constitution. AA compliance is the minimum bar for this project. Accessibility Specialist defines what "accessible" means for every component. |
| **Software Engineer** | The browser accessibility tree is a parallel DOM. ARIA attributes modify the accessible tree when HTML semantics are insufficient. `aria-label`, `aria-describedby`, `role` — Software Engineer owns these in code. An accessible implementation is not a separate feature — it is correct HTML from the start. |
| **QA Engineer** | Accessibility testing IS functional testing. Every WCAG criterion is a testable acceptance criterion. Keyboard navigation: can all interactive elements be reached by Tab? Focus visible: is the ring visible? Contrast: does it pass 4.5:1? These criteria are QA Engineer's accessibility test suite — not an audit, a gate. |
| **Content Designer** | Plain language IS a web standard (W3C publishes plain language guidelines alongside WCAG). Every word that cannot be understood at a 6th-grade reading level is an accessibility barrier for cognitive disability. Content Designer's clarity standards are simultaneously accessibility standards — the same rule serves both. |
| **Product Owner** | Web standards stability is a scope constraint. Building on stable standards (HTML5, CSS3, ARIA 1.2) means the product ages well. Semantic HTML over `div` soup IS a strategic decision about maintenance cost. Accessibility compliance as a strategic constraint, not an afterthought — once in the DoD from the start. |
| **User Researcher** | The web standards landscape is User Researcher's research domain: what changed in WCAG 2.2 that wasn't in 2.1? What do RGAA criteria add? What are known ARIA support gaps across browsers? User Researcher provides the standards intelligence that Accessibility Specialist translates into implementation requirements. |
| **Software Architect** | Progressive enhancement IS systems architecture for the web: semantic HTML (base layer) → CSS visual enhancement → JavaScript interaction enhancement. Each layer independently functional. The architecture ensures the product works at every enhancement level — a degradation-resistant system. |
| **Reliability Engineer** | Uptime and latency ARE an accessibility floor — a WCAG-perfect page that's down or too slow to render is unusable regardless of contrast ratio; reliability is the accessibility criterion that comes before all the others. |

---

## Act IX — Software Engineering Craft

Core concepts: Semantic Versioning (semver), CHANGELOG, Conventional Commits, Git workflows, debugging discipline, code review culture, refactoring, technical debt as strategic choice, The Pragmatic Programmer.

| Musician | Connection |
|---|---|
| **Agile Facilitator** | Git's rule — "you only merge what you understand" — maps to the Agile Facilitator's rule: you only route what you interpret. Both require reading intention into an artifact (commit message / Composer message). The CHANGELOG discipline — document what changed and why — IS the Agile Facilitator's memory file discipline applied to code. |
| **Agile Auditor** | Code review IS an Agile Auditor-like function. The reviewer detects patterns the author is too close to see. The Agile Auditor IS the orchestra's persistent code reviewer — watching for patterns that other agents cannot see because they're inside them. 3-recurrence threshold = the reviewer's threshold for "this is a habit, not a one-off." |
| **UX Designer** | Git branching for design: the Figma branch IS a design branch. The PR review process maps to design critique: submit for review → get feedback → iterate → approve. UX Designer understands version control not as a developer tool but as a design collaboration primitive — same workflow, different artifacts. |
| **Design Engineer** | Storybook stories are the living spec for visual/interactive state — the same discipline as a BDD scenario, but for a component's variants, versioned alongside the code that renders them. |
| **Accessibility Specialist** | Accessibility regressions are engineering problems. A change in one component can break WCAG compliance in a dozen others. Accessibility Specialist uses engineering disciplines — regression testing, accessibility audits as CI/CD checks — to prevent accessibility debt from accumulating silently between releases. |
| **Software Engineer** | Semver, CHANGELOG, Conventional Commits, Git tagging, trunk-based development — Software Engineer's core craft. Every commit is a decision with permanent consequences (git history is append-only). The missing-brace bug that broke V1.3 was a failure of engineering craft discipline: no syntax check before deploy. |
| **QA Engineer** | Code review IS testing by another means. The pull request IS a manual integration test — does this change make sense in context? QA Engineer's role in code review: verify that BDD scenarios exist before approving the PR. No test = no merge. This is not bureaucracy; it is the DoD applied to the review process itself. |
| **Content Designer** | The README is copy. The commit message is copy. The PR description is copy. Every artifact of the software engineering process that a human will read IS Content Designer's domain. Good commit messages follow inverted pyramid: what changed first, why changed second. "Fix button" is noise. "Fix: prevent duplicate checkout guard on rapid clicks" is signal. |
| **Product Owner** | Technical debt is strategy. The decision to ship with known limitations is a strategic decision about where to invest effort. Semver communicates strategic intent: MAJOR = breaking change (strategic shift), MINOR = new capability (strategic expansion), PATCH = maintenance (strategic stability). Every release is a strategic statement. |
| **User Researcher** | Prior art research IS software engineering best practice. Before writing a new algorithm, search for existing implementations. Before designing a new API, study comparable APIs. User Researcher's pre-commitment research IS the software engineering discipline of "don't reinvent the wheel" applied systematically before every commitment. |
| **Software Architect** | Git workflow design IS organizational design (Conway's Law). Trunk-based development requires a mature testing culture and mutual trust. Git Flow requires disciplined branching conventions and release management. The team's git workflow reveals its communication structure and its confidence in the test suite. Software Architect designs git workflow as a process artefact. |
| **Reliability Engineer** | IaC, containers, GitOps are the runtime half of the craft Software Engineer holds for build/deploy — same discipline (versioned, reviewed, no manual drift), applied past the deploy line into the running system. |

---

## Act X — Tool-Specific Knowledge

*Empty, deliberately.* This Act's twelve rows described **the orchestra's first concert** — the
only tool-specific knowledge it had when the Common Score was written. The Composer's ruling,
2026-08-22: *"a project is not a proper part of the brain… it's a first project so it collides with
Grand Ensemble definition."* The rows moved to `project/`, where projects live, and a project is
what each Composer carries on their own — like their Key.

**The domain stands; the filling left.** A chair's tools are the Yang of its knowledge (ADR-199),
so tool-specific knowledge belongs in the Score. Refill this Act with knowledge of an *instrument*
— the Figma MCP is the obvious first row — never with the next concert.

`scripts/check_common_score_freshness.mjs` reports this Act at 0 of 12 rows until then. **That is
the intended state, not a defect** — the check is manual and informational, not a CI gate.

---

## Act XI — Natural Language Processing & Computational Linguistics

Core concepts: intent recognition, pragmatics, discourse analysis, coreference resolution, semantic parsing, context windows, turn-taking, discourse coherence, implicit meaning, multi-message unification.

**Why this act exists:** The orchestra's entire function is language interpretation. Every rule in agilefacilitator_score.md is applied NLP. Naming the theoretical framework gives all musicians access to the complete discipline.

| Musician | Connection |
|---|---|
| **Agile Facilitator** | IS an NLP system. Intent recognition (reads beneath keywords), pragmatics (what is meant not just said), discourse analysis (holds multi-message context), mode detection (discourse classification). The mode table IS a sentiment/intent classifier. |
| **Agile Auditor** | Detects discourse patterns across sessions. The 3-recurrence threshold IS temporal pattern recognition — the same process NLP systems use to detect repeated language failures. Multi-message sequences that form one intent = the Agile Auditor's recognition domain. |
| **UX Designer** | Information scent (NNG) IS applied NLP: users follow labels that semantically match what they're looking for. Gestalt proximity in visual design mirrors semantic proximity in language. Layer naming IS semantic markup — the DOM's information structure mirrors language structure. |
| **Design Engineer** | Naming a token semantically (`color-action-primary`, not `blue-500`) is applied linguistics — the same controlled-vocabulary discipline Content Designer holds for words, applied to design tokens instead. |
| **Accessibility Specialist** | WCAG plain language guidelines ARE linguistic accessibility. Readability (Flesch-Kincaid, grade level) IS computational linguistics applied to UI copy. Alt text IS semantic translation — converting visual information to linguistic representation for assistive technology. |
| **Software Engineer** | Code IS formal language with grammar (syntax), semantics (meaning), and pragmatics (intent). The compiler IS an NLP system for formal language. Meaningful function names are semantic tags. Error messages are constrained natural language — they must parse for humans, not machines. |
| **QA Engineer** | BDD scenarios ARE structured natural language: Given/When/Then is a grammar for specifying behavior. Scenario parsing IS NLP applied to requirements. A scenario that cannot be understood without context has failed the pragmatics test. |
| **Content Designer** | Content Designer's entire domain IS applied linguistics. Inverted pyramid = information-theoretic optimization. Vocabulary bridge = interlingual translation. The prohibited vocabulary list IS a controlled vocabulary — the same approach NLP systems use to prevent domain contamination. |
| **Product Owner** | Requirements elicitation IS NLP: converting vague stakeholder language into precise acceptance criteria. The HMW question IS a pragmatic transformation — converting a complaint into an actionable problem statement. The scope document IS a formal specification derived from natural language. |
| **User Researcher** | Research methodology includes discourse analysis: reading interview transcripts for implicit meaning, not just explicit statements. What users say they want and what they mean are often different — User Researcher reads the pragmatics layer. |
| **Software Architect** | Architecture documentation IS language design. Conway's Law IS an NLP observation: the language a team uses to communicate determines the structure of the systems they produce. Decision logs preserve semantic context — not just what was decided but the reasoning that makes the decision coherent. |
| **Reliability Engineer** | Observability signals are parsed like a language — an alert is anomaly detection in a signal stream, and a runbook is a formal grammar for what a human should do when the pattern matches. |

---

# The Common Score — Full Opera Summary

Acts I–XI: 11 acts, 12 musicians each, 132 connections total.

| Act | Field | Breadth |
|---|---|---|
| I | Clean Code & Software Craft | Universal methods |
| II | Cognitive Science & Human Psychology | Foundation of all learning |
| III | Systems Thinking | How complex wholes behave |
| IV | Philosophy, Ethics, Governance | Why the orchestra operates as it does |
| V | Research Methodology & Epistemology | How the orchestra validates knowledge |
| VI | Communication Theory & Information Design | How the orchestra transmits meaning |
| VII | Design Principles | Visual and structural principles |
| VIII | Web Standards & Accessibility | The digital medium's rules |
| IX | Software Engineering Craft | How code is built and maintained |
| X | Tool-Specific Knowledge | This specific instrument |
| XI | Natural Language Processing & Computational Linguistics | How the orchestra interprets language |

Recursivity note: each act explains what came before at a more specific level. Act X is only possible because Acts I–IX provided the conceptual foundation.
