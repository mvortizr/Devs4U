const multer = require('multer')
const path = require('path')

module.exports = {
    storage : new multer.diskStorage({
      destination:(req,file,cb)=>{
        cb(null,path.join(__dirname+'/uploads'));
},
        filename(req, file, cb) {
          //cb(null, `${new Date()}-${file.originalname}`);
          cb(null,new Date().getTime()+path.extname(file.originalname))//Encripta la info de la foto
        }
    })
}


