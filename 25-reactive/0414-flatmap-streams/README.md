# 0414 — FlatMap (mergeMap)

Implement flatMap/mergeMap: map each outer value to an inner timed stream and merge all inners concurrently (no cancellation). Each inner subscribes immediately and pushes into the shared observer, so emissions interleave by virtual time.

## Run

    node main.js
