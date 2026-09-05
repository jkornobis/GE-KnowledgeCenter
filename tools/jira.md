---
type: Tool
title: "Tool: Jira — the logic, and the route to its documentation"
description: "Jira at logic level rather than project level: the fetch route that works and the two that fail, the primitives a work item and a board actually are, and the craft slots left deliberately empty until an orchestra has experimented with a real instance"
status: draft
serves: [Product Owner, Software Architect, the whole room]
generated: { by: agent:agile-facilitator, at: 2026-09-01T16:20:23+02:00 }
sources:
  - resource: https://support.atlassian.com/jira-cloud-administration/docs/what-are-issue-types/
    title: "what-are-issue-types"
  - resource: https://support.atlassian.com/jira-cloud-administration/docs/configure-the-issue-type-hierarchy/
    title: "configure-the-issue-type-hierarchy"
  - resource: https://support.atlassian.com/jira-software-cloud/docs/configure-filters/
    title: "What are board filters"
  - resource: https://support.atlassian.com/jira-software-cloud/docs/example-jql-queries-for-board-filters/
    title: "Example JQL queries for board filters"
  - resource: https://support.atlassian.com/jira-software-cloud/docs/manage-custom-filters-in-team-managed-projects/
    title: "Manage custom filters"
  - resource: https://support.atlassian.com/jira-software-cloud/docs/jql-fields/
    title: "JQL fields"
---

# Tool: Jira — the logic, and the route to its documentation

Audited 2026-09-01 by User Researcher. **Documentation, then one live read.** The logic below was first taken from Atlassian's Cloud documentation and then checked against a running **Server / Data Center** instance the same day — see *Cloud and Server are two products at logic level*, which is the correction that read forced. The connector remains unauthorized; the live read was made through a browser on an already-authenticated session, read-only. No Jira instance has been reached from this deployment: the Atlassian connector requires an authorization a non-interactive session cannot run. **Nothing below is a capability claim about a running instance**, and the sections that would carry one are empty and dated rather than filled.

Re-audit: 90 days — default, not measured. Jira Cloud ships continuously and publishes no release interval this audit could measure.

**Chair:** Product Owner — `Serves:` Software Architect, the whole room.

**Lineage — and Jira is not the Product Owner's leap.** `tools/lineage.md` records that chair's leap as **MBO → OKR** (Drucker 1954 → Grove → Doerr 1999), currently carried by *"outcome-based roadmaps; continuous discovery"*. **A tracker is not that instrument.** Jira carries the *work-item substrate* the outcomes are eventually decomposed into, which is a different and lower layer — and naming the gap is the point, because a PO who mistakes the tracker for the strategy instrument has made the error `chairs/product_owner_references.md` calls *"the most common strategy failure"* (Outcomes over Outputs / the Build Trap).

## Context7

**Not resolved this session** — the Context7 MCP is not connected on this deployment, and `tools/context7.md` rules a library ID is *"resolved, not recalled"*.

## The route to the documentation — three routes, and they fail differently

**This is the section the page exists to carry today.** `tools/web-research.md` records the same shape for research generally; these are Atlassian's specifics, verified by the calls themselves on 2026-09-01.

| Route | Result | Read |
|---|---|---|
| `WebFetch` → `support.atlassian.com/jira-cloud-administration/docs/…` | **works** — returns article body | the administration tree is the one that answers logic questions |
| `WebFetch` → `support.atlassian.com/jira-software-cloud/docs/what-are-issue-types/` | **HTTP 404** | the same doc title exists under two trees and only one resolves; a 404 here means the tree was wrong, not that the doc is absent |
| `WebFetch` → `atlassian.com/agile/project-management/…` | **HTTP 200, navigation chrome only** | the marketing tree returns a page with no article body. **A 200 that returns menus is the worst failure of the three**, because it looks like a read |
| `WebSearch` with `allowed_domains` restricted to the Atlassian domains | **works** — returns real content and citable URLs | the reliable way to *find* the right URL before fetching it |

**The working order, therefore: search first to locate the URL, then fetch it from the administration tree.** Fetching a guessed path costs a 404; fetching the marketing tree costs something worse — a plausible empty read.

## Cloud and Server are two products at logic level — the correction a live read forced

**Everything in the section below was written from Jira *Cloud* documentation. The first running instance this library met was Jira *Server / Data Center*, and the hierarchy model does not carry across.**

| | Cloud | Server / Data Center |
|---|---|---|
| Grouping above the work item | **work-type hierarchy levels** — epic level, standard, subtask; Premium/Enterprise may add levels | **`Epic Link`** and an *"Issues in epic"* list — a field, not a level |
| Project flavours | team-managed vs company-managed, with different capabilities | no such distinction |
| Extra levels | a plan feature | not present |

**So a page that says "three hierarchy levels by definition" is true of one product and false of the other, and the version below did not say which.** It does now. This is the class of defect only an instance can surface: the documentation was read correctly and answered a question about a different product.

**Neither reading is wrong for whoever is on that deployment.** What is wrong is a page that names one and implies both.

## The logic (project-agnostic by construction)

**Only what is true of Jira as a product.** Anything that varies per project — which statuses a workflow has, which fields are required, which hierarchy a plan uses — is configuration and belongs in a Composer's own `project/` tree, per `index.md`: *"It carries **no project**."*

