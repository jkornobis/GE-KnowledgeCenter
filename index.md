---
okf_version: 0.2
---

# GE-KnowledgeCenter — index

Every page an agent should fetch — what it covers, who published it and when.
**Read this before fetching anything but `start.md`, which sends you here.** If a subject is not listed here, the library does not
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
it has checked and passed. **And every `*.mjs` at this bundle's root is an exception to the history rule**, because those are
runnable files here rather than another estate's coordinates. **The rule is the location, not a
list** — `ls *.mjs` is the authority, and what follows names only what each kind *does*.

**Three fail a merge:** `check_okf.mjs` reads conformance, `check_links.mjs` reads resolution,
`check_frozen_counts.mjs --strict` reads whether a live page states a corpus count the graph
contradicts.

**The reporters never block** — `sweep_links.mjs` sweeps outward addresses; `check_corpus_freshness.mjs`
asks whether this bundle's copy of `graph/grand_ensemble.json` is still the corpus's, **and it takes
the corpus's location as an argument because this library carries no estate's address**;
`map_pages.mjs` joins these pages to the corpus; `rank_residency.mjs` weighs what a page costs to
hold against what it answers; `card.mjs` returns a body as a card; `tracing_floor.mjs` draws the way
in at the start of a session in this repository.

**`render_solar.mjs` writes always**, drawing `mandalas/solar-deep.svg`, `solar-orrery.svg` and `solar-faceon.svg` from the same
graph — three projections of one construction, compared side by side in `mandalas/solar-variants.html` —
and `mandalas/corona-ring.svg`, `corona-cloud.svg` and `corona-named.svg` under `--corona=`, three
treatments of the one band a projection choice does not settle, compared in `mandalas/corona-variants.html` — a picture is an artefact rather
than a measurement, and it is kept separate from the analysis scripts for that reason. **Those** read
`graph/grand_ensemble.json` and write nothing at all, one proposing **hypotheses**, one measuring
whether this corpus carries the stability signature of a natural network, one ranking the
bodies that sit furthest from what the structure predicts, one measuring how the warrant border
couples protocols to principles, one asking what KIND of thing each imbalance is, and one measuring
what changes when the Composer is added to the graph as the centre the corpus does not contain.

*De-frozen 2026-09-11 (`#42`), on its third failure. This clause used to enumerate the scripts and
carry its own count: it said **eight** while enumerating five, corrected 2026-09-07 when the ninth
was added, and said **eleven** when there were fifteen. **Extended three times without its own
arithmetic being re-read** — the defect this index records against other pages, in itself, and the
reason the list is now a location rather than a sentence. `check_frozen_counts.mjs` cannot see this
class: the noun was `bare names`, not a corpus count.*

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

Fetch a page with — a live address, and the shape for any other:

    curl -s https://raw.githubusercontent.com/jkornobis/GE-KnowledgeCenter/main/start.md
                                                                            ^^^^^^^^ any `Page` from the tables below

*It was written with a `<Page>` placeholder until 2026-09-07, which made it the only address
`sweep_links.mjs` has ever reported dead here: the sweep resolves what is written, and what was
written was a directory. A template that cannot be checked is indistinguishable from rot, and the
fix is an address that is both.*

## Before this page — `start.md`

**`start.md` is fetched first, and it hands off to here.** It says what an orchestra already holds
before its first answer, what it reaches for and in what order, what changes when it leads a
repository, and what a failed fetch means. This index remains the only route into the library; the
boot page is what tells an instance to open it.

| Page | Covers | Serves | Published |
|---|---|---|---|
| `start.md` | What an orchestra already holds before its first answer, what it fetches first and in what order, what changes when it leads a repository, and what a failed fetch means. | every instance, named or not | 2026-09-06 |

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
| **Make self-questioning, not proving someone wrong** — challenge a party that can re-derive with the question, never the verdict | `principles/core-principles.md` | a comment is formed before it is sent, and a verdict cannot be un-passed |
| **The presentation gate** — the message costs the Composer the decision and nothing else; everything behind it is record | `protocols/presentation-checklist.md` | it runs before send; a gate that arrives with the message is not a gate |

