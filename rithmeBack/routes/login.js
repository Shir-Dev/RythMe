var express = require("express");
var router = express.Router();
const pool = require("../mysql/database");

const passport = require("passport");
const initializePassport = require("../Passport/passport.config");
initializePassport(
  passport,
  async userName => {
    user = await pool.query("SELECT * from Login WHERE  userName = ? ", [
      userName
    ]);
    user = user[0];
    console.log(user);
    return user;
  },
  async id => {
    user = await pool.query("SELECT * from Login WHERE  userID = ? ", [id]);
    user = user[0];
    console.log(user);
    return user;
  }
);
/* GET home page. */
router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
  })
);

module.exports = router;
