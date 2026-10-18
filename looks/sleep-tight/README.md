# Sleep Tight

A cozy nursery-print postcard: olive and sage stripes frame a cream card, a smiling mustard star, big bouncy plum handwriting with a mustard pop-out shadow, and a stamp and postmark in the corner. Quiet, warm and a little sweet.

**First made for:** Mira's Post Copier, the page she writes her Telegram channel posts in. A post is written like a message on the back of a postcard, titled in big hand lettering, and the copy button is the "send". [`example/`](example) is that page with made-up sample content. It started from a "Sleep tight" star poster (olive stripes, mustard star, plum lettering).

## In Mira's words

**Why this look?**
I wanted it to be a postcard as a time capsule to myself: a thought and reflection shared in the present, for the future me. I liked the vibrancy of this style, and wanted to explore a bright dreamer look.

## Files

- `tokens.css` / `tokens.json`: colours, fonts, sizes, spacing, radii and the title font variants.
- `doodles/`: the doodle set the look is built with. See [`doodles/README.md`](doodles/README.md): the stars are not bundled in this public repo.
- `example/index.html`: the postcard page (write a post, copy it for Telegram).
- `example/fonts.html`: every title font variant, with a box to try your own title.

## Voice

Short, warm, personal. A soft sign-off ("— mira"), a whispered footer line ("dream bright"), an address block ("To: Dear friends / From: Mira"). Lowercase hand notes. Stars close a thought.

## Visual foundations

- **Frame.** Vertical stripes, 30px dark `olive` and 30px light `sage`, around the whole card (34px of frame on each side). The doodles ride in the frame and overlap the card edge like stickers.
- **Paper.** A `cream` card, slightly tilted (-1.2deg), with soft shadow and a fractal-noise paper grain over it (multiply, 35%).
- **Ink.** One ink, `plum`, for every word and drawn line. Never black. `mustard` is the accent and only appears as the title's shadow and in the stars.
- **Type.** A handwritten face for the title (`title`, Over the Rainbow by default), Newsreader (`body`) for the message with real bold and italic, and Reenie Beanie (`hand`) for the address lines, sign-off and footer line.
- **Title treatment.** The title is big and exaggerated: weight 700 plus a 1.6px text stroke in the ink colour so single-weight handwriting looks properly bold, a hard `3px 3px 0` mustard shadow, a -3deg tilt, and a per-letter bounce (each letter rotated and lifted a little: rotate `((i*7)%5-2)*3*0.8` deg, lift `((i*3)%4-1.5)*3*0.7` px). Words never break; if a word is wider than the card, shrink the whole title to fit.
- **Postcard furniture.** A perforated stamp (82x98, `sage`, dashed inner frame) in the top right, above the title, carrying the hero star at 54px. A circular postmark overlapping the stamp (98px, -14deg, 72% opacity, multiply) with the channel or recipient name around the ring and today's date inside. Two ruled address lines ("To:", "From:"). A sign-off in the hand face at 33px. A faint footer line, letter-spaced 0.5em at 38% opacity. The title sits close to the message below it.
- **Layout.** One column, about 520px wide. Stamp above the title at the top right, the title tucked close to the message.

## Title font variants

The default title face is **Over the Rainbow**. Every other handwritten face below takes the exact same treatment (bold stroke, mustard pop-out shadow, tilt, bounce) and only changes size, line height and spacing, because these faces differ a lot in how big they run. When Mira asks to see other fonts with a handwritten feel, offer these first, shown with the full treatment (see [`example/fonts.html`](example/fonts.html)). If she wants more, pick similar monoline pen or marker faces from Google Fonts, tune a size, line height and spacing for each, and add them here once she likes them.

| Font | Size | Line height | Letter spacing | Note |
| --- | --- | --- | --- | --- |
| Over the Rainbow (default) | 58px | 1.1 | 0.03em | Default. Loose, airy and tall; closest to the poster's lettering. |
| Gaegu | 67px | 1.05 | 0.04em | Friendly bouncy pen. The sturdiest all-rounder. |
| Delicious Handrawn | 64px | 1.0 | 0.03em | The most wobble; looks hand-cut. |
| Schoolbell | 55px | 1.1 | 0.06em | Rounder, chunkier marker. |
| Waiting for the Sunrise | 58px | 1.05 | 0.03em | Light and airy, a little tall. |
| Nanum Pen Script | 75px | 1.0 | 0.04em | Thin, quick pen strokes. Runs small, so set it larger. |
| Sue Ellen Francisco | 87px | 0.95 | 0.06em | Tall and narrow; wide spacing suits it. Runs small. |
| Just Another Hand | 93px | 0.95 | 0.06em | Tallest and narrowest. Runs very small, so set it much larger. |
| Reenie Beanie | 87px | 0.95 | 0.04em | Scribbly. Best for short titles; runs small. |
| Shantell Sans | 49px | 1.1 | 0.04em | Tidier and more legible; informal marker. |
| Itim | 55px | 1.1 | 0.04em | Neat and rounded. |
| Mansalva | 55px | 1.1 | 0.03em | Quick brush-pen look. |

Sizes are for a title in a card about 276px wide; the fit rule shrinks anything wider. Tokens for each variant are in `tokens.css` (`.title-<name>` classes) and `tokens.json` (`type.variants`).

## Doodles

- **Keep their own colours.** Unlike Whimsy, these stars are illustrated in full colour (a face, an outline, chalk texture), so show them as they are instead of recolouring with a mask. The plain sparkles (asterisk, plus) may be tinted.
- **Frame wreath.** Place stars in the stripe frame at even spacing around the card with a little jitter, at varied sizes (about 0.7x to 1.3x of 58px) and rotations up to 22 degrees either way. Roughly one star per 290px of the frame's perimeter, plus the same number of small sparkles (28% to 50% of 58px).
- **Hero star.** One big chalk-gold star (150px, -14deg) in the bottom-right corner, hanging off the edge, and the same star small in the stamp.
- **New subjects need new PNGs.** If a page needs a doodle that isn't in the set, ask Mira for a PNG rather than drawing a substitute.

## Motion

All motion respects `prefers-reduced-motion`.

- The card floats up and down 4px over 7s.
- The stamp wobbles between 3deg and 5.5deg over 5s.
- Stars wiggle +/-4deg around their own rotation over 4.5s, each on its own delay.
- Sparkles twinkle: scale 1 to 0.6 and opacity 1 to 0.45 over 2.6s, each on its own delay.
