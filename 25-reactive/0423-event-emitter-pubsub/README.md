# 0423 — EventEmitter (Pub/Sub)

Build a multi-topic EventEmitter with on(topic, handler), emit(topic, payload), and off(topic, handler). A `Map` from topic to a handler array keeps subscriptions simple, and `off` removes a handler by identity via `indexOf`/`splice`.

## Run

    node main.js
