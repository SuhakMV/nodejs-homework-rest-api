const express = require("express");
const router = express.Router();

const { contacts: ctrl } = require("../../controllers");

const {
  validation,
  ctrlWrapper,
  authMiddleware,
} = require("../../middlewares");
const schema = require("../../models/joishemas");

router.get("/", authMiddleware, ctrlWrapper(ctrl.getAllContacts));
router.get("/:contactId", authMiddleware, ctrlWrapper(ctrl.getContactById));
router.post(
  "/",
  authMiddleware,
  validation(schema.addContactSchema),
  ctrlWrapper(ctrl.addContacts)
);
router.delete("/:contactId", authMiddleware, ctrlWrapper(ctrl.deleteById));
router.put(
  "/:contactId",
  authMiddleware,
  validation(schema.addContactSchema),
  ctrlWrapper(ctrl.updateContact)
);
router.patch(
  "/:contactId/favorite",
  authMiddleware,
  validation(schema.favoriteStatusSchema),
  ctrlWrapper(ctrl.favoriteStatusContact)
);

module.exports = router;
