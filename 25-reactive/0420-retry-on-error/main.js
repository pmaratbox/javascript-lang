"use strict";

// A minimal push-based Observable implemented from scratch.
// subscribe(observer) wires a producer to an observer { next, error, complete }.
function Observable(subscribe) {
  return { subscribe };
}

// retry(n): on error, resubscribe to the source up to n more times.
function retry(source, n) {
  return Observable((observer) => {
    let remaining = n;
    const trySubscribe = () => {
      source.subscribe({
        next: (v) => observer.next(v),
        error: (e) => {
          if (remaining > 0) {
            remaining -= 1;
            trySubscribe();
          } else {
            observer.error(e);
          }
        },
        complete: () => observer.complete(),
      });
    };
    trySubscribe();
  });
}

// The source: counts subscriptions; errors for k<3, succeeds on k=3.
let attempts = 0;
const source = Observable((observer) => {
  attempts += 1;
  const k = attempts;
  console.log(`attempt ${k}`);
  if (k < 3) {
    observer.error(new Error("fail"));
  } else {
    observer.next("ok");
    observer.complete();
  }
});

// retry(2) allows up to 2 resubscriptions after the first: attempts 1,2,3.
retry(source, 2).subscribe({
  next: (v) => console.log(v),
  error: (e) => console.log(`error: ${e.message}`),
  complete: () => {},
});
