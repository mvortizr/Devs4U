
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



//Rutas de la informacion del perfil
router.get('/profile/:rol',ensureAuthenticated, userController.profileInformation);
router.put('/profile/edit',ensureAuthenticated, userController.update);
//router.post('/delete',ensureAuthenticated, userController.delete);



//Rutas de proyecto
router.post('/create-proyect', projectController.store);


module.exports = router;
