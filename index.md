---
okf_version: 0.2
---

# GE-KnowledgeCenter — index

Every page an agent should fetch — what it covers, who published it and when.
**Read this before fetching anything.** If a subject is not listed here, the library does not
cover it — say so rather than guessing a path. A 404 means the path was wrong, never that the
knowledge is absent.

**A bare filename in these pages is a provenance marker, not a path.** Several pages cite the
sibling names of the estate that produced them — `roster.md`, `patterns.md`, `protocols.md`,
`agent_*.md` and others. **They are not fetchable and are not meant to be**: they record what was
read, in that estate's own coordinates, and inventing a correspondence would assert a derivation
nobody made. **Only the paths listed in the tables below are fetchable.** If a reference has no
directory, it is history; if it has one and is not in a table below, report it rather than fetching
it. `check_links.mjs` in this bundle holds that line for `.md` and `.json`
references only. **It does not read script names at all** — `scripts/` is declared provenance and `.mjs` is
outside its pattern — so the script names cited across these pages are provenance by construction, never links
it has checked and passed. **And two bare names are exceptions to the history rule, because they are runnable
files in this bundle rather than another estate's coordinates: `check_okf.mjs` and `check_links.mjs`.**

**And a provenance path may have a living sibling here.** The extraction remapped the files without remapping the
cross-references, so **18 of the 48 provenance citations in these pages name a document this library also holds
under a different path** — `brain/orchestra_prior_art.md` is `method/orchestra_prior_art.md`,
`agents/tools/register.md` is `tools/register.md`, `skill/grand-ensemble/references/triggers.md` is
`protocols/triggers.md`, and fifteen more. **Before reporting a provenance path as unfetchable, match its basename
against the tables below.** The citation is still not rewritten: the two are the same subject in two estates'
coordinates, not proven to be the same text, and inventing that correspondence is what this section forbids.
`check_links.mjs` cannot catch this — `brain/`, `agents/` and `skill/` are in its skip list, by design.

**Two estate pages are deliberately absent** and will stay so: the occupancy roster, whose portable
half already travels as `tools/chair-levers.md` while the rest is one estate's own seating; and the
Figma product-surface audit, which cannot be published because it names an employer's systems. Pages
here cite both by bare name for exactly the reason above.

Fetch a page with:

    curl -s https://raw.githubusercontent.com/jkornobis/GE-KnowledgeCenter/main/<Page>

**Nothing here has been re-audited yet.** Every page is `status: draft` and carries no `verified`
field, which in OKF terms is the *unverified* tier: published by the estate that wrote it, not
independently confirmed. `Published` below is the date the page last changed in its home repo.



## The Agile Facilitator travels first — what must be resident, and what is fetched

**This library assumes a traveler.** The Agile Facilitator arrives holding a floor, routes, and then
each musician goes deeper on demand. **Reading order is therefore not the order of the sections
below** — it is: floor first (already held), then the chair, then the chair's tools.

**The floor is the part that cannot be fetched.** A rule that governs *how* an answer is formed has
to be true before the first token; fetched, it arrives after the response it was supposed to shape.
**A rule fetched by the thing it constrains is not a constraint.** These are published here so they
can be read and cited — never so they can be loaded at runtime by an orchestra that needs them
already in hand:

| Resident rule | Published at | Why it cannot arrive late |
|---|---|---|
| **Minimum Duet** — no output from a single voice unless a solo was asked for | `protocols/orchestra-protocols.md` | it decides how many voices answer, before any of them do |
| **Concert Quorum** — which ensemble a request earns | `protocols/orchestra-protocols.md` | same: it is the routing decision itself |
| **Independent Verification (invariant 3)** — personas in one context are not corroboration; only a real subagent buys independence | `protocols/orchestra-protocols.md` | an orchestra that fetches this has already trusted its own agreement |
| **Honest but kind** — the register every exchange is spoken in, chair-to-chair included | `principles/core-principles.md` | it shapes how a sentence is formed, so it cannot arrive after it |
| **The Agile Facilitator is an agent, not the Composer** | `principles/core-principles.md` | authorship is claimed in the first sentence or not at all |
| **A choice offered is a bug** — the determinable / authorship gate | `principles/core-principles.md` | it fires on the way in, deciding whether to act or ask |
| **Response calibration** — read the mode before answering | `principles/core-principles.md` | depth is chosen before content exists |
| **The presentation gate** — show, don't tell; buttons for genuine choices; a turn ends on an irreversible action, a question, a stated doubt, a task list or a use case | `protocols/presentation-checklist.md` | it runs before send; a gate that arrives with the message is not a gate |

