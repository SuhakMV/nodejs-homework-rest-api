const { Contact } = require("../../models");
const NotFound = require("http-errors");

const updateContact = async (req, res) => {
  const { _id } = req.user;
  const { contactId } = req.params;
  const result = await Contact.findOneAndUpdate(
    { _id: contactId, owner: _id },
    req.body,
    { new: true }
  );
  console.log(result);
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
  res.status(200).json(result);
};
module.exports = updateContact;
