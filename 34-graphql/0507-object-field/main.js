import { graphql, buildSchema } from 'graphql';

const schema = buildSchema(`
  type User { name: String }
  type Query { user: User }
`);

const rootValue = {
  user: () => ({ name: 'alice' }),
};

const res = await graphql({ schema, source: '{ user { name } }', rootValue });

console.log(res.data.user.name);
