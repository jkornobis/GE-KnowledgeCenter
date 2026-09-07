---
type: Method
title: "Choosing a piece of software — two doors, and they are never the same question (Product Owner, User Researcher, Software Architect)"
description: "Why 'is this project alive' and 'does this project suit me' need opposite instruments and opposite orders, the four steps that put weights before candidates, and the measured cost of running them backwards"
status: draft
generated: { by: agent:ge-knowledgecenter, at: 2026-09-07T17:09:00+02:00 }
sources:
  - resource: https://en.wikipedia.org/wiki/QSOS
    title: "QSOS — Qualification and Selection of Open Source software"
  - resource: https://en.wikipedia.org/wiki/Open-source_software_assessment_methodologies
    title: "Open-source software assessment methodologies"
  - resource: https://en.wikipedia.org/wiki/Business_Readiness_Rating
    title: "Business Readiness Rating — the ancestor of OSSpal"
  - resource: https://chaoss.community/
    title: "CHAOSS — Community Health Analytics in Open Source Software"
  - resource: https://chaoss.community/kbtopic/all-metrics/
    title: "CHAOSS metrics catalogue"
  - resource: https://scorecard.dev/
    title: "OpenSSF Scorecard"
  - resource: https://github.com/ossf/scorecard/blob/main/docs/checks.md
    title: "ossf/scorecard — the checks, in full"
---

# Choosing a piece of software — two doors, and they are never the same question

**The Composer, 2026-09-07:** *"Search the best methodologies to compare and pick software, open source have a lot, the 3 turn for wiki subject show it's still missing in your project knowledge."*

**This page exists because the estate ran the steps in the wrong order and the cost was measured.**

## The failure, in full, because it is the whole argument

A wiki was being chosen for the tower. **Three rounds of comparison produced one recommendation and then retracted it.** Wiki.js was named as the clean answer and killed an hour later by a constraint that had existed from the first minute: its git storage requires a **dedicated repository**, and the requirement was that it live in a subfolder of an existing one.

**The constraint was never written down before the candidates were compared.** The Composer's requirements — dark theme, CSS control, Forgejo integration, a landing page for the stack — arrived **after two rounds of comparison had already happened.**

**That is not a research failure. It is an ordering failure**, and the ordering is the entire content of every framework below.

## The two doors

```
« is this project ALIVE? »     objective, measurable, needs NO requirements at all
« does this project SUIT me? » means nothing until the requirements are written
```

**The instruments are not interchangeable, and using one for the other is the most common way this goes wrong.** A high vitality score answers *is anyone still tending this*; it never answers *will this do what I need*. A perfect requirements fit against an abandoned project is a fit to a corpse.

**Door 1 is cheap and can always be run. Door 2 cannot be run at all until something is written down.**

---

## DOOR 1 — is it alive?

**Run the free proxies before reaching for any framework.** They cost one page-load each and they caught two real cases on this estate in a single night:

```
last published release, and its DATE       a year of silence is an answer
a maintenance notice in the README         projects say so; comparison sites do not
release cadence over the last 2 years      steady, decaying, or stopped
SINGLE-MAINTAINER RISK                     one person is a availability, not a community
```

**Both catches came from the first two lines, not from an instrument.** **Focalboard** declared *"this repository is currently not maintained"* in its own README while three comparison sites listed it as active. **The author of a Plane plugin** had six repositories, zero stars and no inspectable code. **A comparison site reports what was true when it was written; the repository reports what is true.**

### The two instruments, and what each actually covers

**CHAOSS** — Linux Foundation, community health, a large public metrics catalogue organised into working groups. It measures **the community around the code**: contributor diversity, responsiveness, bus factor, growth. It is a *framework of metrics*, not a service you query — you adopt the metrics or you use a tool that implements them.

**OpenSSF Scorecard** — 18 automated checks, each scored 0–10, aggregated. It measures **security posture**: branch protection, review, CI, pinned dependencies, whether the project is maintained.

### The measurement this library owes its own register, and it is a warning

`tools/register.md` recorded, 2026-09-04, against six repositories queried live:

**Scorecard returned a record for two of six.** And the second was found only by asking under the project's **former organisation name**.

**So a 404 from Scorecard has three meanings, not two:** *unenrolled*, *not yet scanned*, or **enrolled under a name you did not ask for**. The third is the dangerous one — it is the only case where the instrument is silently **wrong** rather than merely empty, and its trigger, an organisation transfer, is invisible from the current slug.

**Absence measures enrolment, not health.** Query the current slug **and** the known former slug; one 404 is not an answer.

**And read Scorecard as *is this tended*, never as *is this good*.** Several of its checks are genuine maintenance signals; a high score is not a promise that anyone answers issues.

### And one question Door 1 did not ask, added 2026-09-07

**Before judging an add-on by its age, determine the host's release model.** An add-on's age means
nothing on its own; it means something only **relative to the software it attaches to.**

**The Composer, 2026-09-07:**

> *"A stable tool is an LTS; age is an issue for a rolling-release one, because plugins and themes
> can break. You must determine whether the software you manage is closer to Debian or Arch."*

```
is there a stable / LTS / maintenance branch, or is main the product?
release cadence — per year, or per day?
who holds the interface still, and is that one person?
```

**Why the instinctive test is not enough, measured.** Two unmaintained community themes for a kanban
product, from 2019 and 2020, were checked selector by selector against the running client bundle:
**47 of 51 still present (92%)** and **23 of 23 (100%)**. On that evidence both are adoptable.

