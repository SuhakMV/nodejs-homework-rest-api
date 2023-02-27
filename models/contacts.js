const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

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

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  addContactSchema,
  updateContactSchema,
  favoriteStatusSchema,
};
