const coffee = { cost: () => 2 };
const milk = (c) => ({ cost: () => c.cost() + 1 });
const sugar = (c) => ({ cost: () => c.cost() + 1 });

const order = sugar(milk(coffee));
console.log(order.cost());
