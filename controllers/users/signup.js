const bcrypt = require("bcryptjs");
const { User } = require("../../models");

const signup = async (req, res, next) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res.status(409).json({ message: "Email in use" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User successfully created" });
  } catch (error) {
    next(error);
  }
};

module.exports = signup;
