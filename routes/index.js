module.exports = (router) => {
  router.prefix('/test-provider/v1');
  router.use('/tests', require('./test'));
}
