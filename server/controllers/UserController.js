const model = require('../models');
const freelancerController = require('./FreelancerController')
const contratistaController = require('./ContractorController')
const uploadImage = require('../middlewares/cloudinary');



module.exports = {
    modificarPerfil(req, res) {
        model.User.update({
            nombre: req.body.nombre,
            foto: req.body.foto,
            apellido: req.body.apellido,
            pais: req.body.pais,
            ciudad: req.body.ciudad,
            sobreMi: req.body.sobreMi,
            descripcionCorta: req.body.descripcionCorta,
            web: req.body.web,
            linkedin: req.body.linkedin,
            idiomas: req.body.idiomas,
            facebook: req.body.facebook,
            instagram: req.body.instagram,
            twitter: req.body.twitter,
        }, { where: { id: req.user.id } })

            .then(function () {
                if (req.user.rol == 'freelancer') freelancerController.modificarPerfil(req, res);
                else res.send(200, { message: 'Datos modificados exitosamente' })
            })
            .catch(err => res.status(400).json('Error: ' + err));

    },

    consultarPerfil(req, res) {
        if (req.user.rol == 'freelancer') freelancerController.consultarPerfil(req, res);
        else contratistaController.consultarPerfil(req, res);
    },

    eliminarPerfil(req, res) {
        model.User.destroy({
            where: {
                id: req.user.id
            }
        })
            .then(function () {
                if (req.user.rol == 'freelancer') freelancerController.eliminarPerfil(req, res);
                else if (req.user.rol == 'contractor') contratistaController.eliminarPerfil(req, res);
            })
            .catch((error) => { res.status(400).send(error); });
    },

    agregarFotoPerfil(req, res) {

        console.log('req.file', req.file);

<<<<<<< HEAD
/////////////////
    showId(req,res){
        developerController.showId(req,res);
    },
    showAll(req,res){
        developerController.showAll(req,res);
    },
    showSearch(req,res){
        developerController.showSearch(req,res);
    },

    showContractorId(req,res){
      model.User.findAll({
        where: {
         id:req.params.id
        }
      })
      .then(function(user){    
        res.send(user);
      })
      .catch(err => res.status(400).json('Error: ' + err));
    },



        /**
         * Show the form for editing the specified resource.
         */
        /*edit(req,res){
            if(req.user.rol=='developer')developerController.edit(req,res);
        },
    /**
        * Update the specified resource in storage.
     **/
=======
        if (req.file) { /* Check if there is an image */
            uploadImage(req.file) /* If there is an image, upload it */
                .then((result) => { /* If the upload is successful */
                    res.status(201).json({ /* Send back a success response */
                        status: 'success',
                        imageCloudData: result
                    });
                })
                .catch((error) => { /* If there is an error uploading the image */
                    res.status(400).json({ /* Send back an error response */
                        status: 'error',
                        message: error.message
                    });
                });
        } else { /* If there is no image  */
            res.status(400).json({ /* Send back a failure message */
                status: 'failed',
                message: 'No image file was uploaded'
            });
        }
>>>>>>> backend-v1


    },

}