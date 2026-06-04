class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const p = new Point(0, 0);
console.log(Object.keys(p).join(" "));
