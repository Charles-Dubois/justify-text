//model
const AuthModel = require("../models/authModel");

async function countWords(req, res, next) {
  //req.userId

  let user, result;
  try {
    // add the number of word actually justified to the number justify this day
    user = await AuthModel.findById(req.userId).select("words");
    req.wordsToday = user.words + req.wordsToday;
    result = await AuthModel.findByIdAndUpdate(req.userId, {
      words: req.wordsToday,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "error from count word" });
  }
  if (result.words >= 80000) {
    return res.status(402).json({ message: "Payment Required." });
  }

  next();
}
module.exports = countWords;
