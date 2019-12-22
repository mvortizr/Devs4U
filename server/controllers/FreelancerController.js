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
            include:['freelancer','educacion','experiencia']
        })
        .then(function(freelancer){res.send(freelancer)})
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
            where: {usuarioId: req.user.id}
        })
        .then(function () {res.send(200,{message:'Usuario eliminado exitosamente'})})
        .catch((error) => { res.status(400).send(error); });
    },

    consultarPerfilFreelancer(req,res){
        model.User.findAll({where:{
            id: req.params.id,
            rol:'freelancer'
        },
        include:['freelancer','educacion','experiencia']
        })
        .then(function(freelancer){
            if(freelancer=='') res.status(400).json('Este id no esta asociado a un freelancer')
            else res.send(freelancer)})
        .catch(err => res.status(400).json('Error: ' + err));
    },

    listarFreelancers(req,res){
        model.User.findAll({
            where:{rol:'freelancer'},
            include:['freelancer','educacion','experiencia']
        })
        .then(function(freelancers){res.send(freelancers)})
        .catch(err => res.status(400).json('Error: ' + err));
    }

}