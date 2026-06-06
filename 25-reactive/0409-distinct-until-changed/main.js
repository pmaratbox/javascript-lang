"use strict";

// A minimal push-based Observable implemented from scratch.
// subscribe wires a producer to an observer { next, error, complete }.
function Observable(subscribe) {
  return { subscribe };
}

// Emit a fixed sequence of values synchronously.
function of(...values) {
  return Observable((observer) => {
    for (const value of values) observer.next(value);
    observer.complete();
  });
}

// distinctUntilChanged: forward a value only when it differs from the
// previously emitted one, dropping consecutive duplicates.
function distinctUntilChanged(source) {
  return Observable((observer) => {
    let hasLast = false;
    let last;
    return source.subscribe({
      next(value) {
        if (!hasLast || value !== last) {
          hasLast = true;
          last = value;
          observer.next(value);
        }
      },
      error: (err) => observer.error(err),
      complete: () => observer.complete(),
    });
  });
}

distinctUntilChanged(of(1, 1, 2, 2, 2, 3, 1)).subscribe({
  next: (value) => console.log(value),
  error: (err) => console.error(err),
  complete: () => {},
});
