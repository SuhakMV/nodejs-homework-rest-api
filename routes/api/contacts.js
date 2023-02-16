const express = require("express");
const router = express.Router();

const getAllContacts = require("../../controllers/getAllContacts");
const getContactById = require("../../controllers/getContactById");
const addContact = require("../../controllers/addContacts");
const deleteById = require("../../controllers/deleteContacts");
const updateContact = require("../../controllers/updateContacts");

router.get("/", getAllContacts);
router.get("/:contactId", getContactById);
router.post("/", addContact);
router.delete("/:contactId", deleteById);
router.put("/:contactId", updateContact);

module.exports = router;
