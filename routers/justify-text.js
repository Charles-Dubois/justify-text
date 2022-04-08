// dependencies
const express = require("express");
const router = express.Router();

router.get("/", (_req, res) => {
  res.send("hello from justify text");
});
module.exports = router;
