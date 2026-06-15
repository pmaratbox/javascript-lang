// Built-in JSON: rename a code field to a different JSON key via toJSON().
// The code uses `fullName`, but the serialized key is `full_name`.
class Person {
  constructor(fullName) {
    this.fullName = fullName;
  }
  // toJSON is the JSON.stringify hook — map the code field to the renamed key.
  toJSON() {
    return { full_name: this.fullName };
  }
}

const p = new Person('alice');
console.log(JSON.stringify(p));
