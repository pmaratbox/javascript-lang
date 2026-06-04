# 0211 — Command (Undo)

Execute an AddCommand that takes a counter from 0 to 5, then undo it back to 0, printing `5 0`. The command stores its receiver and amount, exposing reversible `execute()` and `undo()`.

## Run

    node main.js
