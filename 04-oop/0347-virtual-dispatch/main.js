class Shape {
  describe() {
    return "shape";
  }
}

class Circle extends Shape {
  describe() {
    return "circle";
  }
}

class Square extends Shape {
  describe() {
    return "square";
  }
}

class Triangle extends Shape {
  describe() {
    return "triangle";
  }
}

const shapes = [new Circle(), new Square(), new Triangle()];
console.log(shapes.map((s) => s.describe()).join(" "));
