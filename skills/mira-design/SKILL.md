---
name: mira-design
description: Use when designing anything visual for Mira (sites, apps, invites, cards, social graphics), or when she wants to explore, tune or confirm a new look for her mira-style collection.
---

# mira-design

How Mira's designs are made. Her styles live in a collection called **mira-style**; each style in it is a **look**. Every look is worked out WITH her, by hand, for a real project, and only joins the collection once she confirms it.

## Where things live

- **Repo (public):** `mirainsight/mira-style`. One folder per look under `looks/<look>/` (README, tokens.json, tokens.css, doodles/, example/). Root README lists the looks. Skills under `skills/`.
- **Design system (private, Claude Design):** "Mira Whimsy", https://claude.ai/artifact/24yqYL1TJducupa9dvPwR2 (the Whimsy look's tokens, brand book and doodles).
- **Style gallery (private):** "Mira's Style Gallery", https://claude.ai/artifact/AQnMd8vK7H8BMm1AysnEsF. One entry per look: name, what it was first made for, swipeable live pages.

## Confirmed looks

| Look | First made for | Status |
| --- | --- | --- |
| Whimsy | Mira's 26th birthday invitation (Twenty-Six, repo `mirainsight/twenty-six`) | Default |

Designs she made **for other people** (e.g. Ma's Family Table, repo `mirainsight/family-table`) are not mira-style looks. Never use them as a default or as one of her looks; they can appear in the gallery under "Made for others", and in the public repo only with that person's permission.

## Making something in a confirmed look

1. Read the look's README and tokens (repo `looks/<look>/` or the design system).
2. Reuse the look EXACTLY: tokens, fonts, doodles, paper, frame, motion, voice. When in doubt, copy the pattern straight from the look's original page (its `example/index.html`) rather than reinterpreting it. Mira rejects loose reinterpretations and invented mockups; fidelity beats invention.
3. Doodles: use her PNGs, recolored and resized with a CSS mask (`background: <ink>; mask: url(png) center / contain no-repeat`). A subject the set doesn't cover: ask her to export a PNG. Never draw a substitute.
4. Never put real personal data (addresses, guest names, letters, passphrases, endpoints) into anything public. Public examples use made-up sample content.

## Design discovery (a new look, or tuning a piece)

Mira wants to tinker herself before committing. Never present a finished new look as decided, and never generate a batch of looks for her to pick from.

1. Talk first: what project it's for, the mood, references, any PNGs she has. One question at a time.
2. Build a TEMPORARY lab artifact ("Whimsy Lab: <working name>" or "<Look> Lab"), showing a realistic sample of the real use case with live controls:
   - **Fonts:** switch the headline face between several candidates suited to the mood, each with its own tuned size and line height; switch body and hand faces too. She likes trying fonts.
   - **Sizing:** sliders for headline, body and doodle size.
   - **Amount:** doodle count/density, sparkle count, margin coverage.
   - **Colour:** ink, paper and glow pickers, plus a few preset swatches.
   - **Layout:** scatter vs frame/wreath, frame on/off, rotation/jitter.
   - **Motion:** a toggle for each animation.
   - **Shuffle** (re-scatter) and **Copy settings** (copies current values as text for her to paste back).
   Twenty-Six's page already has tuner state (font, mode, density, size) to borrow from.
3. Iterate on the SAME lab artifact (same URL) as she pastes settings or describes changes.
4. When she says it's confirmed:
   - Build the real piece from the confirmed settings.
   - Add the look to the repo: `looks/<look>/` with README (first made for, rules), tokens.json, tokens.css, doodles, and an `example/` with sample content; add a row to the root README table. Commit and push.
   - Add it to the design system (or a new design system for the look) and to the Style Gallery (live pages, not redrawn mockups).
   - Propose an update to this skill's Confirmed looks table.
   - Offer to delete the temporary lab.

## Response format

She often reads on mobile. Keep chat short; let the artifacts carry the design.
