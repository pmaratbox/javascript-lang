import express from 'express';
import request from 'supertest';

const app = express();
app.use(express.json());

app.post('/sum', (req, res) => {
  const { a, b } = req.body;
  res.json(a + b);
});

const res = await request(app).post('/sum').send({ a: 2, b: 3 });
console.log(res.body);
