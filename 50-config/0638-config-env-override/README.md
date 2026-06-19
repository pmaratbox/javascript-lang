# 0638 — Env override

Uses the **node-config** library. It loads `config/default.json` and then merges the
environment-variable mapping from `config/custom-environment-variables.json`, which maps
`APP_NAME` to the config key `name`. The env var is set in-process before `require('config')`,
so it overrides the file value `myapp` and resolves `name` to `from-env`.

## Run

    node main.js
