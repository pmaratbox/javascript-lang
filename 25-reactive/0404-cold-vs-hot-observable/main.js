"use strict";

// A minimal push-based Observable implemented from scratch.
// An observer is { next, complete }; subscribe wires a producer to it.
class Observable {
  constructor(producer) {
    this.producer = producer;
  }
  subscribe(observer) {
    return this.producer(observer);
  }
}

// COLD: the producer runs independently for every subscriber.
function makeCold() {
  return new Observable((observer) => {
    for (const v of [1, 2, 3]) observer.next(v);
    observer.complete();
  });
}

// HOT: one shared producer. Subscribers are kept in a set; emitting fans out
// to whoever is currently subscribed, so late subscribers miss earlier values.
class Subject {
  constructor() {
    this.observers = new Set();
  }
  subscribe(observer) {
    this.observers.add(observer);
    return () => this.observers.delete(observer);
  }
  next(v) {
    for (const o of this.observers) o.next(v);
  }
  complete() {
    for (const o of this.observers) o.complete();
  }
}

function collector() {
  const values = [];
  return {
    values,
    observer: { next: (v) => values.push(v), complete: () => {} },
  };
}

// --- Cold demo: each subscriber re-runs the producer ---
const cold = makeCold();
const coldA = collector();
const coldB = collector();
cold.subscribe(coldA.observer);
cold.subscribe(coldB.observer);

console.log(`cold A: ${coldA.values.join(" ")}`);
console.log(`cold B: ${coldB.values.join(" ")}`);

// --- Hot demo: shared execution, interleaved with subscriptions ---
const hot = new Subject();
const hotA = collector();
const hotB = collector();

hot.subscribe(hotA.observer); // A subscribes first
hot.next(1); // emits 1 -> only A
hot.subscribe(hotB.observer); // B subscribes late, misses 1
hot.next(2); // -> A and B
hot.next(3); // -> A and B

console.log(`hot A: ${hotA.values.join(" ")}`);
console.log(`hot B: ${hotB.values.join(" ")}`);
