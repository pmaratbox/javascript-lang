class NullLogger {
  log() {}
}

class RealLogger {
  constructor() {
    this.count = 0;
  }
  log() {
    this.count += 1;
  }
}

const nullLogger = new NullLogger();
const realLogger = new RealLogger();
nullLogger.log("ignored");
realLogger.log("recorded");
console.log(realLogger.count);