**Everything else in this library is a lookup**, reached **when a task turns on a fact about a
surface** — which is this repository's own wording, from `README.md`, and it is task-shaped on
purpose: `chairs/the-twelve-chairs.md` for the routing table itself, then a chair's canon, a tool's
real capabilities, a protocol that fires in response to something already recognised, the mandala
borders, the graph.

⚠️ **This sentence used to read *"reached when a question arrives"*, and that wording had a hole
large enough to lose a deliverable through.** **Producing is not answering.** An instance that
believes it is assembling rather than being asked can satisfy a request-shaped rule honestly and
still read nothing — which is what happened on 2026-09-04, recorded in issue #23: a complete board
was built on the Figma surface having fetched **zero** pages from this library, and it carried five
layout defects of exactly the kind the unread page exists to prevent. Reachability was never the
problem; both fetches returned 200 on the first attempt when they were finally tried.

**So the trigger is the work touching a subject, not a question arriving about one.** **Building on a
surface is a task that turns on facts about that surface** — its real capabilities, its limits,
the defaults it must beat — and the page governing it is owed *before* the first thing is made, not
after the result is judged.

**The correction is a reconciliation rather than a new rule.** `README.md` already said *"fetch on
demand, never on principle — open a page when a task turns on a fact about a surface"*, and this
index had drifted to a narrower shape. **The library held the right rule on the page a traveler is
not told to fetch first.** What changed here is that the two now agree.

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
| `tools/lineage.md` | Twelve chairs, each with the origin it started from, the leap that changed it, the current best-in-class, and the years between the two — the index a chair's tool pages hang from | the whole room | 2026-08-16 |
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
| `tools/wekan.md` | The kanban surface an agent can read and must not trust: HTTP 200 on success, on no token and on routes that do not exist; writes acknowledged and never performed; and a list created through the API that is never drawn | Product Owner, Agile Facilitator, Software Engineer, User Researcher | 2026-09-06 |
| `tools/forgejo.md` | The forge an orchestra records on: correct HTTP semantics where the kanban surface has none, bidirectional issue dependencies, boards absent from the API entirely, and issues an agent can create and never delete | Software Engineer, Software Architect, Product Owner, Agile Facilitator, User Researcher | 2026-09-06 |
| `tools/README.md` | What a tool page records and why: the vantage point a reading was taken from, its verification state, and the three layers that stop a toolset being hand-rolled | the whole room | 2026-08-16 |
| `tools/_template.md` | The skeleton a Tool Audit fills: chair and lever, lineage, Context7 id resolved rather than recalled, defects and friction from two named routes with the friction's class, and limits marked tool or reasoning | User Researcher | 2026-08-16 |
| `tools/cowork.md` | Cowork mode in Claude Desktop: skills and their references do load, and the defining constraint is that the pass runs unwatched — with the audit brief for everything still unverified | User Researcher | 2026-08-22 |
| `tools/claude-desktop.md` | Claude Desktop on Windows: the 1024-character skill-description limit, .skill as a zip of a directory, a menu that is not the registry, and why a shell-side localhost is not the machine | the whole room | 2026-08-22 |
| `tools/register-sweeps.md` | The dated passes over the lever register: sweep 1 of 2026-08-05 and its scored candidates, sweep 2 of 2026-09-04 and what it was obliged to do — kept as the record of how the register came to say what it says, and correct only as of those days | the whole room | 2026-09-10 |
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
| `tools/yang/design_engineer.md` | Design Engineer lever index for the token crossing: Figma Variables and Code Connect keyed by intent, each row naming the default it must beat, plus the trap in publish --force | Design Engineer | 2026-08-16 |
| `tools/figma-method.md` | Eyes first and code second: the working loop for a design surface, what the eyes read in a structured file, and why text-only spatial reasoning collapses as a layout grows | the whole room | 2026-08-28 |

## Chairs — what a seat knows

