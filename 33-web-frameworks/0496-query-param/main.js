import express from 'express';
import request from 'supertest';

const app = express();
app.get('/greet', (req, res) => res.send('hello ' + req.query.name));

const res = await request(app).get('/greet?name=alice');
console.log(res.text);
