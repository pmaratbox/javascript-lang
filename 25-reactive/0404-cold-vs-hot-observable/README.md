# 0404 — Cold vs Hot Observable

Contrast a cold observable (re-runs its producer per subscriber) with a hot one (shares a single execution, so late subscribers miss earlier values). The cold source is a producer closure replayed on each subscribe, while the hot one is a Subject fanning out to a Set of current observers.

## Run

    node main.js
