var express = require("express");
var router = express.Router();
const pool = require("../mysql/database");
const bcrypt = require("bcrypt");
/* GET home page. */
router.post("/", async (req, res) => {
  const newUser = {
    userName: req.body.userName,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10)
  };
  console.log(req.body.userName, req.body.email, req.body.password);

  const users = await pool.query("INSERT INTO Login set ? ", [newUser]);
  res.redirect("/login");
});

module.exports = router;
