// dependencies
const mongoose = require("mongoose"),
  //model mongo DB to stock email and hashed password of our users

  authSchema = mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLenght: 6,
    },
    words: {
      type: Number,
      required: true,
    },
  });
const AuthModel = mongoose.model("user", authSchema);

module.exports = AuthModel;
