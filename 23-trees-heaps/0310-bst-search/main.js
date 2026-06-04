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

function search(root, key) {
  let node = root;
  while (node !== null) {
    if (key === node.value) return true;
    node = key < node.value ? node.left : node.right;
  }
  return false;
}

let root = null;
for (const v of [5, 3, 8, 1, 4]) root = insert(root, v);

const a = search(root, 4) ? "yes" : "no";
const b = search(root, 6) ? "yes" : "no";
console.log(`${a} ${b}`);
