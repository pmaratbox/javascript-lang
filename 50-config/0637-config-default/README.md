# 0637 — Default for missing key

This lesson uses JavaScript's `node-config` library to load `config/default.json` and read a key that is absent from the file (`missing`). Using `config.has()` to detect the absent key, it falls back to the default value `fallback`.

## Run

    node main.js
