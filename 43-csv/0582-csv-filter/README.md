# 0582 — Filter rows

This lesson uses the `papaparse` library to parse a fixed `name,age,city` CSV document with `Papa.parse` in header mode, producing an array of row objects. It keeps the data rows whose `age` exceeds 28 (Alice 30 and Carol 35; Bob 25 is excluded), then joins the kept names with commas to print `Alice,Carol`.

## Run

    node main.js
