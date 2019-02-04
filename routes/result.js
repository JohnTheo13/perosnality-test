const Router = require('koa-router');
const router = new Router();
const getResult = require('../controllers/result');

router.get('/:sessionId', getResult)

module.exports = router.routes();
