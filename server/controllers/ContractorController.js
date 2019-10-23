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
          userInfo.contractor=contractor;
          res.send(userInfo);
      })
      .catch(err => res.status(400).json('Error: ' + err));
  
    },
  
}

