// dependencies
require("dotenv").config();
const express = require("express"),
  cookieParser = require("cookie-parser"),
  path = require("path"),
  mongoose = require("mongoose"),
  { engine } = require("express-handlebars"),
  app = express(),
  // routers
  justifyTextRouter = require("./routers/justify-text"),
  authRouter = require("./routers/auth"),
  // port // env
  { MONGODB_URI } = process.env;
(PORT = process.env.PORT || 8000),
  //* middlewares
  app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.use(cookieParser());
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(console.log("connected to mongo"))
  .catch((err) => console.log(err));

// router path
app.use("/api/justify", justifyTextRouter);
app.use("/api/token", authRouter);

// path HTML
app.get("/", (_req, res) => {
  res.render("homepage");
});

// listen port
app.listen(PORT, () => console.log("listen"));

// catch not found
app.get("*", (_req, res) => {
  return res.status(404).json({ message: "error 404 not found" });
});
