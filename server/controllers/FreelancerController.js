const model=require('../models');

module.exports={

    guardarUsuario(req,res,usuarioId){
        model.Freelancer.create({
            usuarioId:usuarioId,
            tiempoExperiencia:req.body.tiempoExperiencia,
            tipoFreelancer: req.body.tipoFreelancer,
            status: req.body.status,
            habilidades:req.body.habilidades
          })
          .then(function(){ res.status(200).send({message:'El usuario se ha creado correctamente'}) })
          .catch(err => res.status(400).json('Error: ' + err));
    },
    
    consultarPerfil(req,res){
        model.User.findAll({
            where: {id: req.user.id},
            include:['freelancer','educacion','experiencia']
        })
        .then(function(freelancer){res.send(freelancer)})
        .catch(err => res.status(400).json('Error: ' + err));
    },

    modificarPerfil(req,res){

        /*Esto quedo asqueroso pero funciona*/

        promiseArray=[]
        promiseArray.push(
            model.Freelancer.update({
                tiempoExperiencia:req.body.user.tiempoExperiencia,
                tipoFreelancer: req.body.nuevoTipoFreelancer,
                //status: req.body.user.status,
                habilidades:req.body.nuevasHabilidades,
                seniority:req.body.nuevoTipoSeniority
            },{where: {usuarioId: req.user.id}})
        )

        let deletedEdu = req.body.deletedEducaciones
        if (deletedEdu.length>=1 && deletedEdu!== null && deletedEdu!==undefined){
            deletedEdu.map( edu => {
                promiseArray.push(
                    model.Educacion.destroy({
                        where:{
                            id:edu
                        }
                    })
                )//push
            })
        }

        let newEdu = req.body.newEdu
        if(newEdu.length>=1 && newEdu!== null && newEdu!==undefined){
            newEdu.map( edu =>{
                promiseArray.push(
                    model.Educacion.create({
                        freelancerId:req.user.id,
                        tituloObtenido:edu.tituloObtenido,
                        anoInicio:edu.anoInicio,
                        anoFin:edu.anoFin,
                        institucion:edu.institucion,
                    })
                )
            })
        }


        let modEdu = req.body.modifiedEdu

        if(modEdu.length>=1 && modEdu!== null && modEdu!==undefined){
            modEdu.map( edu =>{
                promiseArray.push(
                    model.Educacion.update({
                        tituloObtenido:edu.tituloObtenido,
                        anoInicio:edu.anoInicio,
                        anoFin:edu.anoFin,
                        institucion:edu.institucion,
                    },{where:{id:edu.id}})
                )
            })
        }

        let deletedExp = req.body.deletedExperiencias
        
        if (deletedExp.length>=1 && deletedExp!== null && deletedExp!==undefined){
            deletedExp.map( experiencia => {
                promiseArray.push(
                    model.Experiencia.destroy({
                        where:{
                            id:experiencia
                        }
                    })
                )//push
            })
        }

        let newExp = req.body.newExp
        if(newExp.length>=1 && newExp!== null && newExp!==undefined){
            newExp.map( exp =>{
                promiseArray.push(
                   model.Experiencia.create({
                        freelancerId: req.user.id,
                        nombreEmpresa: exp.nombreEmpresa,
                        descripcion: exp.descripcion,
                        cargo: exp.cargo,
                        anoInicio: exp.anoInicio,
                        anoFin: exp.anoFin
                    })
                )
            })
        }

        let modExp= req.body.modifiedExp

        if(modExp.length>=1 && modExp!== null && modExp!==undefined){
            modExp.map( experiencia =>{
                promiseArray.push(
                    model.Experiencia.update({
                        nombreEmpresa: experiencia.nombreEmpresa,
                        descripcion: experiencia.descripcion,
                        cargo: experiencia.cargo,
                        anoInicio: experiencia.anoInicio,
                        anoFin: experiencia.anoFin
                    },{where:{id:experiencia.id}})
                )
            })
        }






        
        Promise.all(promiseArray)
        .then(function(){ res.send(200,{message:'El usuario se ha modificado correctamente'})})
        .catch(err => res.status(400).json('Error: ' + err));


    },
    
    eliminarPerfil(req,res){
        model.Freelancer.destroy({
            where: {usuarioId: req.user.id}
        })
        .then(function () {res.send(200,{message:'Usuario eliminado exitosamente'})})
        .catch((error) => { res.status(400).send(error); });
    },

    consultarPerfilFreelancer(req,res){
        model.User.findAll({where:{
            id: req.params.id,
            rol:'freelancer'
        },
        include:['freelancer','educacion','experiencia']
        })
        .then(function(freelancer){
            if(freelancer=='') res.status(400).json('Este id no esta asociado a un freelancer')
            else res.send(freelancer)})
        .catch(err => res.status(400).json('Error: ' + err));
    },

    listarFreelancers(req,res){
        model.User.findAndCountAll({
            offset:(req.body.page-1) * req.body.pageSize,
            limit:req.body.pageSize,
            where:{rol:'freelancer'},
            //include:['freelancer','educacion','experiencia']
        })
        .then(function(freelancers){   
            res.status(400).send(freelancers)    
            /*model.Freelancer.count()
            .then( function(count){ 
                res.send({freelancers:freelancers, count:count})       
            })
            .catch(err => res.status(400).json('Error: ' + err));*/
        })
        .catch(err => res.status(400).json('Error: ' + err));
    },


}