const Joi = require("joi");

const addContactSchema = Joi.object({
  name: Joi.string().trim().required(),
  email: Joi.string().email().trim().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const favoriteStatusSchema = Joi.object({
  favorite: Joi.boolean(),
});

const signupLoginJoiSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const schemaVerifyEmail = Joi.object({
  email: Joi.required().messages({
    message: "Missing required field email",
  }),
});

module.exports = {
  addContactSchema,
  favoriteStatusSchema,
  signupLoginJoiSchema,
  schemaVerifyEmail
};
