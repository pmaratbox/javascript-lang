const sub1 = { init() {} };
const sub2 = { init() {} };
const sub3 = { init() {} };

class Facade {
  start() {
    sub1.init();
    sub2.init();
    sub3.init();
    return "ready";
  }
}

console.log(new Facade().start());
