import { graphql, buildSchema } from 'graphql';

const schema = buildSchema(`
  type Item { id: Int }
  type Query { item(id: Int!): Item }
`);

const rootValue = {
  item: ({ id }) => ({ id }),
};

const source = 'query($id: Int!) { item(id: $id) { id } }';
const variableValues = { id: 42 };

const res = await graphql({ schema, source, rootValue, variableValues });
console.log(res.data.item.id);
