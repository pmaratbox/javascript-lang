# 0632 — Level filtering

Uses the [pino](https://github.com/pinojs/pino) structured-logging library. The logger's minimum level is set to `warn`, so the INFO record `hidden` is dropped before it ever reaches the sink. Records are captured in-memory via a custom write stream (no real timestamp, `base: null`); each captured JSON line is parsed, its numeric level normalized to the short set, and the only surviving record (`warn|visible`) is printed.

## Run

    node main.js
