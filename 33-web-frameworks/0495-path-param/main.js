import express from 'express';
import request from 'supertest';

const app = express();
app.get('/users/:id', (req, res) => res.send(req.params.id));

const res = await request(app).get('/users/42');
console.log(res.text);
