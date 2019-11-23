const developerController=require('../DeveloperController');
const contractorController=require('../ContractorController');
const model=require('../../models');
const bcrypt = require('bcryptjs');


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
    }
}