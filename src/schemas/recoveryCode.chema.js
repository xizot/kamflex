const Joi = require('joi');
export const recoveryCodeSchema = {
  value: Joi.string().required().messages({
    'string.base': `"recoveryCode" should be a type of 'text' or empty`,
    'string.empty': `"recoveryCode" cannot be an empty field`,
    'any.required': `"recoveryCode" is a required field`,
  }),
};
