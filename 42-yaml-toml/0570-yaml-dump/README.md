# 0570 — Dump YAML

This lesson uses the `js-yaml` library to serialize a fixed map to YAML. We build a map with the keys `name=Alice` (string), `age=30` (integer), and `city=Paris` (string), then call `yaml.dump(m, { sortKeys: true })` to emit sorted, block-style YAML (no flow braces, no quotes on these simple scalars).

## Run

    node main.js
