# 0064 — Matrix Transpose

Transpose the 2x3 matrix `[[1, 2, 3], [4, 5, 6]]` (swap rows and columns) and print the resulting 3x2 matrix, one row per line: `1 4`, `2 5`, `3 6`. `matrix[0].map((_, j) => matrix.map(row => row[j]))` builds each transposed row by collecting column `j` from every row.

## Run

    node main.js
