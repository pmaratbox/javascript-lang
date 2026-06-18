# 0572 — TOML table

This lesson uses the `smol-toml` library to parse a fixed TOML document containing a `[server]` table. We read the `server.host` and `server.port` fields from the parsed object and print them in a controlled `host=<host> port=<port>` format (the integer prints plainly).

## Run

    node main.js
