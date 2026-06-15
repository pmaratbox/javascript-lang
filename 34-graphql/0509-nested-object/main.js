import { graphql, buildSchema } from 'graphql';

// Real GraphQL schema (graphql-js) with nested object types.
const schema = buildSchema(`
  type Address { city: String }
  type User { address: Address }
  type Query { user: User }
`);

// Resolvers return the data; nested fields are selected by the query.
const rootValue = {
  user: () => ({ address: { city: 'oslo' } }),
};

// Execute the query in-process and select through the nested object types.
const res = await graphql({
  schema,
  source: '{ user { address { city } } }',
  rootValue,
});

console.log(res.data.user.address.city);
