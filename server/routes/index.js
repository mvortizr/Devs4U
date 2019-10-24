
const express = require('express');
const router = express.Router();
const userController=require('../controllers/UserController');
let lista = require('../controllers/ProjectController');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

router.post('/register',userController.register);
router.post('/login',userController.login);
router.post('/logout',userController.logout);
router.post('/check/auth', userController.checkAuthentication);
<<<<<<< HEAD
router.post('/profile/:rol',userController.show); //Send the user information to the front.


router.get('/Gestion-Proyecto',ensureAuthenticated,function(req,res){
    res.render('user/Gestion-Proyecto');
})

router.get('/createproyect',ensureAuthenticated,function(req,res){
    lista.lista(req,res);
})

router.get('/contratist/:value.contratistId/Eliminar',ensureAuthenticated,function(req,res){
    res.render('/contratist/Eliminar');
})

router.get('/contratist/:value.contratistId/Agregar',ensureAuthenticated,function(req,res){
    lista.storeIteracion(req,res);
})

router.post('/createproyect', (req, res, next) => {
    lista.store(req,res);
  });

router.get('/cancelproyect',ensureAuthenticated,function(req,res){
    res.render('user/cancelproyect');
})

router.post('/cancelproyect', (req, res, next) => {
    res.redirect('user/Gestion-Proyecto');
  });

router.get('/requestproyect',ensureAuthenticated,function(req,res){
    lista.lista2(req,res);
   
})

router.get('/request/Abrir', (req, res, next) => {

    lista.lista3(req,res);
  });


router.get('/logout',userController.logout)

=======
router.post('/profile/:rol',userController.show); 
router.post('/edit', userController.edit);
router.post('/delete', userController.delete);
>>>>>>> 7a09081e318acc667553fc5b7037d19548b50c56

//app.get('/dashboard',ensureAuthenticated,userController.showDashboard)
//app.get('/logout',userController.logout)

//app.get('/edit',ensureAuthenticated,userController.edit);
//app.get('/profile',ensureAuthenticated,userController.show)

module.exports = router;
