"use strict";

class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

let diameter = 0;

function height(node) {
  if (node === null) return 0;
  let h1 = 0, h2 = 0;
  for (const child of node.children) {
    const h = height(child);
    if (h > h1) { h2 = h1; h1 = h; }
    else if (h > h2) { h2 = h; }
  }
  if (h1 + h2 > diameter) diameter = h1 + h2;
  return h1 + 1;
}

const c = new Node("C");
const d = new Node("D");
const a = new Node("A", [c, d]);
const b = new Node("B");
const root = new Node("root", [a, b]);

height(root);
console.log(diameter);
