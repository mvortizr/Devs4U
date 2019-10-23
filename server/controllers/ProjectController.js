const model = require('../models');
const passport = require('passport');
const bcrypt = require('bcryptjs');
module.exports = {

  lista(req,res) {
    model.Project.findAll({
        where: {
            contractor: req.user.id
        } 
        //attributes: ['NM_Proyect','TP_Proyect', 'Stg_Proyect', 'Dp_req','UsedTech', 'Entregables', 'Ad_Dat', 'contratistId']
      })
      .then(function(result) {
        res.render('user/createproyect', {proyecto: result});
    })
      .catch((error) => { res.status(400).send(error); });

  },

  store(req, res) {
    model.Project.create({
    NM_Proyect: req.body.NM_Proyect,
    TP_Proyect: req.body.TP_Proyect,
    Stg_Proyect: req.body.Stg_Proyect,
    Dp_req: req.body.Dp_req,
    UsedTech: req.body.UsedTech,
    Entregables: req.body.Entregables,  
    Ad_Dat: req.body.Ad_Dat,
    contratistId: req.body.contratistId,
    Desc: req.body.Desc
    }).then(function () {
      res.render('user/Gestion-Proyecto');
    })

  },

  storeIteracion(req, res) {
    model.Proyecto2.create({
    ContractorCode:  req.body.ContractorCode,//Se debera cambiar a id del usuario contratista cuando se asocien la tabla
    Begining:  req.body.Begining,
    Ending:  req.body.Final,
    IterationNumber:  req.body.IterationNumber,
    IterationDesc: req.body.IterationDesc,
    }).then(function () {
      res.render('user/createproyect');
    })

  },

  CancelProyect(req, res) {
    models.Proyecto2
    .destroy({
        where: {
            id: req.body.contratistId
        }
    }).then(function() {
        res.redirect('/users');
    });

  },

  listaCancelar(req,res) {
    model.Proyecto2.findAll({
        /*where: {
            contratistId: .req.user.id
        }*/ 
        attributes: ['NM_Proyect','TP_Proyect', 'Stg_Proyect', 'Dp_req','UsedTech', 'Entregables', 'Ad_Dat', 'contratistId']
      })
      .then(function(result) {
        res.render('user/cancelproyect', {proyecto: result});
    })
      .catch((error) => { res.status(400).send(error); });

  }
}