| Page | Covers | Published by | Published |
|---|---|---|---|
| `chairs/the-twelve-chairs.md` | What each seat is, the four instrument families, the routing table that turns a request into an ensemble, and the canonical duets — the layer a traveler needs before any chair's references are worth opening | jkornobis | 2026-08-26 |
| `chairs/references-candidates.md` | Ten chairs carry a field-reference file and two do not; this assembles the candidates for both so the Composer can tier rather than gather — what the corpus already binds to each chair, what this library already holds, and external sources with every address verified to resolve, with the tier column deliberately empty | UX Designer, Design Engineer | 2026-09-10 |
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
| `protocols/library-conventions.md` | The house rules that were carried inside the index and are now one hop away: which instance is speaking and how it says so, where this library writes and where it publishes, and the three conventions a page obeys about its own claims — a measurement carries its reference, a record says so, and provenance stays while autobiography goes | the whole room | 2026-09-10 |
| `protocols/orchestra-protocols.md` | The Concert Quorum and the five-tier effort ladder, the Delegation Brief, personas versus real subagents and their economics, Independent Verification, the routing table, the Definition of Done, Spotlighting — plus the spawn gate, the risk-tier re-ask, Lots, the runtime spot-check and the roadmap cadence, Chamber, Echo and Antiphony, and Execution discipline | the whole room | 2026-08-28 |
| `protocols/presentation.md` | The contract for how a result reaches the person who asked: the one logic every rule derives from, Rule 0 on whether a choice exists at all, the surface-to-decision-shape mapping, the routing table from content type to widget to markdown fallback, and the per-Composer override mechanism with the one thing it may not override | jkornobis | 2026-08-27 |
| `protocols/presentation-surfaces.md` | Three surfaces and the one question that picks between them: the message carries the decision, the page carries the explanation, the table carries the data — plus the named authority to defer to when no rule here covers the case | Content Designer, Agile Facilitator | 2026-09-08 |
| `protocols/presentation-checklist.md` | The message costs the Composer the decision and nothing else; everything behind it is record. Seven checks derive from that one logic — determinable or his, attributed, actionable, ended in one of five shapes, opposed with the steelman first, counted, and named once — plus the three acts that separate admitting an error from telling it, and the quorum that decides what is worth surfacing at all | jkornobis | 2026-08-27 |
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

## Tutorial — learning by doing, and there is one

**Ruled 2026-09-09: this library should teach.** A tutorial is not a longer how-to — it serves a
reader who has neither the domain nor a goal, so it needs a named learner, a safe first task and an
outcome the learner can verify without asking anyone. **This one has all three because the gates
supply the third.**

| Page | Covers | Serves | Published |
|---|---|---|---|
| `tutorial/first-contribution.md` | The first tutorial in this library: an instance that has never contributed here adds one page and merges it, learning the two gates, the index rule and the heredoc rule by running them rather than by reading about them — with a verified outcome at every step | the whole room | 2026-09-09 |

## Method — craft that outlives a tool

