# 0493 — Hello route

Defines a single `GET /` route with the `express` web framework that returns the text `hello`. The route is exercised entirely in-process using `supertest`, which dispatches a request straight to the Express app object without binding a fixed listening port, then prints the response body (`res.text`) read from the real HTTP response. The output is `hello`.

## Run

    node main.js
