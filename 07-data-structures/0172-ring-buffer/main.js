class Buffer {
  constructor(capacity) {
    this.capacity = capacity;
    this.data = new Array(capacity);
    this.start = 0;
    this.size = 0;
  }

  push(value) {
    const end = (this.start + this.size) % this.capacity;
    this.data[end] = value;
    if (this.size < this.capacity) {
      this.size++;
    } else {
      this.start = (this.start + 1) % this.capacity;
    }
  }

  toArray() {
    const out = [];
    for (let i = 0; i < this.size; i++) {
      out.push(this.data[(this.start + i) % this.capacity]);
    }
    return out;
  }
}

const buffer = new Buffer(3);
for (const v of [1, 2, 3, 4, 5]) buffer.push(v);
console.log(buffer.toArray().join(" "));
