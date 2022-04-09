// condition librairy joi
const authJoi = require("../Joi/authJoi");
// check the content of the body use it in the server
function validAuth(req, res, next) {
  const validation = authJoi.validate(req.body);
  if (validation.error) {
    return res.status(400).json({
      message: "error 400 bad request",
      description: validation.error.details[0].message,
    });
  }
  next();
}
module.exports = validAuth;
