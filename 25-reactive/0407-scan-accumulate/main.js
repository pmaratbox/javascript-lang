"use strict";

// A minimal push-based Observable implemented from scratch.
// An observer is { next, error, complete }; subscribe wires a producer to it.
function Observable(subscribe) {
  return { subscribe };
}

// Emits the given values synchronously, then completes.
function of(...values) {
  return Observable((observer) => {
    for (const value of values) observer.next(value);
    observer.complete();
  });
}

// scan emits the running accumulation: state seeded with acc,
// for each value state = f(state, value) and emits state.
function scan(source, acc, f) {
  return Observable((observer) => {
    let state = acc;
    return source.subscribe({
      next: (value) => {
        state = f(state, value);
        observer.next(state);
      },
      error: (e) => observer.error(e),
      complete: () => observer.complete(),
    });
  });
}

const source = of(1, 2, 3, 4);
const sums = scan(source, 0, (state, value) => state + value);

sums.subscribe({
  next: (value) => console.log(value),
  error: (e) => console.error(e),
  complete: () => {},
});
