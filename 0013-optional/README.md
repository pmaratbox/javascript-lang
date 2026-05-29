# 0013 — Optional

Hold one value that is present (`42`) and one that is absent, then print each
with a fallback of `-1` when absent. `null` represents absence, and the
nullish-coalescing operator `??` supplies the fallback — unlike `||`, it
triggers only on `null`/`undefined`, not on a falsy `0`.

## Run

    node main.js
