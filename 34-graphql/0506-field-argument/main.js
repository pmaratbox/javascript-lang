import { graphql, buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    greet(name: String!): String
  }
`);

const rootValue = {
  greet: ({ name }) => 'hello ' + name,
};

const res = await graphql({
  schema,
  source: '{ greet(name: "alice") }',
  rootValue,
});

console.log(res.data.greet);
