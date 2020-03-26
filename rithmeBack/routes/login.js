var express = require("express");
var router = express.Router();
const pool = require("../mysql/database");
const JWT = require("jsonwebtoken");

const passport = require("passport");
const passportSignIn = passport.authenticate("local", { session: false });
const passportConf = require("../Passport/passport.config");
/* GET home page. */
router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
  })
);

module.exports = router;
