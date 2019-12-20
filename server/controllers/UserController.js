const model=require('../models');
const freelancerController=require('./FreelancerController')
const contratistaController=require('./ContratistaController')



module.exports={
    update (req,res){
        model.User.update({    
            nombre: req.body.name,
            email: req.body.email,
            //contraseña: req.body.contraseña,
            pais: req.body.pais,
            ciudad:req.body.ciudad,
            //calificacionesMedia: 0,
            sobreMi: req.body.sobreMi,
            descripcionCorta:req.body.descripcionCorta,
            web: req.body.web,
            linkedin: req.body.linkedin,
            facebook:req.body.facebook,
            instagram: req.body.instagram,
            twitter: req.body.instagram,
        }, {where: {id: req.user.id}})
        
        .then(function(){
           if(req.user.rol=='developer') developerController.update(req,res);
           //else contractorController.update(req,res);   
           res.send({message:'todo fino'})
        })
        .catch(err => res.status(400).json('Error: ' + err));
        
    },

    consultarPerfil(req,res){
        if(req.user.rol=='freelancer') freelancerController.consultarPerfil(req,res);
        else contratistaController.consultarPerfil(req,res);
    },




    
}