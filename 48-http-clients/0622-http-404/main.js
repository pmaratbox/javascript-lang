// JavaScript — global fetch + node:http in-process server (loopback ephemeral port). Run: node main.js
// Group 48-http-clients/package.json is just {"type":"module"} — NO deps (fetch & node:http are built-in node 26).
import http from 'node:http';

const server = http.createServer((req, res) => {
  // No route is defined, so every request falls through to 404.
  res.writeHead(404);
  res.end();
});

await new Promise(r => server.listen(0, "127.0.0.1", r));
const base = `http://127.0.0.1:${server.address().port}`;   // never PRINT the port

// Request a route the server does not define -> the client reports status 404.
const status = (await fetch(base + "/missing")).status;
console.log(status);                                         // 404

server.close();
