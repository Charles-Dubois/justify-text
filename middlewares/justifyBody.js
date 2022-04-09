// split the body, insert into the body balise </br>, and join it
function justifyBody(req, _res, next) {
  let textArray = req.body.split("");

  req.wordsToday = req.body.split(" ").length;
  for (let charater = 1; charater < textArray.length; charater++) {
    if (charater % 79 === 0) {
      textArray.splice(charater, 0, "<br />");
    }

    req.body = textArray.join("");
  }
  next();
}
//* an other try
// function justifyBody(req, _res, next) {
//   req.wordsToday = req.body.split(" ").length;
//   const body = req.body.split("");
//   let row = [],
//     letters = [];

//   for (let charater = 0; charater < body.length; charater++) {
//     letters.push(body[charater]);
//     if (letters.length % 79 === 0) {
//       row.push(letters.join(""));
//       letters = [];
//     }
//   }
//   const rest = body.length % 79;
//   const limitRest = body.length - rest;

//   letters = [];
//   if (rest !== 0) {
//     for (let charater = body.length; charater > limitRest; charater--) {
//       letters.push(body[charater]);
//     }
//   }
//   row.push(letters.join(""));
//   req.body = row;

module.exports = justifyBody;
