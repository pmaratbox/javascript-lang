class Mediator {
  constructor() {
    this.colleagues = {};
  }
  register(name, colleague) {
    this.colleagues[name] = colleague;
  }
  route(to, message) {
    this.colleagues[to].receive(message);
  }
}

class Colleague {
  constructor(name, mediator) {
    this.name = name;
    this.mediator = mediator;
  }
  send(to, message) {
    this.mediator.route(to, message);
  }
  receive(message) {
    console.log(`${this.name} got: ${message}`);
  }
}

const mediator = new Mediator();
const a = new Colleague("A", mediator);
const b = new Colleague("B", mediator);
mediator.register("A", a);
mediator.register("B", b);
a.send("B", "hi");
