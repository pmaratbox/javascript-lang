"use strict";

// Virtual-time scheduler: a priority queue of (time, seq, callback).
class Scheduler {
  constructor() {
    this.queue = [];
    this.seq = 0;
    this.now = 0;
  }

  schedule(time, cb) {
    const token = { time, seq: this.seq++, cb, cancelled: false };
    this.queue.push(token);
    return token;
  }

  cancel(token) {
    if (token) token.cancelled = true;
  }

  run() {
    while (this.queue.length > 0) {
      let bestIdx = 0;
      for (let i = 1; i < this.queue.length; i++) {
        const a = this.queue[i];
        const b = this.queue[bestIdx];
        if (a.time < b.time || (a.time === b.time && a.seq < b.seq)) {
          bestIdx = i;
        }
      }
      const [token] = this.queue.splice(bestIdx, 1);
      if (token.cancelled) continue;
      this.now = token.time;
      token.cb();
    }
  }
}

// A push-based Observable built from scratch.
class Observable {
  constructor(producer) {
    this.producer = producer;
  }

  subscribe(observer) {
    return this.producer(observer);
  }
}

// A timed source: emits each value by scheduling it at its virtual time.
function timed(scheduler, events) {
  return new Observable((observer) => {
    for (const [time, value] of events) {
      scheduler.schedule(time, () => observer.next(value));
    }
  });
}

// merge: subscribe to both sources onto the same observer.
function merge(a, b) {
  return new Observable((observer) => {
    a.subscribe(observer);
    b.subscribe(observer);
  });
}

const scheduler = new Scheduler();

const streamA = timed(scheduler, [[10, 1], [30, 3], [50, 5]]);
const streamB = timed(scheduler, [[20, 2], [40, 4], [60, 6]]);

merge(streamA, streamB).subscribe({
  next: (v) => console.log(v),
  error: (e) => console.error(e),
  complete: () => {},
});

scheduler.run();
