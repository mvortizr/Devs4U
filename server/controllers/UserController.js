const model=require('../../models');
const passport=require('passport');
const bcrypt = require('bcryptjs');

module.exports={
     /**
     * Store a newly created resource in storage.
     */
    register(req,res){
        console.log('usuario creado')
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) throw err;
                model.User.create({ 
                    firstName:req.body.firstName,
                    lastName:req.body.lastName,
                    email:req.body.email,
                    password:hash,
                })
            })
        })
    },
    /**
     *Log in to the system
     */
    login(req, res, next){
        passport.authenticate('local', {
            successRedirect: '/dashboard',
            failureRedirect: '/login' 
        })(req, res, next);
    },
    /**
     *Log out to the system
     */
    logout(req, res){
        req.logout();
        res.redirect('/login');
    },
}