**The release model reverses it.** That project published **100 releases in six weeks** — about 2.4
a day, bursts of eight — with **no stable branch, no LTS, no maintenance branch**, and one human
doing it. **`main` is the product and every user is on the rolling edge.** So 92% and 100% are
**snapshots with a shelf life measured in days**, not properties of the themes.

**And the confound is removed by the Composer's own second case**, which is the stronger one:

> *"FoundryVTT updates a lot and impacts community plugins, for example."*

**Its module ecosystem is large and actively maintained** — rich by every measure Door 1 has — and
its majors still break modules wholesale. **So the variable is the host's velocity, not the add-on's
health.** The kanban case could be read as one fragile project; this one cannot.

⚠️ **The consequence, and it is the part invisible at selection time — which is exactly when this
page is read.** On a rolling or fast-major host, **the cost of an add-on is not its installation. It
is the re-test at every upgrade, paid by the operator, forever.** A well-maintained add-on on a
fast-moving host is a maintenance subscription, taken on by whoever installs it.

*Found by the Tower against a live instance and raised as `GE-KnowledgeCenter#18`; the second case
is the Composer's, reported as domain experience rather than measured here.*

---

## DOOR 2 — does it suit me?

**This door does not open until the requirements are written.**

**QSOS** — *Qualification and Selection of Open Source software* — is the method whose entire value is the order of its four steps:

```
1  DEFINE      what will be assessed: common criteria, risks, domain functionality
2  ASSESS      score each candidate 0-2 on those criteria
3  QUALIFY     organise into axes and SET THE WEIGHTINGS — in advance
4  SELECT      compare through the filter built in step 3
```

**Step 3 before step 2 is the whole point, and running them out of order is what happened here.** Weights set after looking at candidates are not weights; they are a justification of whichever candidate already appealed. **Every candidate looks good against the criteria it happens to satisfy** — that is not a bias to resist by being careful, it is a property of the ordering, and QSOS exists to make the ordering structural rather than a matter of discipline.

**OSSpal** — successor to the *Business Readiness Rating* — is the same family: define, weight, score, select, with community-contributed evaluations. Same ordering, different paperwork.

### The distinction that would have saved the retraction

**An eliminatory requirement has no weight. It has a veto.**

*"Must synchronise into a subfolder of an existing repository"* was not a criterion scoring 0–2. It was a **gate**. Written down at step 1, it killed Wiki.js before the first sentence was written about it.

```
weighted criterion    contributes to a score, can be outvoted by other strengths
ELIMINATORY           removes the candidate. Nothing compensates for it.
```

**Separating the two is step 1's real output**, and it is the step that gets skipped because it feels like paperwork before the interesting part.

---

## The rule, in one sentence

**No recommendation before the requirements are written and weighted, with the eliminatory ones marked as such.**

**And the corollary, which is the operational half:** if the Composer has not given the requirements, **the first response is a question, not a table.** A comparison table produced without them is not early work — it is work that will be thrown away, and it manufactures the appearance of progress while doing it.

This is `protocols/tool-discovery.md`'s *"why this tool"* question with its ordering made explicit, and it is the same shape as `Request quality check`: *one upfront question prevents the three-round loop*. **That protocol already existed and did not fire, because nothing connected it to the act of comparing software.**

---

## The frameworks' own vitality, measured rather than cited

**Door 1, applied to the four instruments this page recommends. Checked 2026-09-07 from this machine, following redirects:**

```
https://chaoss.community/                      200
https://scorecard.dev/                         200
https://github.com/ossf/scorecard              200
https://qsos.org/                              does not resolve
https://osspal.org/                            does not resolve
```

**The two vitality instruments are alive and the two adequacy methods have no working home.** QSOS dates from 2004 and was last revised in 2013; OSSpal's ancestor, the Business Readiness Rating, is older still.

**This does not retract them, and the reason is the distinction this page is built on.** CHAOSS and Scorecard are **services** — a dead service is a dead instrument. QSOS and OSSpal are **an ordering of four steps** — and an ordering does not rot. What is lost with the site is the tooling and the shared assessment sheets, not the method, and the method is the part that was missing here.

**But it is written down rather than omitted**, because a page that recommends a framework while its home is unreachable owes the reader that fact. **Reach QSOS through its encyclopaedia entry**, cited in this page's sources, and not through a link that will fail.

---

## Who does what

**User Researcher gathers the evidence; the Product Owner weighs whether it is adequate for the risk.** That split is already the register's (ADR-269, ADR-263) and it is exactly steps 2 and 3: gathering is scoring, weighing is qualifying, and the same person doing both is how weights drift toward the evidence that was easiest to find.

**The Software Architect owns the eliminatory list.** A veto is nearly always structural — storage model, deployment shape, integration surface — and it is the chair that can name one before candidates exist.

**And the Composer sets the weights**, because a weighting is a statement of what matters, which is a taste decision wearing a number.

## What this page does not do

**It does not adopt QSOS or CHAOSS formally.** Neither is a product to install; both are ways of organising a decision, and the value taken here is the **ordering**, not the form.

**It does not supply a scoring template.** A template invites step 2 before step 1, which is the failure this page exists to prevent.

**It does not cover choosing between a product and a package.** `tools/register.md` records why that matters and this page inherits it: for a package the health evidence exists and is machine-readable; **for a product it does not exist at all.** There is no query that answers *will this seat-gated feature survive its next pricing round*.
