"use strict";

// A safe observer enforcing the contract next*-then-terminal.
// On the first terminal (complete or error) a "stopped" flag is set;
// afterwards next() and further terminals become no-ops.
function makeObserver({ next, error, complete }) {
  let stopped = false;
  return {
    next(value) {
      if (stopped) return;
      next(value);
    },
    error(err) {
      if (stopped) return;
      stopped = true;
      if (error) error(err);
    },
    complete() {
      if (stopped) return;
      stopped = true;
      if (complete) complete();
    },
  };
}

const observer = makeObserver({
  next: (v) => console.log(v),
  complete: () => console.log("complete"),
});

observer.next(1);
observer.next(2);
observer.complete();
observer.next(3); // ignored: observer already stopped
