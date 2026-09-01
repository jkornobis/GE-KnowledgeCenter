---
type: Protocol
title: "Widget templates — the persona map and the recurring markup"
description: "The emoji and colour per musician that every attribution line is drawn from, plus four blocks of markup reproduced verbatim — Note Picker, Auditorium, stat tiles and the coverage matrix — so a widget is rebuilt rather than reinvented"
status: draft
generated: { by: human:jkornobis, at: 2026-08-28T16:46:45+02:00 }
---

# Widget templates — the persona map and the recurring markup

*Roadmap note 6 (ADR-101). The recurring `show_widget` patterns as canonical, verbatim-reproducible templates. `presentation.md` is the **spec** (why + rules); this is the **source** (exact markup to copy). When a pattern below fits, reproduce it and change only the content — do not re-derive the structure from prose each time.*

**What this fixes, honestly:** it removes per-widget structural re-derivation and prevents broken-first-try rebuilds (the real time-sink). It does **not** make the rendered output faster to emit — a `show_widget` call still streams all its tokens each time; there is no cached component in chat. The consistency and the avoided rebuilds are the win.

The other half of note 6 — real Astro components on `docs-site/`, written once and reused by reference — has shipped (ADR-127): `PivotTable.astro`, `StatTiles.astro`, and `SaveFooterButton.astro` in `docs-site/src/components/`, backed by a single persona-map source at `docs-site/src/data/musicians.ts` (mirrors the table below — update both together). **`PivotTable.astro` is now stale against the Note Picker merge below (ADR-197, 2026-07-27) — not yet ported.** Flagged, not silently left inconsistent: the chat-side template is the current standard; the docs-site component still reflects the old Pivot table until someone does that port. **Scoped 2026-08-06 (ADR-254), on the Composer question that caught the over-claim — *does the pivot table respect main branch definition?*: it does. The component is byte-identical on `main` and `dev`, and `main` has never heard of the Note Picker, so on the branch the site actually deploys from it is not stale at all — it is note 6 as shipped (ADR-127). *Stale* here is a dev-only statement about a dev-only standard, and the published site contradicts nothing.**

**Attribution cards were removed 2026-07-23.** `SpeechCard.astro`, `EnsembleCard.astro` and `UnisonRow.astro` are gone, along with their chat templates: a card that renders slowly or silently fails leaves a turn with no attribution, which is worse than a plain line. Voices are markdown lines everywhere now — see the persona map's emoji column below, and `AttributionExamples.astro` on the "How to read the orchestra" page.

Every template here is a **result** surface (tables, tiles, pickers) — never attribution. Each carries: the Material Symbols font link, an `sr-only` heading for screen readers, `var(--…)` tokens for light/dark, and a shared 12px-radius `0.5px` border. Keep those verbatim.

---

## Persona map — the single source (icon + colour)

Copy these exactly; never re-guess an icon or hex. Text-on-light contrast note: for a tier/priority *word*, use the darker shade in the right column, not the fill hex.

Colours are **DXC brand-derived** (2026-07-23). Each musician is a lightness step
along its *family's* brand hue, so a chip reads family-first, musician-second.
Two hexes per musician because one usually can't clear contrast against both a
near-white and a near-black surface — same constraint as the tier words below.
Strings is the exception: brand Red clears both (4.14:1 Canvas, 4.12:1 Midnight),
so its three chairs carry one value each. Default to the dark column when the
rendering surface is unknown.

The palette these replaced was invented, not brand-derived, and failed colour-vision
testing outright: Agile Auditor `#7F77DD` vs Software Engineer `#378ADD` measured ΔE **0.6**
under deuteranopia — indistinguishable. Within a family the step is small by design
(clearly legible at a shared edge, quiet in isolation), so **never let colour be the
sole signal** — the icon and label carry identity, which is what a dichromat reads.

Two deliberate trades to know before reusing these: **Woodwinds is green**, a hue DXC
doesn't ship — built at 153°, the midpoint of the palette's own 155° empty arc, at its
mean chroma, because Sky read as merely one more blue. And in **light** surfaces
**Strings and Harp sit at ΔE 9.4** under deuteranopia — accepted knowingly, and only
safe because every family is rendered with an icon and a text label beside its colour.
Never show a family as bare colour.
Mirrored in `docs-site/src/data/musicians.ts` as `--mus-*` CSS variables; update both together.

