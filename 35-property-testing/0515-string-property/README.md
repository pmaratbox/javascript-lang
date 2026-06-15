# 0515 — String property

Uses the [fast-check](https://github.com/dubzzz/fast-check) property-testing library. `fc.string()` generates random strings and `fc.property` checks that for every generated `s`, the length of `s + s` equals `2 * s.length`. `fc.assert` runs ~100 cases and throws on any failure, so reaching the end means the property held and we print `passed`.

## Run

    node main.js
