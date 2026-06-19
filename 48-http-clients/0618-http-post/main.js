// JavaScript — global fetch + node:http in-process server (loopback ephemeral port). Run: node main.js
import http from 'node:http';

const server = http.createServer((req, res) => {
  const u = new URL(req.url, "http://x");
  if (u.pathname === "/echo" && req.method === "POST") {
    let b = "";
    req.on("data", c => b += c);
    return req.on("end", () => { res.writeHead(200); res.end(b); });
  }
  res.writeHead(404); res.end();
});

await new Promise(r => server.listen(0, "127.0.0.1", r));
const base = `http://127.0.0.1:${server.address().port}`;   // never PRINT the port

const res = await fetch(base + "/echo", { method: "POST", body: "ping" });
console.log(await res.text());   // ping

server.close();
