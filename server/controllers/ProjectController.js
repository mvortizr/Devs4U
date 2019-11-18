const model=require('../models');


module.exports={

    store(req,res){
        model.Project.create({
            contractorId:req.body.contractorId ,
            developerId: req.body.developerId,
            description:req.body.description ,
            stage:req.body.stage ,
            projectType:req.body.projectType ,
            numberOfIterations: req.body.numberOfIterations    
        })
        .then(function(){ res.send(200,{message:'Se ha creado el proyecto correctamente'})})
        .catch(err => res.status(400).json('Error: ' + err));


    }




}