class Pizza {
  constructor(size, toppings) {
    this.size = size;
    this.toppings = toppings;
  }

  toString() {
    return `Pizza(${this.size}, ${this.toppings.join(", ")})`;
  }
}

class PizzaBuilder {
  #size = "M";
  #toppings = [];

  setSize(size) {
    this.#size = size;
    return this;
  }

  addTopping(topping) {
    this.#toppings.push(topping);
    return this;
  }

  build() {
    return new Pizza(this.#size, this.#toppings);
  }
}

const pizza = new PizzaBuilder().setSize("M").addTopping("cheese").build();
console.log(pizza.toString());
