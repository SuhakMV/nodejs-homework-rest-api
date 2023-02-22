const error = require("http-errors");
const contactsModule = require("../../models/contacts");

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsModule.removeContact(contactId);
  if (!result) {
    throw new error(`Contact with id=${contactId} not found`);
  }
  res.json(result);
};

module.exports = deleteById;
