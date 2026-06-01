function greet(name, greeting = "Hello") {
  return `${greeting}, ${name}`;
}

console.log(greet("Ada"));
console.log(greet("Ada", "Hi"));
