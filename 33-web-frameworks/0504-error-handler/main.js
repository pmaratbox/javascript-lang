import express from 'express';
import request from 'supertest';

const app = express();

// GET /boom: the route handler throws a real error.
app.get('/boom', (req, res) => {
  throw new Error('boom');
});

// Express error-handling middleware (4 args) catches the thrown error
// and turns it into a 500 response.
app.use((err, req, res, next) => {
  res.status(500).send('internal server error');
});

// Silence Express's default error logging so only the status prints.
const noop = () => {};
console.error = noop;

// Exercise the route in-process via supertest (ephemeral port, no fixed listen).
const res = await request(app).get('/boom');

// Print the real status code produced by the framework's error handling.
console.log(res.statusCode);