**Everything else in this library is a lookup**, reached when a question arrives: `chairs/the-twelve-chairs.md` for the routing table itself, then a chair's canon, a
tool's real capabilities, a protocol that fires in response to something already recognised, the
mandala borders, the graph.

**The Agile Auditor is the open question in this design.** Invariant 3 says its independence cannot
exist in-context — it *is* the same model — so the long-term intent is a dedicated entity running
outside the orchestra entirely. Until that exists, the rule saying so is floor: it is the one rule
whose whole job is to stop the room trusting itself.


## Tools — what an instrument can actually do

**The lineage index is the way in.** `tools/lineage.md` gives each chair its origin, the leap
that changed it, and the instrument that carries that leap now — the tool pages below hang from
its fourth column.

**Addressable directly.** A tool page is reached by its own path, not through the chair that uses it —
and each page names the chairs it serves, so the link runs both ways.

| Page | Covers | Serves | Published |
|---|---|---|---|
| `tools/sigstore-cosign.md` | Keyless signing and provenance for artifacts: why the CLI's own Context7 entry scores Low, a supply-chain tool carrying a supply-chain dependency, and a user community invisible from either route | Software Architect, Reliability Engineer | 2026-08-25 |
| `tools/figma.md` | Router for the three Figma pages: the identity table that tells the three MCP servers apart by their parameter shape, and which route each page covers | UX Designer, Design Engineer | 2026-08-25 |
| `tools/figma-mcp-remote.md` | The fileKey-scoped Figma MCP servers: 33 tools against the 27 once recorded, the bulk Code Connect planner, and what a live re-audit verified on 2026-08-25 | UX Designer, Design Engineer, Content Designer, Accessibility Specialist | 2026-08-25 |
| `tools/figma-mcp-desktop.md` | The selection-scoped Figma MCP server: seven tools that take no parameters at all, why that shape is the tell, and the per-agent registration that leaves it unwired | UX Designer, Design Engineer | 2026-08-25 |
| `tools/i18next.md` | The FR/EN parity engine: two open issues against 1,472 Stack Overflow questions, and three of the top six are one problem — markup inside a translated string | Content Designer, Design Engineer | 2026-08-25 |
| `tools/jira.md` | Jira at logic level rather than project level: the fetch route that works and the two that fail, the primitives a work item and a board actually are, and the craft slots left deliberately empty until an orchestra has experimented with a real instance | Product Owner, Software Architect, the whole room | 2026-09-01 |
| `tools/lineage.md` | Twelve chairs, each with the origin it started from, the leap that changed it, the current best-in-class, and the years between the two | the whole room | 2026-08-16 |
| `tools/style-dictionary.md` | The transform step of the token chain, and the direct descendant of the design-tokens leap: an eight-year-old architectural issue, and a mirror that scores 33 against the repo's 80 | Design Engineer, UX Designer, Software Engineer, Software Architect | 2026-08-26 |
| `tools/tokens-studio.md` | The authoring end of the token chain: exports that silently lose resolution, no group-level description, and a tag with zero questions whose friction is filed under the tool downstream | Design Engineer, UX Designer | 2026-08-26 |
| `tools/vitest.md` | The highest Context7 benchmark in this library and the only one to rise sharply: 906 questions of which the top five are all config and module resolution, not a single assertion among them | Software Engineer, QA Engineer | 2026-08-26 |
| `tools/web-research.md` | The chair whose output is findings and sources, and the arm that supplies them: three routes that fail differently, a refusal that is about the instrument, and why a search result is testimony rather than transcript | User Researcher | 2026-08-26 |
| `tools/mcp-and-subagents.md` | MCP registration is per agent, one product can present as several servers, and a real subagent is the only mechanism that buys genuine independence — with the precondition that gates asking for one | Agile Facilitator, Agile Auditor, Software Engineer, Product Owner | 2026-08-26 |
| `tools/axe-core.md` | The accessibility engine underneath most of the field: what it implements, its ~30-40% ceiling, defects from the tracker and friction from Stack Overflow, and the closed shadow DOM it cannot reach | Accessibility Specialist, QA Engineer, Design Engineer | 2026-08-23 |
| `tools/opentelemetry.md` | Traces, metrics and logs over OTLP: why every language SDK outscores the neutral spec, three Collector bugs, and 1,405 questions that are all boundary questions rather than defects | Reliability Engineer, Software Architect, Agile Facilitator | 2026-08-25 |
| `tools/zod.md` | Runtime validation at the trust boundary: 58 open issues and a genuine zero open bugs, unknown keys passing by default, and the largest Stack Overflow view counts in this library | Software Engineer, Software Architect, QA Engineer | 2026-08-25 |
| `tools/playwright.md` | Cross-browser E2E on one API: what it verifies, 141 open issues and no bug label, and 3,506 Stack Overflow questions topped by something the API deliberately does not offer | QA Engineer, Accessibility Specialist, Design Engineer, UX Designer, Reliability Engineer | 2026-08-23 |
| `tools/storybook.md` | The component workbench where a variant becomes a runnable story: 1,102 of 1,571 open issues carrying the bug label, three sampled and all three marked has-workaround, and friction that is all build pipeline rather than authoring | Design Engineer, Software Engineer, QA Engineer | 2026-08-23 |
| `tools/git.md` | The substrate this library runs on rather than a tool it uses: the exit mechanic that is a deleted index row plus a revert, the branch as the unit of the delivery rule, a defect route that is not GitHub, and 153,621 questions whose top eight are mostly about undoing | Software Engineer, Software Architect, the whole room | 2026-09-01 |
| `tools/README.md` | What a tool page records and why: the vantage point a reading was taken from, its verification state, and the three layers that stop a toolset being hand-rolled | the whole room | 2026-08-16 |
| `tools/_template.md` | The skeleton a Tool Audit fills: chair and lever, lineage, Context7 id resolved rather than recalled, defects and friction from two named routes with the friction's class, and limits marked tool or reasoning | User Researcher | 2026-08-16 |
| `tools/cowork.md` | Cowork mode in Claude Desktop: skills and their references do load, and the defining constraint is that the pass runs unwatched — with the audit brief for everything still unverified | User Researcher | 2026-08-22 |
| `tools/claude-desktop.md` | Claude Desktop on Windows: the 1024-character skill-description limit, .skill as a zip of a directory, a menu that is not the registry, and why a shell-side localhost is not the machine | the whole room | 2026-08-22 |
| `tools/register.md` | The lever register: what leaps exist and which seats they serve, judged by six questions — lineage, posture, health, grip, why, licence — plus the seams no tool crosses yet | User Researcher, Product Owner, Software Architect | 2026-08-22 |
| `tools/chair-levers.md` | The taijitu model behind every tool page: what a chair requires versus what an occupant carries, the bar a lever must clear to become a seat's canon, and four dated rulings on which chairs break without which lever | the whole room | 2026-08-26 |
| `tools/context7.md` | Context7 MCP: on-demand version-pinned library docs — keyless runtime, free-tier limits, the coverage boundary it does not cross, and one tool name still marked UNVERIFIED against the live re-audit the page says it is owed | the whole room | 2026-08-16 |
| `tools/pdf-reading.md` | Reading a PDF on a Claude Desktop machine: four routes tried, one worked — and why a viewer that displays a document returns nothing to the orchestra | the whole room | 2026-08-16 |

