const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  ctx.response.body = 'skata';
  next();
});

app.use(router.routes());

module.exports = app;
