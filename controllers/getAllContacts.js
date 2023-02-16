const contacts = require("../models/contacts");

const getAllContacts = async (req, res, next) => {
  console.log("get All");
  try {
    const result = await contacts.listContacts();
    console.log(result);
    res.json({
      status: "success",
      code: 200,
      data: {
        result: contacts,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllContacts;
