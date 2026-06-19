// POST JSON, parse JSON — global fetch + node:http in-process server (loopback ephemeral port).
import http from 'node:http';

const server = http.createServer((req, res) => {
  const u = new URL(req.url, "http://x");
  if (u.pathname === "/double" && req.method === "POST") {
    let b = "";
    req.on("data", c => b += c);
    return req.on("end", () => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ doubled: JSON.parse(b).x * 2 }));
    });
  }
  res.writeHead(404);
  res.end();
});

await new Promise(r => server.listen(0, "127.0.0.1", r));
const base = `http://127.0.0.1:${server.address().port}`;   // never PRINT the port

const reply = await fetch(base + "/double", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ x: 5 }),
});
const data = await reply.json();
console.log(data.doubled);   // 10

server.close();
