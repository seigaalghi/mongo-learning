require("dotenv").config();
const express = require("express");
const app = express();
const route = require("./routes");
const cookieSession = require("cookie-session");
const passport = require("./middlewares/passport");

app.use(
  cookieSession({
    name: "google-auth-session",
    keys: ["secretsign", "secretvalid"],
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use("/api/v1", route);

//Unprotected Routes
app.get("/", (req, res) => {
  console.log(req.user)
  res.send("<h1>Home</h1>");
});

app.get("/failed", (req, res) => {
  res.send("<h1>Log in Failed :(</h1>");
});

// Middleware - Check user is Logged in
const checkUserLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};

//Protected Route.
app.get("/profile", checkUserLoggedIn, (req, res) => {
  res.json(req.user);
});

// Auth Routes
app.get("/auth/google/login", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get(
  "/auth/google",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (req, res) {
    console.log(req.user)
    res.redirect("/profile");
  }
);

//Logout
app.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/"); 
});

module.exports = app;
