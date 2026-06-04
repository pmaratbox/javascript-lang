# 0105 — Channels / Message Passing

Send the values 1, 2, 3 through a channel (or queue) from one thread and receive them in order, printing `1 2 3`. An async generator acts as the channel, with `for await` consuming each yielded value in send order.

## Run

    node main.js
