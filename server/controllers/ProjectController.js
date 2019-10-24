const model = require('../models');
const passport = require('passport');
const bcrypt = require('bcryptjs');
module.exports = {

  lista(req, res) {
    model.Project.findAll({
      where: {
        contractor: req.user.id
      }
    })
      .then(function (result) {
        console.log(req.user.id);
        console.log(result);
        res.render('user/createproyect', { proyecto: result });
      })
      .catch((error) => { res.status(400).send(error); });

  },

  store(req, res) {
    model.Project.create({
      name: req.body.name,
      contractor: req.body.contractor,
      description: req.body.description,
      entregables: req.body.entregables,
      tecnologies: req.body.tecnologies,
      photo: req.body.photo,
      postulados: req.body.postulados,
      etapa: req.body.etapa,
      encargado: req.body.encargado,
      additionals: req.body.additionals,
      disponibilidad: req.body.disponibilidad,
      iteraciones: req.body.iteraciones,
      projectType: req.body.projectType
    }).then(function () {
      res.render('user/Gestion-Proyecto');
    })

  },

  lista2(req, res) {
    model.Project.findAll({

      attributes: ['name'],
      where: {
        contractor: req.user.id
      }
    })
      .then(function (result) {
        console.log(result);
        res.render('user/requestproyect', { proyecto: result });
      })
      .catch((error) => { res.status(400).send(error); });

  },

  lista3(req, res) {
    model.Project.findAll({
      where: {
        contractor: req.user.id
      }
    })
      .then(function (result) {
        res.render('user/showrequest', { proyecto2: result });
      })
      .catch((error) => { res.status(400).send(error); });

  },

  lista4(req, res) {
    model.Project.findAll({

      attributes: ['name'],
      where: {
        contractor: req.user.id
      }
    })
      .then(function (result) {
        console.log(result);
        res.render('user/cancelproyect', { proyecto: result });
      })
      .catch((error) => { res.status(400).send(error); });

  },

  lista5(req, res) {
    model.Project.findAll({

      attributes: ['name'],
      where: {
        contractor: req.user.id
      }
    })
      .then(function (result) {
        console.log(result);
        res.render('user/modifyproyect', { proyecto: result });
      })
      .catch((error) => { res.status(400).send(error); });

  },

  Actualizar(req, res) {
    models.Proyecto2
      .update({
        name: req.body.name,
        contractor: req.body.contractor,
        description: req.body.description,
        entregables: req.body.entregables,
        tecnologies: req.body.tecnologies,
        photo: req.body.photo,
        postulados: req.body.postulados,
        etapa: req.body.etapa,
        encargado: req.body.encargado,
        additionals: req.body.additionals,
        disponibilidad: req.body.disponibilidad,
        iteraciones: req.body.iteraciones,
        projectType: req.body.projectTypeF
      }, {
        where: {
          name: req.params.name
        }
      }).then(function () {
        res.redirect('/modifyproyect');
      });
  },

  CancelProyect(req, res) {
    model.Project
      .destroy({
        where: {
          name: req.params.name
        }
      }).then(function () {
        res.redirect('/Gestion-Proyecto');
      });

  }
}