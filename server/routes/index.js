
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
router.post('project/create',projectController.create);


// Portfolio Projects
router.post('portfolio/project/create', portfolioProjectController.create)
router.post('portfolio/project/update', portfolioProjectController.update)
router.post('portfolio/project/delete', portfolioProjectController.delete)
router.get('portfolio/project', portfolioProjectController.show)

//app.get('/dashboard',ensureAuthenticated,userController.showDashboard)
//app.get('/logout',userController.logout)

//app.get('/edit',ensureAuthenticated,userController.edit);
//app.get('/profile',ensureAuthenticated,userController.show)

module.exports = router;
