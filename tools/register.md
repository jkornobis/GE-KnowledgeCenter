---
type: Tool
title: "The lever register — what exists, ranked by the lineage"
description: "The lever register: what leaps exist and which seats they serve, judged by six questions — lineage, posture, health, grip, why, licence — plus the seams no tool crosses yet"
status: draft
serves: [User Researcher, Product Owner, Software Architect]
generated: { by: human:jkornobis, at: 2026-08-22T23:51:16+02:00 }
---

# The lever register — what exists, ranked by the lineage

Products grouped under **levers**. Written by a User Researcher-led **Tool Discovery** run — see `protocols/tool-discovery.md` for the protocol.

**This file names chairs, never musicians.** A chair is a seat and its canon; a musician is whoever occupies it and whatever toolset they carry (ADR-199). The register describes what a leap *is* and which seats it touches — never who carries it. Who carries what lives in `roster.md`, which cites this file one way and is never cited back.

**Two chair fields, and they answer different questions (ADR-220).**

- **`Serves:`** — the chairs that *use* the lever. A routing note.
- **`Spans:`** — the two chairs whose **seam** the lever bridges, plus the **multiplier** that forces a format, plus whether a **spanning layer** exists. Not routing: this is the predictive field.

The distinction comes from `project/chair-gap-leap-thesis.md`, and it is split because the two halves have different strength — **the multiplier predicts that a seam gets a format and where; the chair gap predicts what that format must carry.** A gap crossed by a single pair is absorbed by a person; it takes N×M to force an artifact, and the standard solution is a **narrow waist** converting O(M×N) integrations into O(M+N). So a seam recorded here with a real multiplier and `Spanning layer: none` is a gap the orchestra has named before the market built it.

*Scale is an input, not an output:* the altitude for every `Spans:` line in this file is **the orchestra's twelve chairs**. Read at a different altitude the seams move, and a claim that holds at every altitude is not falsifiable at any.

## The method — six questions, and they are the method rather than columns on it

**Settled 2026-08-08 with the Composer (ADR-263), and his framing is the correction that matters: *"all this metrics are the method — and it's more larger than OSS."*** These arrived through a conversation about open source; **they are not an open-source rubric.** They evaluate any candidate — proprietary, first-party, in-harness, a page on the web — and the licence is one of the six rather than the gate the others hang off.

| Question | Field | Answers |
|---|---|---|
| Is it worth holding? | **Lineage verdict** | true material, or a picture of it (`method/web-lineage.md`) |
| Does it implement the standard, or replace it? | **Posture** | implements · extends · replaces · no standard |
| Will it still be here? | **Health** | stability · community |
| What does it cost to hold? | **Grip** | ref-addressable · eyes-only · mixed · **blocked** · n/a |
| **Does its documentation carry the *why*?** | **Why** | carries · reference only · absent |
| **May we use it, in this case?** | **Licence** | permission, not quality |

**The Composer's division of the instruments, 2026-08-08 — *"benchmark is the why this tool, context7 is where and how"*:**

| Question | Artifact | Instrument class |
|---|---|---|
| **Why this tool?** | **this register** — the six questions | benchmark and project-health services: `deps.dev`, OpenSSF Scorecard, `alternativeto.net` |
| **Where and how?** | **`agents/tools/yang/<musician>.md`** — the lever index | **Context7** — current, version-pinned documentation |

**Which is why Context7 could never do this file's job and was never meant to.** Its own page draws the same line: *"software library documentation, not general web research."* It answers **Posture** for a candidate already named, and then it belongs to the other artifact entirely — **the fingering, not the choice.**

**The lineage stays primary** — it is the only one that asks whether the tool is worth having at all, and a candidate that manipulates the real material still outranks a more featureful one that manipulates a picture of it. **Feature count remains noise.** The other five decide what a chosen tool *costs*, *risks*, *teaches* and *permits* — questions that were previously answered by instinct or not asked.

**And one flag sits on the lever rather than the candidate:** `Spanning layer … won by leap / arrival` — because an incumbent that won by arriving has **arbitrary gaps**, and *"the standard does not cover it"* is then a fact about history, not about what is possible.

Definitions and worked examples for each are at the bottom of this file, beside the schema.

### Who answers them — User Researcher gathers, the Product Owner weighs, the Software Architect validates

**The Composer's routing, 2026-08-08: *"it's Product Owner work to help on those, and Software Architect to validate it."*** It repairs a contradiction the method had been carrying since the day it was written.

**User Researcher's standing posture is *findings + sources, never a recommendation*, and `register.md` states outright that *"User Researcher's ceiling is the register."*** But three of the six questions are **judgments** — is this health adequate for the risk, is this licence permissible for *this* case, does this serve the objective. **User Researcher cannot answer them without breaking its own discipline, and no chair had been authorised to.** The method had judgment fields with nobody allowed to judge.

| Chair | Owns | Boundary |
|---|---|---|
| **User Researcher** 🔍 | *gathers* — Posture, Grip, licence text, and the **evidence** behind Health (release cadence, contributor counts, who employs the maintainers), with sources and `Seen` dates | records facts and marks `UNVERIFIED`; **never ranks, never recommends** |
| **Product Owner** 🧭 | *weighs* — is the health adequate for the risk we are taking, is the licence permissible in this case, does the leap serve the actual objective or is it momentum | produces the recommendation the Composer decides on; does not gather its own facts |
| **Software Architect** 📐 | *validates* — was the method run rather than narrated: every field filled **or explicitly empty**, the lineage verdict argued, the cadence set, the decision recorded as an ADR | a gate on process, not on taste; it can send a run back, it cannot pick the tool |

**The Composer decides. Unchanged** — and now what reaches him is a gathered set of facts, one weighed recommendation, and a validated process, rather than a table someone assembled alone.

**Licence is a required field.** Free and open-source is the default. A paid candidate carries its efficiency-leap justification in the same cell, or it does not enter the register.

**Swept every 30 days**, or on `Tool Discovery: sweep`. Superseded candidates are dated and kept, never deleted — a *best at the time* register with no history cannot say *at the time*.

---

## Sweep 1 — 2026-08-05

First sweep. Four levers, sixteen candidates. Web sources fetched this session; the registry arm failed and is recorded below rather than worked around. This is a **first pass, not a complete map**: it covers the levers the estate's live work already touches, and says nothing about the levers it does not.

---

## Lever — reads a running interface

