
const express = require('express');
const router = express.Router();
const userController=require('../controllers/UserController');


//Users
router.post('/register',userController.register);
router.post('/login',userController.login);
router.post('/logout',userController.logout);
router.post('/check/auth', userController.checkAuthentication);
router.post('/profile/:rol',userController.show); 
router.post('/edit', userController.edit);
router.post('/delete', userController.delete);

//Projects
//router.post('project/create',projectController.create);


//app.get('/dashboard',ensureAuthenticated,userController.showDashboard)
//app.get('/logout',userController.logout)

//app.get('/edit',ensureAuthenticated,userController.edit);
//app.get('/profile',ensureAuthenticated,userController.show)

module.exports = router;
