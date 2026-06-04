class Glyph {
  constructor(char) {
    this.char = char;
  }
}

class GlyphFactory {
  constructor() {
    this.cache = new Map();
  }
  get(char) {
    if (!this.cache.has(char)) {
      this.cache.set(char, new Glyph(char));
    }
    return this.cache.get(char);
  }
}

const factory = new GlyphFactory();
for (const c of ["a", "b", "a"]) {
  factory.get(c);
}
console.log(factory.cache.size);
