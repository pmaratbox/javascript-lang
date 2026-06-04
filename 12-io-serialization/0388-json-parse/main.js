const obj = JSON.parse('{"x":1,"y":2}');
console.log(Object.entries(obj).map(([k, v]) => `${k}=${v}`).join(" "));
