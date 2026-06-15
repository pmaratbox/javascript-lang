import express from 'express';
import request from 'supertest';

const app = express();

// Middleware: wrap res.send so the response body is prefixed with `[mw] `.
app.use((req, res, next) => {
  const original = res.send.bind(res);
  res.send = (body) => original(`[mw] ${body}`);
  next();
});

app.get('/', (req, res) => res.send('hello'));

const res = await request(app).get('/');
console.log(res.text);
