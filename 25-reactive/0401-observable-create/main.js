"use strict";

// A push-based Observable built from scratch: it is just a function that
// takes an observer { next, complete } and drives it on subscribe.
function ObservableCreate(subscribe) {
  return { subscribe };
}

const numbers = ObservableCreate((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
});

numbers.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("done"),
});