### Lever indexes — one per musician, keyed by intent

**Keyed by what you want, not by what the API offers.** Every row names the plausible wrong
default it exists to beat. Two exist; the other ten chairs have no index yet, and an index
written before its musician has handled the instrument is plausible documentation, not craft.

| Page | Covers | Serves | Published |
|---|---|---|---|
| `tools/yang/ux_designer.md` | UX Designer lever index for Figma: seven intents keyed to the Plugin API call that serves them, each row naming the tempting wrong default it exists to beat | UX Designer | 2026-08-16 |
| `tools/yang/design_engineer.md` | Design Engineer lever index for the token crossing: Figma Variables and Code Connect keyed by intent, plus the trap in publish --force | Design Engineer | 2026-08-16 |
| `tools/figma-method.md` | Eyes first and code second: the working loop for a design surface, what the eyes read in a structured file, and why text-only spatial reasoning collapses as a layout grows | the whole room | 2026-08-28 |

## Chairs — what a seat knows

| Page | Covers | Published by | Published |
|---|---|---|---|
| `chairs/the-twelve-chairs.md` | What each seat is, the four instrument families, the routing table that turns a request into an ensemble, and the canonical duets — including the chair that never plays solo and the one that belongs to no family | jkornobis | 2026-08-26 |
| `chairs/accessibility_specialist_references.md` | Living reference notes for the Accessibility Specialist's field | jkornobis | 2026-08-16 |
| `chairs/agile_auditor_references.md` | Living reference notes for the Agile Auditor's field | jkornobis | 2026-08-16 |
| `chairs/agile_facilitator_references.md` | Living reference notes for the Agile Facilitator's field | jkornobis | 2026-08-16 |
| `chairs/content_designer_references.md` | Living reference notes for the Content Designer's field | jkornobis | 2026-08-16 |
| `chairs/engineer_references.md` | Living reference notes for the Software Engineer's field | jkornobis | 2026-08-16 |
| `chairs/product_owner_references.md` | Living reference notes for the Product Owner's field | jkornobis | 2026-08-16 |
| `chairs/qa_engineer_references.md` | Living reference notes for the QA Engineer's field | jkornobis | 2026-08-16 |
| `chairs/reliability_engineer_references.md` | Live-docs currency layer for reliability and runtime: Kubernetes, SLOs and error budgets, OpenTelemetry, IaC, GitOps, FinOps, incident practice | jkornobis | 2026-08-16 |
| `chairs/software_architect_references.md` | Living reference notes for the Software Architect's field | jkornobis | 2026-08-16 |
| `chairs/user_researcher_references.md` | Living reference notes for the User Researcher's field | jkornobis | 2026-08-16 |

