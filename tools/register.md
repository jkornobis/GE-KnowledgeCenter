---
type: Tool
title: "The lever register — what exists, ranked by the lineage"
description: "The lever register: what leaps exist and which seats they serve, judged by six questions — lineage, posture, health, grip, why, licence — plus the seams no tool crosses yet"
status: draft
serves: [User Researcher, Product Owner, Software Architect]
generated: { by: human:jkornobis, at: 2026-08-22T23:51:16+02:00 }
sources:
  - resource: https://stevekinney.com/writing/driving-vs-debugging-the-browser
    title: "stevekinney.com"
  - resource: https://www.test-lab.ai/blog/chrome-mcp-vs-playwright-mcp
    title: "test-lab.ai"
  - resource: https://www.vibebrowser.app/blog/chrome-devtools-mcp-vs-playwright-mcp
    title: "vibebrowser.app"
  - resource: https://www.deque.com/axe/axe-core/
    title: "deque.com/axe/axe-core"
  - resource: https://www.deque.com/blog/a-closer-look-at-axe-mcp-server/
    title: "deque.com/blog"
  - resource: https://docs.deque.com/devtools-server/4.0.0/en/axe-mcp-server/
    title: "docs.deque.com"
  - resource: https://chatforest.com/reviews/figma-ai-design-agent-canvas-code-to-canvas-2026/
    title: "chatforest.com"
  - resource: https://aidatainsider.com/news/figma-unveils-ai-agents-and-code-native-design-tools-at-config-2026/
    title: "aidatainsider.com"
  - resource: https://qubika.com/blog/figma-config-2026-announcements-for-designers/
    title: "qubika.com"
  - resource: https://www.chulbuldesign.com/blog/figma-updates-2026
    title: "chulbuldesign.com"
  - resource: https://atomize.tools/blog/figma-design-tokens-guide/
    title: "atomize.tools"
  - resource: https://docs.tokens.studio/transform-tokens/style-dictionary
    title: "docs.tokens.studio"
  - resource: https://docs.tokens.studio/fundamentals/design-tokens/
    title: "docs.tokens.studio"
  - resource: https://www.figma.com/community/plugin/843461159747178978/tokens-studio-for-figma
    title: "figma.com/community"
  - resource: https://developers.figma.com/docs/code-connect/
    title: "Code Connect — Figma's own documentation, replacing a blog article that 404'd"
  - resource: https://github.com/5t3ph/a11y-color-tokens
    title: "a11y-color-tokens"
  - resource: https://finos.github.io/a11y-theme-builder/designers/how-to-work-with-tokens/
    title: "FINOS A11y Theme Builder"
  - resource: https://github.com/design-tokens/community-group/blob/main/technical-reports/format/types.md
    title: "base types"
  - resource: https://github.com/design-tokens/community-group/blob/main/technical-reports/format/composite-types.md
    title: "composite types"
  - resource: https://github.com/design-tokens/community-group/pull/86
    title: "PR 86"
  - resource: https://jsoncanvas.org/
    title: "JSON Canvas"
  - resource: https://docs.deps.dev/api/v3/
    title: "docs.deps.dev/api/v3"
  - resource: https://scorecard.dev/
    title: "scorecard.dev"
  - resource: https://github.com/ossf/scorecard
    title: "ossf/scorecard"
  - resource: https://docs.libraries.io/overview.html
    title: "docs.libraries.io"
---

# The lever register — what exists, ranked by the lineage

Products grouped under **levers**. Written by a User Researcher-led **Tool Discovery** run — see `protocols/tool-discovery.md` for the protocol.

**This file names chairs, never musicians.** A chair is a seat and its canon; a musician is whoever occupies it and whatever toolset they carry (ADR-199). The register describes what a leap *is* and which seats it touches — never who carries it. Who carries what lives in `roster.md`, which cites this file one way and is never cited back.

**Two chair fields, and they answer different questions (ADR-220).**

- **`Serves:`** — the chairs that *use* the lever. A routing note.
- **`Spans:`** — the two chairs whose **seam** the lever bridges, plus the **multiplier** that forces a format, plus whether a **spanning layer** exists. Not routing: this is the predictive field.

