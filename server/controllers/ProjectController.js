const model=require('../../models');
module.exports={

module.exports = {

  myProjects(req,res) {
    model.Project.findAll({
        where: {
            contractor: req.user.id
        } 
      })
      .then(function(result) {
        res.send({success:true})
    })
      .catch((error) => { res.status(400).send(error); });
  },

  allProjects(req,res) {
    model.Project.findAll({
      })
      .then(function(result) {
        res.send({success:true})
    })
      .catch((error) => { res.status(400).send(error); });
  },

  create(req, res) {
    model.Project.create({
      name: req.body.name,
      contractor: req.user.id,
      description: req.body.description,
      entregables: req.body.entregables,
      tecnologies: req.body.tecnologies,
      photo:req.body.photo,
      postulados: req.body.postulados,
      etapa: req.body.etapa,
      encargado: req.body.encargado,
      additionals:req.body.additionals,
      disponibilidad: req.body.disponibilidad,
      iteraciones: req.body.iteraciones,
      projectType: req.body.projectType
    }).then(function () {
      res.send({success:true})
    })
     .catch((error) => { res.status(400).send(error); });

  },

 /* read(req,res){

  }*/


  cancel(req, res) {
    models.Proyecto2
    .destroy({
        where: {
            contractor: req.user.id
        }
    }).then(function () {
      res.send({success:true})
    })
     .catch((error) => { res.status(400).send(error); });
  },

   
   
}

