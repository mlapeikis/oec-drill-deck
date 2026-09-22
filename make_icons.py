#!/usr/bin/env python3
"""Regenerate the app icons. Requires Pillow:  pip3 install Pillow

    python3 make_icons.py

Writes apple-touch-icon.png (iOS home screen), icon-192/512.png (Android and
the web manifest) and favicon-32.png. The iOS touch icon is deliberately
square and fully opaque — iOS applies its own corner mask, and transparency
there renders as black.
"""
from PIL import Image, ImageDraw

RED = (200, 16, 46)          # #C8102E — the patrol red used throughout the app
WHITE = (255, 255, 255)


def icon(size, radius_ratio=0.0, t_ratio=0.195, l_ratio=0.66):
    ss = size * 4                                    # supersample, then downscale
    if radius_ratio:
        im = Image.new("RGBA", (ss, ss), (0, 0, 0, 0))
        d = ImageDraw.Draw(im)
        d.rounded_rectangle([0, 0, ss - 1, ss - 1], radius=int(ss * radius_ratio), fill=RED)
    else:
        im = Image.new("RGB", (ss, ss), RED)
        d = ImageDraw.Draw(im)
    t, L, c = ss * t_ratio, ss * l_ratio, ss / 2
    r = t * 0.14
    d.rounded_rectangle([c - L/2, c - t/2, c + L/2, c + t/2], radius=r, fill=WHITE)
    d.rounded_rectangle([c - t/2, c - L/2, c + t/2, c + L/2], radius=r, fill=WHITE)
    return im.resize((size, size), Image.LANCZOS)


if __name__ == "__main__":
    icon(180).save("apple-touch-icon.png")
    icon(192, radius_ratio=0.18).save("icon-192.png")
    icon(512, radius_ratio=0.18).save("icon-512.png")
    icon(32,  radius_ratio=0.18).save("favicon-32.png")
    print("icons written")
