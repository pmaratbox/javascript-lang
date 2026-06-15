import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().min(3),
  age: Joi.number().integer().min(0).max(120),
});

// age 200 is above the max of 120 -> the `age` field fails.
const input = { name: 'alice', age: 200 };

const { error } = schema.validate(input, { abortEarly: false });

if (!error) {
  console.log('ok');
} else {
  const fields = [...new Set(error.details.map((d) => String(d.path[0]).toLowerCase()))].sort();
  console.log(fields.join('\n'));
}
