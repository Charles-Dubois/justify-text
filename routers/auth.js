const validAuth = require("../middlewares/validAuth");

// dependencies
const express = require("express"),
  router = express.Router(),
  jwt = require("jsonwebtoken");
//middleware
router.use(express.json());

//path
router.get("/", (req, res) => {
  res.send("hello from api token");
});

router.post("/", validAuth, (req, res) => {
  res.json(req.body);
});
module.exports = router;
