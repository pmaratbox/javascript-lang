'use strict';

// A push-based Observable implemented from scratch. subscribe() wires the
// producer to an observer and returns a Subscription whose unsubscribe()
// flips a "closed" flag the producer checks before each emission.
class Observable {
  constructor(producer) {
    this._producer = producer;
  }

  subscribe(observer) {
    let closed = false;
    const safeObserver = {
      next(value) {
        if (!closed && observer.next) observer.next(value);
      },
      error(err) {
        if (!closed && observer.error) observer.error(err);
      },
      complete() {
        if (!closed && observer.complete) observer.complete();
      },
      get closed() {
        return closed;
      },
    };
    const subscription = {
      unsubscribe() {
        closed = true;
      },
    };
    // Make the subscription reachable from the observer during emission,
    // so a consumer can unsubscribe synchronously from inside next().
    observer.subscription = subscription;
    this._producer(safeObserver);
    return subscription;
  }
}

// Source that would push 1,2,3,4 but checks "closed" before each next.
const source = new Observable((observer) => {
  for (const value of [1, 2, 3, 4]) {
    if (observer.closed) break;
    observer.next(value);
  }
});

let count = 0;
const observer = {
  subscription: null,
  next(value) {
    console.log(value);
    count += 1;
    if (count === 2) this.subscription.unsubscribe();
  },
};
observer.subscription = source.subscribe(observer);
