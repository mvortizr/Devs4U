const model=require('../models');

module.exports={

    guardarUsuario(req,res,usuarioId){
        model.Contractor.create({
            usuarioId:usuarioId,
          })
          .then(function(){ res.send(200,{message:'El usuario se ha creado correctamente'})})
          .catch(err => res.status(400).json('Error: ' + err));

    },
    
    consultarPerfil(req,res){
        model.User.findAll({
            where: {id: req.user.id},
            include:['contratista']
        })
        .then(function(contratista){ res.send(contratista)})
        .catch(err => res.status(400).json('Error: ' + err));
    },

    eliminarPerfil(req,res){
        model.Contractor.destroy({
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