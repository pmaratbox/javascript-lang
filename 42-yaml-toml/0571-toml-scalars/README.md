# 0571 — TOML scalars

This lesson uses the `smol-toml` library to parse a fixed TOML document with two top-level scalar keys (`title = "demo"` and `version = 2`). We read the `title` string and `version` integer and print them space-joined; the integer prints plainly as `2`.

## Run

    node main.js
