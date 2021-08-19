const Joi = require('joi');
export const usernameSchema = {
  value: Joi.string().min(3).max(32).required().messages({
    'string.base': `"username" should be a type of 'text' or email`,
    'string.empty': `"username" cannot be an empty field`,
    'string.min': `"username" should have a minimum length of {#limit}`,
    'string.max': `"username" should have a maximum length of {#limit}`,
    'any.required': `"username" is a required field`,
  }),
};
