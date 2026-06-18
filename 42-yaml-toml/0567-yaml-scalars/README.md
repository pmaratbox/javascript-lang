# 0567 — YAML scalars

This lesson uses the `js-yaml` library to parse a fixed YAML mapping (`name: Alice\nrole: admin\nage: 30\n`) with `yaml.load`. It reads the three scalar fields and prints them space-joined: the strings `name` and `role`, then the integer `age` printed plainly.

## Run

    node main.js
