const bcrypt = require("bcryptjs");
const { User } = require("../../models");
const { v4: uuidv4 } = require("uuid");
const { sendEmail } = require("../../helpers");

const signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({ message: `Email: ${email} already exist` });
    }

    const verificationToken = uuidv4();
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
      verificationToken,
    });

    await newUser.save();
    const mail = {
      to: email,
      subject: "Email confirmation",
      html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Follow the link to confirm your email</a>`,
    };

    await sendEmail(mail);

    res.status(201).json({ message: "User successfully created" });
  } catch (error) {
    next(error);
  }
};

module.exports = signup;
