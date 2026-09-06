---
type: Tool
title: "Tool: Wekan"
description: "The kanban surface an agent can read and must not trust: HTTP 200 on success, on no token and on routes that do not exist; writes acknowledged and never performed; and a list created through the API that is never drawn"
status: draft
serves: [Product Owner, Agile Facilitator, Software Engineer, User Researcher]
generated: { by: agent:ge-knowledgecenter, at: 2026-09-06T09:20:00+02:00 }
sources:
  - resource: https://github.com/jkornobis/GE-KnowledgeCenter/issues/35
    title: "Tool Audit: Wekan — the full audit this page comments on"
  - resource: https://github.com/wekan/wekan
    title: "Wekan"
---

# Tool: Wekan

Audited **2026-09-05** by the Worker on a live self-hosted instance (`v11.46` + MongoDB), every
capability line executed rather than read. **Independently spot-checked 2026-09-06 by the Library
instance**, unauthenticated, and by standing up a board through the interface.

**Re-audit: 30 days — measured, and the measurement is that two clocks disagree.** The product ships
three to four releases a day; **the API surface does not move with it** — of 12 open `API:REST`
issues the newest was filed 2024-07-30. The release clock is days, the capability clock is years.

**Chair:** Product Owner — capture and backlog lever. Also serves the Agile Facilitator (routing an
item to a chair) and the Software Engineer (the promotion path to a forge).

**The audit is the article; this page is the comment.** It carries what a musician must know *before*
calling it. Everything else — route tables, the friction corpus, the webhook walls — is in
[issue #35](https://github.com/jkornobis/GE-KnowledgeCenter/issues/35).

## Context7

**Not resolved** — Context7 was unreachable from the audit surface. `UNVERIFIED`; a re-audit should
resolve it rather than inherit the blank. What answers *where and how* instead is the **running
instance itself**, which is the only source that proved reliable: the shipped OpenAPI file lists
routes that do not exist.

## Critical — hold these before the first call

### 1. HTTP 200 does not mean success

Verified twice, by two instances, on two days:

| Request | Status | Body |
|---|---|---|
| valid call, valid token | 200 | JSON — the answer |
| **no token, or an invalid one** | **200** | JSON carrying `{"error":"Unauthorized"}` |
| **a route that does not exist** | **200** | **HTML** — the application shell |

⚠️ **Any client checking `res.ok` records a success that never happened.** The rule that follows is
the whole discipline of this surface: **every write is followed by a read, and the read is the truth
— never the response.** It doubles the calls. It is the price.

**And the read must be fresh.** Re-reading a handle captured before the write is not verification —
the Library instance minted four cards, re-read a stale reference, saw an empty list, and was one
sentence from reporting that Wekan had swallowed them. A reload showed all four.

### 2. Writes are acknowledged and not performed — five measured

A dependency returned as created and absent on re-read. A `DELETE` on a list returning 200 with the
list still present and not even archived. A documented route returning HTML. And two **interface**
actions — disabling a webhook, and an admin panel labelled *global* that wrote a board-scoped record.

**The pattern is not a weak REST layer.** It is that **the write paths and the interface disagree
about what is real**, and that disagreement reaches the UI as well as the API.

### 3. ⚠️ A list created through the API is never drawn — and this one has the shape of data loss

The board orders lists by a `sort` field. `POST …/lists` does not set it, **and does not accept it**
— passed on create and again on update, the field stayed absent both times. **There is no API route
that makes an API-created list visible.**

⚠️ **A card moved into such a list disappears from the board** — intact in the database, reachable by
API, absent from every screen, with nothing saying where it went.

**So: create lists in the interface.** The Library instance did exactly that on 2026-09-06 and all
five rendered — after a first attempt of blind keystrokes into a still-initialising canvas created
nothing and reported nothing. **Set the field and click the form's own submit; do not type at the
canvas.**

### 4. Creating a card needs a swimlane id, and omitting it is a 500

Not a validation error. A crash.

### 5. The wake-up path does not exist

Webhooks are refused to private addresses by an SSRF guard that resolves the hostname, validates
every address family, pins the connection and blocks redirects. **This is correct behaviour and a fit
problem for a LAN-only estate, not a defect** — but the consequence stands: **nothing on this surface
can notify an agent.** A board is read when someone looks.

### 6. Operational facts an agent must hold

- **The account is the scope.** Tokens are login-derived: no read-only mode, no per-board limit, no
  chosen expiry. **Board membership is the entire security boundary.**
- **Admin grants nothing.** A user sees only boards it is a member of; a board created later is
  invisible until someone adds it, and the symptom is an empty list rather than an error.
- ⚠️ **Renewal needs a password, and three wrong attempts lock the account for an hour.** There is no
  *create token* button. **A retry loop around login is an outage, not a recovery.**
- **A non-admin cannot resolve a user id to a name.** A comment thread shows raw ids for everyone
  except the caller.

## Known issues — from the record

**283 open issues, 3 labelled `Bug`.** The label is barely used, so its count is not a health signal.
**The corpus worth reading is the 12 open `API:REST` issues** — and nothing has been filed against
the API in over a year, which is the finding rather than the absence.

## Limits — where this instrument stops

| Limit | Class |
|---|---|
| Success is indistinguishable from failure on some routes | **tool** |
| API-created lists cannot be made visible without a database write | **tool** |
| No hierarchy — Epic → Story → Task is not expressible | **tool** |
| No notification an agent can receive | **tool**, and it decides an architecture |
| Reading a stale handle and calling it verification | **reasoning** |

**What it is good for, stated plainly:** a shared, visible board that people and agents both read,
where the states are few and the cards are pointers. **What it is not good for: being the record.**
The argument belongs on a forge where it can be diffed; this surface holds where a thing is and who
is holding it.
