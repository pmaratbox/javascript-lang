import { createContainer, asClass, InjectionMode } from 'awilix';

// Animal is the abstraction (interface). Dog is one implementation.
class Dog {
  sound() {
    return 'woof';
  }
}

const c = createContainer({ injectionMode: InjectionMode.PROXY });

// Bind the "animal" interface token to the Dog implementation.
c.register({
  animal: asClass(Dog),
});

// Resolve by the interface token, not the concrete class.
const animal = c.resolve('animal');
console.log(animal.sound());
