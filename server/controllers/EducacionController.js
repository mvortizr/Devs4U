const model=require('../models');

module.exports={


    agregarEducacion(req,res){
        model.Educacion.create({
            freelancerId:req.user.id,
            tituloObtenido:req.body.tituloObtenido,
            anoInicio:req.body.anoInicio,
            anoFin:req.body.anoFin,
            institucion:req.body.institucion,
        }).then(function(){ res.send(200,{message:'Se ha creado la educacion exitosamente'})})
        .catch(err => res.status(400).json('Error: ' + err));
    },

    modificarEducacion(req,res){
        model.Educacion.update({
            tituloObtenido:req.body.tituloObtenido,
            anoInicio:req.body.anoInicio,
            anoFin:req.body.anoFin,
            institucion:req.body.institucion,
        },{where:{id:req.params.id, freelancerId:req.user.id}})
        .then(function(){ res.send(200,{message:'Se modifico la educacion correctamente'})})
        .catch(err => res.status(400).json('Error: ' + err));
    },

    eliminarEducacion(req,res){
        model.Educacion.destroy({
            where:{
                id:req.params.id, 
                freelancerId:req.user.id
            }
        })
        .then(function(){ res.send(200,{message:'Se ha eliminado la educacion exitosamente'})})
        .catch(err => res.status(400).json('Error: ' + err));

    },
    consultarListaEducacion(req,res){
        model.Educacion.findAll({where:{freelancerId:req.user.id}})
        .then(function(result){res.status(400).send(result)})
        .catch(err => res.status(400).json('Error: ' + err));
    },
    modificarListaEducacion(req,res){

        promiseArray=[]

        req.body.educationList.map(  education=> {       
            promiseArray.push(
                model.Educacion.update({
                    tituloObtenido:education.tituloObtenido,
                    anoInicio:education.anoInicio,
                    anoFin:education.anoFin,
                    institucion:education.institucion,
                },{where:{id:education.id}})
            )
        });

        Promise.all(promiseArray)
        .then(function(){ res.send(200,{message:'Se modificaron los datos correctamente'})})
        .catch(err => res.status(400).json('Error: ' + err));
    },

}