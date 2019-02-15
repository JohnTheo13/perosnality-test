const Router = require('koa-router');
const router = new Router();
const { getAllRoles, getRoles } = require('../controllers/role');

router
  .get('/', getAllRoles)
  .get('/:roleIds', getRoles);

module.exports = router.routes();