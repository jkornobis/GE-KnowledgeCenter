---
type: Tool
title: "Tool: Amazon Quick"
description: "AWS's chat-and-agents workspace, read from four vantage points and none of them this library's own hands: a web tenant driven through a browser extension, a custom agent carrying an orchestra's floor, the desktop app reporting on itself, and 1,139 pages of the vendor's guide in which the model that answers is never named"
status: draft
card: none
serves: [User Researcher, Product Owner]
generated: { by: agent:ge-knowledgecenter, at: 2026-10-06T15:45:00+02:00 }
sources:
  - resource: https://github.com/jkornobis/GE-KnowledgeCenter/issues/67
    title: "Tool audit evidence: Amazon Quick — the three hands-on readings this page is built from"
  - resource: https://docs.aws.amazon.com/quick/latest/userguide/what-is.html
    title: "What is Amazon Quick? — the user guide, read whole as markdown"
  - resource: https://docs.aws.amazon.com/quick/latest/userguide/doc-history.html
    title: "Document history — the dated surface behind the re-audit clock"
  - resource: https://aws.amazon.com/about-aws/whats-new/2025/10/amazon-quick-suite-agentic-ai-powered-workspace/
    title: "Introducing Amazon Quick Suite — the launch announcement"
  - resource: https://docs.aws.amazon.com/quick/latest/userguide/using-quick-chat.html
    title: "Chat in Amazon Quick — scopes, citations, uploads, retention"
  - resource: https://docs.aws.amazon.com/quick/latest/userguide/automate-custom-agents.html
    title: "Custom agents in Quick Automate — the only page that carries a model identifier"
  - resource: https://docs.aws.amazon.com/quick/latest/userguide/desktop-security.html
    title: "Desktop: security, privacy and architecture"
  - resource: https://docs.aws.amazon.com/quick/latest/userguide/system-tools-desktop.html
    title: "Desktop: system tools and their default permissions"
  - resource: https://docs.aws.amazon.com/quick/latest/userguide/skills-desktop.html
    title: "Desktop: skills"
  - resource: https://docs.aws.amazon.com/quick/latest/userguide/usage-limits-desktop.html
    title: "Desktop: usage limits"
  - resource: https://docs.aws.amazon.com/quick/latest/userguide/supported-integrations.html
    title: "Supported integrations"
  - resource: https://docs.aws.amazon.com/quick/latest/userguide/regions.html
    title: "Regions and cross-Region inference"
  - resource: https://docs.aws.amazon.com/quick/latest/userguide/guardrails.html
    title: "AI guardrails in Amazon Quick"
  - resource: https://aws.amazon.com/quick/pricing/
    title: "Amazon Quick pricing"
  - resource: https://blog.serverworks.co.jp/amazon-quick-suite-renamed-to-amazon-quick
    title: "A dated witness of the rename (2026-02-12)"
---

# Tool: Amazon Quick

Audited 2026-10-06 by User Researcher. Hosted web workspace and desktop app, sold by AWS to an
organisation and signed into through that organisation's single sign-on. **This library has no
account and none of its hands touched the product**: the page is assembled from three hands-on
readings reported in `#67` on the public tracker and from the vendor's guide, read here.

Re-audit: 30 days — measured, from the guide's own document history: 47 dated changes between 2025-10-09 and 2026-09-05, median gap 3.5 days, longest 35 (n=46). It counts documentation changes, the dated surface this audit read; AWS's announcement feed was not counted.

**Chair:** none requires it — `Serves:` only, the User Researcher and Product Owner seats at most (`tools/chair-levers.md`).
**Lineage:** the User Researcher's row in `tools/lineage.md` — web search (1998), then *LLM + retrieval*. Quick is that pairing sold as a workspace, **and only once something is connected to retrieve from.** The product's own descent is a business-intelligence service whose document history opens on 2016-11-15, relaunched on 2025-10-09 as *Amazon Quick Suite* and shortened to *Amazon Quick* by 2026-02-12.

