const model=require('../models');
const userController = require('./UserController');

module.exports={

    agregarReview(req,res){
        model.Review.create({
            destinatarioId: req.params.id,
            creadorId: req.user.id,
            descripcion: req.body.descripcion,
            calificacion: req.body.calificacion
        })
        .then(function(review){

            let destinatarioId=review.get().destinatarioId
            let calificacion=review.get().calificacion
            
            userController.actualizarCalifiacionMedia(destinatarioId,calificacion)
        })
        .then(function(){res.status(200).send({message:'El review se ha creado correctamente'})})
        .catch(err => res.status(400).json('Error: ' + err));
    },

    consultarReview(req,res){
        model.Review.findAll({where:{id:req.params.id}})
        .then(function(review){res.status(200).send(review)})
        .catch(err => res.status(400).json('Error: ' + err));

    },

    listarReviewsUsuario(req,res){
        model.Review.findAndCountAll({
            offset:(req.body.page-1) * req.body.pageSize,
            limit:req.body.pageSize,
            where:{destinatarioId:req.params.id},
            include:['creador','destinatario']
        })
        .then(function(review){res.status(200).send(review)})
        .catch(err => res.status(400).json('Error: ' + err));

    },
    
    listarMisReviewsUsuario(req,res){
        model.Review.findAndCountAll({
            offset:(req.body.page-1) * req.body.pageSize,
            limit:req.body.pageSize,
            where:{destinatarioId:req.user.id},
            include:['creador']
        })
        .then(function(review){res.status(200).send(review)})
        .catch(err => res.status(400).json('Error: ' + err));

    },

    eliminarReviewsDeUnUsuario(req,res){
        model.Review.destroy({where:{freelancerId:req.user.id}})
    }
}