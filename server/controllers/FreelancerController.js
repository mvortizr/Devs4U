const model=require('../models');

module.exports={

    guardarUsuario(req,res,usuarioId){
        model.Freelancer.create({
            usuarioId:usuarioId,
            tiempoExperiencia:req.body.tiempoExperiencia,
            tipoFreelancer: req.body.tipoFreelancer,
            status: req.body.status,
            habilidades:req.body.habilidades
          })
          .then(function(){ res.send(200,{message:'El usuario se ha creado correctamente'})})
          .catch(err => res.status(400).json('Error: ' + err));
    },
    
    consultarPerfil(req,res){
        model.User.findAll({
            where: {id: req.user.id},
            include:['freelancer'],
            include:['educacion'],
            //include:['experiencia']
        })
        .then(function(freelancer){ res.send(freelancer)})
        .catch(err => res.status(400).json('Error: ' + err));
    },

    modificarPerfil(req,res){
        model.Freelancer.update({
            tiempoExperiencia:req.body.tiempoExperiencia,
            tipoFreelancer: req.body.tipoFreelancer,
            status: req.body.status,
            habilidades:req.body.habilidades
        },{where: {usuarioId: req.user.id}})
        .then(function(){ res.send(200,{message:'El usuario se ha modificado correctamente'})})
        .catch(err => res.status(400).json('Error: ' + err));

    },
    eliminarPerfil(req,res){
        model.Freelancer.destroy({
            where: {
                usuarioId: req.user.id
            }
        })
        .then(function () {
           res.send(200,{message:'Usuario eliminado exitosamente'})
        })
        .catch((error) => { res.status(400).send(error); });
    },

}