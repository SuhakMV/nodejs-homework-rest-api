const jwt = require("jsonwebtoken");
const { User } = require("../models");
const { Unauthorized } = require("http-errors");
require("dotenv").config();

const authMiddleware = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  try {
    if (bearer !== "Bearer" || !token) {
      return next(new Unauthorized("Not authorized!"));
    }

    const { id } = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.verify || !user.token) {
      return next(new Unauthorized("Email is wrong or not verify, or password is wrong!"));
    }
    req.user = user;
    next();
  } catch (error) {
    if(error.message = "Invalid signature"){
      error.status = 401;
    }
    next(error);
  }
};

module.exports = authMiddleware;
