class Counter {
  constructor() {
    this.value = 0;
  }
}

class AddCommand {
  constructor(counter, amount) {
    this.counter = counter;
    this.amount = amount;
  }
  execute() {
    this.counter.value += this.amount;
  }
  undo() {
    this.counter.value -= this.amount;
  }
}

const counter = new Counter();
const command = new AddCommand(counter, 5);
command.execute();
const after = counter.value;
command.undo();
console.log(`${after} ${counter.value}`);
