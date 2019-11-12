const model=require('../models');

module.exports={

    store(userId) {
      model.Developer.create({
        userId:userId,
        workHours:0,
        developerType:'',
        languages:[''],
        skills:[''],
      })

      
      
    },

    update(req,res){
      model.Developer.update({
        workHours: req.body.workHours,
        developerType: req.body.developerType,
        languages: req.body.languages,
        skills:req.body.skills,
      }, {where: {userId: req.user.id}}).then(function(){
            res.send({success:true});
        }).catch(err => res.send({error:err}));
    },

    delete (req,res){
        model.Developer.destroy(   
         {where: {userId: req.user.id}}).then(function(){
           res.send({success:true});
        }).catch(err => {res.send({req: req}); 
        console.log(err)}
        );      
    },

    showProfile(req,res){

      model.User.findAll({where: {id: req.user.id}, include: ['developer']})
      .then(function(developer){    
        res.send(developer)
      })
      .catch(err => res.status(400).json('Error: ' + err));
  
    }

}

