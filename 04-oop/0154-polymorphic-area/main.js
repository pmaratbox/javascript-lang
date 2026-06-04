class Shape {
  area() {
    throw new Error("not implemented");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  area() {
    return (this.base * this.height) / 2;
  }
}

const shapes = [new Rectangle(2, 3), new Triangle(4, 4)];
const total = shapes.reduce((sum, shape) => sum + shape.area(), 0);
console.log(`total area: ${total}`);
