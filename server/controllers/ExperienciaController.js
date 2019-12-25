const model=require('../models');

module.exports={
    agregarExperiencia(req,res){
        console.log(req.body)
        model.Experiencia.create({
            freelancerId: req.user.id,
            nombreEmpresa: req.body.nombreEmpresa,
            descripcion: req.body.descripcion,
            cargo: req.body.cargo,
            anoInicio: req.body.anoInicio,
            anoFin: req.body.anoFin
        }).then(function(){ res.send(200,{message:'Se ha creado la experiencia exitosamente'})})
        .catch(err => res.status(400).json('Error: ' + err));
    },

    modificarExperiencia(req,res){

        console.log(req.params.id)
        model.Experiencia.update({
            nombreEmpresa: req.body.nombreEmpresa,
            descripcion: req.body.descripcion,
            cargo: req.body.cargo,
            anoInicio: req.body.anoInicio,
            anoFin: req.body.anoFin
        },{where:{id:req.params.id}})

        .then(function(){ res.send(200,{message:'Se modifico la experiencia correctamente'})})
        .catch(err => res.status(400).json('Error: ' + err));
    },

    consultarListaExperiencia(req,res){
        model.Experiencia.findAll({where:{freelancerId:req.user.id}})
        .then(function(result){res.status(400).send(result)})
        .catch(err => res.status(400).json('Error: ' + err));
    },

    modificarListaExperiencia(req,res){

        promiseArray=[]

        req.body.experienceList.map(  experiencia => {       
            promiseArray.push(
                model.Experiencia.update({
                    nombreEmpresa: experiencia.nombreEmpresa,
                    descripcion: experiencia.descripcion,
                    cargo: experiencia.cargo,
                    anoInicio: experiencia.anoInicio,
                    anoFin: experiencia.anoFin
                },{where:{id:experiencia.id}})
            )
        });

        Promise.all(promiseArray)
        .then(function(){ res.send(200,{message:'Se modificaron los datos correctamente'})})
        .catch(err => res.status(400).json('Error: ' + err));
    },

    eliminarExperiencia(req,res){
        model.Experiencia.destroy({
            where:{
                id:req.params.id, 
                freelancerId:req.user.id
            }
        })
        .then(function(){ res.send(200,{message:'Se ha eliminado la experiencia exitosamente'})})
        .catch(err => res.status(400).json('Error: ' + err));

    }

}