const path = require("path");
const fs = require("fs/promises");
const { User } = require("../../models");
const Jimp = require("jimp");

const publicDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { path: tmpUpload, originalname } = req.file;
  const { _id } = req.user;
  const [, extention] = originalname.split(".");
  const imageName = `${_id}.${extention}`;
  const resultUpload = path.join(publicDir, imageName);

  try {
    const image = await Jimp.read(tmpUpload);
    await image
      .autocrop()
      .cover(
        250,
        250,
        Jimp.HORIZONTAL_ALIGN_CENTER || Jimp.VERTICAL_ALIGN_MIDDLE
      )
      .writeAsync(tmpUpload);

    await fs.rename(tmpUpload, resultUpload);

    const avatarURL = `/avatars/${imageName}`;

    await User.findByIdAndUpdate(_id, { avatarURL });
    res.status(200).json({ avatarURL });
  } catch (error) {
    await fs.unlink(tmpUpload);
    throw error;
  }
};

module.exports = updateAvatar;
