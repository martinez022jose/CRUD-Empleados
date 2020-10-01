const express = require('express');
const ex = express();
const mongoose = require('mongoose');
const path = require('path');

//DB conect
mongoose.connect('mongodb://localhost/empleados', {useNewUrlParser: true})
    .then((db)=>{
        console.log("DB Conect");
    })
    .catch((err) => {
        console.log(err);
    });

//Settings 
ex.set('port', 3000 || process.env.PORT);
ex.set('views', path.join(__dirname, 'views'));
ex.set('view engine', 'ejs');
ex.engine('html', require('ejs').renderFile);

//Routes
ex.use(require('./routes/routes.js'));
ex.use(express.static(path.join(__dirname, 'public')));

//Listening the server
ex.listen(ex.get('port'), () => {
    console.log("Listening the server in port", ex.get('port'));
});