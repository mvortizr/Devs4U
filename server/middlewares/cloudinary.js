
const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'marycloudinary',
    api_key: '825494769755785',
    api_secret: 'fLSqyXKrNc5VbA5HzBwkYUIxXwg',
});

/*
cloudinary.v2.uploader.upload_stream(cloudinaryOptions, function (error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }).end(image.buffer);

      cloudinary.uploader.upload(
      path,
      { public_id: `blog/${uniqueFilename}`, tags: `blog` }, // directory and tags are optional
      function(err, image) {
        if (err) return res.send(err)
        console.log('file uploaded to Cloudinary')

        var fs = require('fs')
        fs.unlinkSync(path)

        res.json(image)
      }
    )

       const cloudinaryOptions = {
      resource_type: 'raw', 
      folder: 'devs4U',
    }
*/

const uploadImage = (image) => {
    let uniqueFilename = new Date().toISOString();
    let imageconfig ={resource_type: "image", public_id: `devs4u/${uniqueFilename}`,
    overwrite: true};
    return new Promise((resolve, reject) => {
      cloudinary.v2.uploader.upload(image.path, imageconfig,
      function(error, result) {console.log(result, error) 
        resolve(result)});
    });
};

module.exports = uploadImage;