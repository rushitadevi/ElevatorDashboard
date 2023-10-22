const mongoose = require("mongoose");

const userCollection = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: false,
    },
    sub: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("users", userCollection);
module.exports = Users;
