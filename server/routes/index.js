
const express = require('express');
const router = express.Router();
const userController=require('../controllers/UserController');
const portfolioProjectController=require('../controllers/PortfolioProjectController');
const projectController=require('../controllers/ProjectController');

//Users
router.post('/register',userController.register);
router.post('/login',userController.login);
router.post('/logout',userController.logout);
router.post('/check/auth', userController.checkAuthentication);
router.post('/profile/:rol',userController.show); 
router.post('/edit', userController.edit);
router.post('/delete', userController.delete);

//Projects
router.post('/project/create',projectController.create);
router.post('/project/see/all',projectController.allProjects);
router.post('/project/mine',projectController.myProjects);
router.post('/project/cancel',projectController.cancel);
//router.post('project/mine/developer',projectController.seeById);
//router.post('project/id/:id/postulation/delete',projectController.seeById);
//router.post('project/id/:id/postulate',projectController.seeById);
//router.post('project/modify',projectController.seeById);
//router.post('project/id/:id',projectController.seeById);


// Portfolio Projects
router.post('/portfolio/project/create', portfolioProjectController.create) //done test
router.post('/portfolio/project/update/:id', portfolioProjectController.update)//done testing
router.post('/portfolio/project/delete/:id', portfolioProjectController.delete)//done testing
router.post('/portfolio/project/show/:id', portfolioProjectController.show) //done test
router.post('/portfolio/project/list/:id', portfolioProjectController.list)
router.post('/portfolio/project/list', portfolioProjectController.myList)

//app.get('/dashboard',ensureAuthenticated,userController.showDashboard)
//app.get('/logout',userController.logout)

//app.get('/edit',ensureAuthenticated,userController.edit);
//app.get('/profile',ensureAuthenticated,userController.show)

module.exports = router;
