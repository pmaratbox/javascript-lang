const inner = new Error("inner");
const outer = new Error("outer", { cause: inner });
console.log(`${outer.message}: ${outer.cause.message}`);