The distinction comes from `project/chair-gap-leap-thesis.md`, and it is split because the two halves have different strength — **the multiplier predicts that a seam gets a format and where; the chair gap predicts what that format must carry.** A gap crossed by a single pair is absorbed by a person; it takes N×M to force an artifact, and the standard solution is a **narrow waist** converting O(M×N) integrations into O(M+N). So a seam recorded here with a real multiplier and `Spanning layer: none` is a gap the orchestra has named before the market built it.

*Scale is an input, not an output:* the altitude for every `Spans:` line in this file is **the orchestra's twelve chairs**. Read at a different altitude the seams move, and a claim that holds at every altitude is not falsifiable at any.

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
| ~~Browserbase MCP~~ **- dropped, sweep 2** | MCP connector | paid — justification never established | ~~managed cloud browser rather than a local one~~ | **`browserbase/mcp-server-browserbase` is `archived: true`, last push 2026-07-20** — GitHub API, 2026-09-04. A candidate that was `UNVERIFIED` and paid for **about a month** (the row dates to 2026-08-05, not a year — corrected after review) is now unmaintained; the licence bar was never cleared and the health bar now fails outright. Kept struck rather than deleted, per this file's own rule | 2026-08-05 · **struck 2026-09-04** |

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
Spans: **UX Designer ↔ Software Engineer**, with the Design Engineer as the seam-holder rather than a party to it. Multiplier: N design tools × M platforms. Spanning layer: **DTCG** — a Draft Community Group Report, not a Recommendation (ADR-219); **status contested as of 2026-09-04, see obligation 1 below**. The founding case for this whole field: the crossing exists, is typed and aliasable, and is still provisional. **Won by: arrival** (2026-08-08) — adopted before it was finished. **Its gaps are what got typed first, not what was judged unnecessary**: ~~no motion composite, and~~ **[struck 2026-09-04: a `transition` composite has existed since 2022-02-03; sweep 1 misread the spec]** no type carrying accessibility intent — recorded below as a seam. **Hunt here.**

