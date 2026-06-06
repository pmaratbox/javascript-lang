'use strict';

// Fine-grained reactivity from scratch: a writable signal tracks subscribers,
// a computed registers a recompute callback as a subscriber of the signals it reads.

function createSignal(initial) {
  let value = initial;
  const subscribers = new Set();

  function read(subscriber) {
    if (subscriber) subscribers.add(subscriber);
    return value;
  }
  read.set = (next) => {
    value = next;
    for (const sub of subscribers) sub();
  };
  return read;
}

function createComputed(fn) {
  let cache;
  const recompute = () => {
    cache = fn(recompute);
  };
  recompute();
  return { read: () => cache };
}

const a = createSignal(2);
const b = createSignal(3);

const sum = createComputed((self) => a(self) + b(self));

console.log(sum.read());

a.set(10);

console.log(sum.read());
