const model=require('../../models');
module.exports={

    associate(email) {
        model.User.findAll({
            where: {
             email:email
            }
          }).then(function(user){
              model.Developer.create({
                  userId:user[0].id,
                  workHours:0,
                  developerType:'',
                  languages:[''],
                  skills:[''],
              })
          })
    },
    update(req,res){
      model.Developer.update({
        workHours: req.body.workHours,
        developerType: req.body.developerType,
        languages: req.body.languages,
        skills:req.body.skills,
      }, {where: {id: req.user.id}}).then(function(){
            res.send({success:true});
        }).catch(err => res.send({error:err}));
    },

      /**
     * Display the specified resource.
     **/
    show(req,res){
      model.Developer.findAll({
        where: {
         userId:req.user.id
        }
      })
      .then(function(developer){    
        var userInfo = new Object();
          userInfo.user=req.user;
          userInfo.developer=developer;
          res.send(userInfo);
      })
      .catch(err => res.status(400).json('Error: ' + err));
  
    },

    /**
     * Show the form for editing the specified resource.
     **/
    /*edit(req,res){
      model.developer.findAll({
        where: {
         userId:req.user.id
        }
      }).then(function(developer){
        model.language.findAll({
        where:{
          userId:developer[0].userId
        }
      }).then(function(languages){
        model.skill.findAll({
          where:{
            userId:developer[0].userId
          }
        }).then(function(skills){
         res.render('user/developerEdit',{
            skills: skills,
            developer:developer[0],
            user: req.user,
            languages: languages
          })
      })
      })
    })
    },*/

    /**
     * Update the specified resource in storage.
     */

}

