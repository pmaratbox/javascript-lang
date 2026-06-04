# 0228 — Parse Quoted CSV

Parse the CSV row `a,"b,c",d`, respecting the quoted comma, into three fields joined by pipes `a|b,c|d`. An in-quotes flag toggled on each quote character keeps the parser tiny in JavaScript.

## Run

    node main.js
