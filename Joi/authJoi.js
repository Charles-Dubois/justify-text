// dependencies
const joi = require("joi");

// condition to create an account or login
const authJoi = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).max(50).required(),
});
module.exports = authJoi;
