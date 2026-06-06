"use strict";

// A minimal push-based Observable implemented from scratch.
// subscribe(observer) wires a producer to an observer and returns an
// unsubscribe function so consumers can stop the producer at any time.

function naturals() {
  // Unbounded source of 1, 2, 3, ... It keeps emitting while subscribed,
  // checking a "stopped" flag the unsubscribe function flips.
  return function subscribe(observer) {
    let stopped = false;
    let value = 0;
    while (!stopped) {
      value += 1;
      observer.next(value);
    }
    return () => {
      stopped = true;
    };
  };
}

function take(source, n) {
  return function subscribe(observer) {
    let count = 0;
    let unsubscribe = () => {};
    let done = false;

    unsubscribe = source({
      next(value) {
        if (done) return;
        if (count < n) {
          count += 1;
          observer.next(value);
          if (count === n) {
            done = true;
            observer.complete();
            unsubscribe(); // stop the infinite source
          }
        }
      },
      error(err) {
        observer.error(err);
      },
      complete() {
        observer.complete();
      },
    });

    return unsubscribe;
  };
}

take(naturals(), 3)({
  next(value) {
    console.log(value);
  },
  error(err) {
    console.error(err);
  },
  complete() {
    console.log("completed");
  },
});
