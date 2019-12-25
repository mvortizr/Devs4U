<<<<<<< HEAD
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

=======
const model=require('../models');

module.exports={
    
    crearProyecto(req,res){
        model.Project.create({ 
            titulo: req.body.titulo,
            etapa: 0,
            tipo: req.body.tipo,
            descripcion: req.body.descripcion,
            presupuesto: req.body.presupuesto,
            creadorId: req.user.id,
            encargadoId:0,
            etapasInfo:req.body.etapasInfo,//array
            entregables: req.body.entregables,
            visiblePortafolio:true,
            objetivos:req.body.objetivos,
            tecnologias:req.body.tecnologias,
            adicionales:req.body.adicionales,
        },{
            include: [
                { model: model.ProjectStage, as: 'etapasInfo', foreignKey:'proyectoId' }
            ]
        })
        .then(function(usuario){
            res.status(200).send({ message:'El proyecto se ha creado correctamente'})   
        })
        .catch(err => res.status(400).json('Error: ' + err));
    },

    consultarProyecto(req,res){
        model.Project.findAll({
            where: {id: req.params.id},
            include:[{model: model.ProjectStage, as:'etapasInfo'}]
        })
        .then(function(proyecto){ res.status(200).send(proyecto)})
        .catch(err => res.status(400).json('Error: ' + err));
    },

    //La fecha de las etapas no se actualiza aqui, si no en el gestor de etapas.
    modificarProyecto(req,res){
        model.Project.update({ 
            titulo: req.body.titulo,
            tipo: req.body.tipo,
            descripcion: req.body.descripcion,
            presupuesto: req.body.presupuesto,
            entregables: req.body.entregables,
            objetivos:req.body.objetivos,
            tecnologias:req.body.tecnologias,
            adicionales:req.body.adicionales,
        },{ 
            where: {id: req.params.id},
        })
        .then(function(usuario){
            res.status(200).send({ message:'El proyecto se ha modificado correctamente'})   
        })
        .catch(err => res.status(400).json('Error: ' + err));

    },

  
    cancelarProyecto(req,res){
        model.Project.destroy({ 
            where: {
                id: req.params.id
            }
        })
        .then(function(){

            model.ProjectStage.destroy({ 
                where: {
                    proyectoId: req.params.id
                }
            })
            .then(function(){
                
                res.status(200).send({ message:'El proyecto se ha eliminado correctamente'})   
            })
            .catch(err => res.status(400).json('Error: ' + err));

        })
        .catch(err => res.status(400).json('Error: ' + err));
    },

    listarProyectos(req,res){
        model.Project.findAndCountAll({
            offset:(req.body.page-1) * req.body.pageSize,
            limit:req.body.pageSize,
            where:req.body.query,
        }) .then(function(proyecto){
                
                res.status(200).send(proyecto)   
            })
            .catch(err => res.status(400).json('Error: ' + err));
    },
    listarProyectosCreados(req,res){
        model.Project.findAndCountAll({
            offset:(req.body.page-1) * req.body.pageSize,
            limit:req.body.pageSize,
            where:{
                creadorId:req.user.id,
                etapa:req.body.etapa
            }
        }) .then(function(proyecto){
                
                res.status(200).send(proyecto)   
            })
            .catch(err => res.status(400).json('Error: ' + err));
    },
    listarProyectosEncargados(req,res){
        model.Project.findAndCountAll({
            offset:(req.body.page-1) * req.body.pageSize,
            limit:req.body.pageSize,
            where:{
                encargadoId:req.user.id,
                etapa:req.body.etapa
            }
        }) .then(function(proyecto){
                
                res.status(200).send(proyecto)   
            })
            .catch(err => res.status(400).json('Error: ' + err));
    },
    cambiarEtapaProyecto(req,res){
        model.Project.update({
            etapa:req.body.nuevaEtapa,
            where:{id:req.body.proyectoId},
        }) .then(function(){               
                res.status(200).send({ message:'La etapa se ha cambiado satisfactoriamente'})   
            })
            .catch(err => res.status(400).json('Error: ' + err));

    }
}
>>>>>>> backend-v1
