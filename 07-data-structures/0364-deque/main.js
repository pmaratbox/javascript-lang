class Deque {
  constructor() {
    this.items = [];
  }

  pushBack(value) {
    this.items.push(value);
  }

  pushFront(value) {
    this.items.unshift(value);
  }

  toArray() {
    return [...this.items];
  }
}

const dq = new Deque();
dq.pushBack(1);
dq.pushBack(2);
dq.pushFront(0);
console.log(dq.toArray().join(" "));
