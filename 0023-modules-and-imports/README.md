# 0023 — Modules & Imports

Define `square(n)` in a separate `mathutil` module and import it from the main program, printing `square(8) = 64` across the module boundary. ES modules use `export`/`import`: `mathutil.js` exports `square` and `main.js` imports it by relative path, with the `.js` extension that ESM requires. The `package.json` with `"type": "module"` tells Node to treat `.js` files as ES modules rather than CommonJS.

## Run

    node main.js
