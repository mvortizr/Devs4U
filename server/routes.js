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
const projectPostulationController=require('./controllers/ProjectPostulationController');

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


//Rutas CRUD de proyecto
router.put('/project/create',ensureAuthenticated, projectController.crearProyecto)
router.put('/project/edit/:id',ensureAuthenticated, projectController.modificarProyecto)
router.get('/project/view/:id', ensureAuthenticated,projectController.consultarProyecto)
router.delete('/project/cancel/:id', ensureAuthenticated,projectController.cancelarProyecto)

//Rutas postulaciones proyecto
router.put('/project/postulation/do/', ensureAuthenticated,projectPostulationController.postularseProyecto)
router.get('/project/postulation/list/',ensureAuthenticated,projectPostulationController.verUsuariosPostuladosProyecto)
router.delete('/project/postulation/undo/',ensureAuthenticated,projectPostulationController.deshacerPostulacionProyecto)
router.get('/freelancer/postulation/list',ensureAuthenticated,projectPostulationController.verProyectosPostuladosUsuario) //proyectos propios


module.exports = router;


