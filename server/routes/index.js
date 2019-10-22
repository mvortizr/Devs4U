
const express = require('express');
const router = express.Router();
const userController=require('../controllers/UserController');

router.post('/register',userController.register);
router.post('/login',userController.login);

router.post('/edit',userController.update);
//app.get('/dashboard',ensureAuthenticated,userController.showDashboard)
//app.get('/logout',userController.logout)

//app.get('/edit',ensureAuthenticated,userController.edit);
//app.get('/profile',ensureAuthenticated,userController.show)

module.exports = router;
