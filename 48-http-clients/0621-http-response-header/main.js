// JavaScript — global fetch + node:http in-process server (loopback ephemeral port). Run: node main.js
// Group 48-http-clients/package.json is just {"type":"module"} — NO deps (fetch & node:http are built-in node 26).
import http from 'node:http';

const server = http.createServer((req, res) => {
  const u = new URL(req.url, "http://x");
  if (u.pathname === "/info") { res.writeHead(200, {"X-Count":"7"}); return res.end(); }
  res.writeHead(404); res.end();
});

await new Promise(r => server.listen(0, "127.0.0.1", r));
const base = `http://127.0.0.1:${server.address().port}`;   // never PRINT the port

const resp = await fetch(base + "/info");
console.log(resp.headers.get("x-count"));   // 7

server.close();
