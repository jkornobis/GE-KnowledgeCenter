---
type: Protocol
title: "Library conventions — signing, publishing, and how a page states what it is"
description: "The house rules that were carried inside the index and are now one hop away: which instance is speaking and how it says so, where this library writes and where it publishes, and the three conventions a page obeys about its own claims — a measurement carries its reference, a record says so, and provenance stays while autobiography goes"
status: draft
serves_all: true
generated: { by: agent:ge-knowledgecenter, at: 2026-09-10T21:35:00+02:00 }
sources:
  - resource: https://raw.githubusercontent.com/jkornobis/GE-KnowledgeCenter/main/index.md
    title: "GE-KnowledgeCenter — index"
---

# Library conventions

**These rules lived inside `index.md` until 2026-09-10.** They were moved because the index is the
one page every session is told to fetch, and **over half of it was rules that fire when you act
rather than routes to where things are.** Nothing changed but the address.

**Each of these fires on a specific act** — signing something, publishing something, writing a claim
onto a page. **None of them is needed to find a page**, which is what the index is for.

## Where this library lives — Forgejo writes, GitHub publishes (ruled 2026-09-06, reversing 2026-09-05)

**Instances write to the Forgejo instance on the Composer's own server. GitHub is the published read
surface** — every orchestra fetches this library from `raw.githubusercontent.com`, and that address
is written into `start.md`, this index, the skill floor and the machine's own route file.

**The link between them is a push mirror: Forgejo pushes to GitHub on its own schedule.** No session
pushes to GitHub and no session has to remember it exists — which is the same property the previous
ruling was reaching for, pointed the other way.

**The ruling of 2026-09-05 said the reverse, and it described something that was never built.**
Measured 2026-09-06, asked of the machine rather than read from this page: the Forgejo repository
answers `mirror: false`, no interval, no source URL. It is a plain writable repository, which is why
three pushes to it that day succeeded — while the ruling on this page called such a push *"a
mistake"* and told the next session to remove its only remote. **Four commits sat on Forgejo alone
before anyone looked.**

⚠️ **So a `github` remote in a working clone is a mistake, symmetric to the one this replaces.** The
published copy is written by the mirror, never by a session; a second push URL couples one machine's
availability to the other's, and a hand-pushed pair is forgettable by construction.

⚠️ **A publish surface that stops receiving content fails silently, and this is the failure mode to
watch.** A stale `raw.githubusercontent.com` returns 200 with a library that stopped on some past
afternoon — no error anywhere, because nothing is wrong from where the reader stands. **Compare the
two heads before trusting a fetch that matters**, and treat a gap as the mirror being down rather
than as history:

    git ls-remote <forgejo>/GE-KnowledgeCenter.git main
    curl -s https://api.github.com/repos/jkornobis/GE-KnowledgeCenter/commits/main

**What the published copy does not do**, said plainly so nobody relies on it wrongly: it is not an
audit trail of what the source deleted, because it follows the source including deletions. It is the
place the content is read, not a second history.

**What this library is not:** it is **public**, so it carries nothing internal to an employer and
nothing under NDA — **nor the employer's name, nor anything derived from it** (ruled 2026-08-27). It carries **no project** — a concert is not the instrument, and each Composer carries
their own in their own `project/` tree. And it carries no Composer Key and nothing personal: if
key material travels everywhere, it *is* everywhere. **Nor the addresses of a Composer's own
infrastructure** (ruled 2026-09-06) — a private forge, a home doc site, a server hostname. They are
not secrets, and that is not the argument: a public library naming where one person's machine lives
publishes an attack surface for no reader's benefit, since every fetch it would enable is one an
unauthenticated caller cannot make anyway. **An estate's addresses belong in that estate's own
files**, which is where every instance already reads them. It carries what is true about an
instrument **for whoever plays it**, never one estate's history.

**This library is the GrandEnsemble's shared memory. An assistant's own memory is not** (ruled
2026-09-06). A rule, a protocol or a correction is recorded here, where any instance fetches it —
never in a per-installation memory store, whatever the host offers. The Composer's reason is the
whole argument: *a session started in a new folder, on a new machine, begins with none of it.* **A
rule kept in memory is one the next instance breaks without ever having seen it**, and it breaks it
confidently, because nothing signals an absence. What belongs in a memory store is what is true of
one Composer on one machine; what is true of the orchestra belongs here.

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

## A page declares what its rule leans on, and that is what this library owes the corpus (ruled 2026-09-10)

