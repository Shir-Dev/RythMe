const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initialize(passport, getUserByUserName, getUserById) {
  const authenticateUser = async (userName, password, done) => {
    const user = await getUserByUserName(userName);
    if (user == null) {
      return done(null, false, { message: "No user with that userName" });
    }

    try {
      console.log(password);
      console.log(user.password);
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(
    new LocalStrategy({ usernameField: "userName" }, authenticateUser)
  );
  passport.serializeUser((user, done) => done(null, user.userID));
  passport.deserializeUser((id, done) => {
    return done(null, getUserById(id));
  });
}

module.exports = initialize;
