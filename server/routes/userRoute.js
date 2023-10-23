const express = require("express");
const UserSchema = require("../models/User");
const verifyToken = require("../middleware");
const router = express.Router();

router.post("/save", verifyToken, async (req, res) => {
  try {
    const dataToSave = req.body;

    const user = await UserSchema.findOne({ email: dataToSave.email });
    if (user) res.status(200).json({ message: "User already exists." });
    else {
      const userData = new UserSchema(dataToSave);
      await userData.save();
      res.status(200).json({ message: "User saved successfully." });
    }
  } catch (exx) {
    res.statusCode = 500;
    res.send(exx);
  }
});

module.exports = router;
