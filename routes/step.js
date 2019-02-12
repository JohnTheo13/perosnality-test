const Router = require('koa-router');
const router = new Router();
const { getStep, getStepWithRoles } = require('../controllers/step');

router
  .get('/:stepId', getStep)
  .get('/:stepId/roles', getStepWithRoles)

module.exports = router.routes();