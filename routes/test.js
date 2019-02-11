const Router = require('koa-router');
const router = new Router();
const { getTests, getTestById, createTestSession, resumeTestSession } = require('../controllers/test');
const { catchErrors } = require('../handlers/errorHandlers');

router
    .get('/', catchErrors(getTests))
    // .post('/', TestsController.addTest)
    // .put('/', TestsController.updateTest)
    .get('/:testId', catchErrors(getTestById))
    .post('/:testId/sessions/:userId', createTestSession)
    .get('/:testId/sessions/:sessionId', resumeTestSession);

module.exports = router.routes();
