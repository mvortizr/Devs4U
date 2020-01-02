const model=require('../models');
const multer=require('multer')

module.exports={

    subirArchivos(req,res){
        console.log(req.file)
        model.archivo.create({
            projectId: req.body.projectId,
            filePath: req.file.filename
        })
        .then(function(archivo){
            res.status(200).send({ message:'El Archivo se ha creado correctamente'})   
        })
    },

    descargarArchivos(req,res){
        const path = require ('path');
        const publicPath = path.join(__dirname, '..', 'middlewares/uploads');
      
        res.download(publicPath+'/'+req.params.id,req.params.id, function (err) {
            if (err) {console.log(err)} 
            else {console.log('se descargo fino') }
          })
    },

    consultarArchivo(req,res){
        model.archivo.findAll({
            where: {id: req.params.id},
        })
        .then(function(archivo){ res.status(200).send(archivo)})
        .catch(err => res.status(400).json('Error: ' + err));
    }
}