# 0680 — Topological sort

Using the **graphlib** library, build a fixed directed acyclic graph (DAG) and compute its *topological order* with `alg.topsort`. A topological sort lists every node before all nodes it points to. With edges `a->b`, `b->c`, `a->c`, `c->d`, `d->e` the order is uniquely determined as `a,b,c,d,e`.

## Run

    node main.js
