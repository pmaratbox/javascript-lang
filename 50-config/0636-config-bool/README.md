# 0636 — Boolean value

This lesson uses JavaScript's [node-config](https://github.com/node-config/node-config) library to load `config/default.json` and read the boolean key `debug`. The library resolves and parses the JSON file; the boolean value is coerced with `String(...)` so it prints lowercase as `true`.

## Run

    node main.js
