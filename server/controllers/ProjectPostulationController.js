const model=require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports={
    postularseProyecto(req,res){
        model.IntPostulationProject.create({ 
            usuarioId: req.user.id,
            proyectoId: req.body.proyectoId
        },{})
        .then(function(){
            res.status(200).send({ message:'Se ha postulado correctamente'})   
        })
        .catch(err => res.status(400).json('Error: ' + err));
    },
    deshacerPostulacionProyecto(req,res){
        model.IntPostulationProject.destroy({ 
            where: {
                usuarioId: req.user.id,
                proyectoId: req.body.proyectoId
            }
        })
        .then(function(){
            res.status(200).send({ message:'El proyecto se ha eliminado correctamente'})   
        })
        .catch(err => res.status(400).json('Error: ' + err));
    },

    verUsuariosPostuladosProyecto(req,res){
        model.IntPostulationProject.findAndCountAll({
            offset:(req.body.page-1) * req.body.pageSize,
            limit:req.body.pageSize,
            where: {proyectoId: req.body.proyectoId},
            include:[{model: model.User}]
        })
        .then(function(freelancer){ res.status(200).send(freelancer)})
        .catch(err => res.status(400).json('Error: ' + err));
    },

    verProyectosPostuladosUsuario(req,res){
        model.IntPostulationProject.findAll({
            where: {usuarioId: req.user.id},
            include:[{model: model.Project}]
        })
        .then(function(freelancer){ res.status(200).send(freelancer)})
        .catch(err => res.status(400).json('Error: ' + err));
    },
    verSiEstoyPostuladoProyecto(req,res){
        model.IntPostulationProject.findAll({
            where: {proyectoId: req.body.proyectoId, usuarioId: req.user.id},
            include:[{model: model.User}]
        })
        .then(function(freelancer){ res.status(200).send(freelancer)})
        .catch(err => res.status(400).json('Error: ' + err));
    },


}