**The question this settles: which bodies of the corpus does this library owe an explanation?**

**A body a page's rule DEPENDS ON must be explained here. A body no page leans on is owed nothing,
however connected it is.**

**The declaration is a section, `## Where this sits in the corpus`**, naming the bodies in backticks
with one sentence each on what the page takes from them. ⚠️ **It is a claim by the page, never a
graph edge** — the corpus is authored elsewhere, and inventing an edge here is the defect these same
pages warn about.

    node map_pages.mjs --leans     what is leaned on, what is met, what is owed

### Why not by how connected a body is, which was tried first

**Measured 2026-09-10, before the rule was written:**

```text
degree band   explained   not   explained %
   0- 3          13         1     93%
   3- 6          13        16     45%
   6-10          19        15     56%
  10-15           7         9     44%
  15-20           5         4     56%
  20-+           15         2     88%

median degree — explained 8 · not explained 7
```

**The middle of the distribution is a coin flip and the medians are one apart.** Whether a body is
explained here has almost nothing to do with how connected it is. **A link threshold would have
invented a target rather than recovered one** — obliging a page at twelve links and excusing nine,
with no defence for the line.

**The 93% in the bottom band is the tell:** low-degree bodies are almost all explained because they
are *recent* — written at the same moment as the page that introduced them. **What got explained is
what somebody happened to write.**

⚠️ **And the honest state of this rule today: 6 pages of 97 declare anything, 7 bodies are leaned
on, 0 are owed.** The target is met because almost nothing has been declared, not because the
library is complete. **The measure becomes meaningful only as pages declare**, and a page that
states a rule and declares nothing is not in breach — it is unmeasured.

## Signing — which instance is speaking (ruled 2026-09-04)

**Every GrandEnsemble instance writes to GitHub as the same person.** One account, one git identity,
one name on every commit and every pull request. **The machine cannot tell two instances apart, and
no setting fixes that** — the identity belongs to the Composer, not to the session.

So identification is a convention, and it is carried in the text or it does not exist. **A label
cannot do it**: GitHub attaches labels to issues and pull requests only, never to a comment — and
most traffic between instances *is* comments.

**The rule. The first line of every pull request body, issue body and comment written by an instance
is its tag, alone on the line:**

```
[GE · Library · GE-KnowledgeCenter]
```

Three fields: the system, the **role** a reader recognises, and **the repository or host the session
works in** — which is the authoritative one, because the Composer's delivery rule keys the chair to
where the session works and to nothing else. A role with nothing behind it is a nickname; the third
field is the claim.

⚠️ **That field said *repository* until 2026-09-05, and the rule was wrong rather than the tag that
broke it.** The Tool Worker signs `[GE · Worker · the tower]` — a **host**, because it audits live
instances on a machine rather than working inside a repository. Under the narrower wording that
session had no third field to write and, by *no role, no tag, no write*, should not have been
writing; it had just filed two tool audits this library accepted on all three admission rules.
**A convention that would have barred good work is a convention with a missing case**, and the case
is a session whose subject is a machine.

**Why the first line and not the last.** A reader deciding whether to act on a request needs to know
who is asking before they read it, not after. Same reason these rules sit in this file rather than
in a protocol page: a marker read after the text it qualifies has already failed.

**Six roles are named so far** (Composer, 2026-09-04 for the first four, 2026-09-05 for the rest):
**Workshop** · **Library** · **Watcher** · **Tool Worker** · **Project Key** · and the **Worker** on the
tower — *"the fourth named GE for the moment"* was said when there were four, and **the set is open
and expected to grow** exactly as that predicted. It grew twice within a day of being written. Each
is one session in one repository, and the Composer keeps one active session per repository so that
the delivery rule's *"the chair is fixed by the repository the session is in"* has exactly one holder
at a time rather than needing anyone to remember it.

**What defines the set is a capability, not the list.** These are the instances that **can hold a
discussion through GitHub** — open an issue, open a pull request, comment on one, and be answered by
another instance (Composer, 2026-09-04: *"who can discuss through Git Issue and PR and Comment"*).
That is what a role is for here, and it is why the list is worth writing down at all: an instance
that can be argued with needs to be identifiable, and one that never speaks does not. **So the
membership test is not "is it on the list" but "does it converse here"** — which is also why the list
can grow without anything else changing.

