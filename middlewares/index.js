const validation = require('./validation');
const ctrlWrapper = require("./ctrlWrapper");
const authMiddleware = require("./auth");

module.exports = {
    validation,
    ctrlWrapper,
    authMiddleware
}