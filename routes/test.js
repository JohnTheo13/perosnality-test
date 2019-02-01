const Router = require('koa-router');
const router = new Router();
const { getTests, getTestById, createTestSession } = require('../controllers/test');
const { catchErrors } = require('../handlers/errorHandlers');

router
    .get('/', catchErrors(getTests))
    // .post('/', TestsController.addTest)
    // .put('/', TestsController.updateTest)
    .get('/:testId', catchErrors(getTestById))
    .post('/:testId/sessions', createTestSession)
    // .post('/:testId/sessions/:sessionId', TestsController.resumeTestSession);

module.exports = router.routes();
