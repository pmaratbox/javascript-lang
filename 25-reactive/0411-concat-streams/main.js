'use strict';

// A minimal push-based Observable implemented from scratch.
// An observer is { next, error, complete }; subscribe wires a producer to it.
function observable(producer) {
  return { subscribe: (observer) => producer(observer) };
}

// concat(a, b): subscribe to a; on a.complete subscribe to b; on b.complete complete.
function concat(a, b) {
  return observable((observer) => {
    a.subscribe({
      next: (v) => observer.next(v),
      error: (e) => observer.error(e),
      complete: () =>
        b.subscribe({
          next: (v) => observer.next(v),
          error: (e) => observer.error(e),
          complete: () => observer.complete(),
        }),
    });
  });
}

// A synchronous source that emits the given values then completes.
function fromValues(values) {
  return observable((observer) => {
    for (const v of values) observer.next(v);
    observer.complete();
  });
}

const a = fromValues([1, 2]);
const b = fromValues([3, 4]);

concat(a, b).subscribe({
  next: (v) => console.log(v),
  error: (e) => console.error(e),
  complete: () => {},
});