**Emoji column = THE attribution format** (not a fallback — the only one, since 2026-07-23).
Format: `🎨 **UX Designer** — design & UX`. One line per voice; **line count tracks distinct
positions, not attendance** — names joined on one line means the quorum agrees, said once.
The emoji is the only glyph carrying colour in terminal markdown, so it does the job the
dot hex does on a rendered surface; it can't match the hex, and that's fine. Picks mirror
each chair's Material icon (`palette`→🎨, `architecture`→📐, `code`→💻) — never instrument
or metaphor picks. The dot hexes remain for docs-site components and result widgets.

| Musician | Material icon | Emoji (attribution) | Dot hex — dark | Dot hex — light | Family | Subtitle |
|---|---|---|---|---|---|---|
| Agile Facilitator | `hub` | 🔀 | `#2E5BC0` | `#00318D` | Lead & meta | routing & synthesis |
| Agile Auditor | `hearing` | 👂 | `#4469D1` | `#173E9D` | Lead & meta | pattern detection |
| UX Designer | `palette` | 🎨 | `#C73E00` | `#C73E00` | Strings | design & UX |
| Design Engineer | `integration_instructions` | 🔗 | `#D14600` | `#D14600` | Strings | design-to-code fidelity |
| Content Designer | `edit_note` | ✏️ | `#DB4E0B` | `#DB4E0B` | Strings | copy & vocabulary |
| Accessibility Specialist | `accessibility_new` | ♿ | `#00904D` | `#00914E` | Woodwinds | accessibility & standards |
| QA Engineer | `fact_check` | ☑️ | `#18A05B` | `#0DA15C` | Woodwinds | testing & DoD |
| Software Engineer | `code` | 💻 | `#3D8DF6` | `#177CE3` | Brass | code & APIs |
| Software Architect | `architecture` | 📐 | `#4995FF` | `#2B84EB` | Brass | process & versioning |
| Reliability Engineer | `dns` | 📶 | `#549DFF` | `#3A8BF4` | Brass | reliability & runtime |
| Product Owner | `explore` | 🧭 | `#F6A639` | `#B36E00` | Harp | purpose & scope |
| User Researcher | `travel_explore` | 🔍 | `#FFB649` | `#C57D00` | Harp | research & sourcing |

**Family colours** (the layer above — use for family chips and hulls):

| Family | Dark | Light | DXC anchor |
|---|---|---|---|
| Lead & meta | `#2E5BC0` | `#003795` | Royal `#004AAC` |
| Strings | `#D14600` | `#D14600` | Red `#D14600` — same both themes |
| Woodwinds | `#009854` | `#0CA15C` | derived green (see note) |
| Brass | `#4995FF` | `#3B8CF5` | True Blue `#4995FF` |
| Harp | `#FFAE41` | `#C57D00` | Gold `#FFAE41` |

