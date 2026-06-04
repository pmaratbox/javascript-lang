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

function deleteNode(root, key) {
  if (root === null) return null;
  if (key < root.value) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.value) {
    root.right = deleteNode(root.right, key);
  } else {
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;
    let succ = root.right;
    while (succ.left !== null) succ = succ.left;
    root.value = succ.value;
    root.right = deleteNode(root.right, succ.value);
  }
  return root;
}

function inorder(node, out) {
  if (node === null) return;
  inorder(node.left, out);
  out.push(node.value);
  inorder(node.right, out);
}

let root = null;
for (const v of [5, 3, 8, 1, 4]) root = insert(root, v);
root = deleteNode(root, 3);

const out = [];
inorder(root, out);
console.log(out.join(" "));
