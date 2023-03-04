const Joi = require("joi");

const addContactSchema = Joi.object({
    name: Joi.string().trim().required(),
    email: Joi.string().email().trim().required(),
    phone: Joi.string().required(),
    favorite: Joi.boolean(),
  });
  
  const updateContactSchema = Joi.object({
    name: Joi.string().trim().required(),
    email: Joi.string().email().trim().required(),
    phone: Joi.string().required(),
    favorite: Joi.boolean(),
  });
  
  const favoriteStatusSchema = Joi.object({
    favorite: Joi.boolean(),
  });

  module.exports = {
    addContactSchema,
    updateContactSchema,
    favoriteStatusSchema,
  };