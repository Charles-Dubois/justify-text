// split the body, insert into the body balise </br>, and join it
function justifyBody(req, _res, next) {
  let textArray = req.body.split("").slice(5);

  req.wordsToday = req.body.split(" ").length;
  for (let charater = 1; charater < textArray.length; charater++) {
    if (charater % 80 === 0) {
      textArray.splice(charater, 0, "<br />");
    }

    req.body = textArray.join("");
  }
  next();
}

//* Here I tryed a second method because i had a problem with the balise <br />, the longest bug i had to fix in this case
//* The method right down is also good but when i fixed my bug i prefered to keep the shortest function
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
