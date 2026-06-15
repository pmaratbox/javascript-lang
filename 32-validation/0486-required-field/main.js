import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().min(3).required(),
  age: Joi.number().min(0).max(120).required(),
});

// name present, age MISSING -> the required `age` field fails.
const { error } = schema.validate({ name: 'alice' }, { abortEarly: false });

if (!error) {
  console.log('ok');
} else {
  const fields = [...new Set(error.details.map(d => String(d.path[0]).toLowerCase()))].sort();
  console.log(fields.join('\n'));
}
