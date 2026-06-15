import { graphql, buildSchema } from 'graphql';

const schema = buildSchema(`
  type User {
    name: String
    age: Int
  }
  type Query {
    user: User
  }
`);

const rootValue = {
  user: () => ({ name: 'alice', age: 30 }),
};

const res = await graphql({
  schema,
  source: '{ user { name age } }',
  rootValue,
});

console.log(res.data.user.name);
console.log(res.data.user.age);
