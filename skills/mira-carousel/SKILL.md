---
name: mira-carousel
description: Use when Mira wants an Instagram carousel built from her text (a reflection, notes or a caption), or wants a new carousel style pack. Builds a new carousel lab artifact in one of her styles (Grunge by default), where she arranges, styles and downloads the slides.
---

# mira-carousel

Every carousel is its **own lab artifact**: the full carousel lab (Organize and Style tabs, per-object styling, drag to place, PNG and zip export) filled with that carousel's text, in one **style pack**. Never reuse or overwrite an earlier carousel's artifact; publish a new one each time.

The lab's functionality is fixed. A style pack swaps only the look: **backgrounds, palettes, fonts and effects** (plus a few rules).

## Where things live

Repo `mirainsight/mira-style` (public), folder `skills/mira-carousel/`:

- `engine/lab.html`: the lab, with `__STYLE__`, `__CONTENT__`, `__GF__` and `__TITLE__` placeholders. Do not hand-edit a built page; change the engine or the pack.
- `styles/<pack>/style.json`: one file per style pack. `grunge` is the first.
- `scripts/build.py`: fills the engine with a pack and a carousel's content, copies the pack's fonts and backgrounds, and prints the files to publish.
- `examples/sample-content.json`: the content format, with made-up text.

Get the files by attaching or cloning the repo (`git clone --depth 1 https://github.com/mirainsight/mira-style`). The Grunge Lab artifact (https://claude.ai/code/artifact/e260d5bb-b02e-487a-b40a-43c8ae0c832b) is Mira's original working carousel; leave it as it is.

## Making a carousel

1. **Get the text.** From Mira directly, or from a carousel drafted with the mira-reflections skill. Use her words as written; fix spelling only if she asks.
2. **Pick the pack.** Grunge unless she names another (list `styles/`). Read its `style.json` rules.
3. **Sort it into pages** and write `content.json` (format below):
   - Page 0 is the cover. One thought per page; split long passages across pages.
   - Mark the line that carries each page as Big (`"r":"h"`); the rest Small.
   - Use no more layouts than the pack's `rules.maxLayouts` (Grunge: 3), chosen to match the content. Prefer the pack's `preferLayouts`; avoid `harderToRead` ones unless she asks.
   - Only use backgrounds, fonts and layouts the pack has. No tilt unless asked.
   - Give the carousel a short `title` and a unique `id` (slug plus date).
4. **Build:** `python3 scripts/build.py --style <pack> --content content.json --out <scratchpad>/<id>`. It refuses content that breaks the pack's rules; fix the content and rerun.
5. **Check it** headlessly before publishing (Playwright Chromium, `--no-sandbox`). Serve the out folder with `python3 -m http.server` (font and photo files load by fetch), open it, call `setTab('style')`, screenshot a few pages, and run `await slidePng(0)` to confirm export works. Google Fonts and cdnjs may be blocked in the sandbox, so faces will look approximate.
6. **Publish a new artifact.** Load the `artifact-capabilities` skill first (the page uses the `downloads` capability), then publish `index.html` with `files` set to the printed map, `capabilities: {"downloads": {}}`, icon `image`, and the carousel title. One sentence back to Mira; no URL.
7. Changes she asks for later go to **that carousel's** artifact (read it first, then republish to the same URL).

### content.json

```json
{
 "id": "slow-road-2026-10-20",
 "title": "Slow Road",
 "pages": [
  {"layout": "echo", "objs": [
   {"t": "I am tired.", "r": "h", "st": 1},
   {"t": "No, I need to rest.", "r": "s"}]},
  {"layout": "whisper", "bg": "pathf", "objs": [
   {"t": "it is where I hear myself ==again==.", "r": "h", "sz": 160}]}
 ],
 "spare": ["Lines she wrote but that are not on a page yet"]
}
```

Page fields (all optional but `objs`): `layout` (whisper, echo, corners, aside, stack, split, fill, arc), `bg` (a background key from the pack), `font` (a font key), `tt` (`none`, `lowercase`, `uppercase`), `tilt`, `em` (`rows` or `overlay`) and `es` (`clear`, `medium`, `heavy`) for Echo, `blur` (`none`, `hero`, `body`, `all`) and `bs` (`smear`, `soft`).
Object fields: `t` text (`==words==` highlights just those words), `r` (`h` Big, `s` Small), `st` strike through, `it` italic, `hl` highlight, `sz` size 40 to 300, `wt` weight (200, 400, 600, 800), `fn` font key, `al` (left, center, right). A Big line with strike through also gets the pack's `strikeHero` defaults (Grunge: bold, centred).

## Style packs

`style.json` holds only what changes between styles:

| Key | What |
| --- | --- |
| `name`, `about`, `look` | Display name, one line on the feel, the mira-style look folder it comes from |
| `googleFonts` | The Google Fonts CSS URL for every face and weight in `fonts` |
| `fonts` | `{key: {n, f, w, wb, k, lh, ls}}`: label, CSS family, Big weight, Small weight, size factor, line height, letter spacing |
| `fontFiles` | `[family, weight, style, "fonts/<file>.woff2"]` for every face and weight, so exported PNGs use the real fonts (the artifact can't fetch Google Fonts) |
| `palettes` | `{key: {n, base, glows[], ink, ink2}}` |
| `backgrounds` | `{key: {label, type, file?}}`. Types: `glow`, `streak`, `paper`, `flat` (generated from the palette), `image` (cover photo), `strip` (a tall photo that drifts up on each slide, with a dark shade unless `"shade": false`) |
| `layouts` | Optional per-layout overrides of the default `font` and `tt` |
| `pageDefaults` | Font/case given to new pages of a layout (Grunge: Echo and Whisper in Newsreader, lowercase) |
| `strikeHero` | Extra formatting for a struck-through Big line |
| `defaults` | `bg`, `pal`, `grain`, `blur`, `body`, `dust`, `tilt`, `layout` |
| `effects` | `grain {on, freq, octaves}`, `dust {on}`, `blur {modes: ["smear","soft"]}`, `strike {path}` (SVG path in a 100x100 box). Effects turned off are hidden in the lab |
| `rules` | `maxLayouts`, `preferLayouts`, `harderToRead`, `notes` |
| `assets` | Where the pack's files live in the repo: `{"fonts/": "looks/<look>/example/fonts/", "backgrounds/": "looks/<look>/backgrounds/"}` |

### Making a new pack

New packs come from a confirmed mira-style look, worked out with Mira the mira-design way (she tinkers in a lab first; never invent a finished style for her).

1. Copy `styles/grunge/style.json` to `styles/<pack>/style.json` and change only the look: fonts (each tuned with its own `k`, line height and spacing), palettes, backgrounds, effects, rules.
2. Put the font woff2 files (`@fontsource/<family>` on npm has them) and background images in the look's folder and point `assets` at them. Only Mira's own images, or openly licensed ones, go in the public repo.
3. Build `examples/sample-content.json` with the new pack and check it as above.
4. A new **kind** of effect or background (for example halftone, scan lines, paper fibres) is new engine code: add it to `engine/lab.html` behind an `effects` or `backgrounds` switch that defaults to off, so other packs are unchanged, and document it in the table above.
5. Commit and push. Add the pack to the list below.

## Packs

| Pack | From look | Feel |
| --- | --- | --- |
| `grunge` (I Bleed Red / True Humanity) | `looks/grunge` | Dark, blurry, but also bleeding warm. Grain, smear, strike through, Mira's glowing photo backgrounds, Night palette |

## Mira's preferences

- Less overwhelm: minimal controls at once, short chat. She often reads on mobile.
- Say "strike through", never "struck".
- Her real reflection text never goes into the public repo; examples use made-up text.
