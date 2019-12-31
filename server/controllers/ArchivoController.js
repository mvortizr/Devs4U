const model=require('../models');

module.exports={

    crearArchivo(req,res){
        model.archivo.create({
            projectId: req.body.projectId,
            filePath: req.file.path
        })
        .then(function(archivo){
            res.status(200).send({ message:'El Archivo se ha creado correctamente'})   
        })

    }
}