| Candidate | Mechanism | Licence | The leap it offers | Source | Seen |
|---|---|---|---|---|---|
| **Figma Variables** | product feature | included (Figma) | native token storage since Config 2023; the standard place design decisions live | [atomize.tools](https://atomize.tools/blog/figma-design-tokens-guide/) | 2026-08-05 |
| **Style Dictionary** | tool (build) | OSS | transforms tokens into development-ready code; **Tokens Studio's team joined the project in Aug 2023**, so the two are no longer competing stacks | [docs.tokens.studio](https://docs.tokens.studio/transform-tokens/style-dictionary) | 2026-08-05 |
| **Tokens Studio** | plugin (Figma) | freemium | imports from and **two-way syncs with Figma Variables**, with a stronger export pipeline than Variables alone | [docs.tokens.studio](https://docs.tokens.studio/fundamentals/design-tokens/) · [figma.com/community](https://www.figma.com/community/plugin/843461159747178978/tokens-studio-for-figma) | 2026-08-05 |
| **Code Connect** | product feature | seat-gated (Figma) | maps Figma components to code components **1:1** — pillar #1 of the industrialization mission, already in this session's toolset | [developers.figma.com](https://developers.figma.com/docs/code-connect/) · this session's own tool documentation | 2026-08-05 |

**The published shape of the whole pipeline**, for orientation: Dev Mode → tokens as JSON via Tokens Studio → Style Dictionary transform → Code Connect for the component mapping, with git as single source of truth and CI validating the crossing.

**Chair Review 2026-08-05 — promoted for the Design Engineer alone (ADR-218).** That chair *is* the design↔code seam, so removing token movement leaves no seam to hold; the break test passes on the chair's definition. UX Designer, Software Engineer and Software Architect keep `Serves:` — they hold pieces of the pipeline without breaking without it.

---

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
**Prediction, falsifiable:** a standardised carrier for accessibility intent appears in this seam, or the method is wrong about where to look. ~~Next check: sweep 2.~~

**Checked, sweep 2, 2026-09-04 — the seam holds, unchanged.** `accessibility`, `contrast` and `wcag` return **zero** across both of the DTCG source's type documents — [base types](https://github.com/design-tokens/community-group/blob/main/technical-reports/format/types.md) and [composite types](https://github.com/design-tokens/community-group/blob/main/technical-reports/format/composite-types.md). The one adjacent item is issue **#91, "High contrast colors"**, open — a colour question, not a carrier for intent. **The prediction is neither confirmed nor falsified and stays live.** Next check: sweep 3.

**Worth reading against the motion row above.** ~~Two seams, one incumbent, one sweep: the motion gap closed and this one did not move at all — the first evidence this file has that the `won by: arrival` flag discriminates rather than merely labels.~~ **Struck 2026-09-04, sweep 2 review: the motion gap never closed, so there is no contrast to read and no evidence here that the flag discriminates.** What the two seams show instead is that **one was misread and one was measured correctly** — a fact about this register's instruments, not about DTCG's growth. The flag's discriminating power remains **unevidenced**, which is where sweep 1 left it.

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
~~**State: exists, partial.** DTCG types `duration` and `cubicBezier` cross; there is **no motion composite**, so a transition survives the crossing as parts and is reassembled by hand at the far end.~~

**State: exists — re-measured 2026-09-04, and sweep 1's reason was false when written, not overtaken.** The DTCG format spec's [composite types](https://github.com/design-tokens/community-group/blob/main/technical-reports/format/composite-types.md) define a **`transition`** composite — `duration` + `delay` + `timingFunction`, each a value or a reference to a token of that base type — and have done since **2022-02-03** ([PR 86](https://github.com/design-tokens/community-group/pull/86), *Update composite types chapter*). **That is four and a half years before sweep 1 wrote that no motion composite existed.**

**Where sweep 1 looked, because its own evidence names the file.** The struck sentence cites `duration` and `cubicBezier` — both **base** types, both in the format spec's [base types](https://github.com/design-tokens/community-group/blob/main/technical-reports/format/types.md) document. Every composite in the format lives in a **different document**: the composite-types one holds `Transition`, `Shadow`, `Gradient`, `Typography`, `Border` and `Stroke style`, and the base-types one holds none of them. **Sweep 1 read the base-type file, correctly observed there is no motion *type*, and generalised to a claim about a file it never opened.** What makes this worse than an ordinary miss is that the sentence **carried real corroborating evidence** — `duration` and `cubicBezier` genuinely are there — so a false claim read as sourced. **The general form, and it is not about DTCG: a confident negative taken from one half of a two-file spec.** Verified 2026-09-04 by listing the headings of both files from the GitHub contents API.

**The finding survives in a sharper form, and now from the spec's own mouth rather than from this estate's reading.** Issue **#103**, embedded in the spec text beside the type, asks whether transition parameters are useful by themselves when they cannot say what is being transitioned or what the start and end states are. And **#429** is open (2026-06-28): *Motion beyond `transition`: gauging interest in choreography-level token types (spring, keyframe sequences, named patterns)* — quoted verbatim after review; the earlier quotation truncated it mid-parenthesis.

**So the crossing carries a transition's parameters and not its subject**, which is what *reassembled by hand at the far end* was reaching for — better evidenced now, and from the spec's own mouth. ~~And it is the `won by: arrival` flag paying out exactly as predicted: an arrival-winner's gaps are historical, not principled, so they close by ordinary growth. This one did, between sweeps, with nothing here watching.~~ **Struck 2026-09-04, sweep 2 review.** Nothing closed between sweeps: the composite predates sweep 1 by four and a half years, and issue #429 (2026-06-28) predates it too. **The flag did not pay out here, and the inference was the sweep reading its own correction as a confirmation of its method.**

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

## The method and the passes have moved

**Separated on 2026-09-10, because this page is a lookup surface and they are not.**

| What you are doing | Fetch |
|---|---|
| weighing a candidate, or filling a lever entry | `method/judging-a-tool.md` |
| asking how the register came to say this | `tools/register-sweeps.md` |

**Nothing was lost and nothing was rewritten.** The six questions are still the method; the sweeps
are still the record of how the rows were filled. **They are one hop away instead of resident in
every read of this page.**
