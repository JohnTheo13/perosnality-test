const Router = require('koa-router');
const router = new Router();
const { showResponse, saveStory }= require('../controllers/story');

router
    .get('/story', showResponse)
    .post('/story', saveStory);

module.exports = router.routes();