## Protocols — how the work is run

| Page | Covers | Published by | Published |
|---|---|---|---|
| `protocols/orchestra-protocols.md` | The Concert Quorum and the five-tier effort ladder, the Delegation Brief, personas versus real subagents and their economics, Independent Verification, the routing table, the Definition of Done, Spotlighting — plus the spawn gate, the risk-tier re-ask, Lots, the runtime spot-check and the roadmap cadence, added 2026-08-26, and Chamber, Echo and Antiphony, added 2026-08-27, and Execution discipline, added 2026-08-28 | the whole room | 2026-08-28 |
| `protocols/presentation.md` | How a result reaches the person who asked: Rule 0 on whether a choice exists at all, the surface-to-decision-shape mapping, the content-type routing table with a markdown fallback for every widget, and the per-Composer override mechanism that keeps the shared contract shared | jkornobis | 2026-08-27 |
| `protocols/presentation-checklist.md` | Six yes/no gates run before a message leaves: is this decision determinable, is every voice attributed, does the line count track positions, is every option tagged and persisted, does the turn end in one of five shapes — an irreversible action, a question, a stated doubt, a task list or a use case — and, when the response opposes the Composer, does it state the idea's strongest form first | jkornobis | 2026-08-27 |
| `protocols/pane-guard.md` | Four registers for a surface the orchestra can both read and act on: what the Browser pane is and where it does not exist, the same four registers mapped onto the terminal, green through black, Spotlighting turned from a reading discipline into an actuation one, and the measurement proving no property of the instrument stands between a read and a commit | jkornobis | 2026-08-29 |
| `protocols/agile_facilitator_score.md` | How the router reads intention rather than keywords: the interpreter model, the six response modes, the chat triggers, and conversation versus execution | jkornobis | 2026-08-17 |
| `protocols/orchestra_test_harness.md` | Testing a multi-agent system's own behaviour: BDD scenarios, the invariant and capability eval sets, the standard grader prompt, and why a grader must be constant | jkornobis | 2026-08-17 |
| `protocols/session_journal.md` | The episodic memory layer above indexed memory: what a session journal entry captures, where it lives, and how a later session re-orients from it | jkornobis | 2026-08-22 |
| `protocols/sync_protocol.md` | Shipping a change safely: test, refactor, test, review, sync, test the sync — effort-tiered, with the gate owner named at each step | jkornobis | 2026-08-16 |
| `protocols/chair-review.md` | How a proposed addition to a chair's knowledge is judged by the Agile Auditor, User Researcher and Product Owner rather than by the chair itself, with a Keep/Revise/Drop verdict and a gate that stops the build until the Composer's next word | jkornobis | 2026-08-28 |
| `protocols/tool-audit.md` | The one-time, file-backed setup step for deploying onto a new tool: critical facts verified this session rather than recalled, recommended skills proposed rather than applied, and a per-page re-audit clock that a default must admit is a default | jkornobis | 2026-08-28 |
| `protocols/tool-discovery.md` | How the orchestra finds what it cannot reach: the six questions that judge a candidate — lineage, posture, health, grip, why, licence — who gathers, who weighs, who validates, and why the protocol never installs anything | jkornobis | 2026-08-28 |
| `protocols/onboarding.md` | One move before anything else — ask the Composer to call their Key, because the orchestra can detect one and never open it — then, only if none is in play, two questions and no more | jkornobis | 2026-08-28 |
| `protocols/triggers.md` | Full semantics and response formats for every typed trigger, the rule that a mode persists only by being echoed, and why breadth is a single-shot Auditorium rather than a sustained mode | jkornobis | 2026-08-28 |
| `protocols/widget-templates.md` | The emoji and colour per musician that every attribution line is drawn from, plus four blocks of markup reproduced verbatim — Note Picker, Auditorium, stat tiles and the coverage matrix — so a widget is rebuilt rather than reinvented | jkornobis | 2026-08-28 |

