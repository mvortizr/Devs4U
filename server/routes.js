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
const experienciaController=require('./controllers/ExperienciaController')
const educacionController=require('./controllers/EducacionController')
const freelancerController=require('./controllers/FreelancerController')
const contractorController=require('./controllers/ContractorController')
const reviewController=require('./controllers/ReviewController')
//const projectController=require('./controllers/ProjectController');



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
router.post('/profile/addexperience', experienciaController.agregarExperiencia)
router.put('/profile/editexpierence/:id',experienciaController.modificarExperiencia)
router.delete('/profile/deleteexpierence/:id',experienciaController.eliminarExperiencia)



router.post('/profile/addeducation',educacionController.agregarEducacion)
router.put('/profile/editeducacion/:id',educacionController.modificarEducacion)
router.delete('/profile/deleteducation/:id',educacionController.eliminarEducacion)

router.get('/freelancer/view/byId/:id',freelancerController.consultarPerfilFreelancer)

router.get('/list/freelancers',freelancerController.listarFreelancers)

router.get('/list/contractors',contractorController.listarContractors)


router.get('/contractor/view/byId/:id',contractorController.consultarPerfilContractor)


router.post('/review/add',reviewController.agregarReview)

router.get('/review/view/byId/:id',reviewController.consultarReview)


//Rutas de proyectos
//router.get('/projects',projectController.index)//listo
//router.post('/project/create', projectController.store);//listo
//router.get('/project/show/:id',projectController.show)//Faltan las buenas relaciones, pero creo que listo
//router.put('/project/edit/:id',projectController.update) //listo
//router.delete('/project/delete/:id',projectController.destroy)



//


module.exports = router;
