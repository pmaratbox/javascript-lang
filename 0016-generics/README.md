# 0016 — Generics

Define a generic `first` function that returns the first element of a list, then call it on a list of integers and a list of strings to show one definition working at two types. JavaScript has no generics and no static types at all — a function simply accepts whatever it is given, so `first` works on an array of any element type without annotation. The genericity is implicit in the dynamic typing; `items[0]` returns whatever was stored there.

## Run

    node main.js
