const some = (value) => ({ some: true, value });
const none = { some: false };

const mapOpt = (f, opt) => (opt.some ? some(f(opt.value)) : opt);
const unwrapOr = (opt, fallback) => (opt.some ? opt.value : fallback);

const f = (x) => x + 2;

const a = unwrapOr(mapOpt(f, some(10)), "none");
const b = unwrapOr(mapOpt(f, none), "none");

console.log(`${a} ${b}`);
