const getAllContacts = require("./getAllContacts");
const getContactById = require("./getContactById");
const addContacts = require("./addContacts");
const updateContact = require("./updateContacts");
const deleteById = require("./deleteContacts");
const favoriteStatusContact = require("./favoriteContact");

module.exports = {
  getAllContacts,
  getContactById,
  addContacts,
  updateContact,
  deleteById,
  favoriteStatusContact,
};
