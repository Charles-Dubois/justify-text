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
router.post("/", checkToken, justifyBody, countWords, async (req, res) => {
  res.json(req.body);
});
// @desc HTML
// @route 	GET /
// @access 	Public
router.get("/", (req, res) => {
  res.render("justifiedText", { text: req.body });
});
module.exports = router;
