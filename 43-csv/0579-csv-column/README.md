# 0579 — Extract a column

This lesson uses the `papaparse` library to parse fixed CSV text. We parse a `name,age,city` header plus three data rows into header-keyed objects, extract the `age` column by name from each data row, and join the values with commas to print `30,25,35`.

## Run

    node main.js
