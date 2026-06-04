class Find {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
  }

  find(x) {
    while (this.parent[x] !== x) {
      this.parent[x] = this.parent[this.parent[x]];
      x = this.parent[x];
    }
    return x;
  }

  union(a, b) {
    this.parent[this.find(a)] = this.find(b);
  }

  connected(a, b) {
    return this.find(a) === this.find(b);
  }
}

const uf = new Find(4);
uf.union(0, 1);
uf.union(2, 3);
console.log(`${uf.connected(0, 1) ? "yes" : "no"} ${uf.connected(0, 2) ? "yes" : "no"}`);
