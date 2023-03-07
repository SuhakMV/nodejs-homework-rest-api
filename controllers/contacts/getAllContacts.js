const { Contact } = require("../../models");

const getAllContacts = async (req, res) => {
  const {_id} = req.user;
  const result = await Contact.find({owner: _id});
  res.status(200).json(result);
};

module.exports = getAllContacts;
