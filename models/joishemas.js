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

  const signupJoiSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
  });
  
  const loginJoiSchema = Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string().required(),
  });

  module.exports = {
    addContactSchema,
    favoriteStatusSchema,
    signupJoiSchema,
    loginJoiSchema
  };