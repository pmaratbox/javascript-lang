# 0416 — Subject Multicast

Implement a Subject that multicasts each emission to all current observers; two observers both receive 1 then 2. In idiomatic JavaScript the Subject holds an array of observer objects and `next` iterates them, calling each observer's `next` closure in registration order.

## Run

    node main.js
