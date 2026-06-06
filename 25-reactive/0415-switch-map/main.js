"use strict";

// Virtual-time scheduler: priority queue of (time, seq, callback).
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
      const [token] = this.queue.splice(bestIdx, 1);
      if (token.dead) continue;
      this.now = token.time;
      token.cb();
    }
  }
}

// A source emits its events by scheduling them at the given virtual times.
function timedSource(scheduler, events) {
  return (observer) => {
    const tokens = [];
    for (const [time, value] of events) {
      tokens.push(scheduler.schedule(time, () => observer.next(value)));
    }
    // Return an unsubscribe that cancels pending emissions.
    return () => {
      for (const t of tokens) scheduler.cancel(t);
    };
  };
}

// switchMap: when a new outer value arrives, cancel the previous inner
// subscription before starting the new one.
function switchMap(scheduler, source, project) {
  return (observer) => {
    let currentInner = null;
    return source({
      next: (value) => {
        if (currentInner) currentInner(); // cancel previous inner
        const inner = project(value);
        currentInner = inner({ next: (v) => observer.next(v) });
      },
    });
  };
}

const scheduler = new Scheduler();

const outer = timedSource(scheduler, [
  [10, 1],
  [20, 2],
]);

const program = switchMap(scheduler, outer, (n) =>
  timedSource(scheduler, [
    [scheduler.now + 5, n],
    [scheduler.now + 30, n * 10],
  ])
);

program({ next: (v) => console.log(v) });

scheduler.run();
