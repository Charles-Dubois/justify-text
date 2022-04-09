const res = require("express/lib/response");

// split the body, insert into the body balise </br>, and join it
function justifyBody(req, _res, next) {
  console.log(req.body);
  let textArray = req.body.split("");

  req.wordsToday = req.body.split(" ").length;
  for (let charater = 1; charater < textArray.length; charater++) {
    if (charater % 79 === 0) {
      textArray.splice(charater, 0, "</br>");
    }
    req.body = textArray.join("");
  }
}

module.exports = justifyBody;
