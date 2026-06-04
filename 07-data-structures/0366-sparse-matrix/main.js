class SparseMatrix {
  constructor() {
    this.entries = new Map();
  }

  set(row, col, value) {
    if (value === 0) this.entries.delete(`${row},${col}`);
    else this.entries.set(`${row},${col}`, value);
  }

  get(row, col) {
    return this.entries.get(`${row},${col}`) ?? 0;
  }
}

const m = new SparseMatrix();
m.set(1, 1, 5);
console.log(`${m.get(1, 1)} ${m.get(0, 0)}`);
