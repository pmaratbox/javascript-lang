import { createContainer, asClass, InjectionMode } from 'awilix';

class Greeter {
  greet() {
    return 'hello';
  }
}

const container = createContainer({ injectionMode: InjectionMode.PROXY });

container.register({
  greeter: asClass(Greeter),
});

const greeter = container.resolve('greeter');
console.log(greeter.greet());
