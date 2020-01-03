const model=require('../models');
const multer=require('multer')

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
            include:['etapasInfo','creador','encargado']
        })
        .then(function(proyecto){ res.status(200).send(proyecto)})
        .catch(err => res.status(400).json('Error: ' + err));
    },

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
        },{ where: {id: req.params.id,creadorId: req.user.id},
        })
        .then(function(proyectoModificado){
            if(proyectoModificado[0]=='') res.status(400).json('No puede acceder a esta proyecto')
            else res.status(200).send({message:'Se modifico el proyecto correctamente'})})
        .catch(err => res.status(400).json('Error: ' + err));

    },
    
    cancelarProyecto(req,res){
        model.Project.destroy({ 
            where: {id: req.params.id,creadorId: req.user.id}
        })
        .then(function(proyectoEliminado){
            if(proyectoEliminado==1){
                model.ProjectStage.destroy({ where: {proyectoId: req.params.id}})
                .then(function(){res.status(200).send({ message:'El proyecto se ha eliminado correctamente'})})
                .catch(err => res.status(400).json('Error: ' + err));}
            else res.status(400).json('No puede acceder a esta proyecto')
            
        })
        .catch(err => res.status(400).json('Error: ' + err));
    },

    listarProyectos(req,res){
        model.Project.findAndCountAll({
            offset:(req.body.page-1) * req.body.pageSize,
            limit:req.body.pageSize,
            //where:req.body.query,
        }) 
        .then(function(proyecto){res.status(200).send(proyecto) })
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
        }) 
        .then(function(proyecto){res.status(200).send(proyecto)})
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
        },{where:{id:req.body.proyectoId}})
        .then(function(project){res.status(200).send({ message:'La etapa se ha cambiado satisfactoriamente'})})
        .catch(err => res.status(400).json('Error: ' + err));
    },

    asignarFreelancerEncargado(req,res){
        model.Project.update(
            {encargadoId:req.params.id},
            {where:{id:req.body.proyectoId}}) 
        .then(function(){res.status(200).send({ message:'El freelancer ha sido asignado'})   })
        .catch(err => res.status(400).json('Error: ' + err));
    },


    actualizarProyectosPorLaEliminacionDeLaCuentaDelFreelancerEncargado(id){
        model.Project.update(
            {where:{encargadoId:id}},
            {encargadoId:0,
            etapa:0})
    },

    eliminarProyectosDelContratista(req,res){
        console.log('hola')
        model.Project.findAll({where:{creadorId:req.user.id}}) 
        .then(function(listaDeProyectos){for (let i=0; i < listaDeProyectos.length; i++) {model.ProjectStage.destroy({ where: { proyectoId: listaDeProyectos[i].id}})}})
        .then(function(){ model.Project.destroy({ where: {creadorId: req.user.id}})})
        //.catch(err => res.status(400).json('Error: ' + err));

    },

    actualizarElEstadoDelReviewDeUnUsuarioDelProyecto(req,res){
        if(req.user.rol=='freelancer'){
            model.Project.update({ 
                estadoReviewFreelancer: true
            },{ where: {id: req.params.id}})
            .then(function(){res.status(200).send({ message:'El review del estado del proyecto de un freelancer se ha actualizado'})   })
            .catch(err => res.status(400).json('Error: ' + err));
        }
        else if(req.user.rol=='contractor'){
            model.Project.update({ 
                estadoReviewContractor: true
            },{ where: {id: req.params.id}})
            .then(function(){res.status(200).send({ message:'El review del estado del proyecto de un contratista se ha actualizado'})   })
            .catch(err => res.status(400).json('Error: ' + err));

        }
    }
}
