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
            include:[{model: model.ProjectStage, as:'etapasInfo'},'creador','encargado']
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

    },

    asignarDesarrolladorEncargado(req,res){ //ESTA MALO; FALTA CORREGIR
        model.Project.update({
            etapa:req.encargadoId,
            where:{id:req.body.proyectoId},
        }) .then(function(){               
                res.status(200).send({ message:'La etapa se ha cambiado satisfactoriamente'})   
            })
            .catch(err => res.status(400).json('Error: ' + err));
    }
}
