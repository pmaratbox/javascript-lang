class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.buffer = new Array(capacity);
    this.head = 0;
    this.size = 0;
  }

  enqueue(value) {
    const tail = (this.head + this.size) % this.capacity;
    this.buffer[tail] = value;
    this.size++;
  }

  dequeue() {
    const value = this.buffer[this.head];
    this.head = (this.head + 1) % this.capacity;
    this.size--;
    return value;
  }

  toArray() {
    const out = [];
    for (let i = 0; i < this.size; i++) {
      out.push(this.buffer[(this.head + i) % this.capacity]);
    }
    return out;
  }
}

const q = new CircularQueue(3);
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.dequeue();
q.enqueue(4);
console.log(q.toArray().join(" "));
