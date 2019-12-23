const model = require('../models');

module.exports = {

    BuscarPerfil(req, res) {
        model.User.findAll(
            {
                //attributes: ['nombre', 'apellido', 'rol', 'email'] ,
                attributes: {exclude:['password']} ,
            },
            {
                where: { name: req.body.name }
            })
            .then(function (resultado) { res.send(resultado) })
            .catch(err => res.status(400).json('Error: ' + err));

    },

   

}