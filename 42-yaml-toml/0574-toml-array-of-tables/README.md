# 0574 — TOML array of tables

This lesson uses the `smol-toml` library to parse a fixed TOML document containing an array of tables (`[[servers]]`). The `parse` function returns an object whose `servers` key is an array; each element's `name` is collected and the names are joined with commas to produce `alpha,beta`.

## Run

    node main.js
