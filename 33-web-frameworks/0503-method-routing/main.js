import express from 'express';
import request from 'supertest';

const app = express();
app.use(express.json());

app.get('/item', (req, res) => res.send('get'));
app.post('/item', (req, res) => res.send('post'));

const res = await request(app).post('/item');
console.log(res.text);
