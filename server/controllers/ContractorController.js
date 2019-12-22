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
            include:['contractor']
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

    listarContractors(req,res){//Arriba el spanglish Probar
        model.User.findAll({
            where:{rol:'contractor'},
            include:['contractor']
        })

        .then(function(contractors){res.send(contractors)})
        .catch(err => res.status(400).json('Error: ' + err));
    },

    consultarPerfilContractor(req,res){
        model.User.findAll({where:{
            id: req.params.id,
            rol:'contractor'
        },
        include:['contractor']
        })
        .then(function(contractor){
            if(contractor=='') res.status(400).json('Este id no esta asociado a un contractor')
            else res.send(contractor)})
        .catch(err => res.status(400).json('Error: ' + err));
    }

}