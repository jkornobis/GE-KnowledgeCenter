---
type: Method
title: "What leaves — the surfaces a library publishes, which the screening reads and which it does not, and the leaks of September classed by how they got through (Reliability Engineer, Software Architect, Content Designer)"
description: "An inventory of what leaves this library and its estate, surface by surface with what reads each one and at what claim level, and a taxonomy of the recorded leaks of 2026-09-26 and 27 — sixteen on the forges and six off them — by surface, by why the check missed it, by what removing it cost and by what the record cannot say; the classes are written as cases a scanner must catch, with the count of this record's own gaps, and the owner of the whole path left to the Composer"
status: draft
card: none
serves: [Reliability Engineer, Software Architect, Content Designer, Agile Auditor, Product Owner]
generated: { by: agent:ge-knowledgecenter, at: 2026-11-23T14:30:00+01:00 }
sources:
  - resource: https://raw.githubusercontent.com/jkornobis/GE-KnowledgeCenter/main/method/screening.md
    title: "Screening, the page that holds the September counts this one classes"
  - resource: https://raw.githubusercontent.com/jkornobis/GE-KnowledgeCenter/main/check_screening.mjs
    title: "check_screening.mjs, read in full 2026-11-23 for the list of surfaces it reads; run once the same day, 850 texts, nothing found"
---

# What leaves

Written 2026-11-23 for the card on the next major version's third problem, *content that leaves the estate can be
wrong or leak, and no check owns it end to end* (`GE-KnowledgeCenter#256`; the Workshop builds the scanner's
classes from this page, `GE-Workshop#349`). **A proposal and a reading.** The code was read, not probed, so each
row below says which. **Who owns the whole path is the Composer's open question on the brief, and this page does
not answer it.**

## The inventory

**What reads it** means the Library's `check_screening.mjs`, which reads one repository (the Library's own) on both
hosts and every tracked file at its current head. **Read** is from the script's source; it was run once, the same day.

| What leaves | Where it goes | Read by the check | Claim level |
|---|---|---|---|
| Pages and scripts, at the current head | The public copy on GitHub, fetched by readers and by the published skill | Yes | Run: 850 texts, nothing found |
| Repository description, website, topics | Both hosts | Yes | Source read |
| Labels, milestones, releases | Both hosts; a label is printed on every issue that carries it | Yes | Source read |
| Issue and PR titles, bodies | Both hosts | Yes | Source read |
| Issue and PR conversation comments | Both hosts | Yes | Source read |
| **Inline review comments on a PR** | Both hosts | **No**: the script reads the issues-comments listing, which the host does not fill with them | Inferred from the endpoint; not probed |
| **Earlier versions of a tracked file**, commit messages, branch names | The public copy | **No**: only the files at the head are read | Source read |
| **Edit history of a comment or an issue body** | GitHub, one click from the current text | **No**; the page `method/screening.md` records it | Documented there, and met in September |
| **The estate's other repositories** | Their own hosts | **No**: the script names one repository | Source read |
| Wiki, discussions, projects, attachments | Both hosts, where enabled | **No**; whether they are enabled here was not checked | Not looked at |
| **A page of this library served through the published skill** | Every session that fetches it, and the pool's field pages when it ships (`GE-Workshop#342`) | Only as a page, before it leaves | Per the Workshop's message; not verified here |
| **A document published as a hosted artifact** | The host's address, private until shared | **No**, by any check on record | One was published by hand in November and screened by reading |
| **Chat rooms and cross-session messages** | Their own stores | **No** | No screening on record |
| **A transcript** | Local, never pushed | Not applicable to the push half; the rule *print a name and a length* covers it (`method/screening.md`) | Documented |

**Seven of the fourteen rows are not read by the check at all, and two more (the published skill, the transcript) are read only in part or by a different rule.** That count is this page's reading of the table, and the
table is a reading of one script: a surface this library does not know it has is, by construction, not in it.

## The leaks of 26 and 27 September, classed

