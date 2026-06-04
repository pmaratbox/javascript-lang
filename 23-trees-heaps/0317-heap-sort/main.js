"use strict";

function siftDown(a, i, n) {
  while (true) {
    let largest = i;
    const l = 2 * i + 1, r = 2 * i + 2;
    if (l < n && a[l] > a[largest]) largest = l;
    if (r < n && a[r] > a[largest]) largest = r;
    if (largest === i) break;
    [a[largest], a[i]] = [a[i], a[largest]];
    i = largest;
  }
}

function heapSort(a) {
  const n = a.length;
  for (let i = (n >> 1) - 1; i >= 0; i--) siftDown(a, i, n);
  for (let end = n - 1; end > 0; end--) {
    [a[0], a[end]] = [a[end], a[0]];
    siftDown(a, 0, end);
  }
  return a;
}

const arr = [5, 3, 8, 1, 4];
heapSort(arr);
console.log(arr.join(" "));
