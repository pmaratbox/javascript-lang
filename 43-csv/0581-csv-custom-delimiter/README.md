# 0581 — Custom delimiter

This lesson uses the `papaparse` library to parse the semicolon-delimited text `a;b;c\n1;2;3\n` by configuring `Papa.parse` with `delimiter: ";"`. It takes the second (data) row's fields and joins them with commas to print `1,2,3`.

## Run

    node main.js
