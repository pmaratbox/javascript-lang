# 0027 — File I/O

Write `hello, file` to a file, read it back, delete the file, and print `read: hello, file`. Node's `node:fs` module offers synchronous helpers — `writeFileSync`, `readFileSync` (with `"utf8"` to get a string rather than a `Buffer`), and `unlinkSync`. The `package.json` with `"type": "module"` enables the ESM `import`; async `fs/promises` variants are preferred in servers.

## Run

    node main.js
