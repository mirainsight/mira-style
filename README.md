# mira-style

The design styles of Mira (mirainsight): a growing collection of hand-made looks, each one worked out by hand for a real project and only added here once confirmed.

Clone it, borrow a look, and make something lovely.

## Looks

| Look | First made for | Status | Folder |
| --- | --- | --- | --- |
| **Whimsy** | Mira's 26th birthday invitation (Twenty-Six) | Default | [`looks/whimsy`](looks/whimsy) |

More looks join as they are confirmed.

## What's in a look

```
looks/<look>/
  README.md     the look's rules: palette, type, layout, doodles, motion, voice
  tokens.json   colours, fonts, sizes and spacing as data
  tokens.css    the same tokens as CSS variables, ready to link
  doodles/      hand-drawn PNGs on transparent backgrounds (if the look has them)
  example/      a working page in the look, filled with made-up sample content
```

## Using a look

1. Link the fonts and `tokens.css` from the look's folder.
2. Build with the tokens (`var(--crimson)`, `var(--font-script)`, and so on).
3. Recolor any doodle with a CSS mask, so it takes whatever ink you choose:

```css
.doodle {
  width: 120px; aspect-ratio: 1;
  background: var(--crimson);
  mask: url(looks/whimsy/doodles/bow.png) center / contain no-repeat;
  -webkit-mask: url(looks/whimsy/doodles/bow.png) center / contain no-repeat;
}
```

4. Open the look's `example/index.html` to see everything working together.

## With Claude

[`skills/mira-design`](skills/mira-design) is a Claude skill describing how Mira's designs are made: reuse a confirmed look exactly, and explore new ones in a tunable "lab" page before committing. Add it to Claude to design in mira-style.

## License

- Code (HTML, CSS, JS, tokens): [MIT](LICENSE).
- Doodles and illustrations (every PNG under `doodles/`): [CC BY-NC 4.0](LICENSE-ART.md). Use them with credit to Mira (mirainsight), not for commercial use.
