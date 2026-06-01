class Animal {
  speak() {
    return "some sound";
  }
}

class Dog extends Animal {
  speak() {
    return "Woof";
  }
}

console.log("animal:", new Animal().speak());
console.log("dog:", new Dog().speak());
