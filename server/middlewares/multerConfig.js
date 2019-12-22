/*import multer from 'multer';

const storage = multer.diskStorage({
    destination: './files',
    filename(req, file, cb) {
      cb(null, `${new Date()}-${file.originalname}`);
    },
});

/* 
  Initialize multer. 
  You can also specify multer configuraitons here.
  To limit filesize, you can do something like this:
  multer({
    limits: {
      fileSize: 1 * 1024 * 1024    // Equivalent of 1MB
    }
  });
  NOTE: If you are going to add multer configurations 
  that can lead to errors, ensure to handle the errors properly.
  More details on multer configuration here: https://github.com/expressjs/multer

const upload = multer({storage});
*/
/*
  This middleware would check the form-data coming from the client,
  if there is a single file named 'image', it would make the file 
  available in the server as req.file
  Consequently, (if there is an image uplaod) { req.file === <the image> }
  More details at https://github.com/expressjs/multer

export const parseImageUpload = (req, res) => {
  return upload.single('user-image');
};*/


const multer = require('multer')
const path = require('path')

module.exports = {
    storage : new multer.diskStorage({
        destination : path.resolve(__dirname, "..","uploads"),
        filename(req, file, cb) {
          cb(null, `${new Date()}-${file.originalname}`);
        }
    })
}


