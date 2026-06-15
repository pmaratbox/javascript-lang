# 0528 — Unix timestamp

This lesson uses the Luxon date/time library to compute the Unix timestamp (epoch seconds) of a fixed UTC instant. We parse `2026-06-15T00:00:00Z` with `DateTime.fromISO` in the UTC zone, then call `.toSeconds()` to get the number of seconds since the Unix epoch (1970-01-01T00:00:00Z). The value is computed by the library, not hardcoded.

## Run

    node main.js
