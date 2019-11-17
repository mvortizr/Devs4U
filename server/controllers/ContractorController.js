const model=require('../models');
module.exports={

    store(userId) {
      model.Contractor.create({
        workSearch:'',
        enterprise:'',
        userId:userId,
      })
    },

    profileInformation(req,res){
      model.User.findAll({where: {id: req.user.id}, include: ['contractor']})
      .then(function(contractor){ 
        res.send(contractor.contractor)
      })
      .catch(err => res.status(400).json('Error: ' + err));
    },

    update(req,res){
      model.Contractor.update({
        workSearch: req.body.workSearch,
        enterprise: req.body.enterprise,
      }, {where: {userId: req.user.id}})
      
      .then(function(){
            res.send({success:true});
      })
      
      .catch(err => res.status(400).send({error:err}));
    },

    delete (req,res){
        model.Contractor.destroy(   
         {where: {userId: req.user.id}}).then(function(){
           res.send({success:true});
        }).catch(err => {res.send({req: req}); 
        console.log(err)}
        );      
    },
  
}

