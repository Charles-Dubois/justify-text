// dependencies
const express = require("express");
const router = express.Router();
// middlewares
const justifyBody = require("../middlewares/justifyBody");

//path
router.post("/", justifyBody, (req, res) => {
  res.json(req.body);
});

router.get("/", (_req, res) => {
  res.send("hello from justify text");
});
module.exports = router;