| Page | Covers | Published by | Published |
|---|---|---|---|
| `method/agile_auditor_catalog.md` | The master list of anti-patterns the Agile Auditor watches for, consolidated from criteria scattered across the score | jkornobis | 2026-08-16 |
| `method/orchestra_glossary.md` | One definition per term for the whole system: roles, artifacts, modes, triggers and named principles, so no word means two things | jkornobis | 2026-08-22 |
| `method/chair-vocabulary.md` | The names one concept answers to across chairs, families and surfaces, so knowledge can be found when it is filed under a word you did not search for | jkornobis | 2026-09-05 |
| `method/evidence.md` | The executable core and only that: when a real subagent is worth 3–15× a persona and the three fit cases that justify one, the model facts that change what you type, and a routing table to the research this page deliberately does not carry | jkornobis | 2026-08-28 |
| `method/sources-and-rederivation.md` | Why every principle, protocol, chair and tool page carries the address its claims came from: so a later session re-derives rather than re-searches, and gets the same reasoning instead of whatever ranked well that day | jkornobis | 2026-09-05 |
| `method/finding-a-page.md` | How this library is meant to be reached: not by reading its catalogue but by pulling a card — name, tags, a derived shelfmark and links — with entry points for a reader who does not know a name and a question back when the answer is too wide; and the cost rule underneath it, that a page mixing a lookup surface with rules and with history is paid for in full by every reader who wanted one line | Software Architect, Content Designer, UX Designer | 2026-09-11 |
| `method/the-floor.md` | A session's floor is the prompt that exists before any work: measurable in four lines of arithmetic from a transcript, reproduced here on two independently configured instances, with the finding that the floor dominates an arrival and is a small minority of a whole session — so the two economies available are not the same economy and do not pay in the same place | Reliability Engineer, Agile Facilitator, Product Owner | 2026-09-10 |
| `method/capacity.md` | How a session reports its own usage against a budget, why the reading is always fresh rather than recalled, and what a live-state snapshot carries into the next session | jkornobis | 2026-08-28 |
| `method/time-management.md` | Time as a presentation option rather than a rule: none, ambient, scheduled and time-boxing, each keyed off a timezone and a set of working hours the Composer declares | jkornobis | 2026-08-28 |
| `method/design-review.md` | Why a review finds nothing until enough of the system exists to walk: the three layers of design knowledge and which of them a tool can actually see, the passes that each need the previous one as comparison surface, the prepare-versus-build boundary, and the three modalities a review surface needs before it is one | jkornobis | 2026-09-02 |
| `method/ai-assistant-patterns.md` | Three patterns for a surface where an assistant mediates between a person and a process: why a static action menu is the absence of intelligence, why context-awareness and state-awareness are two different layers and only one of them is hard, and why every review board turns out to be case management | jkornobis | 2026-09-02 |
| `method/software-selection.md` | Why 'is this project alive' and 'does this project suit me' need opposite instruments and opposite orders, the four steps that put weights before candidates, the in-box check that precedes any candidate list, the eliminatory pair an unmaintained add-on makes with a rolling host, and the measured cost of running them backwards | Product Owner, User Researcher, Software Architect | 2026-09-07 |
| `method/recording-a-rule.md` | Before a rule lands anywhere durable it carries a level — session, which dies at the boundary, or standing, which binds every future session — and the level belongs to the Composer; why that is a different object from marking a document a record, and why the case that actually bites is the sub-decision an instance takes inside someone else's ruling | Agile Facilitator, Agile Auditor, Content Designer | 2026-09-09 |
| `method/judging-a-tool.md` | Lineage, posture, health, grip, why and licence: what each question asks of a tool, who answers it, and the schema a lever entry fills — separated from the register itself because judging a tool and looking one up are different acts and only one of them needs the other page | User Researcher, Product Owner, Software Architect | 2026-09-10 |
| `method/reading-the-whole.md` | Why a worker with a summarising tool acts on the head, the tail, the count or the status code instead of the thing itself — the four substitutions, the asymmetry that makes the rule survive a token budget (a read spends context, a write built on half a read spends work), and eleven dated occurrences behind it | the whole room | 2026-09-11 |
| `method/reading-a-tracker.md` | The two rules that govern how an instance reads an issue surface: selection happens on titles and comment counts in one list call, and whatever is selected is read in full — body AND thread — because a body is where an issue opened and the thread is where it stands | Agile Facilitator, Product Owner, Agile Auditor | 2026-09-09 |
| `method/ranking.md` | The form every close-out and backlog view is rendered in: what each of the five categories means, why postpone and recycle are not the same thing, why delegate is empty for a Composer working alone, and why the glyphs and the table-and-buttons pair are shared method rather than one Composer's taste | Product Owner, Agile Facilitator, Content Designer | 2026-09-08 |
| `method/graph-layout.md` | The three answers to where a node is placed — emergent, authored, hybrid — the ambiguity a force-directed layout carries and why viewers read it anyway, what a third dimension actually buys measured against what it costs, and the interaction features worth taking from tools built for graphs a thousand times larger than ours | UX Designer, Design Engineer, User Researcher | 2026-09-08 |
| `method/the-lodge.md` | What a cathedral lodge used to keep a hundred-year project coherent across people who never met, and the catalogue Alexandria wrote fifteen centuries before it — six instruments mapped one by one onto what an orchestra working across sessions has and lacks, the entry structure that let a copy be checked, and the four lessons that survive the translation | Software Architect, UX Designer, Content Designer | 2026-09-09 |

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

**The model, and how each edge was earned.** Three rings — principles, protocols, and the twelve
chairs — and three borders carrying the crossings between them: `warrant` (a protocol puts a
principle into practice), `grounds` (a chair requires a principle), `enacts` (a chair puts a protocol
into practice).

