const express = require("express");
const router = express.Router();

const { users: ctrl } = require("../../controllers");

const {
  validation,
  authMiddleware,
  ctrlWrapper,
  upload,
} = require("../../middlewares");
const {
  signupLoginJoiSchema,
  schemaVerifyEmail,
} = require("../../models/joishemas");

router.post("/signup", validation(signupLoginJoiSchema), ctrl.signup);

router.post("/login", validation(signupLoginJoiSchema), ctrl.login);

router.get("/logout", authMiddleware, ctrlWrapper(ctrl.logout));

router.get("/current", authMiddleware, ctrlWrapper(ctrl.getCurrentUser));

router.patch(
  "/avatars",
  authMiddleware,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.veryfyEmail));

router.post(
  "/verify",
  validation(schemaVerifyEmail),
  ctrlWrapper(ctrl.resendEmail)
);

module.exports = router;
