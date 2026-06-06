"use strict";

// A ReplaySubject buffers the last N emitted values and replays them to any
// late subscriber, which then also receives subsequent values.
class ReplaySubject {
  constructor(bufferSize) {
    this.bufferSize = bufferSize;
    this.buffer = [];
    this.observers = [];
  }

  subscribe(observer) {
    // Replay buffered values immediately to the new subscriber.
    for (const value of this.buffer) {
      observer.next(value);
    }
    this.observers.push(observer);
  }

  next(value) {
    this.buffer.push(value);
    if (this.buffer.length > this.bufferSize) {
      this.buffer.shift();
    }
    for (const observer of this.observers) {
      observer.next(value);
    }
  }
}

const subject = new ReplaySubject(2);

// Emit before anyone subscribes; buffer keeps the last 2 ([2, 3]).
subject.next(1);
subject.next(2);
subject.next(3);

// Late subscriber gets the buffered 2 then 3, then live values.
subject.subscribe({ next: (value) => console.log(value) });

subject.next(4);
