// dependencies
const mongoose = require("mongoose"),
  //model mongo DB to count the number of word of ouf users in 24h

  totalOfWordsSchema = mongoose.Schema({
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    words: {
      type: Number,
      required: true,
    },
  });
const TotalOfWordsModel = mongoose.model("words", totalOfWordsSchema);

module.exports = TotalOfWordsModel;
