# 0436 — Debounce (Virtual Time)

Use the library's debounce operator on a virtual/test scheduler to emit a value only after a quiet window. Here RxJS `debounce(() => timer(30, s))` runs on a `TestScheduler` so virtual time is fully deterministic.

## Run

    node main.js
