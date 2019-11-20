const model=require('../models');


module.exports={

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


    }




}