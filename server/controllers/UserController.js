const model=require('../models');
const developerController=require('../controllers/DeveloperController');
const contractorController=require('../controllers/ContractorController');



module.exports={
    update (req,res){
        model.User.update({    
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            aboutMe: req.body.aboutMe,
            web: req.body.web,
            photo: req.body.photo,
            residence: req.body.residence,
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

    profileInformation(req,res){
        if(req.user.rol=='developer') developerController.profileInformation(req,res);
        else contractorController.profileInformation(req,res);
    },




    
}