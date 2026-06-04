class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `Point(${this.x}, ${this.y})`;
  }
}

const p = new Point(1, 2);
console.log(`${p}`);
