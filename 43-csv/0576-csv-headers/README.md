# 0576 — CSV header row

This lesson uses the `papaparse` library to parse fixed CSV text. We parse a CSV document with a `name,age,city` header followed by three data rows, take the first (header) row, and join its fields with a pipe to print `name|age|city`.

## Run

    node main.js
