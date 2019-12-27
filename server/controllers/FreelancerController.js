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
          .then(function(){ res.status(200).send({message:'El usuario se ha creado correctamente'}) })
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
            tiempoExperiencia:req.body.user.tiempoExperiencia,
            tipoFreelancer: req.body.nuevoTipoFreelancer,
            //status: req.body.user.status,
            habilidades:req.body.nuevasHabilidades,
            seniority:req.body.nuevoTipoSeniority
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
        model.User.findAndCountAll({
            offset:(req.body.page-1) * req.body.pageSize,
            limit:req.body.pageSize,
            where:{rol:'freelancer'},
            //include:['freelancer','educacion','experiencia']
        })
        .then(function(freelancers){   
            res.status(400).send(freelancers)    
            /*model.Freelancer.count()
            .then( function(count){ 
                res.send({freelancers:freelancers, count:count})       
            })
            .catch(err => res.status(400).json('Error: ' + err));*/
        })
        .catch(err => res.status(400).json('Error: ' + err));
    },


}