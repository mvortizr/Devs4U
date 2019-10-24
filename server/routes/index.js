
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

//Search user
router.post('/user/search/:name', userController.showSearch); //need testing
router.post('/user/see/byId/:id', userController.showId); //need testing
router.post('/user/see/all', userController.showAll); //need testing


//Projects
router.post('/project/create',projectController.create); //done test
router.post('/project/see/all',projectController.allProjects); //done
router.post('/project/mine',projectController.myProjects);
router.post('/project/cancel/:id',projectController.cancel);
router.post('project/mine/developer',projectController.allProjectsDeveloper);
//router.post('/project/id/:id/postulation/delete',projectController.seeById);
//router.post('/project/id/:id/postulate',projectController.postulate);
//router.post('/project/id/:id/postulations',projectController.seePostulations);
router.post('/project/modify/:id',projectController.modify);
router.post('/project/id/:id',projectController.seeById);


// Portfolio Projects
router.post('/portfolio/project/create', portfolioProjectController.create) //done test
router.post('/portfolio/project/update/:id', portfolioProjectController.update)//done testing
router.post('/portfolio/project/delete/:id', portfolioProjectController.delete)//done testing
router.post('/portfolio/project/show/:id', portfolioProjectController.show) //done test
router.post('/portfolio/project/list/:id', portfolioProjectController.list)//done test
router.post('/portfolio/project/list', portfolioProjectController.myList)//done test

//app.get('/dashboard',ensureAuthenticated,userController.showDashboard)
//app.get('/logout',userController.logout)

//app.get('/edit',ensureAuthenticated,userController.edit);
//app.get('/profile',ensureAuthenticated,userController.show)

module.exports = router;
