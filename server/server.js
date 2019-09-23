const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require ('path');
const app = express();

const router = require('./routes/index');

const publicPath = path.join(__dirname, '..', 'public');


app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(publicPath)));
    
app.set('PORT', process.env.PORT || 5000);

//router
app.use('/', router);

//handle all get on index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
  });

app.listen(app.get('PORT'), () => 
console.log('Listening at ' + app.get('PORT')))