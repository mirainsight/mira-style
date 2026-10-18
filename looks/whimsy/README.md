# Whimsy

Hand-drawn, love-letter whimsy: crimson ink on warm cream, calligraphy headlines, scattered doodles and small handwritten asides. The default mira-style look.

**First made for:** Mira's 26th birthday invitation, a private page for the 26 people who mean most to her. [`example/`](example) is that page with made-up sample content (open `example/index.html`; the wishlist passphrase is `wishlist`).

## Files

- `tokens.css` / `tokens.json`: colours, fonts, sizes, spacing, radii.
- `doodles/`: 15 hand-drawn PNGs (CC BY-NC 4.0, see the root LICENSE-ART.md).
- `example/`: the full invitation page: envelope cover, invitation, wishlist, agenda, guest list and letters.

## Voice

Warm, personal, a little playful, never corporate. Short lines. Lowercase handwritten nudges carry the humour: "come hungry!", "psst, tap the name for the address", "tap to open". Labels are tiny spaced capitals ("YOU ARE INVITED", "JUST BETWEEN US", "MUST-DOS"). Hearts (♡ or a drawn heart) close lists and notes.

## Visual foundations

- **Paper.** `cream` ground with two `blush` radial glows (top-left and bottom-right corners), a soft white glow behind the centre, and a fractal-noise grain over everything at 28% opacity, multiply blend. Light only.
- **Ink.** One ink, `crimson`, for every drawn and decorative thing. `ink` and `ink-strong` for reading text. `crimson-soft` only for handwriting.
- **Type.** Script (`script`, Pinyon Script) for the one big headline, often split over two lines with the second line smaller (`headline-1`, `headline-2`). Cormorant Garamond (`serif`) for everything else: italic for leads and asides, upright for body, uppercase at 10.5–12.5px with 0.26em letter-spacing for labels and tabs. La Belle Aurore (`hand`) for notes, rotated about -1.5deg.
- **Alternate scripts.** The headline face can rotate between `script-delafield`, `script-italianno`, `script-parisienne`, `script-ephesis` and `script-imperial`; each needs its own size and line height (Delafield and Italianno run small, so set them about 30% larger with line height near 0.9).
- **Rules.** 1px dotted `rule` lines, never solid borders. Section labels end in a thin line to the edge.
- **Selected state.** A hand-drawn wavy underline in crimson under the selected tab, not a box.
- **Bullets.** Small crimson hearts (11×10).
- **Cards.** Rare. A letter sits on a `paper-veil` sheet with a hairline crimson border at 18% and `radius-sheet` corners. No shadows except on modals.
- **Layout.** One centred column, about 460px wide (up to 640px for lists). Generous air; the doodles live in the margins.

## Doodles

The Doodles asset group holds Mira's 15 hand-drawn PNGs: crimson line art on transparent backgrounds.

- **Recolor and resize freely.** Use the PNG as a CSS mask so any ink can paint it: `background: var(--crimson); mask: url(<png>) center / contain no-repeat;`. Size with width and height; rotate a few degrees for life.
- **Scatter, don't grid.** Place them around the edges at varied sizes and slight rotations; keep the reading column clear.
- **New subjects need new PNGs.** If a page needs a doodle that isn't in the set, ask Mira to export it as a PNG rather than drawing a substitute.

## Motion

All motion respects `prefers-reduced-motion`.

- Sealed envelope cover: floats in, idles with a 7px bob, and on tap scales up and fades while a letter slides out.
- A thin crimson frame draws itself around the page (stroke-dashoffset, 2s).
- Doodles pop in with a small overshoot; sparkles twinkle slowly.
- Content rises 13px into place, staggered by 80ms.
- The banner sways ±0.55deg; balloons bob.
- "New" marks breathe in opacity instead of blinking.

