"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function insert(root, value) {
  if (root === null) return new Node(value);
  if (value < root.value) root.left = insert(root.left, value);
  else if (value > root.value) root.right = insert(root.right, value);
  return root;
}

let root = null;
for (const v of [5, 3, 8, 1, 4]) root = insert(root, v);

const out = [];
const queue = [root];
while (queue.length > 0) {
  const node = queue.shift();
  out.push(node.value);
  if (node.left !== null) queue.push(node.left);
  if (node.right !== null) queue.push(node.right);
}
console.log(out.join(" "));
