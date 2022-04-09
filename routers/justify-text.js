const req = require("express/lib/request");

// dependencies
const express = require("express"),
  router = express.Router(),
  // middlewares
  justifyBody = require("../middlewares/justifyBody"),
  checkToken = require("../middlewares/checkToken"),
  countWords = require("../middlewares/countWords");
router.use(express.text());
// router.use(express.json());

//path

// @desc Justify the body
// @route 	POST /
// @access 	Public

router.post("/", checkToken, justifyBody, countWords, (req, res) => {
  res.render("justifiedText", { text: req.body });
});
// @desc The result
// @route 	GET /
// @access 	Public
router.get("/", (req, res) => {
  res.render("justifyText");
});
module.exports = router;
