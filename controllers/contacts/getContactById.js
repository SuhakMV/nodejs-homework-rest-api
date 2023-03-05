const error = require("http-errors");
const { Contact } = require("../../models");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const {_id} = req.user;
  const result = await Contact.findById(contactId, _id);
  if (!result) {
    throw new error(`Contact with id=${contactId} not found`);
  }
  res.status(200).json(result);
};

module.exports = getContactById;
