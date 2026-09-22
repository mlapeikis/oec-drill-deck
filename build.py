#!/usr/bin/env python3
"""Build index.html from the sources in src/.

    python3 build.py

Concatenates the question banks and station data into src/shell.html at the
/*__QUESTIONS__*/ marker, then wraps the result in a standalone HTML document.
The output is a single self-contained file that works from GitHub Pages, from
any other static host, or opened directly off disk with no server at all.
"""
from pathlib import Path

ROOT = Path(__file__).parent
SRC = ROOT / "src"
DATA_FILES = ["questions.js", "questions2.js", "stations.js"]

HEAD = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="color-scheme" content="light dark">
<meta name="description" content="Outdoor Emergency Care practice questions and practical skill-station drills for National Ski Patrol candidates.">
<meta name="apple-mobile-web-app-capable" content="yes">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%23C8102E'/%3E%3Cpath d='M13 7h6v6h6v6h-6v6h-6v-6H7v-6h6z' fill='%23fff'/%3E%3C/svg%3E">
<style>
html{-webkit-text-size-adjust:100%}
:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
body{margin:0;font:14px system-ui,sans-serif}
img{max-width:100%}
[hidden]{display:none!important}
</style>
</head>
<body>
"""
TAIL = "\n</body>\n</html>\n"


def main() -> None:
    shell = (SRC / "shell.html").read_text()
    if "/*__QUESTIONS__*/" not in shell:
        raise SystemExit("src/shell.html is missing the /*__QUESTIONS__*/ marker")
    data = "\n".join((SRC / name).read_text() for name in DATA_FILES)
    out = HEAD + shell.replace("/*__QUESTIONS__*/", data) + TAIL
    (ROOT / "index.html").write_text(out)
    print(f"wrote index.html  ({len(out.encode()) / 1024:.0f} KB)")


if __name__ == "__main__":
    main()
