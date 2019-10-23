
const express = require('express');
const router = express.Router();
const userController=require('../controllers/UserController');
let lista = require('../controllers/ProjectController');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

router.post('/register',userController.register);
router.post('/login',userController.login);
router.post('/logout',userController.logout);
router.post('/edit',userController.update);
router.post('/check/auth', userController.checkAuthentication);
router.post('/profile/:rol',userController.show); //Send the user information to the front.


app.get('/Gestion-Proyecto',ensureAuthenticated,function(req,res){
    res.render('user/Gestion-Proyecto');
})

app.get('/createproyect',ensureAuthenticated,function(req,res){
    lista.lista(req,res);
})

app.get('/contratist/:value.contratistId/Eliminar',ensureAuthenticated,function(req,res){
    res.render('/contratist/Eliminar');
})

app.get('/contratist/:value.contratistId/Agregar',ensureAuthenticated,function(req,res){
    lista.storeIteracion(req,res);
})

app.post('/createproyect', (req, res, next) => {
    lista.store(req,res);
  });

app.get('/cancelproyect',ensureAuthenticated,function(req,res){
    res.render('user/cancelproyect');
})

app.post('/cancelproyect', (req, res, next) => {
    res.redirect('user/Gestion-Proyecto');
  });

app.get('/requestproyect',ensureAuthenticated,function(req,res){
    lista.lista(req,res);
    res.render('user/requestproyect');
})

app.post('/requestproyect', (req, res, next) => {

    lista.lista(req.body.valor,req.params.id);
    res.redirect('user/Gestion-Proyecto');
  });

app.get('/modifyproyect',ensureAuthenticated,function(req,res){
    res.render('user/modifyproyect');
})

app.post('/modifyproyect', (req, res, next) => {

    lista.Actualizar(req.body.valor,req.params.id);
    res.redirect('user/Gestion-Proyecto');
  });

app.get('/logout',userController.logout)


//app.get('/dashboard',ensureAuthenticated,userController.showDashboard)
//app.get('/logout',userController.logout)

//app.get('/edit',ensureAuthenticated,userController.edit);
//app.get('/profile',ensureAuthenticated,userController.show)

module.exports = router;
