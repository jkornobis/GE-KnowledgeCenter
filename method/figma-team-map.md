---
type: Method
title: "Mapping a Figma team's folders and files — the procedure, and why it stopped working"
description: "Enumerating a whole Figma team is not reachable through any of the 37 MCP tools this library has audited — it is a REST API tree-walk, over an endpoint family that changed shape recently enough to break a procedure that worked a month ago"
status: draft
serves: [UX Designer, Design Engineer, User Researcher]
generated: { by: agent:ge-knowledgecenter, at: 2026-09-22T00:00:00+02:00 }
sources:
  - resource: https://developers.figma.com/docs/rest-api/folders-endpoints/
    title: "Figma REST API — Folders endpoints (v2)"
  - resource: https://developers.figma.com/docs/rest-api/projects-endpoints/
    title: "Figma REST API — Projects endpoints (v1, deprecated)"
  - resource: https://developers.figma.com/docs/rest-api/personal-access-tokens/
    title: "Figma REST API — personal access tokens"
card: tools/figma.md
---

# Mapping a Figma team's folders and files — the procedure, and why it stopped working

## The gap this closes

**None of the 37 tools on the Figma MCP connector can list a team's contents.** Verified against the
live schema during the 2026-09-22 re-audit (`tools/figma-mcp-remote.md`): every MCP tool that touches
a specific file takes a `fileKey` you must already know (`get_metadata`, `get_design_context`,
`use_figma`, …); nothing takes a `teamId` and nothing enumerates. **If a GE is stuck trying to make an
MCP tool discover a team's files, that is not a wrong parameter — the capability does not exist on
that surface at all.** This is a REST API task, not an MCP task, and needs a different credential (see
below).

## Why "the same content that worked a month ago" can now fail

**Figma's own endpoint family changed shape, and the old one is marked deprecated, not removed.**
`GET /v1/teams/:team_id/projects` and `GET /v1/projects/:project_id/files` — the flat, one-call
"projects" model — are deprecated in favour of `GET /v2/teams/:team_id/folders` and
`GET /v2/folders/:folder_id/files`. **The v2 docs state plainly why the shape changed: "on plans with
nested folders enabled"** — folders can now contain folders, which a flat `projects` list was never
built to represent. **A procedure written against v1 a month ago, on a team that has since had nested
folders turned on, would return a top-level list that quietly stops being everything.** That is a
plausible, sourced account of *"worked before, doesn't now, same content"* — not confirmed against
this specific team, because nothing here has run either call.

## The procedure (v2, current)

**Needs a Figma personal access token with `folders:read` scope — a different credential from the MCP
connector's OAuth session.** The MCP tools authenticate the *product* session; this needs a token
generated at [figma.com account settings → Personal access tokens](https://developers.figma.com/docs/rest-api/personal-access-tokens/),
sent as the `X-Figma-Token` header on plain HTTPS calls. `whoami` (MCP) cannot mint this token — it
can only tell you *which* plan/team to target.

1. **Find the team ID.** `whoami` (already an MCP tool, already verified live in the 2026-09-22
   re-audit) returns a `plans` array with entries like `"key": "team::1303771395057511008"`. **The
   numeric suffix is a plausible `team_id`** — Figma's own team IDs are exactly this shape — but this
   is a hypothesis from the key's format, not confirmed against the REST API, because no token was
   available this session to test it. Verify with step 2 before trusting it for anything downstream.

2. **List the team's top-level folders.**
   ```
   GET https://api.figma.com/v2/teams/:team_id/folders
   X-Figma-Token: <personal access token>
   ```
   Returns top-level folders only — every entry's `parent_folder_id` is `null` at this level, by
   design (the response cannot see its own children).

3. **Recurse into every folder to find its subfolders.** This is the step a flat, one-call mental
   model misses:
   ```
   GET https://api.figma.com/v2/folders/:folder_id/folders
   ```
   for each folder found in step 2, then again for every folder that call returns, until a level
   returns empty. **The team's folder tree is only complete after this recursion terminates** — one
   call at the top never was, and now definitely is not, the whole picture.

4. **List the files inside each folder** (leaf and non-leaf both — a folder with subfolders can still
   hold files directly):
   ```
   GET https://api.figma.com/v2/folders/:folder_id/files?branch_data=false
   ```
   for every folder ID collected in steps 2–3.

5. **Optional — a lightweight per-folder preview without walking files.**
   `GET /v2/folders/:folder_id/meta` (scope `folder_metadata:read`, a different scope from step
   2–4's `folders:read`) returns `id`, `name`, `thumbnail_url`, `file_count`, `updated_at`,
   `created_at` — useful for a fast overview pass before deciding which branches are worth the full
   file-level walk.

**The shape of the result is a tree, not a list**, and building the graph is: nodes = folders + files,
edges = `parent_folder_id` (folder→folder) and folder→file membership from step 4. `file_count` from
step 5 is a cheap correctness check against the file list actually gathered per folder in step 4.

## What is verified and what is not

| Claim | Status |
|---|---|
| The v1/v2 endpoint paths, parameters, scopes, rate tiers above | **sourced** — Figma's current developer docs, fetched 2026-09-22 |
| "Nested folders" as the reason v1 → v2 changed shape | **sourced** — quoted from the v2 docs themselves |
| No MCP tool can do any part of this | **verified live** — the full 37-tool schema was read this session, none matches |
| `whoami`'s `team::<id>` suffix is a usable `team_id` | **hypothesis** — plausible from format, not run against the REST API |
| That this procedure actually returns a correct tree for a real team | **not run** — no personal access token was available in this session to execute step 2 onward |

**The next real Tool Audit action is running steps 1–4 once, against one team, with a token** — that
confirms or kills the `team_id` hypothesis and turns this from a sourced procedure into a verified one.

## Where this sits in the corpus

Sibling to `tools/figma-mcp-remote.md`, which this page's opening section treats as authoritative for
what the MCP connector can and cannot reach. **The limit recorded there should cross-reference this
page** rather than restate the procedure.
