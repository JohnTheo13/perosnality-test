const Router = require('koa-router');
const router = new Router();
const { getTests } = require('../controllers/test');

router
    .get('/', getTests)
    // .post('/', TestsController.addTest)
    // .put('/', TestsController.updateTest)
    // .get('/:testId', TestsController.getTestById)
    // .post('/:testId/sessions', TestsController.createTestSession)
    // .post('/:testId/sessions/:sessionId', TestsController.resumeTestSession);

module.exports = router.routes();
