---
type: Method
title: "Sources — the address a page can be re-derived from (Content Designer, User Researcher)"
description: "Why every principle, protocol, chair and tool page carries the address its claims came from: so a later session re-derives rather than re-searches, and gets the same reasoning instead of whatever ranked well that day"
status: draft
generated: { by: human:jkornobis, at: 2026-09-05T15:10:00+02:00 }
---

# Sources — the address a page can be re-derived from

**A source on a page is not a citation for credit. It is the address the page can be rebuilt from.**

**The Composer, 2026-09-05**, in three statements that are one argument:

> *"It's why I wanted source in every principles, protocols, chair, tools."*
> *"For rederivated knowledge from entry point."*
> *"Reduce the websearch of GE but ensure he gets the same logical prose each session."*

## The argument, and it is about reproducibility rather than rigour

**A search is not reproducible. A source is.**

Two sessions asking the same question of a search engine get different results, in a different order,
and write different prose from them. Two sessions fetching the same address get the same ground and
reason from it the same way. **The variance a search introduces is not in the knowledge; it is in
which knowledge arrived.**

⚠️ **And the variance is not random — it is biased toward the past.** Search ranks by optimisation,
not by currency. **A well-optimised 2016 answer outranks the 2026 specification**, so a session that
searches does not merely get a different answer each time; it is systematically pulled toward the
answer that has had longest to accumulate links. A page with no address hands every future reader
that bias, once per session, for as long as the page stands.

**So a source is what stops a library re-deriving its own knowledge badly every time it is read.**

## Two targets, and they are not the same address

**The Composer, 2026-09-05:** *"Beat the chaos of internet websites to reach intemporal knowledge
ground."*

**That names the goal precisely, and it splits the work in two.**

**Currency** — *what does this thing do today?* An API changes under you; last year's answer is
wrong and looks fine. The address for this is a **Context7 id**, which resolves to the version
running now rather than to a page somebody wrote once.

**Ground** — *what is this thing, and why?* A specification, a paper, a standard, a primary text.
It does not move, and reaching it is what stops a session re-deriving a concept from whatever blog
post ranked well that morning.

**This library already runs on ground and it is worth noticing how old some of it is.**
`principles/core-principles.md` anchors the oracle rule in **Weyuker, *On Testing Non-Testable
Programs*, The Computer Journal 25(4), 1982**, and takes *pseudo-oracle* from Davis & Weyuker rather
than coining a word. **A 1982 paper is still doing load-bearing work in 2026** — which is exactly
what intemporal means, and exactly what no search result would have handed anyone.

⚠️ **A page needs whichever of the two its claim depends on, and sometimes both.** A tool page
claiming *this API can do X* needs currency. A protocol claiming *self-verification is not
verification* needs ground. **Confusing them is how a page ends up citing a vendor blog for a
principle, or a 2019 paper for a capability.**

## What a source line must do

**Address the claim, not the topic.** A link to a project's home page is a topic. A link to the file
that carries the sentence is an address. The difference shows the moment someone tries to check.

**For a software library or API, the address is a Context7 id, not a URL.** `tools/context7.md`
records what it is for: *on-demand, version-pinned library documentation — the fix for stale and
hallucinated API facts*. A URL to documentation rots silently as the product moves; an id resolves
to the current version at the moment of the call. **19 of the 27 tool pages already carry one.** The
shape is `/org/project`, as in `/figma/mcp-server-guide`.

**For a specification, name the file.** Not the spec — the file inside it. This library has already
paid for the difference: a sweep read `types.md`, found what it expected, and wrote a confident
negative about `composite-types.md`, a file it never opened.

**For a field with no single document, the address is a curated index**, and it is enough. Recording
*where the field is* makes no claim about its content and so stays inside the admission rules.

## The form: article and comment

**The Composer, 2026-09-05:** *"In the end, article + comment. Document page + comment."*

**That is the whole shape, and it settles what a page may hold.** The article is the source and it
stays where it lives. **The comment is ours, and it is the only part this library writes.**

A comment is what a source cannot contain: **what this estate found when it used that source, what it
cost, what it corrected, and where it did not reach.** No one else can write that, and it does not go
stale, because it is a record of an encounter rather than a summary of a document.

⚠️ **So a page never carries the content.** A summary here is exactly the *plausible documentation*
the admission rules exist to keep out — and worse, it rots while the article it copied does not, so
the library slowly becomes a stale mirror of things that are still correct at their own address.

**The shape recurs at every scale this estate works at**, which is the Fractal Loop rather than a
coincidence:

| The article | The comment |
|---|---|
| A specification file | the page that cites it, and the claim it settled |
| A published artifact | the issue that argues with it |
| Another instance's pull request | the review on it |
| A tool's own served spec | the audit's *Critical* section |

**In every one of them the library owns the right-hand column and points at the left.**

## The measurement

**Measured on `main` at `9f808b3`, 2026-09-05, counting pages containing no `http` at all:**

| Section | Pages with no source |
|---|---|
| `mandalas/` | **6 of 6** |
| `protocols/` | **12 of 14** |
| `method/` | 10 of 15 |
| `tools/` | 11 of 27 |
| `chairs/` | 1 of 11 |
| `principles/` | 0 of 1 |
| **Total** | **40 of 75** |

**The chairs are the best-covered section and the mandalas the worst**, which is the opposite of
where the risk sits: a chair's references are read occasionally, and the mandalas are the reasoning
every derived artifact hangs from.

### The sharpest single case

**`mandalas/movements-layer.md` contains no address of any kind** — not a URL, not a markdown link.
Its central argument is a table of **four dated claims about external products**, and its own text
refuses to claim a month it cannot show for one of them.

**Three of those four claims were wrong until 2026-09-05** — a project called dead when only its
releases had stopped, a month claimed from sources giving a season, and a tease with no source at
all. They were corrected by going to the sources. **The corrections landed and the addresses did
not**, so the next reader is exactly where the last one was.

## The rule

**A page that makes a claim about something outside this library carries the address that claim came
from.** Where the thing is a software library, that address is a Context7 id. Where it is a
specification, it is the file. Where it is a field, it is a curated index.

**A page with no address is not wrong. It is unre-derivable**, which is a different and quieter
failure: it will be believed, and it cannot be checked without doing the original work again — badly,
against a search that ranks the past first.
