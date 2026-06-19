// JavaScript — global fetch (real HTTP client) + node:http in-process server. Run: node main.js
import http from 'node:http';

const server = http.createServer((req, res) => {
  const u = new URL(req.url, "http://x");
  if (u.pathname === "/item" && req.method === "PUT") { res.writeHead(200); return res.end("updated"); }
  res.writeHead(404); res.end();
});

await new Promise(r => server.listen(0, "127.0.0.1", r));
const base = `http://127.0.0.1:${server.address().port}`;   // never PRINT the port

console.log(await (await fetch(base + "/item", { method: "PUT" })).text());

server.close();
