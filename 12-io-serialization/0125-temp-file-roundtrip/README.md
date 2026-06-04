# 0125 — Temp File Roundtrip

Write a string to a temporary file, read it back, confirm it matches, delete the file, and print `roundtrip: ok`. Combining `os.tmpdir()` with the process id gives a unique scratch path.

## Run

    node main.js
