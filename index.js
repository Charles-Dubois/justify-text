const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("hello wolrd");
});

app.listen(PORT, () => console.log("listen"));

app.get("*", (_req, res) => {
  return res.status(404).json({ message: "error 404 not found" });
});
