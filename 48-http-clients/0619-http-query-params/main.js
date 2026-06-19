// JavaScript — global fetch + node:http in-process server (loopback ephemeral port). Run: node main.js
// Group 48-http-clients/package.json is just {"type":"module"} — NO deps (fetch & node:http are built-in node 26).
import http from 'node:http';

// Minimal in-process server: GET /greet reads the `name` query param and returns `hi <name>`.
const server = http.createServer((req, res) => {
  const u = new URL(req.url, "http://x");
  if (u.pathname === "/greet") {
    res.writeHead(200);
    return res.end("hi " + u.searchParams.get("name"));
  }
  res.writeHead(404);
  res.end();
});

await new Promise(r => server.listen(0, "127.0.0.1", r));
const base = `http://127.0.0.1:${server.address().port}`;   // never PRINT the port

// Client call: send the `name` query parameter and print the body.
console.log(await (await fetch(base + "/greet?name=Bob")).text());   // hi Bob

server.close();
