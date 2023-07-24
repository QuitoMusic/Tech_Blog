const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');
const controller = require('./controllers/controller');
const sequelize = require('./config/connection');
const moment = require('moment');
const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions with cookies
const sess = {
  secret: 'super_secret_secret', // Choose a secret for session data
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({
  helpers: {
    formatDate: function (date, format) {
      return moment(date).format(format);
    },
  },
});

// Set up Handlebars.js as the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static directory
app.use(express.static(path.join(__dirname, 'public')));

// User Authentication Routes
app.post('/signup', controller.signup);
app.post('/login', controller.login);
app.post('/logout', controller.logout);

app.get('/signup', (req, res) => {
  res.render('signup'); 
});

app.get('/login', (req, res) => {
  res.render('login'); 
});

app.get('/logout', (req, res) => {
  res.render('logout'); 
});

// Blog Post Routes
app.get('/', controller.homepage);
app.get('/post/:id', controller.showPost);
app.post('/create', controller.createPost);
app.post('/delete/:id', controller.deletePost);

app.get('/dashboard', (req, res) => {
  res.render('dashboard'); 
});

// Comment Routes
app.post('/comment/:id', controller.createComment);
app.post('/deleteComment/:id', controller.deleteComment);

// Sync Sequelize models and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

