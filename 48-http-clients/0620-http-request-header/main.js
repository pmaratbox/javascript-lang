// JavaScript — global fetch + node:http in-process server (loopback ephemeral port). Run: node main.js
// GET /token echoes the request header X-Token in the body.
import http from 'node:http';

const server = http.createServer((req, res) => {
  const u = new URL(req.url, "http://x");
  if (u.pathname === "/token") {
    res.writeHead(200);
    return res.end(req.headers["x-token"] || "");
  }
  res.writeHead(404);
  res.end();
});

await new Promise(r => server.listen(0, "127.0.0.1", r));
const base = `http://127.0.0.1:${server.address().port}`;   // never PRINT the port

const body = await (await fetch(base + "/token", { headers: { "X-Token": "secret" } })).text();
console.log(body);                                          // secret

server.close();