- **Three hierarchy levels by definition.** Epic-level items *"represent high-level initiatives or bigger pieces of work"*; standard items *"represent regular business tasks"* where *"daily work is discussed and carried out"*; subtasks *"help your team break a standard work item into smaller chunks"*. Premium and Enterprise *"can also create additional levels"*. Fetched 2026-09-01 from [what-are-issue-types](https://support.atlassian.com/jira-cloud-administration/docs/what-are-issue-types/) and [configure-the-issue-type-hierarchy](https://support.atlassian.com/jira-cloud-administration/docs/configure-the-issue-type-hierarchy/).
- **The work item is the atom that carries state.** Everything else — hierarchy, board, filter, version — is a relation over work items, not a container of them.
- **A board is a view over a query, not a container.** A board is defined by a JQL filter; work items are not *in* a board, they *match* it. [What are board filters](https://support.atlassian.com/jira-software-cloud/docs/configure-filters/) · [Example JQL queries for board filters](https://support.atlassian.com/jira-software-cloud/docs/example-jql-queries-for-board-filters/). **This is the single most load-bearing logic fact on the page**, because almost every "the item disappeared from the board" question is a query that stopped matching.
- **A saved filter is a named query, and JQL is the language.** *"A custom filter is a saved and reusable search term"*, defined by queries *"written using JQL"*. [Manage custom filters](https://support.atlassian.com/jira-software-cloud/docs/manage-custom-filters-in-team-managed-projects/) · [JQL fields](https://support.atlassian.com/jira-software-cloud/docs/jql-fields/). Reported from a search result rather than a fetched body — *testimony, not transcript* (`tools/web-research.md`), and marked as such.
- **A version is a grouping for release, orthogonal to hierarchy.** An item's `fixVersion` is searchable by name or by the ID Jira allocates. Same evidential status as above.

### Verified live on a Server / Data Center instance, 2026-09-01

Read-only, through an authenticated browser session. **No instance, project, ticket or person is recorded here** — `index.md` forbids it and the page is scoped to logic. These are the mechanisms, not the content.

- **A view is a query times a projection.** The issue navigator exposes an `Advanced Query` field (JQL), a **Basic ↔ Advanced** toggle, a `Columns` control and a Detail/List view switch. **The query selects rows; the columns and the view mode select what is shown of them, and they are separate controls.** A board is the same pair with an arrangement on top — which is why *"items are not in a board, they match it"* holds on both products.
- **Basic search is a form projection of the language, not an alternative to it.** The toggle presents one query in two surfaces; the form can express only the subset it has widgets for.
- **A saved filter is a named query** — `Save as` on the navigator. Confirmed as a mechanism, not inferred from the Cloud docs.
- **Issue links are typed and directional, and they are first-class data.** Named relations — `clones` / `is cloned by` and their inverses — stored on the item, editable, queryable. **This is the thing Figma does not have and Jira does**: an explicit, named edge between two units of work.
- **The why and the when are first-class too** — `History`, `Work Log` and `Transitions` are tabs on every item. State changes are recorded with their time and author, without anyone choosing to write them down.

**Where that lands in this library.** `tools/register.md`'s *line ↔ position* seam gains its third corner from this read:

| Tool | Position | Typed edges | History of why |
|---|---|---|---|
| **Figma** | **yes** — x/y is the authoring surface | no — flow is spatial and implicit | no |
| **Jira** | no | **yes** — named, directional, queryable | **yes** — transitions, work log |
| **git** | no | inferred only — a move is delete-plus-add | **yes** — the commit message |
| **JSON Canvas** | **yes** | **yes** — `fromNode`/`toNode`/`fromSide`/`toSide` | no |

**Each carries two of the three and never the same two.** That is the seam stated as a table rather than as an argument, and it is why work crossing these tools loses something at every hop.

## Deliberately empty, and dated — 2026-09-01

**The craft is not here, and nothing plausible fills it.** `tools/cowork.md` set this precedent and `tools/README.md` records the rule it taught: *"Emptiness is a finding when it is **visible and dated**."*

**These slots are filled by an orchestra experimenting with a real instance, and annotating afterwards — not by reading more documentation.** Each names what would fill it:

| Empty slot | What fills it |
|---|---|
| **The Product Owner lever index** — a `yang/` page for that chair, keyed by intent, every row naming the plausible wrong default it beats | a PO working a real backlog and recording where the obvious move was wrong |
| **Where the chair's canon lands on the primitives** — opportunity trees, outcomes-over-outputs, RICE/ODI, assumption mapping (`chairs/product_owner_references.md`) each have a Jira expression, or demonstrably do not | trying each and recording which the tracker refuses to hold |
| **The defect and friction record** — this library's tool pages carry defects from a tracker and friction from Stack Overflow, with the friction's class | not attempted here: a friction class read from documentation would be invented |
| **The connector's capabilities** — what an agent can read, write and transition | one authorized session, introspecting the live schema |
| **The trust boundary** — a tool that can create and transition work on a shared board is an outward-facing write | a Composer ruling, once the capabilities are known |

## Limits — where this instrument stops

- **A tracker records that work exists and what state it is in. It does not record why the work is worth doing.** That is the opportunity tree's job and the tracker has no field for it. **Tool limit**, and the one a Product Owner most often tries to solve with a custom field.
- **Everything project-shaped is configuration, so this page can never be complete about any instance.** Two orchestras reading it will find the same logic and different boards. **Not a defect — the reason the page is scoped to logic.**
- **Nothing here is verified against a running instance.** Every statement above is a documentation read, dated, with its route named. **Reasoning limit of this audit, not of Jira.**

## Recommended (Composer to accept/decline)

- **Product Owner — authorize the Atlassian connector in an interactive session**, then run the experiment pass that fills the empty table above — status: proposed.
- **The whole room — record the Atlassian route table in `tools/web-research.md`** as a fourth named route with its own failure mode, since a 200 returning navigation chrome is not among the three that page currently describes — status: proposed.
- **Product Owner — decide whether `index.md`'s `Observed, not yet decided` register belongs in a tracker** once one is reachable. It is a queue of work items with a state, implemented as a markdown table — status: proposed.
