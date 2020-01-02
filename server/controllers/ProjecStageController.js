const model=require('../models');


module.exports={
    modificarDeadline(req,res){
        model.ProjectStage.update({
            deadline: req.body.deadline
        },{ where: {id: req.params.id}})
        .then(function(){res.status(200).send({ message:'La deadline se ha cambiado satisfactoriamente'})})
        .catch(err => res.status(400).json('Error: ' + err));   
    }

}