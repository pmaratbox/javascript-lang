# 0575 — Parse CSV rows

This lesson uses the `papaparse` library to parse a fixed CSV document (`name,age,city\nAlice,30,Paris\nBob,25,London\nCarol,35,Berlin\n`) with `Papa.parse`, which returns an array of string rows. It skips the header row, then joins the first column (name) of each data row with commas to print `Alice,Bob,Carol`.

## Run

    node main.js
