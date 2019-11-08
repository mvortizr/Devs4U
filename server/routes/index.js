
const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
let lista = require('../controllers/ProjectController');
const { ensureAuthenticated, forwardAuthenticated } = require('../../config/auth');
const { check, body } = require('express-validator');
router.post('/register', [
    // username must be an email
    check('email', 'Your email is not valid').isEmail().normalizeEmail(),//Valida si la sintaxis del email es correcta
    check('email', 'Your email is required').not().isEmpty(),// Valida si el campo email esta vacío
    check('recovery', 'Passwords do not match').custom((value, { req }) => (value === req.body.password)),//Valida la confirmacion de la contrasña
    check('password', 'Passwords is required').not().isEmpty(),  //valida si el campo password esta vacío
    check('password')
    .not().isLength({ min: 4, max: 22 }).withMessage('Password must be at least 4 chars long and must be at most 22 chars long'),
    check('firstName')
    .isLength({ min: 8, max: 30 }).withMessage('Name field must be at least 8 chars long and must be at most 30 chars long')
    .not().isAlpha().withMessage('Name field must only contain letters'),//Valida si el campo solo tiene letras
    check('lastName')
    .isLength({ min: 8, max: 30 }).withMessage('lastname field must be at least 8 chars long and must be at most 30 chars long')
    .not().isAlpha().withMessage('lastname field must only contain letters')


], userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/check/auth', userController.checkAuthentication);


router.get('/Gestion-Proyecto', ensureAuthenticated, function (req, res) {
    res.render('user/Gestion-Proyecto');
})

router.get('/createproyect', ensureAuthenticated, function (req, res) {
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
router.get('/logout', userController.logout)

router.post('/profile/:rol', userController.show);
router.post('/edit', userController.edit);
router.post('/delete', userController.delete);

//app.get('/dashboard',ensureAuthenticated,userController.showDashboard)
//app.get('/logout',userController.logout)

//app.get('/edit',ensureAuthenticated,userController.edit);
//app.get('/profile',ensureAuthenticated,userController.show)

module.exports = router;