## Four readings, four vantage points

| | Vantage | Who read | What it can carry |
|---|---|---|---|
| **W** | the web workspace on one tenant, driven through a browser extension | a working session elsewhere, relayed by `#67` | seen once, on one account |
| **A** | a custom chat agent holding an orchestra's floor as its instructions, three chats | the same session | the behaviour of one agent, minutes old |
| **D** | the desktop app, nineteen minutes | **the product itself, reporting its own tool calls** | self-attestation: each line can be checked, none is independent |
| **G** | the vendor's guide, launch post and price list, fetched 2026-10-06 | this library | what AWS says. It says nothing about that tenant |

Every line below carries one of those four letters. **A line marked G is the vendor describing its
product, and is never promoted to a fact about a tenant**: the section after the next one is why.

## Critical

### What answers is not published

- **G — the guide never names the model behind the chat.** All 1,139 pages of it were fetched as
  markdown and searched. One model identifier appears, an Anthropic one, **as the example to type
  when bringing your own Bedrock model into a Quick Automate custom agent**. One built-in tool
  names its engine: image generation, Amazon Nova Canvas. `llama`, `mistral`, `openai`, `gpt-`,
  `gemini` and `titan` return zero pages. *Claude* otherwise appears only as an outside coding
  tool the desktop app can hand work to or import settings from.
- **So "independent of the model an orchestra already runs on" can be neither claimed nor
  refuted.** The one identifier the guide prints shows that model family is reachable on the
  platform, which makes independence the assumption that needs proof, not the default.
- **G — there are three vocabularies for the choice, and W saw a fourth.** The desktop composer
  offers *Fast, Balanced, Smart* plus a thinking effort, and its troubleshooting page calls that
  choosing "a higher model". Quick Automate offers *Fast, Pro, Custom*. The web tenant showed a
  selector reading *Intelligent* (**W**), a label no page of the guide uses.
- **A, D — neither test obtained it.** A did not ask. In D the agent "didn't state" its model, and
  had it done so, that would have been the instrument describing itself.

### The guide and a live tenant are two readings

- **W against G:** *Intelligent* is on the screen and on no page. And the guide names the same
  things differently on its own two surfaces: *My stuff* and *Private Mode* in the web chapters,
  *Library* and *Incognito* in the desktop one.
- **What it costs:** the guide can say what to look for. It cannot say what a given tenant has,
  because an administrator switches web search, agent creation and blocked phrases per account,
  and setting up a connector takes the higher of the two organisation plans.

### The web workspace

| Seen on the tenant (W) | What the guide says of it (G) |
|---|---|
| Opens in an ordinary browser tab on the organisation's sign-on; no credential typed; the greeting names the user | Console addresses sit under the old product's domain, one per AWS Region |
| An agent selector holding a default organisation agent | A system agent exists on every account, owned by the administrator, with file upload, model knowledge, default guardrails and web search **if the administrator enabled it** |
| A data-scope selector reading *All data* | Three scopes: all data and apps, general knowledge (the model alone), specific data and apps |
| A private mode toggle | Private Mode: not saved to history, not learned from, absent from Recents |
| Shortcuts for Search, Document, Presentation, Visual | Generated artifacts download as text, CSV, Word, Excel, PowerPoint, PDF |
| Typing through the extension works. **Return does not send**: seen in two sessions and both boxes, the send button had to be pressed | Silent: no page of the chat chapter mentions the key |
| The page renders slowly with a chat panel open; screenshots timed out twice | Silent |

- **W — "a bare model" is the user's description, not a finding.** No data and no connector were
  present, and no question was sent to check. **G:** the default agent also searches the web where
  an administrator has turned that on, and whether it is on in that tenant is unknown.

### An orchestra's floor as a custom agent

