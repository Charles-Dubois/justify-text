// dependencies
const express = require("express");
const app = express();

// routers
const justifyTextRouter = require("./routers/justify-text");
const authRouter = require("./routers/auth");
// port // env
const PORT = process.env.PORT || 8000;

// middlewares
app.use(express.json());

// router path
app.use("/justify-text", justifyTextRouter);
app.use("/auth", authRouter);

// path
app.get("/", (_req, res) => {
  res.send("hello wolrd");
});

// listen port
app.listen(PORT, () => console.log("listen"));

// catch not found
app.get("*", (_req, res) => {
  return res.status(404).json({ message: "error 404 not found" });
});
