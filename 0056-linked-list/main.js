class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const head = new Node(1, new Node(2, new Node(3)));

const parts = [];
let node = head;
while (node !== null) {
  parts.push(node.value);
  node = node.next;
}
console.log(parts.join(" -> "));