⚠️ **The counts are deliberately not written here.** This paragraph said *33 principles, 59
protocols, 282 crossings*; the corpus holds more of each, and it has moved twice in a fortnight.
**Re-derive from `graph/grand_ensemble.json`**, which is regenerated mechanically and never
hand-edited. The twelve chairs are the exception and are stated, because that number is fixed by
invariant rather than by measurement.
<!-- quoted: 33 / 59 / 282 are retracted here, not claimed — check_frozen_counts skips this paragraph -->
**Every edge quotes the sentence that earns it**, and every page opens by declaring the set it
searched before it searched it.

**A fourth ring has a page and no border.** `mandalas/movements-layer.md`, added 2026-09-02, covers
the 12 cultural movements — **the layer that had no crossing at all until 2026-09-10**, when seven
`descends-from` edges closed it, one per chair the Composer ruled. **The zero was the finding; its
closing is the answer to it.** The page argues one movement-to-chair border in prose and leaves eleven undrawn; none is in the
graph yet. It is the first page in `mandalas/` written from outside this library.

| Page | Covers | Serves | Published |
|---|---|---|---|
| `mandalas/principles-layer.md` | The principles ring re-derived from the principle bodies rather than inherited: the declared circle, both taijitu seeds read from source, and where the two derivation methods agree and part | the whole room | 2026-08-16 |
| `mandalas/protocols-layer.md` | The protocols ring: every protocol as a taijitu of the maxim it holds and the practice it asks for, with protocol-to-protocol edges each earned by a quote, and what the graph shows before it is drawn | the whole room | 2026-08-16 |
| `mandalas/border-protocols-principles.md` | The first border, warrant: which principle authorizes each protocol, arrows running Yang to Yin. A protocol with no warrant is a finding rather than an illegitimacy, and the map does not decide which | the whole room | 2026-08-16 |
| `mandalas/border-chairs-principles.md` | The second border, grounds: which principle each chair requires to do its job, every edge quoting the chair's own sentence — plus the 2026-08-15 re-measurement to read before quoting anything | the whole room | 2026-08-17 |
| `mandalas/border-chairs-protocols.md` | The third border, enacts: which protocols each chair puts into practice. The one that closes the triangle, after which the meta-mandala can be a result rather than a premise | the whole room | 2026-08-17 |
| `mandalas/movements-layer.md` | Twelve cultural movements that carried 7 internal edges and no crossings at all until 2026-09-10: the measurement, the reason it was the shadow of a missing document, the Composer's claim that chairs ARE movements, and the seven descends-from edges that closed it | the whole room | 2026-09-02 |
| `mandalas/movements-candidates.md` | Evidence gathered per chair and per movement so the Composer can rule rather than guess: seven borders with a date on both sides, two contested, three chairs with no candidate among the twelve, and five movements no craft evidence can reach | the whole room | 2026-09-08 |

### Graph — the model as data, for traversing rather than reading

**The mandala pages are the reasoning; this is its result in machine-readable form.** Every
evidence-bearing edge carries the sentence that earns it and a `status` saying how well it is held.
Derived mechanically from the pages above and regenerated, never hand-edited.

**Its node and edge counts are read from the file, not from this line.** They were written here as
*104 nodes, 251 within-layer edges, 282 crossings* and were wrong on all three by the time anyone
read them — the artifact is the authority on its own size.
<!-- quoted: 104 / 251 / 282 are retracted here, not claimed — check_frozen_counts skips this paragraph -->

| Page | Covers | Serves | Published |
|---|---|---|---|
| `graph/grand-ensemble-graph.md` | The machine-readable form of the three rings and their borders, every evidence-bearing edge carrying the sentence that earns it and a status saying how well it is held — with its own size read from the file rather than frozen in a sentence | the whole room | 2026-08-26 |
| `graph/grand_ensemble.json` | The dataset itself, 472 KB — three layers, the movements, the shared concerns and the three borders, with every node's résumé and every edge's `why` | the whole room | 2026-08-26 |


## Principles — the claims the rest stands on