- **A — it holds a floor.** Created from the floor text on the *Chat agents* page, it opened with
  the Composer Key question and nothing else, then named all twelve chairs correctly in one line.
  It added an emoji per chair unprompted and greeted the user by account name.
- **A — asked something its instructions cannot answer, it invented nothing, and it did not use
  the floor's own wording either.** It returned a generic *unable to help*. **G:** requests pass a
  vendor safety screen, and the model is instructed not to expose internal system information, so
  the refusal has two possible authors and the test did not separate them.
- **G — two documented vehicles, one tested.** A web custom agent takes persona instructions plus
  reference documents of up to 100,000 extracted characters. **The desktop app has skills: a
  folder with a `SKILL.md` at its root, found by description and read in full on activation, with
  bundled reference files, created from a file, a zip or a folder, up to 6 MB.** That is the shape
  an orchestra already ships in, and nobody has loaded one there.

### The desktop app

| The product's own report (D) | What the guide says of it (G) |
|---|---|
| Lists and reads every file in an allowed folder, 84 of them, and writes there | Operating-system sandboxing; only granted folders, revocable |
| Three reads outside the allowed folders refused | **And system temporary directories are readable whatever the folder permissions** |
| Cannot start programs: the user's shell scripts do not run. The logic of four read-only scripts was redone in Python, with the user's own figures | Code execution is a Python sandbox that "blocks common coding commands"; such work is meant to go to a connected coding agent |
| Its own browser on the device: a separate copy of the profile, not signed in. Two tools stopped at sign-in | Browser automation has a default mode on a separate instance and a use-your-own-browser mode |
| Reaching the user's signed-in tabs needs a setting, off by default | The mode exists; its default is not stated |
| One connector enabled on the account, for cloud file storage | 63 integrations listed, 62 with actions and 6 as knowledge bases, Jira Cloud, Figma, SharePoint Online and MCP among them |

- **G — "runs on the desktop" does not mean "stays on the desktop".** The guide states that Quick
  runs in the cloud: conversations, memory, the knowledge graph and the index of whatever was made
  searchable are kept in the account. **So a file the agent reads from an allowed folder is
  processed off the machine**, and the guide does not say how long that content is kept beyond the
  conversation that holds it.
- **G — every system tool ships enabled at Always Allow.** Restricting one is the user's act.
- **G — a local MCP server is started by the app from a command and arguments.** D's "no process
  launch" is a statement about one session's tool list, not about the app.

### Said by the guide and tested by nobody

- Answers carry numbered citations and a source list; web content is cited.
- Customer data is not used to train or improve the underlying models.
- A prompt may be processed in another AWS Region inside the same geography.
- Retention is given twice and the figures differ: 90 days for conversations on the chat page; 365
  days unpinned and 750 pinned on the desktop limits page.
- A chat takes 20 files and 665,000 parsed characters. A space takes dashboards, topics, knowledge
  bases, actions and uploads.
- Price list: Professional 20 USD and Enterprise 40 USD per user per month, plus 250 USD per
  account per month; usage is metered in agent hours. Which plan the tested tenant holds is
  unknown.

## Context7

| Field | Value |
|---|---|
| Library ID | `/websites/aws_amazon_quicksuite` — resolved 2026-10-06 through Context7's public search endpoint rather than its MCP server, **not recalled** |
| Snippets · reputation · benchmark | 6,175 · trust 9.9 · 59.5 |

**The entry is a mirror 316 days old.** It was last updated 2025-11-24 and still carries the launch
name; the guide it copies has changed on 44 dated occasions since. For this product, fetch the
guide's own markdown: every page answers at its address with the extension changed to `.md`.

## Known issues — what breaks, from the record rather than the vendor

**There is no defect record to read.** The product is a closed hosted service with no public issue
tracker. AWS's own support forum was not read.

