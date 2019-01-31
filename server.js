const Koa = require('koa')
const Router = require('koa-router')
const logger = require('koa-logger')
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')
const config = require('./config')

const app = new Koa()
const router = new Router()

if (config.env === 'development') {
  app.use(logger())
}

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
