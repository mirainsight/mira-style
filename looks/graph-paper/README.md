# Graph Paper

A clean study sheet: a faint exam-paper grid behind the header, ink-blue like an exam pen, a serif title over plain sans text, and monospace for paper codes. Calm, scannable and practical, in day and night.

**First made for:** Mira's tuition topic lists, starting with every Cambridge 9709 Pure 1 circle question since 2020, sorted by the idea each one tests and linked to exam-mate. [`example/`](example) is that page. It holds public exam references only, and the third-party circle-theorems sheet from the original is left out.

## In Mira's words

**Why this look?**
I wanted it clean and easy for students to scan, like a proper exam reference sheet, nothing distracting.

## Files

- `tokens.css` / `tokens.json`: colours for day and night, fonts, type sizes, spacing and radii.
- `example/index.html`: a topic list with filter chips, search and a day/night toggle.

## Voice

Plain and teacherly. Say what each question tests in a short line ("Tangent through (10, 0) with gradient m: two values of m"). A tip names an order or a pairing ("Teaching order: …", "Pair these with Q13(a) …"). Buttons say what they do ("Open ↗", "Dark", "Light").

## Visual foundations

- **Paper.** `bg` ground. Only the header carries the 22px grid (two 1px `grid` lines), like squared exam paper. The rest of the page is plain.
- **Ink.** `accent` (ink blue) for the eyebrow, links, the selected chip and focus rings. `star` (highlighter amber) only for "start here" tags and the callout's left edge.
- **Type.** Newsreader (`display`, 600) for the title and section heads. IBM Plex Sans (`body`) for text. IBM Plex Mono (`mono`) for the eyebrow, column labels and paper codes, with `tabular-nums`.
- **Sheets.** Tables sit on a `surface` sheet with a 1px `line` border and 6px corners. Rows are split by hairline rules. No shadows.
- **Callout.** One per page: `star-soft` fill, 3px `star` left edge.
- **Controls.** Pill chips filter by group. The selected chip is filled `accent`. A search box sits on the same row and wraps on phones.
- **Layout.** One column up to 920px with a 16px gutter. On phones, table rows turn into two-line cards (code and link, then the description).
- **Themes.** Day on `:root`, night by system setting or `data-theme="dark"`. A small pill toggle at the top right switches them and remembers the choice.

## Motion

None. It's a reference sheet.