**Stack Overflow, read through the Stack Exchange API on 2026-10-06, is silent on the workspace.**
The only tag is the old product's, `amazon-quicksight`, 718 questions. Its six highest-voted date
from 2017 to 2021 and are all data sources and dashboard building: Athena, DynamoDB, date controls,
running sums. **Two questions have been asked since the relaunch, one on SQL and one on a
calculated field, the later on 2025-12-17**, and a search for the launch name returns none. No tag
exists for the new name.

**Friction class: none on record, which is a finding and not a clean bill.** A year after relaunch,
whoever uses the chat, the agents or the desktop app is not asking in public. A chair adopting it
budgets for discovering its friction first-hand, and the two interface findings above are already
that: Return does not send, and the page slows under automation.

## The six questions

Asked as `method/judging-a-tool.md` defines them. **The evidence in `#67` answered Posture and Why
in a different sense**, where it is hosted and why one would use it; both points are kept, under
Licence and under the leap.

| Question | What was gathered | State |
|---|---|---|
| **Lineage verdict** | With a source attached it shows what it retrieved: citations, and for data the SQL it ran (G). With none attached, what answers is a model nobody has named | not reached |
| **Posture** | Implements MCP and OpenAPI as a client for its connectors (G). Agents, spaces and flows have no standard to implement. Desktop skills take the folder-and-`SKILL.md` shape (G) | gathered from the guide only |
| **Health** | Stability: 47 dated documentation changes in eleven months. Community: no public tracker, a silent Stack Overflow, a stale Context7 mirror. Its predecessor continues inside it as one feature, by the guide's own account | gathered; the Product Owner weighs |
| **Grip** | Driven through a browser extension by page text and screenshots; the box takes typing, the send button works, Return does not (W, A). The one accessibility-tree read the field is defined by was not taken | not determined |
| **Why** | Carries it in places: when to move files from a chat to a space, which response mode costs more agent hours. Silent on the one why an orchestra needs first, what is answering | reference, with operating advice |
| **Licence** | The organisation's, under its own AI usage policy, linked in the workspace footer (W). Terms and that policy were not read | permission is the organisation's to state |

**The leap it offers:** a second model route billed to the organisation rather than to a personal
plan, and on the desktop a way to recount local records without drawing on one. Useful for work
whose whole text fits in the prompt, or after a space, a connector or a folder is attached.

## Limits — where this instrument stops

- **Tool limit, on the audit itself: the model cannot be established from outside.** The vendor
  does not publish it and the product's answer about itself would be self-report.
- **Tool limit: no process launch for the agent on the desktop**, reported by D and matched by G.
- **Tool limit: Return does not send under extension control.** Cause not investigated.
- **Not a limit, an untested mechanism:** the web workspace having "no reach" to a tracker or a
  design tool was a property of one unconnected account. Connectors for both are documented.
- **No trap test has been run**, meaning a question the attached data cannot answer, asked to see
  whether the product says so or fills the gap. A's unknowable question tested an agent's
  instructions, once, and is not that test.
- **Reasoning limit, ours:** three of the four readings reached this library as text. Nothing here
  was seen by the hands that wrote the page.

## Recommended (Composer to accept/decline)

- **Any chair** — reading, recounting and drafting only. No verdict, and nothing that feeds a
  work-tracker entry, until a trap test has been run, and then only with the user's agreement on
  each card. Carried unchanged from `#67` — status: proposed
- **User Researcher** — the audit brief, ordered so the first answers change the most. One session
  on the tenant closes it: run a trap test against an attached space; send by keyboard, by hand,
  to learn whether Return is the extension's failure or the product's; read whether web search is
  on for the default agent; read which plan the account holds; load one skill folder on the
  desktop and ask for a sentence that exists only in a bundled reference file; read what the
  own-browser mode exposes; try a read in a system temporary directory — status: proposed
- **Product Owner** — whether an unnamed model is acceptable for any work at all is a weighing, not
  a finding. This page gathers and stops — status: proposed
