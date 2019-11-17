
const express = require('express');
const router = express.Router();
const userController = require('./controllers/UserController');
let lista = require('./controllers/ProjectController');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const { check, body } = require('express-validator');



router.post('/register', userController.register);


router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/check/auth', userController.checkAuthentication);


//Aqui falta el middleware de mostrar el perfil segun el rol
router.get('/profile/:rol',ensureAuthenticated, userController.profileInformation);
router.put('/edit',ensureAuthenticated, userController.update);
router.post('/delete',ensureAuthenticated, userController.delete);


router.get('/Gestion-Proyecto', ensureAuthenticated, function (req, res) {
    res.render('user/Gestion-Proyecto');
})

router.get('/create-proyect', ensureAuthenticated, function (req, res) {
    lista.lista(req, res);
})

router.get('/contratist/:contractor/Eliminar', ensureAuthenticated, function (req, res) {
    res.render('/contratist/Eliminar');
})

router.get('/contratist/:contractor/Agregar', ensureAuthenticated, function (req, res) {
    lista.storeIteracion(req, res);
})

router.post('/createproyect', (req, res, next) => {
    lista.store(req, res);
});

router.get('/cancelproyect', ensureAuthenticated, function (req, res) {
    lista.lista4(req, res);
})

router.get('/cancelproyect/:name', (req, res, next) => {
    lista.CancelProyect(req, res);
});

router.get('/requestproyect', ensureAuthenticated, function (req, res) {
    lista.lista2(req, res);

})

router.get('/request/Abrir', (req, res, next) => {

    lista.lista3(req, res);
});

router.get('/modifyproyect', ensureAuthenticated, function (req, res) {
    lista.lista5(req, res);
})

router.post('/modifyproyect/:NM_Proyect', (req, res, next) => {

    lista.Actualizar(req, res);

});



module.exports = router;
