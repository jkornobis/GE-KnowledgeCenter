---
type: Method
title: "Screening — what must never be published, and the two places it actually leaks (Reliability Engineer, Software Engineer, Content Designer)"
description: "Why screening pages is not screening: the push half (every surface a host publishes, read by a check whose terms live outside every repository) and the transcript half (a credential printed into a session), with the rule 'print a name and a length, never a field', the proof rule 'a count and the terms file, never the terms', and why a hook backs the rule rather than replacing it"
status: draft
serves_all: true
generated: { by: agent:ge-knowledgecenter, at: 2026-09-27T17:05:00+02:00 }
---

# Screening — what must never be published, and the two places it actually leaks

**Converged by the four Named instances in the Extend KC room on 2026-09-27, filed as `#171`,
built from `#166`.** A library that must never carry an employer, a project or a client (this
repository's floor, §3) had screened its pages, and only its pages. **Once screening was widened on 2026-09-26, twenty-two leaks
were found or reported within two days, and none of them was in a page.**

## Where they were

```text
surface                                   leaks   found by
GitHub: comments, issue bodies, a label     14    check_screening.mjs, 2026-09-26/27
Forgejo: a PR body, a comment                2    the same
session transcripts: credential files        4    by the instance that printed them, afterwards
a secret pasted into a chat                  2    one on request, one by a method page's own rule
```

**The class that matters is the bottom two.** A push check sees none of them: a transcript is never
pushed. Screening therefore has two halves, and a repository that holds only the first has screened
what it publishes and not what it prints.

## The push half — every surface a host publishes

`check_screening.mjs` at this library's root reads tracked files. Then, on each host, it reads the
repository description, labels, milestones, releases, issue and PR bodies, and every comment. **A
host's public surface is much larger than its pages.** A label description is printed on every issue
that carries it, so it travels further than any page.

- **The terms live outside every repository.** A list of what must never be published, committed
  anywhere, publishes it. One file serves every instance on the machine.
- **No terms, or a surface that does not answer, gives *could not look*, never *clean***
  (`method/the-fourth-verdict.md`).
- **Edit history is part of the surface.** On a public host, an edited comment keeps its earlier
  text one click away. So a leak is removed by **deleting and reposting** the text redacted, with
  its original date noted, and an edited body has its old revisions deleted by hand. **A check reads
  the current text and cannot see history**, so a clean run does not prove clean history. On a
  private host, the Composer ruled on 2026-09-27 that the text is redacted and old versions are left.

## The transcript half — what a session prints

**Four credential leaks in four days, from three instances, and none was a publish.** Each was a
credential file read whole, or read by a pattern that assumed its shape:

- a file printed in full, once by an instance and again by its subagent;
- a "mask the secret" pattern that matched the wrong variable names and printed every token;
- a field-splitting read that assumed `NAME=value`, when the file held a bare key, and so printed
  the key.

And two secrets went into a chat as text: a password on request, and a token pasted by a human
following a rule that said values come back in the chat (since corrected in
`method/hand-task-use-case.md`).

**The rule: print a name and a length, never a field.** To check that a credential is there, print
that the variable is set and how long it is. To use it, read it into a variable and pass the
variable. **Masking is not the rule**: every masking pattern assumes a shape, and the files are
not all one shape.

**A hook backs the rule; it cannot replace it.** A hook refusing `cat`, `head` or `echo` on known
credential paths catches the habit, and one exists in the shared hooks. But the third leak above was
a field-splitting command no such list names, and denying a tool by name does not deny the
capability. **The list of verbs will never be complete, and the rule is what covers the rest.**

## The proof rule — a count and the terms file, never the terms

**One leak was in the line that proved screening.** It listed the terms it had screened for. A
screening result is quoted into PR bodies and issue comments as verification, so it is itself a
publish. **A proof states how many terms were checked, which file they came from, and how many
texts were read. It never states the terms**, and a hit names the term's line number in that file.

## What this page does not do

It names no credential path, and no term. Those belong to the machine, not to a library. It does
not make `check_screening.mjs` a merge gate here: that is open until `#166` closes, because a gate
that is red on purpose teaches its readers to ignore red.

## Related

- `#166` (screening built), `#171` (the Auditorium that made it estate-wide).
- `method/hand-task-use-case.md`: a secret never comes back in the chat.
- `method/the-fourth-verdict.md`: *could not look* is not *clean*.
- `method/reading-the-whole.md`: the opposite pull. Read the whole of what you act on, except a
  secret, where you read the one field you need and print none of it.
