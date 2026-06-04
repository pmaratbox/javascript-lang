class Account {
  #balance;

  constructor(initial) {
    this.#balance = initial;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  get balance() {
    return this.#balance;
  }
}

const account = new Account(100);
account.deposit(50);
console.log(account.balance);
