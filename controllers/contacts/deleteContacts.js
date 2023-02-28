const error = require("http-errors");
const { Contact } = require("../../models");

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw new error(`Contact with id=${contactId} not found`);
  }
  res.json(result);
};

module.exports = deleteById;
