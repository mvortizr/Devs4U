module.exports = {
    ensureAuthenticated: function(req, res, next) {
      if (req.isAuthenticated()) {
        return next();
      }
      console.log('mano, revisa que estes conectado');
      res.redirect('/login');
    },
    forwardAuthenticated: function(req, res, next) {
      if (!req.isAuthenticated()) {
        return next();
      }
      //Esto te deberia de redireccionar a la pagina de inicio del usuario
      res.redirect('/dashboard');      
    }
  };