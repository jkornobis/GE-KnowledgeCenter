---
type: Chair Reference
title: "Software Engineer — Field References (Code & APIs)"
description: "Living reference notes for the Software Engineer's field"
status: draft
generated: { by: human:jkornobis, at: 2026-08-16T23:27:12+02:00 }
---

# Software Engineer — Field References (Code & APIs)

Living reference notes for the Software Engineer's field. Sourced from an **independent field audit** (2026-07-02, real subagent, not persona self-assessment). The through-line: *the API attack surface and the runtime/tooling baseline moved* past a "TypeScript + Clean Code" snapshot. Re-verify versions before citing.

## Critical
- **[OWASP API Security Top 10 (2023)](https://owasp.org/API-Security/editions/2023/en/0x11-t10/)** — The dominant attack surface is now authorization logic, not injection: BOLA (broken object-level auth), broken object-property-level auth, unrestricted resource consumption. These are the bugs a TS API Software Engineer ships daily.
- **[Runtime schema validation — Zod / Standard Schema](https://zod.dev/)** — TypeScript types vanish at runtime, so trust-boundary data (request bodies, env, API responses) needs runtime validation. Zod 4 and the cross-library [Standard Schema](https://standardschema.dev/) spec are the baseline, not hand-written guards.
- **[Typed end-to-end APIs — tRPC / REST / GraphQL](https://trpc.io/docs)** — Choosing between tRPC (TS-monorepo, zero-codegen type safety), OpenAPI-typed REST, and [GraphQL](https://graphql.org/learn/) is a core design decision; a REST-only Software Engineer under-serves full-stack TS teams.

## Important
- **[Supply-chain security — npm provenance](https://docs.npmjs.com/generating-provenance-statements)** — Most real breaches enter through dependencies: know npm provenance/sigstore attestation, `npm audit`, lockfile pinning, SBOM generation, and [OpenSSF Scorecard](https://securityscorecards.dev/) — not just `npm install`.
- **[Result types & typed errors](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-2.html)** — Idiomatic Clean-Code TS favours discriminated-union `Result` types, `unknown` in catch clauses (default since TS 4.4), and explicit resource management (`using` / `await using`, TS 5.2) over throw-everywhere.
- **[Modern test tooling — Vitest / Playwright / node:test](https://vitest.dev/)** — Jest is no longer the default: [Vitest](https://vitest.dev/) (ESM/Vite-native), the built-in [`node:test`](https://nodejs.org/api/test.html) runner, Playwright for E2E, and contract testing (Pact) for API boundaries.

## Emerging
- **[ESM, Node LTS & runtimes](https://nodejs.org/api/esm.html)** — The CJS→ESM migration, Node 22/24 LTS (native `.env`, `--watch`, `fetch`), and Deno/Bun reshape module design and packaging (`exports` maps, dual-package hazards).
- **[Auth standards — OAuth 2.1 / JWT / PASETO](https://oauth.net/2.1/)** — OAuth 2.1 (PKCE mandatory, implicit flow removed), OIDC, and safe token handling (short-lived JWTs, JWKS rotation, or PASETO to avoid `alg:none`-class pitfalls). See [RFC 9700](https://datatracker.ietf.org/doc/rfc9700/).

## Context7-resolvable libraries (2026-07-20, User Researcher)

The live-docs layer for the code libraries above: a session pulls current docs by `/org/project` ID instead of trusting a training snapshot. **Trust** = Context7 source reputation, **Bench** = doc-quality score (100 max). Standards/specs (OWASP API Top 10, npm provenance, OAuth, ESM) stay as doc links — Context7 is for the *libraries*, not the specs. **NEW** rows are design-industrialization additions not previously in this file. Source: `resolve-library-id` on `context7.com`.

| Library | Context7 ID | Trust | Bench | Tie to entries above |
|---|---|---|---|---|
| Zod | `/colinhacks/zod` | High | 85.79 | Runtime schema validation (Critical) |
| tRPC | `/trpc/trpc` | High | 88.74 | Typed end-to-end APIs (Critical) |
| Vitest | `/vitest-dev/vitest` | High | 82.2 | Modern test tooling (Important) |
| Playwright | `/microsoft/playwright` | High | 84.22 | E2E / contract testing (Important) |
| **Style Dictionary** *(NEW)* | `/style-dictionary/style-dictionary` | Medium | 82.42 | **Design-industrialization: the engineering half of the UX Designer's tokens — transforms W3C design tokens into platform code (CSS/TS/iOS/Android), the build step between Figma variables and shipped styles** |
| **Storybook** *(NEW)* | `/storybookjs/storybook` | High | 83.53 | **Design-industrialization: the component workbench where Code-Connect'd components are built, documented, and visually tested in isolation — the contract surface between design and code** |

Pick the `/org/project` repo IDs above over `/websites/*` mirrors when both exist — same source, higher benchmark here.
