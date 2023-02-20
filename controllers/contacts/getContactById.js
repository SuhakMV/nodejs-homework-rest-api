const error = require("http-errors");
const contactsModule = require("../../models/contacts");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsModule.getContactById(contactId);
  if (!result) {
    throw new error(`Contact with id=${contactId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getContactById;
