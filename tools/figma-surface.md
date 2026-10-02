---
type: Tool
title: "Tool: Figma — the product surface"
description: "What Figma's own product does when driven by eyes and hands rather than MCP: the agent's web fetch and Bash tool measured, its Bash boundaries probed, Skills as single-file uploads with update-in-place and a YAML gate, plugins the MCP cannot invoke but a browser can see, connectors, and Eyes First — on one tenant, partial, probe 4 pending"
status: draft
card: tools/figma.md
serves: [UX Designer, Design Engineer, User Researcher]
generated: { by: agent:ge-knowledgecenter, at: 2026-10-02T12:30:00+02:00 }
sources:
  - resource: https://help.figma.com/hc/en-us/articles/39582753756695-What-s-new-from-Config-2026
    title: "What's new from Config 2026"
  - resource: https://www.figma.com/blog/config-2026-recap/
    title: "Figma Config 2026 recap"
  - resource: https://mantlr.com/blog/free-figma-skills-2026
    title: "Free Figma Skills 2026"
  - resource: https://www.figma.com/blog/agent-custom-tools-context-skills/
    title: "Figma's design agent, now with custom tools and greater context"
  - resource: https://help.figma.com/hc/en-us/articles/40283639496599-Custom-skills-for-the-Figma-agent-and-Figma-Make
    title: "Custom skills for the Figma agent and Figma Make"
  - resource: https://help.figma.com/hc/en-us/articles/38147204302743-Create-and-use-custom-MCP-connectors-in-the-Figma-agent-and-Figma-Make
    title: "Create and use custom MCP connectors in the Figma agent and Figma Make"
  - resource: https://help.figma.com/hc/en-us/articles/39893099629975-Clear-chat-context-in-Figma-Make
    title: "Clear chat context in Figma Make"
  - resource: https://forum.figma.com/report-a-problem-6/figma-plugin-v2-1-30-7-of-9-skills-exceed-claude-code-s-skill-md-size-limit-and-are-dropped-at-load-time-53987
    title: "Figma Forum — skills exceed size limit, dropped at load time"
  - resource: https://developers.figma.com/docs/plugins/how-plugins-run/
    title: "How Plugins Run"
  - resource: https://www.figma.com/plugin-docs/manifest/
    title: "Plugin Manifest"
  - resource: https://www.figma.com/blog/how-we-built-the-figma-plugin-system/
    title: "How we built the Figma plugin system"
  - resource: https://gregrobison.medium.com/drawing-conclusions-the-rise-of-visual-reasoning-in-ai-with-multimodal-visualization-of-thought-042856fd50af
    title: "Drawing conclusions — MVoT"
  - resource: https://arxiv.org/abs/2506.23918
    title: "Thinking with Images (arXiv 2506.23918)"
  - resource: https://github.com/figma/mcp-server-guide/blob/main/skills/figma-use/SKILL.md
    title: "Figma's figma-use skill"
  - resource: https://hundredtabs.com/blog/figma-ai-design-agent-explained
    title: "Figma AI design agent explained"
  - resource: https://uxdesign.cc/agentic-ai-design-systems-figma-a-practical-guide-6ab0b681718d
    title: "Agentic AI, design systems and Figma — a practical guide"
---

# Tool: Figma — the product surface

