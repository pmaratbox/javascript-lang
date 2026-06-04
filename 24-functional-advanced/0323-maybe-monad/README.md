# 0323 — Maybe Monad

Chain Maybe operations: Some(2) then +3 then *2 gives 10, and a None chain yields the fallback, printing `10 none`. `bind` threads the value through Some and short-circuits on None.

## Run

    node main.js
