'use strict';

// A minimal push-based Observable implemented from scratch.
// An observer is an object with next/error/complete; subscribe wires a
// producer (the subscribe function) to that observer.
class Observable {
  constructor(subscribe) {
    this._subscribe = subscribe;
  }

  subscribe(observer) {
    return this._subscribe(observer);
  }
}

// map: returns a new Observable whose `next` forwards f(value).
function map(source, f) {
  return new Observable((observer) =>
    source.subscribe({
      next: (value) => observer.next(f(value)),
      error: (err) => observer.error(err),
      complete: () => observer.complete(),
    })
  );
}

// Source that synchronously emits the given values, then completes.
function of(...values) {
  return new Observable((observer) => {
    for (const value of values) observer.next(value);
    observer.complete();
  });
}

const source = of(1, 2, 3, 4);
const doubled = map(source, (x) => x * 2);

doubled.subscribe({
  next: (value) => console.log(value),
  error: () => {},
  complete: () => {},
});
