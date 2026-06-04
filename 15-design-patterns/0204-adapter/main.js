class CelsiusSource {
  constructor(celsius) {
    this.celsius = celsius;
  }
}

class FahrenheitAdapter {
  constructor(source) {
    this.source = source;
  }
  fahrenheit() {
    return (this.source.celsius * 9) / 5 + 32;
  }
}

const adapter = new FahrenheitAdapter(new CelsiusSource(100));
console.log(adapter.fahrenheit());
