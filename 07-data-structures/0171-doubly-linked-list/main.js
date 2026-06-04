class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }
}

const list = new LinkedList();
for (const v of [1, 2, 3]) list.push(v);

const forward = [];
for (let n = list.head; n; n = n.next) forward.push(n.value);
console.log(forward.join(" "));

const backward = [];
for (let n = list.tail; n; n = n.prev) backward.push(n.value);
console.log(backward.join(" "));
