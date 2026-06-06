'use strict';

// Virtual-time scheduler: deterministic, no real timers.
class Scheduler {
  constructor() {
    this.queue = [];
    this.seq = 0;
    this.clock = 0;
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
      this.clock = token.time;
      token.cb();
    }
  }
}

// A timed source: emits the given (time -> value) pairs relative to a base time.
function timedSource(scheduler, baseTime, events) {
  return {
    subscribe(observer) {
      for (const [t, value] of events) {
        scheduler.schedule(baseTime + t, () => observer.next(value));
      }
    },
  };
}

// flatMap / mergeMap: map each outer value to an inner timed stream and
// merge all inners concurrently (no cancellation).
function flatMap(scheduler, source, project) {
  return {
    subscribe(observer) {
      source.subscribe({
        next(value) {
          const inner = project(value, scheduler.clock);
          inner.subscribe({ next: (v) => observer.next(v) });
        },
      });
    },
  };
}

const scheduler = new Scheduler();

// Outer schedules (10 -> 1), (20 -> 2).
const outer = timedSource(scheduler, 0, [
  [10, 1],
  [20, 2],
]);

// For each outer value n, inner schedules (now+5 -> n) and (now+30 -> n*10).
const merged = flatMap(scheduler, outer, (n, now) =>
  timedSource(scheduler, now, [
    [5, n],
    [30, n * 10],
  ])
);

merged.subscribe({ next: (v) => console.log(v) });

scheduler.run();