Audited 2026-10-02 by User Researcher (**partial — single-tenant; probe on a second tenant withdrawn 2026-09-16 by the Composer's ruling; probe 4 still pending**; first audited 2026-08-03), hands-on against the Composer's live authenticated session; extended 2026-08-28 with the Knowledge Center reachability audit. **Not MCP-mediated**: this page covers what is driven by eyes and hands — the Skills UI, plugin usage, connectors, and the browser product itself.

Re-audit: 30 days — measured; inherits the Figma clock (four Config 2026 capabilities landed inside one audit interval)

**Chair:** UX Designer — the working method below is that chair's; [`yang/ux_designer.md`](yang/ux_designer.md) holds the lever index for playing it.
**Lineage:** shared with [`figma-mcp-remote.md`](figma-mcp-remote.md). Router: [`figma.md`](figma.md).
**Route identity:** no MCP at all. Everything here was established by driving the rendered UI, which is why *Eyes First, Code Second* lives on this page rather than on either MCP one. The Skills UI, plugins and connectors are properties of the **product**: they neither gain nor lose capability when an MCP server is wired or unwired, so this page's clock is independent.

> ⚠️ **Limits, stated before anything else.**
> 1. **Every measurement here was taken on one tenant.** A probe on a second tenant was **withdrawn, not deferred** (2026-09-16) — a permanent declared gap. Nothing here may be read as holding on another tenant.
> 2. **The audit is partial.** Probes 1 and 3 ran 2026-10-02; **probe 4 has not run** and its row must not be cited.
> 3. **Probe 1's "nothing read" is the agent's own self-report** — the tool trace was not inspected.

**Provenance.** Adopted 2026-10-02 from a page kept at the Workshop instance, rewritten for this library: the method and the measurements are kept; the estate's own identity, file names, build tooling and decision numbers are not.

## Critical — sourced (2026-07)

- **Figma Skills exist and are markdown files.** Config 2026 ships "Skills" — markdown instruction files that shape how Figma's agent reasons, the same paradigm as a `SKILL.md`. ~~No format conversion needed.~~ **Corrected 2026-07-16 — conversion IS required** (single file, size-constrained; see *Skills* below). Sources: *What's new from Config 2026*, *Free Figma Skills 2026*.
- **Figma's agent supports Connectors to external tools, GitHub included**, described as letting the agent *"reach the tools already in your stack… and then send updates back"*. Source: *Config 2026 recap*.
- **Figma AI sessions do not otherwise persist memory between sessions** — the reason an estate would point it at a published doc repository as external memory in the first place.

## Critical — the GitHub connector reaches public github.com only (2026-07-04, hands-on by the Composer)

- **Figma Make's GitHub connector reaches only `github.com`, the public SaaS. It cannot connect to a self-hosted or enterprise GitHub (GHES) install.** Checked directly, not recalled.
- **Consequence:** a design that keeps its external memory on an enterprise host and expects Figma to read it does not work. Keeping docs on such a host means accepting that Figma's connector will never read them: a known limitation, not an open question.
- **And a manual upload is a snapshot, not a subscription** (confirmed 2026-07-05): the skill copy uploaded to Figma drifted out of sync with its source repository, as predicted. Not a repository bug; the fix is procedural at each re-upload — confirm the source and the packaged copy share a commit, then update in place (see *Skills*). There is no automatic path while the connector cannot reach the source host.

## Critical — can the Figma agent read this library? (2026-08-28)

**Why it was asked.** A skill that replaces bundled reference files with fetches from `raw.githubusercontent.com` depends on the surface being able to fetch. **A surface that cannot fetch does not lose a copy of the principles; it loses the principles.** This library sits on public `github.com` — the one host the 2026-07-04 finding allows — and that lands it on the right side of a boundary measured for an unrelated purpose a month earlier.

**What was documented beforehand.** The agent *"can search the web and fetch content from URLs"* (a property of the agent, not of a skill); the GitHub connector reaches *"public or private GitHub repositories, issues, and pull requests"*. **A skill itself has no documented runtime network access**: it *"must be a single Markdown (`.md`) file"*, no `scripts/`, `references/` or `assets/`. **A skill is instructions; the fetching, if it happens, is the agent's.**

~~*The Figma agent has no shell, so `curl -s <url>` cannot execute there as written.*~~ **Wrong — it has one, and it ran.** That sentence was reasoned from a help page's silence, not measured.

### The probe ran, and both routes work (2026-08-28, run by the Composer)

A minimal single-file probe skill, run on the design surface. The agent's own report, produced in 3m01s:

| # | URL | Mechanism | Result |
|---|---|---|---|
| 1 | `…/GE-KnowledgeCenter/main/index.md` | **WebFetch** (built-in URL fetch) | **200 OK** — full file verbatim, frontmatter included |
| 2 | same URL | **Bash → `curl -sS`** | **HTTP 200** — full file verbatim, confirmed with `-w HTTP_STATUS:%{http_code}` |
| 3 | `…/protocols/orchestra-protocols.md` | WebFetch | 200 OK — target sentence extracted |
| 4 | same URL | Bash → `curl -sS` piped through `grep` | 200 OK — matching line returned |

*"Both routes work. No refusal, no redirect, no authentication challenge on either."*

**All four probe answers correct, and none exists in the probe file:** `okf_version` **0.2** · Chairs table **11 rows** (one [`the-twelve-chairs.md`](../chairs/the-twelve-chairs.md) plus ten `*_references.md`) · `presentation-checklist.md` Published **2026-08-27** · and *"The metric is time-to-verified-correct-result, not fewest steps."*, which reached the library that day and was in nothing the agent already held. **A correct fourth answer is only possible if the fetch happened.**

**The finding is the shell, and it was not the question asked.** A reader protocol's `curl -s <url>` executes there **verbatim**, so it is portable rather than needing a Figma dialect; a build-time fetch added to work around "no shell" was a workaround for a constraint inferred from silence. **It surfaced only because the probe was told to keep going after a success** (WebFetch answered first) **and told not to degrade gracefully** — the instrument that reports four attempts verbatim found what one tidy sentence could not.

**`ask_user_question` works there too** — the agent rendered a four-option multiple choice with a custom-response affordance. That falsified a standing curation note (*"AskUserQuestion does not exist in Figma"*); every presentation section dropped from a Figma edition on that ground was dropped on a false premise.

**Two capability claims about this surface were tested on 2026-08-28, and both were wrong** — *no shell* and *no AskUserQuestion*. Both came from a document that did not mention the capability. **A capability absent from documentation is not an absent capability** — and a curation built on such assumptions is a list of guesses whose tested members were false.

## Sweep 2 — probes 1 and 3 measured 2026-10-02 (drafted 2026-09-17); probe 4 still pending

⚠️ **The `Audited` line moved with probes 1 and 3** (ruled 2026-09-16: the date moves when a probe has run). **Probe 4 has not run.** How they ran: through the Composer's own logged-in browser, on a new blank Draft in his personal team. Every answer below is the Figma agent's own chat output, **on that one tenant**. Scope is stated before results so the results cannot widen it.

### Probe 1 · Can a *skill* direct the fetch, or only the agent choosing to?

**Method:** a task that does not mention the library, whose rule lives in the library. **Pass** = it fetches a library page unprompted. **Fail** = it fetches only when told.

> **RESULT 2026-10-02 — FAIL on this surface, with limits.** Task: *build a documentation page frame for a feature, with a header and three content blocks, grouped sensibly, the way the team's conventions require.* It built a frame and said it followed "team conventions". Asked where it read them: **built-in documentation-page conventions; no external URL, Figma page or project file read; no team library enabled.** It fetched no library page. **Limits:** (a) a blank Draft with no skill or connector attached — this measures the **bare agent**, so whether a *skill* can direct the fetch is **still unmeasured**; (b) **"nothing read" is the agent's self-report**; the tool trace was not inspected.

### Probe 3 · What are the Bash tool's actual boundaries?

**Method:** write a file, read it back in a *later* turn, ask for the working directory. No pass condition — the answer is the finding. (2026-08-28 proved outbound HTTP and nothing else.)

> **RESULT 2026-10-02.** Turn 1: create `probe3.txt` containing `MARKER-7`, report `pwd` → `/workspaces/<uuid>/code`. Turn 2, same chat: `cat` the file and `ls -la` → **`MARKER-7`**, a listing owned by user `foundry`, writable, a 9-byte file matching. **So: the Bash tool exists, writes, and the file persists across turns of one chat; the working directory is `/workspaces/<uuid>/code`.** **Not measured:** persistence across separate chats or sessions, and write access outside that directory (the one attempt was refused by the probing session's own harness, so it was dropped, not run).

### Probe 4 · Can a probe of this surface be agent-run at all?

**Method:** open the Claude Code Chrome extension's session picker and observe whether a `--print` stream child of the remote-control wrapper is offered as a pairable session. **Why it matters:** it decides whether any future audit of a browser-hosted surface can be run by an agent or must always cost the Composer his hands. Measured 2026-09-16: the extension is installed (`1.0.93_0`), its native host runs, **and the probing session exposes no browser tool and appears in no `ListAgents` row.** Pairing is initiated from the browser; there is no agent-side offer.

> **PENDING — no result. Do not cite this row.**

**The re-date rule.** This audit is partial by decision, and **a fresh date that reads like a full pass is the specific failure this scaffold exists to prevent** — hence the header's qualifier.

## Skills — single file, size-constrained, editable in place (2026-07-16 → 2026-08-03)

- **Upload accepts exactly one Markdown file** (prompt box → Skills → Add skill → Upload a file) — no subfolders. A multi-file skill (one `SKILL.md` plus a `references/` tree, ~130K) does not upload as-is: it must be **re-chunked**, not just reformatted. Source: *Custom skills…*
- **Size risk, analogous rather than confirmed for this path:** a closely related Figma + Claude Code skill-loading path **silently truncates `SKILL.md` bodies over ~8KB** to their description. Treated as a strong signal, hence a **7.5K cap per chunk**, split at `## ` boundaries with a paragraph fallback. Source: *Figma Forum…*
- **The 7.5K cap holds in practice (2026-07-16):** 23 chunks uploaded with no warning, the largest at 7.5K. **And the silent-truncation gap was closed by behaviour, not by the absent warning:** asked a natural question whose answer lived only in a chunk's *body* (never its description), the agent answered with the specific rules — only possible if the full chunk loaded.
- **Update-in-place works. It always did.** ~~"No update-in-place"~~ was a **false negative**, retracted 2026-07-17: an earlier pass clicked Edit, typed, saw no change, and concluded — without checking for a **Save** button or confirming edit mode was entered. Re-tested on a throwaway skill (created, edited, verified, deleted, no residue): `···` → **Edit** opens a real form — Skill name / Description / Instructions — with **Save**; the change persisted and `Last updated` moved. Re-uploading under a duplicate name **is** rejected. **Re-sync procedure:** `···` → Edit → replace Instructions → Save. A diff of the source between commits names which chunks need it.
- **Root cause, named:** a negative result trusted without verifying the test engaged the mechanism. Create, Read and Delete had each been confirmed separately; Update was the one never properly tested, and the cheapest all along.
- **`Export` produces a real `.md` download** (confirmed by the Composer 2026-07-16) — a browser automation saw nothing because an OS file-save is invisible to it by construction. **Export is a genuine read-back / drift-check path** for what is live in Figma. `Publish` changes sharing scope and stays the Composer's click.
- **Account-scoped, but not self-assembling.** Uploaded skills are reachable from any new chat. Each chunk triggers off its own description; continuation chunks with generic descriptions have no topical hook. **Open a new chat by naming the system or a trigger once.** Not proven to self-assemble in a conversation that never references it.
- **No per-chat dismiss.** **Disable skill** (Skills → Manage skills) is **account-wide**, both the design-file agent and Make. **Clear chat context** is **Figma Make–only**, wipes the conversation, and is not skill-scoped. **Start a new chat for unrelated work.** Figma stated no AI credits are consumed during the beta; usage-based billing is flagged as eventual. Sources: *Custom skills…*, *Clear chat context…*

### The Skills UI driven end to end (2026-08-03, Claude in Chrome)

**Account state was not what the source repository predicted:** 37 skills present, all matching a later build than the page recorded; five sampled fingerprints matched exactly. **A fingerprint stamped on line 1 of Instructions is readable without entering edit mode**, which makes the account diffable against a repository without touching anything.

**Automates cleanly:** navigation (`+` → Skills → Manage skills, by accessible name); selection, `···`, Edit, Delete, Cancel, Save (real buttons in the a11y tree); Description (a plain `<textarea>`, persists on Save); **Delete**, whose confirmation is the best guard on the surface — *"Are you sure you want to delete "<name>"? This can't be undone."* **It names the skill: click Delete only on an exact match, else Cancel.**

**Does NOT automate, after four mechanisms:** the **Instructions** field is a `contenteditable` and refused native value setter + `input` event, `execCommand('insertText')`, the same after **Edit instructions**, and real keyboard events. All four left the placeholder and `Add`/`Save` disabled. Instruction bodies are **manual, or via Upload a file** — a native file picker, so the Composer's to drive.

**Edit form shape:** one `<input>` (name), one `<textarea>` (description), one `contenteditable` (instructions). Guard on the name input's value before writing.

**Two traps:**
- **Do not mix scripted clicks with UI clicks in one session.** A JS sweep advanced the list's internal selection; a later human-style click updated only the detail pane. They disagreed about which skill was selected — caught one click short of deleting the wrong one. Trust the confirmation text, not selection state.
- **The tab throttles hard.** `setInterval` work drops to ~1 item per 10–20 s when the tab is not frontmost, and `Page.captureScreenshot` times out. Batch in the page, poll rarely, never infer failure from a slow loop.

**Upload a file — front matter must be valid YAML.** An unparseable front matter rejects the whole file with *"File structure error. We couldn't process this file due to an invalid structure."* — naming neither field nor reason. The first cause: an unquoted description containing `Covers: ` (colon-space makes the scalar ambiguous); fixed by emitting a double-quoted scalar, and the upload was accepted. **Validate front matter with a real YAML parser (`yaml.safe_load`) before offering a file** — the failure looks like Figma's problem, not the file's. On the batch in hand it caught 26 of 27 files.

**And the human beat the automation.** A guarded scripted delete of 19 parts returned **0 deleted** — defeated by the list's virtualisation, which renders only on-screen rows. The Composer did all 19 deletes **and** 19 re-uploads by hand, faster than the script failed. **On this surface, Delete + Upload by hand is the fastest full re-sync** and fixes body and description together; scripted editing is worth it only for a field upload cannot set, and there is none. **Do not reach for automation here first.**

### A live behavioural test of a chunked skill (2026-08-03)

The 2026-07-16 test proved a body *loads*; this asked whether the orchestra *behaves* from it on a surface with no repository, no subagents and no widgets.

**Roll-call, unprompted.** After three core-part invocations the agent printed its load state — core 3 of 3, assembled, each part's fingerprint — and listed ten installed part-groups as *"not loaded this turn: no task yet to route to them."* Lazy loading, working where the budget is tightest.

**Stimulus**, chosen against a section the edition **did** ship (the deletion protocol, [`core-principles.md`](../principles/core-principles.md)) and phrased as a situation so a description could not answer it: *"I want to delete a page in this file that looks stale. What do you need from me first?"* **Response (18 s):**

1. The exact persona attribution line for the Agile Facilitator — emoji, name, subtitle. Body content, not description.
2. *"Before deleting anything, I need to know which page you mean."* — refused an ambiguous target.
3. **It went and looked** — listed all 12 pages with layer counts.
4. *"Several pages have zero children (empty)."* — the fact that makes "stale" checkable.
5. *"Which one looks stale **to you** — and do you want me to **inspect its contents first**…?"* — judgement returned, and an offer to name what is lost first.

**Verdict: pass — and the discriminating evidence is item 1**, not the caution; any careful assistant asks *"which page?"*, but the attribution's exact form is not inferable from a description. **Against what it had:** it did not name a version-history checkpoint before a destructive canvas operation, but that rule was not in the uploaded edition — the gap is the edition's scope, not the agent's behaviour.

## Plugins across three surfaces (2026-07-16, corrected 2026-08-08)

**What a Figma plugin is** (sourced): code in a sandboxed JS engine (QuickJS compiled to WASM), with a main-thread part holding the `figma` global (the Plugin API) and an optional iframe part with browser APIs, talking by message passing; every plugin needs a `manifest.json`. Sources: *How Plugins Run*, *Plugin Manifest*, *How we built the Figma plugin system*.

**The Tools panel is the account's own plugin library**, not file-scoped installs. Four entries were self-authored — a library-impact browser, a changelog generator, a team indexer, and a session plugin with its own tabbed UI. The **Create** menu offers **Build with agents · Plugin · Shader effect · Shader fill**; *Build with agents* is the conversational path that yields a real, persistent, one-click plugin.

⚠️ **Incident, logged plainly:** **clicking a tool's name in the right-panel Tools list launches it immediately — no confirmation, no Run button.** It opened a real plugin panel before being closed; no content was read, but the tool *did* execute. **Open a Tools entry only via the search browser** (left sidebar → Tools), which shows a detail popover with an explicit Run button.

| Surface | Can it *create* a persistent plugin? | Can it *execute* Plugin-API code? | What actually happens |
|---|---|---|---|
| **Figma native agent** | **Yes** — Build with agents yields a plugin in the account's Tools library, reusable one-click by anyone with file access, until deleted | Yes, via that plugin or any existing one | The only one of the three that produces a *standing, named, reusable tool* |
| **Claude Code + Figma MCP** (`use_figma`) | **No** — no MCP tool persists a script as a plugin | **Yes** — each `use_figma` call *is* a plugin execution: same sandboxed `figma` global, same all-or-nothing semantics, headless and one-shot | Same execution model, but throwaway |
| **Claude Code + Browser pane** | No | **No** — cannot write or run Plugin-API JS | Clicks the UI Figma renders: opens a popover, presses Run, watches. It automates a *human* using a plugin |

**Using a real Community plugin** (Iconify, read-only icon picker, chosen as low-risk, with the Composer's go-ahead):
- **Native agent / a human:** uses its real panel as designed.
- **Figma MCP: cannot get there at all — structural.** Inspection of the full tool set showed **no tool invokes an existing plugin, custom or Community, by name or ID**; `use_figma` only runs freshly written JS. Provable by inspection alone. (Re-checked against later inventories on [`figma-mcp-remote.md`](figma-mcp-remote.md): new families such as Weave do not lift it.)
- **Browser pane:** launched it via Run; the real UI rendered (screenshot). `read_page` returned one element — **Close** — and `get_page_text` echoed the sidebar behind it. **Both text instruments are blind inside a third-party plugin's iframe**, while Figma's own native modals are fully accessible.

~~*Neither Claude Code surface can use a Community plugin end-to-end.*~~ **Half wrong, corrected by the Composer 2026-08-08:** *"MCP cannot reach Figma plugin: right. You cannot reach them: wrong — the same way you reach by eyes openwebui to testing model."* The browser conclusion was drawn from **one instrument's** silence: the accessibility tree is empty inside the iframe, **the pane is not** — its other instrument is eyes, which had already driven a whole application that way ([`claude-desktop.md`](claude-desktop.md)). Calling the screenshot path "fragile" also inverted [`figma-method.md`](figma-method.md)'s *Eyes First*: an accessibility tree is coordinates in text. **Corrected line: the plugin ecosystem's API surface is out of reach from Claude Code; its rendered interface is not.** Anything depending on a specific plugin's unique, non-reproducible logic stays out of reach by either path. Iconify was closed with no canvas mutation and the Tools library unchanged.

**Practical consequence:** automation meant to run more than once, by more than one person, or without Claude Code open belongs in the native agent's Tools library (*Build with agents*); `use_figma` is for one-off, reasoned work this session.

## UI walkthrough (2026-07-16)

Driven via the Browser pane against the Composer's live session — the product UI, not the MCP server.

- **The prompt-box `+` menu is the single entry point:** Add images and files · Attach Figma file · Web search · Libraries · Connectors · Skills. Skills → Use skills · Add skill · Manage skills.
- **Manage skills is a real file browser** — tabs *Created by you · [the team's name] · Your teams*, search; a selected skill shows Description, Created by, Last updated and a foldable **Instructions** viewer. The live set matched the source build one-for-one by name.
- `···` offers **Edit · Export · Publish · Delete**. (This pass's typed-into-Edit test is the false negative retracted above.)
- **No corruption:** every action was reversible, and the closing state was re-read clean — look before, look after, applied to the product UI.

## Connectors (2026-08-03, shown by the Composer)

`+` → **Connectors**: three tabs — **Featured · [the organisation's own tab] · Created by you**. Featured carried **Atlassian** — *"Retrieve and interact with Jira, Compass, and Confluence data in real-time."* — alongside Amplitude, Asana and Askable.

**Why it mattered:** *"can Figma see a Jira tracker?"* had been flagged as checkable rather than assumable. **It can see the connector**, so the assumed split (Claude Code and Cowork gain a capability, the Figma surface does not) may not hold for a tracker reached that way.

**Created by you** implies connectors are authorable. If one can point at an arbitrary endpoint, it is a second candidate bridge for routing Figma-agent requests elsewhere — beside the plugin path (a plugin's iframe half has network access).

**Verified:** the connector exists, is offered on this account, and is described as real-time Jira/Compass/Confluence access. **Not verified:** whether `Connect` completes on an enterprise tenant; what it exposes (read? write? which projects?); whether the agent *reasons over* connector data or merely fetches it; whether *Created by you* permits an arbitrary endpoint or only an organisation-published one. **The panel proves availability, not capability.**

## Horizon (2026-07-16): code as material

From the *Config 2026 recap*:
- **Code layers** — any design layer becomes a live, editable code layer, with **GitHub import** of production code onto the canvas; bidirectional. Announced to ship July 2026.
- **Code as a design material** beside images and vectors; motion exports as inspectable CSS/JSON/React.
- **Why it matters:** the canvas becomes a surface the UX Designer, Design Engineer and Software Engineer share. Eyes First applies unchanged — code layers are canvas nodes.
- **Watch:** whether code layers' GitHub import reaches a GHES install or only `github.com` — the same question the 2026-07-04 finding settled for the Make connector. Re-test when they ship.

## Working method: Eyes First, Code Second (2026-07-16)

**Never mutate a canvas you haven't just looked at; never trust a mutation you haven't looked at afterward.** Perceive → act → verify: inspect before acting, one logical step per operation, screenshot again in the same breath as the mutation (structure check, visual check, targeted fix). Spatial judgment — overlap, clipping, alignment, balance — happens on the **image**, never on coordinates in text.

- Full method and evidence: [`figma-method.md`](figma-method.md).
- Why it is a rule: text-only spatial reasoning collapses as complexity grows (~94% → 39% in the MVoT experiments); *Thinking with Images* (arXiv 2506.23918) names the paradigm; Figma's own `figma-use` skill and its native design agent prescribe the same loop independently. The uxdesign.cc guide (read in full 2026-07-16) adds what the eyes read: semantic tokens, exact Figma↔code name/prop parity, every state a variant, component descriptions, auto layout and named layers, Code Connect — *"the agent assembles, it does not wonder."*

## Recommended (Composer to accept/decline)

- **Any musician** — probe whether a *skill-equipped* agent fetches the library unprompted (probe 1 measured only the bare agent), before any Figma-specific edition is rebuilt. Until then, an edition that evicted principles to fetches has *lost* them rather than delegated them. — status: proposed
- ~~Test whether the GitHub connector, pointed at an enterprise host, re-fetches each session.~~ Answered: it cannot connect there at all.
