"use strict";

class SegmentTree {
  constructor(values) {
    this.n = values.length;
    this.tree = new Array(2 * this.n).fill(0);
    for (let i = 0; i < this.n; i++) this.tree[this.n + i] = values[i];
    for (let i = this.n - 1; i > 0; i--) {
      this.tree[i] = this.tree[2 * i] + this.tree[2 * i + 1];
    }
  }
  // sum over [lo, hi] inclusive
  query(lo, hi) {
    let l = lo + this.n;
    let r = hi + this.n + 1;
    let sum = 0;
    while (l < r) {
      if (l & 1) sum += this.tree[l++];
      if (r & 1) sum += this.tree[--r];
      l >>= 1;
      r >>= 1;
    }
    return sum;
  }
}

const st = new SegmentTree([1, 2, 3, 4, 5]);
console.log(st.query(1, 3));
