const express = require("express");
const router = express.Router();

const { users: ctrl } = require("../../controllers");

const { validation, authMiddleware, ctrlWrapper } = require("../../middlewares");
const { signupJoiSchema, loginJoiSchema } = require("../../models/joishemas");

router.post("/signup", validation(signupJoiSchema), ctrl.signup);

router.post("/login", validation(loginJoiSchema), ctrl.login);

router.get("/logout", authMiddleware, ctrlWrapper(ctrl.logout));

router.get("/current", authMiddleware, ctrlWrapper(ctrl.getCurrentUser));

module.exports = router;
