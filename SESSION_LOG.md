---
type: Session Journal
title: "Session Log — the library end"
description: "Episodic memory for GE-KnowledgeCenter: what each session played, what it left on the stand, and what waits on the Composer. Chronological, append-only, newest at the bottom."
status: draft
generated: { by: GrandEnsemble · Library instance, at: 2026-09-02T22:26:04+02:00 }
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
