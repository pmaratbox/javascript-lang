import { createContainer, asClass, asValue, InjectionMode } from 'awilix';

class Service {
  constructor({ config }) {
    this.config = config;
  }

  value() {
    return this.config;
  }
}

const c = createContainer({ injectionMode: InjectionMode.PROXY });
c.register({
  config: asValue('v1'),
  service: asClass(Service),
});

console.log(c.resolve('service').value());
