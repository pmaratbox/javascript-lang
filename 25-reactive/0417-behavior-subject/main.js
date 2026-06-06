"use strict";

// A BehaviorSubject holds a "current" value and replays it immediately to
// each new subscriber, then forwards every subsequent next() to all observers.
class BehaviorSubject {
  constructor(initial) {
    this.current = initial;
    this.observers = new Set();
  }

  subscribe(observer) {
    this.observers.add(observer);
    observer.next(this.current); // replay current value immediately
    return { unsubscribe: () => this.observers.delete(observer) };
  }

  next(value) {
    this.current = value;
    for (const observer of this.observers) observer.next(value);
  }
}

const subject = new BehaviorSubject(0);

subject.subscribe({ next: (v) => console.log(`A: ${v}`) }); // A: 0
subject.next(1); // A: 1
subject.subscribe({ next: (v) => console.log(`B: ${v}`) }); // B: 1
subject.next(2); // A: 2, B: 2
