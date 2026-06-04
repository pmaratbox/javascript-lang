class Red {
  name() {
    return "red";
  }
}

class Circle {
  constructor(color) {
    this.color = color;
  }
  describe() {
    return `${this.color.name()} circle`;
  }
}

console.log(new Circle(new Red()).describe());
