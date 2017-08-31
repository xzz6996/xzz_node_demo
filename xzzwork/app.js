var express = require('express');
var request=require("request");
var cheerio=require("cheerio");
var path = require('path');
var ejs=require("ejs");
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index/index');
var admin = require('./routes/admin/admin');
var login = require('./routes/admin/login');
var user = require('./routes/admin/user');
var member = require('./routes/admin/member');
var bumen = require('./routes/admin/bumen');
var news = require('./routes/admin/news');
var ajax = require('./routes/index/ajax');

var app = express();
app.listen(7777,function () {
    console.log("start");
})


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/admin', admin);
app.use('/login', login);
app.use('/user', user);
app.use('/member', member);
app.use('/bumen', bumen);
app.use('/news', news);
app.use('/ajax', ajax);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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


