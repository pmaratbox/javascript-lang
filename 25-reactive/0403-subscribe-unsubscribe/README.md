# 0403 — Subscribe and Unsubscribe

Return a Subscription from subscribe() and use it to unsubscribe so later values are not delivered. In JavaScript the subscription is a plain object exposing unsubscribe() that flips a closed flag the synchronous producer checks before each emission.

## Run

    node main.js
