# 0526 — Add time

Using the **luxon** library, parse the fixed time `2026-06-15T10:00` (UTC),
add 90 minutes with `DateTime.plus({ minutes: 90 })`, and format the result as
`HH:mm`. The arithmetic is performed by the library, not hardcoded.

## Run

    node main.js
