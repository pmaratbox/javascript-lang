# 0630 — Log multiple fields

This lesson uses JavaScript's `pino` structured-logging library to emit a single INFO-level record with the message `request` and two structured fields: `method=GET` (string) and `status=200` (int). The logger is configured with `base: null` and `timestamp: false` and is wired to a custom in-memory write stream (no real timestamp, no console output). The captured JSON line is parsed, its numeric level (`30`) is normalized to `info`, and the fields are printed sorted by key as the normalized line `info|request|method=GET|status=200`.

## Run

    node main.js
