const getCurrentUser = async (req, res, next) => {
  const { email, subscription } = req.user;
  try {
    res.json({
      email,
      subscription,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getCurrentUser;
