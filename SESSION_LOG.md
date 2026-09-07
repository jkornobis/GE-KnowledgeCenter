---
type: Session Journal
title: "Session Log — the library end"
description: "Episodic memory for GE-KnowledgeCenter: what each session played, what it left on the stand, and what waits on the Composer. Chronological, append-only, newest at the bottom."
status: draft
generated: { by: agent:ge-knowledgecenter, at: 2026-09-02T22:26:04+02:00 }
sources:
  - resource: https://github.com/jkornobis/GE-KnowledgeCenter/pull/4
    title: "#4"
---

# Session Log — the library end

The episodic layer for **this repository**, written under
[`protocols/session_journal.md`](protocols/session_journal.md).

**What it is.** A running record of what each session did here, in the protocol's
four fields: what was *played*, what is *open on the stand*, what is *pending the
Composer's word*, and which *corrections became protocol*. It captures state and
open threads — the things a transcript does not preserve and a diff cannot show.

**What it is not.** Not a changelog: `git log` already records what changed, and
better. Not a decision record: those belong in the ADR log. Not semantic memory —
that is `MEMORY.md` and the per-fact memory files, which live at the workshop end,
not here.

**Convention.** Chronological, **append-only, newest at the bottom**. Never edit an
earlier entry: a later session that read something wrong writes a correction as its
own entry rather than rewriting history. Every claim carries the artifact behind it
— a commit, a PR, an issue number — because an entry that cannot be checked is
worth less than no entry.

**And compaction never edits either — append-only wins** (Composer, 2026-09-06, settling it
against a close-of-day routine that asked for a closed subject to be compacted here). A
finished subject is closed by a **closing entry that supersedes the earlier ones and names
them**; those entries stay as written. The reasoning is on
[`protocols/session_journal.md`](protocols/session_journal.md), and the short form is that a
sequence of readings that were wrong before they were right is the most valuable thing this
file holds. **The file only grows, and that is the accepted price.**

**Reading it cold.** A session resuming here should read the last entry first, then
work backwards only as far as it needs. *Pending the Composer's word* is the field
that matters most: it names what a session must not decide on its own.

---

## Session 2026-09-02 — library end

*Opened 2026-09-02 ~20:40 CEST, closed 2026-09-03 00:40 CEST. Ten commits,
`20748c4`..`379f4d0`, three files, +405 lines and no deletions. Checkpointed at
the Composer's word.*

**Played.**

