# 0631 — Deterministic field order

This lesson uses the [`pino`](https://github.com/pinojs/pino) structured-logging library to emit a single INFO record `metric` whose structured fields are supplied in NON-alphabetical order (`zeta=2` then `alpha=1`). The logger is configured with `base:null` and `timestamp:false` and writes JSON lines to a custom in-memory write stream (no real timestamp, no network). The captured line is parsed with `JSON.parse`, the numeric pino level (`30`) is mapped to `info`, and the remaining fields are printed SORTED by key, proving the normalized output is deterministic regardless of insertion order: `info|metric|alpha=1|zeta=2`.

## Run

    node main.js
