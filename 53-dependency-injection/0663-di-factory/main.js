import { createContainer, asFunction, InjectionMode } from 'awilix';

// Factory provider: a plain function builds and returns the service object.
function makeService() {
  return {
    value() {
      return 'built';
    },
  };
}

const c = createContainer({ injectionMode: InjectionMode.PROXY });
c.register({
  service: asFunction(makeService),
});

console.log(c.resolve('service').value());
