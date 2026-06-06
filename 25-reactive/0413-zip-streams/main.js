'use strict';

// A push-based Observable implemented from scratch.
// An observer is { next, error, complete }; subscribe wires a producer to it.
function Observable(subscribe) {
  return { subscribe };
}

// zip: pairs values by index and combines them with `combine`.
// Each source is buffered in its own queue; whenever both queues are
// non-empty we dequeue one from each and emit combine(x, y).
function zip(a, b, combine) {
  return Observable((observer) => {
    const qa = [];
    const qb = [];
    let doneA = false;
    let doneB = false;

    const drain = () => {
      while (qa.length > 0 && qb.length > 0) {
        observer.next(combine(qa.shift(), qb.shift()));
      }
      if ((doneA && qa.length === 0) || (doneB && qb.length === 0)) {
        observer.complete();
      }
    };

    a.subscribe({
      next: (x) => { qa.push(x); drain(); },
      error: (e) => observer.error(e),
      complete: () => { doneA = true; drain(); },
    });

    b.subscribe({
      next: (y) => { qb.push(y); drain(); },
      error: (e) => observer.error(e),
      complete: () => { doneB = true; drain(); },
    });
  });
}

const fromArray = (xs) =>
  Observable((observer) => {
    for (const x of xs) observer.next(x);
    observer.complete();
  });

const a = fromArray([1, 2, 3]);
const b = fromArray([10, 20, 30]);

zip(a, b, (x, y) => x + y).subscribe({
  next: (v) => console.log(v),
  error: () => {},
  complete: () => {},
});
