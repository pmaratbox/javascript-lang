class MultisetCount {
  constructor() {
    this.counts = new Map();
  }

  add(value) {
    this.counts.set(value, (this.counts.get(value) ?? 0) + 1);
  }

  remove(value) {
    const current = this.counts.get(value) ?? 0;
    if (current <= 1) this.counts.delete(value);
    else this.counts.set(value, current - 1);
  }

  count(value) {
    return this.counts.get(value) ?? 0;
  }
}

const ms = new MultisetCount();
ms.add(1);
ms.add(1);
ms.add(2);
const before = ms.count(1);
ms.remove(1);
const after = ms.count(1);
console.log(`${before} ${after}`);
