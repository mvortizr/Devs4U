const express = require('express');
const router = express.Router();
const storage = require('./middlewares/multerConfig')
const multer = require('multer')
const upload = multer(storage)

//Middlewares
const { ensureAuthenticated, forwardAuthenticated } = require('./middlewares/auth');

//Auth Controller
const {register}=require('./controllers/auth/RegisterController')
const {login}=require('./controllers/auth/LoginController')
const {logout}=require('./controllers/auth/LogoutController')
const {checkAuthentication}=require('./controllers/auth/AuthenticationController.js')

//Controllers
const userController = require('./controllers/UserController');
const projectController=require('./controllers/ProjectController');



//Auths' Routes
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/check',checkAuthentication);



//Rutas del perfil
router.get('/profile',ensureAuthenticated, userController.consultarPerfil);
router.put('/profile/edit',ensureAuthenticated, userController.modificarPerfil);
router.put('/profile/addphoto',ensureAuthenticated, upload.single('image'), userController.agregarFotoPerfil);
router.delete('/profile/delete',ensureAuthenticated, userController.eliminarPerfil);




//Rutas de proyectos
router.put('/project/create',ensureAuthenticated, projectController.crearProyecto)
//router.get('/projects',projectController.index)//listo
//router.post('/project/create', projectController.store);//listo
//router.get('/project/show/:id',projectController.show)//Faltan las buenas relaciones, pero creo que listo
//router.put('/project/edit/:id',projectController.update) //listo
//router.delete('/project/delete/:id',projectController.destroy)



//


module.exports = router;
