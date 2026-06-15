import Joi from 'joi';

const schema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required(),
});

// 'not-an-email' is malformed -> joi's .email() validator fails on `email`.
const { error } = schema.validate({ email: 'not-an-email' }, { abortEarly: false });

if (!error) {
  console.log('ok');
} else {
  const fields = [...new Set(error.details.map((d) => String(d.path[0]).toLowerCase()))].sort();
  console.log(fields.join('\n'));
}
