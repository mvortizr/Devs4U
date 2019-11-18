const model=require('../models');
const passport=require('passport');
const bcrypt = require('bcryptjs');
const developerController=require('../controllers/DeveloperController');
const contractorController=require('../controllers/ContractorController');
const { check, validationResult } = require('express-validator');



module.exports={

    register(req,res){
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) res.status(400).json('Error: ' + err)
                else{ 
                    model.User.create({ 
                        firstName:req.body.firstName,
                        lastName:req.body.lastName,
                        email:req.body.email,
                        password:hash,
                        rol:req.body.rol,
                        aboutMe: '',
                        photo:'',
                        residence:'',
                        socialNetworks: {},
                        available:'',
                        experience:'',
                        residence:'',
                        web: '',
                    })
                    .then(function(user){
                        if (user.rol=='developer') developerController.store(req,res,user.id);
                        if (user.rol=='contractor')contractorController.store(req,res,user.id); //function to associate the developer information
                    })
                    .catch(err => res.status(400).json('Error: ' + err));
                }
            })
        })
    },

    login(req, res, next){
         passport.authenticate('local', function(err, user, info) {      
            if (err) { return next(err); }
            if (!user) { return res.send({error:true}); }
            req.logIn(user, function(err) {
              if (err) { return next(err); }
              return res.send({user: user})
            });
          })(req, res, next);
    },

    logout(req, res){
        req.logout();
        req.session = null;
        res.send({success:true}) 
        
        console.log('loggin out');
        //res.redirect('/login');
    },

 
    update (req,res){
        model.User.update({    
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            aboutMe: req.body.aboutMe,
            web: req.body.web,
            photo: photo,
            residence: residence,
            socialNetworks: req.body.socialNetworks,
            available:req.body.available,
            experience: req.body.experience
        }, {where: {id: req.user.id}})
        
        .then(function(){
           if(req.user.rol=='developer') developerController.update(req,res);
           else contractorController.update(req,res);   
        })
        .catch(err => res.status(400).json('Error: ' + err));
        
    },

    delete (req,res){
        model.User.destroy(    
         {where: {id: req.user.id}}).then(function(){
           if(req.user.rol=='developer') developerController.delete(req,res);
           else contractorController.delete(req,res);   
        }).catch(err => {res.send({req: req}); 
        console.log(err)}
        );      
    },

    checkAuthentication(req,res){
      if(req.isAuthenticated()){
        res.send({user: req.user});
      } else{
        res.send({error:true});
      }
    },

    profileInformation(req,res){
        if(req.user.rol=='developer') developerController.profileInformation(req,res);
        else contractorController.profileInformation(req,res);
    },




    
}