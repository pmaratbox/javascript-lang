// A Subject multicasts each emission to all current observers.

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  next(value) {
    for (const observer of this.observers) {
      observer.next(value);
    }
  }
}

const subject = new Subject();

subject.subscribe({ next: (v) => console.log(`obs1: ${v}`) });
subject.subscribe({ next: (v) => console.log(`obs2: ${v}`) });

subject.next(1);
subject.next(2);
