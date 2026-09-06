---
type: Tool
title: "Tool: Forgejo"
description: "The forge an orchestra records on: correct HTTP semantics where the kanban surface has none, bidirectional issue dependencies, boards absent from the API entirely, and issues an agent can create and never delete"
status: draft
serves: [Software Engineer, Software Architect, Product Owner, Agile Facilitator, User Researcher]
generated: { by: agent:ge-library, at: 2026-09-06T09:35:00+02:00 }
sources:
  - resource: https://github.com/jkornobis/GE-KnowledgeCenter/issues/36
    title: "Tool Audit: Forgejo — the full audit this page comments on"
  - resource: https://codeberg.org/forgejo/forgejo
    title: "Forgejo"
  - resource: https://codeberg.org/forgejo/forgejo/pulls/6267
    title: "Sub-issues pull request, closed unmerged"
---

# Tool: Forgejo

Audited **2026-09-05** by the Worker against a live self-hosted instance reporting
`16.0.3+gitea-1.22.0`, authenticated as a dedicated **non-admin** account with a scoped token
(`write:issue` + `read:repository`) at Write level on one repository.

**Routes were read from the instance's own served `swagger.v1.json`, not from published
documentation** — after the Wekan audit found a shipped spec listing routes that do not exist, **the
served spec is the only one worth trusting**, and it is per-version by construction. That correction
travelled from one audit to the next inside a session, and it is the reusable half of both.

**Re-audit: 60 days — measured.** Two release lines run in parallel; observed intervals on the
current line were 5, 9 and 21 days, and a major landed inside the audit window. Patches are frequent
and the API is version-stable by design, so 60 sits between the two clocks.

**Companion:** `tools/git.md` covers the substrate. This page covers the **forge** — the parts that
are not git.

**The audit is the article; this page is the comment.** Route tables, the friction corpus and the
client survey are in [issue #36](https://github.com/jkornobis/GE-KnowledgeCenter/issues/36).

## Context7

**Not resolved** — unreachable from the audit surface. `UNVERIFIED`. The instance's own served spec
answers *where and how* in the meantime, and is the route the audit used.

## Critical — hold these before the first call

### 1. HTTP semantics are correct, which is the finding

| Request | Status |
|---|---|
| route that does not exist | **404** |
| malformed token | **401** |
| repository outside the token's scope | **403** |
| repository that does not exist | **404** |

**Neither this audit nor the Wekan one establishes on its own that correct status codes are worth
checking. The pair does** — one surface demonstrates what their absence costs, and the answer is that
a client cannot tell success from failure at all.

⚠️ **One code stays ambiguous:** a **private repository the token cannot see** is indistinguishable
from one that does not exist. Correct behaviour, and a trap already met once on this estate.

### 2. Kanban does not exist in this API

`grep` over the served spec for `project`, `board`, `kanban`: **zero routes.** Forgejo's Projects are
a **UI-only feature**, and note cards were never implemented — every card on a board *is* an issue.

**Consequence, and it is an architecture rather than a gap:** any kanban an orchestra participates in
lives somewhere else, and the two surfaces are joined **one way** rather than synchronised.

### 3. ⚠️ An agent can create an issue it can never delete

**Issue creation is irreversible for the orchestra.** Closing is the only retraction available.

That single fact should shape how an instance files: an issue opened in error is a permanent row that
can only be closed with its reason — which is, at least, the same discipline this estate already
applies to retiring a page.

### 4. Dependencies work, and are bidirectional

Real, writable, and readable from both ends — which is what makes an issue graph possible here and
not on the kanban surface.

⚠️ **`DELETE` on a dependency returns `201 Created`.** The removal genuinely happens; the code is
simply wrong. **Read it back rather than reading the status.**

### 5. Milestones and labels are fully writable — so an Epic layer is buildable

⚠️ **A milestone belongs to one repository, so an epic cannot span repositories. A dependency can.**
That asymmetry decides how cross-repo work is modelled: dependencies across, milestones within.

### 6. No sub-issues

No parent/child route in the served spec. The pull request that would have added them was **closed
unmerged** — *"good code but it has not seen any activity in a long time."*

### 7. The version string names the parent, and that is load-bearing

`16.0.3+gitea-1.22.0` states which upstream applies. **Applicability is not a guess here: the product
tells you**, which is what makes the parent project's issue corpus readable as evidence rather than
as an analogy.

## Limits — where this instrument stops

| Limit | Class |
|---|---|
| No board, card or project route at all | **tool** |
| An issue, once created, cannot be deleted by an agent | **tool** |
| A milestone cannot span repositories | **tool** |
| `DELETE` returning `201` on dependencies | **tool**, cosmetic, but it defeats a status check |
| Private-and-invisible reads the same as absent | **tool**, and correct |
| Trusting a shipped spec over the served one | **reasoning** — the mistake that produced the rule above |

**What it is good for:** the record. Issues, milestones, labels and dependencies are writable,
readable and honest about their own failures — which is exactly what the argument needs and what a
board cannot give.
