"use strict";

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function isValidBst(node, low = -Infinity, high = Infinity) {
  if (node === null) return true;
  if (node.value <= low || node.value >= high) return false;
  return isValidBst(node.left, low, node.value) &&
         isValidBst(node.right, node.value, high);
}

const good = new Node(5, new Node(3, new Node(1), new Node(4)), new Node(8));
const bad = new Node(5, new Node(3, new Node(1), new Node(6)), new Node(8));

const a = isValidBst(good) ? "yes" : "no";
const b = isValidBst(bad) ? "yes" : "no";
console.log(`${a} ${b}`);
