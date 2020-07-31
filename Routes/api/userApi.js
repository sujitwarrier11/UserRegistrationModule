const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const User = require('../../models/User');

module.exports = function(client){

  router.post('/regUser', auth.optional, (req, res, next) => {
    const { body: { user } } = req;
     console.log("called reg",user);
    if(!user.username) {
      return res.status(422).json({
        errors: {
          email: 'is required',
        },
      });
    }
  
    if(!user.password) {
      return res.status(422).json({
        errors: {
          password: 'is required',
        },
      });
    }
  
    const finalUser = User.getUserObject(user, client);
  
  
    return finalUser.save()
      .then(() => res.json({ user: finalUser.toJson() })).catch(err => res.json({ error: err }));
  });

  router.post('/login', auth.optional, (req, res, next) => {
    const { body: { user } } = req;
  
    if(!user.username) {
      return res.status(422).json({
        errors: {
          username: 'is required',
        },
      });
    }
  
    if(!user.password) {
      return res.status(422).json({
        errors: {
          password: 'is required',
        },
      });
    }
  
    return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
      console.log("error",err);
      if(err) {
        res.status(401);
        res.json(err);
      }
  
      if(passportUser) {
        const user = passportUser;
        user.token = passportUser.generateJWT();
  
        return res.json({ user: user.toJson() });
      }
  
      
    })(req, res, next);
  });
  
  
  router.get('/current', auth.required, (req, res, next) => {
    const { payload: { id } } = req;
  
    return User.findById(id, client)
      .then((user) => {
        if(!user) {
          return res.sendStatus(401);
        }
  
        return res.json({ user: user.toJson() });
      }).catch(err =>{
        return res.sendStatus(401);
      });
  });

  return router;
};


