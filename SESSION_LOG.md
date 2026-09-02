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

**Played.** Reviewed and merged [#4](https://github.com/jkornobis/GE-KnowledgeCenter/pull/4),
`mandalas/movements-layer.md` — the first proposal to arrive here from the Agile
Watcher instance, and the first document in `mandalas/` written from outside the
library. Every count in it was re-derived from `graph/grand_ensemble.json`, and all
four dated external claims were checked against the primary sources the page names.

Two factual defects were found and corrected on the branch before merge (`54c669a`):

- `rootless` is carried by **four** movement nodes, not three — `movements:lean`
  was omitted, and its wording is the strongest instance of the convention the
  section argues for.
- The chair↔principle warrant count is **72**, not 73. The 73 is real but belongs
  to a different document, `principle_chair_map.md`, measured 2026-08-13.

Merged as `8f04666`. The branch was kept, matching this repo's existing practice.
Five issues opened: [#5](https://github.com/jkornobis/GE-KnowledgeCenter/issues/5)–[#9](https://github.com/jkornobis/GE-KnowledgeCenter/issues/9).

**Open on the stand.** #8 waits on nobody — three dated claims stating more than
their sources support, fact-matching only. #5 cannot be settled from inside this
repository at all: the document the 73 is attributed to is not in the mirror.

**Pending the Composer's word.** Tiers for the two missing chair reference files
(#6). The eleven movement→chair placements (#7). The `live: false` flag on
`principles:artasfeltscience` (#9). And the single question that collapses three
issues at once: **does the `project/` tree travel, or do its references become
non-links with their provenance stated?** — #5, #9, and `index.md:297`, which
already logs the question and has not been answered.

**Corrections that became protocol.** One, and it was earned the hard way. **This
repository carries its own gates — `check_okf.mjs` and `check_links.mjs` — and the
review of #4 did not run them.** The review verified every factual claim in the page
against primary sources and reported "this repo reports no CI checks, so a review is
the only gate", which was true of GitHub Actions and false of the repository. `main`
was OKF-conformant at `7125410` and was not at `8f04666`: `movements-layer.md`
carried `status: proposal` where §5.4 allows only `draft|stable|deprecated`, and a
bare date where §5 requires an ISO 8601 timestamp with an explicit UTC offset. The
first entry of this very log then reproduced both faults. Both files were corrected
in `f9a0a26` and the checkers pass again.

**The rule, for any session that merges here: run `node check_okf.mjs` and
`node check_links.mjs` before the merge, not after.** Neither exits non-zero on
failure, so nothing will stop a bad merge on your behalf — they must be read.

A second correction was *not* recorded, and that absence is worth
carrying too. This session ran under an inverted delivery rule — *this instance reviews
and merges in `GE-KnowledgeCenter`; every other repository is PR-and-issue only* —
taken at session level by the Composer's explicit choice and written nowhere
durable. It does not survive this session, and the Composer Key still states the
reverse. **A future session will load the Key, read "I open a PR and stop", and be
correct to do so.** If the merge chair here is meant to persist, that is the thing
to record.
