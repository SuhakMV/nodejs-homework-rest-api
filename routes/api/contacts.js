const express = require("express");
const router = express.Router();

const { contacts: ctrl } = require("../../controllers");

const { validation, ctrlWrapper } = require("../../middlewares");
const schema = require("../../models/contacts");

router.get("/", ctrlWrapper(ctrl.getAllContacts));
router.get("/:contactId", ctrlWrapper(ctrl.getContactById));
router.post(
  "/",
  validation(schema.addContactSchema),
  ctrlWrapper(ctrl.addContacts)
);
router.delete("/:contactId", ctrlWrapper(ctrl.deleteById));
router.put(
  "/:contactId",
  validation(schema.updateContactSchema),
  ctrlWrapper(ctrl.updateContact)
);
router.patch(
  "/:contactId/favorite",
  validation(schema.favoriteStatusSchema),
  ctrlWrapper(ctrl.favoriteStatusContact)
);

module.exports = router;
