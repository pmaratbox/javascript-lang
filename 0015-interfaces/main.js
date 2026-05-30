class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  name() {
    return "rectangle";
  }
  area() {
    return this.width * this.height;
  }
}

class Square {
  constructor(side) {
    this.side = side;
  }
  name() {
    return "square";
  }
  area() {
    return this.side * this.side;
  }
}

const shapes = [new Rectangle(3, 4), new Square(5)];
for (const s of shapes) {
  console.log(`${s.name()} area: ${s.area()}`);
}
