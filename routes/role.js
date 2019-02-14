const Router = require('koa-router');
const router = new Router();
const getRoles = require('../controllers/role');

router.get('/', getRoles)

module.exports = router.routes();