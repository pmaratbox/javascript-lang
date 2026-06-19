import { createContainer, asClass, Lifetime, InjectionMode } from 'awilix';

class Repo {
  data() {
    return 'data';
  }
}

class Service {
  constructor({ repo }) {
    this.repo = repo;
  }

  run() {
    return this.repo.data();
  }
}

const c = createContainer({ injectionMode: InjectionMode.PROXY });
c.register({
  repo: asClass(Repo, { lifetime: Lifetime.SINGLETON }),
  service: asClass(Service),
});

console.log(c.resolve('service').run());
