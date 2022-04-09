// dependencies
const express = require("express"),
  router = express.Router(),
  jwt = require("jsonwebtoken"),
  bcrypt = require("bcrypt"),
  //model
  AuthModel = require("../models/authModel"),
  // env
  { SECRET } = process.env;
//middleware
validAuth = require("../middlewares/validAuth");

router.use(express.json());

//path

// @desc Useless
// @route 	GET /
// @access 	Public
router.get("/", (req, res) => {
  res.send("hello from api token");
});

// @desc Create an account with email and password
// @route 	POST /
// @access 	Public
router.post("/register", validAuth, async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 12);
    await AuthModel.create(req.body);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "This email is not availaible" });
  }
  res.json("Account created");
});

// @desc Login with an email and password
// @route 	POST /
// @access 	Public
router.post("/login", validAuth, async (req, res) => {
  let result, ckeckPassword;

  try {
    result = await AuthModel.find({ email: req.body.email });
    result = result[0];

    ckeckPassword = await bcrypt.compare(req.body.password, result.password);
  } catch (error) {
    console.error(error);
    return res.json({ message: "Email or password are not valid" });
  }
  if (!ckeckPassword) {
    return res.json({ message: "Email or password are not valid" });
  }
  const token = jwt.sign(
    {
      data: "jwt",
      id: result._id,
    },
    SECRET,
    { expiresIn: 90000000 }
  );
  res.cookie("justifytext", token, { httpOnly: true, secure: false });

  res.json(req.body);
});
module.exports = router;
