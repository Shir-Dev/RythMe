var express = require("express");
var router = express.Router();
const pool = require("../mysql/database");

const passport = require("passport");
const initializePassport = require("../Passport/passport.config");
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
);
/* GET home page. */
router.post("/", async (req, res) => {
  const userToValidate = {
    userName: req.body.userName
  };
  console.log(req.body.userName, req.body.email, req.body.password);

  const users = await pool.query("SELECT * from Login WHERE  ? ", [
    userToValidate
  ]);
  console.log(users);
  res.redirect("/");
});

module.exports = router;
