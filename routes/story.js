const Router = require('koa-router');
const router = new Router();
const { showResponse, saveStory, testBack }= require('../controllers/story');

router
    .get('/story', showResponse)
    .post('/story', saveStory)
    .post('/test', testBack);


module.exports = router.routes();
