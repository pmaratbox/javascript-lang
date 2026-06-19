# 0625 — Log at info level

This lesson uses JavaScript's `pino` structured-logging library to emit a single INFO-level record with the message `service started` and no structured fields. The logger is configured with `base: null` and `timestamp: false` and is wired to a custom in-memory write stream (no real timestamp, no console output). The captured JSON line is parsed, its numeric level (`30`) is normalized to `info`, and the result is printed as the normalized line `info|service started`.

## Run

    node main.js
