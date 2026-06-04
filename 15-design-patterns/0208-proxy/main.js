class RealSubject {
  request() {
    return "loaded";
  }
}

class VirtualProxy {
  constructor() {
    this.real = null;
  }
  request() {
    if (this.real === null) {
      this.real = new RealSubject();
    }
    return this.real.request();
  }
}

console.log(new VirtualProxy().request());
