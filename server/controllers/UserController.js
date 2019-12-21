const model=require('../models');
const freelancerController=require('./FreelancerController')
const contratistaController=require('./ContractorController')



module.exports={
    modificarPerfil(req,res){
        model.User.update({    
            nombre: req.body.nombre,
            apellido:req.body.apellido,
            pais: req.body.pais,
            ciudad:req.body.ciudad,
            sobreMi: req.body.sobreMi,
            descripcionCorta:req.body.descripcionCorta,
            web: req.body.web,
            linkedin: req.body.linkedin,
            idiomas:req.body.idiomas,
            facebook:req.body.facebook,
            instagram: req.body.instagram,
            twitter: req.body.twitter,
        }, {where: {id: req.user.id}})
        
        .then(function(){
           if(req.user.rol=='freelancer') freelancerController.modificarPerfil(req,res);  
           else res.send(200,{message:'Datos modificados exitosamente'})
        })
        .catch(err => res.status(400).json('Error: ' + err));
        
    },

    consultarPerfil(req,res){
        if(req.user.rol=='freelancer') freelancerController.consultarPerfil(req,res);
        else contratistaController.consultarPerfil(req,res);
    },

    eliminarPerfil(req,res){
        model.User.destroy({
            where: {
                id: req.user.id
            }
        })
        .then(function () {
            if(req.user.rol=='freelancer') freelancerController.eliminarPerfil(req,res);  
            else if (req.user.rol=='contractor') contratistaController.eliminarPerfil(req,res);  
        })
        .catch((error) => { res.status(400).send(error); });
    },





}