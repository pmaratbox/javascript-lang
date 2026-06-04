// Mixins compose capabilities by copying methods onto a class prototype.
const A = (Base) =>
  class extends Base {
    a() {
      return "a";
    }
  };

const B = (Base) =>
  class extends Base {
    b() {
      return "b";
    }
  };

class Composed extends B(A(Object)) {}

const c = new Composed();
console.log(`${c.a()} ${c.b()}`);
