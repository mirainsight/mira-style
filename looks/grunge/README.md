# I Bleed Red / True Humanity (Grunge)

Grainy, smeared Instagram carousel slides: subdued colours that sit inside the background, unexpected font choices and text placement, and some text blurred or repeated until it reads like a feeling more than a sentence. Quiet and a little raw.

**First made for:** Mira's Instagram reflection carousels, styled in the **Grunge Lab**, a workbench where she sorts her text into pages, styles each piece and exports the slides as PNGs. [`example/`](example) shows a finished sample carousel (made-up text) as images.

The look's options (palettes, the font options with their tuning, backgrounds, effects) live in Mira's private Claude Design system **I Bleed Red**. Carousels are made with the [mira-carousel](../../skills/mira-carousel) skill and its `grunge` pack.


## In Mira's words

**Why this look?**
I had a song in my heart, "Deep End of Your Heart" by Joel Houston, and it kept replaying. And the visual I saw was something dark, but warm. Something matte, but also soft edges.

And I knew I wanted to write from my recent wrestling between who I am and who I thought I should be. This is the style of my humanity: dark, blurry, but also bleeding warm.

**How was it received?**
I posted it on Instagram! I'm yet to see what or how others receive from it. But for me, it's my first published piece of writing since 2022!!

I loved my writing, and I read this and am super proud. I hope it can inspire others.

## Files

- `tokens.css` / `tokens.json`: palettes, faces (with their tuned size factors), layouts, effects and the look's rules.
- `backgrounds/`: Mira's own photo backgrounds (CC BY-NC 4.0). See [`backgrounds/README.md`](backgrounds/README.md).
- `example/index.html` and `example/slides/`: the sample carousel, nine 1080 x 1350 slides exported from the lab (made-up text).
- `example/fonts/`: woff2 files for every face and weight; the mira-carousel `grunge` pack embeds them in exported PNGs. All are open-licence (SIL OFL) Google Fonts.

## Rules

- **Canvas.** 1080 x 1350 (4:5), a 92px safe margin. Exported as PNG.
- **At most 3 layouts per set**, chosen to match the content. Arc, Split and Fill are kept but are harder to read, so use them sparingly.
- **No tilt by default.** Only when asked.
- **Colour.** Subdued, matched to the background: one palette per set, the ink taken from the palette. Light palettes (Rust, Mustard, Signal) use dark ink; dark ones use light ink.
- **Texture on everything.** Grain overlay (default 32), optional dust and scratches.
- **Blur is a voice.** Smear (sideways stacked shadows) or Soft (a plain blur), on the big line, the small text or everything. A struck-through big line, smeared and repeated, is the signature cover.
- **Say "strike through"**, never "struck".

## Palettes

| Palette | Base | Ink | Glows |
| --- | --- | --- | --- |
| Night (default) | `#100a08` | `#ea8a6b` | `#ec681c` `#f4a443` `#5d592b` |
| Moon | `#2a1d2e` | `#f7ebe1` / `#ffd0b4` | `#e8773a` `#4b3c66` `#2f8a88` `#f1a55a` |
| Ember | `#3e0f10` | `#f6ebe0` / `#f2b490` | `#f0ad24` `#d8471c` `#8b1c14` `#5c1515` |
| Olive | `#38382a` | `#f3d8a4` | `#d6651b` `#c4561a` `#4b4a30` |
| Street | `#38251a` | `#dfe0d6` | `#b9763f` `#7a4826` `#e2a862` `#c0402a` `#d9d6c8` |
| Rust | `#e07a4e` | `#1d1613` / `#2e1a14` | `#ea8d5d` `#d2683e` `#f19d6e` |
| Mustard | `#e8a82c` | `#5a2027` | `#f2bf47` `#de8c20` `#e5791d` |
| Signal | `#bc1f1d` | `#130a0a` | `#c72b25` `#a9191a` |

## Backgrounds

Chosen for the whole carousel, and overridable per slide. The default is **Hand (soft)**.

- **Generated:** Glow (big soft palette blobs), Streaks (horizontal bands blurred sideways), Paper (one huge soft blob), Flat (base colour).
- **Photos:** Your photo (a tall photo that drifts up a little on each slide, so the set reads as one strip, under a dark shade), Path (soft/faint) and Hand (soft/faint): blurred, glowing orange shapes on a deep red-brown.

## Type

Small text is 46px times the face's size factor `k`; big lines are set per layout. Default face for Mira's sets: **Newsreader**, lowercase.

| Face | Big / small weight | k | Line height | Note |
| --- | --- | --- | --- | --- |
| Gloock | 400 / 400 | 1 | 1.02 | Whisper's face |
| Instrument Serif | 400 / 400 | 1.14 | 1 | |
| Fraunces | 800 / 600 | 0.96 | 1.04 | Has Thin |
| Libre Baskerville | 700 / 400 | 0.86 | 1.04 | Stack's face |
| Bevan | 400 / 400 | 0.8 | 1.04 | |
| Barlow Condensed | 700 / 600 | 1.12 | 0.93 | Split's face; has Thin |
| Jost | 800 / 700 | 0.96 | 0.96 | Corners' face; has Thin |
| Archivo Black | 400 / 400 | 0.88 | 1 | Echo's face |
| Fredoka | 700 / 600 | 1 | 0.96 | Fill's face |
| Newsreader | 400 / 400 | 1 | 1.08 | Default; has Thin |
| Gaegu (handwritten) | 700 / 400 | 1.18 | 1.05 | |
| Brush scrawl (Covered By Your Grace) | 400 / 400 | 1.3 | 1.05 | Stand-in for a wet-brush script |
| Hand marker (Delicious Handrawn) | 400 / 400 | 1.12 | 1.05 | Stand-in for a semi-script marker |

Weights: Thin 200, Regular 400, Semibold 600, Bold 800. Thin only shows in faces that have it (marked above).

## Layouts

| Layout | Idea |
| --- | --- |
| Whisper | Small, quiet, centred like a breath |
| Echo | One big line repeated and smeared (rows), or overlaid by a ghost in the second ink (overlay); strength Clear, Medium, Heavy |
| Corners | Lines thrown to alternating edges, a page number top right |
| Aside | One small column, off-centre right |
| Stack | Big words stacked left, quiet italic on the right |
| Split | Condensed caps pushed to opposite edges, last word italic (harder to read) |
| Fill | Rounded caps justified across the full width (harder to read) |
| Arc | Text travels a curve (harder to read; no per-object styling) |

## Per-object styling

Every block of text is an object with its own: Small/Big role, strike through (thin, normal, thick hand-drawn line), italic, text colour, highlight (a block in the text colour with the text knocked out, or a chosen colour), size (40 to 300%), weight, face, case, alignment, blur, and a free position you drag on the slide with snapping guides. Wrap words in `==` to highlight just those words.

## Making carousels

Carousels in this look are made in the carousel lab from the [mira-carousel](../../skills/mira-carousel) skill (pack `grunge`): Organize your text into pages, style each piece at three scopes (selected text, this slide, all slides), and download the slides as PNGs. The public collection shows only the finished slides.