| Page | Covers | Serves | Published |
|---|---|---|---|
| `principles/core-principles.md` | The Orchestrator's principles: NDT and the Greenfield Reset, the deletion protocol, Demos Kratos and why an orchestra cannot self-legitimate, overshoot, the cobbler's children, the oracle rule that an instrument is not its own oracle and its companion — make self-questioning rather than proving someone wrong — plus The Composer as Neuron, and Honest but kind, the register every exchange is spoken in | the whole room | 2026-08-29 |

## Session log — this repository's own state

**Not knowledge, and not provenance.** It is the episodic thread for this repository: what each
session played here, what it left open, and what waits on the Composer. It is listed because
`protocols/session_journal.md` says a resuming session re-orients from it — so it is a page an agent
should fetch, which is the only test this index applies.

**It sits outside the Recorded section on purpose.** That section holds pages whose value is that
they do not go stale. This one goes stale by design: the newest entry is the live one, and every
entry above it is history that must not be edited.

| Page | Covers | Serves | Published |
|---|---|---|---|
| `SESSION_LOG.md` | Episodic memory for GE-KnowledgeCenter: what each session played, what it left on the stand, and what waits on the Composer. Chronological, append-only, newest at the bottom. | the whole room | 2026-09-02 |

**The root also carries `CLAUDE.md`, and it is deliberately not listed.** It is the floor of the
instance that leads this repository — loaded by its session before the first sentence, never fetched
by a reader. By this index's only test — *is this a page an agent should fetch* — it is not one, so
listing it would advertise one instance's tuning as shared method. It is still a concept document to
`check_okf.mjs`, and carries frontmatter accordingly.

---

## Conventions — signing, publishing, and what a page may claim

**Moved out of this index on 2026-09-10 to `protocols/library-conventions.md`.** They are rules
that fire when you *act* — signing a commit or a comment, publishing, writing a measurement or a
date onto a page — and none of them is needed to find something here.

