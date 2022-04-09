// dependencies
const jwt = require("jsonwebtoken");
//env
const { SECRET } = process.env;

// check if the user is not already connected, he cannot cheat the API
function secureLogin(req, res, next) {
  let result;
  try {
    result = jwt.verify(req.cookies.justifytext, SECRET);
  } catch (error) {
    console.log("not connected");
  }

  if (result) {
    return res.render("justifyText");
  } else {
    next();
  }
}
module.exports = secureLogin;
