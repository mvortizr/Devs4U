const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');
const bcrypt = require('bcryptjs');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      db.User.findOne({
         where: {email: email} 
      }).then(user => {
        if (!user) {
          return done(null, false, console.log('That email is not registered') );
        }
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) return done(null, user);
          else return done(null, false, console.log('Password incorrect'));
        });
      });
    })
  )

  passport.serializeUser((user, done) =>{
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done)=> {
    db.User.findOne({
      where:{id: id}
    }).then(user=>{
      console.log(user);
      return done(null, user);
    })
  
  });
}