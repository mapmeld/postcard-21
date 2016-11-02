'use strict';

let home = (() => {
  var _ref = _asyncToGenerator(function* (ctx) {
    ctx.render('index');
  });

  return function home(_x) {
    return _ref.apply(this, arguments);
  };
})();

let card = (() => {
  var _ref2 = _asyncToGenerator(function* (ctx) {
    ctx.render('card');
  });

  return function card(_x2) {
    return _ref2.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const path = require('path');

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const convert = require('koa-convert');
const session = require('koa-generic-session');
const MongoStore = require('koa-generic-session-mongo');
const jade = require('koa-jade-render');
const router = require('koa-router')();
const compression = require('koa-compress');
const mongoose = require('mongoose');
const csrf = require('koa-csrf');
const kstatic = require('koa-static');

console.log('Connecting to MongoDB (required)');
mongoose.connect(process.env.MONGOLAB_URI || process.env.MONGODB_URI || 'localhost');
mongoose.connection.on("error", function (err) {
  console.log(err);
});

var app = new Koa();
app.use(jade(path.join(__dirname, 'views')));

app.use(convert(kstatic(__dirname + '/static')));
app.use(bodyParser());
app.use(compression());

app.keys = ['wkpow3jocijoid3jioj3', 'cekopjpdjjo3jcjio3jc'];
app.use(convert(session({
  store: new MongoStore()
})));

csrf(app);
app.use(convert(csrf.middleware));

router.get('/', home).get('/card', card);

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.PORT || 8080);

module.exports = app;

