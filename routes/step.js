const Router = require('koa-router');
const router = new Router();
const { getStep, getStepWithRoles } = require('../controllers/step');

router
  .get('/:stepId', getStep);

module.exports = router.routes();