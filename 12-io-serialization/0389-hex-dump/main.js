const bytes = Buffer.from("Hi", "utf8");
console.log([...bytes].map((b) => b.toString(16).padStart(2, "0")).join(" "));
