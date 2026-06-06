"use strict";

// Virtual-time scheduler: a priority queue of (time, seq, callback).
class Scheduler {
  constructor() {
    this.queue = [];
    this.seq = 0;
    this.now = 0;
  }

  schedule(time, cb) {
    const token = { time, seq: this.seq++, cb, dead: false };
    this.queue.push(token);
    return token;
  }

  cancel(token) {
    if (token) token.dead = true;
  }

  run() {
    while (this.queue.length > 0) {
      let idx = 0;
      for (let i = 1; i < this.queue.length; i++) {
        const a = this.queue[i];
        const b = this.queue[idx];
        if (a.time < b.time || (a.time === b.time && a.seq < b.seq)) {
          idx = i;
        }
      }
      const token = this.queue.splice(idx, 1)[0];
      if (token.dead) continue;
      this.now = token.time;
      token.cb();
    }
  }
}

// A minimal push-based Observable built from scratch.
class Observable {
  constructor(producer) {
    this._producer = producer;
  }

  subscribe(observer) {
    return this._producer(observer);
  }
}

// Source that schedules each (value, time) emission on the scheduler.
function timed(scheduler, events) {
  return new Observable((observer) => {
    for (const [value, time] of events) {
      scheduler.schedule(time, () => observer.next(value));
    }
  });
}

// throttle(window): leading edge. Emit a value, then suppress further
// values for `window` ticks.
function throttle(scheduler, window) {
  return (source) =>
    new Observable((observer) => {
      let blockUntil = 0;
      return source.subscribe({
        next(value) {
          if (scheduler.now >= blockUntil) {
            observer.next(value);
            blockUntil = scheduler.now + window;
          }
        },
        error(err) { observer.error && observer.error(err); },
        complete() { observer.complete && observer.complete(); },
      });
    });
}

const scheduler = new Scheduler();
const source = timed(scheduler, [
  ["a", 10],
  ["b", 20],
  ["c", 100],
  ["d", 110],
]);

throttle(scheduler, 30)(source).subscribe({
  next: (value) => console.log(value),
});

scheduler.run();
