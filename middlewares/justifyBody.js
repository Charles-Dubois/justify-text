// split the body, insert into the body balise </br>, and join it
function justifyBody(req, _res, next) {
  let textArray = req.body.split("");

  for (let charater = 1; charater < textArray.length; charater++) {
    if (charater % 79 === 0) {
      textArray.splice(charater, 0, "</br>");
    }
    req.body = textArray.join("");
  }
  next();
}

module.exports = justifyBody;
