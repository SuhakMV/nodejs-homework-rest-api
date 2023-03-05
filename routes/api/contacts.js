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
  validation(schema.addContactSchema),
  authMiddleware,
  ctrlWrapper(ctrl.addContacts)
);
router.delete("/:contactId", authMiddleware, ctrlWrapper(ctrl.deleteById));
router.put(
  "/:contactId",
  validation(schema.addContactSchema),
  authMiddleware,
  ctrlWrapper(ctrl.updateContact)
);
router.patch(
  "/:contactId/favorite",
  
  validation(schema.favoriteStatusSchema), authMiddleware,
  ctrlWrapper(ctrl.favoriteStatusContact)
);

module.exports = router;
