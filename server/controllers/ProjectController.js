const model=require('../models');
const Op = require('Sequelize').Op;


module.exports={


    index(req,res){
        model.Project.findAll({})
        .then(function(projects){ res.send(projects)})
        .catch(err => res.status(400).json('Error: ' + err));
    },

    show(req,res){ //Esta feita esta funcion, no me gusta, despues lo cambio
        projectId=req.params.id
       
        model.Project.findAll({where: {id:projectId}}) 
        .then(function(project){
            model.User.findAll({where:{id:{[Op.or]: [project[0].contractorId, project[0].developerId]}}})//Esta funcion encuentra la informacion del contratista y el desarrollador del proyecto. NOTA: Hay que modificar esto para que sea una relacion, pero npi con esta vaina
            .then(function(users){res.send([project,users])})
            .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));

    },

    store(req,res){
       model.Project.create({
            contractorId:req.user.id,
            developerId: req.body.developerId,
            description:req.body.description ,
            projectStage:req.body.projectStage ,
            projectType:req.body.projectType,
            availabilityRequired:req.body. availabilityRequired,
            technologies:req.body.technologies,
            additionalInformation:req.body.additionalInformation   
        })
        .then(function(project){res.send(200,{message:'Se ha creado el proyecto correctamente'})})
        .catch(err => res.status(400).json('Error: ' + err));


    },
    
    update(req,res){
        
    }




}