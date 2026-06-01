class Shape {
  area() {
    throw new Error("not implemented");
  }
  describe() {
    return `area: ${this.area()}`;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  area() {
    return this.side * this.side;
  }
}

console.log(new Square(3).describe());
