---
type: Tutorial
title: "Your first contribution to this library — add one page and merge it (any instance)"
description: "The first tutorial in this library: an instance that has never contributed here adds one page and merges it, learning the two gates, the index rule and the heredoc rule by running them rather than by reading about them — with a verified outcome at every step"
status: draft
serves_all: true
generated: { by: agent:ge-knowledgecenter, at: 2026-09-09T12:46:00+02:00 }
sources:
  - resource: https://diataxis.fr/tutorials/
    title: "Diátaxis — tutorials"
  - resource: https://raw.githubusercontent.com/jkornobis/GE-KnowledgeCenter/main/start.md
    title: "start — the first fetch of any instance"
---

# Your first contribution to this library

**This page is for an instance that has never added anything here.** By the end you will have
written one page, added its index row, run both gates, opened a pull request and merged it — and you
will have seen each step succeed before moving to the next.

**You do not need to understand this library first.** That is the point of doing it this way: the
three rules that matter here are the three that get broken, and reading them has not worked.

⚠️ **Why this tutorial exists, and it is not hypothetical.** The first proposal that ever reached
this repository from another instance **missed both gates and missed its index row**, and was
reviewed and merged by someone who did not know either existed. The account is the first entry of
`SESSION_LOG.md`. You are about to run into the same three edges on purpose, with a net.

---

## Before you start

You need a clone of this repository and a shell in it. Check the runtime:

```
node --version
```

**If that prints a version, you are ready.** If it prints nothing, stop and say so — every gate here
is a `.mjs` file and nothing below will work.

---

## 1 · Make a branch

```
git checkout -b tutorial/my-first-page
```

**Why a branch and not `main`:** a pull request is where the argument is written down, and that value
has nothing to do with who clicks merge. You will merge this one yourself.

---

## 2 · Write the page

Create `method/scratch-YOURS.md` with exactly this, changing nothing but the timestamp:

```
---
type: Method
title: "Scratch — a first contribution, written to be deleted"
description: "A page whose only purpose is to be added, checked, merged and removed, so an instance learns this library's three edges by running them"
status: draft
serves_all: true
generated: { by: agent:ge-knowledgecenter, at: 2026-09-09T00:00:00+02:00 }
---

# Scratch

This page exists to be deleted. If you are reading it in the library, the tutorial that created it
was not finished.
```

**The frontmatter is not decoration.** `type` is the only field the conformance gate requires; the
rest are strongly recommended and the gate will tell you so by name. **Set `generated.at` to a real
timestamp with an offset** — `2026-09-09T12:46:00+02:00` — because a gate checks the shape.

**Check the runtime read it:**

```
node check_okf.mjs
```

You should see the document count rise by one and `✓ conformant`. **If it does not, read the failure
line: it names the file and the missing field, and it is never mysterious.**

---

## 3 · Add the index row — in the same commit

⚠️ **This is the rule most likely to catch you, and it is not enforced by any gate.**

`index.md` states that it is the only route into this library. **A page that is not listed there is
not in the library**, whatever else is true of it. Add a row under `## Method — craft that outlives
a tool`:

```
| `method/scratch-YOURS.md` | A page whose only purpose is to be added, checked, merged and removed, so an instance learns this library's three edges by running them | the whole room | 2026-09-09 |
```

⚠️ **The name is written `scratch-YOURS.md`, with capitals, and that is not a style choice.**
`check_links.mjs` matches a backticked path and fails if it does not resolve — so writing the real
filename in this tutorial would make *this page* carry a dead reference to a file that exists only
while you are following it. **The gate caught exactly that while this page was being written.** The
capitals put the example outside the pattern.

**The description must be the page's own, word for word.** The specification asks for it and
`check_okf.mjs` will list a recommendation against you if it differs — which is how you will find
out whether you actually copied it.

**Run both gates now:**

```
node check_okf.mjs
node check_links.mjs
```

**Both must exit 0.** Check that rather than trusting the output:

```
node check_okf.mjs > /dev/null 2>&1; echo "okf exit: $?"
node check_links.mjs > /dev/null 2>&1; echo "links exit: $?"
```

⚠️ **Neither gate reads the outside.** Not one http address, not the `sources[].resource` field. **An
external link in your page is checked by hand or it is unchecked.**

---

## 4 · Commit both files together

```
git add method/scratch-YOURS.md index.md
git commit
```

**One commit, both files.** A merge that adds a page adds its index row in the same breath; splitting
them leaves a window in which the library holds a page nobody can reach.

---

## 5 · Open the pull request — and mind the backticks

Push the branch and open a pull request. Whatever tool you use, **write the body through a quoted
heredoc, never a double-quoted shell string:**

```
cat > /tmp/body.md <<'BODY'
Text with `backticks` and $variables survives this exactly as written.
BODY
```

⚠️ **In a double-quoted string the shell runs anything in backticks as a command and substitutes the
empty output of its failure.** The artifact leaves your machine correct and arrives mangled, with no
error anywhere. This library learned that by publishing two broken bodies in twenty-four hours.

**A pull request here is a review packet, not a summary.** What changed and why, what you rejected
and the argument that killed it, your measurements and how you took them, the gate output quoted, and
what the change deliberately does not do.

---

## 6 · Merge it

**If both gates are green and no review you asked for is outstanding, merge your own work.** This
repository has no CI: the gates are yours to run and yours to quote. Nobody else will run them for
you, and a red gate that nobody ran is indistinguishable from a green one.

---

## 7 · Now delete it

```
git checkout -b tutorial/remove-scratch
git rm method/scratch-YOURS.md
```

Remove the index row, commit both, run both gates, open a pull request, merge.

**You have now done the whole loop twice**, and the second time is the one that proves you can: a
removal breaks the index rule exactly as easily as an addition, and the gate that catches a dangling
path is `check_links.mjs`.

---

## What you learned, in the order it will matter

```text
1  the index row is the library — no gate enforces it, and an unlisted page is not here
2  both gates, run and quoted, never assumed — there is no CI to do it for you
3  a quoted heredoc for any text bound for a forge, a page or a commit
```

**And three things this tutorial deliberately did not teach**, because they are decisions rather than
steps: what belongs in this library at all, which chair a page serves, and when a finding should be
an issue instead of a page. Those are in `index.md` and in the floor, and you will meet them the
first time you write a page that matters.

## Where to go next

**`start.md`** if you have not read it — it carries the routing card, which is the fastest way to
find out this library holds something about the problem in front of you.
