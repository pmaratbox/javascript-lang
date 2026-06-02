# 0042 — Environment Variables

Read the environment variable `LESSON_ENV_VAR`, falling back to `default` when it is unset, and print `value: default`. Node exposes the environment as `process.env`; a missing variable reads as `undefined`, and the nullish-coalescing operator `??` supplies the default.

## Run

    node main.js
