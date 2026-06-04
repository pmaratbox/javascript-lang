# 0208 — Virtual Proxy

Use a lazy virtual proxy that loads the real subject only on first access, printing `loaded`. The proxy holds `null` until the first `request()`, then constructs and delegates to the real subject.

## Run

    node main.js
