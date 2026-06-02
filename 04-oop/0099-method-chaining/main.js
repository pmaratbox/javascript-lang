class Calc {
  constructor(value) {
    this.value = value;
  }
  add(n) {
    this.value += n;
    return this;
  }
  multiply(n) {
    this.value *= n;
    return this;
  }
  result() {
    return this.value;
  }
}

console.log(new Calc(5).add(3).multiply(2).result());
