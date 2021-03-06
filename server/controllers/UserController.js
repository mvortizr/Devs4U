const model = require('../models');
const freelancerController = require('./FreelancerController')
const contratistaController = require('./ContractorController')
const experienciaController= require('./ExperienciaController')
const educacionController=require('./EducacionController')
const proyectoController=require('./ProjectController')
const uploadImage = require('../middlewares/cloudinary');
const reviewController=require('./ReviewController')



module.exports = {
    modificarPerfil(req, res) {

        console.log('req',req.body.user)

        
       model.User.update({
            nombre: req.body.user.nombre,
            foto: req.body.user.foto,
            //apellido: req.body.apellido,
            pais: req.body.user.pais,
            ciudad: req.body.user.ciudad,
            sobreMi: req.body.user.sobreMi,
            descripcionCorta: req.body.user.descripcionCorta,
            web: req.body.user.web,
            linkedin: req.body.user.linkedin,
            idiomas: req.body.nuevosIdiomas,
            facebook: req.body.user.facebook,
            instagram: req.body.user.instagram,
            twitter: req.body.user.twitter,
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
        const id=req.user.id
        model.User.destroy({
            where: {
                id: req.user.id
            }
        })
            .then(function () {
                if (req.user.rol == 'freelancer') {
                    freelancerController.eliminarPerfil(id)
                    experienciaController.eliminarExperienciaDeUnUsuario(id)
                    educacionController.eliminarEducacionDeUnUsuario(id)
                    proyectoController.actualizarProyectosPorLaEliminacionDeLaCuentaDelFreelancerEncargado(id)
                    //reviewController.eliminarReviewsDeUnUsuario(id)
                }
                else if (req.user.rol == 'contractor'){ 
                    contratistaController.eliminarPerfil(req, res);
                    proyectoController.eliminarProyectosDelContratista(req,res)
                    reviewController.eliminarReviewsDeUnUsuario(id)
                }
            })
            .then(function(){res.status(200).send({ message:'Se elimino al usuario y toda su informacion exitosamente'})})
            .catch((error) => { res.status(400).send(error); });
    },

    agregarFotoPerfil(req, res) {

        console.log('req.file', req.file);

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


    },

    actualizarCalifiacionMedia(usuarioId,calificacion){
        model.User.findAll({where: {id: usuarioId}})
        .then(function(usuario){
             if(usuario[0].calificacionesMedia!=0)calificacion=(usuario[0].calificacionesMedia+calificacion)/2})
        .then(function(){
            model.User.update({
                calificacionesMedia: calificacion
            },{where: {id: usuarioId}})
        })
   
    }
}