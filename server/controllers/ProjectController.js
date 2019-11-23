const model=require('../models');


module.exports={


    index(req,res){
        model.Project.findAll({})
        .then(function(projects){ res.send(projects)})
        .catch(err => res.status(400).json('Error: ' + err));

    },

    show(req,res){
        idProject=req.params.id

        model.Project.findAll({
            where: {id:idProject},
            //include:['contractor'],
            include:['project']
        })
        
        .then(function(project){
            res.send(project)})
        .catch(err => res.status(400).json('Error: ' + err));

    },

    store(req,res){
        model.Project.create({
            contractorId:req.body.contractorId,
            developerId: req.body.developerId,
            description:req.body.description ,
            projectStage:req.body.projectStage ,
            projectType:req.body.projectType,
            availabilityRequired:req.body. availabilityRequired,
            technologies:req.body.technologies,
            additionalInformation:req.body.additionalInformation   
        })
        .then(function(){ res.send(200,{message:'Se ha creado el proyecto correctamente'})})
        .catch(err => res.status(400).json('Error: ' + err));


    },
    
    update(req,res){
        
    }




}