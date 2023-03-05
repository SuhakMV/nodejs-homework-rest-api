const { Contact } = require("../../models");
const NotFound = require("http-errors");

const favoriteContact = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const { _id } = req.user;
  const result = await Contact.findByIdAndUpdate(
    contactId,
    {owner: _id, favorite},
    {
      new: true
    }
  );
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
  res.status(200).json(result);
};
module.exports = favoriteContact;
