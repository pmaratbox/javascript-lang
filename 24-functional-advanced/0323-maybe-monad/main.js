const Some = (v) => ({ tag: "some", v });
const None = { tag: "none" };

const bind = (m, f) => (m.tag === "some" ? f(m.v) : None);

const r1 = bind(bind(Some(2), (x) => Some(x + 3)), (x) => Some(x * 2));
const r2 = bind(bind(None, (x) => Some(x + 3)), (x) => Some(x * 2));

const show = (m) => (m.tag === "some" ? String(m.v) : "none");

console.log(`${show(r1)} ${show(r2)}`);
