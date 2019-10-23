const model=require('../../models');
const passport=require('passport');
const bcrypt = require('bcryptjs');
const developerController=require('../controllers/DeveloperController');
const languageController=require('../controllers/LanguageController');
const skillController=require('../controllers/SkillController');

module.exports={
     /***
     * Store a newly created resource in storage.
     */
    register(req,res){

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) {throw err; res.send({error:true})} 
                model.User.create({ 
                    firstName:req.body.firstName,
                    lastName:req.body.lastName,
                    email:req.body.email,
                    password:hash,
                    rol:req.body.rol,
                    aboutMe: '',
                    residence:'',
                    web: '',
                }).then(function(){
                    email=req.body.email;//Email del usuario para buscarlo
                    if(req.body.rol=='developer') developerController.associate(email); //function to associate the developer information
                    console.log('usuario creado');
                    res.send({success:true});
                    //res.redirect('/login');
                })
            })
        })
    },
    /**
     *Log in to the system
     */
    login(req, res, next){
         passport.authenticate('local', function(err, user, info) {      
            if (err) { return next(err); }
            if (!user) { return res.send({error:true}); }
            req.logIn(user, function(err) {
              if (err) { return next(err); }
              return res.send({user: user})
            });
          })(req, res, next);
    },
    /**
     *Log out to the system
     */
    logout(req, res){
        req.logout();
        req.session = null;
        res.send({success:true}) 
        
        console.log('loggin out');
        //res.redirect('/login');
    },
    /**
        * Update the specified resource in storage.
    **/ 
    update(req,res){
            model.User.update( 
                {
                    firstName:req.body.firstName,
                    lastName:req.body.lastName,
                    email:req.body.email
                },
                {returning: true, where: {id:req.user.id} }
            ).then(function(user){
                let languages = req.body.languages.split(',');
                let skills = req.body.skills.split(',');
                languageController.delete(req.user.id,languages) //Nota: primero se elimina todas sus lenguas para luego ingresar las nuevas
                languageController.associate(req.user.id,languages)   
                if(req.user.rol=='developer'){
                    developerController.update(req,res);
                    skillController.delete(req.user.id,skills)
                    skillController.associate(req.user.id,skills)
                }
            })
    },


    checkAuthentication(req,res){
      console.log('req user', req.user);
      if(req.isAuthenticated()){
        res.send({user: req.user});

      }
    },


            /**
         * Display the specified resource.
         */
        /*show(req,res){
            if(req.user.rol=='developer')developerController.show(req,res);
          },

    /**
    * Display the specified resource.
    */
    show(req,res){
        if(req.user.rol=='developer') developerController.show(req,res);
        //if(req.user.rol=='contratist')console.log('soy un contratista');
    },

        /**
         * Show the form for editing the specified resource.
         */
        /*edit(req,res){
            if(req.user.rol=='developer')developerController.edit(req,res);
        },
    /**
        * Update the specified resource in storage.
     **/



    
}