# 0578 — Write CSV

This lesson uses the `papaparse` library to *write* rows to CSV. It passes a `string[][]` (the header row `["name","age"]` followed by the data row `["Alice","30"]`) to `Papa.unparse`, which serializes them into CSV text. Because writers differ in line terminators, the output is normalized (`\r\n` -> `\n`) and the trailing newline is stripped before printing `name,age\nAlice,30`.

## Run

    node main.js
