# 0418 — ReplaySubject

Implement a ReplaySubject with a buffer of the last 2 values, replayed to a late subscriber, which then also receives new values. A class holds a bounded buffer (trimmed with `shift`) that is replayed on `subscribe` before the observer joins the live list.

## Run

    node main.js
