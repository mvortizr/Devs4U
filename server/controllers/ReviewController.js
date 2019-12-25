const model=require('../models');

module.exports={

    agregarReview(req,res){
        model.Review.create({
            destinatarioId: req.params.id,
            creadorId: req.user.id,
            descripcion: req.body.descripcion,
            calificacion: req.body.calificacion
        })
        .then(function(){ res.send(200,{message:'El review se ha creado correctamente'})})
        .catch(err => res.status(400).json('Error: ' + err));
    },

    consultarReview(req,res){
        model.Review.findAll({where:{id:req.params.id}})
        .then(function(review){res.send(review)})
        .catch(err => res.status(400).json('Error: ' + err));

    },

    listarReviewsUsuario(req,res){
        model.Review.findAndCountAll({
            offset:(req.body.page-1) * req.body.pageSize,
            limit:req.body.pageSize,
            where:{destinatarioId:req.params.id}
        })
        .then(function(review){res.send(review)})
        .catch(err => res.status(400).json('Error: ' + err));

    },
}