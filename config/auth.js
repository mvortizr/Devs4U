module.exports = {
    ensureAuthenticated: function(req, res, next) {
      if (req.isAuthenticated()) {
        return next();
      }
      res.send({error:true});
      //res.send('/login');
    },
    forwardAuthenticated: function(req, res, next) {
      if (!req.isAuthenticated()) {
        return next();
      }
      res.send({error:true});
      //Esto te deberia de redireccionar a la pagina de inicio del usuario
      //res.redirect('/dashboard');      
    }
  };