# 0629 — Log an integer field

This lesson uses JavaScript's real structured-logging library [`pino`](https://github.com/pinojs/pino) to emit an `INFO` record with the message `processed` and one integer structured field `count=5`. The logger is configured with `base:null` (no pid/hostname) and `timestamp:false` (no real timestamp) and writes its JSON lines to a custom in-memory write stream instead of stdout. We then parse the captured JSON, map pino's numeric level (`30` -> `info`), and print one normalized line: `level|message` followed by each field sorted by key as `|key=value`. The integer value is printed as-is.

## Run

    node main.js
