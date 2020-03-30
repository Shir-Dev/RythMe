const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const pool = require("../mysql/database");
const JwtStrategy = require("passport-jwt").Strategy;
const Profile = require("../model/Profile");
// JSON WEB TOKENS STRATEGY

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: req => req.cookies.token,
      secretOrKey: "pepino",
      passReqToCallback: true
    },
    async (req, payload, done) => {
      try {
        // Find the user specified in token
        console.log(payload.sub);
        const user = await Profile.findById(payload.sub);

        // If user doesn't exists, handle it
        if (!user) {
          return done(null, false);
        }

        // Otherwise, return the user
        req.user = user;
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

passport.use(
  new LocalStrategy(
    {
      //probablemente esto se pueda quitar
      usernameField: "username"
    },
    async (username, password, done) => {
      try {
        // Find the user given the username
        let user = await pool.query(
          "SELECT * from Login WHERE  username = ? ",
          [username]
        );
        user = user[0];

        // If not, handle it
        if (!user) {
          return done(null, false);
        }

        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);

        // If not, handle it
        if (!isMatch) {
          return done(null, false);
        }

        // Otherwise, return the user
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);