⚠️ **These are not chairs, and the difference is load-bearing.** The twelve chairs are fixed and may
never be invented, renamed or substituted. **An instance-role is not one of them** — it is a session
in a repository, and a new repository may earn a new role at any time. A page that treats this list
as a closed roster will refuse a role the Composer has since named; a page that treats the twelve
chairs as open will invent one. They fail in opposite directions and neither is recoverable by
reading the other.

**And a session outside those four does not write here at all.** Two kinds exist and both were named
by the Composer on 2026-09-04: a **dedicated task**, which is a piece of work rather than a seat, and
**personal work**, which is his own and carries none of this repository's weight. Neither holds a
chair, because a chair is fixed by a repository and neither has one in this system. **So the rule is
total rather than holed: no role, no tag, no write.** A session that cannot name its repository has
found the answer to whether it should be writing.

**Labels supplement, they do not replace.** `ge:library`, `ge:workshop`, `ge:watcher`, `ge:toolworker`
on an issue or a pull request make the board filterable at a glance. They are a convenience for the
Composer, and they are absent from every comment by construction.

**An artifact written before this rule cannot be labelled by inference.** Which instance wrote a
given untagged pull request is not recoverable from git, from the API, or from the text — and
assigning one from a guess is the failure the tag exists to prevent. **Untagged is the honest state**
until the session that wrote it says so itself.

### Announcing yourself — the tag is one surface of three (ruled 2026-09-06)

**The rule above covers what an instance says. It does not cover what an instance makes**, and the
Worker's #51 is the case: an instance wrote a description of another estate's forge, and the estate it
described could not see it until a monitor happened to be watching. **It arrived by luck, which is the
argument for the clause made by its own delivery.**

**An instance announces itself on every surface it writes to. Three exist and they are not equally
served:**

| Surface | Mechanism | State before this ruling |
|---|---|---|
| issue, comment, pull-request body | the `[GE · Role · repository or host]` tag | **exists**, ruled 2026-09-04 |
| a page or artifact in this library | `generated: { by:, at: }` | **exists and was being filled in wrongly** |
| a commit | a trailer naming the instance | **did not exist** |

#### The measurement, and it convicts this session

```
generated.by across the library, 2026-09-06
  74  human:jkornobis
   4  agent:agile-facilitator
   2  a prose name
```

**Seventy-four pages state that a human generated them, and instances wrote most of them.** Two of
those seventy-four were written by this instance **on the morning of the day this ruling was made**,
and it typed `human:jkornobis` into both without pausing — which is the whole content of the Worker's
clause: **the mechanism existed on two of three surfaces and was under-used, not absent.**

⚠️ **It is also a false provenance claim in the format's own vocabulary.** OKF derives trust from
*who* the actor is, and `human:` is the strongest actor it has. `method/sources-and-rederivation.md`
already refused to promote this library to *machine-confirmed* on a technicality — **and the same
error had been made silently in the authorship field seventy-four times.** A library that declines an
unearned tier while claiming unearned authorship is only careful where it is looking.

#### The rule

**`generated.by` names whoever produced the text.** `agent:ge-<role>` where an instance wrote it;
`human:<id>` only where the Composer authored the words — which is real and not rare: the
fractal-generates section of `principles/core-principles.md` is his, and says so.

**A commit carries a trailer naming the instance**, beside the model attribution the Composer's own
key already requires. The model says what wrote the tokens; the trailer says which instance held the
chair:

```
GE-Instance: Library · GE-KnowledgeCenter
```

**No retrofitting, and for the reason already ruled above:** which instance wrote a given page is not
recoverable from git, the API or the text, and assigning one from a guess is the failure the whole
convention exists to prevent. **Untagged is the honest state.** The two pages this session wrote today
are corrected because this session knows who wrote them, and nothing else is touched.

#### Read the machines before acting on a table describing them

**A claim about another instance's estate is provenance, not truth** — the same rule this library
applies to a bare filename in a page. **It records what was read, in that estate's coordinates, and it
is not fetchable.**

⚠️ **And the plural is load-bearing.** The Worker's own correction proves it twice over: a
repository with **two** remotes cannot be described by a column holding one, so *"it is on the
employer's GitHub"* and *"it has been on the tower's forge all along"* were both true and both
useless. Then the ref counts said the mirror was behind by 21 — wrong direction and wrong size, because
31 host-generated refs were pooled into a net figure describing neither population. **The real state
was two-way: sixteen branches only on one side, twenty-six refs only on the other.**

