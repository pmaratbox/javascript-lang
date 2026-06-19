# 0654 — Retry on result

This lesson uses JavaScript's `p-retry` library to retry based on the returned value rather than on a thrown error. A scripted operation returns an incrementing counter, and the retry policy keeps trying while the result is `< 3` (by rejecting to trigger another attempt). On the third attempt it returns `3`, which is accepted, so the program prints the accepted result `3`.

## Run

    node main.js
