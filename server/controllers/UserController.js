const model=require('../../models');
const passport=require('passport');
const bcrypt = require('bcryptjs');
const developerController=require('../controllers/DeveloperController');
const contractorController=require('../controllers/ContractorController');




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
                    photo:'',
                    residence:'',
                    socialNetworks: {},
                    available:'',
                    experience:'',
                    residence:'',
                    web: '',
                }).then(function(){
                    email=req.body.email;//Email del usuario para buscarlo
                    if(req.body.rol=='developer') developerController.associate(email);
                    else contractorController.associate(email); //function to associate the developer information
                    console.log('usuario creado');
                    res.send({success:true});
                    //res.redirect('/login');
                }).catch(err => res.status(400).json('Error: ' + err));
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
    edit(req, res){
      console.log('holis')
    
        //res.redirect('/login');
    },
    /**
        * Update the specified resource in storage.
    **/ 
    //no se ha cambiado
    edit (req,res){
        model.User.update({    
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email:req.body.email,
        aboutMe: req.body.aboutMe,
        web: req.body.web,
        photo: req.body.photo,
        residence: req.body.residence,
        socialNetworks: req.body.socialNetworks,
        available:req.body.available,
        experience: req.body.experience
        }, {where: {id: req.user.id}}).then(function(){
           if(req.user.rol=='developer') developerController.update(req,res);
           else contractorController.update(req,res);   
        }).catch(err => {res.send({req: req}); 
        console.log(err)}
        );
        
    },


    checkAuthentication(req,res){
     // console.log('req user', req.user);
      if(req.isAuthenticated()){
        res.send({user: req.user});
      } else{
        res.send({error:true});
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
        else contractorController.show(req,res);
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