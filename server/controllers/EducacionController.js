const model=require('../models');

module.exports={


    agregarEducacion(req,res){

        for (i = 0; i < req.body.tituloObtenido.length; i++) {
            model.Educacion.create({
                freelancerId:req.user.id,
                tituloObtenido:req.body.tituloObtenido[i],
                anoInicio:req.body.anoInicio[i],
                anoFin:req.body.anoFin[i]
            })
        }
        res.send(200,{message:'Se ha creado la educacion exitosamente'})
    },

    modificarEducacion(req,res){
        model.Educacion.update({
            tituloObtenido:req.body.tituloObtenido,
            anoInicio:req.body.anoInicio,
            anoFin:req.body.anoFin
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

    }
}