// dependencies
const express = require("express"),
  router = express.Router(),
  // middlewares
  justifyBody = require("../middlewares/justifyBody");

router.use(express.text());

//path
router.post("/", justifyBody, (req, res) => {
  res.json(req.body);
});

router.get("/", (_req, res) => {
  res.send("hello from justify text");
});
module.exports = router;
