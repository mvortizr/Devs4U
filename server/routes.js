const express = require('express');
const router = express.Router();

//Auth Controller
const {register}=require('./controllers/auth/RegisterController')
const {login}=require('./controllers/auth/LoginController')
const {logout}=require('./controllers/auth/LogoutController')
const {checkAuthentication}=require('./controllers/auth/AuthenticationController.js')

//Controllers
const userController = require('./controllers/UserController');
const projectController=require('./controllers/ProjectController');

//Middlewares
const { ensureAuthenticated, forwardAuthenticated } = require('./middlewares/auth');



//Auths' Routes
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/check/auth',checkAuthentication);



//Rutas del perfil
router.get('/profile/:rol',ensureAuthenticated, userController.profileInformation);//listo
router.put('/profile/edit',ensureAuthenticated, userController.update);//listo
//router.post('/delete',ensureAuthenticated, userController.delete);



//Rutas de proyectos
router.get('/project',projectController.index)//listo
router.get('/project/show/:id',projectController.show)
//router.put('/project/edit/:id')
router.post('/project/create', projectController.store);//listo



//


module.exports = router;
