const express = require('express');
const app = express();
const path = require ('path');
const morgan = require('morgan');

//settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
//middlewares
app.use(morgan('dev'));

//routers
app.use(require('./routes'));

//Static files
app.use(express.static(path.join(__dirname, 'public')))
//Listening server
app.listen(app.get('port'), () => {
console.log('Server on port', app.get('port'));
});