class UserId {
  constructor(value) {
    this.value = value;
  }
  toString() {
    return `user-${this.value}`;
  }
}

class ProductId {
  constructor(value) {
    this.value = value;
  }
  toString() {
    return `prod-${this.value}`;
  }
}

const u = new UserId(1);
const p = new ProductId(2);

console.log(`${u} ${p}`);
