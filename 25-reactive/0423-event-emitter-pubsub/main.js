"use strict";

class EventEmitterPubsub {
  constructor() {
    this.topics = new Map();
  }

  on(topic, handler) {
    if (!this.topics.has(topic)) {
      this.topics.set(topic, []);
    }
    this.topics.get(topic).push(handler);
  }

  emit(topic, payload) {
    const handlers = this.topics.get(topic);
    if (!handlers) return;
    for (const handler of handlers) {
      handler(payload);
    }
  }

  off(topic, handler) {
    const handlers = this.topics.get(topic);
    if (!handlers) return;
    const idx = handlers.indexOf(handler);
    if (idx !== -1) {
      handlers.splice(idx, 1);
    }
  }
}

const bus = new EventEmitterPubsub();

const h = (payload) => console.log(`hi ${payload}`);
const g = (payload) => console.log(`bye ${payload}`);

bus.on("greet", h);
bus.on("bye", g);

bus.emit("greet", "ada");
bus.emit("bye", "ada");

bus.off("greet", h);
bus.emit("greet", "x");
