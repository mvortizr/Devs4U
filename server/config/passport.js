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
          return done(null, false, console.log('email no valido') );
        }
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) return done(null, user);
          else return done(null, false,console.log('password no valida'));
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
      return done(null, user);
    })
  
  });
}