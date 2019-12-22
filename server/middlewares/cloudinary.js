
const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'marycloudinary',
    api_key: '825494769755785',
    api_secret: 'fLSqyXKrNc5VbA5HzBwkYUIxXwg',
});


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