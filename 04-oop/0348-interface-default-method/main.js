// JavaScript has no interfaces; a base class supplies the default greet().
class Greeter {
  greet() {
    return "hi";
  }
}

class LoudGreeter extends Greeter {
  greet() {
    return "hey";
  }
}

console.log(`${new Greeter().greet()} ${new LoudGreeter().greet()}`);