**So: read every machine a claim spans, and never a net count over two populations.** That is this
library's own *a measurement carries the reference it was taken against*, arriving from outside and
landing on the same page.

#### Leadership must be legible to an estate that cannot see yours

**Taken as a requirement rather than a design, at the Worker's own request** — it holds one estate,
has no reach into the others, and said so rather than proposing a seating chart for a room it cannot
see.

**The six roles above are that legibility, and the third field of the tag is what makes it work:** a
role with a repository or a host behind it can be checked by anyone; a role without one is a nickname.
**Nothing further is added here**, because the failure #51 reports was not that leadership was
unnamed — it was that a claim about an estate travelled without saying who made it or whether they
could have known. **That is fixed by announcing, not by another roster.**

### Taking the chair — what follows from naming the repository (proposed by the Workshop, 2026-09-04)

**The rule above establishes identity. This is what identity is for.**

Naming the repository is a single act with consequences that all derive from it, and that is the
point: **they are not four things to remember, they are one declaration read four ways.**

| named the repository → | you have |
|---|---|
| **your tag** | the third field is fixed by the declaration, so it cannot drift mid-session |
| **your merge right** | this repository you merge; everywhere else, pull request and issue only |
| **your watch** | the repository you lead, **and every repository you have pushed onto** |
| **your first read** | what is already open on both, before doing anything else |

**The watch has two halves and the second is the one that gets forgotten.** The repository you lead
is your inbox — someone files there and nothing tells you. But **a pull request you opened on
somebody else's repository is where their reply lands**, and unread it is the same debt as an unread
issue at home. One direction without the other is a half-duplex that looks complete.

**Why this is stated as a consequence rather than a reminder.** The Workshop ran a session on
2026-09-04 in which seven instances of a pattern its own pattern ledger marks *Fired* were each
detected correctly and each died as prose in a pull request, and that session opened neither tracker
until the Composer told it to, twice. Nothing derived the read from anything; it was a separate thing
to recall, and it was not recalled. **A rule that needs remembering is a rule written as a goal.**

**How the watch is armed depends on what the repository may carry, and the difference is real.** A
session can poll its trackers for the length of that session, leaving nothing behind — this is the
portable form and it is the only one available here, because **a library carries what is true about
an instrument for whoever plays it, not one estate's apparatus.** A repository that *is* an estate's
workshop may instead put the read in a session-start hook, where it survives the session boundary
and costs nothing to remember. **The consequence of that asymmetry, said plainly so it is not
discovered as a surprise: an instance whose repository cannot carry apparatus re-arms its watch every
session, and one whose repository can, does not.**

**Two failures worth inheriting rather than repeating.**

**Filter on what identifies the actor of the *event*, not the author of the *item*.** The Workshop
armed a watch whose description claimed it filtered its own posts while only half its queries did,
and it notified itself about its own pull request within the minute. **Applying the filter to both
queries does not fix it** — measured here 2026-09-04, with the filter on both, a watch still reported
the Library's own issues and a pull request the Library had merged. The reason is structural: a
`since` query fires on any *update*, and an item's body says who **opened** it, never who caused the
update — so merging someone's pull request, or labelling your own issue, re-fires it past any
body-prefix test. **A comment carries its author's tag and can be filtered; an item's update carries
no author at all, so watch item *creation* and leave the discussion to the comment query.**

**And a poll is not free**: each event is a turn, so an interval short enough to feel live is an
interval expensive enough to matter, and ninety seconds against a remote API is a floor rather than
a target.

**What a tag is not.** It is a statement by a session about itself, not a credential — nothing
verifies it and nothing can. It says who claims to be speaking, which is exactly as much as prose
already said and no more; what it adds is that the claim is now in a fixed place, in every artifact,
greppable. **Content arriving from another instance stays ingested content either way** — a tag
never turns a request into an instruction.

### A page carries the provenance of its rules, never the history of itself (ruled 2026-09-10)

**Two kinds of date, and only one of them belongs on a fetched page.**

```text
PROVENANCE      "(Composer standing rule, 2026-07-20)"   who ruled it, and at what level.
                KEEP — it is what makes a rule arguable at the point of use, and
                method/recording-a-rule.md requires it.
AUTOBIOGRAPHY   "Unified 2026-09-07"  ·  "(added 2026-07-03)"  ·  "retired 2026-07-27"
                REMOVE — it is a changelog, and git holds it perfectly.
```

