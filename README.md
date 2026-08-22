---
type: Reference
title: "GE-KnowledgeCenter"
description: "What this bundle is, how to read it, what it will never carry, and how a page gets added"
status: draft
---

# GE-KnowledgeCenter

**A database of knowledge for an agile team** — craft about the instruments a team plays, written by the estates that actually played them.

It is a **repo, not a service.** Nothing was deployed to make it readable and nothing has to stay running: `raw.githubusercontent.com` serves every file, unauthenticated. There is no endpoint to create, no connector to maintain, no token to hold, and no local copy to go stale.

## Why a repo and not a skill

A skill ships **instructions**. A repo ships an **accumulating corpus with provenance and history.**

Today every team audits every surface it touches from scratch, hits the same walls, and writes the answer somewhere only it can read — **O(M×N)**. With a shared library a surface is audited **once**, by whoever actually uses it, and every later reader inherits verified facts about a tool they have never opened — **O(M+N)**. That is the whole argument, and it is why this is a repository rather than a longer prompt.

## How to read it

**Always [`index.md`](index.md) first.** It declares the set. A reader may inherit what the index covers and may not exceed it.

```bash
curl -s https://raw.githubusercontent.com/jkornobis/GE-KnowledgeCenter/main/index.md
```

Then the page the task actually needs — same call, different path:

```bash
curl -s https://raw.githubusercontent.com/jkornobis/GE-KnowledgeCenter/main/tools/axe-core.md
```

**Read what the index names, not what you guess.** A path invented from a plausible name returns 404, and **a 404 is never evidence that the knowledge is absent** — only that you asked for the wrong thing. If the index does not list it, the library does not cover it: say so rather than improvising a path.

**Fetch on demand, never on principle.** Open a page when a task turns on a fact about a surface — a tool's real capability, a limit someone already hit, the default it must beat. An unopened page costs nothing; an opened one costs its length.

## What is in it

| Section | Holds |
|---|---|
| `tools/` | what an instrument can actually do — capability, defects, friction, limits |
| `tools/lineage.md` | the index the tool pages hang from: each chair's origin, its leap, and the lag between |
| `tools/yang/` | lever indexes — *what you want* → the call that does it → **the wrong default it beats** |
| `chairs/` | what a seat knows, independent of whoever occupies it |
| `protocols/` | how the work is run |
| `method/` | craft that outlives any single tool |

## What it will never carry

Three exclusions, and each was learned rather than assumed:

- **Nothing personal.** No keys, no profiles, no one's working habits. If key material travels everywhere, it *is* everywhere.
- **Nothing internal.** No employer's systems, no customer engagement, nothing under NDA. This repo is public, and that inverts the filter an internal host would allow.
- **No project.** A concert is not the instrument. What a team *plays* — a product, an engagement, a client's system — stays with the team that plays it. The library carries what is true for **whoever** plays; a project is true for exactly one of them.

## Verification status

**Every page is `status: draft` and carries no `verified` field.** In OKF terms that is the *unverified* tier: published by the estate that wrote it, not independently confirmed. `generated.at` is when the page last changed at home, not a re-audit date.

That is deliberate. A library whose whole value is inherited verification cannot begin by asserting verification it has not done.

## Adding a page

Start from [`tools/_template.md`](tools/_template.md). It asks for the chair and lever a tool serves, its place in that chair's lineage, its Context7 id **resolved rather than copied**, and its known issues from two records — the issue tracker for *defects*, Stack Overflow for *friction* — each row verified against the primary source rather than a search summary.

**Two pages about the same surface do not merge into one.** Disagreement is a finding: two entries, both dated, and the difference is the interesting part. A library that resolves disagreement by overwriting loses the only signal that says *look here*.

## Format

Conformant with the **Open Knowledge Format v0.2** — a directory of markdown files with YAML frontmatter, cross-linked, readable with `cat` and shippable with `git clone`. Checked by [`check_okf.mjs`](check_okf.mjs) in this repo; run `node check_okf.mjs`.

One deliberate divergence: OKF §8 illustrates an index as bullet lists, and `index.md` here uses tables — the extra columns (what a page covers, which chairs it serves) are what let a reader decide *not* to fetch.

## Licence

**CC BY-SA 4.0.** Attribution, so a finding carries whose estate verified it; share-alike, so an adapted corpus stays as open as the one it came from.
