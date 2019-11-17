const express = require('express');
const bodyParser = require('body-parser');
const pg=require('pg');
const cors = require('cors');
const path = require ('path');
const app = express();
const passport = require('passport');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');


const publicPath = path.join(__dirname, '..', 'public');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(publicPath)));
app.use(cookieSession({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());
require('../config/passport')(passport);

    
app.set('PORT', process.env.PORT || 5000);

app.use('/',require('./routes'))


app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(app.get('PORT'), () => 
console.log('Listening at ' + app.get('PORT')))