const Joi = require('joi');
const passwordschema = {
  value: Joi.string().required().messages({
    'string.base': `"password" should be a type of 'text'`,
    'string.empty': `"password" cannot be an empty field`,
    'any.required': `"password" is a required field`,
  }),
};

const confirmpasswordSchema = {
  value: Joi.string().required().messages({
    'string.empty': `"retype password" cannot be an empty field`,
    'any.required': `"retype password" must match password`,
  }),
};

export { passwordschema, confirmpasswordSchema };
