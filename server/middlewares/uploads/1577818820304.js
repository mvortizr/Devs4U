const express = require('express');
const morgan=require('morgan')
const multer=require('multer')
const path=require('path')
const exphbs=require('express-handlebars')
const app = express();
const fs=require('fs-extra')




//Settings
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
  defaultLayout:'main',
  layoutsDir: path.join(app.get('views'),'layouts'),
  partialsDir:path.join(app.get('views'),'partials'),
  extname:'hbs'
}))

app.set('view engine','.hbs')

//Middelwares

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))



const storage=multer.diskStorage({
  destination:path.join(__dirname,'public/uploads'),
  filename:(req,file,cb)=>{
    cb(null,new Date().getTime()+path.extname(file.originalname))//Encripta la info de la foto
  }
})

app.use(multer({storage}).single('image'))
app.set('puerto', process.env.PORT || 3000);
app.use('/',require('./routes'))
app.listen(app.get('puerto'), () => {
  console.log('Example app listening on port'+ app.get('puerto'));
});