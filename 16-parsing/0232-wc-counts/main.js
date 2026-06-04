const text = "a b\nc";
const words = text.split(/\s+/).filter(Boolean).length;
const lines = text.split("\n").length;
const chars = text.length;
console.log(`${words} ${lines} ${chars}`);
