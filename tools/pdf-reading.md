---
type: Tool
title: "Tool: Reading a PDF (Claude Desktop, this machine)"
description: "Reading a PDF on a Claude Desktop machine: four routes tried, one worked — and why a viewer that displays a document returns nothing to the orchestra"
status: draft
serves: [User Researcher]
serves_all: true
generated: { by: human:jkornobis, at: 2026-08-16T21:24:05+02:00 }
---

# Tool: Reading a PDF (Claude Desktop, this machine)

Audited 2026-07-29 by User Researcher, on a real 4.9MB PDF the Composer put on his Desktop. Four routes tried,
one worked. Written because the first three failures each looked like "PDFs can't be read here",
which is false — and because the Composer asked to be able to hand over a PDF without ceremony.

Re-audit: 90 days — default, not measured (local routes: `pypdf`, the native `Read` tool, a `pdf-viewer` config gap — none has a vendor release cycle driving it)

## Critical (verified this session)

- **Any musician — `pypdf` via Bash is the working route.** One command, no dependency install, text
  out. Verified on `Extended figma method.pdf`: 12,962 characters extracted from a single tall page.

  ```bash
  python -c "
  import pypdf
  r = pypdf.PdfReader(r'C:\path\to\file.pdf')
  print('\n'.join((p.extract_text() or '') for p in r.pages))
  "
  ```

  **Write the extract to a repo file before working on it** — it versions the source before anything
  edits it, and it means the extraction is done once rather than per read.

- **User Researcher — the page count in the file picker is not the page count in the file.** The client reported
  *51 pages*; `pypdf` reported **1**. A Figma frame exported to PDF is one very tall page, and the
  viewer paginates it for display. Believe the library, not the chrome.

- **Any musician — the native `Read` tool does NOT work for PDFs on this machine.** It shells out to
  `pdftoppm` (poppler-utils), which is not installed and is not trivially installable on Windows.
  Error: *"pdftoppm is not installed."* This has bitten before — the 2026-07-21 industrialization work
  hit the same wall and also fell back to `pypdf`.

- **Any musician — the internal browser SHOWS a PDF to the Composer and stays opaque to the orchestra.**
  Corrected 2026-07-29 after the Composer screenshotted the result: `navigate` to a `file:///…pdf`
  *does* render it, correctly and legibly, **in his pane** — while `get_page_text` answers *"No site
  is open in this tab."* The call is a **display** action, not a read: it puts the document on the
  Composer's screen and gives the orchestra nothing. Useful on purpose (*"look at this with me"*),
  useless for extraction. "It fails" was the wrong description and would have retired a working
  capability.

- **User Researcher — the viewer independently confirmed the page count.** The Composer's pane reads **1 / 1**,
  matching `pypdf` and contradicting the file picker's "51 pages". Two instruments agree; the chrome
  was wrong.

- **Any musician — the `pdf-viewer` extension is installed but has no allowed directories.**
  `display_pdf` on a local path returns *"Local file not in allowed list … Allowed directories:"*
  (empty). Not a capability failure — a configuration gap.

## Recommended (Composer to accept/decline)

- **Composer — configure `pdf-viewer`'s allowed directories** (Claude Desktop → *Paramètres* →
  *Extensions* → **pdf-viewer** → *Configurer*), adding at least the Desktop and this repo. That
  unlocks the route the Composer actually asked for: `display_pdf` renders the PDF in a viewer he can
  see, and `interact` then supports `get_text`, `search`, `get_screenshot`, annotations and form
  filling on the same document. It is strictly better than `pypdf` for anything visual — `pypdf`
  returns text only and loses layout, tables and images entirely. — status: **proposed**

- **User Researcher — re-audit after that change.** Everything above is true of the current configuration, and
  the "critical" facts about the browser and `Read` stay true regardless; only the `pdf-viewer` line
  should move. — status: proposed
