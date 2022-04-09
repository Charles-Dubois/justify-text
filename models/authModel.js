// dependencies
const mongoose = require("mongoose"),
  //model mongo DB

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
  });
const AuthModel = mongoose.model("user", authSchema);

module.exports = AuthModel;
