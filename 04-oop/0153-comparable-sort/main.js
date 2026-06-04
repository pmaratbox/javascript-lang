class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const people = [new Person("alice", 30), new Person("bob", 25)];
people.sort((a, b) => a.age - b.age);
console.log(people.map((p) => p.name).join(" "));
