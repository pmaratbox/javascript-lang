import { graphql, buildSchema } from 'graphql';

const schema = buildSchema(`
  type User { name: String }
  type Query { _empty: String }
  type Mutation { addUser(name: String!): User }
`);

const rootValue = {
  addUser: ({ name }) => ({ name }),
};

const source = 'mutation { addUser(name: "bob") { name } }';

const res = await graphql({ schema, source, rootValue });

console.log(res.data.addUser.name);
