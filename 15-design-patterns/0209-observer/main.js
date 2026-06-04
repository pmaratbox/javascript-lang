class Subject {
  constructor() {
    this.observers = [];
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  notify(value) {
    for (const observer of this.observers) {
      observer.update(value);
    }
  }
}

const makeObserver = (id) => ({
  update(value) {
    console.log(`${id}: ${value}`);
  },
});

const subject = new Subject();
subject.subscribe(makeObserver("obs1"));
subject.subscribe(makeObserver("obs2"));
subject.notify(5);
