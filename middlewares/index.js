const validation = require("./validation");
const ctrlWrapper = require("./ctrlWrapper");
const authMiddleware = require("./auth");
const upload = require("./upload");

module.exports = {
  validation,
  ctrlWrapper,
  authMiddleware,
  upload,
};
