const Right = (v) => ({ tag: "right", v });
const Left = (e) => ({ tag: "left", e });

const bind = (m, f) => (m.tag === "right" ? f(m.v) : m);

const safeDiv = (a, b) => (b === 0 ? Left("err") : Right(a / b));

const r1 = bind(bind(Right(8), (x) => safeDiv(x, 2)), (x) => safeDiv(x, 2));
const r2 = bind(Right(8), (x) => safeDiv(x, 0));

const show = (m) => (m.tag === "right" ? String(m.v) : m.e);

console.log(`${show(r1)} ${show(r2)}`);
