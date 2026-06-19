// JavaScript — global fetch + node:http in-process server (loopback ephemeral port). Run: node main.js
import http from 'node:http';

const server = http.createServer((req, res) => {
  const u = new URL(req.url, "http://x");
  if (u.pathname === "/hello") { res.writeHead(200, {"Content-Type":"text/plain"}); return res.end("hello world"); }
  res.writeHead(404); res.end();
});

await new Promise(r => server.listen(0, "127.0.0.1", r));
const base = `http://127.0.0.1:${server.address().port}`;   // never PRINT the port

const res = await fetch(base + "/hello");
console.log(res.status);   // 200

server.close();
