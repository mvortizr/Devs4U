const model=require('../../models');
module.exports={

    associate(email) {
        model.User.findAll({
            where: {
             email:email
            }
          }).then(function(user){
              model.Contractor.create({
                  workSearch:'',
                  enterprise:'',
                  userId:user[0].id,
              })
          })
    },

    show(req,res){
      model.Contractor.findAll({
        where: {
         userId:req.user.id
        }
      })
      .then(function(contractor){    
        var userInfo = new Object();
          userInfo.user=req.user;
          userInfo.contractor=contractor[0];
          res.send(userInfo);
      })
      .catch(err => res.status(400).json('Error: ' + err));
  
    },

    update(req,res){
      model.Contractor.update({
        workSearch: req.body.workSearch,
        enterprise: req.body.enterprise,
      }, {where: {userId: req.user.id}}).then(function(){
            res.send({success:true});
        }).catch(err => res.status(400).send({error:err}));
    },

    delete (req,res){
        model.Contractor.destroy({    
         {where: {userId: req.user.id}}).then(function(){
           res.send({success:true});
        }).catch(err => {res.send({req: req}); 
        console.log(err)}
        );      
    },
  
}