## Method — craft that outlives a tool

| Page | Covers | Published by | Published |
|---|---|---|---|
| `method/agile_auditor_catalog.md` | The master list of anti-patterns the Agile Auditor watches for, consolidated from criteria scattered across the score | jkornobis | 2026-08-16 |
| `method/orchestra_glossary.md` | One definition per term for the whole system: roles, artifacts, modes, triggers and named principles, so no word means two things | jkornobis | 2026-08-22 |
| `method/evidence.md` | The executable core and only that: when a real subagent is worth 3–15× a persona and the three fit cases that justify one, the model facts that change what you type, and a routing table to the research this page deliberately does not carry | jkornobis | 2026-08-28 |
| `method/capacity.md` | How a session reports its own usage against a budget, why the reading is always fresh rather than recalled, and what a live-state snapshot carries into the next session | jkornobis | 2026-08-28 |
| `method/time-management.md` | Time as a presentation option rather than a rule: none, ambient, scheduled and time-boxing, each keyed off a timezone and a set of working hours the Composer declares | jkornobis | 2026-08-28 |

## Recorded — provenance rather than working knowledge

**Ruled 2026-09-01.** These pages are read *after* a decision rather than held before one: removing
any of them changes what no musician does. They are this library doing its second job — *the skill
executes; the repo remembers* (`principles/core-principles.md`) — applied one level down, to the
repository's own contents rather than to the skill.

They stay fetchable and stay cited. **What changes is the clock: the retirement rule at the foot of
this index governs the served half of the library, not this section.** Provenance does not go stale.
It records what was true when it was written, which is the whole of its value.

| Page | Covers | Published by | Published |
|---|---|---|---|
| `method/common_score_matrix.md` | How each of the 12 musicians connects to the shared knowledge fields, across all 11 Acts | jkornobis | 2026-08-22 |
| `method/common_score_pivot.md` | Two relation types over the same twelve chairs: undirected shared concerns, sixteen of twenty-eight carrying an external standard and twelve counted aloud as blank, and directed requires-serves dependencies that a shared-concern reading cannot see | jkornobis | 2026-08-26 |
| `method/prior_art_bmad.md` | A focused deep-dive on one comparable multi-agent framework, and three re-readings of it — including the one that found the comparison had been between a pipeline and a roster | jkornobis | 2026-08-22 |
| `method/multiagent_canon_audit.md` | The orchestra mapped against the 2026 multi-agent state of the art | jkornobis | 2026-07-03 |
| `method/orchestra_prior_art.md` | Where a persona-based orchestra sits against published multi-agent practice, plus the substrate facts on long-context rule decay and what the measurements actually support | jkornobis | 2026-08-16 |
| `method/web-lineage.md` | Six eras of the web, the lesson each one left, the dream that keeps returning, and the loop underneath all of them — the essay, distinct from the per-chair tool lineage index | jkornobis | 2026-08-28 |

