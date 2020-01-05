const model = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {

    BuscarPerfilFreelancer(req, res) {
        model.User.findAndCountAll(
            {
              offset:(req.body.page-1) * req.body.pageSize,
              limit:req.body.pageSize,
                where: {
                    [Op.or]: [
                        {
                          nombre: {
                            [Op.iLike]: `%${req.body.query}%`
                          }
                        },
                        {
                          apellido: {
                            [Op.iLike]: `%${req.body.query}%`
                          }
                        }
                    ],
                    rol:'freelancer'
                },


                //include:['freelancer']
            })
            .then(function (resultado) { res.status(200).send(resultado) })
            .catch(err => res.status(400).json('Error: ' + err));

    },
    BuscarPerfilContratista(req, res) {
        model.User.findAndCountAll(
            {
              offset:(req.body.page-1) * req.body.pageSize,
              limit:req.body.pageSize,
                where: {
                    [Op.or]: [
                        {
                          nombre: {
                            [Op.iLike]: `%${req.body.query}%`
                          }
                        },
                        {
                          apellido: {
                            [Op.iLike]: `%${req.body.query}%`
                          }
                        }
                    ],
                    rol:'contractor'
                },


                //include:['contractor']
            })
            .then(function (resultado) { res.status(200).send(resultado) })
            .catch(err => res.status(400).json('Error: ' + err));

    },
    BuscarProyecto(req, res) {
      console.log(req.body)
      model.Project.findAndCountAll(
          {
            offset:(req.body.page-1) * req.body.pageSize,
            limit:req.body.pageSize,
              where: {  
                titulo: {
                  [Op.iLike]: `%${req.body.query}%`
                }
              
              }
          })
          .then(function (resultado) { res.status(200).send(resultado) })
          .catch(err => res.status(400).json('Error: ' + err));

    },

    BuscarUsuario(req, res) {
        model.User.findAndCountAll(
            {
              offset:(req.body.page-1) * req.body.pageSize,
              limit:req.body.pageSize,
                where: {
                    [Op.or]: [
                        {
                          nombre: {
                            [Op.iLike]: `%${req.body.query}%`
                          }
                        },
                        {
                          apellido: {
                            [Op.iLike]: `%${req.body.query}%`
                          }
                        }
                    ],
                },
                //include:['freelancer']
            })
            .then(function (resultado) { res.status(200).send(resultado) })
            .catch(err => res.status(400).json('Error: ' + err));

    },
}