const Ok = (value) => ({ ok: true, value });
const Err = (msg) => ({ ok: false, msg });

const safeDiv = (a, b) => (b === 0 ? Err("divide by zero") : Ok(a / b));

const show = (r) => (r.ok ? `ok: ${r.value}` : `err: ${r.msg}`);

console.log(show(safeDiv(10, 2)));
console.log(show(safeDiv(1, 0)));
