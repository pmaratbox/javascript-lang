# 0626 — Log at warn level

This lesson uses JavaScript's [pino](https://github.com/pinojs/pino) structured-logging library to emit a `WARN`-level record with the message `low disk`. The logger is configured with `base:null` and `timestamp:false` and is wired to a custom in-memory write stream, so each record is captured as a JSON line with no real timestamp. We parse the captured line, normalize pino's numeric level (`40` -> `warn`), and print one normalized line `level|message`.

## Run

    node main.js
