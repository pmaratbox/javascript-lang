import Joi from 'joi';

const schema = Joi.object({
  password: Joi.string().custom((value, helpers) => {
    if (!/[0-9]/.test(value)) {
      return helpers.error('any.invalid');
    }
    return value;
  }),
});

const input = { password: 'abcdef' };

const { error } = schema.validate(input, { abortEarly: false });

if (!error) {
  console.log('ok');
} else {
  const fields = [...new Set(error.details.map((d) => String(d.path[0]).toLowerCase()))].sort();
  console.log(fields.join('\n'));
}
