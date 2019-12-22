const model=require('../models');

module.exports={
    agregarExperiencia(req,res){
        for (i = 0; i < req.body.cargo.length; i++) {
            model.Experiencia.create({
                freelancerId: req.user.id,
                nombreEmpresa: req.body.nombreEmpresa[i],
                cargo: req.body.cargo[i],
                anoInicio: req.body.anoInicio[i],
                anoFin: req.body.anoFin[i]
            })
        }
        res.send(200,{message:'Se ha creado la experiencia exitosamente'})
    },

    modificarExperiencia(req,res){
        model.Experiencia.update({
            nombreEmpresa: req.body.nombreEmpresa,
            cargo: req.body.cargo,
            anoInicio: req.body.anoInicio,
            anoFin: req.body.anoFin
        },{where:{id:req.params.id, freelancerId:req.user.id}})

        .then(function(){ res.send(200,{message:'Se modifico la experiencia correctamente'})})
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