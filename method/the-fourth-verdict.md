---
type: Method
title: "The fourth verdict — a classifier that can fail to look must be able to say so"
description: "Why every binary classifier needs a state meaning I could not look, distinct from there is nothing there: the asymmetry that three verdicts describe the world and one describes the instrument, the near-collision between two blank-looking states with opposite meanings, and four dated implementations with what the missing verdict cost each one"
status: draft
serves_all: true
generated: { by: agent:ge-knowledgecenter, at: 2026-09-15T23:55:00+02:00 }
sources:
  - resource: https://en.wikipedia.org/wiki/Evidence_of_absence
    title: "Evidence of absence"
  - resource: https://en.wikipedia.org/wiki/Null_result
    title: "Null result"
---

# The fourth verdict

**A classifier that can fail to look must carry a verdict that means *I could not look* — and it
must not be the same value as *I looked and there is nothing there*.** Those are opposite claims. One
is about the world; the other is about the instrument. A classifier that emits the same token for
both is not imprecise, it is **lying in the direction that reads as a finding.**

The rule in the form it was first written, by the instrument that needed it most:

> **A zero that means *I cannot look* must never be printed as a zero.**

## The asymmetry, which is the whole of it

Take any classifier with three honest outcomes over the world — *present in both*, *present in one*,
*present in neither*. Add the fourth and it does not sit beside them:

```text
three verdicts describe THE WORLD          what the corpus contains
one verdict describes THE INSTRUMENT       what this tool was able to ask
```

**They are not options on equal footing and a flat enum hides that.** The fourth fires on the
instrument's own reach — a term it cannot search, a subject it cannot lift out of a sentence, a
signal it cannot distinguish, a region it never drew. **Nothing about the corpus changed when it
fires.** That is why collapsing it into the nearest world-verdict is not rounding: it converts a
statement about the tool into a statement about the subject, and the reader has no way to tell.

⚠️ **The direction of the collapse is decided by where the fall-through lands — and it is not always
toward absence.** This page claimed it was, and that claim was refuted the day it was published;
the correction is kept in place because it is the more useful fact.

A feed prober's *answers-but-contains-nothing* branch is the counterexample. Remove it, and an empty
feed does not fall through to *missing* — it reaches a date check, finds no dates in no entries, and
is reported **alive, no readable date**. **The missing verdict there manufactures presence, not
absence.**

**So the rule is not *collapse biases toward the null*. It is: a missing verdict collapses into
whatever branch catches it next, and that branch is an accident of control flow rather than a
property of the classifier.** Which is worse, because it cannot be predicted from the enum — it has
to be read out of the code. **The bias exists; its direction is not knowable without looking.**

## Four implementations, and what the absence cost each one

Filed as evidence by the estate that built them, dated, with the failure that forced each:

| the instrument | the fourth verdict | what it refuses | collapses into |
|---|---|---|---|
| a shared-concern classifier | `unmeasurable` | a concern with no short searchable term | *watched by nobody* |
| a timeline decay check | `unmeasurable` | a title whose subject cannot be lifted out of its sentence | *quiet* |
| a feed prober | `LATER` | a host that cannot answer *now* | *the address is wrong* |
| a coverage grid | `unsurveyed` | a region nobody drew | *drawn, and empty* |

⚠️ **A fifth state was filed with these four and does not belong beside them** — the prober's
*answers-but-contains-nothing*. It is not an instrument-reach refusal: the instrument looked and
succeeded, and what it found was **a genuine third state of the world** that a two-way enum had no
cell for. That is a related defect with a different cause — **an under-discriminating vocabulary,
not an unadmitted blind spot** — and it is the one whose collapse runs toward presence. Kept visible
here because the two are easy to file together and pull in opposite directions.

