function shellSort(a) {
  const n = a.length;
  for (let gap = n >> 1; gap > 0; gap >>= 1) {
    for (let i = gap; i < n; i++) {
      const tmp = a[i];
      let j = i;
      while (j >= gap && a[j - gap] > tmp) {
        a[j] = a[j - gap];
        j -= gap;
      }
      a[j] = tmp;
    }
  }
  return a;
}

console.log(shellSort([5, 2, 8, 1, 9, 3]).join(" "));
