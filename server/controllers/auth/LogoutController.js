module.exports={
    logout(req, res){
        req.logout();
        req.session = null;
        res.send({success:true}) 
    },
}