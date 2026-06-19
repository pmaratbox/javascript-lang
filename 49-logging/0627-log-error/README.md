# 0627 — Log at error level

This lesson uses JavaScript's [pino](https://github.com/pinojs/pino) structured-logging library to emit an ERROR-level record with the message `boom`. The logger is configured with `base: null` and `timestamp: false` and writes its JSON lines to a custom in-memory stream (no real timestamp, no console output). The captured JSON line is parsed with `JSON.parse`; pino's numeric level `50` is normalized to `error`, and the record is printed as the normalized `level|message` line.

## Run

    node main.js
