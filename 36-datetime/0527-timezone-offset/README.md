# 0527 — Timezone offset

Using Luxon's `DateTime`, parse the fixed instant `2026-06-15T12:00:00Z` in UTC, then `setZone("UTC+5")` to apply a fixed +05:00 offset (no named timezone or OS tzdata). The library recomputes the local wall-clock hour as `17`.

## Run

    node main.js
