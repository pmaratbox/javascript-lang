import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().min(3),
  age: Joi.number().integer().min(0).max(120),
});

const input = { name: 'al', age: 200 };

const { error } = schema.validate(input, { abortEarly: false });

if (!error) {
  console.log('ok');
} else {
  const fields = [...new Set(error.details.map((d) => String(d.path[0]).toLowerCase()))].sort();
  console.log(fields.join('\n'));
}