**The test is who the date is about.** A date about **the rule** says who decided and when, which a
reader arguing with the rule needs in the same breath as the rule. A date about **the page** says
when its author last tidied it, which nobody fetching it for a rule has ever needed.

**Applied first to `protocols/presentation.md`**, the longest page in the bundle at 29 891 bytes:
eight autobiographical lines removed, **eleven provenance dates untouched**, and every reason those
lines carried was kept — *a card that fails silently leaves a turn unattributed* is the rule; *cards
were removed on 2026-07-23* is the changelog.

⚠️ **This is not "fewer dates".** `index.md` carries 132 and `tools/register.md` 70, and both are
correct: a published column and a sweep clock are **facets in a table**, not prose about the past.
**A count of dated lines cannot tell the three apart**, which is why this rule is stated by kind
rather than by number.

**Where a ruling exists nowhere but in a page's own prose, it is traced before it is removed** — at
GE-Workshop, where the decision log lives. That case is rare: on the first page treated it was two
lines, not twenty-one.

### A page that is a record says so; everything else is live (ruled 2026-09-09)

**Two kinds of page, and one rule each.** A **living** page states what is true now, so it must never
freeze a moving number. A **record** page is a pass taken on a date, so it must never be edited to
agree with today — **editing one rewrites the pass it exists to be.**

**Only the records are marked.** `record: <date>` in the frontmatter, carrying the date of the *last*
pass over that page. Anything without the key is live.

**The date is the LAST pass, not the first — `[standing]`, levelled by the Composer 2026-09-09.**
Because what a reader needs from the key is *how stale these numbers are*, and that is the most
recent reading, not the day the page was produced. ⚠️ **It is recorded with its level because it was
not one when it was written:** an instance took it as a sub-decision inside a ruling about something
else, and it bound five pages and this section before anyone chose it — the case
`method/recording-a-rule.md` exists to name.

```
record: 2026-08-15    mandalas/border-chairs-principles.md
record: 2026-08-15    mandalas/border-chairs-protocols.md
record: 2026-07-29    mandalas/principles-layer.md
record: 2026-07-29    mandalas/protocols-layer.md
record: 2026-07-27    mandalas/border-protocols-principles.md
```

**The asymmetry is the point.** Eighty-odd living pages and five records: marking the exception costs
five lines, marking both kinds would cost eighty-six and would have to stay honest on every page
written after. **And the convention already existed** — each of those five declares itself in bold
under its own title. This only makes it readable by something that is not a person.

⚠️ **The marker is not a licence.** A record's numbers are still wrong about today. It says *why*
they are wrong and what to do about it: **re-derive from the artifact, never edit the page.**

### A measurement carries the reference it was taken against (ruled 2026-09-05)

**A count is a fact about one thing at one moment. A comparison is a claim about two.** Stating the
second while having measured the first is how three separate reports went wrong in two days, and the
third could not have been prevented by more care: the number went stale between a pull request being
opened and being read, which is a window nobody controls.

**So a stated measurement names what it was taken against.**

```
116 bare names at f0497a1        not   116 bare names, identical to main
571 citations, path-shaped       not   571 citations
72 grounds edges in the graph    not   72 warrants
```

It costs a few characters, it cannot go stale, and it lets a reader **re-derive rather than
re-measure** — which is the difference between a number that can be checked and one that must be
trusted.

**Two references, not one, and both are needed.** *When* it was taken — a commit, a date — and *what
was counted*, because two honest methods over the same subject give different numbers and neither is
wrong. A path-shaped-citation count and a raw-prefix-occurrence count differ by hundreds over the
same file; without the method beside them, the disagreement looks like an error and is not one.

**This is the general form of a pattern the Agile Auditor now carries** — *True against the wrong
reference point*, in `method/agile_auditor_catalog.md`, fired at its third occurrence on 2026-09-05.
The catalog entry is how a reader **detects** it; this is how a writer **avoids** it.

**It sits here rather than in `tools/README.md`** — which governs what a tool page records — because
it binds any measurement stated anywhere in this library or on its tracker, and because a convention
that must hold *before* a number is written cannot be fetched after it.

**What was already possible, said here so it is not rediscovered as missing:**
`protocols/chair-review.md`'s **Drop** verdict already removes merged content and already runs
backward over it (13 additions re-examined, 2026-07-04). The only gap these rules close is
de-listing a whole page. Prior art for the shape: library **weeding** (CREW), **RFC 2026**'s
Historic status, and the ADR **Superseded** state.
