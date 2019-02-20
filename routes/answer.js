const Router = require('koa-router');
const router = new Router();
const saveAnswer = require('../controllers/answer');
const { catchErrors } = require('../handlers/errorHandlers');

router.post('/:sessionId', saveAnswer);

module.exports = router.routes();