class WithMin {
  constructor() {
    this.stack = [];
    this.mins = [];
  }

  push(value) {
    this.stack.push(value);
    const min = this.mins.length === 0 ? value : Math.min(value, this.getMin());
    this.mins.push(min);
  }

  pop() {
    this.mins.pop();
    return this.stack.pop();
  }

  getMin() {
    return this.mins[this.mins.length - 1];
  }
}

const stack = new WithMin();
for (const v of [3, 1, 2]) stack.push(v);
console.log(`min: ${stack.getMin()}`);
