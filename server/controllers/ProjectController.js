const model=require('../../models');
module.exports={

  myProjects(req,res) {
    model.Project.findAll({
        where: {
            contractor: req.user.id
        } 
      })
      .then(function(result) {
        res.send(result)
    })
      .catch((error) => { res.status(400).send(error); });
  },

  seeById(req,res) {
    model.Project.findAll({
        where: {
            id: req.params.id
        } 
      })
      .then(function(result) {
        res.send(result)
    })
      .catch((error) => { res.status(400).send(error); });
  },

  allProjects(req,res) {
    model.Project.findAll({
      })
      .then(function(result) {
        res.send(result)
    })
      .catch((error) => { res.status(400).send(error); });
  },

  allProjectsDeveloper(req,res) {
    model.Project.findAll({
      where: {
            encargado: req.user.id
        } 
      })
      .then(function(result) {
        res.send(result)
    })
      .catch((error) => { res.status(400).send(error); });
  },

  postulate(req,res){
    model.Project.findAll({
      where: {
            id: req.params.id
        } 
      })
      .then(function(result) {
        //console.log(result)
        res.send(result.data.postulados)
    })
      .catch((error) => { res.status(400).send(error); });
  },

  create(req, res) {
    console.log('creando proyecto')
    console.log('req body',req.body)
    model.Project.create({
      name: req.body.name,
      contractor: req.user.id,
      description: req.body.description,
      entregables: req.body.entregables,
      tecnologies: req.body.tecnologies,
      photo:req.body.photo,
      postulados: req.body.postulados,
      etapa: req.body.etapa,
      additionals:req.body.additionals,
      disponibilidad: req.body.disponibilidad,
      iteraciones: req.body.iteraciones,
      projectType: req.body.projectType
    }).then(function () {
      res.send({success:true})
    })
     .catch((error) => { res.status(400).send(error); });

  },

  modify(req,res){
      model.Project.update({
        name: req.body.name,
        description: req.body.description,
        entregables: req.body.entregables,
        tecnologies: req.body.tecnologies,
        photo:req.body.photo,
        postulados: req.body.postulados,
        etapa: req.body.etapa,
        additionals:req.body.additionals,
        disponibilidad: req.body.disponibilidad,
        iteraciones: req.body.iteraciones,
        projectType: req.body.projectType
      }, {where: {id: req.params.id}}).then(function(){
            res.send({success:true});
        }).catch(err => res.send({error:err}));
    },

 /* read(req,res){

  }*/


  cancel(req, res) {
    model.Project
    .destroy({
        where: {
            id: req.params.id
        }
    }).then(function () {
      res.send({success:true})
    })
     .catch((error) => { res.status(400).send(error); });
  },

   
   
}

