class RangeIterator {
  constructor(start, end) {
    this.current = start;
    this.end = end;
  }
  hasNext() {
    return this.current <= this.end;
  }
  next() {
    return this.current++;
  }
}

const it = new RangeIterator(1, 3);
const out = [];
while (it.hasNext()) {
  out.push(it.next());
}
console.log(out.join(" "));