**Priority / tier colours** (pivot tables, roadmaps): edge colours are themeless (decorative, 3:1 non-text threshold) — critical/2.0-defining `#FFAE41`, impactful `#004AAC`, recommended `#888780`. **Word colours are theme-dependent** (found via docs-site-a11y CI, ADR-135 — a single hex can't clear WCAG AA 4.5:1 against both a near-black and a near-white background): critical/2.0-defining word `#8A5B10` on light / `#D9A441` on dark; impactful word `#004AAC` on light / `#6EA8F5` on dark; recommended word `#5F5E5A` on light / `#B5B3AC` on dark. `show_widget` in chat can't detect the client's theme, so pick the pair matching the Composer's actual rendering surface if known, or default to the dark-mode value (docs-site defaults dark too).

---

## Note Picker — ranked, selectable, drag-to-reorder, adopt-as-Program (ADR-197, supersedes the Pivot table and the Roadmap-note picker)

**Composer-approved 2026-07-27**, replacing two templates that solved the same problem with duplicated logic: the old Pivot table had selection but no per-item structure; the old Roadmap-note picker had the structure (musician, tier, cost, description) but no bulk selection or reordering. One widget now:

- **Body = the old Roadmap-note picker's card**: owning-musician chip (icon + name), impact tier (coloured left edge + word — gold `#FFAE41` critical, Royal blue `#004AAC` impactful, grey `#888780` recommended), and a one-line description. Impact and effort are a **stacked badge at top-right** — not one more row under the description — so the description gets the row's full width.
- **Effort is its own arrow + colour scale, distinct from impact's gold/blue/grey so the two axes never read as one** (Composer-specified, 2026-07-27): ➡️ low, ↗️ medium, ⏫ high. **Measured 2026-08-06 (ADR-252), no longer a first pass — `node scripts/check_widget_contrast.mjs`.** All six clear WCAG AA 4.5:1 on their own surface (Canvas `#F6F3F0` / Midnight `#0E1020`): low **5.62** light / **8.73** dark, medium **6.09** / **12.11**, high **9.36** / **8.47**. And because green→amber→red is the classic dichromat trap, the same script simulates **deuteranopia** (Viénot 1999) and measures CIE76 ΔE between the three: light **9.0 / 20.5 / 12.2**, dark **14.8 / 32.9 / 29.0** — all above the ΔE 3 that means *the same colour to that eye*, with light-mode low↔medium the weakest at 9.0. The arrows and the words carry the distinction regardless; these numbers say how much the colour adds: low `#3B6D11` light / `#8FBF4D` dark, medium `#854F0B` light / `#FAC775` dark, high `#791F1F` light / `#F09595` dark.
- **Selection = the old Pivot table's mechanics**: whole-row click toggles, a checkbox mirrors it, select-all with indeterminate state, a bulk "Adopt selected as Program ↗" footer.
- **New: drag-to-reorder.** A grip (`⠿`) on each row; dropping it renumbers every row live, top-to-bottom, so the Program number always matches the *current* visual order, not the original data order. Adopting sends the selected rows' numbers in whatever order they're sitting in now — the point of dragging is re-sequencing the plan, not just filtering it.

```html
<style>
.np-row{display:flex;align-items:stretch;border:0.5px solid var(--border);border-radius:10px;margin-bottom:8px;overflow:hidden;background:var(--surface-2)}
.np-row.sel{background:var(--bg-accent)}
.np-row.drag{opacity:.4}
.np-grip{display:flex;align-items:center;padding:0 2px 0 10px;color:var(--text-muted);font-size:14px;cursor:grab}
.np-chk{align-self:center;margin:0 8px}
.np-edge{width:4px;flex:none}
.np-body{flex:1;padding:12px 14px 12px 6px;min-width:0}
.np-top{display:flex;align-items:flex-start;gap:10px}
.np-num{font-size:12px;font-weight:600;color:var(--text-muted);width:16px;padding-top:2px}
.np-title{font-size:15px;font-weight:500;line-height:1.3}
.np-chip{display:inline-flex;align-items:center;gap:4px;font-size:11.5px;color:var(--text-secondary);border:0.5px solid var(--border);border-radius:6px;padding:2px 7px;margin-left:8px;white-space:nowrap}
.np-badge{margin-left:auto;display:flex;flex-direction:column;align-items:flex-end;gap:3px;flex:none}
.np-tier{font-size:11.5px;font-weight:500}
.np-eff{font-size:11.5px;font-weight:500;display:inline-flex;align-items:center;gap:3px}
.np-desc{font-size:13px;color:var(--text-secondary);margin:6px 0 0;line-height:1.5}
</style>
<label style="display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--text-secondary);cursor:pointer;margin-bottom:10px">
  <input type="checkbox" id="np-all" style="width:16px;height:16px"> select all
</label>
<div id="np-rows">
  <div class="np-row" draggable="true" data-x="EXPAND_PROMPT"><div class="np-grip">⠿</div><input type="checkbox" class="np-chk"><div class="np-edge" style="background:#EDGE_HEX"></div><div class="np-body"><div class="np-top"><span class="np-num">1</span><span class="np-title">IDEA<span class="np-chip">EMOJI CHAIR</span></span><div class="np-badge"><span class="np-tier" style="color:#TIER_WORD_HEX">TIER</span><span class="np-eff" style="color:#EFFORT_WORD_HEX">ARROW effort</span></div></div><div class="np-desc">WHY, one line.</div></div></div>
  <!-- repeat rows; np-num is renumbered live on drop, not authored -->
</div>
<div style="display:flex;align-items:center;justify-content:space-between;margin-top:10px;gap:12px;flex-wrap:wrap">
  <button id="np-adopt" style="font-size:13px" disabled>Adopt selected as Program ↗</button>
  <button id="np-save" style="font-size:12px;color:var(--text-secondary)">Save to Recorded session data ↗</button>
</div>
<script>
(function(){
  const rows=()=>[...document.querySelectorAll('#np-rows .np-row')];
  const all=document.getElementById('np-all'),adopt=document.getElementById('np-adopt'),save=document.getElementById('np-save');
  const renumber=()=>{rows().forEach((r,i)=>{r.querySelector('.np-num').textContent=i+1;});};
  const sync=()=>{const r=rows(),s=r.filter(x=>x.classList.contains('sel'));adopt.disabled=!s.length;adopt.textContent=s.length?('Adopt '+s.length+' as Program ↗'):'Adopt selected as Program ↗';all.checked=s.length===r.length;all.indeterminate=s.length>0&&s.length<r.length;};
  rows().forEach(r=>{
    const cb=r.querySelector('.np-chk');
    r.addEventListener('click',e=>{if(e.target===cb||e.target.closest('.np-grip'))return;cb.checked=!cb.checked;r.classList.toggle('sel',cb.checked);sync();});
    cb.addEventListener('change',()=>{r.classList.toggle('sel',cb.checked);sync();});
    r.addEventListener('dragstart',()=>r.classList.add('drag'));
    r.addEventListener('dragend',()=>{r.classList.remove('drag');renumber();});
    r.addEventListener('dragover',e=>{
      e.preventDefault();
      const dragging=document.querySelector('#np-rows .np-row.drag');
      if(!dragging||dragging===r)return;
      const rect=r.getBoundingClientRect();
      const before=(e.clientY-rect.top)<rect.height/2;
      r.parentNode.insertBefore(dragging, before?r:r.nextSibling);
    });
  });
  all.addEventListener('change',()=>{rows().forEach(r=>{r.classList.toggle('sel',all.checked);r.querySelector('.np-chk').checked=all.checked;});sync();});
  adopt.addEventListener('click',()=>{const sel=rows().filter(r=>r.classList.contains('sel'));const n=sel.map(r=>rows().indexOf(r)+1);if(n.length)sendPrompt('Program: '+n.join(', '));});
  save.addEventListener('click',()=>sendPrompt('Save to Recorded session data: TITLE'));
})();
</script>
```

Musician chip emoji/icon come from the **persona map** above — never re-guess. Rule 0 in `presentation.md` still applies: shown only when *which items to pursue, and in what order* is genuinely the Composer's call.

---

## Auditorium — the same body, zero interaction (ADR-197)

Auditorium is single-shot and self-closing (`triggers.md`): twelve ideas appear once, ranked, and the Composer acts on the numbers by *typing* `Program: n, m`, never by clicking. It reuses the Note Picker's exact card body and spacing — bold title, musician chip, full-width description, impact badge top-right — with every interactive affordance removed: no grip, no checkbox, no select-all, no effort badge (Auditorium has no effort dimension, only impact), no adopt button, no `<script>` at all.

```html
<style>
.au-row{display:flex;align-items:stretch;border:0.5px solid var(--border);border-radius:10px;margin-bottom:8px;overflow:hidden;background:var(--surface-2)}
.au-edge{width:4px;flex:none}
.au-body{flex:1;padding:12px 14px}
.au-top{display:flex;align-items:flex-start;gap:10px}
.au-num{font-size:12px;font-weight:600;color:var(--text-muted);width:16px;padding-top:2px}
.au-title{font-size:15px;font-weight:500;line-height:1.3}
.au-chip{display:inline-flex;align-items:center;gap:4px;font-size:11.5px;color:var(--text-secondary);border:0.5px solid var(--border);border-radius:6px;padding:2px 7px;margin-left:8px;white-space:nowrap}
.au-tier{font-size:11.5px;font-weight:500;margin-left:auto}
.au-desc{font-size:13px;color:var(--text-secondary);margin:6px 0 0;line-height:1.5}
</style>
<div id="au-rows">
  <div class="au-row"><div class="au-edge" style="background:#EDGE_HEX"></div><div class="au-body"><div class="au-top"><span class="au-num">1</span><span class="au-title">BEST IDEA<span class="au-chip">EMOJI CHAIR</span></span><span class="au-tier" style="color:#IMPACT_WORD_HEX">high</span></div><div class="au-desc">One line elaborating the idea, if it needs one.</div></div></div>
  <!-- repeat, one row per musician, ranked descending by impact (Product Owner's pass) -->
</div>
```

---

## Stat tiles — status / KPI at a glance

```html
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px">
  <div style="background:var(--surface-1);border-radius:8px;padding:1rem">
    <div style="font-size:13px;color:var(--text-secondary)">LABEL</div>
    <div style="font-size:24px;font-weight:500;color:var(--text-primary);margin-top:4px">VALUE</div>
  </div>
  <!-- repeat tile -->
</div>
```

---

---

## Coverage matrix — a table whose cells are a status, not a sentence (ADR-241)

For a **matrix**: rows are things of one kind, columns are the same question asked of each, and the
answer per cell is drawn from a **fixed vocabulary**. Reach for this when a Note Picker would be wrong
because the rows are not selectable work — a coverage table, a capability grid, a per-surface audit.

Two rules that make it a matrix rather than a table of prose. **The status column comes from a closed
set** `[standing]` — three or four words, defined in the legend below the table, never free text; if a cell needs a
sentence to say what it is, the vocabulary is missing a word. And **an absence is rendered as an
absence** (`none`, muted italic) rather than left blank: a blank cell cannot be told apart from a cell
nobody filled in, which is the same defect a zero-that-means-unmeasured has.

Status colours reuse the tier words above — gold `#D9A441` dark / `#8A5B10` light for the state that
needs attention, Royal `#6EA8F5` / `#004AAC` for the healthy one, grey `#B5B3AC` / `#5F5E5A` for
"not applicable here". Never a red/green pair alone `[standing]`: the whole point of the word beside the colour is
that a dichromat reads the word.

```html
<style>
.mx-wrap{overflow-x:auto;border:0.5px solid var(--border);border-radius:12px;background:var(--surface-2)}
table.mx{width:100%;border-collapse:collapse;font-size:13px;min-width:520px}
table.mx th{text-align:left;font-weight:600;color:var(--text-muted);font-size:11px;text-transform:uppercase;letter-spacing:.06em;padding:10px 14px;border-bottom:0.5px solid var(--border);white-space:nowrap}
table.mx td{padding:12px 14px;border-bottom:0.5px solid var(--border);vertical-align:top;color:var(--text-secondary);line-height:1.5}
table.mx tr:last-child td{border-bottom:none}
table.mx td.layer{color:var(--text-primary);font-weight:500;white-space:nowrap}
.st{display:inline-flex;align-items:center;gap:5px;font-size:11.5px;font-weight:600;border-radius:6px;padding:3px 8px;white-space:nowrap}
.miss{color:#D9A441;font-weight:600}
.none{color:var(--text-muted);font-style:italic}
.legend{display:flex;flex-wrap:wrap;gap:14px;margin-top:10px;font-size:11.5px;color:var(--text-muted)}
.legend span b{color:var(--text-secondary)}
</style>
<h2 class="sr-only">ONE SENTENCE saying what the matrix shows and where its gap is.</h2>
<div class="mx-wrap">
<table class="mx">
  <tr><th>ROW LABEL</th><th>Status</th><th>COLUMN A</th><th>COLUMN B</th></tr>
  <tr>
    <td class="layer">ROW <span style="color:var(--text-muted);font-weight:400">(COUNT)</span></td>
    <td><span class="st" style="color:#STATUS_HEX;border:0.5px solid #STATUS_HEX">STATUS WORD</span></td>
    <td><code>VALUE</code></td>
    <td><span class="miss">what is missing</span> — where it actually lives</td>
  </tr>
  <!-- repeat one row per thing; an empty cell is <span class="none">none</span>, never blank -->
</table>
</div>
<div class="legend">
  <span><b>STATUS WORD</b> — what it means, one clause</span>
</div>
```

## Roadmap-note picker — retired 2026-07-27 (ADR-197)

Superseded by **Note Picker** above, which is this template's body (musician chip, impact tier, description) plus the Pivot table's selection mechanics plus new drag-to-reorder. Kept here as a one-line pointer, not a live template, so a stale link doesn't dead-end: the original (ADR-172, 2026-07-19) is in git history if the exact prior markup is ever needed.
