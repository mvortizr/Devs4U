const model = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {

    BuscarPerfilFreelancer(req, res) {
        model.User.findAll(
            {
                where: {
                    [Op.or]: [
                        {
                          nombre: {
                            [Op.like]: req.body.query
                          }
                        },
                        {
                          apellido: {
                            [Op.like]: req.body.query
                          }
                        }
                    ],
                    rol:'freelancer'
                },


                include:['freelancer']
            })
            .then(function (resultado) { res.send(resultado) })
            .catch(err => res.status(400).json('Error: ' + err));

    },
    BuscarPerfilContratista(req, res) {
        model.User.findAll(
            {
                where: {
                    [Op.or]: [
                        {
                          nombre: {
                            [Op.like]: req.body.query
                          }
                        },
                        {
                          apellido: {
                            [Op.like]: req.body.query
                          }
                        }
                    ],
                    rol:'contratista'
                },


                include:['contratista']
            })
            .then(function (resultado) { res.send(resultado) })
            .catch(err => res.status(400).json('Error: ' + err));

    },

   

}