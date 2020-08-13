const passport = require('passport');
const LocalStrategy = require('passport-local');
const Users = require('../models/User');


module.exports = function(client){
passport.use(new LocalStrategy({
    usernameField: 'user[username]',
    passwordField: 'user[password]',
  }, (username, password, done) => {
    Users.findUser(username, client)
      .then(user => {
        if(!user || !user.validatePassword(password)) {
          return done({ errors: { 
             description: 'username or password is invalid'
           } }, false);
        }
        return done(null, user);
      }).catch(error =>{
        done({ errors: { 
          description: 'username or password is invalid'
        } }, false);
      });
  }));
}

passport.serializeUser(function(user, done) {
  done(null, user._id); 
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
  Users.findById(id, client)
      .then(user =>done(undefined, user)).catch(err => done(err));
});