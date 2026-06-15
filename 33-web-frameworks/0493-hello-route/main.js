import express from 'express';
import request from 'supertest';

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('hello'));

const res = await request(app).get('/');
console.log(res.text);
