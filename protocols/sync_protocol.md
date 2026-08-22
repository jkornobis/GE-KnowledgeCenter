---
type: Protocol
title: "Pre-Sync Protocol — test → refactor → test → sync → test the sync"
description: "Shipping a change safely: test, refactor, test, review, sync, test the sync — effort-tiered, with the gate owner named at each step"
status: draft
generated: { by: human:jkornobis, at: 2026-08-16T21:24:05+02:00 }
---

# Pre-Sync Protocol — test → refactor → test → sync → test the sync

Adopted 2026-07-02 (ADR-22). How the orchestra ships a change safely. Composer-authored spine; the orchestra filled the gaps. **Effort-tiered** — depth matches the change.

| # | Step | What it means here |
|---|---|---|
| 0 | **Restore point** | Commit/branch first — a labeled point to return to (the belt). |
| 1 | **Test — baseline green** | Confirm it works *before* touching it, so a break is traceable to the change. "Test" = invariant eval sets + skill validation + grep-verify (not code unit tests — this repo is markdown/skill). |
| 2 | **Refactor** | Only if needed; don't force it. |
| 3 | **Test — change + regressions** | Does the new thing work, AND did anything else break? Both directions. |
| 4 | **Review** | A second look before shipping — automated tests miss things; the Composer is the gold-standard check (Minimum Duet applied to changes). |
| 5 | **Sync** | Merge — only on the Composer's **explicit yes** (consequential/outward). |
| 6 | **Test the sync** | Verify merged main (fetch, status, tag). **If red, revert to the last tag.** |

## Effort-tiering (don't grind on trivia)
- **Trivial** (typo, wording): grep + skill-validate only.
- **Rule / behavior / protocol change**: the full rhythm above.
- **Structural** (renames, deletions): full rhythm + explicit restore point + the deletion protocol.

## Ownership
QA Engineer owns the test gate (1, 3, 6). Software Architect owns restore point, sync, tag, rollback (0, 5, 6). The Composer owns the go (4, 5).
