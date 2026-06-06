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
      let bestIdx = 0;
      for (let i = 1; i < this.queue.length; i++) {
        const a = this.queue[i];
        const b = this.queue[bestIdx];
        if (a.time < b.time || (a.time === b.time && a.seq < b.seq)) {
          bestIdx = i;
        }
      }
      const token = this.queue.splice(bestIdx, 1)[0];
      if (token.dead) continue;
      this.now = token.time;
      token.cb();
    }
  }
}

// A minimal push-based Observable implemented from scratch.
class Observable {
  constructor(producer) {
    this.producer = producer; // (observer) => void
  }

  subscribe(observer) {
    this.producer(observer);
  }
}

// A timed source: emits each value by scheduling it at the given virtual time.
function timed(scheduler, events) {
  return new Observable((observer) => {
    for (const [time, value] of events) {
      scheduler.schedule(time, () => observer.next(value));
    }
  });
}

// combineLatest: emit the pair of latest values whenever either source emits,
// once both have produced at least one value.
function combineLatest(a, b, project) {
  return new Observable((observer) => {
    let haveA = false;
    let haveB = false;
    let latestA;
    let latestB;

    const tryEmit = () => {
      if (haveA && haveB) {
        observer.next(project(latestA, latestB));
      }
    };

    a.subscribe({
      next: (v) => {
        latestA = v;
        haveA = true;
        tryEmit();
      },
    });
    b.subscribe({
      next: (v) => {
        latestB = v;
        haveB = true;
        tryEmit();
      },
    });
  });
}

const scheduler = new Scheduler();

// A schedules (1->1),(3->2); B schedules (2->10).
const a = timed(scheduler, [
  [1, 1],
  [3, 2],
]);
const b = timed(scheduler, [[2, 10]]);

const combined = combineLatest(a, b, (x, y) => `(${x}, ${y})`);

combined.subscribe({
  next: (pair) => console.log(pair),
});

scheduler.run();
