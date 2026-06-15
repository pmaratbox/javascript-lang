import { graphql, buildSchema } from 'graphql';

const schema = buildSchema(`type Query { numbers: [Int] }`);

const res = await graphql({
  schema,
  source: '{ numbers }',
  rootValue: { numbers: () => [1, 2, 3] },
});

for (const n of res.data.numbers) {
  console.log(n);
}
