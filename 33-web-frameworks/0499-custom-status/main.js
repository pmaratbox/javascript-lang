import express from 'express';
import request from 'supertest';

const app = express();
app.use(express.json());

// POST /create responds with a custom 201 (Created) status code.
app.post('/create', (req, res) => res.status(201).send('created'));

// Exercise the route in-process via supertest (ephemeral port, no fixed listen).
const res = await request(app).post('/create');

// Print the real status code returned by the framework.
console.log(res.statusCode);
