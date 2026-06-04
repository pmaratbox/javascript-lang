const template = "hi {name}";
const vars = { name: "Ada" };
const result = template.replace(/\{(\w+)\}/g, (_, key) => vars[key]);
console.log(result);
