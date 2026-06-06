# 0434 — FlatMap (mergeMap)

Use the library's flatMap/mergeMap on a virtual/test scheduler, mapping each outer value to a timed inner stream and merging them. Built with RxJS `mergeMap` driven by a `TestScheduler` so the timed `timer` sources are deterministic.

## Run

    node main.js
