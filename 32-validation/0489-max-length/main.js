import Joi from 'joi';

const schema = Joi.object({
  code: Joi.string().max(5),
});

const input = { code: 'ABCDEFG' };

const { error } = schema.validate(input, { abortEarly: false });

if (!error) {
  console.log('ok');
} else {
  const fields = [...new Set(error.details.map((d) => String(d.path[0]).toLowerCase()))].sort();
  console.log(fields.join('\n'));
}
