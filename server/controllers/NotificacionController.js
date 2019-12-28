const model=require('../models');

module.exports={

    crearNotificacion(notificacion){
        model.Notificacion.create({
            leida: notificacion.leida,
            titulo: notificacion.titulo,
            vinculo: notificacion.vinculo,
            fecha: notificacion.fecha,
            descripcion: notificacion.descripcion,
            usuarioId: notificacion.usuarioId

        })
    },

    listarTodasLasNotificaciones(req,res){
        model.Notificacion.findAndCountAll({
            offset:(req.body.page-1) * req.body.pageSize,
            limit:req.body.pageSize,
            where:{usuarioId:req.user.id}
        }) 
        .then(function(listaNotificaciones){res.status(200).send(listaNotificaciones)})
        .catch(err => res.status(400).json('Error: ' + err));
    },

    listarNotificacionesSinRevisar(req,res){
        model.Notificacion.findAndCountAll({
            offset:(req.body.page-1) * req.body.pageSize,
            limit:req.body.pageSize,
            where:{usuarioId:req.user.id, leida:false}
        }) 
        .then(function(listaNotificacionesSinRevisar){res.status(200).send(listaNotificacionesSinRevisar)})
        .catch(err => res.status(400).json('Error: ' + err));
    },
    
    marcarLeido(req,res){
        model.Notificacion.update({
            leida:true
        },{where:{id:req.params.id,usuarioId:req.user.id}})
        .then(function(notificacion){
            if(notificacion[0]==0) res.status(400).json('Error usted no es dueño de esta notificacion')  
            else res.status(200).send({ message:'Visto'})})
        .catch(err => res.status(400).json('Error: ' + err));
    }


}