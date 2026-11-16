# Meadow

A real photograph of a wind-blown field of grass and wild white flowers, full bleed, with cream words set straight onto it: a script name, a line of Scripture in italic serif, and big Bodoni numbers. Below it, a linen sheet rises over the photo and holds everything else in quiet serif type. Calm, slow and soft, with film grain.

**First made for:** Sparrow, Mira's food-awareness app: snap what you eat, see why you ate it, and pause before eating out of fear of being hungry later. [`example/`](example) is that app with made-up sample meals (the partner is called "Sam" here). It started from editorial church-invite references (linen, clay, a table set, script against a heavy serif) and became personal once Mira brought the meadow photo.

## In Mira's words

**Why this look?**
Meadow, to mimic the fields that God clothes, in which the sparrow abides, which God also feeds. A look to calm my soul, and to pause and be mindful of my actions.

(Matthew 6:26–30: the birds of the air, and the grass of the field.)

## Files

- `tokens.css` / `tokens.json`: colours for day (linen) and night (candlelight), fonts, sizes, radii.
- `backgrounds/meadow.jpg`: the meadow photo. Mira's, under the art licence.
- `example/index.html`: Sparrow with sample meals. It runs without Claude; meals you add stay in your browser.

## Voice

Talks to you like someone who cares, in short plain lines, never like a fitness app. "You're fed. Room for ~660 more." "That's enough for today." "It's been a while, love. Eat something steady." Nothing is ever red, there are no streaks, and a day over the range is "Well fed today. Tomorrow is new." Scripture is quoted in the KJV with its reference in small caps.

## Visual foundations

- **The photo is the hero.** Full bleed, `background-size: cover`, positioned a little above centre. Over it: a top-to-bottom wash (darker at the very top and bottom) and a left-to-right shade at `--shade` (0.35) behind the text column, so the right side stays bright. Never fake the photo with gradients; a real photo is the point.
- **Words on the photo.** All `cream`, left-aligned, with a soft text shadow. **No highlight bands by default.** Highlights (`.hl`, per-line bands) are an option for very busy photos only.
- **Type.**
  - Pinyon Script, once, for the name (80px).
  - EB Garamond for every sentence and name; italic for the verse line and soft asides.
  - Bodoni Moda for numbers, lining figures: the hero number at 64px, then figures at 30px.
  - Labels and the main button in EB Garamond 600 caps, 0.16–0.18em tracking.
  - Jost only for small UI text on paper.
- **Figures, not sentences.** Numbers that change through the day sit in a row of three (value in Bodoni, a caps label, a small italic note), divided by hairlines. One short status line above them.
- **The sheet.** Below the photo, a `paper` sheet with 28px top corners overlaps the photo by 28px. Stats sit in a 2x2 grid of hairline cells; lists are rows with hairlines, not cards.
- **Buttons.** The main action is a `cream` button with 6px corners and serif caps. Secondary actions are round translucent icon buttons beside it, or an italic underlined serif line ("I feel like eating, but I'm not sure…"). Tabs are plain serif words with an underline.
- **Colour.** Sage `accent` marks what the body asked for, clay `accent-2` marks the other pulls. Clay is never used as a warning.
- **Photos of food.** Tall cards (132x168, 18px corners) in a swipeable strip; a meal with no photo shows its first letter in the script face on a sage wash. A drink carries only a small round cup icon, no word.
- **Grain.** A fractal-noise grain over the whole page (0.22).
- **Themes.** Linen day on `:root`; candlelight night by system setting or `data-theme="dark"`. The photo stays the same and its wash deepens at night.

## Motion

Barely any: sheets slide up, the day's line eases to its new length. Off under reduced motion.
