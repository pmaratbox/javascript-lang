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
  else root.right = insert(root.right, value);
  return root;
}

function inorder(root, out) {
  if (root === null) return;
  inorder(root.left, out);
  out.push(root.value);
  inorder(root.right, out);
}

let root = null;
for (const v of [5, 3, 8, 1, 4]) root = insert(root, v);

const out = [];
inorder(root, out);
console.log(out.join(" "));
