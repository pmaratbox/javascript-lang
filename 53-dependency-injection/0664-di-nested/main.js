import { createContainer, asClass, InjectionMode } from 'awilix';

class A {
  v() {
    return 'a';
  }
}

class B {
  constructor({ a }) {
    this.a = a;
  }
  v() {
    return this.a.v() + 'b';
  }
}

class C {
  constructor({ b }) {
    this.b = b;
  }
  v() {
    return this.b.v() + 'c';
  }
}

const c = createContainer({ injectionMode: InjectionMode.PROXY });
c.register({
  a: asClass(A),
  b: asClass(B),
  c: asClass(C),
});

console.log(c.resolve('c').v());
