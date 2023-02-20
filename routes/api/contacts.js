const express = require("express");
const router = express.Router();

const { contacts: ctrl } = require("../../controllers");

const { validation, ctrlWrapper } = require("../../middlewares");
const { contactSchema } = require("../../schemas");

const validateMiddleware = validation(contactSchema);

router.get("/", ctrlWrapper(ctrl.getAllContacts));
router.get("/:contactId", ctrlWrapper(ctrl.getContactById));
router.post("/", validateMiddleware, ctrlWrapper(ctrl.addContacts));
router.delete("/:contactId", ctrlWrapper(ctrl.deleteById));
router.put(
  "/:contactId",
  validation(contactSchema),
  ctrlWrapper(ctrl.updateContact)
);

module.exports = router;
