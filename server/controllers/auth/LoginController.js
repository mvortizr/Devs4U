const passport=require('passport');
module.exports={
    login(req, res, next){
        passport.authenticate('local', function(err, user, info) {      
           if (err) { return next(err); }
           if (!user) { return res.status(400).send({error:'Los datos introducidos no corresponden a ningún usuario registrado. Revise email y contraseña y vuelva a intentarlo'}); }
           req.logIn(user, function(err) {
             if (err) { return next(err); }
             return res.status(200).send({user: user})
           });
         })(req, res, next);
   }
}