//model
const AuthModel = require("../models/authModel");

async function countWords(req, res, next) {
  //req.userId
  //req.wordsToday
  let result;
  try {
    result = await AuthModel.findByIdAndUpdate(req.userId, {
      words: req.wordsToday,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "rror from count word" });
  }
  console.log(result);
  next();
}
module.exports = countWords;
