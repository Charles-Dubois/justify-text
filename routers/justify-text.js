// dependencies
const express = require("express"),
  router = express.Router(),
  // middlewares
  justifyBody = require("../middlewares/justifyBody"),
  checkToken = require("../middlewares/checkToken");
router.use(express.text());

//path

// @desc Justify the body
// @route 	POST /
// @access 	Public
router.post("/", checkToken, justifyBody, (req, res) => {
  res.json(req.body);
});
// @desc HTML
// @route 	GET /
// @access 	Public
router.get("/", (_req, res) => {
  res.send("hello from justify text");
});
module.exports = router;
