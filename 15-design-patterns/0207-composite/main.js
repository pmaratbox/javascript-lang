class Leaf {
  constructor(value) {
    this.value = value;
  }
  size() {
    return this.value;
  }
}

class Composite {
  constructor(children) {
    this.children = children;
  }
  size() {
    return this.children.reduce((sum, c) => sum + c.size(), 0);
  }
}

const tree = new Composite([new Leaf(1), new Leaf(2), new Leaf(3)]);
console.log(tree.size());
