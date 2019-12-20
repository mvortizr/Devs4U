const model=require('../models');

module.exports={

    guardarUsuario(req,res,usuarioId){
        model.Contratista.create({
            usuarioId:usuarioId,
          })
          .then(function(){ res.send(200,{message:'El usuario se ha creado correctamente'})})
          .catch(err => res.status(400).json('Error: ' + err));

    }

}