// dependencies
const jwt = require("jsonwebtoken");
//env
const { SECRET } = process.env;

// check the token
function checkToken(req, res, next) {
  let result;
  try {
    result = jwt.verify(req.cookies.justifytext, SECRET);
    req.userId = result.id;
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: "Please login again" });
  }

  next();
}
module.exports = checkToken;
