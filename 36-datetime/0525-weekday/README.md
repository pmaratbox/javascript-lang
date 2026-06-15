# 0525 — Weekday

Parse the fixed date `2026-06-15` with luxon's `DateTime.fromISO` (in UTC) and read its ISO weekday via the `.weekday` accessor, which numbers days Monday=1 .. Sunday=7. June 15, 2026 is a Monday, so it prints `1`.

## Run

    node main.js
