# 0577 — Quoted CSV fields

This lesson uses the `papaparse` library to parse the CSV text `name,note\nAlice,"hello, world"\n`. The data row's `note` field is quoted because it contains a comma; Papa Parse correctly treats `hello, world` as a single field value. The program prints that field value.

## Run

    node main.js
