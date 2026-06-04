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
const stack = [root];
while (stack.length > 0) {
  const node = stack.pop();
  out.push(node.value);
  if (node.right !== null) stack.push(node.right);
  if (node.left !== null) stack.push(node.left);
}
console.log(out.join(" "));
