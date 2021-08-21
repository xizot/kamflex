const Joi = require('joi');
const usernameSchema = {
  value: Joi.string().min(3).max(32).required().messages({
    'string.base': `"username" should be a type of 'text' or email`,
    'string.empty': `"username" cannot be an empty field`,
    'string.min': `"username" should have a minimum length of {#limit}`,
    'string.max': `"username" should have a maximum length of {#limit}`,
    'any.required': `"username" is a required field`,
  }),
};

const emailSchema = {
  value: Joi.string()
    .max(320)
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': `"email" cannot be an empty field`,
      'string.max': `"email" should have a maximum length of {#limit}`,
      'any.required': `"email" is a required field`,
    }),
};

const displaynameSchema = {
  value: Joi.string().optional().allow('').max(32).messages({
    'string.base': `"displayname" should be a type of 'text' or empty`,
    'string.max': `"displayname" should have a maximum length of {#limit}`,
  }),
};

export { usernameSchema, emailSchema, displaynameSchema };
