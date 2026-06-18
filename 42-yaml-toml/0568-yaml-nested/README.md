# 0568 — Nested YAML mapping

This lesson uses the `js-yaml` library to parse a YAML document containing a nested mapping. We load `server:\n  host: localhost\n  port: 8080\n`, read the nested `server.host` and `server.port` values, and print them in `host:port` form.

## Run

    node main.js
