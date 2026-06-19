import { createContainer, asClass, Lifetime, InjectionMode } from 'awilix';

class Repo {
  data() {
    return 'data';
  }
}

const c = createContainer({ injectionMode: InjectionMode.PROXY });
c.register({
  repo: asClass(Repo, { lifetime: Lifetime.SINGLETON }),
});

const a = c.resolve('repo');
const b = c.resolve('repo');
console.log(a === b);
