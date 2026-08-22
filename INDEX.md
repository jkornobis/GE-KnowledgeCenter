# GE-KnowledgeCenter — index

Every page in this library, what it covers, who published it and when.
**Read this before fetching anything.** If a subject is not listed here, the library does not
cover it — say so rather than guessing a path. A 404 means the path was wrong, never that the
knowledge is absent.

Fetch a page with:

    curl -s https://raw.githubusercontent.com/jkornobis/GE-KnowledgeCenter/main/<Page>

**Nothing here has been re-audited yet.** Every page is `status: draft` and carries no `verified`
field, which in OKF terms is the *unverified* tier: published by the estate that wrote it, not
independently confirmed. `Published` below is the date the page last changed in its home repo.


## Tools — what an instrument can actually do

**The lineage index is the way in.** `tools/lineage.md` gives each chair its origin, the leap
that changed it, and the instrument that carries that leap now — the tool pages below hang from
its fourth column.

**Addressable directly.** A tool page is reached by its own path, not through the chair that uses it —
and each page names the chairs it serves, so the link runs both ways.

| Page | Covers | Serves | Published |
|---|---|---|---|
| `tools/lineage.md` | Twelve chairs, each with the origin it started from, the leap that changed it, the current best-in-class, and the years between the two | the whole room | 2026-08-16 |
| `tools/axe-core.md` | The accessibility engine underneath most of the field: what it implements, its ~30-40% ceiling, defects from the tracker and friction from Stack Overflow, and the closed shadow DOM it cannot reach | Accessibility Specialist, QA Engineer, Design Engineer | 2026-08-23 |
| `tools/README.md` | What a tool page records and why: the vantage point a reading was taken from, its verification state, and the three layers that stop a toolset being hand-rolled | the whole room | 2026-08-16 |
| `tools/_template.md` | The skeleton a Tool Audit fills: chair and lever, lineage line, Context7 id resolved rather than recalled, defects and friction read from two sources by named routes, and limits marked tool or reasoning | User Researcher | 2026-08-16 |
| `tools/cowork.md` | Cowork mode in Claude Desktop: skills and their references do load, and the defining constraint is that the pass runs unwatched — with the audit brief for everything still unverified | User Researcher | 2026-08-22 |
| `tools/claude-desktop.md` | Claude Desktop on Windows: the 1024-character skill-description limit, .skill as a zip of a directory, a menu that is not the registry, and why a shell-side localhost is not the machine | the whole room | 2026-08-22 |
| `tools/register.md` | The lever register: what leaps exist and which seats they serve, judged by six questions — lineage, posture, health, grip, why, licence — plus the seams no tool crosses yet | User Researcher, Product Owner, Software Architect | 2026-08-22 |
| `tools/context7.md` | Context7 MCP: on-demand version-pinned library docs — verified tool names, keyless runtime, free-tier limits, and the coverage boundary it does not cross | the whole room | 2026-08-16 |
| `tools/pdf-reading.md` | Reading a PDF on a Claude Desktop machine: four routes tried, one worked — and why a viewer that displays a document returns nothing to the orchestra | the whole room | 2026-08-16 |

### Lever indexes — one per musician, keyed by intent

**Keyed by what you want, not by what the API offers.** Every row names the plausible wrong
default it exists to beat. Two exist; the other ten chairs have no index yet, and an index
written before its musician has handled the instrument is plausible documentation, not craft.

| Page | Covers | Serves | Published |
|---|---|---|---|
| `tools/yang/ux_designer.md` | UX Designer lever index for Figma: seven intents keyed to the Plugin API call that serves them, each row naming the tempting wrong default it exists to beat | UX Designer | 2026-08-16 |
| `tools/yang/design_engineer.md` | Design Engineer lever index for the token crossing: Figma Variables and Code Connect keyed by intent, plus the trap in publish --force | Design Engineer | 2026-08-16 |

## Chairs — what a seat knows

| Page | Covers | Published by | Published |
|---|---|---|---|
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
| `protocols/agile_facilitator_score.md` | How the router reads intention rather than keywords: the interpreter model, the six response modes, the chat triggers, and conversation versus execution | jkornobis | 2026-08-17 |
| `protocols/orchestra_test_harness.md` | Testing a multi-agent system's own behaviour: BDD scenarios, the invariant and capability eval sets, the standard grader prompt, and why a grader must be constant | jkornobis | 2026-08-17 |
| `protocols/session_journal.md` | The episodic memory layer above indexed memory: what a session journal entry captures, where it lives, and how a later session re-orients from it | jkornobis | 2026-08-22 |
| `protocols/sync_protocol.md` | Shipping a change safely: test, refactor, test, review, sync, test the sync — effort-tiered, with the gate owner named at each step | jkornobis | 2026-08-16 |

## Method — craft that outlives a tool

| Page | Covers | Published by | Published |
|---|---|---|---|
| `method/agile_auditor_catalog.md` | The master list of anti-patterns the Agile Auditor watches for, consolidated from criteria scattered across the score | jkornobis | 2026-08-16 |
| `method/common_score_matrix.md` | How each of the 12 musicians connects to the shared knowledge fields, across all 11 Acts | jkornobis | 2026-08-22 |
| `method/prior_art_bmad.md` | A focused deep-dive on one comparable multi-agent framework, and three re-readings of it — including the one that found the comparison had been between a pipeline and a roster | jkornobis | 2026-08-22 |
| `method/multiagent_canon_audit.md` | The orchestra mapped against the 2026 multi-agent state of the art | jkornobis | 2026-07-03 |
| `method/orchestra_glossary.md` | One definition per term for the whole system: roles, artifacts, modes, triggers and named principles, so no word means two things | jkornobis | 2026-08-22 |
| `method/orchestra_prior_art.md` | Where a persona-based orchestra sits against published multi-agent practice, plus the substrate facts on long-context rule decay and what the measurements actually support | jkornobis | 2026-08-16 |

## Principles — the claims the rest stands on

*(none yet — the principles file is held pending a naming decision, not a content one)*

---

**What this library is not:** it is **public**, so it carries nothing DXC-internal and nothing
under NDA. It carries **no project** — a concert is not the instrument, and each Composer carries
their own in their own `project/` tree. And it carries no Composer Key and nothing personal: if
key material travels everywhere, it *is* everywhere. It carries what is true about an instrument
**for whoever plays it**, never one estate's history.

Licensed CC BY-SA 4.0.
