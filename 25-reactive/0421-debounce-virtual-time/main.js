"use strict";

// Virtual-time scheduler: a priority queue of (time, seq, cb).
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

// Minimal push-based Observable implemented from scratch.
function fromSchedule(scheduler, events) {
  return (observer) => {
    for (const [value, time] of events) {
      scheduler.schedule(time, () => observer.next(value));
    }
    // Signal completion after the last scheduled event.
    const endTime = events.reduce((m, [, t]) => Math.max(m, t), 0);
    scheduler.schedule(endTime, () => {
      if (observer.complete) observer.complete();
    });
  };
}

function debounce(scheduler, window) {
  return (source) => (observer) => {
    let pending = null;
    source({
      next(value) {
        scheduler.cancel(pending);
        pending = scheduler.schedule(scheduler.now + window, () => {
          pending = null;
          observer.next(value);
        });
      },
      complete() {
        if (observer.complete) observer.complete();
      },
    });
  };
}

const scheduler = new Scheduler();

const source = fromSchedule(scheduler, [
  ["a", 10],
  ["b", 20],
  ["c", 100],
]);

const debounced = debounce(scheduler, 30)(source);

debounced({
  next(value) {
    console.log(value);
  },
});

scheduler.run();
