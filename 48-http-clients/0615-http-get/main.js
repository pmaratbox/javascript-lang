// GET request — global fetch client against an in-process node:http server.
// Group 48-http-clients/package.json is {"type":"module"}; fetch & node:http are built-in (node 26).
import http from 'node:http';

// Minimal in-process server exposing ONLY the route this lesson needs.
const server = http.createServer((req, res) => {
  const u = new URL(req.url, "http://x");
  if (u.pathname === "/hello") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("hello world");
  }
  res.writeHead(404);
  res.end();
});

await new Promise(r => server.listen(0, "127.0.0.1", r));   // ephemeral loopback port
const base = `http://127.0.0.1:${server.address().port}`;   // never PRINT the port

// Real client call: GET the route and read the response body.
const body = await (await fetch(base + "/hello")).text();
console.log(body);                                          // hello world

server.close();