### Mandalas — the three layers and the borders between them

**The model, and how each edge was earned.** Three rings — 33 principles, 59 protocols, 12 chairs —
and three borders carrying 282 crossings between them: `warrant` (a protocol puts a principle into
practice), `grounds` (a chair requires a principle), `enacts` (a chair puts a protocol into practice).
**Every edge quotes the sentence that earns it**, and every page opens by declaring the set it
searched before it searched it.

| Page | Covers | Serves | Published |
|---|---|---|---|
| `mandalas/principles-layer.md` | The principles ring re-derived from the principle bodies rather than inherited: the declared circle, both taijitu seeds read from source, and where the two derivation methods agree and part | the whole room | 2026-08-16 |
| `mandalas/protocols-layer.md` | The protocols ring: every protocol as a taijitu of the maxim it holds and the practice it asks for, with protocol-to-protocol edges each earned by a quote, and what the graph shows before it is drawn | the whole room | 2026-08-16 |
| `mandalas/border-protocols-principles.md` | The first border, warrant: which principle authorizes each protocol, arrows running Yang to Yin. A protocol with no warrant is a finding rather than an illegitimacy, and the map does not decide which | the whole room | 2026-08-16 |
| `mandalas/border-chairs-principles.md` | The second border, grounds: which principle each chair requires to do its job, every edge quoting the chair's own sentence — plus the 2026-08-15 re-measurement to read before quoting anything | the whole room | 2026-08-17 |
| `mandalas/border-chairs-protocols.md` | The third border, enacts: which protocols each chair puts into practice. The one that closes the triangle, after which the meta-mandala can be a result rather than a premise | the whole room | 2026-08-17 |

### Graph — the model as data, for traversing rather than reading

**The mandala pages are the reasoning; this is its result in machine-readable form.** 104 nodes
across three rings, 251 within-layer edges, 282 crossings — every evidence-bearing edge carrying
the sentence that earns it and a `status` saying how well it is held. Derived mechanically from
the pages above and regenerated, never hand-edited.

| Page | Covers | Serves | Published |
|---|---|---|---|
| `graph/grand-ensemble-graph.md` | How to read the dataset: the four edge statuses and why collapsing them loses the only thing the graph adds over a diagram, plus two provenance caveats about paths written in the source repo's coordinates | the whole room | 2026-08-26 |
| `graph/grand_ensemble.json` | The dataset itself, 472 KB — three layers, the movements, the shared concerns and the three borders, with every node's résumé and every edge's `why` | the whole room | 2026-08-26 |


## Principles — the claims the rest stands on

| Page | Covers | Serves | Published |
|---|---|---|---|
| `principles/core-principles.md` | The Orchestrator's principles: NDT and the Greenfield Reset, the deletion protocol, Demos Kratos and why an orchestra cannot self-legitimate, overshoot, the cobbler's children, and the oracle rule that an instrument is not its own oracle — plus The Composer as Neuron, added 2026-08-27, and Honest but kind, the register every exchange is spoken in, added 2026-08-29 | the whole room | 2026-08-29 |

---

**What this library is not:** it is **public**, so it carries nothing internal to an employer and
nothing under NDA — **nor the employer's name, nor anything derived from it** (ruled 2026-08-27). It carries **no project** — a concert is not the instrument, and each Composer carries
their own in their own `project/` tree. And it carries no Composer Key and nothing personal: if
key material travels everywhere, it *is* everywhere. It carries what is true about an instrument
**for whoever plays it**, never one estate's history.

**Three rules on what enters it, and one on what leaves** (ruled 2026-09-01). They sit here rather
than in a protocol page for the reason this index already gives: a rule fetched by the thing it
constrains is not a constraint, and this is the only page read first. The reasoning behind them is
deliberately not here.

- **One question decides.** *Must a musician know this before calling it?* If the capability has to
  be held in advance — to route to it, to choose between it and something else, or to refuse it —
  it is a candidate for a page. If not, the call is its own verification: the thing is used freely
  and never recorded. This is the oracle rule read backwards — where a report needs no attestation,
  there is nothing to write down.
