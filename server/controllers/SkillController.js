const model=require('../../models');
module.exports={

    associate(userId,skills) {
        for(var i = 0; i < skills.length; i++){
            model.skill.create({ 
                userId: userId,
                name: skills[i]
            })
    }

    },

    delete(id){
        model.skill.destroy({
            where: {
                userId:id
               }
        })
    }
}