# 0628 — Log a string field

Uses the [pino](https://github.com/pinojs/pino) structured logger. An INFO record
`login` is emitted with one structured string field `user=alice`. The record is
captured in-memory via a custom write stream (with `base:null` and
`timestamp:false` so no host/pid/time noise appears), then parsed from JSON and
printed as a normalized line: `level|message` followed by each field sorted by key.

## Run

    node main.js
