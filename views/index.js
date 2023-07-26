const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();


app.set('views', path.join(__dirname, 'views'));


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
