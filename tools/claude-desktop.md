---
type: Tool
title: "Tool: Claude Desktop (this machine, Windows 11)"
description: "Claude Desktop on Windows: the 1024-character skill-description limit, .skill as a zip of a directory, a menu that is not the registry, and why a shell-side localhost is not the machine"
status: draft
serves: [Software Engineer, QA Engineer, User Researcher, Reliability Engineer]
serves_all: true
generated: { by: human:jkornobis, at: 2026-08-22T23:51:16+02:00 }
---

# Tool: Claude Desktop (this machine, Windows 11)

> **Renamed 2026-08-05 (ADR-229): `grand-ensemble-alpha` → `grand-ensemble-beta`.** The measurements below
> were taken on the artifact under its former name and are left as recorded — a dated measurement
> rewritten to a later name is no longer a measurement. The path they cite no longer exists.


Audited 2026-07-31 by User Researcher, from the live install-and-fire of `grand-ensemble-alpha` on 2026-07-30/31.
Native client, not MCP-mediated. Written because three separate facts about *installing and invoking a
skill here* were each discovered by a failure the Composer hit first, and none of them is in any doc.

Re-audit: 90 days — default, not measured (no release has yet invalidated anything on this page; no chair's Yang file claims it)

For reading a PDF on this machine, see `pdf-reading.md` — not restated here.

## Critical (verified this session)

- **Any musician — a skill's `description` must be at most 1024 characters, and the client refuses the
  install below that line, not above it.** The literal error: *"field 'description' in SKILL.md must be
  at most 1024 characters."* Found by a V3 candidate failing to install, then hit a second time the
  same day when the GrandEnsemble-Alpha rename produced **1048** — the new name's prefix was longer
  than the one it replaced. Measured by command, not recalled:

  ```bash
  # 1002 for skill/grand-ensemble-alpha, 940 for skill/grand-ensemble (2026-07-31)
  ```

  `build_skill.py --check` now measures it, which is the only reason the second one was caught before
  the Composer was. **The shipped `skill/grand-ensemble` sits at 940 — 84 characters of headroom.** One
  more sentence in that description and it stops installing.

- **Any musician — a Claude skill is a directory, not a file, and `.skill` is a zip of that directory.**
  Verified on `skill/grand-ensemble-alpha.skill`: magic bytes `50 4B 03 04`, 88,804 bytes, **16
  entries**, every path prefixed with the skill's own folder (`grand-ensemble-alpha/SKILL.md`,
  `grand-ensemble-alpha/references/*.md`). The client's own detail pane reports the same 16 files. The
  first V3 candidate was authored Figma-shaped — one flat markdown file — and that shape does not
  install.

- **Any musician — the `/` menu is a listing, not the registry.** GrandEnsemble-Alpha was installed,
  enabled, trigger *Commande / + auto*, 16 files, description rendering in the client — **and absent
  from the `/` menu** at its correct alphabetical position between `goal` and `heapdump`. It survived a
  filter and a full restart still absent. The Composer then typed the full namespaced form,
  `/anthropic-skills:grand-ensemble-alpha`, and **it fired and loaded whole**.

  > A skill can be installed, enabled, registered and fully invocable while the menu never offers it.
  > The menu is therefore not evidence of what is available — absence there is not absence.

  **Cause unknown and deliberately not guessed.** Three live hypotheses, none tested: the menu filters
  on a field other than the trigger; the `anthropic-skills:` namespacing affects listing; or it is a
  display bug. Do not report any of them as the reason.

- **Any musician — invoke by the full namespaced name when a skill does not appear.** `/<namespace>:<skill-name>`
  works whether or not the menu lists it. That is the workaround, and it costs nothing.

- **Software Engineer — `git worktree remove` half-fails on this machine, and the half that fails is silent
  until it warns forever.** Verified 2026-08-04. The command removes the *registration* correctly —
  `git worktree list` is trustworthy afterwards — and then fails to delete the directories:

  ```text
  error: failed to delete '<path>/worktrees/<name>': Permission denied
  error: failed to delete '.git/worktrees/<name>': Permission denied
  ```

  **It is not OneDrive, and that was tested rather than assumed.** The first instance (`wt-ff`) sat
  inside the synced folder, so sync locking was the obvious suspect; a second worktree was then moved
  **outside** the OneDrive root and removed there, and it failed identically. A `Remove-Item -Recurse
  -Force` on the exact same paths succeeded seconds later in both cases — **a lock would have blocked
  both tools**, so this is git's own delete on Windows, most likely read-only attributes on what it
  writes, not a held handle.

  **Why it matters more than a stray folder:** a leftover `.git/worktrees/<name>` is a stale
  registration, and git retries pruning it on **every push**, printing the same error each time. That
  is what `wt-ff` did for a full day before anyone traced it. **The reliable sequence on this
  machine:**

  ```text
  git worktree remove <path>          # registration goes; directories may not
  Remove-Item -Recurse -Force <path>  # and .git/worktrees/<name>
  git worktree prune -v               # confirm nothing stale remains
  ```

  **Relevant because the harness creates these, not a human:** `EnterWorktree` and worktree-isolated
  agents put new worktrees under `.claude/worktrees/` — *inside* the OneDrive-synced path — and no
  setting was found that changes where they land (`.claude/settings*.json` carries only a
  `Bash(git worktree *)` permission). So the directory that will need this cleanup is one the client
  chose, in the location that is worst for it.

