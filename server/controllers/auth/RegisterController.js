//const developerController=require('../DeveloperController');
const contratistaController=require('../ContractorController');
const freelancerController=require('../FreelancerController')
const model=require('../../models');
const bcrypt = require('bcryptjs');


module.exports={

    register(req,res){
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err){ 
                    res.status(400).json('Error: ' + err)}
                else{ 
                    model.User.create({ 
                        nombre: req.body.nombre,
                        apellido:'',
                        rol: req.body.rol,
                        email: req.body.email,
                        password: hash,
                        foto:'http://res.cloudinary.com/marycloudinary/image/upload/v1577312872/devs4u/2019-12-25T22:27:51.072Z.jpg',
                        pais: '',
                        ciudad:'',
                        calificacionesMedia: 0,
                        sobreMi: '',
                        descripcionCorta:'',
                        web: '',
                        linkedin: '',
                        facebook:'',
                        instagram: '',
                        twitter: ''
                    })
                    .then(function(usuario){
                        if (req.body.rol=='freelancer') freelancerController.guardarUsuario(req,res,usuario.id);
                        else if (req.body.rol=='contractor')contratistaController.guardarUsuario(req,res,usuario.id);
                        else console.log('error')
                    })
                    .catch(err => {res.status(400).send({error:err})
                     console.log('error',err)
                    });
                    
                }
            })
        })
    }
}