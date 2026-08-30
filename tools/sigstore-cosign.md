---
type: Tool
title: "Tool: Sigstore / Cosign"
description: "Keyless signing and provenance for artifacts: why the CLI's own Context7 entry scores Low, a supply-chain tool carrying a supply-chain dependency, and a user community invisible from either route"
status: draft
serves: [Software Architect, Reliability Engineer]
generated: { by: human:jkornobis, at: 2026-08-25T15:13:24+02:00 }
---

# Tool: Sigstore / Cosign

Audited 2026-08-23 by User Researcher. CLI (`cosign`) over public infrastructure (Fulcio, Rekor); CNCF. Not MCP-mediated. Keyless signing uses an OIDC identity — no long-lived key to hold, which is the point.

Re-audit: 40 days — measured, release cadence (n=6 intervals, PROVISIONAL, agile-watcher @ acaadb3, 2026-08-30)

**Chair:** Software Architect — `brain/software_architect_references.md` names supply-chain integrity Critical (SLSA v1.2, SBOM) and frames it as an operational duty under the EU CRA rather than a buzzword. Also `Serves:` the Reliability Engineer, whose `reliability_engineer_references.md` lists Sigstore/Cosign as the **runtime enforcement** of the policy the Software Architect owns.
**Lineage:** the Software Architect's leap is *the ADR* (Nygard, 2011) against an origin of design docs, lag **25 years** — and this instrument is not that leap. **Recorded as a mismatch:** signing is a younger seam the lineage table has no row for, and it exists because *the artifact* became the thing that needed a decision record, not just the design. `project/tools_lineage_full.md`

## Context7

| Field | Value |
|---|---|
| Library ID | `/sigstore/docs` — resolved 2026-08-23, **not recalled** |
| Snippets · reputation · benchmark | 704 · High · **69.33** |

**Two readings on this family are worth more than the headline.**

**`/sigstore/cosign` — the thing you actually run — carries `Source Reputation: Low`**, 423 snippets, benchmark 72.98. It is the **first first-party repository in this library to score Low**, and the CLI is the surface a chair touches. Prefer `/sigstore/docs` for concepts and treat the CLI entry as a reference to check rather than to trust.

**And `/sigstore/sigstore-go` benchmarks 90.9** — the **highest single score of any entry resolved for this library**, against the docs' 69.33. **Same shape as OpenTelemetry**: the implementation outscores the explanation by twenty points. Two projects now, both infrastructure-shaped, both documenting the *how* far better than the *why*.

## Critical (verified this session)

- **Software Architect** — **keyless signing** is the change that matters: identity comes from an OIDC token, the certificate is short-lived, and the signature is recorded in a public transparency log (Rekor). There is no key to rotate, leak, or lose — the failure mode a signing programme normally dies of is removed rather than managed.
- **Software Architect** — SBOM and SLSA answer different questions and both are needed: **an SBOM lists components; SLSA attests how the artifact was built.** A bill of materials with no provenance says what is inside a box nobody watched being packed.
- **Reliability Engineer** — verification belongs at **deploy time**, not build time. Signing without an enforcing verify step is ceremony.

## Known issues — defects and friction, from two records

### Defects — the project's tracker, read 2026-08-23 via the GitHub API

**116 open issues, and the `bug` label exists and is used** (fetched: `allstar, bug, dependencies, docker, documentation, duplicate, enhancement, ga-candidate…`), so counts here mean what they say.

**The tracker is quiet in a way worth naming: the most-reacted open issue carries 6 👍.** Compare Playwright's 591 or Storybook's 341. Either the user base is small relative to those, or it is an operator population that files support requests elsewhere. **This page cannot tell which**, and the SO reading below does not settle it either.

| Issue | State | What it costs the chair | Source |
|---|---|---|---|
| Move away from a third-party ACR credential helper dependency | open, 2024-10-25, 6 👍, `bug` | **a supply-chain tool carrying an unwanted supply-chain dependency.** The most on-the-nose issue in this library, and the reason it is cited first | [#3913](https://github.com/sigstore/cosign/issues/3913) |
| Verify images from a tar file or local cache | open, 2023-05-16, `enhancement` | verification assumes a registry; air-gapped and local flows are the awkward path | [#2985](https://github.com/sigstore/cosign/issues/2985) |
| An easier way to retrieve an SBOM from an in-toto attestation | open, 2022-10-04, 15 comments, `enhancement` | the SBOM goes in more easily than it comes out, which matters when the CRA's reporting duties make *retrieval* the operative verb | [#2307](https://github.com/sigstore/cosign/issues/2307) |

### Friction — Stack Overflow: none, and the route has a limit

**The `cosign` tag holds 0 questions. The `sigstore` tag holds 0 questions.** Both tag pages rendered; the counts are real for those tags.

**What cannot be established from here:** whether questions live under `docker`, `kubernetes` or `ci` instead. **Stack Overflow's search endpoint returned a human-verification challenge** to the Browser pane on 2026-08-23, and this orchestra does not bypass bot detection — so the search route is closed, exactly as `openbenchmarking.org` is (`register.md`, `Grip: blocked`). **The tag route works; the search route does not.** Recorded so no later audit spends the attempt.

**Read together with the quiet tracker, the honest summary is: this tool's user community is not visible from either route available here.** That is a gap in the evidence, not a finding about the tool.

## Limits — where this instrument stops

- **Signing proves origin, never quality.** A signed artifact is an attested one, not a good one — the same distinction `register.md` draws between the licence field and every other field.
- **Verification must be enforced somewhere** or the whole chain is decorative; Cosign supplies the verb, not the gate.
- **Transparency-log entries are public by design**, which is the property that makes them auditable and a disclosure to weigh before signing anything whose existence is sensitive.

All three are **tool limits**, not reasoning limits.

## Recommended (Composer to accept/decline)

- **Software Architect** — when reading this family, take concepts from `/sigstore/docs` and treat `/sigstore/cosign`'s Low source reputation as a reason to verify CLI specifics against the binary's own `--help`. — status: proposed
- **Reliability Engineer** — the deploy-time verify gate is where this becomes real; note it as the thing to check before any claim that the estate "uses Sigstore". — status: proposed
