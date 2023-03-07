const express = require("express");
const router = express.Router();

const { users: ctrl } = require("../../controllers");

const {
  validation,
  authMiddleware,
  ctrlWrapper,
} = require("../../middlewares");
const { signupLoginJoiSchema } = require("../../models/joishemas");

router.post("/signup", validation(signupLoginJoiSchema), ctrl.signup);

router.post("/login", validation(signupLoginJoiSchema), ctrl.login);

router.get("/logout", authMiddleware, ctrlWrapper(ctrl.logout));

router.get("/current", authMiddleware, ctrlWrapper(ctrl.getCurrentUser));

module.exports = router;
