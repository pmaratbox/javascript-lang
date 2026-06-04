"use strict";

class Fenwick {
  constructor(n) {
    this.tree = new Array(n + 1).fill(0);
  }
  update(i, delta) {
    for (let x = i + 1; x < this.tree.length; x += x & -x) {
      this.tree[x] += delta;
    }
  }
  // prefix sum of first `count` elements (indices 0..count-1)
  prefix(count) {
    let sum = 0;
    for (let x = count; x > 0; x -= x & -x) sum += this.tree[x];
    return sum;
  }
}

const values = [1, 2, 3, 4, 5];
const bit = new Fenwick(values.length);
values.forEach((v, i) => bit.update(i, v));
console.log(bit.prefix(4));
