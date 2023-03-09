const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const getCurrentUser = require("./currentUser");
const updateAvatar = require("./updateAvatar");
const veryfyEmail = require("./verifyEmail");
const resendEmail = require("./resendEmail");

module.exports = {
  signup,
  login,
  logout,
  getCurrentUser,
  updateAvatar,
  veryfyEmail,
  resendEmail,
};
