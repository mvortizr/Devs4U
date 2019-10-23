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
  
}

