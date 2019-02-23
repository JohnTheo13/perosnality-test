const Router = require('koa-router');
const router = new Router();
const { restartTest, resumeShort, getTests, getTestById, createTestSession, resumeTestSession } = require('../controllers/test');
const { catchErrors } = require('../handlers/errorHandlers');

router
    .get('/', catchErrors(getTests))
    // .post('/', TestsController.addTest)
    // .put('/', TestsController.updateTest)
    .get('/:testId', catchErrors(getTestById))
    .post('/:testId/sessions/:userId', createTestSession)
    .post('/sessions/:sessionId', restartTest)
    .get('/sessions/:userId', resumeTestSession)
    .get('/:testId/short/:userId', resumeShort);

module.exports = router.routes();
