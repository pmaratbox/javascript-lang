class Leaf {
  constructor(value) {
    this.value = value;
  }
  accept(visitor) {
    return visitor.visitLeaf(this);
  }
}

class Node {
  constructor(children) {
    this.children = children;
  }
  accept(visitor) {
    return visitor.visitNode(this);
  }
}

class SumVisitor {
  visitLeaf(leaf) {
    return leaf.value;
  }
  visitNode(node) {
    return node.children.reduce((sum, c) => sum + c.accept(this), 0);
  }
}

const tree = new Node([new Leaf(1), new Leaf(2), new Leaf(3)]);
console.log(tree.accept(new SumVisitor()));