Leap: the agent sees the artifact as **rendered**, not as source — the reading surface `agents/tools/README.md` names as the axis that actually separates deployment surfaces.
Lineage verdict: **splits the field, and the split is the whole point.** A candidate that reads the accessibility tree or the live DOM manipulates the true material; one that reads screenshots manipulates a picture of it. Era 2's rule, third consumer.
Serves: QA Engineer · Accessibility Specialist · Design Engineer · UX Designer · Reliability Engineer
Spans: **UX Designer ↔ QA Engineer** — what was designed ↔ what actually renders. Multiplier: N deployment surfaces × M artifacts to verify. Spanning layer: **the accessibility tree**, de facto — one tree per browser, read by screen readers, axe and Playwright alike. O(M+N), and nobody standardised it *as* a narrow waist; it became one. **Won by: arrival** (2026-08-08) — stated in this very line before the flag existed, and its gaps are correspondingly arbitrary: **the tree is empty inside a third-party iframe by accident of how it grew, not by design**, and reading that emptiness as a capability limit cost three weeks of the plugin ecosystem (ADR-259). **Hunt here.**

| Candidate | Mechanism | Licence | The leap it offers | Source | Seen |
|---|---|---|---|---|---|
| **Playwright MCP** | MCP connector | OSS (Microsoft) | feeds **accessibility-tree snapshots** to the agent; cross-browser — Chromium, Firefox, WebKit; scriptable and CI-able | [stevekinney.com](https://stevekinney.com/writing/driving-vs-debugging-the-browser) · [test-lab.ai](https://www.test-lab.ai/blog/chrome-mcp-vs-playwright-mcp) | 2026-08-05 |
| **Chrome DevTools MCP** | MCP connector | OSS (Google) | live console, network inspection, performance traces, Core Web Vitals — *debugging* a browser rather than driving one; Chromium-only, leans on screenshots + CDP | [vibebrowser.app](https://www.vibebrowser.app/blog/chrome-devtools-mcp-vs-playwright-mcp) · [stevekinney.com](https://stevekinney.com/writing/driving-vs-debugging-the-browser) | 2026-08-05 |
| **Browser pane** | tool (native) | free, in-harness | accessibility tree, console, network, viewport resize, in-session — no install, no auth | this session's own tool documentation | 2026-08-05 |
| **Claude in Chrome** | MCP connector | free, in-harness | ~~the same reading surface **against already-authenticated sessions** — the one thing the Browser pane cannot reach~~ — **corrected 2026-08-08: too strong, and disproved by observation.** The Browser pane spent an entire session inside the Composer's live, authenticated Figma. The pane has **its own persistent session store**, separate from Chrome but not empty. Chrome's actual leap is narrower and still real: **sessions that already exist in his browser, with no second sign-in** — not *authenticated sessions* as a class | this session's own tool documentation; the correction from a live session | 2026-08-05 · corrected 2026-08-08 |
| Browserbase MCP | MCP connector | paid — justification not established | managed cloud browser rather than a local one | [webfuse.com](https://www.webfuse.com/blog/the-top-5-best-mcp-servers-for-ai-agent-browser-automation) | 2026-08-05 `UNVERIFIED` |

**Reading of the field, not a recommendation:** the sources agree the two OSS candidates are *complementary rather than competing* — driving versus debugging. Both already have a free in-harness analogue here, so the gap this lever names for this estate is narrower than the market: **cross-browser** (Firefox, WebKit) and **CI-able, unattended** runs, which is the deferred reading surface `README.md` argues for.

---

## Lever — audits accessibility mechanically

Leap: WCAG conformance becomes a **computed artifact** instead of a human pass — a deferred reading surface for the one domain where the estate has twelve documented cases of text gates missing what computation caught.
Lineage verdict: **true material** — rendered-DOM scanning and runtime checks, not markup inspection. It reads what the browser built, which is what a screen reader reads.
Serves: Accessibility Specialist · QA Engineer · Design Engineer
Spans: **Accessibility Specialist ↔ Software Engineer** — conformance intent ↔ shipped code. Multiplier: N rule engines × M platforms × K CI systems. Spanning layer: **ACT Rules**, which standardises *what an automated check actually checks* rather than how it runs. A retrodiction: this seam already has its narrow waist, which is consistent with the lever earning no chair requirement (ADR-218). **Won by: leap** (2026-08-08) — ACT Rules was **purpose-built to be this crossing**, not adopted into the role, so its omissions are principled rather than historical. **Watch, do not hunt:** a gap here is a considered exclusion and needs an argument, not a search. Consistent with the published ~30–40% automated-coverage ceiling being a **stated boundary** rather than an oversight.

| Candidate | Mechanism | Licence | The leap it offers | Source | Seen |
|---|---|---|---|---|---|
| **axe-core** | tool (library) | OSS (Deque) | the engine underneath most of the field; embeddable in any test run | [deque.com/axe/axe-core](https://www.deque.com/axe/axe-core/) | 2026-08-05 |
| **axe MCP Server** | MCP connector | **paid** — Axe DevTools for Web customers. Justification: the mature rule library plus **axe Assistant remediation guidance returned to the agent**, which axe-core alone does not provide | spins up a browser, navigates, runs full analysis against WCAG 2.1/2.2 AA; same engine as the axe DevTools extension | [deque.com/blog](https://www.deque.com/blog/a-closer-look-at-axe-mcp-server/) · [docs.deque.com](https://docs.deque.com/devtools-server/4.0.0/en/axe-mcp-server/) | 2026-08-05 |

**Licence note, per the Composer's rule:** the OSS engine and the paid connector are the *same rules*. What the paid tier adds is remediation guidance, not detection. A leap in *fixing*, not in *finding* — which is the distinction the free-first default exists to make visible.

**Chair Review 2026-08-05 — no promotion (ADR-218).** Already in the Accessibility Specialist's canon (`brain/accessibilityspecialist_references.md`, ACT Rules + automated tooling) *with its published ~30–40% coverage ceiling stated*. An instrument that catches a minority is what **scopes** manual work, not what a chair breaks without. Do not re-litigate on a later sweep without new evidence about that ceiling.

---

## Lever — generates editable design layers from intent

Leap: a prompt produces **real frames, components, auto-layout and variables** — selectable and modifiable as if another designer had made them — rather than an image of a design.
Lineage verdict: **true material, and it is era 6's test passed outright.** *"WYSIWYG works exactly to the degree the visual surface manipulates the true material."* Generating editable layers bound to the library's own components and variables is the strongest form of that this register has seen. The lineage's warning still applies to whatever it emits — era 1's tag soup arrived from a tool that also produced "real" artifacts.
Serves: UX Designer · Design Engineer · Content Designer
Spans: **Content Designer ↔ UX Designer** — intent expressed in language ↔ intent expressed in layers. Multiplier: N prompt surfaces × M design tools. Spanning layer: **none.** A prompt is not a portable artifact and no format carries "design intent" between tools, so every generator re-invents the crossing. **Won by: no incumbent** (2026-08-08) — the flag has nothing to describe, and *that is the finding rather than a blank*: with no layer in place there is nothing whose gaps could be arbitrary, and equally nothing to displace. Highest-multiplier seam in this register with no narrow waist — but see ADR-219's bound: this is a *writing* seam, and the orchestra's write guard (note 47ii) is still unwritten.

| Candidate | Mechanism | Licence | The leap it offers | Source | Seen |
|---|---|---|---|---|---|
| **Figma AI Agent** (in-canvas) | product agent | seat-gated (Figma) | launched **20 May 2026**, beta; prompts from any layer/group/frame/page, **edits in place using the library's own components, variables and tokens** | [chatforest.com](https://chatforest.com/reviews/figma-ai-design-agent-canvas-code-to-canvas-2026/) · [aidatainsider.com](https://aidatainsider.com/news/figma-unveils-ai-agents-and-code-native-design-tools-at-config-2026/) | 2026-08-05 |
| **Figma code layers** | product feature | seat-gated (Figma) | clone a repository onto the canvas, generate directions, **convert flows into editable design layers, sync changes back to code** — the two-way path the industrialization mission is about | [qubika.com](https://qubika.com/blog/figma-config-2026-announcements-for-designers/) | 2026-08-05 |
| **Figma Motion** | product feature | seat-gated (Figma) | animations and transitions by prompt or by manual timeline edit | [qubika.com](https://qubika.com/blog/figma-config-2026-announcements-for-designers/) | 2026-08-05 |
| Figma Make | product feature | seat-gated (Figma) | named in the same Config 2026 announcement set; scope not established here | [chulbuldesign.com](https://www.chulbuldesign.com/blog/figma-updates-2026) | 2026-08-05 `UNVERIFIED` |

**This is the lever that set the 30-day clock.** All four entries postdate the estate's existing `agents/tools/figma.md` audit. A 90-day cadence would have carried a picture of this surface that was three announcements out of date.

**Chair Review 2026-08-05 — no promotion (ADR-218).** Nothing in the room fails for want of it; absence is not a gap. And it is the only **writing** lever in this register, while roadmap note 47(ii) records that the guard for the orchestra's write capability — *what it may click unasked* — **is not written yet**. Putting generation into a seat's canon ahead of its guard inverts the order that note asks for. Revisit once 47(ii) exists.

---

## Lever — moves tokens between design and code

Leap: a design decision survives the crossing in **both directions**, as data, with git as the source of truth rather than a handoff document.
Lineage verdict: **true material** — tokens are the decision itself, not a rendering of it. Era 5's lesson made mechanical: design is rules under constraints, and this lever is where the rules are stored.
Serves: Design Engineer · UX Designer · Software Engineer · Software Architect
Spans: **UX Designer ↔ Software Engineer**, with the Design Engineer as the seam-holder rather than a party to it. Multiplier: N design tools × M platforms. Spanning layer: **DTCG** — a Draft Community Group Report, not a Recommendation (ADR-219). The founding case for this whole field: the crossing exists, is typed and aliasable, and is still provisional. **Won by: arrival** (2026-08-08) — adopted before it was finished, which is what *"still provisional"* has been saying all along. **Its gaps are what got typed first, not what was judged unnecessary**: no motion composite, and no type carrying accessibility intent — both already recorded below as seams. **Hunt here**, and note that the two open seams in this file both sit under this one incumbent.

| Candidate | Mechanism | Licence | The leap it offers | Source | Seen |
|---|---|---|---|---|---|
| **Figma Variables** | product feature | included (Figma) | native token storage since Config 2023; the standard place design decisions live | [atomize.tools](https://atomize.tools/blog/figma-design-tokens-guide/) | 2026-08-05 |
| **Style Dictionary** | tool (build) | OSS | transforms tokens into development-ready code; **Tokens Studio's team joined the project in Aug 2023**, so the two are no longer competing stacks | [docs.tokens.studio](https://docs.tokens.studio/transform-tokens/style-dictionary) | 2026-08-05 |
| **Tokens Studio** | plugin (Figma) | freemium | imports from and **two-way syncs with Figma Variables**, with a stronger export pipeline than Variables alone | [docs.tokens.studio](https://docs.tokens.studio/fundamentals/design-tokens/) · [figma.com/community](https://www.figma.com/community/plugin/843461159747178978/tokens-studio-for-figma) | 2026-08-05 |
| **Code Connect** | product feature | seat-gated (Figma) | maps Figma components to code components **1:1** — pillar #1 of the industrialization mission, already in this session's toolset | [inhaq.com](https://inhaq.com/blog/figma-to-code-design-softwareengineer-workflow) · this session's own tool documentation | 2026-08-05 |

**The published shape of the whole pipeline**, for orientation: Dev Mode → tokens as JSON via Tokens Studio → Style Dictionary transform → Code Connect for the component mapping, with git as single source of truth and CI validating the crossing.

**Chair Review 2026-08-05 — promoted for the Design Engineer alone (ADR-218).** That chair *is* the design↔code seam, so removing token movement leaves no seam to hold; the break test passes on the chair's definition. UX Designer, Software Engineer and Software Architect keep `Serves:` — they hold pieces of the pipeline without breaking without it.

---

## Sweep 2 — what it is obliged to do, not just when (due 2026-09-04, ADR-269)

The 30-day clock says *when*. These are carried forward so the next sweep is not a fresh survey that quietly drops what sweep 1 opened.

1. **Re-check every `won by: arrival` verdict against the sixth mechanism.** Two levers are flagged `arrival` — `reads-a-running-interface` and `moves-tokens-between-design-and-code` — and an arrival-winner's gaps are **historical, not principled** (ADR-263). Specifically: **a `Spanning layer: none` verdict is unsafe wherever a web UI already crosses the seam**, because MCP is a narrow waist someone had to build and the browser was already one. Sweep 1 predates that mechanism entirely, so every `Spans:` line was judged without it.
2. **Fill `Grip` for the seven unvisited candidates** — one `read_page` each, and the value is not inferable.
3. **Fill `Health`** for anything `deps.dev` or OpenSSF Scorecard can reach, and record the rest as unreachable rather than unknown — see the seam below.
4. **Re-check `generates-editable-design-layers`**, whose four candidates all postdate `figma.md`'s audit and set the 30-day clock in the first place.
5. **Do not re-test `openbenchmarking.org`** — `Grip: blocked`, banned 2026-08-08, and bypassing bot detection is prohibited, so there is no version of that test that ends differently.

## Seams with no lever yet

A `Spans:` line can only be written under a lever, which means the method's most valuable output had nowhere to live: **a seam with a real multiplier and no lever at all.** This section is that place (ADR-221). It is the register's only *predictive* surface — everything above records what was found; this records where to look.

**Three states, the Composer's vocabulary** (`project/chair-gap-leap-thesis.md`): a matching lever **exists** · is **conceptualized** but not standardised · is **unconceptualized**. An entry states one, with evidence, and is re-checked on the same 30-day sweep clock.

**Altitude: the twelve chairs.** Same declaration as every `Spans:` line above, and for the same reason — a seam that holds at every altitude is falsifiable at none.

**Entry bar, deliberately high.** A seam enters only with a **named multiplier** and **evidence for its state**. A pair of chairs that merely talk to each other is not a seam; it takes N×M to force a format, and a gap without a multiplier is absorbed by a person.

---

### Seam — accessibility intent as data
**Accessibility Specialist ↔ Design Engineer** — the Accessibility Specialist holds *why* a contrast pair, a focus order, a target size was chosen; the Design Engineer holds the token that ships it. **The reason does not cross.** A downstream auditor re-derives intent from values, every time, on every platform.
**Multiplier: N design tools × M platforms × K audit tools** — the highest on this board, because the audit dimension is a third axis the other seams do not have.
**State: conceptualized, not standardised.** Contrast pairs carrying ratios and compliance flags exist as tool-level practice — [a11y-color-tokens](https://github.com/5t3ph/a11y-color-tokens), Style Dictionary with contrast libraries, the [FINOS A11y Theme Builder](https://finos.github.io/a11y-theme-builder/designers/how-to-work-with-tokens/) — and **no DTCG-level type carries them.** Verified 2026-08-05.
**Prediction, falsifiable:** a standardised carrier for accessibility intent appears in this seam, or the method is wrong about where to look. Next check: sweep 2.

### Seam — tool health as data, for things that are not packages
**User Researcher ↔ Product Owner**, and it is this method judging itself (ADR-269). User Researcher **gathers** health evidence; the Product Owner **weighs** whether it is adequate for the risk (ADR-263). **For a package the evidence exists and is machine-readable** — `deps.dev` (8 methods, 7 ecosystems), OpenSSF Scorecard (18 checks, 0–10, a public dataset over 1M projects). **For a product it does not exist at all.** There is no query that answers *is Figma's variables API being maintained*, *is this plugin abandoned*, *will this seat-gated feature survive its next pricing round*.
**Multiplier: N products × M estates** — every Composer entering the ensemble (ROADMAP note 50) re-derives the same product-health judgement from changelogs, status pages and vibes, because there is nothing to cite.
**State: unconceptualized — and it is the first entry ever to hold that value.** The register has said since its creation that the state *"cannot be cited — you cannot source the absence of a concept"* and that finding one is *"the method's hardest test and the only place it could produce something genuinely new rather than merely early."* This is claimed carefully and is falsifiable in the cheapest possible way: **name one queryable, machine-readable health signal for a non-package product and this entry drops to `conceptualized`.** Adjacent things exist and are not it — status pages report *now*, not maintenance; app-store ratings measure satisfaction; `alternativeto.net` measures popularity, which this file already rules out as an incumbency signal rather than a health one.
**Why it bites here specifically:** the sixth mechanism made **every web tool a candidate** (ADR-260), so the product half of the field went from a minority to the majority in one day — and the instrument for judging it did not move.
**Prediction, falsifiable:** if the method is right about where to look, a health signal for products appears in this seam before one appears anywhere the packages already cover. Next check: sweep 2.

### Seam — copy as data
**Content Designer ↔ Software Engineer**, with the Design Engineer as seam-holder. Copy authored in one vocabulary must ship in code, across locales, with plurals and gender intact.
**Multiplier: N authoring surfaces × M locales.**
**State: exists.** ICU MessageFormat plus TMS/CAT catalogues (`brain/contentdesigner_references.md`). **A retrodiction, and it is here as a control** — the method has to get the already-solved seams right before its open predictions are worth anything.

### Seam — motion as data
**UX Designer ↔ Software Engineer**, Design Engineer as seam-holder (motion craft is in that chair's root knowledge).
**Multiplier: N design tools × M platforms.**
**State: exists, partial.** DTCG types `duration` and `cubicBezier` cross; there is **no motion composite**, so a transition survives the crossing as parts and is reassembled by hand at the far end.

### Seam — line ↔ position
**UX Designer ↔ Software Engineer**, Design Engineer as seam-holder. The two disciplines have different atoms and each renders the other's primary verb worst. **A developer's atom is the line** — diff, blame, review and merge are all `+`/`-` over ordered text, and git has no first-class move: a re-order is delete-plus-add. **A designer's atom is the position**, and re-arranging *is* the authoring act. So the operation design lives on is the one version control sees least.
**Multiplier: N authoring surfaces × M consumers** — code, review, and agents that must read both.
**State: conceptualized, contested — and it is the first entry with two live attempts from opposite banks.** [JSON Canvas](https://jsoncanvas.org/) (Obsidian, 2024-03-11) writes **position into a line-diffable schema**: `nodes` with `x`, `y`, `width`, `height`, and `edges` with `fromNode`/`toNode`/`fromSide`/`toSide`, deliberately extensible. Figma **Code Layers** (Config, 2026-06-24) brings **the line onto the canvas**, with codebase import and multi-codebase comparison — *"code is material for design"*. **DTCG covers neither.**
**Why it took a discipline with no arrangement problem to write the schema:** note-takers came from text and had to write the convention down to have a canvas at all. Designers never had to — the tool renders arrangement and the eye reads it instantly, so the convention stayed tacit. **Tacit knowledge does not get a schema until something that cannot see arrives.**
**Prediction, falsifiable — and the first draft of it was wrong in a way worth keeping.** The draft predicted the crossing would be made from the notes side rather than the design side; Config 2026 contested that within the same session it was written. **The prediction is therefore not about which bank moves, but about which atom the history is kept in: the crossing succeeds on the side that can express a *move* as a first-class change rather than as delete-plus-add.** Whatever the atom is, it is the only thing review, blame and an ADR can ever see.
**Third corroboration, from the shape of the training data (2026-09-01).** A Hugging Face sweep by tool rather than by chair: **commits** carry `bigcode/commitpackft` at 58,340 downloads and `microsoft/codereviewer` at 142 likes — a large, well-regarded corpus, and what it contains is *commit messages and code review*, the **why** layer. **Figma** carries agent traces and redesign sets in the low thousands. **Jira** carries essentially nothing, and the top hit for the name is a false positive with 37,352 downloads and one like. **The ecosystem learned from what was already text.** Position and structured records behind auth produced no corpus, which is the same asymmetry one layer further out — not a claim about what is learnable, a measurement of what was available to learn from. Next check: sweep 2.

---

~~**No entry currently holds `unconceptualized`, and that is not an oversight.**~~ **One does since 2026-08-08** — *tool health as data, for things that are not packages* (ADR-269), and the claim is made with its own falsification test attached: name one queryable, machine-readable health signal for a non-package product and it drops to `conceptualized`. The original paragraph stands as written, because the reasoning it gives is exactly why the new entry had to arrive with a disproof rather than a citation: By definition the state cannot be cited — you cannot source the absence of a concept. Finding one is the method's hardest test and the only place it could produce something genuinely new rather than merely early. Recorded as a standing gap in the method itself.

## Finding — a documented lever that is not available here

`project/claude-extension-model.md` §3 records, from schemas read on 2026-08-04, that MCP discovery *"reaches beyond what is installed"* via `search_mcp_registry`, `list_connectors` and `suggest_connectors`. Tested live in this sweep:

```text
search_mcp_registry ["accessibility","wcag","axe","audit"]          → {"results":[]}
search_mcp_registry ["browser","playwright","e2e","testing"]        → {"results":[]}
search_mcp_registry ["design tokens","design system","storybook"]   → {"results":[]}
search_mcp_registry ["observability","monitoring","incident"]       → {"results":[]}
search_mcp_registry ["jira","notion","linear","slack"]              → {"results":[]}
list_connectors []  → {"connectors":[],"note":"No installed connectors found — the card did not render."}
```

Empty for terms guaranteed to match, and `list_connectors` reports none installed in a session that demonstrably has Figma, Atlassian, Apify and context7 connectors loaded. **The schemas exist; the surface returns nothing.** Most likely cause: this session is non-interactive, and the harness flagged several MCP servers as needing an authorisation flow that cannot run here.

Consequence for the method, recorded rather than assumed away: **the registry arm of a sweep is not usable on this surface today.** Sweeps run from the web arm — Anthropic, GitHub, vendor docs — until a registry call returns non-empty. The claim in §3 was a documentation read and said so; this is the first test of it.

---

## Sweep 1 candidates, scored where evidence already exists (2026-08-08, ADR-269)

The four fields added on 2026-08-08 arrived after sweep 1, so its sixteen candidates carried none. **Filled here only where the evidence is already in this file or was verified this session — never from recall.** Three of the four columns need no new research: `Grip` is **`n/a` by definition** for anything *called* rather than *driven*; `Posture` is stated in several candidates' own leap descriptions; `Why` was measured directly for two.

| Candidate | Posture | Why | Grip | Health |
|---|---|---|---|---|
| **axe-core** | **implements** — *"the engine underneath most of the field"*, running ACT Rules it does not define | — | n/a | — |
| **axe MCP** | **extends** — *"the same rules … a leap in fixing, not in finding"* | **carries** — remediation guidance returned to the agent **is** the why (ADR-268) | n/a | — |
| **Style Dictionary** | **implements** — transforms tokens it does not define | — | n/a | — |
| **Tokens Studio** | **extends** — two-way sync **on top of** Figma Variables, not instead of | — | n/a | — |
| **Figma Variables** | **no standard** — native storage; DTCG is provisional and it predates it | **reference only** — verified 2026-08-08 against `/figma/plugin-typings` | n/a | — |
| **Code Connect** | **no standard** — a first-party mapping format with no cross-vendor equivalent | **reference only** — the CLI documents flags, not when to reach for `--force` | n/a | — |
| **Browser pane** | **implements** — reads the accessibility tree, the de-facto layer | — | **n/a** — it *is* the instrument, not a candidate to grip | in-harness |
| **Claude in Chrome** | **implements** — same tree, different session store | — | n/a | in-harness |
| Playwright MCP · Chrome DevTools MCP · Browserbase · Figma AI Agent · Figma code layers · Figma Motion · Figma Make | — | — | — | — |

**The blank rows are the finding, not an omission.** Seven candidates have never been opened by anyone here, and this register's rule is that a value determined *"by one `read_page`"* cannot be supplied by inference. **They stay empty until sweep 2 visits them.**

**And the `Health` column is empty for every OSS candidate on purpose**, which note 10 explains: the instruments that would fill it — `deps.dev`, OpenSSF Scorecard — cover **package ecosystems**, and half this table is products.

**One row worth reading twice.** `Figma Variables` and `Code Connect` are **`no standard`**, and ADR-263 flags that value as a warning rather than a fault: *a genuine first mover has nothing independent to check it against.* Both sit under the lever the Design Engineer **breaks** without. The chair's required capability rests on two formats with no external oracle, and **DTCG — the thing that would be that oracle — is `won by: arrival` and still a Draft.** That is not an argument against them; it is the reason the seams below exist.

## Schema

```markdown
## Lever — [what becomes possible, as a verb phrase]
Leap: [one sentence.]
Lineage verdict: [true material / a picture of it] — [one clause of why]
Serves: [Chair] · [Chair]
Spans: **[Chair] ↔ [Chair]** — [what each side holds that must cross]. Multiplier: N [x] × M [y]. Spanning layer: [name + status, or **none**] — **won by [leap / arrival / unknown]**.

| Candidate | Mechanism | Posture | Why | Grip | Licence | The leap it offers | Source | Seen |
|---|---|---|---|---|---|---|---|---|
| [name] | skill/tool/MCP/sub-agent/plugin/web UI (URL) | implements \| extends \| replaces \| no standard | carries \| reference only \| absent | ref-addressable \| eyes-only \| mixed \| blocked \| n/a | free \| OSS \| paid — [justification] | [one line] | [url] | YYYY-MM-DD |
```

### `Why` — does the documentation carry the reason, or only the reference? (added 2026-08-08, ADR-268)

**The Composer's criterion, stated as a ranking rule:** *"Best documented API or MCP are in our criteria the one that carry the WHY."* And his proof, which is this session's own worked example: *"API it's only a part of documentation, and well documented API rarely carry the why itself. Else you do arrow in figma without thinking."*

**The Figma Plugin API documents `strokeCap: 'ARROW_LINES'` perfectly** — typed, complete, first-party — and an agent holding it hand-rolls an SVG anyway. **So "well documented" and "carries the why" are different properties, and only the second one changes what gets built.** Worse, a reference can point *at* the wrong answer while being entirely correct: `VectorPath` declares `data: string // SVG path data`, so the improvised path is a documented first-class input.

| Value | Meaning | Test |
|---|---|---|
| **carries** | states *when and why* to reach for a thing, and names the plausible wrong alternative — worked examples, anti-patterns, remediation guidance | can you find, in its own docs, a sentence of the form *"don't do X, do Y, because…"*? |
| **reference only** | complete and correct on *what exists* and *how to call it*, silent on *why* | the Figma Plugin API; the official Figma skills, which the Composer read as *"only … Endpoints on how act in figma"* |
| **absent** | neither reason nor reliable reference | |

**It is a cost prediction, which is what makes it a register field rather than an opinion.** A `reference only` tool is perfectly usable — but **the estate must supply every why itself**, one lever-index row per intent, each bought by getting it wrong once (`agents/tools/yang/README.md`). A `carries` tool imports its whys for free. That difference is measurable in Yang rows, not in taste.

**And it explains a verdict this register reached before it had the vocabulary.** The **paid** axe MCP cleared the licence bar on the grounds that it adds *"remediation guidance, not detection — a leap in fixing, not in finding."* **Remediation guidance is the why.** The paid tier was justified, in retrospect, precisely by this field — which is the strongest evidence the criterion is real rather than invented tonight.

**One boundary: a pipe inherits, it does not carry.** Context7 serves whatever a library ships, so its `Why` value belongs to the source, never to Context7 itself. Judging the pipe by its payload would score the same server differently on every query.

### `Posture` — does it implement the standard, or replace it? (added 2026-08-08, ADR-263)

**The Composer's rule, and the causal half is the part that predicts:** *"Open source tools are always more reliable because they don't pretend inventing the wheel."*

**Not reinventing the wheel is a lineage property, not a licence one** — and it is this register's ranking question said a second way. A tool that replaces the standard with its own reinterpretation is manipulating **a picture of** the material by construction. So `Posture` is the first filter, ahead of licence:

| Value | Meaning | Worked example from this register |
|---|---|---|
| **implements** | carries the standard faithfully | `axe-core` → ACT Rules; `Style Dictionary` → token transforms it does not define |
| **extends** | adds on top without displacing | **axe MCP** — *"the same rules … a leap in fixing, not in finding"* |
| **replaces** | substitutes its own model for the standard's | the risk case; a `replaces` candidate must justify itself against the standard it discards |
| **no standard** | nothing exists for it to relate to | a genuine first mover — **not a fault, but there is nothing independent to check it against**, which is the oracle rule at procurement level (`brain/brain_principles.md`) |

**Why the licence default survives but stops being the test.** The register's rule — *free and open source is the default; a paid candidate carries its efficiency-leap justification or it does not enter* — is unchanged, but its **reason** is now stated properly, and it is the Composer's third mechanism rather than the licence itself:

> **An open-source tool ships its own oracle.** The test suite, the issue history, the reproductions are public and participatory — *"OSS testing is a discipline"*, and the Composer has practised it directly. A proprietary tool asks you to trust its self-report; an OSS tool hands you the artifact that checks it. **That is `brain/brain_principles.md`'s oracle rule applied to procurement**, and it is a stronger predictor than the licence line it is usually mistaken for.

**And the licence answers a different question than this register had been asking of it.** The Composer, correcting it in one line: *"it's give you the right to use in right case."* **A licence is a permission field, not a quality field** — may we use this, here, in this case: internally, in a client deliverable, redistributed, under copyleft. That gate is real in an enterprise context and it is binary. It says nothing about whether the tool is any good, which is why the three questions below carry that load instead.

**Which is also why "always" is not carried into the rule.** Two paid candidates and their outcomes are already in this file and **neither was decided by the licence**: the axe MCP is paid, `extends`, and **cleared the bar**; Anima is paid and was **refused** for putting a wall in front of basic capability (ADR-262).

### `Health` — stability and community (added 2026-08-08, ADR-263)

**The Composer's selection criteria, in his words: *"by lever, stability, community supporting it."*** The first is the ranking question this register already asks. The other two are the answer to OSS's real failure mode — **abandonment, single-maintainer risk, no obligation to answer** — and his point is that this is a *criterion to check*, not a reason to distrust the licence.

| Sub-field | What it asks | Cheaply checkable from |
|---|---|---|
| **stability** | is the contract holding — release cadence, breaking-change history, maturity | releases page, changelog, semver discipline |
| **community** | is anyone behind it — contributor count, corporate backing, issue-response life | contributors graph, issue tracker, who employs the maintainers |

**Worked example already in this file:** *"Tokens Studio's team joined the project in Aug 2023, so the two are no longer competing stacks."* That is a **community** fact, and it is the single most load-bearing thing recorded about Style Dictionary — a merger of rivals is a stronger health signal than any release number.

**Inspectable and durable: yes, strongly. Supported: not guaranteed by a licence — which is what `Health` is for.**

**The whole model, so no field starts doing another's job:**

| Field | Question |
|---|---|
| Lineage verdict | is it worth holding — true material, or a picture of it |
| `Posture` | does it implement the standard, or replace it |
| `Health` | will it still be here — stability, community |
| `Grip` | what does it cost to hold — practised, or sight-read forever |
| `Licence` | **may we use it, in this case** |

### `Spanning layer … won by` — leap or arrival? (added 2026-08-08, ADR-263)

**The Composer:** *"Sometimes a tool wins only because is first, not by the leap it's doing."* The register ranks by the lineage question and models feature count as noise — **incumbency was a third force it did not model at all**, while already recording two instances of it as description:

> *"Spanning layer: **the accessibility tree**, de facto … nobody standardised it **as** a narrow waist; **it became one**."*
> *"**DTCG** — a Draft Community Group Report, not a Recommendation … the crossing exists, is typed and aliasable, and is **still provisional**."*

**This is not a fourth ranking axis. It is a flag, and its payoff is not what most would expect.**

A layer that won **by arrival** is not necessarily easy to displace — the accessibility tree is in every browser and every screen reader, and nothing is replacing it. **What the flag actually predicts is that its gaps are arbitrary.** A standard designed for a job has principled omissions; a standard that *became* the crossing has whatever gaps history left. So:

> **Never infer *"it cannot be done"* from *"the incumbent standard does not cover it."*** With `won by: arrival`, absence is historical, not principled.

**Both of this register's own arrival-winners demonstrate it.** The accessibility tree is empty inside a third-party iframe **by accident of how it grew, not by design** — and reading that emptiness as a capability limit cost the orchestra the plugin ecosystem for three weeks (ADR-259). DTCG has no motion composite and no accessibility-intent type because of **what got typed first**, which is exactly where `Seams with no lever yet` is already pointing.

**Where Discovery hunts, stated as a rule:** `won by: leap` → watch, do not hunt; out-leaping a genuine leap is rare and expensive. **`won by: arrival` → hunt here** — the position may be immovable while the *gaps* are open, and a gap left by history is the cheapest thing this method can find.

### `Grip` — how the tool can be held (added 2026-08-08, ADR-262)

**Only meaningful for `web UI (URL)` candidates; `n/a` for everything else** — an MCP tool or a skill is called, not driven, so there is nothing to grip. Determined by **one `read_page`** before adopting anything, which makes it the cheapest field in the table.

| Value | Meaning | Cost curve |
|---|---|---|
| **ref-addressable** | the interface exposes named elements in the accessibility tree; act by `ref`, stable across layout | one read, then **free** on every repetition |
| **eyes-only** | nothing in the tree; the only reader is a screenshot | **a screenshot per repetition, forever** — never gets cheaper with familiarity |
| **mixed** | ref-addressable chrome around an opaque region — the common case | practise the frame, sight-read the middle |
| **blocked** | the site **refuses automated access by design** — bot-challenge wall, agent-hostile headers | **no grip at all**; not a candidate, whatever its leap |

**`blocked` is a hard stop, not a difficulty rating, and for two independent reasons.** The tool cannot be held — and **bypassing bot detection is prohibited to this orchestra outright**, so a challenge wall is not an obstacle to route around, it is the end of the evaluation. A `blocked` candidate is recorded with its evidence and dropped.

**Why it earns a column rather than a footnote.** It is the difference between a tool that can be **practised** and one that must be **sight-read** every time (`agents/tools/yang/README.md`): a `ref` is a fingering the hands can learn; a screenshot is looking at the strings before every note. Figma tested **mixed** the day this was added — its own chrome fully ref-addressable, a third-party plugin's iframe returning a single `Close` button.

**Sweep 1's sixteen candidates carry no `Grip` value, deliberately.** The field is defined as *determined by one `read_page`*, and filling it from recall for tools nobody has opened would be the exact defect this register's `UNVERIFIED` convention exists to prevent. Sweep 2 measures them; until then the column is genuinely empty rather than plausibly full.

**And it is a ranking input, not just a label.** Two candidates offering the same leap are not equivalent if one is eyes-only: that one carries a permanent per-use cost and a fragility the other does not. **It does not override the lineage question** — a ref-addressable surface manipulating *a picture of* the material still ranks below an eyes-only one manipulating the true material. Grip decides what a tool costs to hold; the lineage decides whether it is worth holding.

`Mechanism` is recorded for orientation only — Discovery judges the leap, not the interface. Values: skill, tool, MCP connector, sub-agent, plugin/marketplace, **web UI (URL)**.

**The sixth value was added 2026-08-08, on the Composer's finding, and the reason it is added *here* and not to the extension model matters.** His observation: *"a tool can be also an url to reach in browser pane, even with no API, MCP, or whatever."* Proven the same evening — a Community plugin the Figma MCP cannot invoke by name was launched, read and operated through the pane (ADR-259).

**`project/claude-extension-model.md` is not wrong and is left alone.** Its taxonomy classifies mechanisms by their relationship to the **context buffer** — a skill sits inside it, a tool reaches outside it, a sub-agent is a second one. On that axis a URL is not a peer of MCP: **the Browser pane is the tool, and a URL is what it points at.** But this register's `Mechanism` field answers a different question — *what kind of thing is this candidate* — and there "a web app with no agent-facing API" is a genuinely distinct answer. Same word, two taxonomies; the fix belongs to the one that was asking the other question.

**What it changes about a sweep, and it is not small.** The first five values all require *someone to have built something for agents*. The sixth requires navigating. So the candidate space is not the set of MCP servers and plugins — it is **every web tool with a usable interface**, no vendor cooperation needed. The lineage question ranks them unchanged: *does the surface manipulate the true material, or a picture of it?*

**And it puts a `Spanning layer: none` verdict under suspicion.** MCP is a narrow waist someone had to build and every vendor had to adopt; **the browser was already one** — one interface, every tool, thirty years, no adoption required. So *"nobody built the crossing"* is unsafe wherever a web UI already crosses the seam. **Re-check every `Spans:` line on sweep 2 against this.**

**First candidates under the sixth mechanism, named by the Composer 2026-08-08 — recorded so they survive the session, `UNVERIFIED` until sweep 2 fetches them.** None has been visited; each is a name he supplied, and this register's own rule is that a candidate carries a source and a `Seen` date before it enters a lever table.

| Named | Chair it would serve | Lever |
|---|---|---|
| **W3C web-based validators / inspecting tools** | QA Engineer — his words: *"QA Engineer have web based W3C inspecting tool"* | `audits-accessibility-mechanically` — an existing lever whose only candidates today are `axe-core` and a **paid** MCP. A free, first-party, URL-reachable checker changes that lever's licence picture entirely. **Not recalled from the web: the Composer used this workflow directly** — *"I started like that, notepad, wrote plain DOM with inline CSS by end, check html file on W3C website."* **Almost 25 years ago — c. 2001 — and by hand: no generator, no framework.** An authoring tool with no oracle, plus an independent checking surface: **Davis & Weyuker's pseudo-oracle, practised a quarter-century before this register named it.** Worth noting against `method/web-lineage.md`: that is era 1, the era the lineage cites for *tag soup arriving from tools that also produced "real" artifacts* — and he was hand-writing the true material and checking it against the standard, which is the era's counter-example rather than its symptom |
| **D3** | UX Designer · Design Engineer | no matching lever yet — *renders data as a manipulable graphic*. Relevant because this estate found **twelve encoding defects** that survived every text gate |
| **Markdown → CSV converter** | Content Designer · Software Architect | no matching lever yet — a format crossing currently done here by script |

**Three more named 2026-08-08, and these were the first run of the method's own gathering step — instruments for judging tools, which is the pseudo-oracle at procurement level: you read an independent source instead of the vendor's claim about itself.**

| Named | Answers | State |
|---|---|---|
| **Context7** | *"gives you up-to-date documentation"* (Composer) — current API docs, so **Posture** (does it implement the standard) and part of **stability** | **already held** — shared toolset, `agents/tools/context7.md`, first connected call 2026-08-08 |
| **alternativeto.net** | candidate **discovery** and the **Licence** field | **Verified 2026-08-08** by fetch: ~150,000 apps ranked by ~2,023,000 user opinions, crowd-sourced; **filterable by licence** with specific SPDX-style values (GPL-3.0, MIT) alongside Free/Freemium/Paid; **fully usable without an account**. Caveat inherent to the source: crowd ranking is a **popularity** signal, which is the incumbency-by-arrival bias this file already flags — read it for *discovery*, never for *ranking* |
| ~~**openbenchmarking.org**~~ | independent benchmark data → **Health** | **BANNED 2026-08-08, `Grip: blocked`.** `WebFetch` → **HTTP 403**; the Browser pane → a challenge interstitial (`"Un instant…"`) and **the pane session died with it**. The Composer's call: *"ban openbenchmarking.org, it breaks you, on purpose I think."* Two independent instruments, both refused, one destroyed. Do not re-test on a later sweep — bypassing bot detection is prohibited, so there is no version of this that ends differently |

**Replacements for the banned site — and they are a better class, which is why the ban cost nothing.** Verified 2026-08-08 by fetch, not recalled.

| Instrument | What it answers | Verified shape | Mechanism · Grip |
|---|---|---|---|
| **deps.dev** (Google Open Source Insights) | **Health** — dependency graph, licences, security advisories, project data | 8 methods (`GetPackage`, `GetVersion`, `GetRequirements`, `GetDependencies`, `GetProject`, `GetProjectPackageVersions`, `GetAdvisory`, `Query`) over **7 ecosystems** — Go, RubyGems, npm, Cargo, Maven, PyPI, NuGet. `GetProject` reaches GitHub/GitLab/Bitbucket. **Auth: not documented on the API page — unconfirmed rather than confirmed-absent.** [docs.deps.dev/api/v3](https://docs.deps.dev/api/v3/) | **tool (API) · `n/a`** |
| **OpenSSF Scorecard** | **Health**, security-weighted — *"is anyone still tending this"* | **18 automated checks**, each scored **0–10** with a risk level, aggregated; access by GitHub Action, **CLI**, or a **public dataset covering 1M+ projects**; no account to view; ships remediation prompts. [scorecard.dev](https://scorecard.dev/) · [ossf/scorecard](https://github.com/ossf/scorecard) | **tool (CLI/dataset) · `n/a`** |
| **Libraries.io — SourceRank** | **Health**, popularity-weighted | a score whose *"main element … is the number of open source software projects that depend upon a package"*, max ≈30. [docs.libraries.io](https://docs.libraries.io/overview.html) | web UI (URL) · unmeasured |

**The rule this suggests, and it is the cheap lesson from the ban: for evidence-gathering, prefer an API to a site.** All three replacements are **called, not driven** — `Grip: n/a` — so they cannot present a challenge wall, cost no screenshots, and never get more expensive with repetition. **The instrument that broke the pane was the one that had to be *visited*.**

**Two coverage boundaries, stated because they are load-bearing rather than pedantic.**

**(a) `deps.dev` covers package ecosystems only — seven of them — and most of this register's candidates are not packages.** Style Dictionary (npm) is in scope; Figma Variables, Code Connect, the Figma agent, `alternativeto.net` and every `web UI (URL)` candidate are not. **So `Health` now has a real instrument for the library half of the field and none for the product half** — which is this file's own *"seams with no lever yet"* discipline turned on its own method, and it is recorded as a gap rather than papered over.

**(b) Scorecard measures *security posture*, and using it as a general health proxy is a scoped claim.** Several of its 18 checks are genuine maintenance signals (maintained, branch protection, CI, review), but a high score is not a promise that the project answers issues. Read it as *is this tended*, never as *is this good*.

**And SourceRank inherits `alternativeto.net`'s caveat exactly:** dependents-counted is a **popularity** measure, which is the incumbency-by-arrival bias this file already flags. Discovery signal, never a ranking.

**On the 403, because it is the rule catching itself within the hour.** A `WebFetch` 403 is a fact about **WebFetch**, not about the site — so it was checked with a second instrument before anything was written down, exactly as `brain/brain_principles.md` now requires. **The second instrument agreed.** That is the first time in this estate's record that the oracle rule was applied *before* a claim was made rather than after it was wrong.

**And the failure itself was diagnosed from outside, which is the same principle one level up.** The Agile Facilitator could not observe its own breakage; the Composer could, and named it. **An agent is not its own oracle either.**

**Two of the three have no lever, which is the method working rather than a gap in the table:** Discovery names the leap before the lever exists, and `Seams with no lever yet` is where that goes once a multiplier is established.

**One field this suggests and the register does not yet have:** a candidate's **accessibility-tree quality**, derivable from a single `read_page` before adopting anything. It predicts *how* the tool can be driven — **ref-addressable** (stable, name-based, cheap on repetition) versus **eyes-only** (works, fragile, costs a screenshot every time, and never gets cheaper with familiarity). Not added yet; it is a schema change and the Composer's call.
