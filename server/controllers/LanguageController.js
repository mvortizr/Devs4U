const model=require('../../models');
module.exports={

    associate(userId,languages) {
        for(var i = 0; i < languages.length; i++){
            model.language.create({ 
                userId: userId,
                language: languages[i]
            })
    }

    },

    delete(id){
        model.language.destroy({
            where: {
                userId:id
               }
        }).then(function(){
            console.log('Se eliminaron todas las lenguas papas');
        }) 
    }
}
