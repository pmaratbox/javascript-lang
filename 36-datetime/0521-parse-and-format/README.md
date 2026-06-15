# 0521 — Parse & format

Using Luxon's `DateTime`, parse the fixed ISO date `2026-06-15` in UTC with `DateTime.fromISO`, then format it back to an ISO date (`yyyy-MM-dd`) via `toISODate()`. The value round-trips through the library rather than being printed as a literal string.

## Run

    node main.js