⚠️ **This index is still the only route in, and this is a route.** Fetch that page before you sign
anything, before you write a number into a page, and before you decide whether a page is a record.

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
| `method/time-management.md` — title says *four methods*, body defines **two**; `scheduled` and `time-boxing` appear nowhere in the body, and the only box in the file is `Metronome`'s, which the page fences off as *"not a permanent method"* | **the route named as deciding this is closed.** `skill time.md` does not resolve: the deployed skill is a single `SKILL.md`, this index carries no `time.md` row, and the bare name resolves here by the provenance-sibling rule above. No fuller source is reachable. What is left is authoring — write the two absent methods, or cut the description to two |
| `chairs/user_researcher_references.md` — generic description over the library's only page on hallucinated-citation and retraction screening | a description naming its subject |
| `principles/core-principles.md` — enumerates, reads complete, stops before ten further principles incl. the Declared Circle | whether the description should enumerate at all |
| `tools/figma-method.md` — description covers the first third; the token/slot mandate, the design-system DoD and a Part 2 running 1–18 then 20–24 are unhinted | how much a description owes a merged page |
| `mandalas/border-chairs-protocols.md` — described as one relation; the body rules *"this border has two relations, not one"* | which reading is current |
| `chairs/engineer_references.md` — generic description over the Context7 ID table for the token toolchain | a description naming its subject |
| `tools/claude-desktop.md` — a fifth Critical bullet (a repeating push-time `git worktree` failure and its fix) is unhinted | whether Critical bullets belong in a description |
| `protocols/agile_facilitator_score.md` — the discourse protocol and the backpropagation loop are unhinted | as above |
| `method/prior_art_bmad.md` — claims *three re-readings*; the body has three reads and two re-readings | whether the word is loose or exact |
| `tools/tokens-studio.md` — header says `Re-audit: 15 days`, the body says *"this page's clock is 60 days"* | which clock is real |
| `protocols/agile_facilitator_score.md` — Auditorium table says *all 12 musicians* over ten rows, and orders *ascending* where `protocols/triggers.md` says descending — **and the same two chairs, Design Engineer and Reliability Engineer, were missing from `method/orchestra_glossary.md`, corrected 2026-09-01. Two instances makes it a pattern, not a slip** | which is canonical, and whether other pages inherited the same ten-chair era |
| `method/common_score_matrix.md` — summary says *132 connections*; Act X is deliberately empty, so 120 are delivered | whether a declared-empty Act counts |
| Two more bare names are clickable **routes**, not provenance: `protocol_warrant_map.md` and `principle_chair_map.md`, linked from the mandala borders | whether they are deliberately unpublished like the Figma surface audit, or were meant to travel |
| **`absences[0]` states 73 chair↔principle warrants; two derivations give 72.** `graph/grand_ensemble.json` attributes the 73 to `principle_chair_map.md`, measured 2026-08-13 — the unpublished route in the row above. Measured 2026-09-02: the graph itself emits **72** cross edges of kind `grounds`, and the twelve per-chair headings in `mandalas/border-chairs-principles.md` sum to **72**. So the number is most likely right for the document it names and stale for the one a reader can actually reach, and **it cannot be settled from inside this repository at all**. `mandalas/movements-layer.md` carried the 73 into a merged page before review caught it | the same question as the row above — whether `principle_chair_map.md` travels. If it does not, whether the absence is re-stated against `border-chairs-principles.md` instead. Either way the correction belongs in the builder, never in the JSON, which is regenerated rather than hand-edited |
| **Retiring a page leaves no trace any check can read.** Simulated 2026-09-02: the `tools/storybook.md` row deleted from this index, the file kept — `check_okf.mjs` reported **73 concept documents, ✓ conformant**, warnings unchanged, and `check_links.mjs` passed. `walk(ROOT)` collects `.md` files from disk and never reads a table here, so an accidental deletion and a deliberate retirement are the same event | whether `check_okf.mjs` should reconcile index rows against files on disk — and **where a retirement is named.** The rule requires one to name what leaves and why, and designates no surface for it |
| `method/web-lineage.md` carries a **second frontmatter block inside its body** at lines 11–15, in skill format (`name:` / `description:`), followed by a duplicated H1. `check_okf.mjs` passes the page on the first block and never sees the second | whether a body-embedded frontmatter is stripped as an artifact or kept as provenance. It is the extraction defect this index already records three times, arriving in a fourth form |
| **`PROVISIONAL` is a live convention on the `Re-audit:` line and is written down nowhere.** Nine lines measured by `agile-watcher @ acaadb3` carry an interval count, and the split is clean: **n=5, 6, 7 carry the marker (`zod`, `sigstore-cosign`, `vitest`); n=8 and n=9 do not** — no exceptions, threshold between 7 and 8. Neither `tools/README.md` nor `tools/_template.md` names it, and the template’s `Re-audit` line offers three bases and not this one. `tools/git.md` measures **n=5 by hand** and carries no marker. Raised 2026-09-02 by the Workshop instance, which then withdrew it; the withdrawal was checked here and did not hold | whether the marker is `agile-watcher`’s own confidence flag — in which case a hand-measured line is out of scope — or a property of the reading, in which case `tools/git.md` is missing it. Either way, where the threshold is recorded |
| **`tools/README.md` declares a check that nothing in this bundle can run.** It states *"A missing cadence line fails the check"* and names `scripts/check_tool_audit_freshness.mjs` — and **there is no `scripts/` directory here at all.** `tools/figma.md` carried no `Re-audit:` line until 2026-09-02 and still carries no `Audited` line, which that page argues it cannot honestly hold since it became a router carrying no findings of its own | whether the checker travels into this bundle, or the README stops declaring a failure condition no instrument on this ground can see — and whether a router page owes an `Audited` date at all |
| **Two of the twelve chairs have no reference page.** `chairs/` holds ten, and the absent pair is **UX Designer and Design Engineer** — verified 2026-09-02. That is a *different* pair from the glossary's missing two (Design Engineer, Reliability Engineer, corrected 2026-09-01), so this is not one inherited ten-chair era but at least two, with the **Design Engineer absent from both** | whether every chair owes a reference page, or whether `tools/yang/ux_designer.md` and `tools/yang/design_engineer.md` were always meant to serve that role for these two |
| `check_links.mjs` cannot tell a **route** from a **provenance marker** — 111 bare names exist nowhere here, 108 are provenance and 3 were links a reader would follow | whether a markdown-linked bare name should fail the check while a cited one does not |

Licensed CC BY-SA 4.0.
