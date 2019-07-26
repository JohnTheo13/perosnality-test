const Koa = require('koa')
const Router = require('koa-router')
const logger = require('koa-logger')
const cors = require('@koa/cors')
const session = require('koa-session');
const bodyParser = require('koa-bodyparser')
const config = require('./config')
const views = require('koa-views');
const serve = require('koa-static');

const app = new Koa()
const router = new Router()

if (config.env === 'development') {
  app.use(logger())
}

// Must be used before any router is used
app.use(views(__dirname + '/views', { extension: 'pug' }));

app.use(serve(__dirname + '/public'));

app.keys = [config.sessionSecret];

app.use(session({
  key: config.sessionKey, // cookieKey
  maxAge: 259200000, // 3 days
}, app))


// for multipart/form-data
app.use(bodyParser({
  enableTypes: ['json', 'form'],
  jsonLimit: '5mb',
  onerror: function (err, ctx) {
    ctx.throw('body parse error', 422)
  }
}))

app.use(cors())

// API routes
require('./routes')(router)
app.use(router.routes())
app.use(router.allowedMethods())

module.exports = app
