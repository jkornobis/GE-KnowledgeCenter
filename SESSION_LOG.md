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
`1c10f80`..`40f4f3d`, three files, +405 lines and no deletions. Checkpointed at
the Composer's word.*

**Played.**

Reviewed and merged [#4](https://github.com/jkornobis/GE-KnowledgeCenter/pull/4),
`mandalas/movements-layer.md` — the first proposal to reach this repository from
the Agile Watcher instance, and the first document in `mandalas/` written from
outside the library. Every count in it was re-derived from
`graph/grand_ensemble.json` with `node`; all four dated external claims were
checked against the primary sources the page names. Two factual defects were found
and corrected on the branch before merge (`54c669a`):

- `rootless` is carried by **four** movement nodes, not three — `movements:lean`
  was omitted, and its wording is the strongest instance of the convention the
  section argues for.
- The chair↔principle warrant count is **72**, not 73. The 73 is real but belongs
  to a different document, `principle_chair_map.md`, measured 2026-08-13.

Merged as `8f04666`, branch kept, matching this repo's practice. Five issues were
opened, #5–#9; #5 and #6 were then closed on the Composer's ruling that
`index.md`'s *Observed, not yet decided* register is the surface that owns an open
question here. It already tracked both — better than #6 did, connecting the missing
chair pages to a second ten-chair era in `method/orchestra_glossary.md`. The
73-vs-72 measurement was carried into that register first (`3f0c8fa`) so the close
would lose nothing.

This log was created (`7655ed2`) — `protocols/session_journal.md` prescribed a
running `SESSION_LOG.md` and none existed, so the protocol had a shape and no
surface. OKF conformance was broken and restored (`c6ea741`), and `index.md` gained
two rows and a section (`4096b53`): this log, and the merged movements page that
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
   false of the repository. `main` was OKF-conformant at `7125410` and was not at
   `8f04666`: `movements-layer.md` carried `status: proposal` where §5.4 allows only
   `draft|stable|deprecated`, and a bare date where §5 requires an ISO 8601
   timestamp with an explicit UTC offset. The first entry of this very log then
   reproduced both faults. Corrected in `c6ea741`.
   **The rule: run `node check_okf.mjs` and `node check_links.mjs` before the merge,
   not after.** Neither exits non-zero on failure, so nothing will stop a bad merge
   on your behalf — they have to be read.

2. **I wrote commit hashes that did not exist, twice**, before the commits that
   would carry them — `f9a0a26` into this log, corrected by `b052c33`, and
   `8b3b1ec` into the closing comment on #5, corrected in place. Twice makes it a
   pattern rather than a slip.
   **The rule: write the artifact first, then quote it from `git log`. Never a hash
   that has not been read back.**

3. **A merge is not only about the page.** `mandalas/movements-layer.md` was merged
   and never added to `index.md`, which this library states is the only route in —
   so the merge landed a document on `main` that no traveler could reach, and it sat
   there for two hours. Listed in `4096b53`.
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
