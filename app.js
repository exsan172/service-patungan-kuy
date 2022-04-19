require("dotenv").config()

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors   = require("cors")
const config = require("./config")
config.database()

const serviceRoutes = require('./routes/service.route');
const authRoutes = require('./routes/auth.route');
const dashboardRoutes = require("./routes/dashboard.route")

var app = express();

const corsOption = {
  origin : process.env.ALLOW_URL
}

app.use(cors(corsOption))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('common'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(`/api/${process.env.API_VERSION}/service`, serviceRoutes);
app.use('/api/${process.env.API_VERSION}/auth', authRoutes);
app.use('/api/${process.env.API_VERSION}/dashboard', dashboardRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  config.response(res, 404, "Path not found.")
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
