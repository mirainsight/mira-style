# Rosé Ledger

A money app on ledger paper: heavy serif numbers you can't miss, typewriter figures, pastel summary tiles, thick status-coloured bars and one marigold sticker. Clean like a printed budget planner, with enough colour to feel friendly rather than serious. Day and night.

**First made for:** Duit Duo, a phone-first budget app prototype for Mira and her husband: what's left to spend, logging a spend in one tap, spending habits, and claims. [`example/`](example) is that prototype with made-up sample data (the partner is called "Sam" here).

## In Mira's words

**Why this look?**
I wanted the clean aesthetic of a printed budget planner. But fully minimal made the important things hard to see, so it just needed some colour. My favourite colours are maroon and burgundy, and my husband's is navy, but those dark colours alone make it too serious, so it's a lighter mix of the two.

## Files

- `tokens.css` / `tokens.json`: colours for day and night, fonts, type sizes, spacing and radii.
- `example/index.html`: the clickable prototype (Home, Log a spend with Shortcut demos, Insights, Habits, Claims) with a day/night toggle.

## Voice

Plain and warm, talking to the person whose money it is ("You have RM 1,284 left this month", "RM 57 a day for 22 days"). Status words are short: On track, Spending fast, Over, Fixed. Buttons say what they do ("Mark paid", "Save RM 14.90 · Coffee").

## Visual foundations

- **Paper.** `paper` ground with 44px `rule` lines that scroll with the content, like a ledger. Cards are `sheet` with a 1px `line` border, 22px corners and a soft shadow.
- **Ink.** Wine-black `ink`, never pure black. The big number ends in a full stop in `accent`.
- **Two people, two colours.** `accent` (raspberry burgundy) is Mira, `shaun` (denim) is the partner. Use them for dots, split bars and the "who paid" badge.
- **One pop.** `sun` (marigold) for the round, slightly rotated sticker with the daily amount, highlight marks and the active-tab dot. One or two per screen.
- **Tiles.** Four pastel tiles (sage, rose, butter, cornflower) for summary numbers. Each is a 24 to 30% mix of its tint into the sheet, with text in a darker mix of the same tint, so they work in day and night.
- **Status.** `good` on track, `warn` spending fast, `bad` over. Bars are 8 to 12px and fully rounded.
- **Type.** Fraunces 800 (tracking −0.035em) for the hero number and card titles; Fraunces 500 for row names. Hanken Grotesk for text. JetBrains Mono for figures (tabular) and for eyebrows in uppercase with 0.22em tracking.
- **Rows.** Name, dotted leader, figure, then the bar, like a printed planner.
- **Controls.** Pill segmented controls and chips; selected ones fill with `ink`. The add button is a round `ink` button lifted out of the tab bar.
- **Themes.** Day on `:root`, night by system setting or `data-theme="dark"` (a warm neutral dark, not tinted green or blue). A round toggle in the header switches them and remembers the choice.

## Motion

Small and purposeful: the hero number counts up when it changes, bars ease to their new width, the add sheet slides up, and a receipt scan line sweeps once. All off under reduced motion.
