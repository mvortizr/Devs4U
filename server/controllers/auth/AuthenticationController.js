module.exports={
    checkAuthentication(req,res){
        if(req.isAuthenticated()){
          res.send({user: req.user});
        } else{
          res.send({error:true});
        }
      }
}