- **Any musician — the assistant's shell does not share the Composer's `localhost`, and a reading taken
  there is not a reading of this machine.** Verified 2026-08-05, with four containers binding `0.0.0.0`
  and confirmed serving (`http=200` from inside WSL and from inside the `open-webui` container):

  ```text
  <lan-ip>:3000   OK 200
  127.0.0.1:3000      TCP connect = False
  localhost:3000      TCP connect = False      # ProxyEnable=0, and -NoProxy identical
  ```

  **The asymmetry is the proof, and it needs no guess about sandboxes.** A listener on `0.0.0.0:3000`
  accepts on `127.0.0.1` *and* on the LAN address, necessarily. If one succeeds while the other refuses
  at the TCP layer, the two requests are not leaving from the same network namespace — so `127.0.0.1` in
  that shell is its own loopback, where nothing listens, while `<lan-ip>` is a routed address that
  reaches the host.

  **What it cost, recorded because the cost is the reason this entry exists:** the result was reported to
  the Composer as a broken WSL mirrored-networking loopback; **two changes to his machine's networking
  were proposed to repair a fault that did not exist**, and a `wsl --shutdown` was run that killed the
  instance his own `WSL Boot on Login` task had launched — after which the resulting non-persistence was
  diagnosed as a defect in *his* setup. He caught it in one line: *"Me it's works again at
  localhost:XXXX, too soon check from your side?"*

  **The rule: never report a *shell-side* `localhost` result as a fact about this machine.** **Four**
  vantage points are valid, all confirmed the same day — and the Composer named the fourth, which the
  first draft of this entry wrongly said did not exist:

  1. `wsl -d Ubuntu -- curl …` — inside the distro.
  2. `docker exec <container> curl …` — inside the container.
  3. The LAN address (`<lan-ip>:<port>`) from the shell.
  4. **The Claude preview browser** — `mcp__Claude_Browser__navigate` to `http://localhost:<port>`
     **does share the Composer's loopback.** Verified 2026-08-05 with the stack held up: `localhost:3000`
     returned the Open WebUI page, `localhost:8080` returned SearXNG `2026.8.3+aa059419f`. It had been
     driving Open WebUI over `localhost` all the previous day.

  **The split is between instruments, not between the machine and the world.** The shell has its own
  loopback; the Browser pane has the Composer's. The first draft here generalised one instrument's limit
  into a capability the orchestra does not have — **and that error is the more expensive one**, because a
  session told "you cannot see this" proposes config changes instead of simply looking. Which is exactly
  what happened.

  **Third instance in two days of one shape**, which is why it is written as a rule rather than an
  anecdote: PowerShell consuming backticks and `$` before a command reached WSL, producing four false
  readings including a grep returning `0` for text that was present (2026-08-04); a WSL VM cycling
  between probes, read as downed bridges and a dead daemon (2026-08-05); and this. In every case the
  tool *worked* and returned a number — **the number was about the layer, not the subject.**

## Recommended (Composer to accept/decline)

- **User Researcher — test the three menu hypotheses on the next skill install**, one at a time (install one
  un-namespaced skill; change a trigger field; restart between each). Cheap, and it turns a known
  unknown into a fact. — status: **proposed**

- **QA Engineer — add the description-length check to the pre-push gate, not only `build_skill.py --check`.**
  It fires today only when the build script is run; a hand-edited description could still reach a
  remote at 1100 characters. — status: proposed

- **User Researcher — re-audit after any Claude Desktop update.** The 1024 limit and the archive shape are
  contract-level and unlikely to move; the menu behaviour is exactly the kind of thing a client update
  silently fixes, which would make the note above stale without anything failing. — status: proposed

- ~~**Reliability Engineer — find out whether the harness's worktree path is configurable.**~~ —
  **deprioritised 2026-08-04, and the reasoning it rested on was wrong.** The claim was that worktrees
  are the structural fix for several instances sharing one working tree. **They are not, in this
  setup.** Worktrees solve *simultaneous different branches*; **git refuses the same branch in two
  worktrees**, which is exactly the wall here, because all four instances commit to **`dev`** — five
  commits from four sessions inside twenty-five minutes on 2026-08-04, none of which conflicted.

  **Composer's decision, same day: keep everyone on `dev`.** The two hazards that actually bit are
  already closed by other means — `git add -A` sweeping another instance's uncommitted work (fixed by
  staging by path; ledger row), and `SESSION_LOG.md` clobbering (fixed by the append-only push gate,
  ADR-212, which caught two parallel writes that day). What remains is not repo corruption but a
  session reasoning from a `HEAD` it read minutes ago, which is behavioural: **re-derive `HEAD` before
  acting, never trust a remembered sha.**

  **Reversal condition, so this can be reopened on evidence rather than instinct:** the moment two
  instances genuinely need *different* branches at the same time, or a real conflict on `dev` costs
  work. Then the worktree question matters again — and with it the two costs measured here:
  `docs-site/node_modules` is not shared between worktrees, and the client creates new ones inside the
  synced folder with no setting found to change it.