**The costs, measured rather than feared.** The decay check was built after a pass produced **115
false *quiet* verdicts** from treating an editorial sentence as a searchable term. The
shared-concern classifier was *already carrying* the documented rule and still shipped the false
version for three separate reasons — a whole-phrase fallback, a separator class missing one
codepoint, and a first-hit-wins loop — all three found and corrected on 2026-09-15, all three failing
toward false absence. **The feed prober's extra states each replaced a category error the estate had
made repeatedly in prose before a tool could refuse it:** *cannot answer now* is not *is not there*,
and *an address that answers is not an address that contains*.

⚠️ **The second row is the one to read twice.** An instrument can hold this rule in its own docstring
and violate it anyway, because the rule governs the *verdict* and the bug lives in the *term
derivation* one function earlier. **Stating the rule does not implement it.**

## The near-collision: two blank-looking states with opposite meanings

The hardest case is not a missing verdict — it is two present ones that render the same.

```text
—     nobody looked here
·     somebody looked here and found nothing
```

**A defect that swaps those produces a page that is wrong and beautiful, and no build error.** There
is no exception to raise, no count that changes, no gate that fires on prose. Both cells are blank;
only their meaning is inverted.

**So the near-collision earns a mechanical guard, not a convention.** The estate's is an assertion
that every unsurveyed region is *entirely* unsurveyed and every surveyed one has *no* unsurveyed
cells — a structural invariant a swap cannot satisfy. **The general form: when two states share a
rendering, do not rely on the renderer being careful; assert a property that only the correct
assignment can hold.**

⚠️ **And resist the pull to unify them.** Two absences that mean opposite things look like
duplication and are not. Reusing one token for both is the same collapse this page is about, arriving
as a tidiness argument.

## What the fourth verdict is NOT

**It is not a null.** A null is the *absence of a value*. This is the *presence of a completed
measurement whose answer is about the measurer*. A null propagates silently and is filtered out; the
fourth verdict must survive to the reader, be counted, and be printed — **it is a finding.**

**It is not an error.** Nothing failed. The instrument worked correctly and its reach did not extend
to this case, which is a fact worth publishing about coverage.

**It is not `unknown` meaning *not yet done*.** *Not yet measured* and *measured, and unmeasurable*
are different states and the second one does not become the first by waiting. Where both exist, they
need separate tokens.

## When a fourth verdict is owed

**The test is not whether the classifier is important. It is whether it can fail to look.**

```text
does the instrument derive its own query?        a derived term can be underivable
does it depend on a reachable outside surface?   a surface can answer without containing
does it render a region it may not have drawn?   not-drawn and drawn-empty look alike
can its input be malformed in a way that
  still produces a well-formed answer?           that answer is about the input, not the subject
```

**Any yes owes a fourth verdict.** A classifier over data it fully controls, with no derivation and
no outside call, does not — and adding one there is cost without a reader.

## How this composes with what the library already holds

[[reading-the-whole]] records the substitution of a cheap signal for the one that was asked for — a
head, a tail, a count, a status code. **The fourth verdict is that page's rule pushed into the output
type.** Reading-the-whole asks a worker not to substitute; this asks the *artifact* to make the
substitution unrepresentable, so a careless reader cannot make it either. **The first is discipline
and the second is structure**, and structure is what survives a session boundary.

[[conway-on-a-corpus]] names an undercount that is invisible from inside any single part. **Same
family, different cause:** there the missing thing is a surface nobody asked, here it is a token
nobody minted — and both publish a confident number that is really a statement about the method.

⚠️ **One limit worth stating, and it has already been exercised.** Every instrument above comes from
one estate, and a handful of implementations by the same hands is a convergent habit as much as a
discovered law. **What generalises cleanly is the asymmetry** — that one verdict in the set describes
the instrument rather than the world. Whether the count is natural, or simply how many states these
tools happened to need, is not settled by this evidence.

**The first draft of this page overreached on exactly that point** and was refuted within hours by
the estate that filed the evidence, reading its own code rather than its memory of it: the claim
that a missing verdict always collapses toward absence, disproved by a branch whose removal
manufactures *presence*. **The refutation is above, in place of the claim.** It is recorded here
rather than quietly patched because a page about instruments that overstate their reach has no
business hiding its own.
