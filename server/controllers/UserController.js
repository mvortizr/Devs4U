const model=require('../models');
const freelancerController=require('./FreelancerController')
const contratistaController=require('./ContratistaController')



module.exports={
    modificarPerfil(req,res){
        model.User.update({    
            nombre: req.body.nombre,
            //email: req.body.email,
            //contraseña: req.body.contraseña,
            pais: req.body.pais,
            ciudad:req.body.ciudad,
            sobreMi: req.body.sobreMi,
            descripcionCorta:req.body.descripcionCorta,
            web: req.body.web,
            linkedin: req.body.linkedin,
            facebook:req.body.facebook,
            instagram: req.body.instagram,
            twitter: req.body.instagram,
        }, {where: {id: req.user.id}})
        
        .then(function(){
           if(req.user.rol=='freelancer') freelancerController.modificarPerfil(req,res);  
           res.send(200,{message:'Datos modificados exitosamente'})
        })
        .catch(err => res.status(400).json('Error: ' + err));
        
    },

    consultarPerfil(req,res){
        if(req.user.rol=='freelancer') freelancerController.consultarPerfil(req,res);
        else contratistaController.consultarPerfil(req,res);
    },




    
}