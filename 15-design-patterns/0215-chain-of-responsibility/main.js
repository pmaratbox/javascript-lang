class Handler {
  constructor(level) {
    this.level = level;
    this.next = null;
  }
  setNext(handler) {
    this.next = handler;
    return handler;
  }
  handle(request) {
    if (request === this.level) {
      console.log(`handled by ${this.level}`);
    } else if (this.next) {
      this.next.handle(request);
    }
  }
}

const h1 = new Handler(1);
const h2 = new Handler(2);
const h3 = new Handler(3);
h1.setNext(h2).setNext(h3);
h1.handle(2);