`method/screening.md` holds the totals: **twenty-two leaks, none in a page**, sixteen of them on the two forges
and six off them. This page does not repeat them; it classes them. **The record is thin on what each one was:**
the text is withheld by design (a leak is never written down in the record of its fix), and the originals sit in
a backup outside every repository, which was not opened for this page because it holds the names.

**By surface, the sixteen on the forges:** a label description (1), issue bodies (4), comments (9 on GitHub, 1 on
the private forge) and a pull request body (1, this instance's own). **By author, as far as the record says:** one
by this instance, one by another instance on its own artifact (raised there, because one author owns an artifact),
and the rest of the GitHub entries mostly from the first half of September, before anyone was screening beyond
pages. **The record does not say who wrote each of the fourteen**, and a count by author would be a guess.

**By why the check missed it. Three reasons recur:**

1. **The check read pages only.** Until 2026-09-26 no script read a label, an issue, a comment or a pull request.
2. **The mirror holds things the forge does not.** The label that started it was a GitHub-side label that had
   never come from the forge, so a check of the forge would not have found it.
3. **Edit history is invisible to a reader of current text.** Four issue bodies were redacted and still kept an old
   version holding the names; the check read clean while they stood, and only the Composer's hand could clear them.

**By what removing it cost.** On the private forge, the text was redacted and old versions were left, the Composer's
ruling of 2026-09-27. On GitHub, a comment was reposted redacted and the original deleted (nine of them), a body was
edited and its old versions needed a person's hand (four), and a label was reworded. **The cost is highest where the
host is public and the leak is in an edit history**, which is also where the check is blind.

**The six off the forges** are four credential files printed into a session (three habits: a file read whole, a
masking pattern that matched the wrong names, a read that assumed the shape `NAME=value`) and two secrets put into
chat as text. **One more leak is recorded on the same page**, the line that proved the screening listing the terms it screened for; the record does not say whether it is one of the twenty-two.

**The counts do not reconcile in the record, and this page does not force them to.** The first run said 17 hits,
then 16 on GitHub plus one on the private forge; the later total says 14 on GitHub and 2 on the forges. One note
says 11 comments and the next says 9. **Hits and texts are different units**, which would explain some of it; the
record does not say it does.

## The classes, as cases a scanner must catch

For the Workshop's classes (`GE-Workshop#349`). **Each is a case that happened, so each is a test the scanner
should pass; none is a promise that the next leak will look like one of them.**

- **A term in a label description,** on the mirror, with no counterpart on the forge.
- **A term in an old version of an issue body or a comment**, where the current text is clean.
- **A term in a comment on an artifact another instance owns**, where the reader must route and not edit.
- **A term in the Library's own pull request body**, written by the instance that runs the check.
- **A term glued inside a longer word**, which a whole-word match misses, and **a short term inside a hash or a
  dump**, which a substring match fires on 140 times in one measured case. The check holds both by letting a term
  say whether it matches anywhere.
- **The proof line that lists the terms.** A result quoted as verification is itself a publish.
- **A credential read by a shape the hook's list of verbs does not name.**
- **A surface that did not answer**, which must read as *could not look* and never as clean.

**What no class can give is a term nobody thought of.** The screening is a list of terms, and every case above was
a term already on it. That limit is the one that stood when the Composer waived his glance on 2026-11-20, as publication became automatic.

## What this page does not do

**It names no term and no credential path.** Those belong to the machine and not to a library.

**It does not say who owns the whole path.** The screening and the publish command are the Workshop's, the outside
check of the tower's web port is the tower's, and the inventory and the classes are the Library's: the Composer's open
question 3 on the brief is whether one owner holds all of it.

**It does not close a gap.** Each **No** in the inventory is a place the check is blind, listed so the Workshop's
scanner and the Composer's choice of owner can see it; reading a row is not covering it.

## What would test it

Run the Workshop's scanner over a fixture that holds one case of each class above, and a clean fixture with a short
term inside a hash; it should list the first and pass the second. That is the Workshop's test, and it has not run.
