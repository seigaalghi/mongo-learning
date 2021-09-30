require("dotenv").config();
const express = require("express");
const app = express();
const route = require("./routes");
const session = require("express-session");
const passport = require('passport');
const jwtStrategy = require('./middlewares/passport')

app.use(express.json());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(jwtStrategy)
app.use("/api/v1", route);

module.exports = app