# 0065 — Merge Sort

Sort the list `3, 1, 4, 1, 5, 2` using merge sort (recursively split in half, then merge the sorted halves) and print the result: `1 1 2 3 4 5`. Recursive `mergeSort` slices the array in half; `merge` walks both sorted halves, taking the smaller front element each step (`<=` is stable).

## Run

    node main.js
