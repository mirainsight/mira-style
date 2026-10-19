#!/usr/bin/env python3
"""Build one carousel lab from the engine, a style pack and the carousel's content.

    python3 scripts/build.py --style grunge --content content.json --out <dir>

Writes <dir>/index.html plus the fonts and backgrounds the pack uses, and prints
the `files` map to pass to the Artifact publish call (published path -> local path).
Run from anywhere; paths are resolved against the mira-style repo root.
"""
import argparse, json, os, shutil, sys, html

HERE = os.path.dirname(os.path.abspath(__file__))
SKILL = os.path.dirname(HERE)
REPO = os.path.dirname(os.path.dirname(SKILL))

LAYOUTS = {"whisper", "split", "aside", "corners", "echo", "arc", "stack", "fill"}


def js(obj):
    # safe inside <script>: no "</" sequences
    return json.dumps(obj, ensure_ascii=False).replace("</", "<\\/")


def check(style, content):
    errs = []
    pages = content.get("pages") or []
    if not pages:
        errs.append("content has no pages")
    used = []
    for i, p in enumerate(pages):
        lay = p.get("layout", style.get("defaults", {}).get("layout", "echo"))
        if lay not in LAYOUTS:
            errs.append(f"page {i}: unknown layout {lay!r}")
        if lay not in used:
            used.append(lay)
        bg = p.get("bg")
        if bg and bg not in style["backgrounds"]:
            errs.append(f"page {i}: background {bg!r} is not in the {style['name']} pack")
        if p.get("font") and p["font"] not in ("auto",) and p["font"] not in style["fonts"]:
            errs.append(f"page {i}: font {p['font']!r} is not in the pack")
        for j, o in enumerate(p.get("objs") or []):
            if not str(o.get("t", "")).strip():
                errs.append(f"page {i} object {j}: empty text")
            if o.get("fn") and o["fn"] != "auto" and o["fn"] not in style["fonts"]:
                errs.append(f"page {i} object {j}: font {o['fn']!r} is not in the pack")
    mx = style.get("rules", {}).get("maxLayouts", 3)
    if len(used) > mx:
        errs.append(f"{len(used)} layouts used ({', '.join(used)}); the {style['name']} rules allow {mx}")
    return errs


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--style", default="grunge")
    ap.add_argument("--content", required=True)
    ap.add_argument("--out", required=True)
    a = ap.parse_args()

    style = json.load(open(os.path.join(SKILL, "styles", a.style, "style.json"), encoding="utf8"))
    content = json.load(open(a.content, encoding="utf8"))
    content.setdefault("id", "carousel")
    errs = check(style, content)
    if errs:
        print("Content problems:\n- " + "\n- ".join(errs), file=sys.stderr)
        sys.exit(1)

    page = open(os.path.join(SKILL, "engine", "lab.html"), encoding="utf8").read()
    title = content.get("title") or "Carousel"
    page = (page.replace("__TITLE__", html.escape(title))
                .replace("__GF__", html.escape(style["googleFonts"], quote=True))
                .replace("__STYLE__", js(style))
                .replace("__CONTENT__", js(content)))

    os.makedirs(a.out, exist_ok=True)
    open(os.path.join(a.out, "index.html"), "w", encoding="utf8").write(page)

    # copy only the files the pack references
    needed = [f[3] for f in style.get("fontFiles", [])] + [b["file"] for b in style["backgrounds"].values() if b.get("file")]
    files, missing = {}, []
    for rel in needed:
        src = None
        for prefix, repo_dir in style.get("assets", {}).items():
            if rel.startswith(prefix):
                src = os.path.join(REPO, repo_dir, rel[len(prefix):])
        if not src or not os.path.exists(src):
            missing.append(rel)
            continue
        dst = os.path.join(a.out, rel)
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        shutil.copyfile(src, dst)
        files[rel] = os.path.abspath(dst)
    if missing:
        print("Missing assets (left out): " + ", ".join(missing), file=sys.stderr)
    print(json.dumps({"page": os.path.abspath(os.path.join(a.out, "index.html")), "files": files}, indent=1))


if __name__ == "__main__":
    main()