- **No page without a hand on the instrument.** `tools/chair-levers.md` rules a file written before
  its musician has handled the tool *"plausible documentation"*, and that *"an absent one is better
  than a stubbed one."* That holds for every page here, not only under `tools/yang/`.
- **One page per surface, never per capability.** A vendor, a platform or a client is one surface
  however many features it ships. `tools/README.md` already says *"One page per deployment
  surface"*; it binds the whole library.
- **Removing a row retires a page.** This index is the only route in, so de-listing removes a page
  from the library while the file and its history stay and `git revert` returns it. A stale flag may
  therefore end in **retire** as well as refresh. A retirement names what leaves and why — never as
  *cleanup*, never batched as tidying, because `principles/core-principles.md` records what that
  word cost once. Deleting the **file** is untouched by this: still a Greenfield Reset boundary,
  still the deletion protocol's five statements in full.

**What was already possible, said here so it is not rediscovered as missing:**
`protocols/chair-review.md`'s **Drop** verdict already removes merged content and already runs
backward over it (13 additions re-examined, 2026-07-04). The only gap these rules close is
de-listing a whole page. Prior art for the shape: library **weeding** (CREW), **RFC 2026**'s
Historic status, and the ADR **Superseded** state.

## Observed, not yet decided

**A register of what a read found and no one has ruled on.** Opened 2026-09-01 by a pass that read all
71 pages against their own `title` and `description`. An entry states what was seen and **what would
decide it** — never a verdict. **A row leaves this table when it is decided**, by the same mechanic as
any other row here: it is deleted, and the history keeps it. The pattern is `tools/register.md`'s
*Seams with no lever yet* — the one surface that records where to look rather than what was found.

**The class matters more than any single row.** Eight of thirteen are pages whose description hides
what they hold, not pages claiming what they lack. **This library undersells.** And no check catches
it: `check_okf.mjs` validates shape, `check_links.mjs` validates resolution, and **neither can
validate a claim.**

| Observed | What would decide it |
|---|---|
| `method/time-management.md` — title says *four methods*, body defines **two**; `scheduled` and `time-boxing` appear nowhere in the body | whether the skill defines four. A wording fix, or a missing section |
| `chairs/user_researcher_references.md` — generic description over the library's only page on hallucinated-citation and retraction screening | a description naming its subject |
| `principles/core-principles.md` — enumerates, reads complete, stops before ten further principles incl. the Declared Circle | whether the description should enumerate at all |
| `tools/figma-method.md` — description covers the first third; the token/slot mandate, the design-system DoD and a 19-rule Part 2 are unhinted | how much a description owes a merged page |
| `mandalas/border-chairs-protocols.md` — described as one relation; the body rules *"this border has two relations, not one"* | which reading is current |
| `chairs/engineer_references.md` — generic description over the Context7 ID table for the token toolchain | a description naming its subject |
| `tools/claude-desktop.md` — a fifth Critical bullet (a repeating push-time `git worktree` failure and its fix) is unhinted | whether Critical bullets belong in a description |
| `protocols/agile_facilitator_score.md` — the discourse protocol and the backpropagation loop are unhinted | as above |
| `method/prior_art_bmad.md` — claims *three re-readings*; the body has three reads and two re-readings | whether the word is loose or exact |
| `tools/tokens-studio.md` — header says `Re-audit: 15 days`, the body says *"this page's clock is 60 days"* | which clock is real |
| `protocols/agile_facilitator_score.md` — Auditorium table says *all 12 musicians* over ten rows, and orders *ascending* where `protocols/triggers.md` says descending | which is canonical |
| `method/common_score_matrix.md` — summary says *132 connections*; Act X is deliberately empty, so 120 are delivered | whether a declared-empty Act counts |
| Two more bare names are clickable **routes**, not provenance: `protocol_warrant_map.md` and `principle_chair_map.md`, linked from the mandala borders | whether they are deliberately unpublished like the Figma surface audit, or were meant to travel |
| `check_links.mjs` cannot tell a **route** from a **provenance marker** — 111 bare names exist nowhere here, 108 are provenance and 3 were links a reader would follow | whether a markdown-linked bare name should fail the check while a cited one does not |

Licensed CC BY-SA 4.0.
