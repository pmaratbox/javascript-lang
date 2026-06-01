class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(other) {
    return new Point(this.x + other.x, this.y + other.y);
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}

console.log(new Point(1, 2).add(new Point(3, 4)).toString());