Reviewed and merged [#4](https://github.com/jkornobis/GE-KnowledgeCenter/pull/4),
`mandalas/movements-layer.md` — the first proposal to reach this repository from
the Agile Watcher instance, and the first document in `mandalas/` written from
outside the library. Every count in it was re-derived from
`graph/grand_ensemble.json` with `node`; all four dated external claims were
checked against the primary sources the page names. Two factual defects were found
and corrected on the branch before merge (`81d88b5`):

- `rootless` is carried by **four** movement nodes, not three — `movements:lean`
  was omitted, and its wording is the strongest instance of the convention the
  section argues for.
- The chair↔principle warrant count is **72**, not 73. The 73 is real but belongs
  to a different document, `principle_chair_map.md`, measured 2026-08-13.

Merged as `dbda2ff`, branch kept, matching this repo's practice. Five issues were
opened, #5–#9; #5 and #6 were then closed on the Composer's ruling that
`index.md`'s *Observed, not yet decided* register is the surface that owns an open
question here. It already tracked both — better than #6 did, connecting the missing
chair pages to a second ten-chair era in `method/orchestra_glossary.md`. The
73-vs-72 measurement was carried into that register first (`6dc076c`) so the close
would lose nothing.

This log was created (`37c35f2`) — `protocols/session_journal.md` prescribed a
running `SESSION_LOG.md` and none existed, so the protocol had a shape and no
surface. OKF conformance was broken and restored (`9ddc4d3`), and `index.md` gained
two rows and a section (`221007c`): this log, and the merged movements page that
had never been listed.

**Open on the stand.**

- **#8** waits on nobody — three dated claims in `movements-layer.md` stating more
  than their sources support. Fact-matching, no judgement required.
- **#7** — 11 of 12 movements have no chair, and the absence of the relation is
  itself unrecorded in the graph's `absences`. The placements are the Composer's;
  the absence entry is determinable.
- **#9** — `principles:artasfeltscience` points into a `project/` tree absent from
  this repository, and is `live: false`.
- **The register itself**, `index.md`'s *Observed, not yet decided* table, now
  carries the 73-vs-72 row alongside the twenty it already held.

**Pending the Composer's word.**

The single question that collapses three open threads at once: **does the
`project/` tree travel, or do its references become non-links with their provenance
stated?** It is #9, the closed #5, and `index.md:297` — logged there before this
session and still unanswered. Beneath it: tiers for the two missing chair reference
files, the eleven movement→chair placements, and the `live: false` flag. Each is an
authorship act, and none is a session's to take.

**No capacity reading was taken.** `method/capacity.md` requires a fresh
percentage from the Composer and forbids recalling one; none was given this
session, so there is no live-state snapshot to carry forward. A resuming session
should ask rather than assume.

**Corrections that became protocol.**

Three, all mine, all found the hard way.

1. **This repository carries its own gates and the review of #4 did not run them.**
   `check_okf.mjs` and `check_links.mjs` sit at the root. The review verified every
   factual claim in the page against primary sources and reported *"this repo
   reports no CI checks, so a review is the only gate"* — true of GitHub Actions,
   false of the repository. `main` was OKF-conformant at `8f3814c` and was not at
   `dbda2ff`: `movements-layer.md` carried `status: proposal` where §5.4 allows only
   `draft|stable|deprecated`, and a bare date where §5 requires an ISO 8601
   timestamp with an explicit UTC offset. The first entry of this very log then
   reproduced both faults. Corrected in `9ddc4d3`.
   **The rule: run `node check_okf.mjs` and `node check_links.mjs` before the merge,
   not after.** Neither exits non-zero on failure, so nothing will stop a bad merge
   on your behalf — they have to be read.

2. **I wrote commit hashes that did not exist, twice**, before the commits that
   would carry them — `f9a0a26` into this log, corrected by `726052a`, and
   `8b3b1ec` into the closing comment on #5, corrected in place. Twice makes it a
   pattern rather than a slip.
   **The rule: write the artifact first, then quote it from `git log`. Never a hash
   that has not been read back.**

3. **A merge is not only about the page.** `mandalas/movements-layer.md` was merged
   and never added to `index.md`, which this library states is the only route in —
   so the merge landed a document on `main` that no traveler could reach, and it sat
   there for two hours. Listed in `221007c`.
   **The rule: a merge that adds a page adds an index row in the same breath.**

And one lesson that is not a correction because nothing was broken by it: **read
`index.md`'s *Observed* register before opening an issue.** Two of the five issues
opened tonight were already recorded there.

**Recorded as absent, deliberately.**

This session ran under an inverted delivery rule — *this instance reviews and merges
in `GE-KnowledgeCenter`; every other repository is PR-and-issue only* — taken at
session level by the Composer's explicit choice and written nowhere durable. **It
does not survive this session, and the Composer Key still states the reverse.** A
future session will load the Key, read *"I open a PR and stop"*, and be correct to
do so. Everything above was done under an authority that no longer exists. If the
merge chair here is meant to persist, that is the thing to record.

---

## Session 2026-09-03 — the merge chair, recorded

*A short entry, written minutes after the one above closed, because that entry
ended on something that is no longer true. Per this file's rule, a correction is
its own entry and the earlier one is left standing.*

**Played.** The entry above closes by saying the merge authority this session
worked under *"does not survive this session"*. The Composer then ruled that it
should. **The rule is now standing rather than session-level: a session working in
`GE-KnowledgeCenter` holds the Library GrandEnsemble chair and merges here; every
repository that is not the one the session is working in stays PR-and-issue only.**

**The correction that made it durable was in the shape of the rule, not its scope.**
Both earlier versions failed the same way — they named a chair-holder who was
somewhere else. *"I open PRs; I never merge"* named a holder that did not exist at
all; *"in `GE-KnowledgeCenter` I open a PR and stop, and the Library GrandEnsemble
merges"* named one that was always going to be whichever session was already here.
**The chair is fixed by the repository the session is in.** That is what a future
session needs, and it is the version that was recorded.

**Carried with it: the gate.** A merge right without a gate is what broke twice
tonight, so the two rules earned above travel with the chair rather than living
only in this log — `check_okf.mjs` and `check_links.mjs` are run and *read* before
a merge, since neither exits non-zero; and a merge that adds a page adds its
`index.md` row in the same breath.

**Open on the stand, unchanged.** #7, #8, #9, and `index.md`'s *Observed, not yet
decided* register.

**Pending the Composer's word, unchanged.** Does the `project/` tree travel? Tiers
for the two missing chair reference files. The eleven movement→chair placements.
The `live: false` flag on `principles:artasfeltscience`.

---

## Session 2026-09-04 — the history rewrite

*Appended after the fact, because this entry's own subject is that **every commit
hash in the entries above changed**. Read it before trusting a hash anywhere in
this file.*

**Played.** The employer's name was found on `main` — five occurrences across two
pages, predating the 2026-08-27 ruling that this library carries *"nothing internal
to an employer… nor the employer's name"*. Found while reviewing PR #17, which adds
a sixth and is blocked on it. Cleared from the working tree in #18, and the house
token standard's name in #19. **Then, on the Composer's ruling, from the history
as well.**

**What the rewrite did.** Both names replaced by redaction placeholders in file
contents *and* in commit messages — the messages mattered, because the screening
commits quoted the name while removing it. `DTCG`, the public W3C standard, is
untouched and must stay: it differs from the redacted house name by two letters.

**The cost, paid rather than discovered later.** The earliest affected commit was
the repository's first content commit, so **all 97 commits were rewritten and every
SHA changed.** Thirteen citations in this file pointed at commits that no longer
existed; each was re-pointed by matching commit subjects between a pre-rewrite
mirror and the rewritten repository. Verified afterwards: every hash cited anywhere
in the library either resolves, or did not resolve before the rewrite either.

**Five hashes still dangle and none of them is breakage.** `f9a0a26` and `8b3b1ec`
are recorded in the entries above *as hashes that never existed* — repairing them
would destroy the correction they document. `acaadb3`, `6572478` and `c609212` are
provenance from other estates and were never resolvable here. All five were checked
against the pre-rewrite mirror to establish that.

**Open on the stand.** **The old commits remain reachable on GitHub by SHA** until
its garbage collection runs; only GitHub Support can purge them on request. Anyone
holding a clone keeps them regardless. **So the name is hard to find, not
unrecoverable, and this entry says so rather than letting a later reader assume
otherwise.** Every branch was force-pushed, including the open PR #17 — the Workshop
must reset to the rewritten remote rather than merge, or it will restore what was
removed.

**Pending the Composer's word.** Whether to ask GitHub Support to purge.

**Corrections that became protocol.** One, and it is about instruments rather than
prose: **no gate here reads text for content.** `check_okf.mjs` validates page shape
and `check_links.mjs` validates reference resolution; the screening rule lives in
`index.md` as a sentence enforced by whoever is reading. That is why five
occurrences survived a week of green runs. **A green gate has never meant a page is
publishable**, and anything that assumes otherwise is assuming an instrument that
does not exist here.

---

## Session 2026-09-04 — the day, checkpointed

*Succeeds the history-rewrite entry above, which stays as written and covers only
that operation. This one covers the day. Closed 18:06 CEST at the Composer's word.*

**Played.** Seven pull requests merged, one closed unmerged, one open and blocked;
four of the seven came from another instance.

- **#14, the register's sweep 2** — reviewed against its own instruments, six probes
  raised, all six answered by the **Workshop** and revised on the branch, then merged.
  The load-bearing finding: the sweep claimed a gap in the DTCG spec *"closed between
  sweeps"* and built its only evidence for the `won by: arrival` flag on it. **Nothing
  closed** — the `transition` composite has been in the spec since 2022-02-03. The
  Workshop found the better finding underneath: sweep 1 read `types.md`, found what it
  expected, and generalised a negative to `composite-types.md`, **a file it never
  opened.** A confident negative from one half of a two-file spec, carrying real
  evidence for the half it did read.
- **#15 and #16, the signing convention** — every instance writes to GitHub as the
  same person, so identification is carried in the text or it does not exist. Four
  roles named so far, the set open, and **defined by a capability**: who can hold a
  discussion here. #16 also records that an untagged artifact cannot be labelled by
  inference.
- **#18 and #19, screening** — the employer's name was on `main` in five places
  across two pages, predating the rule that forbids it by a week; the house token
  standard's name in two more. Both cleared from the working tree and, on the
  Composer's ruling, from the history.
- **#20 closed, #21 merged** — the Workshop's own fix, rebuilt because #20's branch
  was cut before the rewrite and **was not an ancestor of the new `main`**; merging it
  would have restored what the rewrite removed.
- **#22 merged with two corrections**, under its own delegation of placement and
  wording to this instance.
- **A watch is armed** on this repository's tracker, session-scoped, filtering this
  instance's own posts. It caught #22 within the hour.

**Open on the stand.**

- **#17 is blocked on one clause** — it names the employer in the file while its own
  description carries a sanitised version of the same sentence. Its branch also
  predates the rewrite and must be reset to the remote, or pushing it restores the
  name. Both stated on the PR.
- **Seven issues**, all tagged except **#10**, which no instance has claimed.
- **`roster.md` remains bare** on `tools/register.md`, one of 114 such names — the
  register's standing debt, named so it is not rediscovered as new.

**Pending the Composer's word.**

- **Whether to ask GitHub Support to purge** the pre-rewrite commits. They remain
  reachable by SHA until GitHub's garbage collection runs, and that is the only
  surviving copy of either name anywhere.
- **Whether this watch stays** once the Workshop ships the cross-repository monitor it
  is building. Two watches would double-notify.
- The four authorship questions carried from 2026-09-02 are unchanged: the `project/`
  tree, the two missing chair reference files, the eleven movement placements, and the
  `live: false` flag on `principles:artasfeltscience`.

**Corrections that became protocol.** Four, and the first is the expensive one.

1. **Thirty-seven subagents were spawned to review a one-file pull request, and the
   run hit the account's spend limit** — twenty-six of them died mid-flight. The
   lesson is not *use fewer*: most of what they were doing was **counting things**, and
   a shell command answers that for nothing. **A reasoning price was paid for
   measurements that were never reasoning.** The surviving eleven agents' findings were
   salvaged from disk rather than re-run, and the rest was finished in the shell.
2. **No gate here reads prose.** `check_okf.mjs` validates page shape, `check_links.mjs`
   validates reference resolution, and the screening rule lives in `index.md` as a
   sentence enforced by whoever is reading. That is why five occurrences of the
   employer's name survived a week of green runs. **A green gate has never meant a page
   is publishable.**
3. **Filter on what identifies the actor of the *event*, not the author of the
   *item*.** Measured: a tracker watch with its own-posts filter on **both** queries
   still reported this instance's own issues and re-fired another instance's pull
   request the moment it was merged. A `since` query fires on any *update*, and an
   item's body records who **opened** it, never who caused the update. So watch item
   *creation*; leave the discussion to the comment query.
4. **A redaction that only touches the diff leaves the name in the log.** The screening
   commits quoted the employer's name while removing it, so the history rewrite had to
   filter commit messages as well as file contents.

**And one about this instance's own register, recorded because the Composer named it
rather than because it was noticed here.** Reports were being written at the altitude
of the shell — escaping, quoting, counts, hashes — for a Composer who asks to be served
as a designer who knows development. **The test before a paragraph is whether it
changes what he decides, or is only how the answer was reached.** The depth stays
available behind *"Tell"*; it stopped being the default.

**No capacity reading was taken**, and one fact stands in its place: **the account's
monthly spend limit was reached today**, during the thirty-seven-agent run. That is an
observation, not a percentage — `method/capacity.md` requires a fresh reading from the
Composer and forbids recalling one.

---

## Session 2026-09-04 — end of day

*Fourth and final entry for the day, closing at 20:40 CEST on the Composer's
`End Day GE`. The three above it stand: the day's checkpoint at 18:06 covered the
work up to that hour, and this covers what came after.*

**Played, after the 18:06 checkpoint.**

- **A GitHub Support ticket was filed and is open — #4728767.** The pre-rewrite
  commits are still served: `raw.githubusercontent.com` returns HTTP 200 and the
  removed text at an old SHA, and the SHAs are readable from public pull request
  timelines rather than needing to be guessed. **That corrects what this log said
  earlier today** — *"hard to find, not unrecoverable"* was too soft. Two wrong
  routes were rejected before filing: the *Deletions* category, whose required
  field asks which repository you want deleted, and the *Private Information
  Removal* form, which is for third parties posting credentials and says so.
  GitHub's own triage confirmed the case and asked for four details; they were
  added as a follow-up comment.
- **#21 merged** — the two bare spec filenames sweep 2 introduced, restoring the
  count to 114. **#20 closed unmerged**, correctly: its branch was cut before the
  rewrite and was not an ancestor of the new `main`.
- **#22 merged with two corrections** under its own delegation of placement and
  wording — re-homed beside the rule it derives from, and its watch lesson's
  diagnosis replaced.
- **A fifth instance appeared**, `GE-GraphtalkTeam-ProjectKey`, and filed **#23**
  and **#24**. A `ge:projectkey` label was created and applied. **It qualifies by
  the definition in `index.md` rather than by anyone's permission** — the set is
  open and membership is the capability of holding a discussion here — but the
  Composer has not named it, so the label records its own declaration and nothing
  more.

**Open on the stand.**

- **PR #17**, unchanged all day: one clause naming the employer in the file while
  its own description carries the sanitised version, and a branch that predates
  the rewrite and must be reset to the remote before it is touched.
- **#23 names a gap that is half ours.** It attributes *"reached when a question
  arrives"* to the skill; the same shape is at **`index.md:71`**, a library page,
  fixable by a pull request here without a ruling on the floor.
- **#24 is placed but not decided.** The content passes this library's admission
  test; the shape does not — a fourth row in a table that lives on two existing
  pages is an edit to those pages, not a new one.
- **Ticket #4728767** awaits GitHub's reply.

**Pending the Composer's word.**

- **Whether a fifth role is named**, and whether `index.md`'s roster line moves
  from four. The page already says the set is open, so nothing is wrong — only
  behind.
- **Whether this repository's watch stays** once the Workshop ships the
  cross-repository monitor it is building. Two watches would double-notify.
- **#10 is still unclaimed** by any instance and cannot be labelled by inference.
- The four authorship questions carried from 2026-09-02 are unchanged.

**Corrections that became protocol.** One, and it is about this instance's own
altitude rather than about the library.

**A count taken once and stated as agreement is a claim about a moving thing.**
Three separate reports today gave a bare-name figure compared to `main` without
naming which `main` — and `main` moved between a pull request being opened and
being read, which nobody controls. **A stated count needs its commit beside it.**
Raised against another instance's work; it applies here equally, and this log has
made the same shape of error twice already this week.

**And one observation rather than a reading.** No capacity percentage was given,
so none is recorded. The account's monthly spend limit was reached earlier today.

---

## Session 2026-09-04 — after the end of day: the rewrite came undone once

*A fifth entry, after the day was closed, because the entry above it states something
that was not true when it was written. Per this file's rule the earlier entry stands
and the correction is its own.*

**What the end-of-day entry got wrong.** It reports the history rewrite as complete
and the repository as screened. **One branch on GitHub still carried the pre-rewrite
history**, and had done for four hours.

**How, and this is the finding rather than the fix.** Every ref was force-pushed at
about 17:0x CEST. At **17:34** the Workshop pushed `fix-bare-spec-names-2026-09-04`
— PR #20's branch — **from a clone it had taken before the rewrite.** The old commits
came back through a door that had already been closed, by an instance that had no way
to know it was carrying them.

> **A history rewrite is not a one-time operation while other instances hold
> pre-rewrite clones.** Any of them can restore it by pushing, without knowing it has.
> The rewrite is a state to be held, not an act to be completed.

**The check that missed it was the wrong check.** The branch's **tip** was clean, so
every tip-level sweep passed it — including the one this log recorded as proof. Its
**history** was not, which had a second consequence: those objects were **referenced
rather than orphaned**, so GitHub's garbage collection would never have taken them.
**The Support ticket filed this evening was therefore asking for something that could
not have worked**, on a premise stated in good faith and never verified. Measured
while the branch existed: `raw.githubusercontent.com` returned HTTP 200 and three
occurrences of the removed text.

**Done since**, on the Composer's word: the branch deleted; all fifteen remaining
branches re-swept clean in contents **and** commit messages; reflogs expired and `gc`
run locally, because reviewing #20 had pulled those objects back into this machine's
store too. The old commits are now unreachable rather than referenced, which is the
state the ticket assumed.

**Still open:** the ticket's correction is drafted and **not yet posted** — the
browser closed before it could be, and it is in the Composer's hands.

**And a second remote now exists.** The library is mirrored to a **Forgejo instance on
the Composer's own server**, created by him as redundancy and as a future entry point
for MCP work. Verified by cloning the mirror fresh rather than by trusting the push:
105 commits, 13 branches, both gates green, and zero occurrences of either removed
name. **The mirror was taken after the rewrite, so it has never held them.**

**Two notes on that remote for whoever uses it next.**

`git push --mirror` carried fifteen `refs/remotes/*` across — another remote's
bookkeeping, not this repository's content. Removed. **A mirror carries heads and
tags.**

And the canonical URL the Composer gave, on port 2222, **presents a different host key
from the LAN route already trusted on port 22.** Almost certainly two SSH daemons on
one machine rather than anything wrong — but **accepting a host key is a trust
decision that belongs to the Composer**, so the already-trusted route was used and the
fingerprint put to him. The canonical URL is the better one and should replace the
alias once he confirms it: the alias only resolves on the LAN.

**Corrections that became protocol.** One, and it follows from the finding.

**A screening sweep must read history, not tips — and must be re-run after any push
by another instance, not once after the rewrite.** A tip-level check answers *is the
current content clean*, which is not the question a public repository asks. The
question is *what can be fetched*, and a branch is an answer to that for every commit
it reaches.

---

## Session 2026-09-04 — closing: the mirror is on its canonical route

*Short entry, closing the day for the second time. It records one change to the
Composer's machine and one gap that has no home yet.*

**Played.** The Forgejo remote now uses the canonical URL rather than the LAN alias.
The Composer confirmed the host key fingerprint; **the key the server offered was
re-scanned and checked against the confirmed fingerprint before it was trusted**,
rather than accepted because he had said yes — the confirmation is what makes the
check meaningful, not a substitute for it.

Authentication then failed on `publickey`, because the canonical hostname had no
identity mapping — the working alias carried one and the hostname did not. **A `Host`
block was added to the Composer's `~/.ssh/config`** (port 2222, the Forgejo key), with
the previous file backed up beside it. Verified afterwards: the canonical URL reaches
the same repository, thirteen heads, `main` identical on both sides.

**Open on the stand.**

- **The Support ticket correction is still unposted.** Drafted and handed to the
  Composer; the browser closed before it could be sent.
- **Nothing records that this repository now has two remotes**, and that is the gap
  worth naming: a session that clones from GitHub sees one remote, pushes to it, and
  **silently breaks the redundancy the mirror exists to provide** — without any error,
  because nothing is wrong from where it is standing. Filed as an issue rather than
  left here, because a future session reads the tracker before it reads five entries
  of one day's log.

**Corrections that became protocol.** None new. The one from the entry above — *a
screening sweep reads history, not tips, and re-runs after any push by another
instance* — is the day's last and the one most worth carrying.

---

## Session 2026-09-06 — the day the library was told how to speak

*Four merges, three of them rules about the orchestra rather than knowledge about
tools. Written at the Composer's `Close the session`. **2026-09-05 closed without a
checkpoint** — that day's work is in `git log` and in PRs #37 through #47, and is not
paraphrased here, because an entry reconstructed from a diff is the thing this log
says it is not.*

**Played.**

**The two tool pages, authored here from the Worker's audits** (PR #54). `tools/wekan.md`
and `tools/forgejo.md`, 237 lines standing on 39,000 characters of audit that stayed
where they were. The pair carries what neither audit could alone: Wekan answers **200**
to a valid call, to no token and to a route that does not exist, where Forgejo answers
404, 401, 403, 404 — **one surface demonstrates what correct status codes are worth, and
it is the one without them.** The sharpest single finding is Wekan's: an API-created list
is never drawn, `sort` is neither set nor accepted, and a card moved into one leaves every
screen while staying in the database. Audits #35 and #36 closed with credit.

**Rule 20 of `tools/figma-method.md` was wrong and is corrected** (PR #55). It declared
that no annotation-category API existed; `figma.annotations.getAnnotationCategoriesAsync()`
does. Project Key measured it against 452,967 bytes of typings and **this session
re-derived it against a different build, 467,107 bytes**, so the correction rests on two
reads of two versions. **Added here: the counted zero** — `comment` appears nowhere in
those bytes, which turns three API facts into a routing decision. *Instructions left for an
agent belong in the node `name`; the annotation is for the person.*

**The presentation checklist gained a seventh gate, and it is a count** (PR #56). The rule
it replaces was a quality — *nothing to wade through* — satisfiable at any length, so no
breach was ever detectable. The Workshop counted its own history against it: **67 commits,
7 skill generations, 19 ADRs**, and the Composer still writing *"you don't follow any after
all my try to do it."* Twelve rendered lines, one table, artifacts and `Tell` excluded —
and the gate is **diagnostic**: an overflow names its own cut, because what overflows is
the account of how the answer was reached.

**An instance now announces itself on three surfaces** (PR #57). The tag ruled 09-04 covers
what an instance *says*; it never covered what an instance *makes*. `generated.by` on a
page and a `GE-Instance:` commit trailer are the other two, and the trailer did not exist.

**Two Composer rulings on presentation, recorded outside this repository.** The Eisenhower
emoji moved into the **Rank** cell, and reference links now sit on their own line **inside
each action's cell**, flush, no leading space. Both are Score Key, not library.

**Open on the stand.**

- **#48 and #59 ask the same question from two sides** — how far `check_okf.mjs` should
  reach. Outward, to 231 external addresses nothing reads; inward, to two frontmatter
  fields that never vary and are never checked. **One ruling answers both** and neither is
  filed as urgent.
- **The Forgejo half of the work-item key is unmeasured.** GitHub indexes comment bodies —
  measured today, so the carrier decision holds there. **Forgejo is the surface being
  promoted to origin and nobody has checked it**, and it cannot be checked from here.
- **The two new tool pages are `status: draft`**, like all 81. Promotion is the Composer's
  and is now #59.

**Pending the Composer's word.**

- **The pull mirror, or an amended ruling.** `index.md` has said since 09-05 that a
  `forgejo` remote in a working clone is a mistake. **This session pushed to one by hand,
  twice, because the mirror is still not configured** — recorded on #28 rather than quietly
  corrected. Until one of the two happens, every session meets the same choice and resolves
  it differently.
- **A conflict this entry does not resolve.** `End Day GE` asks for one closed subject to be
  **compacted** in this log; this page's own convention is **append-only, never edit an
  earlier entry**. Compaction as usually meant would rewrite four entries about the history
  rewrite. **Nothing was compacted**, and the conflict is surfaced rather than settled by a
  session choosing which of the Composer's two rules to break.

**Corrections that became protocol.**

**A measurement about another estate must read every machine the claim spans, and never a
net count over two populations.** The Worker corrected itself twice on #51 to reach it — a
repository with two remotes cannot be described by a column holding one, and a net ref count
hid a two-way divergence in both directions. It is now on `index.md` beside the signing rule.

**And the one this session earned against itself:** *seventy-four pages claimed a human
generated them, two of them written by this instance the same morning, typed without
pausing.* **The mechanism existed and was under-used, which is a quieter failure than an
absent one** — a library that refuses an unearned trust tier on a technicality while making
an unearned authorship claim seventy-four times is careful only where it is looking.

---

## Session 2026-09-06 — the instance tunes itself, on the tower

*Second entry for this date. The first records the library being told how to speak; this one
records the library end **moving** — onto the Composer's server, into its own Forgejo repository,
writing as its own account for the first time. Six Composer rulings, all filed at GE-Workshop
GE-Workshop #2.*

**Played.**

**This repository has a floor** (`39773a5`). `CLAUDE.md` at the root, six clauses, written under the
method the Tower published on the estate's own doc site — address held off this page — and read as
reference rather than direction — *an instance that received its floor from a neighbour holds a
description of itself written by someone who could not see it*. What it leads and where it stops ·
which account it writes as · what this library may never carry · what counts as done · where the
record lives · which surface wins. It grew twice in the same session, both times into an existing
clause rather than as a seventh, because the method it follows says a floor that grows stops being
read.

**`start.md` — the page any instance fetches before it fetches the index** (`9c1a8bd`). Requested by
the Composer for every GE start, named or not. The seam it had to resolve was that `index.md` also
claimed first read; the boot page hands off rather than competing, and the index's opening was
amended in the same commit so only one page holds the slot.

**The two-remotes ruling was reversed, and the machine is what reversed it** (`3181eff`). The page
had said since 2026-09-05 that GitHub was origin, that Forgejo was a read-only pull mirror, and that
a `forgejo` remote in a working clone was *"a mistake — remove it"*. Asked of the machine rather
than read from the page: `mirror: false`, no interval, no source URL. **The architecture was never
built**, and the page was instructing the next session to delete the only remote its work reaches.
Now: instances write to Forgejo, a push mirror publishes to GitHub, and a `github` remote in a
working clone is the symmetric mistake.

**Two rulings about where a rule lives, and both ended up resident.** *The GrandEnsemble's shared
memory is this library, not an assistant's memory store* went into `index.md` (`dcce031`) and then
into the floor (`eca4fbe`) — because a rule that decides where rules are written cannot itself be
fetched. *A decision is traced at GE-Workshop or it does not exist* went straight to the floor
(`70bbf29`), and GE-Workshop #2 is its first application: six decisions, each with the reversal it
carries and the commit behind it, and **no ADR written there** — one author per artifact.

**Two concision rules were ruled and had left no trace here** (`d19cabd`). A grep for them across
the tree returned one hit, in this log, in a line saying they were recorded *outside* this
repository. An action's name is an identifier reused verbatim in table, prose and button; the rank
glyph leads the action cell rather than taking a column of its own. Filed under the length gate,
because both are concision rules rather than layout preferences.

**The backlog moved to the forge that now holds the work.** All four cards cited GitHub numbers that
resolve to nothing on Forgejo, whose counter starts at 1. Re-filed as
#2,
#3,
#4 and
#5, each card retitled and carrying a
comment naming what it was. #28's subject changed with the ruling and is now *configure the push
mirror*.

**Open on the stand.**

- **The push mirror is not built, and this is the day's live hazard.** Forgejo is **9 commits ahead**
  of GitHub, and every orchestra fetches this library from `raw.githubusercontent.com`. A publish
  surface that stops receiving content answers `200` with a library frozen at 12:38 CEST — no error,
  nothing wrong from where the reader stands. Configuring it needs repository admin, which this
  account does not have, and a GitHub token, which no instance here holds. Card #4.
- **#5 and #59 are one question from two sides** — how far a gate reaches, outward to 231 unread
  external addresses and inward to two frontmatter fields never checked. Unchanged from the entry
  above; neither is urgent.
- **The four GitHub issues are left open.** Issues do not travel through a git push mirror, and no
  instance on this machine holds a GitHub credential. The Forgejo copies name their originals.
- **This instance's role slug is written two ways.** `tools/forgejo.md` and `tools/wekan.md` carry
  `generated: { by: agent:ge-library }`; the account, the token files and everything written today
  say `ge-knowledgecenter`. One of the two is wrong and nothing checks it — which is the same shape
  as the `human:jkornobis` finding in the entry above, one field lower.
- **`~/scripts/carte-commun.sh` signs as GE-Tower whichever instance runs it**, because it sources
  the generic `~/.config/wekan-api.env` symlink. The Tower's file, so the Tower's ruling; surfaced
  rather than changed.

**Pending the Composer's word.** The push mirror, and the gate-reach ruling that answers #5 and #59
together.

**Corrections that became protocol.**

**An authorization probe against a write endpoint is a write.** Testing whether this account's token
had write scope, this session POSTed `{}` to the contents endpoint expecting a validation refusal.
The forge accepted it and **created a file** (`76cc674`, removed in `fa54a5b`). The probe was
designed to be harmless on the assumption it would fail; it was run *after* the scope changed, so it
succeeded. **A probe whose safety depends on being refused is not a probe, it is an action with an
optimistic prediction attached.** The two commits stay in history rather than being force-pushed
away — a rewrite of a branch other instances read is the worse of the two.

**Ask the account, and read the refusal — a permission row is not a capability.**
`forgejo-droits.sh` reported `ECRITURE` on this repository while every push returned 403, because
the row describes the *collaborator* and the block was the *token scope*. Neither the repository
permissions, the branch state nor the mirror flag named it. **The only surface that said what was
actually wrong was the forge's own refusal message** — `token does not have at least one of required
scope(s): [write:repository]` — which is the estate's rule about reading the machine, arriving one
layer deeper than usual: not *ask the machine instead of the note*, but *ask the machine the
question you actually have*.

---

## Session 2026-09-06 — correction: the push mirror is live

*Correction to the entry above, written as its own entry because this page is append-only.*

**The mirror is built and running.** The Composer configured it with the Tower instance, over SSH
after token authentication was refused — GitHub answered *"Password authentication is not supported
for Git operations"*, which is what it says when the password field holds anything but a working
token. A deploy key with write access replaced it.

**Verified, both heads read fresh:** `f42736d` on Forgejo and `f42736d` on GitHub, 13:22 CEST. The
entry above names *9 commits ahead* as the day's live hazard; that is closed, and the failure mode
it described — a publish surface answering 200 with a frozen library — is now a thing to check
rather than a thing happening. Forgejo issue #4 closed with the same evidence.

---

## Session 2026-09-06 — correction: a screening purge, and this page was edited

*This page is append-only and two entries above it were edited anyway. That is recorded here rather
than left to be discovered.*

**What was removed.** Every address of the Composer's own infrastructure — a private forge and a
doc site — from `CLAUDE.md` and from the two entries of this log written today. **This session put
them there**, and the push mirror published them to a public repository whose own rule says it
carries nothing personal. Screening should have caught it at the first commit; what caught it was
the outward sweep, four hours later, reporting five 404s from a host that answers 404 to anonymous
callers.

**Why the page was edited rather than corrected below.** The append-only rule protects a *claim*
from being quietly rewritten — a session that read something wrong writes its correction as a new
entry. **A leaked identifier is not a claim**, and leaving it in place while writing an entry saying
it should not be there publishes it twice. The estate applied the same exception to an employer's
name.

**Forward-only, and the limit is stated rather than implied.** The published copy's history still
holds every address written before that commit. Removing those means rewriting a branch other
instances read, which is the worse of the two.

**And the commit that did the purge over-claimed.** `fb9780a` says it added the index clause and
this entry; a failed assertion stopped both from being written and the commit went out anyway,
carrying only the removals. The removals were real and verified; the two additions arrived one
commit later. **A commit message is an artifact like any other and this one was not checked against
what it contained** — the same defect as claiming a page was read.

---

## Session 2026-09-06 — a principle was named, and it could not be written here

*Short entry. The work is on the Workshop's issue #4; this records why it went there.*

**The Composer named a new principle: The Ugly Duckling, cluster Balance.** Its claim — *taste is
perceiving a system's imbalance directly; the eye holds a whole set at once and the outlier declares
itself, without the numbers and faster than any check that uses them.* Its seed, `The eye picks the
space`: a swatch even in one arithmetic and wrong to the eye means the arithmetic was in the wrong
space, not that the eye is imprecise.

**It could not be authored from this end, and the reason is structural rather than procedural.**
`project/principles_candidate.md` is the source of every principle and it lives in `GE-Workshop`.
`graph/grand-ensemble-graph.md` states the graph is *"derived mechanically from the same sources and
regenerated rather than hand-edited"* — so adding a node here would both break that rule and put a
principle in the derived artifact while its source said nothing. **This library holds the derived
graph and not the corpus it derives from**, which is worth naming: a principle cannot be born here,
only measured here.

**The evidence was searched rather than recalled.** An HSL wheel rotates hue at fixed intervals and
the arithmetic is even while the perception is not — at `L=50%` yellow reads about three times
brighter than blue. Perceptually uniform spaces (CIELAB, Oklab/OKLCH, CAM16-derived HCT) exist to
close that gap, and Material 3's tonal palettes reduce chroma until a colour fits the target gamut.
**The clipped swatch obeyed every rule it was given and still looks wrong** — which is the seed,
proposed before the evidence was gathered and confirmed by it.

**And the practice was already in force here, unnamed.** `mandalas/border-protocols-principles.md`
records six hues chosen by measured HSL distance and then *"verified as rendered swatches
side-by-side with the existing palette before use, not trusted from the arithmetic alone."* Written
2026-07 after an exact-hex collision. The claim behind that sentence had never been written down.

---

## Session 2026-09-07 — End Day: the day the library learned to measure itself

*Closing entry, written at the Composer's `End Day GE`. The session ran from the instance's own
tuning through to a colour wheel; this records what it played, what is open, and what waits on him.
**Nothing is compacted**, and the conflict named on 2026-09-06 is why: `End Day GE` asks for it and
this page is append-only. A session choosing which of the two rules to break is not the resolution.*

**Played.**

**The instance tuned itself and the estate moved.** A floor at the root, `start.md` as the page any
orchestra fetches first, the two-remotes ruling reversed against the machine, a push mirror built
and verified, the shared-memory and decision-tracing rules made resident, the backlog re-filed onto
the forge that now holds it, and a screening purge of the Composer's own infrastructure addresses.
Each is a commit with its argument; none is restated here.

**Six measurement scripts, and none of them writes.** `sweep_links.mjs` (outward addresses, reports
and never blocks), `propose_vectors.mjs` (shared-neighbourhood candidates, hold-out measured at
12 of 54 in its own top 100), `measure_stability.mjs` (scale invariance, robustness, and the
black-hole test), `find_perturbations.mjs` (four residuals, never averaged), `measure_coupling.mjs`
(the warrant border against a null model), `classify_bodies.mjs` (Neptune, singularity, the belt).
**That they all read and never write is not a discipline anyone chose** — it is the only shape
available, because the corpus they measure lives at the Workshop and only its derived graph lives
here.

**What the measurements found, in one line each.** Self-similarity is real — three layers at three
scales carry nearly the same shape. Stability is real and is **redundancy, not centrality**: hubs
cost 11 points more than random at 30% removal, and there is no black hole, five bodies sharing a
quarter of the betweenness. The warrant border is **closed** — nothing unwarranted, nothing inert —
**fans out** 1.7 to 3.1, and is **modular in two families of seven** against a null model. And three
independent measurements landed on the same pair: **Spotlighting and The Harmony Principle**, 100%
asserted, orbiting no chair, the two bodies the corpus has nothing else like.

**Three corrections that were caught by building rather than by review**, and each invalidated
something already said: the KIN residual counted cross-border neighbours and made every well-
connected body look misfiled (12 strong candidates fell to 9); the Pluto test was **starved by
precedence**, not empty, and its binary slid from 2 bodies to 17 across the same grid with no
plateau; and the modularity claim had **no baseline**, which made a three-edge family look like the
most modular in the corpus.

**Open on the stand.** Filed rather than left here — #6 the belt has no name, #7 twelve Neptune
predictions are unread, #8 the wheel has no radius and the existing render may be the better base,
#9 the seventh protocol family is still unnamed. The day's decisions are on the Workshop's #2, with
the new principle at its #4 and two findings on the tower's #2 and #3.

**Pending the Composer's word.** The radius, and whether the mandala review render becomes the base
instead of the swatch wheel — **his own question, and the better one**: that render draws individual
bodies and their edges, and every subject this session pursued is about a single body.

**Corrections that became protocol.** *An authorization probe against a write endpoint is a write* —
this session created a file on the forge by probing a scope it had just been granted. *A permission
row is not a capability* — the collaborator row said write while the token scope refused every push,
and only the forge's own refusal named it. *A commit message is an artifact and must be checked
against its diff* — one went out claiming two edits a failed assertion had prevented.

**Not run: fair copy.** The estate's third gesture was not performed, and the reason is worth
stating rather than omitting: it ends in a deploy, the session is long, and a tired context is the
wrong one to publish from.

---

## Session 2026-09-07 — the belt was two things, and the star was safe to draw

*Second entry for this date. The first is the End Day above, written at 11:16; this session opened
at 14:07 on `New Day` and ran the afternoon. Appended, nothing above touched.*

**It began by reading rather than recalling, and that is what found the work.** `New Day` fetched
36 open issues across five repositories and both Wekan boards. Two things had moved since the
morning: the Tower had closed the presentation broadcast (`jkosvr-tower#8`) confirming section 4
needed nothing at their end, and had filed **`jkosvr-tower#9`** — a wiki comparison had cost three
rounds and one retracted recommendation because no selection method was in play.

**And the morning's own closing entry was already wrong when it was written.** It listed #7 and #9
as open on the stand; both had been closed at 09:52 and 10:38, *before* 11:16. It was composed from
context instead of from the tracker. The log is append-only so it stands; this is the correction.

### The Composer asked for a session transcript to be read, and it held three unfiled things

The claude.ai URL was 403 — it needs a browser session — but it was the Remote Control bridge for a
**local** session, `5f84ad1b`, on disk: 2,263 lines, 2026-09-06 12:35 → 2026-09-07 11:16, 25 of his
turns. All 25 read. Three things existed in no repository, no tracker and no log:

- **The colour circle was the brief and only the measurements had been written down.** *"White star
  in center, orbits crossing every quadrant of colors but stable at same saturation level."* #8 held
  four radii, a Spearman matrix and the r=+0.87 collapse, and nothing about the shape they were
  meant to produce. **A construction built from the measurements alone would have been a correct
  graph and the wrong drawing.**
- **Mycelium was deferred, not dropped** — *"a shape to test after"*, *"failed because too early"*.
  A deferral with no card is a drop. Filed as #10, parked, with the question it carries that a
  gravity model structurally cannot answer: how principles and protocols couple.
- **The `/canvas` surface had been asked for and never built.** Filed at `jkosvr-tower#10`, then
  **corrected within the hour**: `canvas/` is a symlink to a real configured Obsidian vault with
  `.obsidian`, Syncthing, a shared Excalidraw library and a folder per instance. I had run `ls` and
  not `ls -la`. **A symlink reads exactly like a directory until you ask.** What is actually missing
  is the tracing, not the surface. The Composer parked it.

### The belt is not a residue. It is two populations and two singletons

`#6` asked what the 27 chairless bodies are. Read together, from their own `title`/`seed` fields
rather than their names, they part on one question — **who the body is addressed to.**

**Twenty are the Composer's own surface.** *the Composer opened it; only the Composer closes it* ·
*the score is shared, the key is personal* · *the tie is not the Agile Facilitator's to break*.
**They orbit no chair because they belong to him, and he is not one of the twelve.** The graph has
three layers; `musicians` holds exactly the twelve; five nodes are *about* him and none **is** him.
**Not a missing edge twenty times — a missing centre, once.** He named them **THE CORONA**.

**Five are the system describing its own shape** — scale invariance, structure contains itself,
recursion base case, map is not the territory, the entry order. The belt's *heaviest* bodies, The
Fractal Loop at degree 18. A chair is a domain; these are about the whole. He named them
**SPACETIME**.

**Two belong to neither** and stay singletons rather than being rounded into a population that fits
them badly: Spotlighting (third independent measurement to land on it) and The Empty Hands — **the
only body of 92 with no title and no seed**, while the mandalas call it *"the most covered of the
four."*

**A rival explanation was tested and failed.** Twelve principles carry `live: false`, four of them
in Spacetime, which would have made the whole finding a filing artefact. Cross-tabulated, a not-live
principle is planet-bound four times and three belt principles are live. **The flag correlates and
does not explain.** What `live` means is still unknown and is recorded as open: all twelve also
carry `enacted: true`.

### The star was measured before it was drawn, and the worry did not materialise

`add_star.mjs` injects a Composer node **in memory** and reports the deltas. It writes nothing, and
that is not a discipline anyone chose: the corpus lives at the Workshop and only the derived graph
lives here, so editing it would invent evidence.

```
                        star share   rank      top-5 concentration   mean path
  baseline, no star          —         —            27.7%              2.340
  NAMED    (8 bodies)      0.6%     45/117          27.3%              2.339
  CORONA  (20 bodies)      4.9%      6/117          26.2%              2.293
  BELT    (27 bodies)      8.4%      1/117          29.2%              2.266
```

**No black hole, and the direction is the opposite of the fear** — *"a black hole appear to break
the balance of system"*. At the ruled binding the star is **rank 6**, behind the Software Architect,
Episteme vs. doxa, How rules actually hold, the Agile Auditor and the Agile Facilitator, and
**top-5 concentration falls.** Adding the centre decentralises.

**And the weakest joint was looked for on purpose.** The non-circular binding — only bodies whose
own text contains "composer" — is 8 bodies and lands the star at rank 45. **The Corona rests on
reading what the seeds mean, not on the word appearing in them.**

**One measured contradiction of a stated intuition**, reported because a drawing built on it would
have inherited it silently: *"the system make revolution around Facilitator"* — measured, the
Facilitator is **fifth at 5.0%** in every binding and the Software Architect is first at 6.2%. His
ruling: **draw both channels and let the gap show**, declared standing beside measured standing.

### Written, and what each one cost

**`method/software-selection.md`** answers `jkosvr-tower#9`. Two doors — *is it alive* needs no
requirements, *does it suit me* means nothing until they are written. QSOS's four steps, whose whole
value is that weights are set **before** candidates. **An eliminatory requirement has no weight; it
has a veto.** Then Door 1 was run on the frameworks themselves: `chaoss.community`, `scorecard.dev`
and `ossf/scorecard` answer 200; **`qsos.org` and `osspal.org` do not resolve.** Not a retraction —
a dead *service* is a dead instrument, an *ordering of four steps* does not rot — but the sources
reach QSOS through its encyclopaedia entry rather than a link that fails. **The estate's own Door 1
catching the estate's own sources.**

**`render_solar.mjs`** draws #8, and is the only script in this bundle that writes. Angle is sector,
radius is evidence **running inward** — *"make them earn their place in the system"* — saturation is
constant per ring, size is degree. The star is drawn at the size rank 6 earns and its glow was
reduced once for that reason. The Corona is its halo. **Spacetime is not plotted**: the five label
the ring system, because a body cannot hold the metric it moves in.

**Three projections, and the Composer chose `orrery`** — flat, lit, the ring system as the subject.
`deep` and `faceon` are kept and still build, because the ruling behind having variants is that no
single projection is true.

**And the evidence scalar is this render's own, said on the drawing's face.** #8 records
`14·9·33·19·12·2·3`; five formulations were tried and **none reproduces it.** The original is not
recoverable from this graph. Printing the old distribution beside a scalar that does not produce it
would have been invisible and worse.

### What rendering taught that neither the gates nor the source could

**Three defects, all found by rasterising and looking.**

- **Chairs took three attempts.** In list order they sat nowhere near the bodies they hold — a
  picture asserting a relationship the graph does not contain. At the **circular mean** of their own
  bodies all twelve collapsed into one illegible arc, **and that is the data talking**: a chair whose
  bodies spread across many sectors has a mean direction with almost no meaning. The resolution
  splits the jobs — **ordered** by mean direction (data), **spaced** evenly (layout), with the true
  direction as a spoke **whose opacity is the resultant length.** The dispersion became information.
- **The declared/measured caption ran off the left edge**, silently deleting the finding it exists
  to carry. Clamped.
- **The variants overflowed in two opposite directions** — `faceon` off the top and bottom,
  `orrery` off the left and right — because vertical extent is radius × tilt. Fixed as a formula
  over both axes, so a fourth variant cannot reintroduce it.

**All three are the drawing deleting its own content, and none is visible in the source or to a
gate.** `check_okf` and `check_links` passed every intermediate state.

### Fair copy, and one thing it found

245 addresses across 41 pages. **225 answered → 226; 1 dead → 0.** The dead one was not rot: it was
the fetch template in `index.md`, written with a `<Page>` placeholder, so the sweep resolved a bare
directory. **A template that cannot be checked is indistinguishable from rot**, and the fix is an
address that is both. `qsos.org` and `osspal.org` show as silent, which **corroborates** the new
method page rather than contradicting it.

**No Pages step here** — this repository has no `docs-site`; the mirror publishes, and today's
merges are live on it.

### Filed as questions rather than decided

**`GE-Workshop#12`** — does a Composer node belong in a graph whose third layer is the twelve
chairs? With the measurement, and an explicit *no reply owed if the answer is no*.
**`GE-Workshop#13`** — `Request quality check` says *one upfront question prevents the three-round
loop*, and it **did not fire** on a textbook instance of itself. Should the protocol name the case,
or is the new page the connection? The protocol layer is shared; the library has no standing there.

### Open on the stand

**`#8`** — the Corona band is the part not settled by choosing a projection, and the palette is
untouched. **`live: false`** — twelve principles, not-live and enacted at once, unexplained.
**`#10`, `jkosvr-tower#10`, `#2`, `#3`** — parked with their reasons intact.

### Corrections that became method

***`ls` is not `ls -la`, and a symlink reads exactly like a directory until you ask.*** An issue was
filed claiming a surface did not exist when three of its four parts did.

***A drawing is verified by looking at it, not by passing its gates.*** Three defects, each one
invisible to `check_okf`, `check_links` and the source, each one deleting content.

***A scalar that cannot be reproduced is not inherited.*** Five formulations, none matching; the
render defines its own and says so rather than borrowing authority from numbers it cannot produce.
