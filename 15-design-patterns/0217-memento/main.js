class Originator {
  constructor(state) {
    this.state = state;
  }
  save() {
    return { state: this.state };
  }
  restore(memento) {
    this.state = memento.state;
  }
}

const originator = new Originator(1);
const memento = originator.save();
originator.state = 2;
const current = originator.state;
originator.restore(memento);
console.log(`${current} ${originator.state}`);
